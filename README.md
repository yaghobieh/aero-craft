# AeroCraft

Shortcut-first utility classes for CSS, compiled by a PostCSS plugin to plain declarations or `@apply` blocks. Built for [ForgeStack](https://forgedevstack.com) apps that want expressive layout and typography without shipping a runtime.

## Features

- **180+ shortcuts** across layout, flex, grid, spacing, type, motion, filters, and more — each class maps to real CSS the browser understands.
- **Standalone or apply**: emit full rules, or `@apply` when you already layer utilities in your pipeline.
- **Chunked bundles** via `@aerocraft`, `@aerocraft base`, `fonts`, `layout`, `motion`, or `all`.
- **Design tokens** from a single `theme` object: colors → `background-*` / `color-*` / `border-color-*`, spacing → `p-*` / `m-*` / `gap-*`, fonts, radii, shadows, and breakpoints for responsive prefixes.
- **componentRecipes** (v1.0.1+): named presets such as `circle-button` and `input-rounded`; merge your own or override individual declarations per preset.
- **customShortcuts** for patterns the generator does not ship, with optional **utilityRecipe** strings for docs and tooling (legacy config key `tailwind` is still read and normalized).
- **CLI** (`aerocraft build`, `aerocraft init`) and optional **React** helpers from `@forgedevstack/aerocraft/react`.
- **Pre-built CSS** at `@forgedevstack/aerocraft/styles.css` for quick spikes.

## Install

```bash
npm install @forgedevstack/aerocraft postcss
```

Add `autoprefixer` if your stack expects it.

## PostCSS

```js
import { aerocraftPlugin } from '@forgedevstack/aerocraft/postcss';
import config from './aerocraft.config.js';

export default {
  plugins: [aerocraftPlugin(config)],
};
```

## Config

```ts
import { defineConfig } from '@forgedevstack/aerocraft';

export default defineConfig({
  prefix: '',
  separator: '-',
  mode: 'standalone',
  responsive: true,
  groups: 'all',
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

`theme.colors.accent = '#059669'` yields `background-accent`, `color-accent`, and `border-color-accent`. Nested objects produce stepped utilities such as `background-brand-500`.

### Component presets

`componentRecipes` extends built-in defaults. Use the same name to replace only the fields you need:

```ts
export default defineConfig({
  componentRecipes: {
    'circle-button': { width: '3rem', height: '3rem' },
    'input-rounded': { borderRadius: '999px' },
  },
});
```

See the portal doc **Core concepts → Component presets** for HTML examples and TypeScript usage.

### Dark mode

AeroCraft does not emit a `dark:` variant. Prefer semantic tokens in `theme.colors`, a class on `html`/`body`, or your own `@media (prefers-color-scheme: dark)` rules. Responsive prefixes such as `md:` come from `responsive: true` and your breakpoints map.

## CSS entry

```css
@layer utilities {
  @aerocraft;
}

@layer base {
  :root {
    color-scheme: dark light;
  }
}
```

AeroCraft is not a CSS reset — add normalize or your UI kit’s base layer if you need one.

## Pre-built stylesheet

```ts
import '@forgedevstack/aerocraft/styles.css';
```

Best for demos; production should use PostCSS so `theme` and `customShortcuts` apply.

## CLI

```bash
npx aerocraft build ./dist/aerocraft.css
npx aerocraft init
```

## Editor tooling

The **aero-craft-plugin** repo ships a VS Code / Cursor extension (completions, snippets, optional alias mode).

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
