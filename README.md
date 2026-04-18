# AeroCraft

**Tailwind CSS composition library for modern web development.**  
Part of the [ForgeStack](https://forgedevstack.com) ecosystem.

---

## What is AeroCraft?

AeroCraft is a PostCSS plugin that generates shortcut utility classes by composing Tailwind utilities.  
Instead of writing `flex flex-col items-center justify-center` everywhere, you write `ac-flex-col-center`.

**Works with React, Vue, Angular, Svelte, Vanilla JS — any stack.**

---

## Installation

```bash
npm install @forgedevstack/aerocraft
# Tailwind is required as a peer
npm install tailwindcss postcss autoprefixer
```

---

## Setup

### 1. Create `aerocraft.config.ts`

```ts
import { defineConfig } from '@forgedevstack/aerocraft';

export default defineConfig({
  prefix: 'ac',        // class prefix: ac-flex-col
  separator: '-',      // separator: ac-flex-col or ac_flex_col
  mode: 'tailwind',    // 'tailwind' | 'standalone'
  groups: 'all',       // enable all groups or pick: { flex: true, grid: true }
});
```

### 2. Add to `postcss.config.js`

```js
const aerocraft = require('@forgedevstack/aerocraft/postcss');
const config = require('./aerocraft.config');

module.exports = {
  plugins: [
    aerocraft(config.default ?? config),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
```

### 3. Add `@aerocraft` to your CSS entry file

```css
@aerocraft;

@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Shortcut Reference

### Flex Group (`prefix-flex-*`)

| Shortcut | Tailwind Equivalent |
|---|---|
| `ac-flex-col` | `flex flex-col` |
| `ac-flex-row` | `flex flex-row` |
| `ac-flex-col-center` | `flex flex-col items-center justify-center` |
| `ac-flex-row-center` | `flex flex-row items-center justify-center` |
| `ac-flex-col-j-center` | `flex flex-col justify-center` |
| `ac-flex-between` | `flex items-center justify-between` |
| `ac-flex-wrap` | `flex flex-wrap` |
| `ac-flex-1` | `flex-1` |
| `ac-flex-none` | `flex-none` |

### Grid Group (`prefix-grid-*`)

| Shortcut | Tailwind Equivalent |
|---|---|
| `ac-grid-center` | `grid place-items-center` |
| `ac-grid-2` | `grid grid-cols-2` |
| `ac-grid-3` | `grid grid-cols-3` |
| `ac-grid-4` | `grid grid-cols-4` |
| `ac-grid-auto-fill` | auto-fill grid |

### Position Group (`prefix-absolute-*`, `prefix-fixed-*`, `prefix-sticky-*`)

| Shortcut | Description |
|---|---|
| `ac-absolute-center` | Centered absolutely via translate trick |
| `ac-absolute-fill` | Fill parent absolutely |
| `ac-fixed-fill` | Fill viewport (fixed) |
| `ac-sticky-top` | Sticky top |

### Size Group (`prefix-size-*`, `prefix-w-*`, `prefix-h-*`)

| Shortcut | Description |
|---|---|
| `ac-size-full` | `w-full h-full` |
| `ac-size-screen` | `w-screen h-screen` |
| `ac-w-full` | `w-full` |
| `ac-min-h-screen` | `min-h-screen` |

### Text Group

| Shortcut | Description |
|---|---|
| `ac-text-ellipsis` | Truncate with ellipsis |
| `ac-line-clamp-2` | Clamp to 2 lines |
| `ac-line-clamp-3` | Clamp to 3 lines |
| `ac-text-balance` | Balance text |

### Other Groups

- **Display**: `ac-block`, `ac-inline-flex`, `ac-hidden`, `ac-sr-only`
- **Overflow**: `ac-overflow-hidden`, `ac-overflow-y-auto`
- **Cursor**: `ac-cursor-pointer`, `ac-cursor-not-allowed`, `ac-cursor-grab`
- **Transition**: `ac-transition`, `ac-transition-fast`, `ac-transition-slow`
- **Interactive**: `ac-pointer-none`, `ac-select-none`, `ac-outline-none`

---

## Custom Shortcuts

```ts
export default defineConfig({
  customShortcuts: {
    'card': {
      tailwind: 'rounded-xl shadow-md p-6 bg-white',
      css: { 'border-radius': '0.75rem', 'box-shadow': '0 4px 6px rgb(0 0 0 / 0.1)', padding: '1.5rem' },
      description: 'Opinionated card container',
    },
  },
});
```

---

## Custom Prefix

```ts
export default defineConfig({
  prefix: 'my-app',
  separator: '_',
});
// Generates: .my-app_flex-col { ... }
```

---

## Standalone Mode (no Tailwind)

```ts
export default defineConfig({
  mode: 'standalone',
});
// Generates actual CSS values instead of @apply
```

---

## Links

- [Portal](https://aerocraftjs.com)
- [npm](https://www.npmjs.com/package/@forgedevstack/aerocraft)
- [GitHub](https://github.com/yaghobieh/aerocraft)
- [ForgeStack](https://forgedevstack.com)

---

## License

MIT © John Yaghobieh
