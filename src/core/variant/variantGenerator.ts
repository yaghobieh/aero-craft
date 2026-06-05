import { readFileSync, existsSync } from 'node:fs';
import { globSync } from 'glob';
import type { AeroCraftResolvedConfig } from '../../types/config.types';
import { escapeCssClassIdent } from '../cssEscape';
import {
  VARIANT_SELECTOR_MAP,
  KNOWN_SELECTOR_VARIANTS,
  MEDIA_VARIANT_MAP,
  ALL_STATIC_VARIANTS,
  NAMED_SUPPORTS_MAP,
  RESPONSIVE_NAMES,
  DEFAULT_VARIANT_BREAKPOINTS,
  COLORS,
  PRIMARY_SHADES,
  OPACITY_DIVISOR,
  SAMPLE_SELECTOR,
  HEX_R_START, HEX_R_END,
  HEX_G_START, HEX_G_END,
  HEX_B_START, HEX_B_END,
  HEX_RADIX,
} from './variantGenerator.const';

/* ============================== Dynamic Variant Resolution ============================== */

function resolveDynamicSelectorVariant(variant: string): ((sel: string) => string) | null {
  const ariaMatch = variant.match(/^aria-(.+)$/);
  if (ariaMatch) {
    return (s) => `.${s}[aria-${ariaMatch[1]}="true"]`;
  }
  const dataMatch = variant.match(/^data-(.+)$/);
  if (dataMatch) {
    return (s) => `.${s}[data-${dataMatch[1]}]`;
  }
  return null;
}

function resolveSupportsQuery(variant: string): string | null {
  const bracketMatch = variant.match(/^supports-\[(.+)\]$/);
  if (bracketMatch) {
    const value = bracketMatch[1].replace(/_/g, ' ');
    return `@supports (${value})`;
  }
  return NAMED_SUPPORTS_MAP[variant] ?? null;
}

function isContainerVariant(variant: string): boolean {
  return variant === '@container' || variant.startsWith('@container/');
}

const CONTAINER_PREFIX = '@container/';

function resolveContainerQuery(variant: string): string {
  if (variant.startsWith(CONTAINER_PREFIX)) {
    const name = variant.slice(CONTAINER_PREFIX.length);
    return `@container ${name}`;
  }
  return '@container';
}

/* ============================== Color Utilities ============================== */

function resolveColor(name: string): string | null {
  const pm = name.match(/^primary-(\d+)$/);
  if (pm && PRIMARY_SHADES.includes(pm[1])) return `var(--${name.replace('primary', 'bear-primary')})`;
  if (typeof COLORS[name] === 'string') return COLORS[name] as string;
  const m = name.match(/^(\w+)-(\d+)$/);
  if (m) {
    const palette = COLORS[m[1]];
    if (palette && typeof palette === 'object' && palette[m[2]]) return palette[m[2]];
  }
  return null;
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  return [
    parseInt(h.slice(HEX_R_START, HEX_R_END), HEX_RADIX),
    parseInt(h.slice(HEX_G_START, HEX_G_END), HEX_RADIX),
    parseInt(h.slice(HEX_B_START, HEX_B_END), HEX_RADIX),
  ];
}

/* ============================== Utility → CSS Declarations ============================== */

type CssDecl = [string, string];

function propToCss(utilProp: string, value: string): CssDecl[] | null {
  const map: Record<string, CssDecl[]> = {
    bg:          [['background-color', value]],
    text:        [['color', value]],
    border:      [['border-color', value]],
    ring:        [['--ac-ring-color', value]],
    divide:      [['border-color', value]],
    from:        [['--tw-gradient-from', value]],
    to:          [['--tw-gradient-to', value]],
    via:         [['--tw-gradient-via', value]],
    shadow:      [['--tw-shadow-color', value]],
    placeholder: [['color', value]],
    fill:        [['fill', value]],
    stroke:      [['stroke', value]],
  };
  return map[utilProp] || null;
}

function resolveUtilityDecls(className: string): CssDecl[] | null {
  const cls = className.replace(/^!/, '').replace(/!$/, '');

  const opacityMatch = cls.match(/^(\w+-)?(bg|text|border|ring|divide|from|to|via|fill|stroke)-(.+?)\/(\d+)$/);
  if (opacityMatch) {
    const [, _pfx, prop, colorName, opacityStr] = opacityMatch;
    const resolved = resolveColor(colorName);
    if (!resolved) return null;
    const opacity = parseInt(opacityStr, 10) / OPACITY_DIVISOR;
    if (resolved.startsWith('#')) {
      const [r, g, b] = hexToRgb(resolved);
      return propToCss(prop, `rgba(${r}, ${g}, ${b}, ${opacity})`);
    }
    if (resolved.startsWith('var(')) {
      return propToCss(prop, `color-mix(in srgb, ${resolved} ${Math.round(opacity * OPACITY_DIVISOR)}%, transparent)`);
    }
    return null;
  }

  const arbMatch = cls.match(/^(\w+-)?(bg|text|border|ring)-\[(.+)\]$/);
  if (arbMatch) {
    const [, , prop, rawVal] = arbMatch;
    return propToCss(prop, rawVal);
  }

  const stdMatch = cls.match(/^(\w+-)?(bg|text|border|ring|divide|from|to|via|shadow|placeholder|fill|stroke)-(.+)$/);
  if (stdMatch) {
    const [, , prop, colorName] = stdMatch;
    const hex = resolveColor(colorName);
    if (hex) return propToCss(prop, hex);
    return null;
  }

  return null;
}

/* ============================== Variant Token Scanning ============================== */

interface VariantToken {
  baseClass: string;
  selectorVariants: string[];
  mediaVariants: string[];
  dynamicVariants: string[];
  containerQuery: string | null;
  supportsQuery: string | null;
  responsive: string | null;
}

function buildVariantPattern(): string {
  const staticParts = ALL_STATIC_VARIANTS.map(v => v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const dynamicParts = [
    'aria-[\\w-]+',
    'data-[\\w-]+',
    'supports-[\\w-]+',
    'supports-\\[[^\\]]+\\]',
    '@container(?:\\/[\\w-]+)?',
  ];
  return `(?:${[...staticParts, ...dynamicParts].join('|')})`;
}

function buildTokenRegex(prefix: string): RegExp {
  const p = prefix ? `${prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}` : '';
  const sep = '-';
  const variantPat = buildVariantPattern();
  return new RegExp(
    `(?:^|[\\s"'\`])((?:(?:sm:|md:|lg:|xl:|2xl:)?(?:${variantPat}):)+(!?${p}${sep}[\\w.\\[\\]/@-]+!?))`,
    'g',
  );
}

function buildBaseTokenRegex(prefix: string): RegExp {
  const p = prefix ? `${prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-` : '';
  return new RegExp(
    `(?:^|[\\s"'\`])(${p}(?:bg|text|border|ring|fill|stroke)-(?:white|black|transparent|current|primary-\\d+)(?:\\/\\d+)?)\\b`,
    'g',
  );
}

function classifyVariant(
  part: string,
): { type: 'selector' | 'media' | 'dynamic' | 'container' | 'supports' | 'responsive' | 'unknown'; value: string } {
  if ((RESPONSIVE_NAMES as readonly string[]).includes(part)) {
    return { type: 'responsive', value: part };
  }
  if (VARIANT_SELECTOR_MAP[part]) {
    return { type: 'selector', value: part };
  }
  if (MEDIA_VARIANT_MAP[part]) {
    return { type: 'media', value: part };
  }
  if (isContainerVariant(part)) {
    return { type: 'container', value: part };
  }
  if (resolveSupportsQuery(part)) {
    return { type: 'supports', value: part };
  }
  if (resolveDynamicSelectorVariant(part)) {
    return { type: 'dynamic', value: part };
  }
  return { type: 'unknown', value: part };
}

function extractVariantTokens(content: string, prefix: string): Map<string, VariantToken> {
  const tokens = new Map<string, VariantToken>();
  const re = buildTokenRegex(prefix);
  let m: RegExpExecArray | null;
  while ((m = re.exec(content)) !== null) {
    const full = m[1];
    if (tokens.has(full)) continue;

    const parts = full.split(':');
    const baseClass = parts.pop()!;
    const selectorVariants: string[] = [];
    const mediaVariants: string[] = [];
    const dynamicVariants: string[] = [];
    let containerQuery: string | null = null;
    let supportsQuery: string | null = null;
    let responsive: string | null = null;

    for (const part of parts) {
      const classified = classifyVariant(part);
      switch (classified.type) {
        case 'responsive': responsive = classified.value; break;
        case 'selector': selectorVariants.push(classified.value); break;
        case 'media': mediaVariants.push(classified.value); break;
        case 'dynamic': dynamicVariants.push(classified.value); break;
        case 'container': containerQuery = resolveContainerQuery(classified.value); break;
        case 'supports': supportsQuery = resolveSupportsQuery(classified.value); break;
        default: break;
      }
    }

    const hasVariants = selectorVariants.length > 0 || mediaVariants.length > 0 ||
      dynamicVariants.length > 0 || containerQuery || supportsQuery;

    if (hasVariants && baseClass) {
      tokens.set(full, { baseClass, selectorVariants, mediaVariants, dynamicVariants, containerQuery, supportsQuery, responsive });
    }
  }
  return tokens;
}

/* ============================== Compound Selector Builder ============================== */

function buildCompoundSelector(
  escapedToken: string,
  selectorVariants: string[],
  dynamicVariants: string[],
  darkSelectors: string[],
): string {
  const allVariants = [...selectorVariants, ...dynamicVariants];
  if (allVariants.length === 0) return `.${escapedToken}`;

  if (allVariants.length === 1) {
    const v = allVariants[0];
    if (v === 'dark') return darkSelectors.map(ds => `${ds} .${escapedToken}`).join(', ');
    const buildSel = VARIANT_SELECTOR_MAP[v];
    if (buildSel) return buildSel(escapedToken);
    const dynFn = resolveDynamicSelectorVariant(v);
    if (dynFn) return dynFn(escapedToken);
    return `.${escapedToken}`;
  }

  let parts = [`.${escapedToken}`];
  const reversed = [...allVariants].reverse();
  for (const v of reversed) {
    if (v === 'dark') {
      parts = parts.flatMap(s => darkSelectors.map(ds => `${ds} ${s}`));
      continue;
    }

    const staticFn = VARIANT_SELECTOR_MAP[v];
    if (staticFn) {
      const sample = staticFn(SAMPLE_SELECTOR);
      if (sample.includes('.bear-group') || sample.includes('.bear-peer')) {
        const relPart = sample.split(`.${SAMPLE_SELECTOR}`)[0];
        parts = parts.map(s => `${relPart} ${s}`);
      } else {
        const pseudo = sample.split(`.${SAMPLE_SELECTOR}`)[1];
        parts = parts.map(s => `${s}${pseudo}`);
      }
      continue;
    }

    const dynFn = resolveDynamicSelectorVariant(v);
    if (dynFn) {
      const sample = dynFn(SAMPLE_SELECTOR);
      const attr = sample.split(`.${SAMPLE_SELECTOR}`)[1];
      parts = parts.map(s => `${s}${attr}`);
    }
  }
  return parts.join(', ');
}

/* ============================== Main: Variant CSS Generation ============================== */

export interface VariantOptions {
  darkSelector?: string;
}

export function generateVariantCSS(
  config: AeroCraftResolvedConfig,
  baseRuleMap: Map<string, Array<[string, string]>>,
  opts: VariantOptions = {},
): string {
  if (config.content.length === 0) return '';

  const prefix = config.prefix;
  const rawDarkSel = opts.darkSelector || '.dark, .bear-dark';
  const darkSelectors = rawDarkSel.split(',').map(s => s.trim()).filter(Boolean);
  const breakpoints: Record<string, string> = {
    ...DEFAULT_VARIANT_BREAKPOINTS,
    ...config.breakpoints as Record<string, string>,
  };

  const allTokens = new Map<string, VariantToken>();
  const allBaseTokens = new Set<string>();

  const baseRe = buildBaseTokenRegex(prefix);

  for (const pattern of config.content) {
    const files = globSync(pattern, { nodir: true, ignore: ['**/node_modules/**'] });
    for (const file of files) {
      if (!existsSync(file)) continue;
      const src = readFileSync(file, 'utf8');

      const tokens = extractVariantTokens(src, prefix);
      for (const [key, val] of tokens) {
        if (!allTokens.has(key)) allTokens.set(key, val);
      }

      let bm: RegExpExecArray | null;
      while ((bm = baseRe.exec(src)) !== null) {
        allBaseTokens.add(bm[1]);
      }
    }
  }

  const lines: string[] = [];

  for (const [fullToken, token] of allTokens) {
    const { baseClass, selectorVariants, mediaVariants, dynamicVariants, containerQuery, supportsQuery, responsive } = token;
    const cleanBase = baseClass.replace(/^!/, '').replace(/!$/, '');
    const isImportant = baseClass.startsWith('!') || baseClass.endsWith('!');

    let decls: Array<[string, string]> = [];
    const baseDecls = baseRuleMap.get(cleanBase);
    if (baseDecls) {
      decls = baseDecls;
    } else {
      const resolved = resolveUtilityDecls(cleanBase);
      if (resolved) decls = resolved;
    }

    if (decls.length === 0) continue;

    const escapedToken = escapeCssClassIdent(fullToken);
    const selector = buildCompoundSelector(escapedToken, selectorVariants, dynamicVariants, darkSelectors);

    const block = decls.map(([p, v]) =>
      isImportant ? `  ${p}: ${v} !important;` : `  ${p}: ${v};`
    ).join('\n');
    let rule = `${selector} {\n${block}\n}`;

    const wrappers: string[] = [];
    if (responsive) {
      const bp = breakpoints[responsive];
      if (bp) wrappers.push(`@media (min-width: ${bp})`);
    }
    for (const mv of mediaVariants) {
      const mq = MEDIA_VARIANT_MAP[mv];
      if (mq) wrappers.push(mq);
    }
    if (supportsQuery) wrappers.push(supportsQuery);
    if (containerQuery) wrappers.push(containerQuery);

    for (const wrapper of wrappers.reverse()) {
      rule = `${wrapper} {\n  ${rule.split('\n').join('\n  ')}\n}`;
    }

    lines.push(rule);
  }

  for (const cls of allBaseTokens) {
    if (baseRuleMap.has(cls)) continue;
    const resolved = resolveUtilityDecls(cls);
    if (!resolved) continue;
    const sel = escapeCssClassIdent(cls);
    const block = resolved.map(([p, v]) => `  ${p}: ${v};`).join('\n');
    lines.push(`.${sel} {\n${block}\n}`);
    baseRuleMap.set(cls, resolved);
  }

  return lines.join('\n\n');
}
