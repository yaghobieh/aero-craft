export type ModelEntry = {
  className: string;
  description?: string;
};

export type ModelRegistry = Record<string, Record<string, ModelEntry>>;

const DEFAULT_MODELS: ModelRegistry = {
  button: {
    default:  { className: 'btn',         description: 'Base button' },
    primary:  { className: 'btn-primary', description: 'Primary filled button' },
    outline:  { className: 'btn-outline', description: 'Outlined button' },
    ghost:    { className: 'btn-ghost',   description: 'Ghost / transparent button' },
    icon:     { className: 'btn-icon',    description: 'Square icon button' },
    circle:   { className: 'circle-button', description: 'Circular icon button' },
    sm:       { className: 'btn-sm',      description: 'Small size modifier' },
    lg:       { className: 'btn-lg',      description: 'Large size modifier' },
  },
  input: {
    default:   { className: 'input',          description: 'Standard input' },
    rounded:   { className: 'input-rounded',  description: 'Rounded input' },
    pill:      { className: 'input-pill',     description: 'Pill-shaped input' },
    underline: { className: 'input-underline', description: 'Underline-only input' },
  },
  textarea: {
    default: { className: 'textarea', description: 'Standard textarea' },
  },
  select: {
    default: { className: 'select', description: 'Standard select' },
  },
  card: {
    default: { className: 'card',       description: 'Standard card' },
    hover:   { className: 'card-hover', description: 'Card with hover effect' },
    flat:    { className: 'card-flat',  description: 'Flat card (no border)' },
  },
  badge: {
    default: { className: 'badge', description: 'Inline badge' },
  },
  avatar: {
    default: { className: 'avatar',    description: 'Standard avatar' },
    sm:      { className: 'avatar-sm', description: 'Small avatar' },
    lg:      { className: 'avatar-lg', description: 'Large avatar' },
  },
  container: {
    default: { className: 'container', description: 'Responsive container' },
  },
  divider: {
    default: { className: 'divider', description: 'Horizontal divider' },
  },
  skeleton: {
    default: { className: 'skeleton', description: 'Loading skeleton' },
  },
  overlay: {
    default: { className: 'overlay', description: 'Full-screen overlay' },
  },
};

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

/**
 * Get all available models for a component.
 */
export function getModels(component: string): Record<string, ModelEntry> {
  return _registry[component] ?? {};
}

/**
 * Get all registered component names.
 */
export function getComponents(): string[] {
  return Object.keys(_registry);
}

/**
 * Register custom models.
 */
export function registerModels(models: ModelRegistry): void {
  for (const [comp, variants] of Object.entries(models)) {
    _registry[comp] = { ...(_registry[comp] ?? {}), ...variants };
  }
}

/**
 * Reset to default models.
 */
export function resetModels(): void {
  _registry = { ...DEFAULT_MODELS };
}
