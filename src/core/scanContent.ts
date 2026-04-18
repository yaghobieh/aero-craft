import { readFileSync, existsSync } from 'node:fs';
import { globSync } from 'glob';
import type { AeroCraftResolvedConfig } from '../types/config.types';
import { extractArbitraryCandidatesFromSource, renderArbitraryStandaloneRule } from './arbitrary';

export function generateCssFromContentScan(
  patterns: string[],
  config: AeroCraftResolvedConfig,
): string {
  const seen = new Set<string>();
  const rules: string[] = [];

  for (const pattern of patterns) {
    const files = globSync(pattern, { nodir: true, ignore: ['**/node_modules/**'] });
    for (const file of files) {
      if (!existsSync(file)) continue;
      const src = readFileSync(file, 'utf8');
      for (const name of extractArbitraryCandidatesFromSource(src)) {
        if (seen.has(name)) continue;
        seen.add(name);
        const css = renderArbitraryStandaloneRule(config, name);
        if (css) rules.push(css);
      }
    }
  }

  return rules.join('\n\n');
}
