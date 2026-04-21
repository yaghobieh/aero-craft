import type {
  AeroCraftBreakpoints,
  AeroCraftConfig,
  AeroCraftGroupsConfig,
  AeroCraftResolvedConfig,
  AeroCraftShortcutEntry,
  AeroCraftTheme,
} from '../types/config.types';
import { DEFAULT_BREAKPOINTS, DEFAULT_GROUPS, DEFAULT_MODE, DEFAULT_PREFIX, DEFAULT_SEPARATOR } from '../constants/defaults.const';
import { DEFAULT_THEME_COLORS } from '../constants/defaultThemeColors.const';

const DEFAULT_KEY = 'DEFAULT';

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

function expandColor(name: string, value: unknown): Record<string, AeroCraftShortcutEntry> {
  const out: Record<string, AeroCraftShortcutEntry> = {};
  if (typeof value === 'string') {
    out[`background-${name}`] = colorEntry(name, value, 'background-color', 'background');
    out[`color-${name}`] = colorEntry(name, value, 'color', 'color');
    out[`border-color-${name}`] = colorEntry(name, value, 'border-color', 'border');
    return out;
  }
  if (value && typeof value === 'object') {
    const record = value as Record<string, string>;
    for (const [shade, hex] of Object.entries(record)) {
      if (typeof hex !== 'string') continue;
      const suffix = shade === DEFAULT_KEY ? name : `${name}-${shade}`;
      out[`background-${suffix}`] = colorEntry(suffix, hex, 'background-color', 'background');
      out[`color-${suffix}`] = colorEntry(suffix, hex, 'color', 'color');
      out[`border-color-${suffix}`] = colorEntry(suffix, hex, 'border-color', 'border');
    }
    return out;
  }
  return out;
}

function colorEntry(label: string, value: string, cssProp: string, group: string): AeroCraftShortcutEntry {
  return {
    css: { [cssProp]: value },
    description: `${label} (${value})`,
    group,
  };
}

function expandFontFamily(name: string, value: string | string[]): AeroCraftShortcutEntry {
  const stack = Array.isArray(value) ? value.map(quote).join(', ') : value;
  return {
    css: { 'font-family': stack },
    description: `font-${name}`,
    group: 'font',
  };
}

function quote(name: string): string {
  return /['"\s]/.test(name) ? name : name.includes(' ') ? `'${name}'` : `'${name}'`;
}

function expandSpacing(key: string, value: string): Record<string, AeroCraftShortcutEntry> {
  return {
    [`p-${key}`]:  simple({ padding: value }, 'spacing', `p-${key}`),
    [`px-${key}`]: simple({ 'padding-left': value, 'padding-right': value }, 'spacing', `px-${key}`),
    [`py-${key}`]: simple({ 'padding-top': value, 'padding-bottom': value }, 'spacing', `py-${key}`),
    [`pt-${key}`]: simple({ 'padding-top': value }, 'spacing', `pt-${key}`),
    [`pr-${key}`]: simple({ 'padding-right': value }, 'spacing', `pr-${key}`),
    [`pb-${key}`]: simple({ 'padding-bottom': value }, 'spacing', `pb-${key}`),
    [`pl-${key}`]: simple({ 'padding-left': value }, 'spacing', `pl-${key}`),
    [`m-${key}`]:  simple({ margin: value }, 'spacing', `m-${key}`),
    [`mx-${key}`]: simple({ 'margin-left': value, 'margin-right': value }, 'spacing', `mx-${key}`),
    [`my-${key}`]: simple({ 'margin-top': value, 'margin-bottom': value }, 'spacing', `my-${key}`),
    [`mt-${key}`]: simple({ 'margin-top': value }, 'spacing', `mt-${key}`),
    [`mr-${key}`]: simple({ 'margin-right': value }, 'spacing', `mr-${key}`),
    [`mb-${key}`]: simple({ 'margin-bottom': value }, 'spacing', `mb-${key}`),
    [`ml-${key}`]: simple({ 'margin-left': value }, 'spacing', `ml-${key}`),
    [`gap-${key}`]: simple({ gap: value }, 'gap', `gap-${key}`),
  };
}

function simple(css: Record<string, string>, group: string, name: string): AeroCraftShortcutEntry {
  return { css, description: name, group };
}

function expandTheme(theme: AeroCraftTheme | undefined): {
  shortcuts: Record<string, AeroCraftShortcutEntry>;
  breakpoints: AeroCraftBreakpoints;
} {
  const shortcuts: Record<string, AeroCraftShortcutEntry> = {};
  const breakpoints: AeroCraftBreakpoints = {};
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

export function resolveConfig(userConfig: AeroCraftConfig = {}): AeroCraftResolvedConfig {
  const groups: AeroCraftGroupsConfig =
    userConfig.groups === 'all'
      ? { ...DEFAULT_GROUPS }
      : { ...DEFAULT_GROUPS, ...userConfig.groups };

  const { shortcuts: themeShortcuts, breakpoints: themeBreakpoints } = expandTheme(userConfig.theme);

  return {
    prefix: userConfig.prefix ?? DEFAULT_PREFIX,
    separator: userConfig.separator ?? DEFAULT_SEPARATOR,
    mode: userConfig.mode ?? DEFAULT_MODE,
    groups,
    breakpoints: { ...DEFAULT_BREAKPOINTS, ...themeBreakpoints, ...userConfig.breakpoints },
    responsive: userConfig.responsive ?? false,
    customShortcuts: { ...themeShortcuts, ...(userConfig.customShortcuts ?? {}) },
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
