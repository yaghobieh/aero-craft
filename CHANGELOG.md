# Changelog

## [1.0.0] - 2026-04-14

### Added
- Initial release of `@forgedevstack/aerocraft`
- PostCSS plugin (`@forgedevstack/aerocraft/postcss`) for shortcut class generation
- 10 class groups: flex, grid, position, size, text, display, overflow, cursor, transition, interactive
- 70+ built-in shortcut classes
- Configurable prefix, separator, and mode via `aerocraft.config.ts`
- `mode: 'tailwind'` — uses `@apply` for Tailwind-based builds
- `mode: 'standalone'` — outputs real CSS values, no Tailwind required
- `defineConfig` helper with full TypeScript support
- Custom shortcuts via `customShortcuts` config option
- Pre-built `dist/styles.css` for zero-config usage
- `@aerocraft` directive for explicit CSS injection point
- TypeScript types for all public APIs
