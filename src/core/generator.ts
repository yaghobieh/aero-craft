import type { AeroCraftGroupsConfig, AeroCraftResolvedConfig } from '../types/config.types';
import type { ShortcutDefinition } from '../types/shortcuts.types';
import { ALL_SHORTCUTS } from '../constants/shortcuts.const';
import { AEROCRAFT_KEYFRAMES_CSS } from '../constants/shortcuts-extra.const';
import { DEFAULT_GROUPS } from '../constants/defaults.const';
import { buildClassName } from './parser';
import { escapeCssClassIdent } from './cssEscape';
import { CSS_COMMENT_GROUP_PREFIX, CSS_COMMENT_GROUP_SUFFIX, CSS_COMMENT_KEYFRAMES } from './generator.const';

function renderCssProperties(props: Record<string, string>, important: boolean): string {
  return Object.entries(props)
    .map(([prop, value]) => {
      const v = important ? `${value} !important` : value;
      return `  ${prop}: ${v};`;
    })
    .join('\n');
}

function renderClass(
  className: string,
  shortcut: ShortcutDefinition,
  important: boolean,
): string {
  const sel = escapeCssClassIdent(className);
  return `.${sel} {\n${renderCssProperties(shortcut.css, important)}\n}`;
}

/**
 * Emits responsive copies of a utility wrapped in min-width media queries.
 */
function renderResponsiveVariants(
  baseClassName: string,
  shortcut: ShortcutDefinition,
  breakpoints: Record<string, string | undefined>,
  important: boolean,
): string {
  return Object.entries(breakpoints)
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .map(([bp, minWidth]) => {
      const variantFull = `${bp}:${baseClassName}`;
      const inner = renderClass(variantFull, shortcut, important);
      return `@media (min-width: ${minWidth}) {\n${inner.split('\n').map((l) => `  ${l}`).join('\n')}\n}`;
    })
    .join('\n\n');
}

/**
 * Generates CSS for all enabled shortcut groups and custom shortcuts.
 */
export function generateCSS(config: AeroCraftResolvedConfig): string {
  const { prefix, separator, groups, customShortcuts, breakpoints, responsive } = config;
  const lines: string[] = [];

  if (groups.motion) {
    lines.push(CSS_COMMENT_KEYFRAMES);
    lines.push(AEROCRAFT_KEYFRAMES_CSS);
  }

  for (const [groupName, enabled] of Object.entries(groups)) {
    if (!enabled) continue;

    const shortcuts = ALL_SHORTCUTS[groupName];
    if (!shortcuts) continue;

    lines.push(`${CSS_COMMENT_GROUP_PREFIX}${groupName}${CSS_COMMENT_GROUP_SUFFIX}`);

    for (const shortcut of Object.values(shortcuts)) {
      const className = buildClassName(prefix, separator, shortcut.name);
      lines.push(renderClass(className, shortcut, false));
      if (responsive) {
        lines.push(renderResponsiveVariants(className, shortcut, breakpoints, false));
      }
    }
  }

  for (const [name, shortcut] of Object.entries(customShortcuts)) {
    const className = buildClassName(prefix, separator, name);
    const def: ShortcutDefinition = {
      name,
      group: shortcut.group ?? 'custom',
      tailwind: shortcut.tailwind,
      css: shortcut.css,
      description: shortcut.description ?? '',
    };
    lines.push(renderClass(className, def, false));
    lines.push(renderClass(buildClassName(prefix, separator, `!${name}`), def, true));
    lines.push(renderClass(buildClassName(prefix, separator, `${name}!`), def, true));
    if (responsive) {
      lines.push(renderResponsiveVariants(className, def, breakpoints, false));
      lines.push(
        renderResponsiveVariants(buildClassName(prefix, separator, `!${name}`), def, breakpoints, true),
      );
      lines.push(
        renderResponsiveVariants(buildClassName(prefix, separator, `${name}!`), def, breakpoints, true),
      );
    }
  }

  return lines.join('\n\n');
}

export function generateCSSForGroups(
  config: AeroCraftResolvedConfig,
  active: (keyof AeroCraftGroupsConfig)[],
): string {
  const groups = {} as AeroCraftGroupsConfig;
  (Object.keys(DEFAULT_GROUPS) as (keyof AeroCraftGroupsConfig)[]).forEach((k) => {
    groups[k] = Boolean(config.groups[k] && active.includes(k));
  });
  return generateCSS({ ...config, groups });
}

/**
 * Same as {@link generateCSS} but forces standalone (real property) output.
 */
export function generateStandaloneCSS(config: AeroCraftResolvedConfig): string {
  return generateCSS(config);
}
