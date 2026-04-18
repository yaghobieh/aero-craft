#!/usr/bin/env node
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const { resolveConfig, generateStandaloneCSS } = await import(join(root, '../dist/index.js'));

const argv = process.argv.slice(2);
const cmd = argv[0];

if (cmd === 'build') {
  const out = argv[1] || 'aerocraft.css';
  const css = generateStandaloneCSS(resolveConfig({}));
  writeFileSync(out, css, 'utf8');
  process.stdout.write(`Wrote ${out}\n`);
} else if (cmd === 'init') {
  const cfg = `import { defineConfig } from '@forgedevstack/aerocraft';\n\nexport default defineConfig({});\n`;
  writeFileSync('aerocraft.config.ts', cfg, 'utf8');
  process.stdout.write('Created aerocraft.config.ts\n');
} else {
  process.stderr.write('Usage: aerocraft build [file.css] | aerocraft init\n');
  process.exit(cmd ? 1 : 0);
}
