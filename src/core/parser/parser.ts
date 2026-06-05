import type {
  AeroCraftBreakpoints,
  AeroCraftConfig,
  AeroCraftGroupsConfig,
  AeroCraftPlugin,
  AeroCraftPluginApi,
  AeroCraftResolvedConfig,
  AeroCraftShortcutEntry,
  AeroCraftTheme,
} from '../../types/config.types';
import { DEFAULT_BREAKPOINTS, DEFAULT_GROUPS, DEFAULT_MODE, DEFAULT_PREFIX, DEFAULT_SEPARATOR } from '../../constants/defaults.const';
import { DEFAULT_THEME_COLORS } from '../../constants/defaultThemeColors.const';
import { DEFAULT_COMPONENT_RECIPES } from '../../constants/defaultComponentRecipes.const';
import { expandColor, expandFontFamily, expandSpacing, simple } from './parser.utils';

/* ============================== Theme Merging ============================== */

function mergeThemeWithDefaults(theme: AeroCraftTheme | undefined): AeroCraftTheme {
  if (!theme) {
    return { colors: { ...DEFAULT_THEME_COLORS } };
  }
  const { extend, colors, ...rest } = theme;
  const merged: AeroCraftTheme = {
    ...rest,
    colors: { ...DEFAULT_THEME_COLORS, ...colors },
  };
  if (extend !== undefined) {
    merged.extend = extend;
  }
  return merged;
}

/* ============================== Shortcut Normalization ============================== */

function normalizeShortcutEntry(entry: AeroCraftShortcutEntry): AeroCraftShortcutEntry {
  const legacy = entry as AeroCraftShortcutEntry & { tailwind?: string };
  if (legacy.utilityRecipe === undefined && legacy.tailwind !== undefined) {
    return {
      css: entry.css,
      description: entry.description,
      group: entry.group,
      utilityRecipe: legacy.tailwind,
    };
  }
  return entry;
}

/* ============================== Component Recipes ============================== */

function mergeComponentRecipes(
  user?: Record<string, Record<string, string>>,
): Record<string, Record<string, string>> {
  const out: Record<string, Record<string, string>> = {};
  for (const [name, css] of Object.entries(DEFAULT_COMPONENT_RECIPES)) {
    out[name] = { ...css, ...(user?.[name] ?? {}) };
  }
  if (user) {
    for (const [name, css] of Object.entries(user)) {
      if (!out[name]) {
        out[name] = { ...css };
      }
    }
  }
  return out;
}

/* ============================== Theme Expansion ============================== */

function expandTheme(theme: AeroCraftTheme | undefined): {
  shortcuts: Record<string, AeroCraftShortcutEntry>;
  breakpoints: AeroCraftBreakpoints;
} {
  const merged = mergeThemeWithDefaults(theme);
  return expandThemeLayers(merged);
}

function expandThemeLayers(theme: AeroCraftTheme): {
  shortcuts: Record<string, AeroCraftShortcutEntry>;
  breakpoints: AeroCraftBreakpoints;
} {
  const shortcuts: Record<string, AeroCraftShortcutEntry> = {};
  const breakpoints: AeroCraftBreakpoints = {};

  const { extend: themeExtend, ...themeBase } = theme;
  const layers: AeroCraftTheme[] = [];
  if (Object.keys(themeBase).length > 0) layers.push(themeBase);
  if (themeExtend) layers.push(themeExtend);

  for (const layer of layers) {
    if (layer.colors) {
      for (const [name, value] of Object.entries(layer.colors)) {
        Object.assign(shortcuts, expandColor(name, value));
      }
    }
    if (layer.fontFamily) {
      for (const [name, value] of Object.entries(layer.fontFamily)) {
        shortcuts[`font-${name}`] = expandFontFamily(name, value);
      }
    }
    if (layer.spacing) {
      for (const [key, value] of Object.entries(layer.spacing)) {
        Object.assign(shortcuts, expandSpacing(key, value));
      }
    }
    if (layer.borderRadius) {
      for (const [key, value] of Object.entries(layer.borderRadius)) {
        shortcuts[`rounded-${key}`] = simple({ 'border-radius': value }, 'radius', `rounded-${key}`);
      }
    }
    if (layer.boxShadow) {
      for (const [key, value] of Object.entries(layer.boxShadow)) {
        shortcuts[`shadow-${key}`] = simple({ 'box-shadow': value }, 'shadow', `shadow-${key}`);
      }
    }
    if (layer.screens) {
      Object.assign(breakpoints, layer.screens);
    }
  }

  return { shortcuts, breakpoints };
}

/* ============================== Plugin Runner ============================== */

function runPlugins(
  plugins: AeroCraftPlugin[] | undefined,
  userConfig: AeroCraftConfig,
): { pluginUtilities: Record<string, Record<string, string>>; pluginComponents: Record<string, Record<string, string>> } {
  const pluginUtilities: Record<string, Record<string, string>> = {};
  const pluginComponents: Record<string, Record<string, string>> = {};

  if (!plugins || plugins.length === 0) return { pluginUtilities, pluginComponents };

  const prefix = userConfig.prefix ?? DEFAULT_PREFIX;
  const separator = userConfig.separator ?? DEFAULT_SEPARATOR;

  const api: AeroCraftPluginApi = {
    addUtilities(utilities, options) {
      const respectPrefix = options?.respectPrefix ?? true;
      for (const [selector, css] of Object.entries(utilities)) {
        const finalSelector = respectPrefix && prefix && !selector.startsWith('.')
          ? `.${prefix}${separator}${selector.replace(/^\./, '')}`
          : selector;
        pluginUtilities[finalSelector] = css;
      }
    },
    addComponents(components, options) {
      const respectPrefix = options?.respectPrefix ?? true;
      for (const [selector, css] of Object.entries(components)) {
        const finalSelector = respectPrefix && prefix && !selector.startsWith('.')
          ? `.${prefix}${separator}${selector.replace(/^\./, '')}`
          : selector;
        pluginComponents[finalSelector] = css;
      }
    },
    theme(path: string) {
      const keys = path.split('.');
      let current: unknown = userConfig.theme;
      for (const key of keys) {
        if (current && typeof current === 'object') {
          current = (current as Record<string, unknown>)[key];
        } else {
          return undefined;
        }
      }
      return current;
    },
    config(path: string) {
      const keys = path.split('.');
      let current: unknown = userConfig;
      for (const key of keys) {
        if (current && typeof current === 'object') {
          current = (current as Record<string, unknown>)[key];
        } else {
          return undefined;
        }
      }
      return current;
    },
  };

  for (const plugin of plugins) {
    plugin(api);
  }

  return { pluginUtilities, pluginComponents };
}

/* ============================== Config Resolution ============================== */

export function resolveConfig(userConfig: AeroCraftConfig = {}): AeroCraftResolvedConfig {
  const groups: AeroCraftGroupsConfig =
    userConfig.groups === 'all'
      ? { ...DEFAULT_GROUPS }
      : { ...DEFAULT_GROUPS, ...userConfig.groups };

  const { shortcuts: themeShortcuts, breakpoints: themeBreakpoints } = expandTheme(userConfig.theme);

  const mergedCustomRaw = { ...themeShortcuts, ...(userConfig.customShortcuts ?? {}) };
  const customShortcuts = Object.fromEntries(
    Object.entries(mergedCustomRaw).map(([k, v]) => [k, normalizeShortcutEntry(v)]),
  );

  const { pluginUtilities, pluginComponents } = runPlugins(userConfig.plugins, userConfig);

  return {
    prefix: userConfig.prefix ?? DEFAULT_PREFIX,
    separator: userConfig.separator ?? DEFAULT_SEPARATOR,
    mode: userConfig.mode ?? DEFAULT_MODE,
    groups,
    breakpoints: { ...DEFAULT_BREAKPOINTS, ...themeBreakpoints, ...userConfig.breakpoints },
    responsive: userConfig.responsive ?? false,
    customShortcuts,
    componentRecipes: mergeComponentRecipes(userConfig.componentRecipes),
    content: userConfig.content ?? [],
    injectWithoutDirective: userConfig.injectWithoutDirective ?? false,
    pluginUtilities,
    pluginComponents,
  };
}

export function buildClassName(prefix: string, separator: string, name: string): string {
  if (!prefix) return name;
  return `${prefix}${separator}${name}`;
}
