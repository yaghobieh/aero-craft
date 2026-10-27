import type { ShortcutDefinition } from '../types/shortcuts.types';
import {
  HORIZON_CHILD_SELECTOR,
  HORIZON_CLIP_MARGIN,
  HORIZON_CLUSTER_GAP,
  HORIZON_DOCK_PAD,
  HORIZON_FIRST_CHILD_SELECTOR,
  HORIZON_FLUID_MAX,
  HORIZON_FLUID_MIN,
  HORIZON_FRAME_SQUARE,
  HORIZON_FRAME_STORY,
  HORIZON_ICON_NUDGE,
  HORIZON_ICON_SIZE,
  HORIZON_INITIAL_LETTER,
  HORIZON_INTEREST_DELAY,
  HORIZON_LAST_CHILD_SELECTOR,
  HORIZON_PANCAKE_ROWS,
  HORIZON_SAFE_BOTTOM,
  HORIZON_SAFE_LEFT,
  HORIZON_SAFE_RIGHT,
  HORIZON_SAFE_TOP,
  HORIZON_SCROLL_FADE,
  HORIZON_SIBLING_STEP,
  HORIZON_SIDEBAR_MIN,
  HORIZON_STACK_GAP,
  HORIZON_SWITCHER_MIN,
  HORIZON_TIMELINE_SCOPE,
  HORIZON_VIEW_CLASS,
} from './numbers.const';

const d = (
  name: string,
  group: string,
  css: Record<string, string>,
  description: string,
  nested?: { selector: string; css: Record<string, string> },
): ShortcutDefinition => ({
  name,
  group,
  utilityRecipe: name,
  css,
  description,
  nestedSelector: nested?.selector,
  nestedCss: nested?.css,
});

/** CSS features Tailwind core does not ship as utilities. */
export const HORIZON_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'scroll-fade': d('scroll-fade', 'horizon', {
    'mask-image': `linear-gradient(to bottom, transparent, black ${HORIZON_SCROLL_FADE}, black calc(100% - ${HORIZON_SCROLL_FADE}), transparent)`,
  }, 'Fades the top and bottom of a scrollport'),
  'scroll-timeline': d('scroll-timeline', 'horizon', {
    'animation-timeline': 'scroll(self)',
    'animation-range': '0% 100%',
  }, 'Ties an animation to this element’s scroll'),
  'view-timeline': d('view-timeline', 'horizon', {
    'animation-timeline': 'view()',
    'animation-range': 'entry 0% cover 40%',
  }, 'Runs an animation as the element enters the viewport'),
  'field-content': d('field-content', 'horizon', { 'field-sizing': 'content' }, 'Textarea grows with its text'),
  'field-fixed': d('field-fixed', 'horizon', { 'field-sizing': 'fixed' }, 'Textarea keeps a fixed size'),
  'text-box-trim': d('text-box-trim', 'horizon', {
    'text-box-trim': 'trim-both',
    'text-box-edge': 'cap alphabetic',
  }, 'Removes the extra space above caps and below the baseline'),
  'initial-letter': d('initial-letter', 'horizon', {
    'initial-letter': HORIZON_INITIAL_LETTER,
  }, 'Drop cap three lines tall'),
  'scrollbar-thin': d('scrollbar-thin', 'horizon', { 'scrollbar-width': 'thin' }, 'Thin scrollbar'),
  'scrollbar-none': d('scrollbar-none', 'horizon', { 'scrollbar-width': 'none' }, 'Hides the scrollbar, scrolling still works'),
  'scrollbar-stable': d('scrollbar-stable', 'horizon', { 'scrollbar-gutter': 'stable' }, 'Reserves scrollbar space so layout does not jump'),
  'scrollbar-both': d('scrollbar-both', 'horizon', { 'scrollbar-gutter': 'stable both-edges' }, 'Reserves scrollbar space on both edges'),
  'safe-p': d('safe-p', 'horizon', {
    'padding-top': HORIZON_SAFE_TOP,
    'padding-right': HORIZON_SAFE_RIGHT,
    'padding-bottom': HORIZON_SAFE_BOTTOM,
    'padding-left': HORIZON_SAFE_LEFT,
  }, 'Pads for the device safe area'),
  'safe-pt': d('safe-pt', 'horizon', { 'padding-top': HORIZON_SAFE_TOP }, 'Top safe-area padding'),
  'safe-pr': d('safe-pr', 'horizon', { 'padding-right': HORIZON_SAFE_RIGHT }, 'Right safe-area padding'),
  'safe-pb': d('safe-pb', 'horizon', { 'padding-bottom': HORIZON_SAFE_BOTTOM }, 'Bottom safe-area padding'),
  'safe-pl': d('safe-pl', 'horizon', { 'padding-left': HORIZON_SAFE_LEFT }, 'Left safe-area padding'),
  'scheme-light-dark': d('scheme-light-dark', 'horizon', {
    'color-scheme': 'light dark',
    background: 'light-dark(white, #09090b)',
    color: 'light-dark(#18181b, #fafafa)',
  }, 'One declaration for light and dark, no class toggle'),
  'interpolate-size': d('interpolate-size', 'horizon', {
    'interpolate-size': 'allow-keywords',
  }, 'Lets height animate to auto'),
  'corner-round': d('corner-round', 'horizon', { 'corner-shape': 'round' }, 'Normal rounded corners'),
  'corner-squircle': d('corner-squircle', 'horizon', { 'corner-shape': 'squircle' }, 'Squircle corners'),
  'corner-bevel': d('corner-bevel', 'horizon', { 'corner-shape': 'bevel' }, 'Beveled corners'),
  'sibling-step': d('sibling-step', 'horizon', {
    'margin-inline-start': `calc(sibling-index() * ${HORIZON_SIBLING_STEP})`,
  }, 'Offsets each sibling by its index'),
  'contrast-auto': d('contrast-auto', 'horizon', {
    color: 'contrast-color(canvas)',
  }, 'Picks a contrasting color against the canvas'),
  'reading-flex': d('reading-flex', 'horizon', { 'reading-flow': 'flex-visual' }, 'Reading order follows the flex visual order'),
  'reading-grid': d('reading-grid', 'horizon', { 'reading-flow': 'grid-rows' }, 'Reading order follows grid rows'),
  masonry: d('masonry', 'horizon', {
    display: 'grid',
    'grid-template-rows': 'masonry',
    'align-tracks': 'start',
  }, 'Masonry rows without a JS layout library'),
  'content-auto': d('content-auto', 'horizon', {
    'content-visibility': 'auto',
    'contain-intrinsic-size': 'auto 320px',
  }, 'Skips layout for off-screen content'),
  'contain-strict': d('contain-strict', 'horizon', { contain: 'strict' }, 'Strict CSS containment'),
  'anchor-pop': d('anchor-pop', 'horizon', { 'anchor-name': '--ac-pop' }, 'Names an anchor for a popover'),
  'anchor-to-pop': d('anchor-to-pop', 'horizon', {
    'position-anchor': '--ac-pop',
    'position-area': 'bottom span-right',
    'position-try-fallbacks': 'flip-block',
  }, 'Places an element against the named anchor'),
  'view-transition-root': d('view-transition-root', 'horizon', {
    'view-transition-name': 'root',
  }, 'Opts the element into a view transition'),
  'tap-clear': d('tap-clear', 'horizon', {
    '-webkit-tap-highlight-color': 'transparent',
  }, 'Removes the mobile tap flash'),
  'fluid-text': d('fluid-text', 'horizon', {
    'font-size': `clamp(${HORIZON_FLUID_MIN}, 2vw + 0.5rem, ${HORIZON_FLUID_MAX})`,
  }, 'Type size that scales between two limits'),
  'hyphens-auto': d('hyphens-auto', 'horizon', { hyphens: 'auto' }, 'Hyphenates overflowing words'),
  'overlay-none': d('overlay-none', 'horizon', { overlay: 'none' }, 'Top layer does not use the overlay'),
  'scroll-target': d('scroll-target', 'horizon', { 'scroll-target-group': 'auto' }, 'Groups scroll targets for snap'),
  'margin-trim': d('margin-trim', 'horizon', { 'margin-trim': 'block' }, 'Drops the extra margin at the start and end of a stack'),
  'transition-discrete': d('transition-discrete', 'horizon', {
    'transition-behavior': 'allow-discrete',
  }, 'Lets discrete properties such as display animate'),
  'anim-replace': d('anim-replace', 'horizon', { 'animation-composition': 'replace' }, 'A new animation replaces the one already running'),
  'anim-add': d('anim-add', 'horizon', { 'animation-composition': 'add' }, 'A new animation adds to the one already running'),
  'anim-accumulate': d('anim-accumulate', 'horizon', { 'animation-composition': 'accumulate' }, 'A new animation accumulates on the one already running'),
  'timeline-scope': d('timeline-scope', 'horizon', {
    'timeline-scope': HORIZON_TIMELINE_SCOPE,
  }, 'Names a timeline descendants can share'),
  'clip-margin': d('clip-margin', 'horizon', {
    overflow: 'clip',
    'overflow-clip-margin': HORIZON_CLIP_MARGIN,
  }, 'Clips overflow, then keeps a margin before the clip edge'),
  'anchor-visible': d('anchor-visible', 'horizon', {
    'position-visibility': 'anchors-visible',
  }, 'Hides this element when its anchor is off screen'),
  'anchor-size': d('anchor-size', 'horizon', {
    width: 'anchor-size(width)',
  }, 'Matches the width of the anchored element'),
  'text-autospace': d('text-autospace', 'horizon', { 'text-autospace': 'normal' }, 'Inserts space between scripts that need it'),
  'range-standard': d('range-standard', 'horizon', { 'dynamic-range-limit': 'standard' }, 'Limits HDR highlights to a standard range'),
  'range-constrained': d('range-constrained', 'horizon', { 'dynamic-range-limit': 'constrained' }, 'Constrains HDR highlights further'),
  'appearance-base': d('appearance-base', 'horizon', { appearance: 'base-select' }, 'Opts a select into the base appearance so it can be styled'),
  'caret-block': d('caret-block', 'horizon', { 'caret-shape': 'block' }, 'Block caret instead of a thin bar'),
  'scroll-markers': d('scroll-markers', 'horizon', { 'scroll-marker-group': 'after' }, 'Generates scroll markers after the scroller'),
  'interest-delay': d('interest-delay', 'horizon', {
    'interest-delay': HORIZON_INTEREST_DELAY,
  }, 'Waits before treating a hover as interest'),
  'view-pair': d('view-pair', 'horizon', {
    'view-transition-class': HORIZON_VIEW_CLASS,
  }, 'Shares a view-transition class so two elements can morph'),
  'collapse-space': d('collapse-space', 'horizon', { 'white-space-collapse': 'collapse' }, 'Collapses white space the way HTML does'),
  'ruby-over': d('ruby-over', 'horizon', { 'ruby-position': 'over' }, 'Places ruby annotation above the base text'),
};

/** One-class layouts. Tailwind has the pieces; these are the finished patterns. */
export const RECIPE_SHORTCUTS: Record<string, ShortcutDefinition> = {
  stack: d('stack', 'recipes', {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'flex-start',
    gap: HORIZON_STACK_GAP,
  }, 'Vertical stack with an even gap'),
  cluster: d('cluster', 'recipes', {
    display: 'flex',
    'flex-wrap': 'wrap',
    'align-items': 'center',
    gap: HORIZON_CLUSTER_GAP,
  }, 'Wrapping row of items with a gap'),
  sidebar: d('sidebar', 'recipes', {
    display: 'flex',
    'flex-wrap': 'wrap',
    gap: HORIZON_STACK_GAP,
  }, 'Sidebar that wraps under the content when space runs out', {
    selector: HORIZON_FIRST_CHILD_SELECTOR,
    css: { 'flex-basis': HORIZON_SIDEBAR_MIN, 'flex-grow': '1' },
  }),
  switcher: d('switcher', 'recipes', {
    display: 'flex',
    'flex-wrap': 'wrap',
    gap: HORIZON_STACK_GAP,
  }, 'Row that becomes a stack when items would get too narrow', {
    selector: HORIZON_CHILD_SELECTOR,
    css: {
      'flex-grow': '1',
      'flex-basis': `calc((${HORIZON_SWITCHER_MIN} - 100%) * 999)`,
    },
  }),
  cover: d('cover', 'recipes', {
    display: 'grid',
    'min-block-size': '100dvh',
    'place-items': 'center',
    padding: HORIZON_STACK_GAP,
  }, 'Centers one thing in the viewport'),
  frame: d('frame', 'recipes', {
    'aspect-ratio': '16 / 9',
    overflow: 'hidden',
    display: 'grid',
  }, '16:9 frame. The child fills it', {
    selector: HORIZON_CHILD_SELECTOR,
    css: { width: '100%', height: '100%', 'object-fit': 'cover' },
  }),
  reel: d('reel', 'recipes', {
    display: 'flex',
    'overflow-x': 'auto',
    'scroll-snap-type': 'x mandatory',
    gap: HORIZON_CLUSTER_GAP,
  }, 'Horizontal snap reel', {
    selector: HORIZON_CHILD_SELECTOR,
    css: { 'flex': 'none', 'scroll-snap-align': 'start' },
  }),
  center: d('center', 'recipes', {
    'box-sizing': 'content-box',
    'margin-inline': 'auto',
    'max-width': '60ch',
    padding: HORIZON_STACK_GAP,
  }, 'A measure-limited centered column'),
  'grid-fit': d('grid-fit', 'recipes', {
    display: 'grid',
    'grid-template-columns': `repeat(auto-fit, minmax(min(${HORIZON_SIDEBAR_MIN}, 100%), 1fr))`,
    gap: HORIZON_STACK_GAP,
  }, 'Auto-fit grid that never overflows'),
  pancake: d('pancake', 'recipes', {
    display: 'grid',
    'grid-template-rows': HORIZON_PANCAKE_ROWS,
    'min-block-size': '100dvh',
  }, 'Header, growing middle, footer'),
  imposter: d('imposter', 'recipes', {
    position: 'absolute',
    inset: '0',
    margin: 'auto',
    width: 'fit-content',
    height: 'fit-content',
  }, 'Centers itself in a positioned parent'),
  repel: d('repel', 'recipes', {
    display: 'flex',
    'justify-content': 'space-between',
    'align-items': 'center',
    gap: HORIZON_CLUSTER_GAP,
  }, 'Pushes the first and last items to opposite ends'),
  dock: d('dock', 'recipes', {
    position: 'fixed',
    'inset-inline': '0',
    'inset-block-end': '0',
    display: 'flex',
    'justify-content': 'center',
    gap: HORIZON_CLUSTER_GAP,
    padding: HORIZON_DOCK_PAD,
    'padding-bottom': `max(${HORIZON_DOCK_PAD}, ${HORIZON_SAFE_BOTTOM})`,
  }, 'Fixed bar along the bottom, including the safe area'),
  'frame-square': d('frame-square', 'recipes', {
    'aspect-ratio': HORIZON_FRAME_SQUARE,
    overflow: 'hidden',
    display: 'grid',
  }, 'Square frame. The child fills it', {
    selector: HORIZON_CHILD_SELECTOR,
    css: { width: '100%', height: '100%', 'object-fit': 'cover' },
  }),
  'frame-story': d('frame-story', 'recipes', {
    'aspect-ratio': HORIZON_FRAME_STORY,
    overflow: 'hidden',
    display: 'grid',
  }, '9:16 story frame. The child fills it', {
    selector: HORIZON_CHILD_SELECTOR,
    css: { width: '100%', height: '100%', 'object-fit': 'cover' },
  }),
  icon: d('icon', 'recipes', {
    display: 'inline-flex',
    width: HORIZON_ICON_SIZE,
    height: HORIZON_ICON_SIZE,
    'vertical-align': HORIZON_ICON_NUDGE,
  }, 'Icon that sits on the text line'),
  'with-footer': d('with-footer', 'recipes', {
    display: 'flex',
    'flex-direction': 'column',
    'min-block-size': '100%',
  }, 'Column whose last child sits at the bottom', {
    selector: HORIZON_LAST_CHILD_SELECTOR,
    css: { 'margin-block-start': 'auto' },
  }),
};
