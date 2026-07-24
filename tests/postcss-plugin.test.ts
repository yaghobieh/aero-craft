import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import postcss from 'postcss';
import { describe, expect, it } from 'vitest';
import { aerocraftPlugin } from '../src/postcss/index';
import { generateStandaloneCSS, resolveConfig } from '../src/index';
import { SPACING_SHORTCUTS } from '../src/constants/shortcuts.const';
import { NESTED_SIBLING_SELECTOR, AC_GRADIENT_STOPS, AC_GRADIENT_FROM } from '../src/constants/numbers.const';
import type { AeroCraftPlugin } from '../src/types/config.types';

async function runPostcss(css: string, config: Record<string, unknown> = {}) {
  const result = await postcss([aerocraftPlugin(config)]).process(css, { from: undefined });
  return result.css;
}

describe('AeroCraft PostCSS plugin', () => {
  it('expands @aerocraft all shortcuts', async () => {
    const css = await runPostcss('@aerocraft all;', { prefix: 'bear', groups: 'all' });
    expect(css).toContain('.bear-flex');
    expect(css).toContain('.bear-space-x-4');
    expect(css).toContain(NESTED_SIBLING_SELECTOR.trim());
  });

  it('emits dark and compound dark:hover variants from content scan', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'aerocraft-'));
    const file = join(dir, 'App.tsx');
    writeFileSync(file, '<div className="dark:bear-flex dark:hover:bear-hidden" />');
    const css = await runPostcss('@aerocraft;', {
      prefix: 'bear',
      content: [join(dir, '**/*.{ts,tsx}')],
      darkSelector: '.dark, .bear-dark',
    });
    expect(css).toContain('.dark .dark\\:bear-flex');
    expect(css).toContain('.bear-dark .dark\\:bear-flex');
    expect(css).toContain('dark\\:bear-flex');
    expect(css).toContain('dark\\:hover\\:bear-hidden');
  });

  it('resolves opacity modifiers for hex and CSS variables', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'aerocraft-'));
    writeFileSync(join(dir, 'App.tsx'), '<div className="bear-bg-blue-500/50 bear-bg-primary-500/30" />');
    const css = await runPostcss('@aerocraft;', {
      prefix: 'bear',
      content: [join(dir, '**/*.{ts,tsx}')],
    });
    expect(css).toContain('rgba(');
    expect(css).toContain('color-mix(');
  });

  it('supports plugin addUtilities and addComponents', async () => {
    const plugin: AeroCraftPlugin = ({ addUtilities, addComponents }) => {
      addUtilities({ 'util-chip': { display: 'inline-flex' } });
      addComponents({ 'cmp-panel': { padding: '16px' } });
    };
    const css = await runPostcss('@aerocraft;', {
      prefix: 'bear',
      plugins: [plugin],
    });
    expect(css).toContain('.bear-util-chip');
    expect(css).toContain('.bear-cmp-panel');
  });

  it('emits @container, print, aria, and data variants', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'aerocraft-'));
    writeFileSync(
      join(dir, 'App.tsx'),
      '<div className="@container:bear-flex print:bear-hidden aria-selected:bear-bg-blue-500 data-active:bear-text-white" />',
    );
    const css = await runPostcss('@aerocraft;', {
      prefix: 'bear',
      content: [join(dir, '**/*.{ts,tsx}')],
    });
    expect(css).toContain('@container');
    expect(css).toContain('@media print');
    expect(css).toContain('[aria-selected="true"]');
    expect(css).toContain('[data-active]');
  });

  it('composes gradient direction with --ac-gradient stops', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'aerocraft-'));
    writeFileSync(
      join(dir, 'App.tsx'),
      '<div className="bear-bg-gradient-to-r bear-from-blue-500 bear-to-pink-500" />',
    );
    const css = await runPostcss('@aerocraft all;', {
      prefix: 'bear',
      content: [join(dir, '**/*.{ts,tsx}')],
      groups: 'all',
    });
    expect(css).toContain(`var(${AC_GRADIENT_STOPS})`);
    expect(css).toContain(AC_GRADIENT_FROM);
    expect(css).not.toContain('--tw-gradient-from');
  });

  it('emits space-x and divide-x nested sibling selectors', () => {
    expect(SPACING_SHORTCUTS['space-x-4']?.nestedSelector).toBe(NESTED_SIBLING_SELECTOR);
    expect(SPACING_SHORTCUTS['space-x-4']?.nestedCss?.['margin-inline-start']).toBe('16px');
    expect(SPACING_SHORTCUTS['space-y-2']?.nestedCss?.['margin-block-start']).toBe('8px');
    expect(SPACING_SHORTCUTS['space-x-4']?.css).toEqual({});
    const css = generateStandaloneCSS(resolveConfig({
      prefix: 'bear',
      groups: { spacing: true, divide: true },
    }));
    expect(css).toContain(NESTED_SIBLING_SELECTOR);
    expect(css).toContain('margin-inline-start');
    expect(css).toContain('border-left-width');
  });

  it('ships unified default palette families', () => {
    const css = generateStandaloneCSS(resolveConfig({
      prefix: 'bear',
      groups: { color: true },
    }));
    expect(css).toContain('.bear-background-zinc-900');
    expect(css).toContain('.bear-background-gray-500');
    expect(css).toContain('.bear-background-slate-200');
    expect(css).toContain('.bear-background-emerald-600');
  });
});
