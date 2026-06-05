# Changelog

## [1.0.5] - 2026-05-14

### Added
- **Container query variant** (`@container:`) — wrap utilities in `@container { … }`. Supports named containers via `@container/sidebar:`. Example: `@container:bear-flex-col`.
- **Plugin system** (`addUtilities`, `addComponents`) — third-party plugins can now register custom utilities and components via the new `plugins` config array. Plugins receive a `{ addUtilities, addComponents, theme, config }` API, similar to Tailwind's plugin architecture.
- **`print:` variant** — media query variant for print styling. Example: `print:bear-hidden`.
- **`aria-*` / `data-*` variants** — dynamic attribute-based variants. `aria-selected:bear-bg-blue-500` generates `[aria-selected="true"]`; `data-active:bear-text-white` generates `[data-active]`.
- **Full `peer:` / `group:` variant set** — `group-focus`, `group-active`, `group-focus-within`, `group-focus-visible`, `group-disabled`, `group-checked`, `group-invalid`, `peer-hover`, `peer-focus`, `peer-focus-visible`, `peer-active`, `peer-checked`, `peer-disabled`, `peer-invalid`, `peer-required`, `peer-placeholder-shown`.
- **Ring utilities (first-class)** — `ring-0` through `ring-8`, `ring-inset`, `ring-offset-*`, and ring color utilities (`ring-blue-500`, `ring-gray-*`, etc.) using `--ac-ring-color` CSS custom property.
- **Divide utilities** — `divide-x`, `divide-y` with width scale (0–8), `divide-solid/dashed/dotted/double/none`, and divide color utilities via `> * + *` nested selector.
- **Content utility** — `content-none` and `content-empty` as static shortcuts. Arbitrary `content-['…']` now supported via the bracket notation.
- **`env()` support** — arbitrary paren syntax `p-(env-safe-area-inset-top)` resolves to `env(safe-area-inset-top)`. Also recognized in `text-[env(…)]` and `bg-[env(…)]` bracket notation.
- **`prefers-reduced-motion` variants** — `motion-reduce:` and `motion-safe:` wrap rules in the appropriate media query.
- **`supports-*` variants** — feature detection variants like `supports-grid:bear-grid` → `@supports (display: grid)`. Bracket form `supports-[display:grid]:` also supported.
- **Additional pseudo-class/element variants** — `visited`, `checked`, `required`, `invalid`, `valid`, `empty`, `enabled`, `indeterminate`, `read-only`, `read-write`, `only-child`, `first-of-type`, `last-of-type`, `only-of-type`, `before`, `after`, `selection`, `marker`, `first-line`, `first-letter`.
- **Media orientation variants** — `portrait:` and `landscape:`.
- **Contrast preference variants** — `contrast-more:` and `contrast-less:`.
- **Nested selector support** in `ShortcutDefinition` (`nestedSelector` + `nestedCss`) for utilities that target child elements (e.g. divide utilities).

### Changed
- `AeroCraftGroupsConfig` now includes `ring`, `divide`, and `content` groups (all enabled by default).
- `AeroCraftResolvedConfig` includes `pluginUtilities` and `pluginComponents` from the plugin system.
- `VARIANT_SELECTOR_MAP` expanded from 13 to 50+ entries covering the full pseudo-class, pseudo-element, group, and peer variant set.
- Variant token regex updated to detect dynamic patterns (`aria-*`, `data-*`, `supports-*`, `@container`).
- Ring color utilities now use `--ac-ring-color` CSS variable (previously `--tw-ring-color` / `--bear-ring-color`).

## [1.0.4] - 2026-05-01

### Added
- VS Code extension IntelliSense scaffolding.
- Portal documentation overhaul.

## [1.0.3] - 2026-04-13

### Added
- **Native variant generation** — `dark:`, `hover:`, `focus:`, `active:`, `disabled:`, `group-hover:`, `placeholder:`, `focus-visible:`, `focus-within:`, `first:`, `last:`, `odd:`, `even:` variants are now generated **natively** by the AeroCraft PostCSS plugin. No separate plugin needed.
- **Compound variants** — `dark:hover:`, `dark:focus:`, etc. work out of the box with correct nested CSS selectors.
- **Opacity modifier support** — `bear-bg-primary-500/30` resolves correctly, including CSS variable colors via `color-mix()`.
- **SVG fill/stroke utilities** — full palette coverage for `fill` and `stroke` properties; primary color fill/stroke via CSS variables.
- **Theme-aware primary utilities** — `bear-bg-primary-*`, `bear-text-primary-*`, `bear-border-primary-*`, `bear-ring-primary-*`, `bear-fill-primary-*`, `bear-stroke-primary-*` all reference `var(--bear-primary-*)` CSS variables for runtime theme switching.
- **`darkSelector` config option** — customize the dark mode selector (default: `.dark, .bear-dark`).
- **Content-based variant scanning** — AeroCraft scans your source files (via `content` glob patterns) and generates only the variant classes you actually use. Zero waste CSS.
- **Responsive + variant combos** — `sm:dark:`, `md:hover:`, etc. fully supported.
- **Auto-generated base utilities for missing colors** — `bear-bg-primary-500`, `bear-fill-white`, opacity classes like `bear-bg-primary-500/15` are automatically created when found in source files.

### Removed
- **`postcss-bear-variants` companion plugin is no longer needed.** All variant generation is built into AeroCraft's core PostCSS plugin — just like Tailwind, one plugin does everything.

### Changed
- Default color palette expanded: zinc, gray, slate, neutral, red, green, blue, yellow, orange, amber, emerald, cyan, purple, pink included out of the box.
- Content scanning regex improved to detect fill/stroke and opacity-modified class patterns.

### Fixed
- SVG elements defaulting to black fill when utility classes were not generated by the base config.
- CSS variable opacity modifiers (e.g. `bear-bg-primary-900/30`) returning null instead of `color-mix()` expressions.
- Compound variant selectors (`dark:hover:`) overwriting instead of composing.

## [1.0.2] - 2026-04-10

### Fixed
- PostCSS import ordering for `@aerocraft` directive in multi-file CSS setups.
- Standalone mode generating duplicate keyframe blocks.

## [1.0.1] - 2026-04-24

### Added
- `componentRecipes` on `AeroCraftConfig`: named presets (`circle-button`, `input-rounded` by default); merge with your config to override individual CSS declarations.
- `utilityRecipe` on `ShortcutDefinition` and `AeroCraftShortcutEntry` (optional note for tooling and docs).

### Changed
- Shortcut metadata field renamed from `tailwind` to `utilityRecipe`. Config entries that still use `tailwind` are normalized at resolve time.

## [1.0.0] - 2026-04-21

### Added
- PostCSS plugin (`@forgedevstack/aerocraft/postcss`) for shortcut class generation
- Configurable groups, prefix, separator, `mode: 'apply' | 'standalone'`, responsive breakpoints
- `theme` on `AeroCraftConfig`: `colors`, `fontFamily`, `spacing`, `borderRadius`, `boxShadow`, `screens`, and `extend` merge into utilities (`text-*`, `bg-*`, `border-*`, `font-*`, `rounded-*`, etc.)
- `customShortcuts` for advanced patterns
- Pre-built `dist/styles.css`
- `@aerocraft` directive with layer params: `base`, `fonts`, `layout`, `motion`, `all`
- Content scanning for arbitrary classes
- TypeScript types for public APIs
