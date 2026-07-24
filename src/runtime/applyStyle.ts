import {
  getAttributeStyleMap,
  getTypedOmCss,
  toCssTextValue,
  toKebabCase,
  toTypedOmValue,
} from './runtime.utils';
import type { ApplyStyleOptions, StyleHandle, StyleMap } from './runtime.types';

const styleRegistry = new WeakMap<HTMLElement, StyleMap>();

function writeStyles(element: HTMLElement, styles: StyleMap, merge: boolean): void {
  const css = getTypedOmCss();
  const typedMap = css ? getAttributeStyleMap(element) : null;
  const next: StyleMap = merge ? { ...(styleRegistry.get(element) ?? {}), ...styles } : { ...styles };

  for (const [property, value] of Object.entries(styles)) {
    const kebab = toKebabCase(property);
    if (typedMap && css) {
      typedMap.set(kebab, toTypedOmValue(css, value));
      continue;
    }
    element.style.setProperty(kebab, toCssTextValue(value));
  }

  styleRegistry.set(element, next);
}

function clearStyles(element: HTMLElement, properties?: string[]): void {
  const typedMap = getAttributeStyleMap(element);
  const current = styleRegistry.get(element) ?? {};
  const keys = properties?.map(toKebabCase) ?? Object.keys(current).map(toKebabCase);

  for (const kebab of keys) {
    if (typedMap) {
      typedMap.delete(kebab);
    } else {
      element.style.removeProperty(kebab);
    }
  }

  if (!properties) {
    styleRegistry.delete(element);
    return;
  }

  const remaining: StyleMap = { ...current };
  for (const property of properties) {
    delete remaining[property];
    delete remaining[toKebabCase(property)];
  }
  styleRegistry.set(element, remaining);
}

export function applyStyle(
  element: HTMLElement,
  styles: StyleMap,
  options: ApplyStyleOptions = {},
): StyleHandle {
  const useRegistry = options.useRegistry !== false;
  writeStyles(element, styles, useRegistry);

  return {
    element,
    set(next) {
      writeStyles(element, next, useRegistry);
    },
    clear(properties) {
      clearStyles(element, properties);
    },
  };
}

export function setStyle(element: HTMLElement, property: string, value: StyleMap[string]): void {
  applyStyle(element, { [property]: value });
}

export function clearStyle(element: HTMLElement, properties?: string[]): void {
  clearStyles(element, properties);
}

export function getRegisteredStyles(element: HTMLElement): StyleMap | undefined {
  return styleRegistry.get(element);
}
