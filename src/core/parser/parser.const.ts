import type { AeroCraftShortcutEntry } from '../../types/config.types';

export const DEFAULT_KEY = 'DEFAULT';

/* ============================== Color CSS Properties ============================== */

export const COLOR_CSS_PROPS = [
  { prefix: 'background', cssProp: 'background-color', group: 'background' },
  { prefix: 'color', cssProp: 'color', group: 'color' },
  { prefix: 'border-color', cssProp: 'border-color', group: 'border' },
] as const;

/* ============================== Spacing Property Entries ============================== */

export const SPACING_PROP_ENTRIES: Array<{
  prefix: string;
  css: (v: string) => Record<string, string>;
  group: string;
}> = [
  { prefix: 'p', css: (v) => ({ padding: v }), group: 'spacing' },
  { prefix: 'px', css: (v) => ({ 'padding-left': v, 'padding-right': v }), group: 'spacing' },
  { prefix: 'py', css: (v) => ({ 'padding-top': v, 'padding-bottom': v }), group: 'spacing' },
  { prefix: 'pt', css: (v) => ({ 'padding-top': v }), group: 'spacing' },
  { prefix: 'pr', css: (v) => ({ 'padding-right': v }), group: 'spacing' },
  { prefix: 'pb', css: (v) => ({ 'padding-bottom': v }), group: 'spacing' },
  { prefix: 'pl', css: (v) => ({ 'padding-left': v }), group: 'spacing' },
  { prefix: 'm', css: (v) => ({ margin: v }), group: 'spacing' },
  { prefix: 'mx', css: (v) => ({ 'margin-left': v, 'margin-right': v }), group: 'spacing' },
  { prefix: 'my', css: (v) => ({ 'margin-top': v, 'margin-bottom': v }), group: 'spacing' },
  { prefix: 'mt', css: (v) => ({ 'margin-top': v }), group: 'spacing' },
  { prefix: 'mr', css: (v) => ({ 'margin-right': v }), group: 'spacing' },
  { prefix: 'mb', css: (v) => ({ 'margin-bottom': v }), group: 'spacing' },
  { prefix: 'ml', css: (v) => ({ 'margin-left': v }), group: 'spacing' },
  { prefix: 'gap', css: (v) => ({ gap: v }), group: 'gap' },
];
