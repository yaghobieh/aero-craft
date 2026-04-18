import type { ShortcutDefinition } from '../types/shortcuts.types';
import {
  LAYOUT_SHORTCUTS,
  BACKGROUND_SHORTCUTS,
  OUTLINE_SHORTCUTS,
  EFFECT_SHORTCUTS,
  TRANSFORM_SHORTCUTS,
  FILTER_SHORTCUTS,
  BACKDROP_SHORTCUTS,
  MOTION_SHORTCUTS,
  TABLE_SHORTCUTS,
  SCROLL_SHORTCUTS,
  SVG_SHORTCUTS,
  A11Y_SHORTCUTS,
  LIST_SHORTCUTS,
  INTERACTIVE_EXTRA_SHORTCUTS,
  TEXT_EXTRA_SHORTCUTS,
  FONT_EXTRA_SHORTCUTS,
  SIZE_EXTRA_SHORTCUTS,
} from './shortcuts-extra.const';
import {
  TRANSITION_FAST_MS,
  TRANSITION_DEFAULT_MS,
  TRANSITION_SLOW_MS,
  GRID_COLS_2,
  GRID_COLS_3,
  GRID_COLS_4,
  GRID_COLS_6,
  GRID_COLS_12,
  LINE_CLAMP_2,
  LINE_CLAMP_3,
  SPACING_0,
  SPACING_PX,
  SPACING_0_5,
  SPACING_1,
  SPACING_1_5,
  SPACING_2,
  SPACING_2_5,
  SPACING_3,
  SPACING_3_5,
  SPACING_4,
  SPACING_5,
  SPACING_6,
  SPACING_7,
  SPACING_8,
  SPACING_9,
  SPACING_10,
  SPACING_11,
  SPACING_12,
  SPACING_14,
  SPACING_16,
  SPACING_20,
  SPACING_24,
  SPACING_28,
  SPACING_32,
  SPACING_36,
  SPACING_40,
  SPACING_44,
  SPACING_48,
  SPACING_52,
  SPACING_56,
  SPACING_60,
  SPACING_64,
  SPACING_72,
  SPACING_80,
  SPACING_96,
  ORDER_FIRST,
  ORDER_LAST,
  ORDER_NUMERIC_MAX,
  Z_INDEX_LEVELS,
  OPACITY_LEVELS,
  FONT_WEIGHTS,
  FONT_SIZES,
  BORDER_WIDTHS,
  RADIUS_SIZES,
  SHADOW_LEVELS,
} from './numbers.const';

const d = (name: string, group: string, tw: string, css: Record<string, string>, desc: string): ShortcutDefinition => ({
  name,
  group,
  tailwind: tw,
  css,
  description: desc,
});

const negate = (val: string): string => {
  if (val === '0px' || val === '0') return val;
  if (val.startsWith('-')) return val.slice(1);
  return `-${val}`;
};

export const FLEX_SHORTCUTS: Record<string, ShortcutDefinition> = {
  flex: d('flex', 'flex', 'flex', { display: 'flex' }, 'display: flex'),
  'inline-flex': d('inline-flex', 'flex', 'inline-flex', { display: 'inline-flex' }, 'display: inline-flex'),
  'flex-col': d('flex-col', 'flex', 'flex flex-col', { display: 'flex', 'flex-direction': 'column' }, 'Flex column direction'),
  'flex-row': d('flex-row', 'flex', 'flex flex-row', { display: 'flex', 'flex-direction': 'row' }, 'Flex row direction'),
  'flex-col-reverse': d('flex-col-reverse', 'flex', 'flex flex-col-reverse', { display: 'flex', 'flex-direction': 'column-reverse' }, 'Flex column reverse'),
  'flex-row-reverse': d('flex-row-reverse', 'flex', 'flex flex-row-reverse', { display: 'flex', 'flex-direction': 'row-reverse' }, 'Flex row reverse'),
  'flex-col-center': d('flex-col-center', 'flex', 'flex flex-col items-center justify-center', { display: 'flex', 'flex-direction': 'column', 'align-items': 'center', 'justify-content': 'center' }, 'Flex column — both axes centered'),
  'flex-row-center': d('flex-row-center', 'flex', 'flex flex-row items-center justify-center', { display: 'flex', 'flex-direction': 'row', 'align-items': 'center', 'justify-content': 'center' }, 'Flex row — both axes centered'),
  'flex-col-j-center': d('flex-col-j-center', 'flex', 'flex flex-col justify-center', { display: 'flex', 'flex-direction': 'column', 'justify-content': 'center' }, 'Flex column — justify center'),
  'flex-row-j-center': d('flex-row-j-center', 'flex', 'flex flex-row justify-center', { display: 'flex', 'flex-direction': 'row', 'justify-content': 'center' }, 'Flex row — justify center'),
  'flex-col-start': d('flex-col-start', 'flex', 'flex flex-col items-start', { display: 'flex', 'flex-direction': 'column', 'align-items': 'flex-start' }, 'Flex column — align start'),
  'flex-col-end': d('flex-col-end', 'flex', 'flex flex-col items-end', { display: 'flex', 'flex-direction': 'column', 'align-items': 'flex-end' }, 'Flex column — align end'),
  'flex-row-start': d('flex-row-start', 'flex', 'flex flex-row items-start', { display: 'flex', 'flex-direction': 'row', 'align-items': 'flex-start' }, 'Flex row — align start'),
  'flex-row-end': d('flex-row-end', 'flex', 'flex flex-row items-end', { display: 'flex', 'flex-direction': 'row', 'align-items': 'flex-end' }, 'Flex row — align end'),
  'flex-between': d('flex-between', 'flex', 'flex items-center justify-between', { display: 'flex', 'align-items': 'center', 'justify-content': 'space-between' }, 'Flex — space-between, center align'),
  'flex-around': d('flex-around', 'flex', 'flex items-center justify-around', { display: 'flex', 'align-items': 'center', 'justify-content': 'space-around' }, 'Flex — space-around, center align'),
  'flex-evenly': d('flex-evenly', 'flex', 'flex items-center justify-evenly', { display: 'flex', 'align-items': 'center', 'justify-content': 'space-evenly' }, 'Flex — space-evenly, center align'),
  'flex-wrap': d('flex-wrap', 'flex', 'flex flex-wrap', { 'flex-wrap': 'wrap' }, 'Flex-wrap: wrap'),
  'flex-nowrap': d('flex-nowrap', 'flex', 'flex flex-nowrap', { 'flex-wrap': 'nowrap' }, 'Flex-wrap: nowrap'),
  'flex-wrap-reverse': d('flex-wrap-reverse', 'flex', 'flex-wrap-reverse', { 'flex-wrap': 'wrap-reverse' }, 'Flex-wrap: wrap-reverse'),
  'flex-1': d('flex-1', 'flex', 'flex-1', { flex: '1 1 0%' }, 'Fill available space'),
  'flex-auto': d('flex-auto', 'flex', 'flex-auto', { flex: '1 1 auto' }, 'Grow/shrink with intrinsic size'),
  'flex-none': d('flex-none', 'flex', 'flex-none', { flex: 'none' }, 'Prevent grow and shrink'),
  'flex-grow': d('flex-grow', 'flex', 'flex-grow', { 'flex-grow': '1' }, 'Allow item to grow'),
  'flex-grow-0': d('flex-grow-0', 'flex', 'flex-grow-0', { 'flex-grow': '0' }, 'Prevent item from growing'),
  'flex-shrink': d('flex-shrink', 'flex', 'flex-shrink', { 'flex-shrink': '1' }, 'Allow item to shrink'),
  'flex-shrink-0': d('flex-shrink-0', 'flex', 'flex-shrink-0', { 'flex-shrink': '0' }, 'Prevent item from shrinking'),
  grow: d('grow', 'flex', 'grow', { 'flex-grow': '1' }, 'flex-grow: 1'),
  'grow-0': d('grow-0', 'flex', 'grow-0', { 'flex-grow': '0' }, 'flex-grow: 0'),
  shrink: d('shrink', 'flex', 'shrink', { 'flex-shrink': '1' }, 'flex-shrink: 1'),
  'shrink-0': d('shrink-0', 'flex', 'shrink-0', { 'flex-shrink': '0' }, 'flex-shrink: 0'),
  'flex-initial': d('flex-initial', 'flex', 'flex-initial', { flex: '0 1 auto' }, 'Initial flex sizing'),
};

const JUSTIFY_CONTENT: Record<string, string> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  stretch: 'stretch',
  normal: 'normal',
};

Object.entries(JUSTIFY_CONTENT).forEach(([k, v]) => {
  FLEX_SHORTCUTS[`justify-${k}`] = d(`justify-${k}`, 'flex', `justify-${k}`, { 'justify-content': v }, `justify-content: ${v}`);
});

const JUSTIFY_ITEMS: Record<string, string> = {
  start: 'start',
  end: 'end',
  center: 'center',
  stretch: 'stretch',
};

Object.entries(JUSTIFY_ITEMS).forEach(([k, v]) => {
  FLEX_SHORTCUTS[`justify-items-${k}`] = d(`justify-items-${k}`, 'flex', `justify-items-${k}`, { 'justify-items': v }, `justify-items: ${v}`);
  FLEX_SHORTCUTS[`justify-self-${k}`] = d(`justify-self-${k}`, 'flex', `justify-self-${k}`, { 'justify-self': v }, `justify-self: ${v}`);
});

const ALIGN_ITEMS: Record<string, string> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
};

Object.entries(ALIGN_ITEMS).forEach(([k, v]) => {
  FLEX_SHORTCUTS[`items-${k}`] = d(`items-${k}`, 'flex', `items-${k}`, { 'align-items': v }, `align-items: ${v}`);
});

Object.entries(ALIGN_ITEMS).forEach(([k, v]) => {
  FLEX_SHORTCUTS[`self-${k}`] = d(`self-${k}`, 'flex', `self-${k}`, { 'align-self': v }, `align-self: ${v}`);
});

FLEX_SHORTCUTS['self-auto'] = d('self-auto', 'flex', 'self-auto', { 'align-self': 'auto' }, 'align-self: auto');

const ALIGN_CONTENT: Record<string, string> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  stretch: 'stretch',
  normal: 'normal',
  baseline: 'baseline',
};

Object.entries(ALIGN_CONTENT).forEach(([k, v]) => {
  FLEX_SHORTCUTS[`content-${k}`] = d(`content-${k}`, 'flex', `content-${k}`, { 'align-content': v }, `align-content: ${v}`);
});

FLEX_SHORTCUTS['order-first'] = d('order-first', 'flex', 'order-first', { order: ORDER_FIRST }, 'order: first');
FLEX_SHORTCUTS['order-last'] = d('order-last', 'flex', 'order-last', { order: ORDER_LAST }, 'order: last');
FLEX_SHORTCUTS['order-none'] = d('order-none', 'flex', 'order-none', { order: '0' }, 'order: 0');

for (let i = 1; i <= ORDER_NUMERIC_MAX; i += 1) {
  const key = `order-${i}`;
  const val = String(i);
  FLEX_SHORTCUTS[key] = d(key, 'flex', key, { order: val }, `order: ${val}`);
}

FLEX_SHORTCUTS['basis-auto'] = d('basis-auto', 'flex', 'basis-auto', { 'flex-basis': 'auto' }, 'flex-basis: auto');
FLEX_SHORTCUTS['basis-full'] = d('basis-full', 'flex', 'basis-full', { 'flex-basis': '100%' }, 'flex-basis: 100%');

const BASIS_FRAC: [string, string][] = [
  ['1/2', '50%'],
  ['1/3', '33.333333%'],
  ['2/3', '66.666667%'],
  ['1/4', '25%'],
  ['2/4', '50%'],
  ['3/4', '75%'],
  ['1/5', '20%'],
  ['2/5', '40%'],
  ['3/5', '60%'],
  ['4/5', '80%'],
  ['1/6', '16.666667%'],
  ['2/6', '33.333333%'],
  ['3/6', '50%'],
  ['4/6', '66.666667%'],
  ['5/6', '83.333333%'],
  ['1/12', '8.333333%'],
  ['2/12', '16.666667%'],
  ['3/12', '25%'],
  ['4/12', '33.333333%'],
  ['5/12', '41.666667%'],
  ['6/12', '50%'],
  ['7/12', '58.333333%'],
  ['8/12', '66.666667%'],
  ['9/12', '75%'],
  ['10/12', '83.333333%'],
  ['11/12', '91.666667%'],
];

BASIS_FRAC.forEach(([fr, pct]) => {
  const nm = `basis-${fr}`;
  FLEX_SHORTCUTS[nm] = d(nm, 'flex', nm, { 'flex-basis': pct }, `flex-basis: ${pct}`);
});

export const GRID_SHORTCUTS: Record<string, ShortcutDefinition> = {
  grid: d('grid', 'grid', 'grid', { display: 'grid' }, 'display: grid'),
  'inline-grid': d('inline-grid', 'grid', 'inline-grid', { display: 'inline-grid' }, 'display: inline-grid'),
  'grid-center': d('grid-center', 'grid', 'grid place-items-center', { display: 'grid', 'place-items': 'center' }, 'Grid — all items centered'),
  'grid-auto-fill': d('grid-auto-fill', 'grid', 'grid', { display: 'grid', 'grid-template-columns': 'repeat(auto-fill, minmax(0, 1fr))' }, 'Grid with auto-fill columns'),
  'grid-auto-fit': d('grid-auto-fit', 'grid', 'grid', { display: 'grid', 'grid-template-columns': 'repeat(auto-fit, minmax(0, 1fr))' }, 'Grid with auto-fit columns'),
  'grid-flow-row': d('grid-flow-row', 'grid', 'grid-flow-row', { 'grid-auto-flow': 'row' }, 'grid-auto-flow: row'),
  'grid-flow-col': d('grid-flow-col', 'grid', 'grid-flow-col', { 'grid-auto-flow': 'column' }, 'grid-auto-flow: column'),
  'grid-flow-dense': d('grid-flow-dense', 'grid', 'grid-flow-dense', { 'grid-auto-flow': 'dense' }, 'grid-auto-flow: dense'),
  'grid-flow-row-dense': d('grid-flow-row-dense', 'grid', 'grid-flow-row-dense', { 'grid-auto-flow': 'row dense' }, 'grid-auto-flow: row dense'),
  'grid-flow-col-dense': d('grid-flow-col-dense', 'grid', 'grid-flow-col-dense', { 'grid-auto-flow': 'column dense' }, 'grid-auto-flow: column dense'),
  'place-items-center': d('place-items-center', 'grid', 'place-items-center', { 'place-items': 'center' }, 'place-items: center'),
  'place-items-start': d('place-items-start', 'grid', 'place-items-start', { 'place-items': 'start' }, 'place-items: start'),
  'place-items-end': d('place-items-end', 'grid', 'place-items-end', { 'place-items': 'end' }, 'place-items: end'),
  'place-items-stretch': d('place-items-stretch', 'grid', 'place-items-stretch', { 'place-items': 'stretch' }, 'place-items: stretch'),
  'place-content-center': d('place-content-center', 'grid', 'place-content-center', { 'place-content': 'center' }, 'place-content: center'),
  'place-content-start': d('place-content-start', 'grid', 'place-content-start', { 'place-content': 'start' }, 'place-content: start'),
  'place-content-end': d('place-content-end', 'grid', 'place-content-end', { 'place-content': 'end' }, 'place-content: end'),
  'place-content-between': d('place-content-between', 'grid', 'place-content-between', { 'place-content': 'space-between' }, 'place-content: space-between'),
  'place-content-around': d('place-content-around', 'grid', 'place-content-around', { 'place-content': 'space-around' }, 'place-content: space-around'),
};

[GRID_COLS_2, GRID_COLS_3, GRID_COLS_4, GRID_COLS_6, GRID_COLS_12].forEach((cols) => {
  GRID_SHORTCUTS[`grid-${cols}`] = d(`grid-${cols}`, 'grid', `grid grid-cols-${cols}`, { display: 'grid', 'grid-template-columns': `repeat(${cols}, minmax(0, 1fr))` }, `Grid with ${cols} equal columns`);
});

for (let i = 1; i <= 12; i += 1) {
  GRID_SHORTCUTS[`grid-cols-${i}`] = d(`grid-cols-${i}`, 'grid', `grid-cols-${i}`, { 'grid-template-columns': `repeat(${i}, minmax(0, 1fr))` }, `${i}-column grid template`);
  GRID_SHORTCUTS[`grid-rows-${i}`] = d(`grid-rows-${i}`, 'grid', `grid-rows-${i}`, { 'grid-template-rows': `repeat(${i}, minmax(0, 1fr))` }, `${i}-row grid template`);
  GRID_SHORTCUTS[`col-span-${i}`] = d(`col-span-${i}`, 'grid', `col-span-${i}`, { 'grid-column': `span ${i} / span ${i}` }, `col-span: ${i}`);
  GRID_SHORTCUTS[`row-span-${i}`] = d(`row-span-${i}`, 'grid', `row-span-${i}`, { 'grid-row': `span ${i} / span ${i}` }, `row-span: ${i}`);
}
GRID_SHORTCUTS['col-span-full'] = d('col-span-full', 'grid', 'col-span-full', { 'grid-column': '1 / -1' }, 'grid-column: 1 / -1');
GRID_SHORTCUTS['row-span-full'] = d('row-span-full', 'grid', 'row-span-full', { 'grid-row': '1 / -1' }, 'grid-row: 1 / -1');
GRID_SHORTCUTS['col-auto'] = d('col-auto', 'grid', 'col-auto', { 'grid-column': 'auto' }, 'grid-column: auto');
GRID_SHORTCUTS['row-auto'] = d('row-auto', 'grid', 'row-auto', { 'grid-row': 'auto' }, 'grid-row: auto');

for (let i = 1; i <= 13; i += 1) {
  GRID_SHORTCUTS[`col-start-${i}`] = d(`col-start-${i}`, 'grid', `col-start-${i}`, { 'grid-column-start': String(i) }, `grid-column-start: ${i}`);
  GRID_SHORTCUTS[`col-end-${i}`] = d(`col-end-${i}`, 'grid', `col-end-${i}`, { 'grid-column-end': String(i) }, `grid-column-end: ${i}`);
}
GRID_SHORTCUTS['col-start-auto'] = d('col-start-auto', 'grid', 'col-start-auto', { 'grid-column-start': 'auto' }, 'grid-column-start: auto');
GRID_SHORTCUTS['col-end-auto'] = d('col-end-auto', 'grid', 'col-end-auto', { 'grid-column-end': 'auto' }, 'grid-column-end: auto');

for (let i = 1; i <= 7; i += 1) {
  GRID_SHORTCUTS[`row-start-${i}`] = d(`row-start-${i}`, 'grid', `row-start-${i}`, { 'grid-row-start': String(i) }, `grid-row-start: ${i}`);
  GRID_SHORTCUTS[`row-end-${i}`] = d(`row-end-${i}`, 'grid', `row-end-${i}`, { 'grid-row-end': String(i) }, `grid-row-end: ${i}`);
}
GRID_SHORTCUTS['row-start-auto'] = d('row-start-auto', 'grid', 'row-start-auto', { 'grid-row-start': 'auto' }, 'grid-row-start: auto');
GRID_SHORTCUTS['row-end-auto'] = d('row-end-auto', 'grid', 'row-end-auto', { 'grid-row-end': 'auto' }, 'grid-row-end: auto');

GRID_SHORTCUTS['grid-cols-none'] = d('grid-cols-none', 'grid', 'grid-cols-none', { 'grid-template-columns': 'none' }, 'grid-template-columns: none');
GRID_SHORTCUTS['grid-cols-subgrid'] = d('grid-cols-subgrid', 'grid', 'grid-cols-subgrid', { 'grid-template-columns': 'subgrid' }, 'grid-template-columns: subgrid');
GRID_SHORTCUTS['grid-rows-none'] = d('grid-rows-none', 'grid', 'grid-rows-none', { 'grid-template-rows': 'none' }, 'grid-template-rows: none');
GRID_SHORTCUTS['grid-rows-subgrid'] = d('grid-rows-subgrid', 'grid', 'grid-rows-subgrid', { 'grid-template-rows': 'subgrid' }, 'grid-template-rows: subgrid');

const AUTO_TRACK: Record<string, string> = {
  auto: 'auto',
  min: 'min-content',
  max: 'max-content',
  fr: 'minmax(0, 1fr)',
};
Object.entries(AUTO_TRACK).forEach(([k, v]) => {
  GRID_SHORTCUTS[`auto-cols-${k}`] = d(`auto-cols-${k}`, 'grid', `auto-cols-${k}`, { 'grid-auto-columns': v }, `grid-auto-columns: ${v}`);
  GRID_SHORTCUTS[`auto-rows-${k}`] = d(`auto-rows-${k}`, 'grid', `auto-rows-${k}`, { 'grid-auto-rows': v }, `grid-auto-rows: ${v}`);
});

const PLACE_SELF: Record<string, string> = {
  auto: 'auto',
  start: 'start',
  end: 'end',
  center: 'center',
  stretch: 'stretch',
};
Object.entries(PLACE_SELF).forEach(([k, v]) => {
  GRID_SHORTCUTS[`place-self-${k}`] = d(`place-self-${k}`, 'grid', `place-self-${k}`, { 'place-self': v }, `place-self: ${v}`);
});

GRID_SHORTCUTS['place-items-auto'] = d('place-items-auto', 'grid', 'place-items-auto', { 'place-items': 'auto' }, 'place-items: auto');
GRID_SHORTCUTS['place-items-baseline'] = d('place-items-baseline', 'grid', 'place-items-baseline', { 'place-items': 'baseline' }, 'place-items: baseline');
GRID_SHORTCUTS['place-content-evenly'] = d('place-content-evenly', 'grid', 'place-content-evenly', { 'place-content': 'space-evenly' }, 'place-content: space-evenly');
GRID_SHORTCUTS['place-content-stretch'] = d('place-content-stretch', 'grid', 'place-content-stretch', { 'place-content': 'stretch' }, 'place-content: stretch');
GRID_SHORTCUTS['place-content-baseline'] = d('place-content-baseline', 'grid', 'place-content-baseline', { 'place-content': 'baseline' }, 'place-content: baseline');

export const POSITION_SHORTCUTS: Record<string, ShortcutDefinition> = {
  static: d('static', 'position', 'static', { position: 'static' }, 'position: static'),
  relative: d('relative', 'position', 'relative', { position: 'relative' }, 'position: relative'),
  absolute: d('absolute', 'position', 'absolute', { position: 'absolute' }, 'position: absolute'),
  fixed: d('fixed', 'position', 'fixed', { position: 'fixed' }, 'position: fixed'),
  sticky: d('sticky', 'position', 'sticky', { position: 'sticky' }, 'position: sticky'),
  'absolute-center': d('absolute-center', 'position', 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }, 'Absolute — fully centered'),
  'absolute-fill': d('absolute-fill', 'position', 'absolute inset-0', { position: 'absolute', inset: '0' }, 'Absolute — fill parent'),
  'absolute-x-center': d('absolute-x-center', 'position', 'absolute left-1/2 -translate-x-1/2', { position: 'absolute', left: '50%', transform: 'translateX(-50%)' }, 'Absolute — horizontally centered'),
  'absolute-y-center': d('absolute-y-center', 'position', 'absolute top-1/2 -translate-y-1/2', { position: 'absolute', top: '50%', transform: 'translateY(-50%)' }, 'Absolute — vertically centered'),
  'absolute-top': d('absolute-top', 'position', 'absolute top-0 inset-x-0', { position: 'absolute', top: '0', left: '0', right: '0' }, 'Absolute — top edge'),
  'absolute-bottom': d('absolute-bottom', 'position', 'absolute bottom-0 inset-x-0', { position: 'absolute', bottom: '0', left: '0', right: '0' }, 'Absolute — bottom edge'),
  'fixed-fill': d('fixed-fill', 'position', 'fixed inset-0', { position: 'fixed', inset: '0' }, 'Fixed — fill viewport'),
  'fixed-top': d('fixed-top', 'position', 'fixed top-0 inset-x-0', { position: 'fixed', top: '0', left: '0', right: '0' }, 'Fixed — top of viewport'),
  'fixed-bottom': d('fixed-bottom', 'position', 'fixed bottom-0 inset-x-0', { position: 'fixed', bottom: '0', left: '0', right: '0' }, 'Fixed — bottom of viewport'),
  'sticky-top': d('sticky-top', 'position', 'sticky top-0', { position: 'sticky', top: '0' }, 'Sticky — sticks to top'),
};

export const INSET_SHORTCUTS: Record<string, ShortcutDefinition> = {};

const INSET_SCALE: Array<[string, string]> = [
  ['0', SPACING_0],
  ['px', SPACING_PX],
  ['0.5', SPACING_0_5],
  ['1', SPACING_1],
  ['1.5', SPACING_1_5],
  ['2', SPACING_2],
  ['2.5', SPACING_2_5],
  ['3', SPACING_3],
  ['3.5', SPACING_3_5],
  ['4', SPACING_4],
  ['5', SPACING_5],
  ['6', SPACING_6],
  ['7', SPACING_7],
  ['8', SPACING_8],
  ['9', SPACING_9],
  ['10', SPACING_10],
  ['11', SPACING_11],
  ['12', SPACING_12],
  ['14', SPACING_14],
  ['16', SPACING_16],
  ['20', SPACING_20],
  ['24', SPACING_24],
  ['28', SPACING_28],
  ['32', SPACING_32],
  ['36', SPACING_36],
  ['40', SPACING_40],
  ['44', SPACING_44],
  ['48', SPACING_48],
  ['52', SPACING_52],
  ['56', SPACING_56],
  ['60', SPACING_60],
  ['64', SPACING_64],
  ['72', SPACING_72],
  ['80', SPACING_80],
  ['96', SPACING_96],
];

const INSET_FRACTIONS: Array<[string, string]> = [
  ['1/2', '50%'],
  ['1/3', '33.333333%'],
  ['2/3', '66.666667%'],
  ['1/4', '25%'],
  ['2/4', '50%'],
  ['3/4', '75%'],
  ['full', '100%'],
];

const INSET_SIDES: Array<[string, string[]]> = [
  ['inset', ['top', 'right', 'bottom', 'left']],
  ['inset-x', ['left', 'right']],
  ['inset-y', ['top', 'bottom']],
  ['top', ['top']],
  ['right', ['right']],
  ['bottom', ['bottom']],
  ['left', ['left']],
  ['start', ['inset-inline-start']],
  ['end', ['inset-inline-end']],
];

INSET_SIDES.forEach(([prefix, props]) => {
  INSET_SHORTCUTS[`${prefix}-auto`] = d(
    `${prefix}-auto`,
    'inset',
    `${prefix}-auto`,
    Object.fromEntries(props.map((p) => [p, 'auto'])),
    `${prefix}: auto`,
  );
  INSET_SCALE.forEach(([n, val]) => {
    const posName = `${prefix}-${n}`;
    INSET_SHORTCUTS[posName] = d(
      posName,
      'inset',
      posName,
      Object.fromEntries(props.map((p) => [p, val])),
      `${prefix}: ${val}`,
    );
    if (val !== SPACING_0) {
      const negName = `-${prefix}-${n}`;
      const negVal = negate(val);
      INSET_SHORTCUTS[negName] = d(
        negName,
        'inset',
        negName,
        Object.fromEntries(props.map((p) => [p, negVal])),
        `${prefix}: ${negVal}`,
      );
    }
  });
  INSET_FRACTIONS.forEach(([fr, pct]) => {
    const posName = `${prefix}-${fr}`;
    INSET_SHORTCUTS[posName] = d(
      posName,
      'inset',
      posName,
      Object.fromEntries(props.map((p) => [p, pct])),
      `${prefix}: ${pct}`,
    );
    const negName = `-${prefix}-${fr}`;
    INSET_SHORTCUTS[negName] = d(
      negName,
      'inset',
      negName,
      Object.fromEntries(props.map((p) => [p, negate(pct)])),
      `${prefix}: ${negate(pct)}`,
    );
  });
});

export const SIZE_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'size-full': d('size-full', 'size', 'w-full h-full', { width: '100%', height: '100%' }, 'Full width and height'),
  'size-screen': d('size-screen', 'size', 'w-screen h-screen', { width: '100vw', height: '100vh' }, 'Full viewport size'),
  'size-auto': d('size-auto', 'size', 'w-auto h-auto', { width: 'auto', height: 'auto' }, 'Auto width and height'),
  'w-full': d('w-full', 'size', 'w-full', { width: '100%' }, 'Full width'),
  'h-full': d('h-full', 'size', 'h-full', { height: '100%' }, 'Full height'),
  'w-screen': d('w-screen', 'size', 'w-screen', { width: '100vw' }, 'Width 100vw'),
  'h-screen': d('h-screen', 'size', 'h-screen', { height: '100vh' }, 'Height 100vh'),
  'w-auto': d('w-auto', 'size', 'w-auto', { width: 'auto' }, 'Width auto'),
  'h-auto': d('h-auto', 'size', 'h-auto', { height: 'auto' }, 'Height auto'),
  'w-min': d('w-min', 'size', 'w-min', { width: 'min-content' }, 'width: min-content'),
  'w-max': d('w-max', 'size', 'w-max', { width: 'max-content' }, 'width: max-content'),
  'w-fit': d('w-fit', 'size', 'w-fit', { width: 'fit-content' }, 'width: fit-content'),
  'h-min': d('h-min', 'size', 'h-min', { height: 'min-content' }, 'height: min-content'),
  'h-max': d('h-max', 'size', 'h-max', { height: 'max-content' }, 'height: max-content'),
  'h-fit': d('h-fit', 'size', 'h-fit', { height: 'fit-content' }, 'height: fit-content'),
  'max-w-full': d('max-w-full', 'size', 'max-w-full', { 'max-width': '100%' }, 'max-width: 100%'),
  'max-w-screen': d('max-w-screen', 'size', 'max-w-screen', { 'max-width': '100vw' }, 'max-width: 100vw'),
  'max-w-none': d('max-w-none', 'size', 'max-w-none', { 'max-width': 'none' }, 'max-width: none'),
  'max-w-xs': d('max-w-xs', 'size', 'max-w-xs', { 'max-width': '320px' }, 'max-width: 320px'),
  'max-w-sm': d('max-w-sm', 'size', 'max-w-sm', { 'max-width': '384px' }, 'max-width: 384px'),
  'max-w-md': d('max-w-md', 'size', 'max-w-md', { 'max-width': '448px' }, 'max-width: 448px'),
  'max-w-lg': d('max-w-lg', 'size', 'max-w-lg', { 'max-width': '512px' }, 'max-width: 512px'),
  'max-w-xl': d('max-w-xl', 'size', 'max-w-xl', { 'max-width': '576px' }, 'max-width: 576px'),
  'max-w-2xl': d('max-w-2xl', 'size', 'max-w-2xl', { 'max-width': '672px' }, 'max-width: 672px'),
  'max-w-3xl': d('max-w-3xl', 'size', 'max-w-3xl', { 'max-width': '768px' }, 'max-width: 768px'),
  'max-w-4xl': d('max-w-4xl', 'size', 'max-w-4xl', { 'max-width': '896px' }, 'max-width: 896px'),
  'max-w-5xl': d('max-w-5xl', 'size', 'max-w-5xl', { 'max-width': '1024px' }, 'max-width: 1024px'),
  'max-w-6xl': d('max-w-6xl', 'size', 'max-w-6xl', { 'max-width': '1152px' }, 'max-width: 1152px'),
  'max-w-7xl': d('max-w-7xl', 'size', 'max-w-7xl', { 'max-width': '1280px' }, 'max-width: 1280px'),
  'max-h-full': d('max-h-full', 'size', 'max-h-full', { 'max-height': '100%' }, 'max-height: 100%'),
  'max-h-screen': d('max-h-screen', 'size', 'max-h-screen', { 'max-height': '100vh' }, 'max-height: 100vh'),
  'min-h-screen': d('min-h-screen', 'size', 'min-h-screen', { 'min-height': '100vh' }, 'Min height full viewport'),
  'min-h-full': d('min-h-full', 'size', 'min-h-full', { 'min-height': '100%' }, 'min-height: 100%'),
  'min-w-0': d('min-w-0', 'size', 'min-w-0', { 'min-width': '0' }, 'Allow shrink below content size'),
  'min-w-full': d('min-w-full', 'size', 'min-w-full', { 'min-width': '100%' }, 'min-width: 100%'),
};

const SPACING_SCALE: Array<[string, string]> = [
  ['0', SPACING_0],
  ['px', SPACING_PX],
  ['0.5', SPACING_0_5],
  ['1', SPACING_1],
  ['1.5', SPACING_1_5],
  ['2', SPACING_2],
  ['2.5', SPACING_2_5],
  ['3', SPACING_3],
  ['3.5', SPACING_3_5],
  ['4', SPACING_4],
  ['5', SPACING_5],
  ['6', SPACING_6],
  ['7', SPACING_7],
  ['8', SPACING_8],
  ['9', SPACING_9],
  ['10', SPACING_10],
  ['11', SPACING_11],
  ['12', SPACING_12],
  ['14', SPACING_14],
  ['16', SPACING_16],
  ['20', SPACING_20],
  ['24', SPACING_24],
  ['28', SPACING_28],
  ['32', SPACING_32],
  ['36', SPACING_36],
  ['40', SPACING_40],
  ['44', SPACING_44],
  ['48', SPACING_48],
  ['52', SPACING_52],
  ['56', SPACING_56],
  ['60', SPACING_60],
  ['64', SPACING_64],
  ['72', SPACING_72],
  ['80', SPACING_80],
  ['96', SPACING_96],
];

SPACING_SCALE.forEach(([n, val]) => {
  FLEX_SHORTCUTS[`basis-${n}`] = d(`basis-${n}`, 'flex', `basis-${n}`, { 'flex-basis': val }, `flex-basis: ${val}`);
  SIZE_SHORTCUTS[`w-${n}`] = d(`w-${n}`, 'size', `w-${n}`, { width: val }, `width: ${val}`);
  SIZE_SHORTCUTS[`h-${n}`] = d(`h-${n}`, 'size', `h-${n}`, { height: val }, `height: ${val}`);
  SIZE_SHORTCUTS[`min-w-${n}`] = d(`min-w-${n}`, 'size', `min-w-${n}`, { 'min-width': val }, `min-width: ${val}`);
  SIZE_SHORTCUTS[`min-h-${n}`] = d(`min-h-${n}`, 'size', `min-h-${n}`, { 'min-height': val }, `min-height: ${val}`);
  SIZE_SHORTCUTS[`max-w-${n}`] = d(`max-w-${n}`, 'size', `max-w-${n}`, { 'max-width': val }, `max-width: ${val}`);
  SIZE_SHORTCUTS[`max-h-${n}`] = d(`max-h-${n}`, 'size', `max-h-${n}`, { 'max-height': val }, `max-height: ${val}`);
});

const WIDTH_FRACTIONS: Array<[string, string]> = [
  ['1/2', '50%'],
  ['1/3', '33.333333%'],
  ['2/3', '66.666667%'],
  ['1/4', '25%'],
  ['2/4', '50%'],
  ['3/4', '75%'],
  ['1/5', '20%'],
  ['2/5', '40%'],
  ['3/5', '60%'],
  ['4/5', '80%'],
  ['1/6', '16.666667%'],
  ['2/6', '33.333333%'],
  ['3/6', '50%'],
  ['4/6', '66.666667%'],
  ['5/6', '83.333333%'],
];

WIDTH_FRACTIONS.forEach(([fr, pct]) => {
  SIZE_SHORTCUTS[`w-${fr}`] = d(`w-${fr}`, 'size', `w-${fr}`, { width: pct }, `width: ${pct}`);
  SIZE_SHORTCUTS[`h-${fr}`] = d(`h-${fr}`, 'size', `h-${fr}`, { height: pct }, `height: ${pct}`);
  SIZE_SHORTCUTS[`size-${fr}`] = d(`size-${fr}`, 'size', `size-${fr}`, { width: pct, height: pct }, `width & height: ${pct}`);
});

SPACING_SCALE.forEach(([n, val]) => {
  SIZE_SHORTCUTS[`size-${n}`] = d(`size-${n}`, 'size', `size-${n}`, { width: val, height: val }, `width & height: ${val}`);
});

const VIEWPORT_UNITS: Array<[string, string]> = [
  ['dvh', '100dvh'],
  ['dvw', '100dvw'],
  ['lvh', '100lvh'],
  ['lvw', '100lvw'],
  ['svh', '100svh'],
  ['svw', '100svw'],
];

VIEWPORT_UNITS.forEach(([suffix, val]) => {
  const isVertical = suffix.endsWith('vh');
  const dim = isVertical ? 'height' : 'width';
  SIZE_SHORTCUTS[`h-${suffix}`] = d(`h-${suffix}`, 'size', `h-${suffix}`, { height: val }, `height: ${val}`);
  SIZE_SHORTCUTS[`w-${suffix}`] = d(`w-${suffix}`, 'size', `w-${suffix}`, { width: val }, `width: ${val}`);
  SIZE_SHORTCUTS[`size-${suffix}`] = d(`size-${suffix}`, 'size', `size-${suffix}`, { width: val, height: val }, `width & height: ${val}`);
  SIZE_SHORTCUTS[`min-${dim === 'height' ? 'h' : 'w'}-${suffix}`] = d(
    `min-${dim === 'height' ? 'h' : 'w'}-${suffix}`,
    'size',
    `min-${dim === 'height' ? 'h' : 'w'}-${suffix}`,
    { [`min-${dim}`]: val },
    `min-${dim}: ${val}`,
  );
  SIZE_SHORTCUTS[`max-${dim === 'height' ? 'h' : 'w'}-${suffix}`] = d(
    `max-${dim === 'height' ? 'h' : 'w'}-${suffix}`,
    'size',
    `max-${dim === 'height' ? 'h' : 'w'}-${suffix}`,
    { [`max-${dim}`]: val },
    `max-${dim}: ${val}`,
  );
});

SIZE_SHORTCUTS['h-lh'] = d('h-lh', 'size', 'h-lh', { height: '1lh' }, 'height: 1lh');
SIZE_SHORTCUTS['size-full'] = d('size-full', 'size', 'size-full', { width: '100%', height: '100%' }, 'width & height: 100%');
SIZE_SHORTCUTS['size-screen'] = d('size-screen', 'size', 'size-screen', { width: '100vw', height: '100vh' }, 'Full viewport size');
SIZE_SHORTCUTS['size-auto'] = d('size-auto', 'size', 'size-auto', { width: 'auto', height: 'auto' }, 'width & height: auto');
SIZE_SHORTCUTS['size-min'] = d('size-min', 'size', 'size-min', { width: 'min-content', height: 'min-content' }, 'min-content both');
SIZE_SHORTCUTS['size-max'] = d('size-max', 'size', 'size-max', { width: 'max-content', height: 'max-content' }, 'max-content both');
SIZE_SHORTCUTS['size-fit'] = d('size-fit', 'size', 'size-fit', { width: 'fit-content', height: 'fit-content' }, 'fit-content both');

export const TEXT_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'text-ellipsis': d('text-ellipsis', 'text', 'overflow-hidden text-ellipsis whitespace-nowrap', { overflow: 'hidden', 'text-overflow': 'ellipsis', 'white-space': 'nowrap' }, 'Truncate with ellipsis'),
  'text-balance': d('text-balance', 'text', 'text-balance', { 'text-wrap': 'balance' }, 'Balance text across lines'),
  'text-pretty': d('text-pretty', 'text', 'text-pretty', { 'text-wrap': 'pretty' }, 'Avoid orphaned words'),
  'text-left': d('text-left', 'text', 'text-left', { 'text-align': 'left' }, 'text-align: left'),
  'text-center': d('text-center', 'text', 'text-center', { 'text-align': 'center' }, 'text-align: center'),
  'text-right': d('text-right', 'text', 'text-right', { 'text-align': 'right' }, 'text-align: right'),
  'text-justify': d('text-justify', 'text', 'text-justify', { 'text-align': 'justify' }, 'text-align: justify'),
  'text-start': d('text-start', 'text', 'text-start', { 'text-align': 'start' }, 'text-align: start'),
  'text-end': d('text-end', 'text', 'text-end', { 'text-align': 'end' }, 'text-align: end'),
  uppercase: d('uppercase', 'text', 'uppercase', { 'text-transform': 'uppercase' }, 'text-transform: uppercase'),
  lowercase: d('lowercase', 'text', 'lowercase', { 'text-transform': 'lowercase' }, 'text-transform: lowercase'),
  capitalize: d('capitalize', 'text', 'capitalize', { 'text-transform': 'capitalize' }, 'text-transform: capitalize'),
  'normal-case': d('normal-case', 'text', 'normal-case', { 'text-transform': 'none' }, 'text-transform: none'),
  italic: d('italic', 'text', 'italic', { 'font-style': 'italic' }, 'font-style: italic'),
  'not-italic': d('not-italic', 'text', 'not-italic', { 'font-style': 'normal' }, 'font-style: normal'),
  underline: d('underline', 'text', 'underline', { 'text-decoration-line': 'underline' }, 'text-decoration: underline'),
  overline: d('overline', 'text', 'overline', { 'text-decoration-line': 'overline' }, 'text-decoration: overline'),
  'line-through': d('line-through', 'text', 'line-through', { 'text-decoration-line': 'line-through' }, 'text-decoration: line-through'),
  'no-underline': d('no-underline', 'text', 'no-underline', { 'text-decoration-line': 'none' }, 'text-decoration: none'),
  truncate: d('truncate', 'text', 'truncate', { overflow: 'hidden', 'text-overflow': 'ellipsis', 'white-space': 'nowrap' }, 'Single-line truncate'),
  'whitespace-normal': d('whitespace-normal', 'text', 'whitespace-normal', { 'white-space': 'normal' }, 'white-space: normal'),
  'whitespace-nowrap': d('whitespace-nowrap', 'text', 'whitespace-nowrap', { 'white-space': 'nowrap' }, 'white-space: nowrap'),
  'whitespace-pre': d('whitespace-pre', 'text', 'whitespace-pre', { 'white-space': 'pre' }, 'white-space: pre'),
  'whitespace-pre-wrap': d('whitespace-pre-wrap', 'text', 'whitespace-pre-wrap', { 'white-space': 'pre-wrap' }, 'white-space: pre-wrap'),
  'break-normal': d('break-normal', 'text', 'break-normal', { 'overflow-wrap': 'normal', 'word-break': 'normal' }, 'overflow-wrap: normal'),
  'break-words': d('break-words', 'text', 'break-words', { 'overflow-wrap': 'break-word' }, 'overflow-wrap: break-word'),
  'break-all': d('break-all', 'text', 'break-all', { 'word-break': 'break-all' }, 'word-break: break-all'),
  'leading-none': d('leading-none', 'text', 'leading-none', { 'line-height': '1' }, 'line-height: 1'),
  'leading-tight': d('leading-tight', 'text', 'leading-tight', { 'line-height': '1.25' }, 'line-height: 1.25'),
  'leading-snug': d('leading-snug', 'text', 'leading-snug', { 'line-height': '1.375' }, 'line-height: 1.375'),
  'leading-normal': d('leading-normal', 'text', 'leading-normal', { 'line-height': '1.5' }, 'line-height: 1.5'),
  'leading-relaxed': d('leading-relaxed', 'text', 'leading-relaxed', { 'line-height': '1.625' }, 'line-height: 1.625'),
  'leading-loose': d('leading-loose', 'text', 'leading-loose', { 'line-height': '2' }, 'line-height: 2'),
  'tracking-tighter': d('tracking-tighter', 'text', 'tracking-tighter', { 'letter-spacing': '-0.05em' }, 'letter-spacing: -0.05em'),
  'tracking-tight': d('tracking-tight', 'text', 'tracking-tight', { 'letter-spacing': '-0.025em' }, 'letter-spacing: -0.025em'),
  'tracking-normal': d('tracking-normal', 'text', 'tracking-normal', { 'letter-spacing': '0' }, 'letter-spacing: 0'),
  'tracking-wide': d('tracking-wide', 'text', 'tracking-wide', { 'letter-spacing': '0.025em' }, 'letter-spacing: 0.025em'),
  'tracking-wider': d('tracking-wider', 'text', 'tracking-wider', { 'letter-spacing': '0.05em' }, 'letter-spacing: 0.05em'),
  'tracking-widest': d('tracking-widest', 'text', 'tracking-widest', { 'letter-spacing': '0.1em' }, 'letter-spacing: 0.1em'),
};

Object.entries(FONT_SIZES).forEach(([key, { size, lineHeight }]) => {
  TEXT_SHORTCUTS[`text-${key}`] = d(`text-${key}`, 'text', `text-${key}`, { 'font-size': size, 'line-height': lineHeight }, `font-size: ${size}`);
});

[LINE_CLAMP_2, LINE_CLAMP_3].forEach((n) => {
  TEXT_SHORTCUTS[`line-clamp-${n}`] = d(`line-clamp-${n}`, 'text', `line-clamp-${n}`, { display: '-webkit-box', '-webkit-box-orient': 'vertical', '-webkit-line-clamp': String(n), overflow: 'hidden' }, `Clamp to ${n} lines`);
});

export const FONT_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'font-sans': d('font-sans', 'font', 'font-sans', { 'font-family': 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }, 'System sans-serif stack'),
  'font-serif': d('font-serif', 'font', 'font-serif', { 'font-family': 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }, 'System serif stack'),
  'font-mono': d('font-mono', 'font', 'font-mono', { 'font-family': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }, 'System monospace stack'),
};

Object.entries(FONT_WEIGHTS).forEach(([key, weight]) => {
  FONT_SHORTCUTS[`font-${key}`] = d(`font-${key}`, 'font', `font-${key}`, { 'font-weight': weight }, `font-weight: ${weight}`);
});

export const DISPLAY_SHORTCUTS: Record<string, ShortcutDefinition> = {
  block: d('block', 'display', 'block', { display: 'block' }, 'Display block'),
  inline: d('inline', 'display', 'inline', { display: 'inline' }, 'Display inline'),
  'inline-block': d('inline-block', 'display', 'inline-block', { display: 'inline-block' }, 'Display inline-block'),
  'flow-root': d('flow-root', 'display', 'flow-root', { display: 'flow-root' }, 'display: flow-root'),
  contents: d('contents', 'display', 'contents', { display: 'contents' }, 'display: contents'),
  table: d('table', 'display', 'table', { display: 'table' }, 'display: table'),
  'table-cell': d('table-cell', 'display', 'table-cell', { display: 'table-cell' }, 'display: table-cell'),
  'table-row': d('table-row', 'display', 'table-row', { display: 'table-row' }, 'display: table-row'),
  'list-item': d('list-item', 'display', 'list-item', { display: 'list-item' }, 'display: list-item'),
  hidden: d('hidden', 'display', 'hidden', { display: 'none' }, 'Hide element'),
  'sr-only': d('sr-only', 'display', 'sr-only', { position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', 'white-space': 'nowrap', 'border-width': '0' }, 'Screen reader only'),
  visible: d('visible', 'display', 'visible', { visibility: 'visible' }, 'visibility: visible'),
  invisible: d('invisible', 'display', 'invisible', { visibility: 'hidden' }, 'visibility: hidden'),
};

export const OVERFLOW_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'overflow-hidden': d('overflow-hidden', 'overflow', 'overflow-hidden', { overflow: 'hidden' }, 'Hide overflow'),
  'overflow-auto': d('overflow-auto', 'overflow', 'overflow-auto', { overflow: 'auto' }, 'Auto scroll on overflow'),
  'overflow-scroll': d('overflow-scroll', 'overflow', 'overflow-scroll', { overflow: 'scroll' }, 'Always show scroll'),
  'overflow-visible': d('overflow-visible', 'overflow', 'overflow-visible', { overflow: 'visible' }, 'overflow: visible'),
  'overflow-x-auto': d('overflow-x-auto', 'overflow', 'overflow-x-auto', { 'overflow-x': 'auto' }, 'Horizontal auto scroll'),
  'overflow-y-auto': d('overflow-y-auto', 'overflow', 'overflow-y-auto', { 'overflow-y': 'auto' }, 'Vertical auto scroll'),
  'overflow-x-hidden': d('overflow-x-hidden', 'overflow', 'overflow-x-hidden', { 'overflow-x': 'hidden' }, 'Hide horizontal overflow'),
  'overflow-y-hidden': d('overflow-y-hidden', 'overflow', 'overflow-y-hidden', { 'overflow-y': 'hidden' }, 'Hide vertical overflow'),
  'overflow-x-scroll': d('overflow-x-scroll', 'overflow', 'overflow-x-scroll', { 'overflow-x': 'scroll' }, 'overflow-x: scroll'),
  'overflow-y-scroll': d('overflow-y-scroll', 'overflow', 'overflow-y-scroll', { 'overflow-y': 'scroll' }, 'overflow-y: scroll'),
  'scroll-smooth': d('scroll-smooth', 'overflow', 'scroll-smooth', { 'scroll-behavior': 'smooth' }, 'scroll-behavior: smooth'),
  'scroll-auto': d('scroll-auto', 'overflow', 'scroll-auto', { 'scroll-behavior': 'auto' }, 'scroll-behavior: auto'),
};

export const CURSOR_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'cursor-pointer': d('cursor-pointer', 'cursor', 'cursor-pointer', { cursor: 'pointer' }, 'Pointer cursor'),
  'cursor-default': d('cursor-default', 'cursor', 'cursor-default', { cursor: 'default' }, 'Default cursor'),
  'cursor-move': d('cursor-move', 'cursor', 'cursor-move', { cursor: 'move' }, 'Move cursor'),
  'cursor-not-allowed': d('cursor-not-allowed', 'cursor', 'cursor-not-allowed', { cursor: 'not-allowed' }, 'Disabled cursor'),
  'cursor-grab': d('cursor-grab', 'cursor', 'cursor-grab', { cursor: 'grab' }, 'Grab cursor'),
  'cursor-grabbing': d('cursor-grabbing', 'cursor', 'cursor-grabbing', { cursor: 'grabbing' }, 'Grabbing cursor'),
  'cursor-text': d('cursor-text', 'cursor', 'cursor-text', { cursor: 'text' }, 'Text cursor'),
  'cursor-wait': d('cursor-wait', 'cursor', 'cursor-wait', { cursor: 'wait' }, 'Wait cursor'),
  'cursor-help': d('cursor-help', 'cursor', 'cursor-help', { cursor: 'help' }, 'Help cursor'),
  'cursor-none': d('cursor-none', 'cursor', 'cursor-none', { cursor: 'none' }, 'Hide cursor'),
  'cursor-crosshair': d('cursor-crosshair', 'cursor', 'cursor-crosshair', { cursor: 'crosshair' }, 'Crosshair cursor'),
};

export const TRANSITION_SHORTCUTS: Record<string, ShortcutDefinition> = {
  transition: d('transition', 'transition', 'transition-all duration-150 ease-in-out', { transition: `all ${TRANSITION_DEFAULT_MS}ms ease-in-out` }, 'Transition all — default speed'),
  'transition-fast': d('transition-fast', 'transition', 'transition-all duration-75 ease-in-out', { transition: `all ${TRANSITION_FAST_MS}ms ease-in-out` }, `Fast transition (${TRANSITION_FAST_MS}ms)`),
  'transition-slow': d('transition-slow', 'transition', 'transition-all duration-300 ease-in-out', { transition: `all ${TRANSITION_SLOW_MS}ms ease-in-out` }, `Slow transition (${TRANSITION_SLOW_MS}ms)`),
  'transition-transform': d('transition-transform', 'transition', 'transition-transform duration-150 ease-in-out', { transition: `transform ${TRANSITION_DEFAULT_MS}ms ease-in-out` }, 'Transition transform only'),
  'transition-opacity': d('transition-opacity', 'transition', 'transition-opacity duration-150 ease-in-out', { transition: `opacity ${TRANSITION_DEFAULT_MS}ms ease-in-out` }, 'Transition opacity only'),
  'transition-colors': d('transition-colors', 'transition', 'transition-colors duration-150 ease-in-out', { transition: `color, background-color, border-color, fill, stroke ${TRANSITION_DEFAULT_MS}ms ease-in-out` }, 'Transition color-related props'),
  'transition-none': d('transition-none', 'transition', 'transition-none', { transition: 'none' }, 'Disable transitions'),
  'ease-linear': d('ease-linear', 'transition', 'ease-linear', { 'transition-timing-function': 'linear' }, 'timing: linear'),
  'ease-in': d('ease-in', 'transition', 'ease-in', { 'transition-timing-function': 'cubic-bezier(0.4, 0, 1, 1)' }, 'timing: ease-in'),
  'ease-out': d('ease-out', 'transition', 'ease-out', { 'transition-timing-function': 'cubic-bezier(0, 0, 0.2, 1)' }, 'timing: ease-out'),
  'ease-in-out': d('ease-in-out', 'transition', 'ease-in-out', { 'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)' }, 'timing: ease-in-out'),
};

export const INTERACTIVE_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'pointer-none': d('pointer-none', 'interactive', 'pointer-events-none', { 'pointer-events': 'none' }, 'Disable pointer events'),
  'pointer-auto': d('pointer-auto', 'interactive', 'pointer-events-auto', { 'pointer-events': 'auto' }, 'Enable pointer events'),
  'select-none': d('select-none', 'interactive', 'select-none', { 'user-select': 'none' }, 'Disable text selection'),
  'select-all': d('select-all', 'interactive', 'select-all', { 'user-select': 'all' }, 'Select all on click'),
  'select-text': d('select-text', 'interactive', 'select-text', { 'user-select': 'text' }, 'Allow text selection'),
  'select-auto': d('select-auto', 'interactive', 'select-auto', { 'user-select': 'auto' }, 'user-select: auto'),
  'outline-none': d('outline-none', 'interactive', 'outline-none', { outline: '2px solid transparent', 'outline-offset': '2px' }, 'Remove focus outline'),
  'appearance-none': d('appearance-none', 'interactive', 'appearance-none', { appearance: 'none' }, 'Remove native appearance'),
  'resize-none': d('resize-none', 'interactive', 'resize-none', { resize: 'none' }, 'resize: none'),
  resize: d('resize', 'interactive', 'resize', { resize: 'both' }, 'resize: both'),
  'resize-x': d('resize-x', 'interactive', 'resize-x', { resize: 'horizontal' }, 'resize: horizontal'),
  'resize-y': d('resize-y', 'interactive', 'resize-y', { resize: 'vertical' }, 'resize: vertical'),
};

export const SPACING_SHORTCUTS: Record<string, ShortcutDefinition> = {};

SPACING_SCALE.forEach(([n, val]) => {
  SPACING_SHORTCUTS[`p-${n}`] = d(`p-${n}`, 'spacing', `p-${n}`, { padding: val }, `padding: ${val}`);
  SPACING_SHORTCUTS[`px-${n}`] = d(`px-${n}`, 'spacing', `px-${n}`, { 'padding-left': val, 'padding-right': val }, `padding-inline: ${val}`);
  SPACING_SHORTCUTS[`py-${n}`] = d(`py-${n}`, 'spacing', `py-${n}`, { 'padding-top': val, 'padding-bottom': val }, `padding-block: ${val}`);
  SPACING_SHORTCUTS[`pt-${n}`] = d(`pt-${n}`, 'spacing', `pt-${n}`, { 'padding-top': val }, `padding-top: ${val}`);
  SPACING_SHORTCUTS[`pr-${n}`] = d(`pr-${n}`, 'spacing', `pr-${n}`, { 'padding-right': val }, `padding-right: ${val}`);
  SPACING_SHORTCUTS[`pb-${n}`] = d(`pb-${n}`, 'spacing', `pb-${n}`, { 'padding-bottom': val }, `padding-bottom: ${val}`);
  SPACING_SHORTCUTS[`pl-${n}`] = d(`pl-${n}`, 'spacing', `pl-${n}`, { 'padding-left': val }, `padding-left: ${val}`);
  SPACING_SHORTCUTS[`m-${n}`] = d(`m-${n}`, 'spacing', `m-${n}`, { margin: val }, `margin: ${val}`);
  SPACING_SHORTCUTS[`mx-${n}`] = d(`mx-${n}`, 'spacing', `mx-${n}`, { 'margin-left': val, 'margin-right': val }, `margin-inline: ${val}`);
  SPACING_SHORTCUTS[`my-${n}`] = d(`my-${n}`, 'spacing', `my-${n}`, { 'margin-top': val, 'margin-bottom': val }, `margin-block: ${val}`);
  SPACING_SHORTCUTS[`mt-${n}`] = d(`mt-${n}`, 'spacing', `mt-${n}`, { 'margin-top': val }, `margin-top: ${val}`);
  SPACING_SHORTCUTS[`mr-${n}`] = d(`mr-${n}`, 'spacing', `mr-${n}`, { 'margin-right': val }, `margin-right: ${val}`);
  SPACING_SHORTCUTS[`mb-${n}`] = d(`mb-${n}`, 'spacing', `mb-${n}`, { 'margin-bottom': val }, `margin-bottom: ${val}`);
  SPACING_SHORTCUTS[`ml-${n}`] = d(`ml-${n}`, 'spacing', `ml-${n}`, { 'margin-left': val }, `margin-left: ${val}`);
  SPACING_SHORTCUTS[`space-x-${n}`] = d(`space-x-${n}`, 'spacing', `space-x-${n}`, { gap: val }, `space-x (gap-x): ${val}`);
  SPACING_SHORTCUTS[`space-y-${n}`] = d(`space-y-${n}`, 'spacing', `space-y-${n}`, { gap: val }, `space-y (gap-y): ${val}`);
  if (val !== SPACING_0) {
    const neg = negate(val);
    SPACING_SHORTCUTS[`-m-${n}`] = d(`-m-${n}`, 'spacing', `-m-${n}`, { margin: neg }, `margin: ${neg}`);
    SPACING_SHORTCUTS[`-mx-${n}`] = d(`-mx-${n}`, 'spacing', `-mx-${n}`, { 'margin-left': neg, 'margin-right': neg }, `margin-inline: ${neg}`);
    SPACING_SHORTCUTS[`-my-${n}`] = d(`-my-${n}`, 'spacing', `-my-${n}`, { 'margin-top': neg, 'margin-bottom': neg }, `margin-block: ${neg}`);
    SPACING_SHORTCUTS[`-mt-${n}`] = d(`-mt-${n}`, 'spacing', `-mt-${n}`, { 'margin-top': neg }, `margin-top: ${neg}`);
    SPACING_SHORTCUTS[`-mr-${n}`] = d(`-mr-${n}`, 'spacing', `-mr-${n}`, { 'margin-right': neg }, `margin-right: ${neg}`);
    SPACING_SHORTCUTS[`-mb-${n}`] = d(`-mb-${n}`, 'spacing', `-mb-${n}`, { 'margin-bottom': neg }, `margin-bottom: ${neg}`);
    SPACING_SHORTCUTS[`-ml-${n}`] = d(`-ml-${n}`, 'spacing', `-ml-${n}`, { 'margin-left': neg }, `margin-left: ${neg}`);
  }
});

SPACING_SHORTCUTS['mx-auto'] = d('mx-auto', 'spacing', 'mx-auto', { 'margin-left': 'auto', 'margin-right': 'auto' }, 'margin-inline: auto');
SPACING_SHORTCUTS['my-auto'] = d('my-auto', 'spacing', 'my-auto', { 'margin-top': 'auto', 'margin-bottom': 'auto' }, 'margin-block: auto');
SPACING_SHORTCUTS['m-auto'] = d('m-auto', 'spacing', 'm-auto', { margin: 'auto' }, 'margin: auto');
SPACING_SHORTCUTS['mt-auto'] = d('mt-auto', 'spacing', 'mt-auto', { 'margin-top': 'auto' }, 'margin-top: auto');
SPACING_SHORTCUTS['mr-auto'] = d('mr-auto', 'spacing', 'mr-auto', { 'margin-right': 'auto' }, 'margin-right: auto');
SPACING_SHORTCUTS['mb-auto'] = d('mb-auto', 'spacing', 'mb-auto', { 'margin-bottom': 'auto' }, 'margin-bottom: auto');
SPACING_SHORTCUTS['ml-auto'] = d('ml-auto', 'spacing', 'ml-auto', { 'margin-left': 'auto' }, 'margin-left: auto');

export const GAP_SHORTCUTS: Record<string, ShortcutDefinition> = {};

SPACING_SCALE.forEach(([n, val]) => {
  GAP_SHORTCUTS[`gap-${n}`] = d(`gap-${n}`, 'gap', `gap-${n}`, { gap: val }, `gap: ${val}`);
  GAP_SHORTCUTS[`gap-x-${n}`] = d(`gap-x-${n}`, 'gap', `gap-x-${n}`, { 'column-gap': val }, `column-gap: ${val}`);
  GAP_SHORTCUTS[`gap-y-${n}`] = d(`gap-y-${n}`, 'gap', `gap-y-${n}`, { 'row-gap': val }, `row-gap: ${val}`);
});

export const ZINDEX_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'z-auto': d('z-auto', 'zindex', 'z-auto', { 'z-index': 'auto' }, 'z-index: auto'),
};
Z_INDEX_LEVELS.forEach((lvl) => {
  ZINDEX_SHORTCUTS[`z-${lvl}`] = d(`z-${lvl}`, 'zindex', `z-${lvl}`, { 'z-index': lvl }, `z-index: ${lvl}`);
});

export const RADIUS_SHORTCUTS: Record<string, ShortcutDefinition> = {};

Object.entries(RADIUS_SIZES).forEach(([key, val]) => {
  const name = key === 'default' ? 'rounded' : `rounded-${key}`;
  RADIUS_SHORTCUTS[name] = d(name, 'radius', name, { 'border-radius': val }, `border-radius: ${val}`);
  const sides: Array<[string, string[]]> = [
    ['t', ['border-top-left-radius', 'border-top-right-radius']],
    ['r', ['border-top-right-radius', 'border-bottom-right-radius']],
    ['b', ['border-bottom-left-radius', 'border-bottom-right-radius']],
    ['l', ['border-top-left-radius', 'border-bottom-left-radius']],
    ['tl', ['border-top-left-radius']],
    ['tr', ['border-top-right-radius']],
    ['bl', ['border-bottom-left-radius']],
    ['br', ['border-bottom-right-radius']],
  ];
  sides.forEach(([side, props]) => {
    const sideName = key === 'default' ? `rounded-${side}` : `rounded-${side}-${key}`;
    RADIUS_SHORTCUTS[sideName] = d(
      sideName,
      'radius',
      sideName,
      Object.fromEntries(props.map((p) => [p, val])),
      `${sideName}: ${val}`,
    );
  });
});

export const BORDER_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'border-solid': d('border-solid', 'border', 'border-solid', { 'border-style': 'solid' }, 'border-style: solid'),
  'border-dashed': d('border-dashed', 'border', 'border-dashed', { 'border-style': 'dashed' }, 'border-style: dashed'),
  'border-dotted': d('border-dotted', 'border', 'border-dotted', { 'border-style': 'dotted' }, 'border-style: dotted'),
  'border-double': d('border-double', 'border', 'border-double', { 'border-style': 'double' }, 'border-style: double'),
  'border-none': d('border-none', 'border', 'border-none', { 'border-style': 'none' }, 'border-style: none'),
  'border-hidden': d('border-hidden', 'border', 'border-hidden', { 'border-style': 'hidden' }, 'border-style: hidden'),
};

Object.entries(BORDER_WIDTHS).forEach(([key, val]) => {
  const name = key === 'default' ? 'border' : `border-${key}`;
  BORDER_SHORTCUTS[name] = d(name, 'border', name, { 'border-width': val, 'border-style': 'solid' }, `border-width: ${val}`);
  const sides: Array<[string, string]> = [
    ['t', 'border-top-width'],
    ['r', 'border-right-width'],
    ['b', 'border-bottom-width'],
    ['l', 'border-left-width'],
  ];
  sides.forEach(([side, prop]) => {
    const sideName = key === 'default' ? `border-${side}` : `border-${side}-${key}`;
    BORDER_SHORTCUTS[sideName] = d(sideName, 'border', sideName, { [prop]: val, 'border-style': 'solid' }, `${prop}: ${val}`);
  });
  const xName = key === 'default' ? 'border-x' : `border-x-${key}`;
  BORDER_SHORTCUTS[xName] = d(xName, 'border', xName, { 'border-left-width': val, 'border-right-width': val, 'border-style': 'solid' }, `border-x: ${val}`);
  const yName = key === 'default' ? 'border-y' : `border-y-${key}`;
  BORDER_SHORTCUTS[yName] = d(yName, 'border', yName, { 'border-top-width': val, 'border-bottom-width': val, 'border-style': 'solid' }, `border-y: ${val}`);
});

export const OPACITY_SHORTCUTS: Record<string, ShortcutDefinition> = {};

OPACITY_LEVELS.forEach((lvl) => {
  const decimal = String(Number(lvl) / 100);
  OPACITY_SHORTCUTS[`opacity-${lvl}`] = d(`opacity-${lvl}`, 'opacity', `opacity-${lvl}`, { opacity: decimal }, `opacity: ${decimal}`);
});

export const SHADOW_SHORTCUTS: Record<string, ShortcutDefinition> = {};

Object.entries(SHADOW_LEVELS).forEach(([key, val]) => {
  const name = key === 'default' ? 'shadow' : `shadow-${key}`;
  SHADOW_SHORTCUTS[name] = d(name, 'shadow', name, { 'box-shadow': val }, `box-shadow: ${key}`);
});

const BASIC_COLORS: Record<string, string> = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000000',
  white: '#ffffff',
  inherit: 'inherit',
};

export const COLOR_SHORTCUTS: Record<string, ShortcutDefinition> = {};

Object.entries(BASIC_COLORS).forEach(([key, val]) => {
  COLOR_SHORTCUTS[`bg-${key}`] = d(`bg-${key}`, 'color', `bg-${key}`, { 'background-color': val }, `background-color: ${val}`);
  COLOR_SHORTCUTS[`text-${key}`] = d(`text-${key}`, 'color', `text-${key}`, { color: val }, `color: ${val}`);
  COLOR_SHORTCUTS[`border-${key}`] = d(`border-${key}`, 'color', `border-${key}`, { 'border-color': val }, `border-color: ${val}`);
});

const GRAY_SCALE: Record<string, string> = {
  '50': '#f8fafc',
  '100': '#f1f5f9',
  '200': '#e2e8f0',
  '300': '#cbd5e1',
  '400': '#94a3b8',
  '500': '#64748b',
  '600': '#475569',
  '700': '#334155',
  '800': '#1e293b',
  '900': '#0f172a',
  '950': '#020617',
};

Object.entries(GRAY_SCALE).forEach(([key, val]) => {
  COLOR_SHORTCUTS[`bg-gray-${key}`] = d(`bg-gray-${key}`, 'color', `bg-slate-${key}`, { 'background-color': val }, `background-color: ${val}`);
  COLOR_SHORTCUTS[`text-gray-${key}`] = d(`text-gray-${key}`, 'color', `text-slate-${key}`, { color: val }, `color: ${val}`);
  COLOR_SHORTCUTS[`border-gray-${key}`] = d(`border-gray-${key}`, 'color', `border-slate-${key}`, { 'border-color': val }, `border-color: ${val}`);
});

Object.assign(SIZE_SHORTCUTS, SIZE_EXTRA_SHORTCUTS);
Object.assign(TEXT_SHORTCUTS, TEXT_EXTRA_SHORTCUTS);
Object.assign(FONT_SHORTCUTS, FONT_EXTRA_SHORTCUTS);
Object.assign(INTERACTIVE_SHORTCUTS, INTERACTIVE_EXTRA_SHORTCUTS);

export const ALL_SHORTCUTS: Record<string, Record<string, ShortcutDefinition>> = {
  layout: LAYOUT_SHORTCUTS,
  flex: FLEX_SHORTCUTS,
  grid: GRID_SHORTCUTS,
  position: POSITION_SHORTCUTS,
  inset: INSET_SHORTCUTS,
  size: SIZE_SHORTCUTS,
  spacing: SPACING_SHORTCUTS,
  gap: GAP_SHORTCUTS,
  text: TEXT_SHORTCUTS,
  font: FONT_SHORTCUTS,
  list: LIST_SHORTCUTS,
  display: DISPLAY_SHORTCUTS,
  overflow: OVERFLOW_SHORTCUTS,
  cursor: CURSOR_SHORTCUTS,
  transition: TRANSITION_SHORTCUTS,
  motion: MOTION_SHORTCUTS,
  transform: TRANSFORM_SHORTCUTS,
  filter: FILTER_SHORTCUTS,
  backdrop: BACKDROP_SHORTCUTS,
  background: BACKGROUND_SHORTCUTS,
  outline: OUTLINE_SHORTCUTS,
  effect: EFFECT_SHORTCUTS,
  table: TABLE_SHORTCUTS,
  scroll: SCROLL_SHORTCUTS,
  interactive: INTERACTIVE_SHORTCUTS,
  svg: SVG_SHORTCUTS,
  a11y: A11Y_SHORTCUTS,
  zindex: ZINDEX_SHORTCUTS,
  radius: RADIUS_SHORTCUTS,
  border: BORDER_SHORTCUTS,
  opacity: OPACITY_SHORTCUTS,
  shadow: SHADOW_SHORTCUTS,
  color: COLOR_SHORTCUTS,
};
