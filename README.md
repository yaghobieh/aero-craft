# AeroCraft

Composable shortcut utilities for CSS, built as a PostCSS plugin. Part of [ForgeStack](https://forgedevstack.com).

## What it does

- Ships hundreds of **shortcut classes** (flex layouts, grid, spacing, typography, motion, and more).
- Works in **`standalone`** mode (real CSS declarations) or **`apply`** mode (`@apply` for projects that already use a utility CSS layer).
- Expands in your stylesheet with **`@aerocraft`** (full bundle) or **`@aerocraft base`**, **`fonts`**, **`layout`**, **`motion`** for smaller chunks.
- Adds **design tokens** through a familiar `theme` object: colors become `bg-*` / `text-*` / `border-*`, fonts become `font-*`, spacing becomes `p-*` / `m-*` / `gap-*`, and so on.

## Install

```bash
npm install @forgedevstack/aerocraft postcss
```

Optional: `postcss`, `autoprefixer` as needed by your bundler.

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
      brand: { DEFAULT: '#d70f66', 500: '#f91f7d' },
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

`theme.colors.myred = '#ef4444'` generates `bg-myred`, `text-myred`, and `border-myred`. Nested keys add `bg-myred-500`, etc.

Advanced one-offs still use `customShortcuts` (full control over emitted CSS / apply target).

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

Layered output keeps component CSS predictable. AeroCraft is **not** a browser reset—add your own minimal base rules or a normalize package if you need one.

## Pre-built CSS

```ts
import '@forgedevstack/aerocraft/styles.css';
```

Useful for quick prototypes; the PostCSS pipeline is recommended for production so `theme` and `customShortcuts` apply.

## CLI

```bash
npx aerocraft build ./dist/aerocraft.css
npx aerocraft init
```

## Editor support

See the `aero-craft-plugin` workspace for a VS Code / Cursor extension (completions, Bear snippets, optional utility-alias mode).

## Links

- [Portal](https://aerocraftjs.com)
- [npm](https://www.npmjs.com/package/@forgedevstack/aerocraft)
- [GitHub](https://github.com/yaghobieh/aerocraft)

## License

MIT © John Yaghobieh
