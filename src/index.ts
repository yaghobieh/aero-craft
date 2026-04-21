export { resolveConfig, buildClassName } from './core/parser';
export { generateCSS, generateCSSForGroups, generateStandaloneCSS } from './core/generator';
export { escapeCssClassIdent } from './core/cssEscape';
export { parseArbitraryClass, renderArbitraryStandaloneRule, extractArbitraryCandidatesFromSource } from './core/arbitrary';
export {
  ALL_SHORTCUTS,
  FLEX_SHORTCUTS,
  GRID_SHORTCUTS,
  POSITION_SHORTCUTS,
  INSET_SHORTCUTS,
  SIZE_SHORTCUTS,
  SPACING_SHORTCUTS,
  GAP_SHORTCUTS,
  TEXT_SHORTCUTS,
  FONT_SHORTCUTS,
  DISPLAY_SHORTCUTS,
  OVERFLOW_SHORTCUTS,
  CURSOR_SHORTCUTS,
  TRANSITION_SHORTCUTS,
  INTERACTIVE_SHORTCUTS,
  ZINDEX_SHORTCUTS,
  RADIUS_SHORTCUTS,
  BORDER_SHORTCUTS,
  OPACITY_SHORTCUTS,
  SHADOW_SHORTCUTS,
  COLOR_SHORTCUTS,
} from './constants/shortcuts.const';
export { GROUP_LABELS, GROUP_ORDER } from './constants/groups.const';
export { DEFAULT_PREFIX, DEFAULT_SEPARATOR, DEFAULT_MODE, DEFAULT_GROUPS } from './constants/defaults.const';
export { DEFAULT_THEME_COLORS } from './constants/defaultThemeColors.const';
export { listResolvedUtilityNames } from './core/listResolvedUtilities';

export type { AeroCraftConfig, AeroCraftMode, AeroCraftSeparator, AeroCraftGroupsConfig, AeroCraftShortcutEntry, AeroCraftResolvedConfig } from './types/config.types';
export type { ShortcutDefinition, ShortcutGroup, ShortcutsRegistry } from './types/shortcuts.types';

export function defineConfig(config: import('./types/config.types').AeroCraftConfig): import('./types/config.types').AeroCraftConfig {
  return config;
}

export default defineConfig;
