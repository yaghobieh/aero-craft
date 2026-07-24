# AeroCraft

Shortcut-first utility classes for CSS for [ForgeStack](https://forgedevstack.com). One PostCSS plugin. All variants built in. No extras needed.

> Goodbye Others. Hello AeroCraft.

## Why AeroCraft?

| Feature | AeroCraft | Others |
|---------|-----------|----------|
| Utility-first CSS | ✅ | ✅ |
| Zero runtime | ✅ | ✅ |
| Custom prefix | ✅ (`bear-`, `app-`, etc.) | ❌ (limited) |
| Component recipes | ✅ Built-in | ❌ Requires plugin |
| Theme-aware CSS variables | ✅ Native | ⚠️ Requires config |
| Dark mode variants | ✅ **Built into core** | ✅ |
| Hover/focus/active variants | ✅ **Built into core** | ✅ |
| Compound variants (`dark:hover:`) | ✅ Native | ✅ |
| Content-based scanning | ✅ Only generates what you use | ✅ JIT |
| Single plugin setup | ✅ **One plugin does everything** | ✅ |
| Bundle size | ~15KB gzipped | ~25KB gzipped |

## Features

- **180+ shortcuts** — layout, flex, grid, spacing, typography, motion, filters, and more.
- **All variants built in** — `dark:`, `hover:`, `focus:`, `active:`, `disabled:`, `group-hover:`, `placeholder:`, `focus-visible:`, `focus-within:`, `first:`, `last:`, `odd:`, `even:`, plus **1.0.5+**: `@container:`, `print:`, `aria-*`, `data-*`, `motion-reduce:` / `motion-safe:`, `supports-*`, `portrait:` / `landscape:`, `contrast-more:` / `contrast-less:`, and compound variants like `dark:hover:`.
- **Content scanning** — AeroCraft reads your source files and generates only the variant CSS you actually use. Zero waste.
- **Default palette** — zinc, gray, slate, neutral, red, green, blue, yellow, orange, amber, emerald, cyan, purple, pink (+ white/black) ship as theme utilities out of the box.
- **Gradients** — `bg-gradient-to-*` + `from-*` / `via-*` / `to-*` share `--ac-gradient-*` tokens.
- **Sibling spacing** — `space-x-*` / `space-y-*` use nested `> * + *` margins (not `gap`).
- **Ring / divide / content** — first-class utility groups.
- **Plugin API** — `plugins: [{ addUtilities, addComponents, theme, config }]`.
- **Opacity modifiers** — `bear-bg-primary-500/30` works out of the box, including CSS variable colors via `color-mix()`.
- **SVG support** — `fill` and `stroke` utilities with full palette and dark mode variants.
- **Theme-aware primary colors** — `bear-bg-primary-*` references `var(--bear-primary-*)` CSS variables for runtime theme switching.
- **Standalone or `@apply`**: emit full rules, or `@apply` when layering utilities.
- **Chunked bundles** via `@aerocraft`, `@aerocraft base`, `fonts`, `layout`, `motion`, or `all`.
- **Design tokens** from a single `theme` object: colors, spacing, fonts, radii, shadows, breakpoints.
- **Component recipes** — named presets like `circle-button`, `input-rounded`.
- **CLI** (`aerocraft build`, `aerocraft init`) and optional **React** helpers.
- **Runtime (optional)** — `@forgedevstack/aerocraft/runtime` for high-frequency numeric style updates via CSS Typed OM with `element.style` fallback. Class shortcuts remain the static path.
- **Pre-built CSS** at `@forgedevstack/aerocraft/styles.css` for quick prototyping.

## Quick Start

### 1. Install

```bash
npm install @forgedevstack/aerocraft postcss postcss-cli
```

### 2. Create config

```js
// aerocraft.config.js
export default {
  prefix: 'bear',
  separator: '-',
  mode: 'standalone',
  groups: 'all',
  responsive: true,
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      zinc: {
        50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8',
        400: '#a1a1aa', 500: '#71717a', 600: '#52525b', 700: '#3f3f46',
        800: '#27272a', 900: '#18181b', 950: '#09090b',
      },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
  },
};
```

### 3. Set up PostCSS — one plugin, that's it

```js
// postcss.config.js
import { aerocraftPlugin } from '@forgedevstack/aerocraft/postcss';
import config from './aerocraft.config.js';

export default {
  plugins: [aerocraftPlugin(config)],
};
```

No extra variant plugin. No companion files. AeroCraft handles everything — base utilities, dark mode, hover, focus, and all state variants — in a single plugin.

### 4. Add CSS entry

```css
/* main.css */
@aerocraft all;

:root {
  --bear-primary-500: #ec4899;
}
```

### 5. Use utility classes

```tsx
<button className="bear-bg-primary-500 bear-text-white bear-px-4 bear-py-2 bear-rounded-lg hover:bear-bg-primary-600 dark:bear-bg-primary-700">
  Click me
</button>
```

## Migration Guide

Moving from other utility CSS stacks is simple:

| Utility stack class | AeroCraft |
|----------|-----------|
| `bg-blue-500` | `bear-bg-blue-500` |
| `text-white` | `bear-text-white` |
| `p-4` | `bear-p-4` |
| `rounded-lg` | `bear-rounded-lg` |
| `hover:bg-blue-600` | `hover:bear-bg-blue-600` |
| `dark:bg-gray-900` | `dark:bear-bg-gray-900` |
| `dark:hover:bg-gray-800` | `dark:hover:bear-bg-gray-800` |
| `flex items-center` | `bear-flex bear-items-center` |

Just add your prefix and you're done. All variants work natively — no extra plugins needed.

## Config

```ts
import { defineConfig } from '@forgedevstack/aerocraft';

export default defineConfig({
  prefix: 'bear',
  separator: '-',
  mode: 'standalone',
  responsive: true,
  groups: 'all',
  content: ['./src/**/*.{ts,tsx}'],
  darkSelector: '.dark, .bear-dark',
  theme: {
    colors: {
      brand: { DEFAULT: '#2563eb', 500: '#3b82f6' },
      ink: '#0f172a',
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
});
```

### Dark mode

Dark mode is **built into AeroCraft's core** — no companion plugin needed. Just use `dark:` variants in your classes and set `content` to point at your source files. AeroCraft scans them and generates the CSS automatically.

```tsx
<div className="bear-bg-white dark:bear-bg-zinc-900 bear-text-zinc-900 dark:bear-text-zinc-100">
  Automatically adapts to dark mode
</div>
```

The `darkSelector` config option controls which CSS class triggers dark mode. Default: `.dark, .bear-dark`.

Supported variants include: `dark:`, `hover:`, `focus:`, `focus-visible:`, `focus-within:`, `active:`, `disabled:`, `visited:`, `checked:`, `group-*`, `peer-*`, `placeholder:`, `before:` / `after:`, `first:` / `last:` / `odd:` / `even:`, `@container:`, `print:`, `aria-*`, `data-*`, `motion-reduce:` / `motion-safe:`, `supports-*`, `portrait:` / `landscape:`, `contrast-more:` / `contrast-less:`, and all compound combinations.

### Gradients

```html
<div class="bear-bg-gradient-to-r bear-from-blue-500 bear-via-purple-500 bear-to-pink-500"></div>
```

Direction utilities and color stops share `--ac-gradient-from` / `--ac-gradient-via` / `--ac-gradient-to` / `--ac-gradient-stops`.

### Runtime styles (optional)

For animation loops and other high-frequency numeric updates, use the runtime module instead of rewriting class strings:

```ts
import { applyStyle } from '@forgedevstack/aerocraft/runtime';

const handle = applyStyle(el, { width: 120, opacity: { value: 0.8, unit: 'number' } });
handle.set({ transform: 'translateY(8px)' });
```

Uses CSS Typed OM (`attributeStyleMap` + `CSS.px`) when available, otherwise `element.style`. Keep static layout on class shortcuts.

### Component presets

`componentRecipes` extends built-in defaults:

```ts
export default defineConfig({
  componentRecipes: {
    'circle-button': { width: '3rem', height: '3rem' },
    'input-rounded': { borderRadius: '999px' },
  },
});
```

## CLI

```bash
npx aerocraft build ./dist/aerocraft.css
npx aerocraft init
```

## Pre-built stylesheet

```ts
import '@forgedevstack/aerocraft/styles.css';
```

Best for demos; production should use PostCSS so `theme` and `customShortcuts` apply.

## Editor tooling

The **aero-craft-plugin** repo ships a VS Code / Cursor extension (completions, snippets, optional alias mode). It depends on `@forgedevstack/aerocraft` and reads `aerocraft.config.*` for the configured `prefix` / `separator`.

## Tests

```bash
npm test
```

Vitest covers PostCSS expansion, native variants, gradients, `space-x` / `divide-x`, the plugin API, and the runtime fallback path.

## Publishing

GitHub Actions (`.github/workflows/publish.yml`) runs typecheck, tests, and build on push to `master`/`main` and on `workflow_dispatch`.

Required repository secret: `NPM_TOKEN` (npm automation token). Workflow permissions: `contents: write`, `id-token: write` (provenance).

Manual / tagged releases whose commit message starts with `release:` skip the automated patch bump so you can ship an exact version.

## Documentation

- **Site**: [aerocraftjs.com](https://aerocraftjs.com) — guides, property reference, recipes, **Studio** (live config), and **Playground**.
- **ForgeStack hub**: [forgedevstack.com/aerocraft](https://forgedevstack.com/aerocraft) — ecosystem context and install overview.
- **Changelog**: see `CHANGELOG.md` in this repo.

## Package links

- [npm](https://www.npmjs.com/package/@forgedevstack/aerocraft)
- [Repository](https://github.com/yaghobieh/aero-craft)
- [Issues](https://github.com/yaghobieh/aero-craft/issues)

## License

MIT © John Yaghobieh
