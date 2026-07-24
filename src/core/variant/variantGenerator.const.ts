import { DEFAULT_SCANNER_COLORS } from '../../constants/defaultThemeColors.const';

/* ============================== Variant → Selector Map ============================== */

export const VARIANT_SELECTOR_MAP: Record<string, (sel: string) => string> = {
  dark:               (s) => `.dark .${s}`,
  hover:              (s) => `.${s}:hover`,
  focus:              (s) => `.${s}:focus`,
  'focus-visible':    (s) => `.${s}:focus-visible`,
  'focus-within':     (s) => `.${s}:focus-within`,
  active:             (s) => `.${s}:active`,
  disabled:           (s) => `.${s}:disabled`,
  visited:            (s) => `.${s}:visited`,
  checked:            (s) => `.${s}:checked`,
  required:           (s) => `.${s}:required`,
  invalid:            (s) => `.${s}:invalid`,
  valid:              (s) => `.${s}:valid`,
  empty:              (s) => `.${s}:empty`,
  enabled:            (s) => `.${s}:enabled`,
  indeterminate:      (s) => `.${s}:indeterminate`,
  'read-only':        (s) => `.${s}:read-only`,
  'read-write':       (s) => `.${s}:read-write`,
  'only-child':       (s) => `.${s}:only-child`,
  'first-of-type':    (s) => `.${s}:first-of-type`,
  'last-of-type':     (s) => `.${s}:last-of-type`,
  'only-of-type':     (s) => `.${s}:only-of-type`,
  placeholder:        (s) => `.${s}::placeholder`,
  before:             (s) => `.${s}::before`,
  after:              (s) => `.${s}::after`,
  selection:          (s) => `.${s}::selection`,
  marker:             (s) => `.${s}::marker`,
  'first-line':       (s) => `.${s}::first-line`,
  'first-letter':     (s) => `.${s}::first-letter`,
  first:              (s) => `.${s}:first-child`,
  last:               (s) => `.${s}:last-child`,
  odd:                (s) => `.${s}:nth-child(odd)`,
  even:               (s) => `.${s}:nth-child(even)`,
  'group-hover':      (s) => `.bear-group:hover .${s}`,
  'group-focus':      (s) => `.bear-group:focus .${s}`,
  'group-active':     (s) => `.bear-group:active .${s}`,
  'group-focus-within': (s) => `.bear-group:focus-within .${s}`,
  'group-focus-visible': (s) => `.bear-group:focus-visible .${s}`,
  'group-disabled':   (s) => `.bear-group:disabled .${s}`,
  'group-checked':    (s) => `.bear-group:checked .${s}`,
  'group-invalid':    (s) => `.bear-group:invalid .${s}`,
  'peer-hover':       (s) => `.bear-peer:hover ~ .${s}`,
  'peer-focus':       (s) => `.bear-peer:focus ~ .${s}`,
  'peer-focus-visible': (s) => `.bear-peer:focus-visible ~ .${s}`,
  'peer-active':      (s) => `.bear-peer:active ~ .${s}`,
  'peer-checked':     (s) => `.bear-peer:checked ~ .${s}`,
  'peer-disabled':    (s) => `.bear-peer:disabled ~ .${s}`,
  'peer-invalid':     (s) => `.bear-peer:invalid ~ .${s}`,
  'peer-required':    (s) => `.bear-peer:required ~ .${s}`,
  'peer-placeholder-shown': (s) => `.bear-peer:placeholder-shown ~ .${s}`,
};

export const KNOWN_SELECTOR_VARIANTS = Object.keys(VARIANT_SELECTOR_MAP);

/* ============================== Media Variant Map ============================== */

export const MEDIA_VARIANT_MAP: Record<string, string> = {
  print:              '@media print',
  'motion-reduce':    '@media (prefers-reduced-motion: reduce)',
  'motion-safe':      '@media (prefers-reduced-motion: no-preference)',
  'contrast-more':    '@media (prefers-contrast: more)',
  'contrast-less':    '@media (prefers-contrast: less)',
  portrait:           '@media (orientation: portrait)',
  landscape:          '@media (orientation: landscape)',
};

export const KNOWN_MEDIA_VARIANTS = Object.keys(MEDIA_VARIANT_MAP);
export const ALL_STATIC_VARIANTS = [...KNOWN_SELECTOR_VARIANTS, ...KNOWN_MEDIA_VARIANTS];

/* ============================== Named Supports Queries ============================== */

export const NAMED_SUPPORTS_MAP: Record<string, string> = {
  'supports-grid': '@supports (display: grid)',
  'supports-flex': '@supports (display: flex)',
  'supports-gap': '@supports (gap: 0px)',
  'supports-subgrid': '@supports (grid-template-columns: subgrid)',
  'supports-container': '@supports (container-type: inline-size)',
  'supports-has': '@supports selector(:has(*))',
  'supports-not': '@supports not (display: grid)',
};

/* ============================== Responsive Breakpoints ============================== */

export const RESPONSIVE_NAMES = ['sm', 'md', 'lg', 'xl', '2xl'] as const;

export const DEFAULT_VARIANT_BREAKPOINTS: Record<string, string> = {
  sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px',
};

/* ============================== Color Palette ============================== */

export const COLORS: Record<string, string | Record<string, string>> = DEFAULT_SCANNER_COLORS;

export const PRIMARY_SHADES = ['50','100','200','300','400','500','600','700','800','900','950'];

/* ============================== Opacity ============================== */

export const OPACITY_DIVISOR = 100;
export const SAMPLE_SELECTOR = '__SAMPLE__';

/* ============================== Hex Parsing ============================== */

export const HEX_R_START = 0;
export const HEX_R_END = 2;
export const HEX_G_START = 2;
export const HEX_G_END = 4;
export const HEX_B_START = 4;
export const HEX_B_END = 6;
export const HEX_RADIX = 16;
