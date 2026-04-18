import type { AeroCraftResolvedConfig } from '../types/config.types';
import { buildClassName } from './parser';
import { escapeCssClassIdent } from './cssEscape';

const CURLY_RE = /^(.+)-\{\{([^}]+)\}\}$/;
const BRACKET_RE = /^(.+)-\[([^\]]*)\]$/;
const PAREN_RE = /^(.+)-\(([^)]+)\)$/;

export type ArbitraryParseResult = {
  prefix: string;
  value: string;
  syntax: 'bracket' | 'curly' | 'paren';
};

function textFromValue(v: string): Record<string, string> {
  const t = v.trim();
  if (/^(#|rgb|hsl|color-mix|var\(|oklch)/i.test(t) || t === 'currentColor' || t === 'inherit' || t === 'transparent') {
    return { color: t };
  }
  return { 'font-size': t };
}

function bgFromValue(v: string): Record<string, string> {
  const t = v.trim();
  if (/^(#|rgb|hsl|linear-gradient|radial-gradient|url\(|var\(|oklch)/i.test(t)) {
    return { 'background-color': t };
  }
  return { background: t };
}

function borderColorFromValue(v: string): Record<string, string> {
  return { 'border-color': v.trim() };
}

function expandBoxShorthand(raw: string): string {
  const t = raw.trim();
  const parts = t.split(/[\s_]+/).filter(Boolean);
  if (parts.length === 4) {
    return `${parts[0]} ${parts[1]} ${parts[2]} ${parts[3]}`;
  }
  if (parts.length === 3) {
    return `${parts[0]} ${parts[1]} ${parts[2]}`;
  }
  if (parts.length === 2) {
    return `${parts[0]} ${parts[1]}`;
  }
  return t;
}

function applyPrefix(prefix: string, value: string): Record<string, string> | null {
  const v = value.trim();
  const map: Record<string, () => Record<string, string>> = {
    p: () => ({ padding: expandBoxShorthand(v) }),
    px: () => ({ 'padding-left': v, 'padding-right': v }),
    py: () => ({ 'padding-top': v, 'padding-bottom': v }),
    pt: () => ({ 'padding-top': v }),
    pr: () => ({ 'padding-right': v }),
    pb: () => ({ 'padding-bottom': v }),
    pl: () => ({ 'padding-left': v }),
    ps: () => ({ 'padding-inline-start': v }),
    pe: () => ({ 'padding-inline-end': v }),
    m: () => ({ margin: expandBoxShorthand(v) }),
    mx: () => ({ 'margin-left': v, 'margin-right': v }),
    my: () => ({ 'margin-top': v, 'margin-bottom': v }),
    mt: () => ({ 'margin-top': v }),
    mr: () => ({ 'margin-right': v }),
    mb: () => ({ 'margin-bottom': v }),
    ml: () => ({ 'margin-left': v }),
    ms: () => ({ 'margin-inline-start': v }),
    me: () => ({ 'margin-inline-end': v }),
    w: () => ({ width: v }),
    h: () => ({ height: v }),
    size: () => ({ width: v, height: v }),
    'min-w': () => ({ 'min-width': v }),
    'max-w': () => ({ 'max-width': v }),
    'min-h': () => ({ 'min-height': v }),
    'max-h': () => ({ 'max-height': v }),
    'inline-size': () => ({ 'inline-size': v }),
    'block-size': () => ({ 'block-size': v }),
    'min-inline': () => ({ 'min-inline-size': v }),
    'max-inline': () => ({ 'max-inline-size': v }),
    'min-block': () => ({ 'min-block-size': v }),
    'max-block': () => ({ 'max-block-size': v }),
    top: () => ({ top: v }),
    right: () => ({ right: v }),
    bottom: () => ({ bottom: v }),
    left: () => ({ left: v }),
    inset: () => ({ inset: v }),
    'inset-x': () => ({ left: v, right: v }),
    'inset-y': () => ({ top: v, bottom: v }),
    gap: () => ({ gap: v }),
    'gap-x': () => ({ 'column-gap': v }),
    'gap-y': () => ({ 'row-gap': v }),
    basis: () => ({ 'flex-basis': v }),
    rounded: () => ({ 'border-radius': v }),
    text: () => textFromValue(v),
    bg: () => bgFromValue(v),
    'border-t': () => ({ 'border-top-width': v }),
    'border-r': () => ({ 'border-right-width': v }),
    'border-b': () => ({ 'border-bottom-width': v }),
    'border-l': () => ({ 'border-left-width': v }),
    border: () => ({ 'border-width': v }),
    'border-color': () => borderColorFromValue(v),
    shadow: () => ({ 'box-shadow': v }),
    opacity: () => ({ opacity: v }),
    z: () => ({ 'z-index': v }),
    leading: () => ({ 'line-height': v }),
    tracking: () => ({ 'letter-spacing': v }),
    font: (): Record<string, string> =>
      (v.includes(',') || /['"]/.test(v) ? { 'font-family': v } : { 'font-size': v }),
    'font-size': () => ({ 'font-size': v }),
    'font-weight': () => ({ 'font-weight': v }),
    rotate: () => ({ transform: `rotate(${v})` }),
    scale: () => ({ transform: `scale(${v})` }),
    translate: () => ({ transform: `translate(${v})` }),
    blur: () => ({ filter: `blur(${v})` }),
    brightness: () => ({ filter: `brightness(${v})` }),
    contrast: () => ({ filter: `contrast(${v})` }),
    grayscale: () => ({ filter: `grayscale(${v})` }),
    invert: () => ({ filter: `invert(${v})` }),
    saturate: () => ({ filter: `saturate(${v})` }),
    sepia: () => ({ filter: `sepia(${v})` }),
    'hue-rotate': () => ({ filter: `hue-rotate(${v})` }),
    backdrop: () => ({ 'backdrop-filter': v }),
    transition: () => ({ transition: v }),
    duration: () => ({ 'transition-duration': v }),
    delay: () => ({ 'transition-delay': v }),
    ease: () => ({ 'transition-timing-function': v }),
    aspect: () => ({ 'aspect-ratio': v }),
    columns: () => ({ columns: v }),
    object: () => ({ 'object-fit': v }),
    'object-pos': () => ({ 'object-position': v }),
    overflow: () => ({ overflow: v }),
    'overflow-x': () => ({ 'overflow-x': v }),
    'overflow-y': () => ({ 'overflow-y': v }),
    overscroll: () => ({ 'overscroll-behavior': v }),
    scroll: () => ({ 'scroll-behavior': v }),
    cursor: () => ({ cursor: v }),
    outline: () => ({ outline: v }),
    ring: () => ({ 'box-shadow': `0 0 0 ${v}` }),
    flex: () => ({ flex: v }),
    grow: () => ({ 'flex-grow': v }),
    shrink: () => ({ 'flex-shrink': v }),
    order: () => ({ order: v }),
    'grid-cols': () => ({ 'grid-template-columns': v }),
    'grid-rows': () => ({ 'grid-template-rows': v }),
    'col-span': () => ({ 'grid-column': v }),
    'row-span': () => ({ 'grid-row': v }),
    'auto-cols': () => ({ 'grid-auto-columns': v }),
    'auto-rows': () => ({ 'grid-auto-rows': v }),
    'auto-flow': () => ({ 'grid-auto-flow': v }),
    filter: () => ({ filter: v }),
    fill: () => ({ fill: v }),
    stroke: () => ({ stroke: v }),
    accent: () => ({ 'accent-color': v }),
    caret: () => ({ 'caret-color': v }),
    select: () => ({ 'user-select': v }),
    'will-change': () => ({ 'will-change': v }),
  };
  const fn = map[prefix];
  return fn ? fn() : null;
}

function unspaceBracketValue(raw: string): string {
  let out = '';
  for (let i = 0; i < raw.length; i += 1) {
    const c = raw[i];
    if (c === '\\' && raw[i + 1] === '_') {
      out += '_';
      i += 1;
      continue;
    }
    out += c === '_' ? ' ' : c;
  }
  return out;
}

export function parseArbitraryClass(className: string): ArbitraryParseResult | null {
  const b = className.match(BRACKET_RE);
  if (b) {
    return { prefix: b[1], value: unspaceBracketValue(b[2]), syntax: 'bracket' };
  }
  const c = className.match(CURLY_RE);
  if (c) {
    return { prefix: c[1], value: c[2].trim(), syntax: 'curly' };
  }
  const p = className.match(PAREN_RE);
  if (p) {
    const varName = p[2].trim();
    const wrapped = varName.startsWith('--') ? `var(${varName})` : `var(--${varName})`;
    return { prefix: p[1], value: wrapped, syntax: 'paren' };
  }
  return null;
}

export function renderArbitraryStandaloneRule(config: AeroCraftResolvedConfig, className: string): string {
  const parsed = parseArbitraryClass(className);
  if (!parsed) return '';
  const css = applyPrefix(parsed.prefix, parsed.value);
  if (!css) return '';
  const full = buildClassName(config.prefix, config.separator, className);
  const sel = escapeCssClassIdent(full);
  const body = Object.entries(css)
    .map(([p, val]) => `  ${p}: ${val};`)
    .join('\n');
  return `.${sel} {\n${body}\n}`;
}

export function extractArbitraryCandidatesFromSource(source: string): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  const reCurly = /[\w.-]+-\{\{[^}]+\}\}/g;
  const reBracket = /[\w.-]+-\[[^\]]*\]/g;
  const reParen = /[a-zA-Z][\w-]*-\(--?[\w-]+\)/g;
  let m: RegExpExecArray | null;
  while ((m = reCurly.exec(source)) !== null) {
    const name = m[0];
    if (!seen.has(name)) {
      seen.add(name);
      out.push(name);
    }
  }
  while ((m = reBracket.exec(source)) !== null) {
    const name = m[0];
    if (!seen.has(name)) {
      seen.add(name);
      out.push(name);
    }
  }
  while ((m = reParen.exec(source)) !== null) {
    const name = m[0];
    if (!seen.has(name)) {
      seen.add(name);
      out.push(name);
    }
  }
  return out;
}
