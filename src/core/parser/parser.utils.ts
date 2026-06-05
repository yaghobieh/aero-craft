import type { AeroCraftShortcutEntry } from '../../types/config.types';
import { DEFAULT_KEY, COLOR_CSS_PROPS, SPACING_PROP_ENTRIES } from './parser.const';

/* ============================== Theme Expansion Helpers ============================== */

export function simple(css: Record<string, string>, group: string, name: string): AeroCraftShortcutEntry {
  return { css, description: name, group };
}

export function colorEntry(label: string, value: string, cssProp: string, group: string): AeroCraftShortcutEntry {
  return {
    css: { [cssProp]: value },
    description: `${label} (${value})`,
    group,
  };
}

export function quote(name: string): string {
  return /['"\s]/.test(name) ? name : `'${name}'`;
}

export function expandColor(name: string, value: unknown): Record<string, AeroCraftShortcutEntry> {
  const out: Record<string, AeroCraftShortcutEntry> = {};
  if (typeof value === 'string') {
    for (const { prefix, cssProp, group } of COLOR_CSS_PROPS) {
      out[`${prefix}-${name}`] = colorEntry(name, value, cssProp, group);
    }
    return out;
  }
  if (value && typeof value === 'object') {
    const record = value as Record<string, string>;
    for (const [shade, hex] of Object.entries(record)) {
      if (typeof hex !== 'string') continue;
      const suffix = shade === DEFAULT_KEY ? name : `${name}-${shade}`;
      for (const { prefix, cssProp, group } of COLOR_CSS_PROPS) {
        out[`${prefix}-${suffix}`] = colorEntry(suffix, hex, cssProp, group);
      }
    }
    return out;
  }
  return out;
}

export function expandFontFamily(name: string, value: string | string[]): AeroCraftShortcutEntry {
  const stack = Array.isArray(value) ? value.map(quote).join(', ') : value;
  return {
    css: { 'font-family': stack },
    description: `font-${name}`,
    group: 'font',
  };
}

export function expandSpacing(key: string, value: string): Record<string, AeroCraftShortcutEntry> {
  const out: Record<string, AeroCraftShortcutEntry> = {};
  for (const entry of SPACING_PROP_ENTRIES) {
    const utilName = `${entry.prefix}-${key}`;
    out[utilName] = simple(entry.css(value), entry.group, utilName);
  }
  return out;
}
