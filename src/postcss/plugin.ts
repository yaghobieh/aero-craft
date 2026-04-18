import type { PluginCreator } from 'postcss';
import type { AeroCraftConfig } from '../types/config.types';
import { resolveConfig } from '../core/parser';
import { generateCSS, generateCSSForGroups } from '../core/generator';
import { generateCssFromContentScan } from '../core/scanContent';

const aerocraftPlugin: PluginCreator<AeroCraftConfig> = (opts = {}) => {
  const config = resolveConfig(opts);

  return {
    postcssPlugin: 'aerocraft',
    Once(root, { parse }) {
      const from = root.source?.input?.file ?? undefined;
      let injected = false;

      const scanned = config.content.length > 0 ? generateCssFromContentScan(config.content, config) : '';

      const merge = (baseCss: string) => [baseCss, scanned].filter(Boolean).join('\n\n');

      const emit = (param: string) => {
        const p = param.trim();
        if (!p || p === 'all') {
          return merge(generateCSS(config));
        }
        if (p === 'base') {
          return merge(
            generateCSSForGroups(config, ['display', 'flex', 'spacing', 'gap', 'size']),
          );
        }
        if (p === 'fonts' || p === 'typography') {
          return merge(generateCSSForGroups(config, ['text']));
        }
        if (p === 'layout') {
          return merge(
            generateCSSForGroups(config, ['flex', 'grid', 'position', 'display', 'gap']),
          );
        }
        if (p === 'motion' || p === 'interactive') {
          return merge(
            generateCSSForGroups(config, ['transition', 'cursor', 'interactive']),
          );
        }
        return merge(generateCSS(config));
      };

      root.walkAtRules('aerocraft', (rule) => {
        const param = rule.params ?? '';
        rule.replaceWith(parse(emit(param), { from }));
        injected = true;
      });

      if (!injected && config.injectWithoutDirective) {
        root.prepend(parse(emit('all'), { from }));
      }
    },
  };
};

aerocraftPlugin.postcss = true;

export { aerocraftPlugin };
