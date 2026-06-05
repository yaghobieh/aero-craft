import { DEFAULT_MODELS } from './models.const';

/* ============================== Types ============================== */

export type ModelEntry = {
  className: string;
  description?: string;
};

export type ModelRegistry = Record<string, Record<string, ModelEntry>>;

/* ============================== Registry ============================== */

let _registry: ModelRegistry = { ...DEFAULT_MODELS };

/**
 * Get the CSS class name for a component model.
 *
 * @example
 * model('input', 'rounded')  // → 'bear-input-rounded'
 * model('button', 'primary') // → 'bear-btn-primary'
 * model('card')              // → 'bear-card'
 */
export function model(component: string, variant?: string, prefix?: string): string {
  const pfx = prefix ?? 'bear';
  const sep = '-';
  const comp = _registry[component];
  if (!comp) return '';

  const key = variant || 'default';
  const entry = comp[key];
  if (!entry) return '';

  return pfx ? `${pfx}${sep}${entry.className}` : entry.className;
}

export function getModels(component: string): Record<string, ModelEntry> {
  return _registry[component] ?? {};
}

export function getComponents(): string[] {
  return Object.keys(_registry);
}

export function registerModels(models: ModelRegistry): void {
  for (const [comp, variants] of Object.entries(models)) {
    _registry[comp] = { ...(_registry[comp] ?? {}), ...variants };
  }
}

export function resetModels(): void {
  _registry = { ...DEFAULT_MODELS };
}
