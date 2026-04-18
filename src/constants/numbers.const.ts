export const TRANSITION_FAST_MS = 75;
export const TRANSITION_DEFAULT_MS = 150;
export const TRANSITION_SLOW_MS = 300;
export const GRID_COLS_2 = 2;
export const GRID_COLS_3 = 3;
export const GRID_COLS_4 = 4;
export const GRID_COLS_6 = 6;
export const GRID_COLS_12 = 12;
export const LINE_CLAMP_2 = 2;
export const LINE_CLAMP_3 = 3;

export const SPACING_0 = '0px';
export const SPACING_PX = '1px';
export const SPACING_0_5 = '2px';
export const SPACING_1 = '4px';
export const SPACING_1_5 = '6px';
export const SPACING_2 = '8px';
export const SPACING_2_5 = '10px';
export const SPACING_3 = '12px';
export const SPACING_3_5 = '14px';
export const SPACING_4 = '16px';
export const SPACING_5 = '20px';
export const SPACING_6 = '24px';
export const SPACING_7 = '28px';
export const SPACING_8 = '32px';
export const SPACING_9 = '36px';
export const SPACING_10 = '40px';
export const SPACING_11 = '44px';
export const SPACING_12 = '48px';
export const SPACING_14 = '56px';
export const SPACING_16 = '64px';
export const SPACING_20 = '80px';
export const SPACING_24 = '96px';
export const SPACING_28 = '112px';
export const SPACING_32 = '128px';
export const SPACING_36 = '144px';
export const SPACING_40 = '160px';
export const SPACING_44 = '176px';
export const SPACING_48 = '192px';
export const SPACING_52 = '208px';
export const SPACING_56 = '224px';
export const SPACING_60 = '240px';
export const SPACING_64 = '256px';
export const SPACING_72 = '288px';
export const SPACING_80 = '320px';
export const SPACING_96 = '384px';

export const ORDER_FIRST = '-9999';
export const ORDER_LAST = '9999';
export const ORDER_NUMERIC_MAX = 12;

export const Z_INDEX_LEVELS = ['0', '10', '20', '30', '40', '50'] as const;

export const OPACITY_LEVELS = ['0', '5', '10', '20', '25', '30', '40', '50', '60', '70', '75', '80', '90', '95', '100'] as const;

export const FONT_WEIGHTS: Record<string, string> = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

export const FONT_SIZES: Record<string, { size: string; lineHeight: string }> = {
  xs: { size: '12px', lineHeight: '16px' },
  sm: { size: '14px', lineHeight: '20px' },
  base: { size: '16px', lineHeight: '24px' },
  lg: { size: '18px', lineHeight: '28px' },
  xl: { size: '20px', lineHeight: '28px' },
  '2xl': { size: '24px', lineHeight: '32px' },
  '3xl': { size: '30px', lineHeight: '36px' },
  '4xl': { size: '36px', lineHeight: '40px' },
  '5xl': { size: '48px', lineHeight: '1' },
  '6xl': { size: '60px', lineHeight: '1' },
  '7xl': { size: '72px', lineHeight: '1' },
};

export const BORDER_WIDTHS: Record<string, string> = {
  '0': '0px',
  default: '1px',
  '2': '2px',
  '4': '4px',
  '8': '8px',
};

export const RADIUS_SIZES: Record<string, string> = {
  none: '0px',
  sm: '2px',
  default: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  full: '9999px',
};

export const SHADOW_LEVELS: Record<string, string> = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
};
