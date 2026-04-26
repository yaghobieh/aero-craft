export type AeroCraftMode = 'apply' | 'standalone';

export type AeroCraftSeparator = '-' | '_' | '.';

export interface AeroCraftBreakpoints {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
  [key: string]: string | undefined;
}

export interface AeroCraftGroupsConfig {
  layout?: boolean;
  flex?: boolean;
  grid?: boolean;
  position?: boolean;
  inset?: boolean;
  size?: boolean;
  spacing?: boolean;
  gap?: boolean;
  text?: boolean;
  font?: boolean;
  list?: boolean;
  display?: boolean;
  overflow?: boolean;
  cursor?: boolean;
  transition?: boolean;
  motion?: boolean;
  transform?: boolean;
  filter?: boolean;
  backdrop?: boolean;
  background?: boolean;
  outline?: boolean;
  effect?: boolean;
  table?: boolean;
  scroll?: boolean;
  interactive?: boolean;
  svg?: boolean;
  a11y?: boolean;
  zindex?: boolean;
  radius?: boolean;
  border?: boolean;
  opacity?: boolean;
  shadow?: boolean;
  color?: boolean;
}

export type AeroCraftColorValue = string | Record<string, string>;

export interface AeroCraftTheme {
  /**
   * Named colors. A string defines the DEFAULT shade (`background-<name>`,
   * `color-<name>`, `border-color-<name>`). Objects emit shaded utilities such as `color-red-500`.
   * A default palette ships with the library; your entries override those keys.
   */
  colors?: Record<string, AeroCraftColorValue>;
  /** Font families: `{ display: ['Plus Jakarta Sans', 'sans-serif'] }` → `font-display`. */
  fontFamily?: Record<string, string | string[]>;
  /** Spacing scale keyed on the token (e.g. `{ '4.5': '1.125rem' }`) → adds `p-<key>`, `m-<key>`, `gap-<key>`. */
  spacing?: Record<string, string>;
  /** Border radius tokens → `rounded-<key>`. */
  borderRadius?: Record<string, string>;
  /** Box shadow tokens → `shadow-<key>`. */
  boxShadow?: Record<string, string>;
  /** Screen/breakpoint overrides (alias of `breakpoints`). */
  screens?: AeroCraftBreakpoints;
  /** Extend the defaults instead of replacing them. Same shape as the top-level theme. */
  extend?: Omit<AeroCraftTheme, 'extend'>;
}

export interface AeroCraftConfig {
  prefix?: string;
  separator?: AeroCraftSeparator;
  mode?: AeroCraftMode;
  groups?: AeroCraftGroupsConfig | 'all';
  breakpoints?: AeroCraftBreakpoints;
  responsive?: boolean;
  /** Design-token style theme — colors, fontFamily, spacing, etc. */
  theme?: AeroCraftTheme;
  /**
   * Advanced: fully specified shortcut entries. Prefer `theme` for everyday tokens.
   */
  customShortcuts?: Record<string, AeroCraftShortcutEntry>;
  /** Glob patterns for source files scanned for prefix-{{value}} arbitrary classes. */
  content?: string[];
  /** When true, emits CSS even without the aerocraft at-rule. Default false. */
  injectWithoutDirective?: boolean;
  /**
   * Named component presets (plain CSS declarations per class). Defaults include
   * circle-button and input-rounded; pass the same key to override properties.
   */
  componentRecipes?: Record<string, Record<string, string>>;
  /**
   * CSS selector for dark mode. Default: `.dark`.
   * The dark variant (`dark:bear-bg-*`) wraps rules in this selector scope.
   */
  darkSelector?: string;
}

export interface AeroCraftShortcutEntry {
  utilityRecipe?: string;
  tailwind?: string;
  css: Record<string, string>;
  description?: string;
  group?: string;
}

export interface AeroCraftResolvedConfig {
  prefix: string;
  separator: AeroCraftSeparator;
  mode: AeroCraftMode;
  groups: AeroCraftGroupsConfig;
  breakpoints: AeroCraftBreakpoints;
  responsive: boolean;
  customShortcuts: Record<string, AeroCraftShortcutEntry>;
  componentRecipes: Record<string, Record<string, string>>;
  content: string[];
  injectWithoutDirective: boolean;
}
