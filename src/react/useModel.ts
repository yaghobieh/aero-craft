import { useMemo } from 'react';
import { model as resolveModel, getModels } from '../core/models';
import type { UseModelOptions } from './useModel.types';

/**
 * React hook to resolve a component model to a CSS class name.
 *
 * @example
 * function MyInput({ model = 'default', className, ...props }) {
 *   const cls = useModel('input', model);
 *   return <input className={`${cls} ${className ?? ''}`} {...props} />;
 * }
 *
 * <MyInput model="rounded" placeholder="Search..." />
 * // renders: <input class="bear-input-rounded" placeholder="Search..." />
 *
 * <MyInput model="pill" />
 * // renders: <input class="bear-input-pill" />
 */
export function useModel(
  component: string,
  variant?: string,
  options?: UseModelOptions,
): string {
  return useMemo(() => {
    const cls = resolveModel(component, variant, options?.prefix);
    if (options?.extra) return `${cls} ${options.extra}`.trim();
    return cls;
  }, [component, variant, options?.prefix, options?.extra]);
}

/**
 * Returns all available model variants for a component.
 *
 * @example
 * const variants = useModelVariants('button');
 * // → { default: { className: 'btn', ... }, primary: { className: 'btn-primary', ... }, ... }
 */
export function useModelVariants(component: string) {
  return useMemo(() => getModels(component), [component]);
}
