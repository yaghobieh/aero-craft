import { readFileSync, existsSync } from 'node:fs';
import { globSync } from 'glob';
import type { AeroCraftResolvedConfig } from '../types/config.types';
import { escapeCssClassIdent } from './cssEscape';

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Variant → CSS selector map                                                */
/* ─────────────────────────────────────────────────────────────────────────── */

const VARIANT_SELECTOR_MAP: Record<string, (sel: string) => string> = {
  dark:           (s) => `.dark .${s}`,
  hover:          (s) => `.${s}:hover`,
  focus:          (s) => `.${s}:focus`,
  'focus-visible': (s) => `.${s}:focus-visible`,
  'focus-within': (s) => `.${s}:focus-within`,
  active:         (s) => `.${s}:active`,
  disabled:       (s) => `.${s}:disabled`,
  'group-hover':  (s) => `.bear-group:hover .${s}`,
  placeholder:    (s) => `.${s}::placeholder`,
  first:          (s) => `.${s}:first-child`,
  last:           (s) => `.${s}:last-child`,
  odd:            (s) => `.${s}:nth-child(odd)`,
  even:           (s) => `.${s}:nth-child(even)`,
};

const KNOWN_VARIANTS = Object.keys(VARIANT_SELECTOR_MAP);

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Color palette                                                             */
/* ─────────────────────────────────────────────────────────────────────────── */

const COLORS: Record<string, string | Record<string, string>> = {
  white: '#ffffff', black: '#000000', transparent: 'transparent', current: 'currentColor',
  zinc: { '50':'#fafafa','100':'#f4f4f5','200':'#e4e4e7','300':'#d4d4d8','400':'#a1a1aa','500':'#71717a','600':'#52525b','700':'#3f3f46','800':'#27272a','900':'#18181b','950':'#09090b' },
  gray: { '50':'#f9fafb','100':'#f3f4f6','200':'#e5e7eb','300':'#d1d5db','400':'#9ca3af','500':'#6b7280','600':'#4b5563','700':'#374151','800':'#1f2937','900':'#111827','950':'#030712' },
  slate: { '50':'#f8fafc','100':'#f1f5f9','200':'#e2e8f0','300':'#cbd5e1','400':'#94a3b8','500':'#64748b','600':'#475569','700':'#334155','800':'#1e293b','900':'#0f172a','950':'#020617' },
  neutral: { '50':'#fafafa','100':'#f5f5f5','200':'#e5e5e5','300':'#d4d4d4','400':'#a3a3a3','500':'#737373','600':'#525252','700':'#404040','800':'#262626','900':'#171717','950':'#0a0a0a' },
  red: { '50':'#fef2f2','100':'#fee2e2','200':'#fecaca','300':'#fca5a5','400':'#f87171','500':'#ef4444','600':'#dc2626','700':'#b91c1c','800':'#991b1b','900':'#7f1d1d','950':'#450a0a' },
  green: { '50':'#f0fdf4','100':'#dcfce7','200':'#bbf7d0','300':'#86efac','400':'#4ade80','500':'#22c55e','600':'#16a34a','700':'#15803d','800':'#166534','900':'#14532d','950':'#052e16' },
  blue: { '50':'#eff6ff','100':'#dbeafe','200':'#bfdbfe','300':'#93c5fd','400':'#60a5fa','500':'#3b82f6','600':'#2563eb','700':'#1d4ed8','800':'#1e40af','900':'#1e3a8a','950':'#172554' },
  yellow: { '50':'#fefce8','100':'#fef9c3','200':'#fef08a','300':'#fde047','400':'#facc15','500':'#eab308','600':'#ca8a04','700':'#a16207','800':'#854d0e','900':'#713f12','950':'#422006' },
  orange: { '50':'#fff7ed','100':'#ffedd5','200':'#fed7aa','300':'#fdba74','400':'#fb923c','500':'#f97316','600':'#ea580c','700':'#c2410c','800':'#9a3412','900':'#7c2d12','950':'#431407' },
  amber: { '50':'#fffbeb','100':'#fef3c7','200':'#fde68a','300':'#fcd34d','400':'#fbbf24','500':'#f59e0b','600':'#d97706','700':'#b45309','800':'#92400e','900':'#78350f','950':'#451a03' },
  emerald: { '50':'#ecfdf5','100':'#d1fae5','200':'#a7f3d0','300':'#6ee7b7','400':'#34d399','500':'#10b981','600':'#059669','700':'#047857','800':'#065f46','900':'#064e3b','950':'#022c22' },
  cyan: { '50':'#ecfeff','100':'#cffafe','200':'#a5f3fc','300':'#67e8f9','400':'#22d3ee','500':'#06b6d4','600':'#0891b2','700':'#0e7490','800':'#155e75','900':'#164e63','950':'#083344' },
  purple: { '50':'#faf5ff','100':'#f3e8ff','200':'#e9d5ff','300':'#d8b4fe','400':'#c084fc','500':'#a855f7','600':'#9333ea','700':'#7e22ce','800':'#6b21a8','900':'#581c87','950':'#3b0764' },
  pink: { '50':'#fdf2f8','100':'#fce7f3','200':'#fbcfe8','300':'#f9a8d4','400':'#f472b6','500':'#ec4899','600':'#db2777','700':'#be185d','800':'#9d174d','900':'#831843','950':'#500724' },
};

const PRIMARY_SHADES = ['50','100','200','300','400','500','600','700','800','900','950'];

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
  return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Utility class → CSS declarations                                          */
/* ─────────────────────────────────────────────────────────────────────────── */

type CssDecl = [string, string];

function propToCss(utilProp: string, value: string): CssDecl[] | null {
  const map: Record<string, CssDecl[]> = {
    bg:          [['background-color', value]],
    text:        [['color', value]],
    border:      [['border-color', value]],
    ring:        [['--tw-ring-color', value], ['--bear-ring-color', value]],
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
    const opacity = parseInt(opacityStr, 10) / 100;
    if (resolved.startsWith('#')) {
      const [r,g,b] = hexToRgb(resolved);
      return propToCss(prop, `rgba(${r}, ${g}, ${b}, ${opacity})`);
    }
    if (resolved.startsWith('var(')) {
      return propToCss(prop, `color-mix(in srgb, ${resolved} ${Math.round(opacity * 100)}%, transparent)`);
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

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Source-file scanning for variant tokens                                    */
/* ─────────────────────────────────────────────────────────────────────────── */

interface VariantToken {
  baseClass: string;
  variants: string[];
  responsive: string | null;
}

function buildTokenRegex(prefix: string): RegExp {
  const p = prefix ? `${prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}` : '';
  const sep = '-';
  return new RegExp(
    `(?:^|[\\s"'\`])((?:(?:sm:|md:|lg:|xl:|2xl:)?(?:${KNOWN_VARIANTS.join('|')}):)+(!?${p}${sep}[\\w.\\[\\]/-]+!?))`,
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

function extractVariantTokens(content: string, prefix: string): Map<string, VariantToken> {
  const tokens = new Map<string, VariantToken>();
  const re = buildTokenRegex(prefix);
  let m: RegExpExecArray | null;
  while ((m = re.exec(content)) !== null) {
    const full = m[1];
    if (tokens.has(full)) continue;

    const parts = full.split(':');
    const baseClass = parts.pop()!;
    const variants: string[] = [];
    let responsive: string | null = null;

    for (const part of parts) {
      if (['sm', 'md', 'lg', 'xl', '2xl'].includes(part)) {
        responsive = part;
      } else if (VARIANT_SELECTOR_MAP[part]) {
        variants.push(part);
      }
    }

    if (variants.length > 0 && baseClass) {
      tokens.set(full, { baseClass, variants, responsive });
    }
  }
  return tokens;
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Compound selector builder                                                 */
/* ─────────────────────────────────────────────────────────────────────────── */

function buildCompoundSelector(escapedToken: string, variants: string[], darkSelectors: string[]): string {
  if (variants.length === 1) {
    const v = variants[0];
    if (v === 'dark') return darkSelectors.map(ds => `${ds} .${escapedToken}`).join(', ');
    const buildSel = VARIANT_SELECTOR_MAP[v];
    return buildSel ? buildSel(escapedToken) : `.${escapedToken}`;
  }

  let parts = [`.${escapedToken}`];
  const reversed = [...variants].reverse();
  for (const v of reversed) {
    if (v === 'dark') {
      parts = parts.flatMap(s => darkSelectors.map(ds => `${ds} ${s}`));
    } else if (v === 'hover')           parts = parts.map(s => `${s}:hover`);
    else if (v === 'focus')             parts = parts.map(s => `${s}:focus`);
    else if (v === 'focus-visible')     parts = parts.map(s => `${s}:focus-visible`);
    else if (v === 'focus-within')      parts = parts.map(s => `${s}:focus-within`);
    else if (v === 'active')            parts = parts.map(s => `${s}:active`);
    else if (v === 'disabled')          parts = parts.map(s => `${s}:disabled`);
    else if (v === 'group-hover')       parts = parts.map(s => `.bear-group:hover ${s}`);
    else if (v === 'placeholder')       parts = parts.map(s => `${s}::placeholder`);
    else if (v === 'first')             parts = parts.map(s => `${s}:first-child`);
    else if (v === 'last')              parts = parts.map(s => `${s}:last-child`);
    else if (v === 'odd')               parts = parts.map(s => `${s}:nth-child(odd)`);
    else if (v === 'even')              parts = parts.map(s => `${s}:nth-child(even)`);
  }
  return parts.join(', ');
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Main: generate variant CSS from content scanning                          */
/* ─────────────────────────────────────────────────────────────────────────── */

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
    sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px',
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

  for (const [fullToken, { baseClass, variants, responsive }] of allTokens) {
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
    const selector = buildCompoundSelector(escapedToken, variants, darkSelectors);

    const block = decls.map(([p, v]) =>
      isImportant ? `  ${p}: ${v} !important;` : `  ${p}: ${v};`
    ).join('\n');
    const rule = `${selector} {\n${block}\n}`;

    if (responsive) {
      const bp = breakpoints[responsive];
      if (bp) {
        lines.push(`@media (min-width: ${bp}) {\n  ${rule.split('\n').join('\n  ')}\n}`);
      }
    } else {
      lines.push(rule);
    }
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
