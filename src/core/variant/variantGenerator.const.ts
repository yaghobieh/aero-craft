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

export const COLORS: Record<string, string | Record<string, string>> = {
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
