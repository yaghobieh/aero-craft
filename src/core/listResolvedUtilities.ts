import type { AeroCraftGroupsConfig, AeroCraftResolvedConfig } from '../types/config.types';
import { ALL_SHORTCUTS } from '../constants/shortcuts.const';
import { DEFAULT_GROUPS } from '../constants/defaults.const';

export function listResolvedUtilityNames(config: AeroCraftResolvedConfig): string[] {
  const names: string[] = [];
  for (const groupName of Object.keys(DEFAULT_GROUPS) as (keyof AeroCraftGroupsConfig)[]) {
    if (!config.groups[groupName]) continue;
    const group = ALL_SHORTCUTS[groupName];
    if (!group) continue;
    names.push(...Object.keys(group));
  }
  names.push(...Object.keys(config.customShortcuts));
  names.push(...Object.keys(config.componentRecipes));
  return [...new Set(names)].sort((a, b) => a.localeCompare(b));
}
