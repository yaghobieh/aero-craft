import { useCallback, useEffect, useRef } from 'react';

export type AeroSelectorClassAction =
  | string
  | string[]
  | { add?: string | string[]; remove?: string | string[]; toggle?: string | string[]; set?: string | string[] };

export type AeroSelectorMap = Record<string, AeroSelectorClassAction>;

export type UseAeroApi = {
  ref: React.RefObject<HTMLElement | null>;
  apply: (map: AeroSelectorMap) => void;
  query: <T extends Element = Element>(selector: string) => T[];
};

function toList(value: string | string[] | undefined): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value.flatMap((v) => v.split(/\s+/).filter(Boolean));
  return value.split(/\s+/).filter(Boolean);
}

function applyAction(el: Element, action: AeroSelectorClassAction): void {
  if (typeof action === 'string' || Array.isArray(action)) {
    const classes = toList(action);
    el.classList.add(...classes);
    return;
  }
  if (action.set !== undefined) {
    el.className = toList(action.set).join(' ');
  }
  toList(action.add).forEach((c) => el.classList.add(c));
  toList(action.remove).forEach((c) => el.classList.remove(c));
  toList(action.toggle).forEach((c) => el.classList.toggle(c));
}

export function useAero<T extends HTMLElement = HTMLElement>(initial?: AeroSelectorMap): UseAeroApi {
  const ref = useRef<T | null>(null);

  const apply = useCallback((map: AeroSelectorMap) => {
    const root = ref.current ?? document.body;
    if (!root) return;
    Object.entries(map).forEach(([selector, action]) => {
      const nodes = selector === ':self' ? [root] : Array.from(root.querySelectorAll(selector));
      nodes.forEach((el) => applyAction(el, action));
    });
  }, []);

  const query = useCallback(<Q extends Element = Element>(selector: string): Q[] => {
    const root = ref.current ?? document.body;
    if (!root) return [];
    return Array.from(root.querySelectorAll<Q>(selector));
  }, []);

  useEffect(() => {
    if (initial) apply(initial);
  }, [initial, apply]);

  return { ref: ref as React.RefObject<HTMLElement | null>, apply, query };
}
