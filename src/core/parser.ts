import type { AeroCraftConfig, AeroCraftGroupsConfig, AeroCraftResolvedConfig } from '../types/config.types';
import { DEFAULT_BREAKPOINTS, DEFAULT_GROUPS, DEFAULT_MODE, DEFAULT_PREFIX, DEFAULT_SEPARATOR } from '../constants/defaults.const';

/**
 * Merges user config with AeroCraft defaults (groups, breakpoints, mode).
 */
export function resolveConfig(userConfig: AeroCraftConfig = {}): AeroCraftResolvedConfig {
  const groups: AeroCraftGroupsConfig =
    userConfig.groups === 'all'
      ? { ...DEFAULT_GROUPS }
      : { ...DEFAULT_GROUPS, ...userConfig.groups };

  return {
    prefix: userConfig.prefix ?? DEFAULT_PREFIX,
    separator: userConfig.separator ?? DEFAULT_SEPARATOR,
    mode: userConfig.mode ?? DEFAULT_MODE,
    groups,
    breakpoints: { ...DEFAULT_BREAKPOINTS, ...userConfig.breakpoints },
    responsive: userConfig.responsive ?? false,
    customShortcuts: userConfig.customShortcuts ?? {},
    content: userConfig.content ?? [],
    injectWithoutDirective: userConfig.injectWithoutDirective ?? false,
  };
}

/**
 * Builds the final class token (for example `ac-flex` or `flex` when prefix is empty).
 */
export function buildClassName(prefix: string, separator: string, name: string): string {
  if (!prefix) return name;
  return `${prefix}${separator}${name}`;
}
