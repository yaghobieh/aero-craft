import type { PluginCreator } from 'postcss';
import { resolveConfig } from '../core/parser';
import { generateCSS, generateCSSForGroups } from '../core/generator';
import { generateCssFromContentScan } from '../core/scanContent';
import { generateVariantCSS } from '../core/variantGenerator';
import type { AeroCraftPluginOptions } from './plugin.types';
import {
  AEROCRAFT_AT_RULE,
  AEROCRAFT_BASE_GROUPS,
  AEROCRAFT_FONT_GROUPS,
  AEROCRAFT_LAYER_ALL,
  AEROCRAFT_LAYER_BASE,
  AEROCRAFT_LAYER_FONTS,
  AEROCRAFT_LAYER_INTERACTIVE,
  AEROCRAFT_LAYER_LAYOUT,
  AEROCRAFT_LAYER_MOTION,
  AEROCRAFT_LAYER_TYPOGRAPHY,
  AEROCRAFT_LAYOUT_GROUPS,
  AEROCRAFT_MOTION_GROUPS,
  DEFAULT_DARK_SELECTOR,
  ROOT_SELECTOR_PREFIX,
  SELECTOR_DESCENDANT_SEPARATOR,
  SELECTOR_PSEUDO_SEPARATOR,
} from './plugin.const';

/**
 * PostCSS plugin that expands `@aerocraft` directives into generated utility CSS.
 * Supports layer subsets (`base`, `fonts`, `layout`, `motion`) and optional variant generation.
 */
const aerocraftPlugin: PluginCreator<AeroCraftPluginOptions> = (opts?: AeroCraftPluginOptions) => {
  const { darkSelector, ...configOpts } = opts || {};
  const config = resolveConfig(configOpts);

  return {
    postcssPlugin: 'aerocraft',
    Once(root, { parse }) {
      const from = root.source?.input?.file ?? undefined;
      let injected = false;

      const scanned = config.content.length > 0 ? generateCssFromContentScan(config.content, config) : '';

      const merge = (baseCss: string) => [baseCss, scanned].filter(Boolean).join('\n\n');

      const emit = (param: string) => {
        const p = param.trim();
        if (!p || p === AEROCRAFT_LAYER_ALL) {
          return merge(generateCSS(config));
        }
        if (p === AEROCRAFT_LAYER_BASE) {
          return merge(generateCSSForGroups(config, [...AEROCRAFT_BASE_GROUPS]));
        }
        if (p === AEROCRAFT_LAYER_FONTS || p === AEROCRAFT_LAYER_TYPOGRAPHY) {
          return merge(generateCSSForGroups(config, [...AEROCRAFT_FONT_GROUPS]));
        }
        if (p === AEROCRAFT_LAYER_LAYOUT) {
          return merge(generateCSSForGroups(config, [...AEROCRAFT_LAYOUT_GROUPS]));
        }
        if (p === AEROCRAFT_LAYER_MOTION || p === AEROCRAFT_LAYER_INTERACTIVE) {
          return merge(generateCSSForGroups(config, [...AEROCRAFT_MOTION_GROUPS]));
        }
        return merge(generateCSS(config));
      };

      root.walkAtRules(AEROCRAFT_AT_RULE, (rule) => {
        const param = rule.params ?? '';
        rule.replaceWith(parse(emit(param), { from }));
        injected = true;
      });

      if (!injected && config.injectWithoutDirective) {
        root.prepend(parse(emit('all'), { from }));
      }

      // Variant generation: scan source files and generate dark:, hover:, focus:, etc.
      if (config.content.length > 0) {
        const baseRuleMap = new Map<string, Array<[string, string]>>();
        root.walkRules((rule) => {
          const sel = rule.selector;
          if (
            sel
            && sel.startsWith(ROOT_SELECTOR_PREFIX)
            && !sel.includes(SELECTOR_DESCENDANT_SEPARATOR)
            && !sel.includes(SELECTOR_PSEUDO_SEPARATOR)
          ) {
            const name = sel.slice(1);
            if (!baseRuleMap.has(name)) {
              const decls: Array<[string, string]> = [];
              rule.walkDecls((decl) => { decls.push([decl.prop, decl.value]); });
              baseRuleMap.set(name, decls);
            }
          }
        });

        const variantCSS = generateVariantCSS(config, baseRuleMap, {
          darkSelector: darkSelector || DEFAULT_DARK_SELECTOR,
        });
        if (variantCSS) {
          root.append(parse(variantCSS, { from }));
        }
      }
    },
  };
};

aerocraftPlugin.postcss = true;

export { aerocraftPlugin };
