import {
  CAMEL_TO_KEBAB_PREFIX,
  CAMEL_TO_KEBAB_RE,
  DEFAULT_NUMERIC_UNIT,
  STYLE_UNIT_DEG,
  STYLE_UNIT_NUMBER,
  STYLE_UNIT_PERCENT,
  STYLE_UNIT_PX,
  STYLE_UNIT_RAW,
} from './runtime.const';
import type {
  AttributeStyleMapLike,
  StyleUnit,
  StyleValue,
  TypedOmCss,
} from './runtime.types';

export function toKebabCase(property: string): string {
  return property.replace(CAMEL_TO_KEBAB_RE, (match) => `${CAMEL_TO_KEBAB_PREFIX}${match.toLowerCase()}`);
}

export function resolveUnit(value: StyleValue): StyleUnit {
  if (typeof value === 'number') return DEFAULT_NUMERIC_UNIT;
  if (typeof value === 'string') return STYLE_UNIT_RAW;
  return value.unit ?? DEFAULT_NUMERIC_UNIT;
}

export function resolveNumericValue(value: StyleValue): number | string {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') return value;
  return value.value;
}

export function getTypedOmCss(): TypedOmCss | null {
  const css = (globalThis as { CSS?: TypedOmCss }).CSS;
  if (!css || typeof css.px !== 'function') return null;
  return css;
}

export function getAttributeStyleMap(element: HTMLElement): AttributeStyleMapLike | null {
  const map = (element as HTMLElement & { attributeStyleMap?: AttributeStyleMapLike }).attributeStyleMap;
  if (!map || typeof map.set !== 'function') return null;
  return map;
}

export function toTypedOmValue(css: TypedOmCss, value: StyleValue): unknown {
  const unit = resolveUnit(value);
  const numeric = resolveNumericValue(value);
  if (typeof numeric === 'string' || unit === STYLE_UNIT_RAW) return String(numeric);
  if (unit === STYLE_UNIT_PX) return css.px(numeric);
  if (unit === STYLE_UNIT_PERCENT) return css.percent(numeric);
  if (unit === STYLE_UNIT_NUMBER) return css.number(numeric);
  if (unit === STYLE_UNIT_DEG) return css.deg(numeric);
  return css.px(numeric);
}

export function toCssTextValue(value: StyleValue): string {
  const unit = resolveUnit(value);
  const numeric = resolveNumericValue(value);
  if (typeof numeric === 'string' || unit === STYLE_UNIT_RAW) return String(numeric);
  if (unit === STYLE_UNIT_PX) return `${numeric}px`;
  if (unit === STYLE_UNIT_PERCENT) return `${numeric}%`;
  if (unit === STYLE_UNIT_NUMBER) return String(numeric);
  if (unit === STYLE_UNIT_DEG) return `${numeric}deg`;
  return `${numeric}px`;
}
