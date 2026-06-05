import type { PluginCreator } from 'postcss';
import { resolveConfig } from '../core/parser';
import { generateCSS, generateCSSForGroups } from '../core/generator';
import { generateCssFromContentScan } from '../core/scanner';
import { generateVariantCSS } from '../core/variant';
import type { AeroCraftPluginOptions } from './plugin.types';
import type { AeroCraftGroupsConfig } from '../types/config.types';
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

/* ============================== Layer → Group Lookup ============================== */

type LayerGroupList = readonly (keyof AeroCraftGroupsConfig)[];

const LAYER_GROUP_MAP: Record<string, LayerGroupList> = {
  [AEROCRAFT_LAYER_BASE]: AEROCRAFT_BASE_GROUPS,
  [AEROCRAFT_LAYER_FONTS]: AEROCRAFT_FONT_GROUPS,
  [AEROCRAFT_LAYER_TYPOGRAPHY]: AEROCRAFT_FONT_GROUPS,
  [AEROCRAFT_LAYER_LAYOUT]: AEROCRAFT_LAYOUT_GROUPS,
  [AEROCRAFT_LAYER_MOTION]: AEROCRAFT_MOTION_GROUPS,
  [AEROCRAFT_LAYER_INTERACTIVE]: AEROCRAFT_MOTION_GROUPS,
};

/* ============================== PostCSS Plugin ============================== */

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
        const layerGroups = LAYER_GROUP_MAP[p];
        if (!p || p === AEROCRAFT_LAYER_ALL || !layerGroups) {
          return merge(generateCSS(config));
        }
        return merge(generateCSSForGroups(config, [...layerGroups]));
      };

      root.walkAtRules(AEROCRAFT_AT_RULE, (rule) => {
        const param = rule.params ?? '';
        rule.replaceWith(parse(emit(param), { from }));
        injected = true;
      });

      if (!injected && config.injectWithoutDirective) {
        root.prepend(parse(emit('all'), { from }));
      }

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
