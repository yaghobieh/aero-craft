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

export interface AeroCraftConfig {
  prefix?: string;
  separator?: AeroCraftSeparator;
  mode?: AeroCraftMode;
  groups?: AeroCraftGroupsConfig | 'all';
  breakpoints?: AeroCraftBreakpoints;
  responsive?: boolean;
  customShortcuts?: Record<string, AeroCraftShortcutEntry>;
  /** Glob patterns for source files scanned for prefix-{{value}} arbitrary classes. */
  content?: string[];
  /** When true, emits CSS even without the aerocraft at-rule. Default false. */
  injectWithoutDirective?: boolean;
}

export interface AeroCraftShortcutEntry {
  tailwind: string;
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
  content: string[];
  injectWithoutDirective: boolean;
}
