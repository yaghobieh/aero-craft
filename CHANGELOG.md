# Changelog

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
