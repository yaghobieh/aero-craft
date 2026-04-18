import { resolveConfig, generateStandaloneCSS } from '../dist/index.js';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const config = resolveConfig({ groups: 'all' });
const css = generateStandaloneCSS(config);
writeFileSync(join(__dirname, '../dist/styles.css'), css);
console.log('Built dist/styles.css');
