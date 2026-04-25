import type { ShortcutDefinition } from '../types/shortcuts.types';

const d = (name: string, group: string, utilityRecipe: string, css: Record<string, string>, desc: string): ShortcutDefinition => ({
  name,
  group,
  utilityRecipe,
  css,
  description: desc,
});

export const LAYOUT_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'box-border': d('box-border', 'layout', 'box-border', { 'box-sizing': 'border-box' }, 'box-sizing: border-box'),
  'box-content': d('box-content', 'layout', 'box-content', { 'box-sizing': 'content-box' }, 'box-sizing: content-box'),

  'aspect-auto': d('aspect-auto', 'layout', 'aspect-auto', { 'aspect-ratio': 'auto' }, 'aspect-ratio: auto'),
  'aspect-square': d('aspect-square', 'layout', 'aspect-square', { 'aspect-ratio': '1 / 1' }, 'aspect-ratio: 1/1'),
  'aspect-video': d('aspect-video', 'layout', 'aspect-video', { 'aspect-ratio': '16 / 9' }, 'aspect-ratio: 16/9'),
  'aspect-portrait': d('aspect-portrait', 'layout', 'aspect-[3/4]', { 'aspect-ratio': '3 / 4' }, 'aspect-ratio: 3/4'),

  'object-contain': d('object-contain', 'layout', 'object-contain', { 'object-fit': 'contain' }, 'object-fit: contain'),
  'object-cover': d('object-cover', 'layout', 'object-cover', { 'object-fit': 'cover' }, 'object-fit: cover'),
  'object-fill': d('object-fill', 'layout', 'object-fill', { 'object-fit': 'fill' }, 'object-fit: fill'),
  'object-none': d('object-none', 'layout', 'object-none', { 'object-fit': 'none' }, 'object-fit: none'),
  'object-scale-down': d('object-scale-down', 'layout', 'object-scale-down', { 'object-fit': 'scale-down' }, 'object-fit: scale-down'),

  'object-top': d('object-top', 'layout', 'object-top', { 'object-position': 'top' }, 'object-position: top'),
  'object-right': d('object-right', 'layout', 'object-right', { 'object-position': 'right' }, 'object-position: right'),
  'object-bottom': d('object-bottom', 'layout', 'object-bottom', { 'object-position': 'bottom' }, 'object-position: bottom'),
  'object-left': d('object-left', 'layout', 'object-left', { 'object-position': 'left' }, 'object-position: left'),
  'object-center': d('object-center', 'layout', 'object-center', { 'object-position': 'center' }, 'object-position: center'),
  'object-top-right': d('object-top-right', 'layout', 'object-right-top', { 'object-position': 'right top' }, 'object-position: right top'),
  'object-top-left': d('object-top-left', 'layout', 'object-left-top', { 'object-position': 'left top' }, 'object-position: left top'),
  'object-bottom-right': d('object-bottom-right', 'layout', 'object-right-bottom', { 'object-position': 'right bottom' }, 'object-position: right bottom'),
  'object-bottom-left': d('object-bottom-left', 'layout', 'object-left-bottom', { 'object-position': 'left bottom' }, 'object-position: left bottom'),

  isolate: d('isolate', 'layout', 'isolate', { isolation: 'isolate' }, 'isolation: isolate'),
  'isolation-auto': d('isolation-auto', 'layout', 'isolation-auto', { isolation: 'auto' }, 'isolation: auto'),

  'float-left': d('float-left', 'layout', 'float-left', { float: 'left' }, 'float: left'),
  'float-right': d('float-right', 'layout', 'float-right', { float: 'right' }, 'float: right'),
  'float-start': d('float-start', 'layout', 'float-start', { float: 'inline-start' }, 'float: inline-start'),
  'float-end': d('float-end', 'layout', 'float-end', { float: 'inline-end' }, 'float: inline-end'),
  'float-none': d('float-none', 'layout', 'float-none', { float: 'none' }, 'float: none'),

  'clear-left': d('clear-left', 'layout', 'clear-left', { clear: 'left' }, 'clear: left'),
  'clear-right': d('clear-right', 'layout', 'clear-right', { clear: 'right' }, 'clear: right'),
  'clear-both': d('clear-both', 'layout', 'clear-both', { clear: 'both' }, 'clear: both'),
  'clear-start': d('clear-start', 'layout', 'clear-start', { clear: 'inline-start' }, 'clear: inline-start'),
  'clear-end': d('clear-end', 'layout', 'clear-end', { clear: 'inline-end' }, 'clear: inline-end'),
  'clear-none': d('clear-none', 'layout', 'clear-none', { clear: 'none' }, 'clear: none'),

  'columns-auto': d('columns-auto', 'layout', 'columns-auto', { columns: 'auto' }, 'columns: auto'),
  'columns-1': d('columns-1', 'layout', 'columns-1', { columns: '1' }, 'columns: 1'),
  'columns-2': d('columns-2', 'layout', 'columns-2', { columns: '2' }, 'columns: 2'),
  'columns-3': d('columns-3', 'layout', 'columns-3', { columns: '3' }, 'columns: 3'),
  'columns-4': d('columns-4', 'layout', 'columns-4', { columns: '4' }, 'columns: 4'),
  'columns-5': d('columns-5', 'layout', 'columns-5', { columns: '5' }, 'columns: 5'),
  'columns-6': d('columns-6', 'layout', 'columns-6', { columns: '6' }, 'columns: 6'),

  'break-after-auto': d('break-after-auto', 'layout', 'break-after-auto', { 'break-after': 'auto' }, 'break-after: auto'),
  'break-after-avoid': d('break-after-avoid', 'layout', 'break-after-avoid', { 'break-after': 'avoid' }, 'break-after: avoid'),
  'break-after-all': d('break-after-all', 'layout', 'break-after-all', { 'break-after': 'all' }, 'break-after: all'),
  'break-after-page': d('break-after-page', 'layout', 'break-after-page', { 'break-after': 'page' }, 'break-after: page'),
  'break-after-column': d('break-after-column', 'layout', 'break-after-column', { 'break-after': 'column' }, 'break-after: column'),

  'break-before-auto': d('break-before-auto', 'layout', 'break-before-auto', { 'break-before': 'auto' }, 'break-before: auto'),
  'break-before-avoid': d('break-before-avoid', 'layout', 'break-before-avoid', { 'break-before': 'avoid' }, 'break-before: avoid'),
  'break-before-all': d('break-before-all', 'layout', 'break-before-all', { 'break-before': 'all' }, 'break-before: all'),
  'break-before-page': d('break-before-page', 'layout', 'break-before-page', { 'break-before': 'page' }, 'break-before: page'),
  'break-before-column': d('break-before-column', 'layout', 'break-before-column', { 'break-before': 'column' }, 'break-before: column'),

  'break-inside-auto': d('break-inside-auto', 'layout', 'break-inside-auto', { 'break-inside': 'auto' }, 'break-inside: auto'),
  'break-inside-avoid': d('break-inside-avoid', 'layout', 'break-inside-avoid', { 'break-inside': 'avoid' }, 'break-inside: avoid'),
  'break-inside-avoid-page': d('break-inside-avoid-page', 'layout', 'break-inside-avoid-page', { 'break-inside': 'avoid-page' }, 'break-inside: avoid-page'),
  'break-inside-avoid-column': d('break-inside-avoid-column', 'layout', 'break-inside-avoid-column', { 'break-inside': 'avoid-column' }, 'break-inside: avoid-column'),

  'box-decoration-slice': d('box-decoration-slice', 'layout', 'box-decoration-slice', { 'box-decoration-break': 'slice' }, 'box-decoration-break: slice'),
  'box-decoration-clone': d('box-decoration-clone', 'layout', 'box-decoration-clone', { 'box-decoration-break': 'clone' }, 'box-decoration-break: clone'),

  'overscroll-auto': d('overscroll-auto', 'layout', 'overscroll-auto', { 'overscroll-behavior': 'auto' }, 'overscroll-behavior: auto'),
  'overscroll-contain': d('overscroll-contain', 'layout', 'overscroll-contain', { 'overscroll-behavior': 'contain' }, 'overscroll-behavior: contain'),
  'overscroll-none': d('overscroll-none', 'layout', 'overscroll-none', { 'overscroll-behavior': 'none' }, 'overscroll-behavior: none'),
  'overscroll-x-auto': d('overscroll-x-auto', 'layout', 'overscroll-x-auto', { 'overscroll-behavior-x': 'auto' }, 'overscroll-behavior-x: auto'),
  'overscroll-x-contain': d('overscroll-x-contain', 'layout', 'overscroll-x-contain', { 'overscroll-behavior-x': 'contain' }, 'overscroll-behavior-x: contain'),
  'overscroll-x-none': d('overscroll-x-none', 'layout', 'overscroll-x-none', { 'overscroll-behavior-x': 'none' }, 'overscroll-behavior-x: none'),
  'overscroll-y-auto': d('overscroll-y-auto', 'layout', 'overscroll-y-auto', { 'overscroll-behavior-y': 'auto' }, 'overscroll-behavior-y: auto'),
  'overscroll-y-contain': d('overscroll-y-contain', 'layout', 'overscroll-y-contain', { 'overscroll-behavior-y': 'contain' }, 'overscroll-behavior-y: contain'),
  'overscroll-y-none': d('overscroll-y-none', 'layout', 'overscroll-y-none', { 'overscroll-behavior-y': 'none' }, 'overscroll-behavior-y: none'),
};

export const BACKGROUND_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'bg-fixed': d('bg-fixed', 'background', 'bg-fixed', { 'background-attachment': 'fixed' }, 'background-attachment: fixed'),
  'bg-local': d('bg-local', 'background', 'bg-local', { 'background-attachment': 'local' }, 'background-attachment: local'),
  'bg-scroll': d('bg-scroll', 'background', 'bg-scroll', { 'background-attachment': 'scroll' }, 'background-attachment: scroll'),

  'bg-clip-border': d('bg-clip-border', 'background', 'bg-clip-border', { 'background-clip': 'border-box' }, 'background-clip: border-box'),
  'bg-clip-padding': d('bg-clip-padding', 'background', 'bg-clip-padding', { 'background-clip': 'padding-box' }, 'background-clip: padding-box'),
  'bg-clip-content': d('bg-clip-content', 'background', 'bg-clip-content', { 'background-clip': 'content-box' }, 'background-clip: content-box'),
  'bg-clip-text': d('bg-clip-text', 'background', 'bg-clip-text', { 'background-clip': 'text' }, 'background-clip: text'),

  'bg-origin-border': d('bg-origin-border', 'background', 'bg-origin-border', { 'background-origin': 'border-box' }, 'background-origin: border-box'),
  'bg-origin-padding': d('bg-origin-padding', 'background', 'bg-origin-padding', { 'background-origin': 'padding-box' }, 'background-origin: padding-box'),
  'bg-origin-content': d('bg-origin-content', 'background', 'bg-origin-content', { 'background-origin': 'content-box' }, 'background-origin: content-box'),

  'bg-top': d('bg-top', 'background', 'bg-top', { 'background-position': 'top' }, 'background-position: top'),
  'bg-right': d('bg-right', 'background', 'bg-right', { 'background-position': 'right' }, 'background-position: right'),
  'bg-bottom': d('bg-bottom', 'background', 'bg-bottom', { 'background-position': 'bottom' }, 'background-position: bottom'),
  'bg-left': d('bg-left', 'background', 'bg-left', { 'background-position': 'left' }, 'background-position: left'),
  'bg-center': d('bg-center', 'background', 'bg-center', { 'background-position': 'center' }, 'background-position: center'),
  'bg-top-right': d('bg-top-right', 'background', 'bg-right-top', { 'background-position': 'right top' }, 'background-position: right top'),
  'bg-top-left': d('bg-top-left', 'background', 'bg-left-top', { 'background-position': 'left top' }, 'background-position: left top'),
  'bg-bottom-right': d('bg-bottom-right', 'background', 'bg-right-bottom', { 'background-position': 'right bottom' }, 'background-position: right bottom'),
  'bg-bottom-left': d('bg-bottom-left', 'background', 'bg-left-bottom', { 'background-position': 'left bottom' }, 'background-position: left bottom'),

  'bg-repeat': d('bg-repeat', 'background', 'bg-repeat', { 'background-repeat': 'repeat' }, 'background-repeat: repeat'),
  'bg-no-repeat': d('bg-no-repeat', 'background', 'bg-no-repeat', { 'background-repeat': 'no-repeat' }, 'background-repeat: no-repeat'),
  'bg-repeat-x': d('bg-repeat-x', 'background', 'bg-repeat-x', { 'background-repeat': 'repeat-x' }, 'background-repeat: repeat-x'),
  'bg-repeat-y': d('bg-repeat-y', 'background', 'bg-repeat-y', { 'background-repeat': 'repeat-y' }, 'background-repeat: repeat-y'),
  'bg-round': d('bg-round', 'background', 'bg-repeat-round', { 'background-repeat': 'round' }, 'background-repeat: round'),
  'bg-space': d('bg-space', 'background', 'bg-repeat-space', { 'background-repeat': 'space' }, 'background-repeat: space'),

  'bg-auto': d('bg-auto', 'background', 'bg-auto', { 'background-size': 'auto' }, 'background-size: auto'),
  'bg-cover': d('bg-cover', 'background', 'bg-cover', { 'background-size': 'cover' }, 'background-size: cover'),
  'bg-contain': d('bg-contain', 'background', 'bg-contain', { 'background-size': 'contain' }, 'background-size: contain'),

  'bg-none': d('bg-none', 'background', 'bg-none', { 'background-image': 'none' }, 'background-image: none'),
  'bg-gradient-to-t': d('bg-gradient-to-t', 'background', 'bg-gradient-to-t', { 'background-image': 'linear-gradient(to top, var(--ac-gradient-from), var(--ac-gradient-to))' }, 'linear-gradient to top'),
  'bg-gradient-to-r': d('bg-gradient-to-r', 'background', 'bg-gradient-to-r', { 'background-image': 'linear-gradient(to right, var(--ac-gradient-from), var(--ac-gradient-to))' }, 'linear-gradient to right'),
  'bg-gradient-to-b': d('bg-gradient-to-b', 'background', 'bg-gradient-to-b', { 'background-image': 'linear-gradient(to bottom, var(--ac-gradient-from), var(--ac-gradient-to))' }, 'linear-gradient to bottom'),
  'bg-gradient-to-l': d('bg-gradient-to-l', 'background', 'bg-gradient-to-l', { 'background-image': 'linear-gradient(to left, var(--ac-gradient-from), var(--ac-gradient-to))' }, 'linear-gradient to left'),
};

export const OUTLINE_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'outline-0': d('outline-0', 'outline', 'outline-0', { 'outline-width': '0px' }, 'outline-width: 0'),
  outline: d('outline', 'outline', 'outline', { 'outline-width': '1px', 'outline-style': 'solid' }, 'outline-width: 1px'),
  'outline-1': d('outline-1', 'outline', 'outline-1', { 'outline-width': '1px', 'outline-style': 'solid' }, 'outline-width: 1px'),
  'outline-2': d('outline-2', 'outline', 'outline-2', { 'outline-width': '2px', 'outline-style': 'solid' }, 'outline-width: 2px'),
  'outline-4': d('outline-4', 'outline', 'outline-4', { 'outline-width': '4px', 'outline-style': 'solid' }, 'outline-width: 4px'),
  'outline-8': d('outline-8', 'outline', 'outline-8', { 'outline-width': '8px', 'outline-style': 'solid' }, 'outline-width: 8px'),

  'outline-solid': d('outline-solid', 'outline', 'outline-solid', { 'outline-style': 'solid' }, 'outline-style: solid'),
  'outline-dashed': d('outline-dashed', 'outline', 'outline-dashed', { 'outline-style': 'dashed' }, 'outline-style: dashed'),
  'outline-dotted': d('outline-dotted', 'outline', 'outline-dotted', { 'outline-style': 'dotted' }, 'outline-style: dotted'),
  'outline-double': d('outline-double', 'outline', 'outline-double', { 'outline-style': 'double' }, 'outline-style: double'),

  'outline-offset-0': d('outline-offset-0', 'outline', 'outline-offset-0', { 'outline-offset': '0px' }, 'outline-offset: 0'),
  'outline-offset-1': d('outline-offset-1', 'outline', 'outline-offset-1', { 'outline-offset': '1px' }, 'outline-offset: 1px'),
  'outline-offset-2': d('outline-offset-2', 'outline', 'outline-offset-2', { 'outline-offset': '2px' }, 'outline-offset: 2px'),
  'outline-offset-4': d('outline-offset-4', 'outline', 'outline-offset-4', { 'outline-offset': '4px' }, 'outline-offset: 4px'),
  'outline-offset-8': d('outline-offset-8', 'outline', 'outline-offset-8', { 'outline-offset': '8px' }, 'outline-offset: 8px'),
};

export const EFFECT_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'mix-blend-normal': d('mix-blend-normal', 'effect', 'mix-blend-normal', { 'mix-blend-mode': 'normal' }, 'mix-blend-mode: normal'),
  'mix-blend-multiply': d('mix-blend-multiply', 'effect', 'mix-blend-multiply', { 'mix-blend-mode': 'multiply' }, 'mix-blend-mode: multiply'),
  'mix-blend-screen': d('mix-blend-screen', 'effect', 'mix-blend-screen', { 'mix-blend-mode': 'screen' }, 'mix-blend-mode: screen'),
  'mix-blend-overlay': d('mix-blend-overlay', 'effect', 'mix-blend-overlay', { 'mix-blend-mode': 'overlay' }, 'mix-blend-mode: overlay'),
  'mix-blend-darken': d('mix-blend-darken', 'effect', 'mix-blend-darken', { 'mix-blend-mode': 'darken' }, 'mix-blend-mode: darken'),
  'mix-blend-lighten': d('mix-blend-lighten', 'effect', 'mix-blend-lighten', { 'mix-blend-mode': 'lighten' }, 'mix-blend-mode: lighten'),
  'mix-blend-color-dodge': d('mix-blend-color-dodge', 'effect', 'mix-blend-color-dodge', { 'mix-blend-mode': 'color-dodge' }, 'mix-blend-mode: color-dodge'),
  'mix-blend-color-burn': d('mix-blend-color-burn', 'effect', 'mix-blend-color-burn', { 'mix-blend-mode': 'color-burn' }, 'mix-blend-mode: color-burn'),
  'mix-blend-hard-light': d('mix-blend-hard-light', 'effect', 'mix-blend-hard-light', { 'mix-blend-mode': 'hard-light' }, 'mix-blend-mode: hard-light'),
  'mix-blend-soft-light': d('mix-blend-soft-light', 'effect', 'mix-blend-soft-light', { 'mix-blend-mode': 'soft-light' }, 'mix-blend-mode: soft-light'),
  'mix-blend-difference': d('mix-blend-difference', 'effect', 'mix-blend-difference', { 'mix-blend-mode': 'difference' }, 'mix-blend-mode: difference'),
  'mix-blend-exclusion': d('mix-blend-exclusion', 'effect', 'mix-blend-exclusion', { 'mix-blend-mode': 'exclusion' }, 'mix-blend-mode: exclusion'),
  'mix-blend-hue': d('mix-blend-hue', 'effect', 'mix-blend-hue', { 'mix-blend-mode': 'hue' }, 'mix-blend-mode: hue'),
  'mix-blend-saturation': d('mix-blend-saturation', 'effect', 'mix-blend-saturation', { 'mix-blend-mode': 'saturation' }, 'mix-blend-mode: saturation'),
  'mix-blend-color': d('mix-blend-color', 'effect', 'mix-blend-color', { 'mix-blend-mode': 'color' }, 'mix-blend-mode: color'),
  'mix-blend-luminosity': d('mix-blend-luminosity', 'effect', 'mix-blend-luminosity', { 'mix-blend-mode': 'luminosity' }, 'mix-blend-mode: luminosity'),
  'mix-blend-plus-darker': d('mix-blend-plus-darker', 'effect', 'mix-blend-plus-darker', { 'mix-blend-mode': 'plus-darker' }, 'mix-blend-mode: plus-darker'),
  'mix-blend-plus-lighter': d('mix-blend-plus-lighter', 'effect', 'mix-blend-plus-lighter', { 'mix-blend-mode': 'plus-lighter' }, 'mix-blend-mode: plus-lighter'),

  'bg-blend-normal': d('bg-blend-normal', 'effect', 'bg-blend-normal', { 'background-blend-mode': 'normal' }, 'background-blend-mode: normal'),
  'bg-blend-multiply': d('bg-blend-multiply', 'effect', 'bg-blend-multiply', { 'background-blend-mode': 'multiply' }, 'background-blend-mode: multiply'),
  'bg-blend-screen': d('bg-blend-screen', 'effect', 'bg-blend-screen', { 'background-blend-mode': 'screen' }, 'background-blend-mode: screen'),
  'bg-blend-overlay': d('bg-blend-overlay', 'effect', 'bg-blend-overlay', { 'background-blend-mode': 'overlay' }, 'background-blend-mode: overlay'),
  'bg-blend-darken': d('bg-blend-darken', 'effect', 'bg-blend-darken', { 'background-blend-mode': 'darken' }, 'background-blend-mode: darken'),
  'bg-blend-lighten': d('bg-blend-lighten', 'effect', 'bg-blend-lighten', { 'background-blend-mode': 'lighten' }, 'background-blend-mode: lighten'),
  'bg-blend-color-dodge': d('bg-blend-color-dodge', 'effect', 'bg-blend-color-dodge', { 'background-blend-mode': 'color-dodge' }, 'background-blend-mode: color-dodge'),
  'bg-blend-color-burn': d('bg-blend-color-burn', 'effect', 'bg-blend-color-burn', { 'background-blend-mode': 'color-burn' }, 'background-blend-mode: color-burn'),
  'bg-blend-hard-light': d('bg-blend-hard-light', 'effect', 'bg-blend-hard-light', { 'background-blend-mode': 'hard-light' }, 'background-blend-mode: hard-light'),
  'bg-blend-soft-light': d('bg-blend-soft-light', 'effect', 'bg-blend-soft-light', { 'background-blend-mode': 'soft-light' }, 'background-blend-mode: soft-light'),
  'bg-blend-difference': d('bg-blend-difference', 'effect', 'bg-blend-difference', { 'background-blend-mode': 'difference' }, 'background-blend-mode: difference'),
  'bg-blend-exclusion': d('bg-blend-exclusion', 'effect', 'bg-blend-exclusion', { 'background-blend-mode': 'exclusion' }, 'background-blend-mode: exclusion'),
  'bg-blend-hue': d('bg-blend-hue', 'effect', 'bg-blend-hue', { 'background-blend-mode': 'hue' }, 'background-blend-mode: hue'),
  'bg-blend-saturation': d('bg-blend-saturation', 'effect', 'bg-blend-saturation', { 'background-blend-mode': 'saturation' }, 'background-blend-mode: saturation'),
  'bg-blend-color': d('bg-blend-color', 'effect', 'bg-blend-color', { 'background-blend-mode': 'color' }, 'background-blend-mode: color'),
  'bg-blend-luminosity': d('bg-blend-luminosity', 'effect', 'bg-blend-luminosity', { 'background-blend-mode': 'luminosity' }, 'background-blend-mode: luminosity'),

  'mask-clip-border': d('mask-clip-border', 'effect', 'mask-clip-border', { 'mask-clip': 'border-box' }, 'mask-clip: border-box'),
  'mask-clip-padding': d('mask-clip-padding', 'effect', 'mask-clip-padding', { 'mask-clip': 'padding-box' }, 'mask-clip: padding-box'),
  'mask-clip-content': d('mask-clip-content', 'effect', 'mask-clip-content', { 'mask-clip': 'content-box' }, 'mask-clip: content-box'),
  'mask-clip-text': d('mask-clip-text', 'effect', 'mask-clip-text', { 'mask-clip': 'text' }, 'mask-clip: text'),

  'mask-repeat': d('mask-repeat', 'effect', 'mask-repeat', { 'mask-repeat': 'repeat' }, 'mask-repeat: repeat'),
  'mask-no-repeat': d('mask-no-repeat', 'effect', 'mask-no-repeat', { 'mask-repeat': 'no-repeat' }, 'mask-repeat: no-repeat'),
  'mask-cover': d('mask-cover', 'effect', 'mask-cover', { 'mask-size': 'cover' }, 'mask-size: cover'),
  'mask-contain': d('mask-contain', 'effect', 'mask-contain', { 'mask-size': 'contain' }, 'mask-size: contain'),
  'mask-luminance': d('mask-luminance', 'effect', 'mask-luminance', { 'mask-type': 'luminance' }, 'mask-type: luminance'),
  'mask-alpha': d('mask-alpha', 'effect', 'mask-alpha', { 'mask-type': 'alpha' }, 'mask-type: alpha'),
};

export const TRANSFORM_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'transform-none': d('transform-none', 'transform', 'transform-none', { transform: 'none' }, 'transform: none'),
  'transform-gpu': d('transform-gpu', 'transform', 'transform-gpu', { transform: 'translateZ(0)' }, 'transform: translateZ(0)'),
  'transform-cpu': d('transform-cpu', 'transform', 'transform-cpu', { transform: 'none' }, 'transform: none (cpu)'),

  'transform-flat': d('transform-flat', 'transform', 'transform-flat', { 'transform-style': 'flat' }, 'transform-style: flat'),
  'transform-3d': d('transform-3d', 'transform', 'transform-3d', { 'transform-style': 'preserve-3d' }, 'transform-style: preserve-3d'),

  'origin-center': d('origin-center', 'transform', 'origin-center', { 'transform-origin': 'center' }, 'transform-origin: center'),
  'origin-top': d('origin-top', 'transform', 'origin-top', { 'transform-origin': 'top' }, 'transform-origin: top'),
  'origin-top-right': d('origin-top-right', 'transform', 'origin-top-right', { 'transform-origin': 'top right' }, 'transform-origin: top right'),
  'origin-right': d('origin-right', 'transform', 'origin-right', { 'transform-origin': 'right' }, 'transform-origin: right'),
  'origin-bottom-right': d('origin-bottom-right', 'transform', 'origin-bottom-right', { 'transform-origin': 'bottom right' }, 'transform-origin: bottom right'),
  'origin-bottom': d('origin-bottom', 'transform', 'origin-bottom', { 'transform-origin': 'bottom' }, 'transform-origin: bottom'),
  'origin-bottom-left': d('origin-bottom-left', 'transform', 'origin-bottom-left', { 'transform-origin': 'bottom left' }, 'transform-origin: bottom left'),
  'origin-left': d('origin-left', 'transform', 'origin-left', { 'transform-origin': 'left' }, 'transform-origin: left'),
  'origin-top-left': d('origin-top-left', 'transform', 'origin-top-left', { 'transform-origin': 'top left' }, 'transform-origin: top left'),

  'perspective-none': d('perspective-none', 'transform', 'perspective-none', { perspective: 'none' }, 'perspective: none'),
  'perspective-sm': d('perspective-sm', 'transform', 'perspective-[250px]', { perspective: '250px' }, 'perspective: 250px'),
  'perspective-md': d('perspective-md', 'transform', 'perspective-[500px]', { perspective: '500px' }, 'perspective: 500px'),
  'perspective-lg': d('perspective-lg', 'transform', 'perspective-[1000px]', { perspective: '1000px' }, 'perspective: 1000px'),

  'backface-visible': d('backface-visible', 'transform', 'backface-visible', { 'backface-visibility': 'visible' }, 'backface-visibility: visible'),
  'backface-hidden': d('backface-hidden', 'transform', 'backface-hidden', { 'backface-visibility': 'hidden' }, 'backface-visibility: hidden'),

  'rotate-0': d('rotate-0', 'transform', 'rotate-0', { rotate: '0deg' }, 'rotate: 0deg'),
  'rotate-45': d('rotate-45', 'transform', 'rotate-45', { rotate: '45deg' }, 'rotate: 45deg'),
  'rotate-90': d('rotate-90', 'transform', 'rotate-90', { rotate: '90deg' }, 'rotate: 90deg'),
  'rotate-180': d('rotate-180', 'transform', 'rotate-180', { rotate: '180deg' }, 'rotate: 180deg'),
  '-rotate-45': d('-rotate-45', 'transform', '-rotate-45', { rotate: '-45deg' }, 'rotate: -45deg'),
  '-rotate-90': d('-rotate-90', 'transform', '-rotate-90', { rotate: '-90deg' }, 'rotate: -90deg'),
  '-rotate-180': d('-rotate-180', 'transform', '-rotate-180', { rotate: '-180deg' }, 'rotate: -180deg'),

  'scale-0': d('scale-0', 'transform', 'scale-0', { scale: '0' }, 'scale: 0'),
  'scale-50': d('scale-50', 'transform', 'scale-50', { scale: '0.5' }, 'scale: 0.5'),
  'scale-75': d('scale-75', 'transform', 'scale-75', { scale: '0.75' }, 'scale: 0.75'),
  'scale-90': d('scale-90', 'transform', 'scale-90', { scale: '0.9' }, 'scale: 0.9'),
  'scale-100': d('scale-100', 'transform', 'scale-100', { scale: '1' }, 'scale: 1'),
  'scale-105': d('scale-105', 'transform', 'scale-105', { scale: '1.05' }, 'scale: 1.05'),
  'scale-110': d('scale-110', 'transform', 'scale-110', { scale: '1.1' }, 'scale: 1.1'),
  'scale-125': d('scale-125', 'transform', 'scale-125', { scale: '1.25' }, 'scale: 1.25'),
  'scale-150': d('scale-150', 'transform', 'scale-150', { scale: '1.5' }, 'scale: 1.5'),

  'skew-0': d('skew-0', 'transform', 'skew-x-0', { transform: 'skew(0deg, 0deg)' }, 'skew: 0deg'),
  'skew-x-3': d('skew-x-3', 'transform', 'skew-x-3', { transform: 'skewX(3deg)' }, 'skewX: 3deg'),
  'skew-x-6': d('skew-x-6', 'transform', 'skew-x-6', { transform: 'skewX(6deg)' }, 'skewX: 6deg'),
  'skew-x-12': d('skew-x-12', 'transform', 'skew-x-12', { transform: 'skewX(12deg)' }, 'skewX: 12deg'),
  'skew-y-3': d('skew-y-3', 'transform', 'skew-y-3', { transform: 'skewY(3deg)' }, 'skewY: 3deg'),
  'skew-y-6': d('skew-y-6', 'transform', 'skew-y-6', { transform: 'skewY(6deg)' }, 'skewY: 6deg'),
  'skew-y-12': d('skew-y-12', 'transform', 'skew-y-12', { transform: 'skewY(12deg)' }, 'skewY: 12deg'),

  'translate-x-0': d('translate-x-0', 'transform', 'translate-x-0', { translate: '0 0' }, 'translateX: 0'),
  'translate-y-0': d('translate-y-0', 'transform', 'translate-y-0', { translate: '0 0' }, 'translateY: 0'),
  'translate-x-full': d('translate-x-full', 'transform', 'translate-x-full', { transform: 'translateX(100%)' }, 'translateX: 100%'),
  'translate-y-full': d('translate-y-full', 'transform', 'translate-y-full', { transform: 'translateY(100%)' }, 'translateY: 100%'),
  'translate-x-px': d('translate-x-px', 'transform', 'translate-x-px', { transform: 'translateX(1px)' }, 'translateX: 1px'),
  'translate-y-px': d('translate-y-px', 'transform', 'translate-y-px', { transform: 'translateY(1px)' }, 'translateY: 1px'),
};

export const FILTER_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'filter-none': d('filter-none', 'filter', 'filter-none', { filter: 'none' }, 'filter: none'),
  'blur-none': d('blur-none', 'filter', 'blur-none', { filter: 'blur(0)' }, 'blur: 0'),
  'blur-sm': d('blur-sm', 'filter', 'blur-sm', { filter: 'blur(4px)' }, 'blur: 4px'),
  blur: d('blur', 'filter', 'blur', { filter: 'blur(8px)' }, 'blur: 8px'),
  'blur-md': d('blur-md', 'filter', 'blur-md', { filter: 'blur(12px)' }, 'blur: 12px'),
  'blur-lg': d('blur-lg', 'filter', 'blur-lg', { filter: 'blur(16px)' }, 'blur: 16px'),
  'blur-xl': d('blur-xl', 'filter', 'blur-xl', { filter: 'blur(24px)' }, 'blur: 24px'),
  'blur-2xl': d('blur-2xl', 'filter', 'blur-2xl', { filter: 'blur(40px)' }, 'blur: 40px'),
  'blur-3xl': d('blur-3xl', 'filter', 'blur-3xl', { filter: 'blur(64px)' }, 'blur: 64px'),

  'brightness-0': d('brightness-0', 'filter', 'brightness-0', { filter: 'brightness(0)' }, 'brightness: 0'),
  'brightness-50': d('brightness-50', 'filter', 'brightness-50', { filter: 'brightness(0.5)' }, 'brightness: 0.5'),
  'brightness-75': d('brightness-75', 'filter', 'brightness-75', { filter: 'brightness(0.75)' }, 'brightness: 0.75'),
  'brightness-100': d('brightness-100', 'filter', 'brightness-100', { filter: 'brightness(1)' }, 'brightness: 1'),
  'brightness-125': d('brightness-125', 'filter', 'brightness-125', { filter: 'brightness(1.25)' }, 'brightness: 1.25'),
  'brightness-150': d('brightness-150', 'filter', 'brightness-150', { filter: 'brightness(1.5)' }, 'brightness: 1.5'),
  'brightness-200': d('brightness-200', 'filter', 'brightness-200', { filter: 'brightness(2)' }, 'brightness: 2'),

  'contrast-0': d('contrast-0', 'filter', 'contrast-0', { filter: 'contrast(0)' }, 'contrast: 0'),
  'contrast-50': d('contrast-50', 'filter', 'contrast-50', { filter: 'contrast(0.5)' }, 'contrast: 0.5'),
  'contrast-100': d('contrast-100', 'filter', 'contrast-100', { filter: 'contrast(1)' }, 'contrast: 1'),
  'contrast-125': d('contrast-125', 'filter', 'contrast-125', { filter: 'contrast(1.25)' }, 'contrast: 1.25'),
  'contrast-150': d('contrast-150', 'filter', 'contrast-150', { filter: 'contrast(1.5)' }, 'contrast: 1.5'),
  'contrast-200': d('contrast-200', 'filter', 'contrast-200', { filter: 'contrast(2)' }, 'contrast: 2'),

  'drop-shadow-none': d('drop-shadow-none', 'filter', 'drop-shadow-none', { filter: 'drop-shadow(0 0 #0000)' }, 'drop-shadow: none'),
  'drop-shadow-sm': d('drop-shadow-sm', 'filter', 'drop-shadow-sm', { filter: 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))' }, 'drop-shadow: sm'),
  'drop-shadow': d('drop-shadow', 'filter', 'drop-shadow', { filter: 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))' }, 'drop-shadow: default'),
  'drop-shadow-md': d('drop-shadow-md', 'filter', 'drop-shadow-md', { filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))' }, 'drop-shadow: md'),
  'drop-shadow-lg': d('drop-shadow-lg', 'filter', 'drop-shadow-lg', { filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))' }, 'drop-shadow: lg'),
  'drop-shadow-xl': d('drop-shadow-xl', 'filter', 'drop-shadow-xl', { filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))' }, 'drop-shadow: xl'),
  'drop-shadow-2xl': d('drop-shadow-2xl', 'filter', 'drop-shadow-2xl', { filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))' }, 'drop-shadow: 2xl'),

  'grayscale-0': d('grayscale-0', 'filter', 'grayscale-0', { filter: 'grayscale(0)' }, 'grayscale: 0'),
  grayscale: d('grayscale', 'filter', 'grayscale', { filter: 'grayscale(1)' }, 'grayscale: 1'),

  'hue-rotate-0': d('hue-rotate-0', 'filter', 'hue-rotate-0', { filter: 'hue-rotate(0deg)' }, 'hue-rotate: 0'),
  'hue-rotate-15': d('hue-rotate-15', 'filter', 'hue-rotate-15', { filter: 'hue-rotate(15deg)' }, 'hue-rotate: 15deg'),
  'hue-rotate-30': d('hue-rotate-30', 'filter', 'hue-rotate-30', { filter: 'hue-rotate(30deg)' }, 'hue-rotate: 30deg'),
  'hue-rotate-60': d('hue-rotate-60', 'filter', 'hue-rotate-60', { filter: 'hue-rotate(60deg)' }, 'hue-rotate: 60deg'),
  'hue-rotate-90': d('hue-rotate-90', 'filter', 'hue-rotate-90', { filter: 'hue-rotate(90deg)' }, 'hue-rotate: 90deg'),
  'hue-rotate-180': d('hue-rotate-180', 'filter', 'hue-rotate-180', { filter: 'hue-rotate(180deg)' }, 'hue-rotate: 180deg'),

  'invert-0': d('invert-0', 'filter', 'invert-0', { filter: 'invert(0)' }, 'invert: 0'),
  invert: d('invert', 'filter', 'invert', { filter: 'invert(1)' }, 'invert: 1'),

  'saturate-0': d('saturate-0', 'filter', 'saturate-0', { filter: 'saturate(0)' }, 'saturate: 0'),
  'saturate-50': d('saturate-50', 'filter', 'saturate-50', { filter: 'saturate(0.5)' }, 'saturate: 0.5'),
  'saturate-100': d('saturate-100', 'filter', 'saturate-100', { filter: 'saturate(1)' }, 'saturate: 1'),
  'saturate-150': d('saturate-150', 'filter', 'saturate-150', { filter: 'saturate(1.5)' }, 'saturate: 1.5'),
  'saturate-200': d('saturate-200', 'filter', 'saturate-200', { filter: 'saturate(2)' }, 'saturate: 2'),

  'sepia-0': d('sepia-0', 'filter', 'sepia-0', { filter: 'sepia(0)' }, 'sepia: 0'),
  sepia: d('sepia', 'filter', 'sepia', { filter: 'sepia(1)' }, 'sepia: 1'),
};

export const BACKDROP_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'backdrop-filter-none': d('backdrop-filter-none', 'backdrop', 'backdrop-filter-none', { 'backdrop-filter': 'none' }, 'backdrop-filter: none'),
  'backdrop-blur-none': d('backdrop-blur-none', 'backdrop', 'backdrop-blur-none', { 'backdrop-filter': 'blur(0)' }, 'backdrop-blur: 0'),
  'backdrop-blur-sm': d('backdrop-blur-sm', 'backdrop', 'backdrop-blur-sm', { 'backdrop-filter': 'blur(4px)' }, 'backdrop-blur: 4px'),
  'backdrop-blur': d('backdrop-blur', 'backdrop', 'backdrop-blur', { 'backdrop-filter': 'blur(8px)' }, 'backdrop-blur: 8px'),
  'backdrop-blur-md': d('backdrop-blur-md', 'backdrop', 'backdrop-blur-md', { 'backdrop-filter': 'blur(12px)' }, 'backdrop-blur: 12px'),
  'backdrop-blur-lg': d('backdrop-blur-lg', 'backdrop', 'backdrop-blur-lg', { 'backdrop-filter': 'blur(16px)' }, 'backdrop-blur: 16px'),
  'backdrop-blur-xl': d('backdrop-blur-xl', 'backdrop', 'backdrop-blur-xl', { 'backdrop-filter': 'blur(24px)' }, 'backdrop-blur: 24px'),
  'backdrop-blur-2xl': d('backdrop-blur-2xl', 'backdrop', 'backdrop-blur-2xl', { 'backdrop-filter': 'blur(40px)' }, 'backdrop-blur: 40px'),
  'backdrop-brightness-50': d('backdrop-brightness-50', 'backdrop', 'backdrop-brightness-50', { 'backdrop-filter': 'brightness(0.5)' }, 'backdrop-brightness: 0.5'),
  'backdrop-brightness-100': d('backdrop-brightness-100', 'backdrop', 'backdrop-brightness-100', { 'backdrop-filter': 'brightness(1)' }, 'backdrop-brightness: 1'),
  'backdrop-brightness-150': d('backdrop-brightness-150', 'backdrop', 'backdrop-brightness-150', { 'backdrop-filter': 'brightness(1.5)' }, 'backdrop-brightness: 1.5'),
  'backdrop-contrast-100': d('backdrop-contrast-100', 'backdrop', 'backdrop-contrast-100', { 'backdrop-filter': 'contrast(1)' }, 'backdrop-contrast: 1'),
  'backdrop-contrast-150': d('backdrop-contrast-150', 'backdrop', 'backdrop-contrast-150', { 'backdrop-filter': 'contrast(1.5)' }, 'backdrop-contrast: 1.5'),
  'backdrop-grayscale': d('backdrop-grayscale', 'backdrop', 'backdrop-grayscale', { 'backdrop-filter': 'grayscale(1)' }, 'backdrop-grayscale: 1'),
  'backdrop-hue-rotate-90': d('backdrop-hue-rotate-90', 'backdrop', 'backdrop-hue-rotate-90', { 'backdrop-filter': 'hue-rotate(90deg)' }, 'backdrop-hue-rotate: 90deg'),
  'backdrop-invert': d('backdrop-invert', 'backdrop', 'backdrop-invert', { 'backdrop-filter': 'invert(1)' }, 'backdrop-invert: 1'),
  'backdrop-opacity-50': d('backdrop-opacity-50', 'backdrop', 'backdrop-opacity-50', { 'backdrop-filter': 'opacity(0.5)' }, 'backdrop-opacity: 0.5'),
  'backdrop-saturate-150': d('backdrop-saturate-150', 'backdrop', 'backdrop-saturate-150', { 'backdrop-filter': 'saturate(1.5)' }, 'backdrop-saturate: 1.5'),
  'backdrop-sepia': d('backdrop-sepia', 'backdrop', 'backdrop-sepia', { 'backdrop-filter': 'sepia(1)' }, 'backdrop-sepia: 1'),
};

export const MOTION_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'animate-none': d('animate-none', 'motion', 'animate-none', { animation: 'none' }, 'animation: none'),
  'animate-spin': d('animate-spin', 'motion', 'animate-spin', { animation: 'ac-spin 1s linear infinite' }, 'animation: spin'),
  'animate-ping': d('animate-ping', 'motion', 'animate-ping', { animation: 'ac-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite' }, 'animation: ping'),
  'animate-pulse': d('animate-pulse', 'motion', 'animate-pulse', { animation: 'ac-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }, 'animation: pulse'),
  'animate-bounce': d('animate-bounce', 'motion', 'animate-bounce', { animation: 'ac-bounce 1s infinite' }, 'animation: bounce'),

  'duration-75': d('duration-75', 'motion', 'duration-75', { 'transition-duration': '75ms' }, 'transition-duration: 75ms'),
  'duration-100': d('duration-100', 'motion', 'duration-100', { 'transition-duration': '100ms' }, 'transition-duration: 100ms'),
  'duration-150': d('duration-150', 'motion', 'duration-150', { 'transition-duration': '150ms' }, 'transition-duration: 150ms'),
  'duration-200': d('duration-200', 'motion', 'duration-200', { 'transition-duration': '200ms' }, 'transition-duration: 200ms'),
  'duration-300': d('duration-300', 'motion', 'duration-300', { 'transition-duration': '300ms' }, 'transition-duration: 300ms'),
  'duration-500': d('duration-500', 'motion', 'duration-500', { 'transition-duration': '500ms' }, 'transition-duration: 500ms'),
  'duration-700': d('duration-700', 'motion', 'duration-700', { 'transition-duration': '700ms' }, 'transition-duration: 700ms'),
  'duration-1000': d('duration-1000', 'motion', 'duration-1000', { 'transition-duration': '1000ms' }, 'transition-duration: 1000ms'),

  'delay-75': d('delay-75', 'motion', 'delay-75', { 'transition-delay': '75ms' }, 'transition-delay: 75ms'),
  'delay-100': d('delay-100', 'motion', 'delay-100', { 'transition-delay': '100ms' }, 'transition-delay: 100ms'),
  'delay-150': d('delay-150', 'motion', 'delay-150', { 'transition-delay': '150ms' }, 'transition-delay: 150ms'),
  'delay-200': d('delay-200', 'motion', 'delay-200', { 'transition-delay': '200ms' }, 'transition-delay: 200ms'),
  'delay-300': d('delay-300', 'motion', 'delay-300', { 'transition-delay': '300ms' }, 'transition-delay: 300ms'),
  'delay-500': d('delay-500', 'motion', 'delay-500', { 'transition-delay': '500ms' }, 'transition-delay: 500ms'),
  'delay-700': d('delay-700', 'motion', 'delay-700', { 'transition-delay': '700ms' }, 'transition-delay: 700ms'),
  'delay-1000': d('delay-1000', 'motion', 'delay-1000', { 'transition-delay': '1000ms' }, 'transition-delay: 1000ms'),
};

export const TABLE_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'border-collapse': d('border-collapse', 'table', 'border-collapse', { 'border-collapse': 'collapse' }, 'border-collapse: collapse'),
  'border-separate': d('border-separate', 'table', 'border-separate', { 'border-collapse': 'separate' }, 'border-collapse: separate'),
  'border-spacing-0': d('border-spacing-0', 'table', 'border-spacing-0', { 'border-spacing': '0px' }, 'border-spacing: 0'),
  'border-spacing-px': d('border-spacing-px', 'table', 'border-spacing-px', { 'border-spacing': '1px' }, 'border-spacing: 1px'),
  'border-spacing-1': d('border-spacing-1', 'table', 'border-spacing-1', { 'border-spacing': '4px' }, 'border-spacing: 4px'),
  'border-spacing-2': d('border-spacing-2', 'table', 'border-spacing-2', { 'border-spacing': '8px' }, 'border-spacing: 8px'),
  'border-spacing-4': d('border-spacing-4', 'table', 'border-spacing-4', { 'border-spacing': '16px' }, 'border-spacing: 16px'),
  'border-spacing-8': d('border-spacing-8', 'table', 'border-spacing-8', { 'border-spacing': '32px' }, 'border-spacing: 32px'),
  'table-auto': d('table-auto', 'table', 'table-auto', { 'table-layout': 'auto' }, 'table-layout: auto'),
  'table-fixed': d('table-fixed', 'table', 'table-fixed', { 'table-layout': 'fixed' }, 'table-layout: fixed'),
  'caption-top': d('caption-top', 'table', 'caption-top', { 'caption-side': 'top' }, 'caption-side: top'),
  'caption-bottom': d('caption-bottom', 'table', 'caption-bottom', { 'caption-side': 'bottom' }, 'caption-side: bottom'),
};

export const SCROLL_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'scroll-m-0': d('scroll-m-0', 'scroll', 'scroll-m-0', { 'scroll-margin': '0px' }, 'scroll-margin: 0'),
  'scroll-m-2': d('scroll-m-2', 'scroll', 'scroll-m-2', { 'scroll-margin': '8px' }, 'scroll-margin: 8px'),
  'scroll-m-4': d('scroll-m-4', 'scroll', 'scroll-m-4', { 'scroll-margin': '16px' }, 'scroll-margin: 16px'),
  'scroll-m-6': d('scroll-m-6', 'scroll', 'scroll-m-6', { 'scroll-margin': '24px' }, 'scroll-margin: 24px'),
  'scroll-m-8': d('scroll-m-8', 'scroll', 'scroll-m-8', { 'scroll-margin': '32px' }, 'scroll-margin: 32px'),

  'scroll-p-0': d('scroll-p-0', 'scroll', 'scroll-p-0', { 'scroll-padding': '0px' }, 'scroll-padding: 0'),
  'scroll-p-2': d('scroll-p-2', 'scroll', 'scroll-p-2', { 'scroll-padding': '8px' }, 'scroll-padding: 8px'),
  'scroll-p-4': d('scroll-p-4', 'scroll', 'scroll-p-4', { 'scroll-padding': '16px' }, 'scroll-padding: 16px'),
  'scroll-p-6': d('scroll-p-6', 'scroll', 'scroll-p-6', { 'scroll-padding': '24px' }, 'scroll-padding: 24px'),
  'scroll-p-8': d('scroll-p-8', 'scroll', 'scroll-p-8', { 'scroll-padding': '32px' }, 'scroll-padding: 32px'),

  'snap-start': d('snap-start', 'scroll', 'snap-start', { 'scroll-snap-align': 'start' }, 'scroll-snap-align: start'),
  'snap-end': d('snap-end', 'scroll', 'snap-end', { 'scroll-snap-align': 'end' }, 'scroll-snap-align: end'),
  'snap-center': d('snap-center', 'scroll', 'snap-center', { 'scroll-snap-align': 'center' }, 'scroll-snap-align: center'),
  'snap-align-none': d('snap-align-none', 'scroll', 'snap-align-none', { 'scroll-snap-align': 'none' }, 'scroll-snap-align: none'),

  'snap-normal': d('snap-normal', 'scroll', 'snap-normal', { 'scroll-snap-stop': 'normal' }, 'scroll-snap-stop: normal'),
  'snap-always': d('snap-always', 'scroll', 'snap-always', { 'scroll-snap-stop': 'always' }, 'scroll-snap-stop: always'),

  'snap-none': d('snap-none', 'scroll', 'snap-none', { 'scroll-snap-type': 'none' }, 'scroll-snap-type: none'),
  'snap-x': d('snap-x', 'scroll', 'snap-x', { 'scroll-snap-type': 'x' }, 'scroll-snap-type: x'),
  'snap-y': d('snap-y', 'scroll', 'snap-y', { 'scroll-snap-type': 'y' }, 'scroll-snap-type: y'),
  'snap-both': d('snap-both', 'scroll', 'snap-both', { 'scroll-snap-type': 'both' }, 'scroll-snap-type: both'),
  'snap-mandatory': d('snap-mandatory', 'scroll', 'snap-mandatory', { 'scroll-snap-type': 'mandatory' }, 'scroll-snap-type: mandatory'),
  'snap-proximity': d('snap-proximity', 'scroll', 'snap-proximity', { 'scroll-snap-type': 'proximity' }, 'scroll-snap-type: proximity'),

  'touch-auto': d('touch-auto', 'scroll', 'touch-auto', { 'touch-action': 'auto' }, 'touch-action: auto'),
  'touch-none': d('touch-none', 'scroll', 'touch-none', { 'touch-action': 'none' }, 'touch-action: none'),
  'touch-pan-x': d('touch-pan-x', 'scroll', 'touch-pan-x', { 'touch-action': 'pan-x' }, 'touch-action: pan-x'),
  'touch-pan-y': d('touch-pan-y', 'scroll', 'touch-pan-y', { 'touch-action': 'pan-y' }, 'touch-action: pan-y'),
  'touch-pan-left': d('touch-pan-left', 'scroll', 'touch-pan-left', { 'touch-action': 'pan-left' }, 'touch-action: pan-left'),
  'touch-pan-right': d('touch-pan-right', 'scroll', 'touch-pan-right', { 'touch-action': 'pan-right' }, 'touch-action: pan-right'),
  'touch-pan-up': d('touch-pan-up', 'scroll', 'touch-pan-up', { 'touch-action': 'pan-up' }, 'touch-action: pan-up'),
  'touch-pan-down': d('touch-pan-down', 'scroll', 'touch-pan-down', { 'touch-action': 'pan-down' }, 'touch-action: pan-down'),
  'touch-pinch-zoom': d('touch-pinch-zoom', 'scroll', 'touch-pinch-zoom', { 'touch-action': 'pinch-zoom' }, 'touch-action: pinch-zoom'),
  'touch-manipulation': d('touch-manipulation', 'scroll', 'touch-manipulation', { 'touch-action': 'manipulation' }, 'touch-action: manipulation'),

  'will-change-auto': d('will-change-auto', 'scroll', 'will-change-auto', { 'will-change': 'auto' }, 'will-change: auto'),
  'will-change-scroll': d('will-change-scroll', 'scroll', 'will-change-scroll', { 'will-change': 'scroll-position' }, 'will-change: scroll-position'),
  'will-change-contents': d('will-change-contents', 'scroll', 'will-change-contents', { 'will-change': 'contents' }, 'will-change: contents'),
  'will-change-transform': d('will-change-transform', 'scroll', 'will-change-transform', { 'will-change': 'transform' }, 'will-change: transform'),
};

export const SVG_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'fill-none': d('fill-none', 'svg', 'fill-none', { fill: 'none' }, 'fill: none'),
  'fill-current': d('fill-current', 'svg', 'fill-current', { fill: 'currentColor' }, 'fill: currentColor'),
  'fill-transparent': d('fill-transparent', 'svg', 'fill-transparent', { fill: 'transparent' }, 'fill: transparent'),
  'fill-black': d('fill-black', 'svg', 'fill-black', { fill: '#000000' }, 'fill: #000'),
  'fill-white': d('fill-white', 'svg', 'fill-white', { fill: '#ffffff' }, 'fill: #fff'),

  'stroke-none': d('stroke-none', 'svg', 'stroke-none', { stroke: 'none' }, 'stroke: none'),
  'stroke-current': d('stroke-current', 'svg', 'stroke-current', { stroke: 'currentColor' }, 'stroke: currentColor'),
  'stroke-transparent': d('stroke-transparent', 'svg', 'stroke-transparent', { stroke: 'transparent' }, 'stroke: transparent'),

  'stroke-0': d('stroke-0', 'svg', 'stroke-0', { 'stroke-width': '0' }, 'stroke-width: 0'),
  'stroke-1': d('stroke-1', 'svg', 'stroke-1', { 'stroke-width': '1' }, 'stroke-width: 1'),
  'stroke-2': d('stroke-2', 'svg', 'stroke-2', { 'stroke-width': '2' }, 'stroke-width: 2'),
};

export const A11Y_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'forced-color-adjust-auto': d('forced-color-adjust-auto', 'a11y', 'forced-color-adjust-auto', { 'forced-color-adjust': 'auto' }, 'forced-color-adjust: auto'),
  'forced-color-adjust-none': d('forced-color-adjust-none', 'a11y', 'forced-color-adjust-none', { 'forced-color-adjust': 'none' }, 'forced-color-adjust: none'),
  'sr-only': d('sr-only', 'a11y', 'sr-only', { position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', 'white-space': 'nowrap', 'border-width': '0' }, 'Visually hidden; readable by screen readers'),
  'not-sr-only': d('not-sr-only', 'a11y', 'not-sr-only', { position: 'static', width: 'auto', height: 'auto', padding: '0', margin: '0', overflow: 'visible', clip: 'auto', 'white-space': 'normal' }, 'Undo sr-only'),
};

export const LIST_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'list-none': d('list-none', 'list', 'list-none', { 'list-style-type': 'none' }, 'list-style-type: none'),
  'list-disc': d('list-disc', 'list', 'list-disc', { 'list-style-type': 'disc' }, 'list-style-type: disc'),
  'list-decimal': d('list-decimal', 'list', 'list-decimal', { 'list-style-type': 'decimal' }, 'list-style-type: decimal'),
  'list-circle': d('list-circle', 'list', 'list-[circle]', { 'list-style-type': 'circle' }, 'list-style-type: circle'),
  'list-square': d('list-square', 'list', 'list-[square]', { 'list-style-type': 'square' }, 'list-style-type: square'),

  'list-inside': d('list-inside', 'list', 'list-inside', { 'list-style-position': 'inside' }, 'list-style-position: inside'),
  'list-outside': d('list-outside', 'list', 'list-outside', { 'list-style-position': 'outside' }, 'list-style-position: outside'),

  'list-image-none': d('list-image-none', 'list', 'list-image-none', { 'list-style-image': 'none' }, 'list-style-image: none'),
};

export const INTERACTIVE_EXTRA_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'caret-transparent': d('caret-transparent', 'interactive', 'caret-transparent', { 'caret-color': 'transparent' }, 'caret-color: transparent'),
  'caret-current': d('caret-current', 'interactive', 'caret-current', { 'caret-color': 'currentColor' }, 'caret-color: currentColor'),
  'scheme-light': d('scheme-light', 'interactive', 'scheme-light', { 'color-scheme': 'light' }, 'color-scheme: light'),
  'scheme-dark': d('scheme-dark', 'interactive', 'scheme-dark', { 'color-scheme': 'dark' }, 'color-scheme: dark'),
  'scheme-auto': d('scheme-auto', 'interactive', 'scheme-auto', { 'color-scheme': 'light dark' }, 'color-scheme: light dark'),
  'accent-auto': d('accent-auto', 'interactive', 'accent-auto', { 'accent-color': 'auto' }, 'accent-color: auto'),
  'accent-current': d('accent-current', 'interactive', 'accent-current', { 'accent-color': 'currentColor' }, 'accent-color: currentColor'),
  'field-sizing-fixed': d('field-sizing-fixed', 'interactive', 'field-sizing-fixed', { 'field-sizing': 'fixed' }, 'field-sizing: fixed'),
  'field-sizing-content': d('field-sizing-content', 'interactive', 'field-sizing-content', { 'field-sizing': 'content' }, 'field-sizing: content'),
};

export const TEXT_EXTRA_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'decoration-solid': d('decoration-solid', 'text', 'decoration-solid', { 'text-decoration-style': 'solid' }, 'text-decoration-style: solid'),
  'decoration-double': d('decoration-double', 'text', 'decoration-double', { 'text-decoration-style': 'double' }, 'text-decoration-style: double'),
  'decoration-dotted': d('decoration-dotted', 'text', 'decoration-dotted', { 'text-decoration-style': 'dotted' }, 'text-decoration-style: dotted'),
  'decoration-dashed': d('decoration-dashed', 'text', 'decoration-dashed', { 'text-decoration-style': 'dashed' }, 'text-decoration-style: dashed'),
  'decoration-wavy': d('decoration-wavy', 'text', 'decoration-wavy', { 'text-decoration-style': 'wavy' }, 'text-decoration-style: wavy'),
  'decoration-1': d('decoration-1', 'text', 'decoration-1', { 'text-decoration-thickness': '1px' }, 'text-decoration-thickness: 1px'),
  'decoration-2': d('decoration-2', 'text', 'decoration-2', { 'text-decoration-thickness': '2px' }, 'text-decoration-thickness: 2px'),
  'decoration-4': d('decoration-4', 'text', 'decoration-4', { 'text-decoration-thickness': '4px' }, 'text-decoration-thickness: 4px'),
  'underline-offset-auto': d('underline-offset-auto', 'text', 'underline-offset-auto', { 'text-underline-offset': 'auto' }, 'text-underline-offset: auto'),
  'underline-offset-0': d('underline-offset-0', 'text', 'underline-offset-0', { 'text-underline-offset': '0px' }, 'text-underline-offset: 0'),
  'underline-offset-1': d('underline-offset-1', 'text', 'underline-offset-1', { 'text-underline-offset': '1px' }, 'text-underline-offset: 1px'),
  'underline-offset-2': d('underline-offset-2', 'text', 'underline-offset-2', { 'text-underline-offset': '2px' }, 'text-underline-offset: 2px'),
  'underline-offset-4': d('underline-offset-4', 'text', 'underline-offset-4', { 'text-underline-offset': '4px' }, 'text-underline-offset: 4px'),
  'underline-offset-8': d('underline-offset-8', 'text', 'underline-offset-8', { 'text-underline-offset': '8px' }, 'text-underline-offset: 8px'),
  'indent-0': d('indent-0', 'text', 'indent-0', { 'text-indent': '0px' }, 'text-indent: 0'),
  'indent-1': d('indent-1', 'text', 'indent-1', { 'text-indent': '4px' }, 'text-indent: 4px'),
  'indent-2': d('indent-2', 'text', 'indent-2', { 'text-indent': '8px' }, 'text-indent: 8px'),
  'indent-4': d('indent-4', 'text', 'indent-4', { 'text-indent': '16px' }, 'text-indent: 16px'),
  'indent-8': d('indent-8', 'text', 'indent-8', { 'text-indent': '32px' }, 'text-indent: 32px'),
  'align-baseline': d('align-baseline', 'text', 'align-baseline', { 'vertical-align': 'baseline' }, 'vertical-align: baseline'),
  'align-top': d('align-top', 'text', 'align-top', { 'vertical-align': 'top' }, 'vertical-align: top'),
  'align-middle': d('align-middle', 'text', 'align-middle', { 'vertical-align': 'middle' }, 'vertical-align: middle'),
  'align-bottom': d('align-bottom', 'text', 'align-bottom', { 'vertical-align': 'bottom' }, 'vertical-align: bottom'),
  'align-text-top': d('align-text-top', 'text', 'align-text-top', { 'vertical-align': 'text-top' }, 'vertical-align: text-top'),
  'align-text-bottom': d('align-text-bottom', 'text', 'align-text-bottom', { 'vertical-align': 'text-bottom' }, 'vertical-align: text-bottom'),
  'align-sub': d('align-sub', 'text', 'align-sub', { 'vertical-align': 'sub' }, 'vertical-align: sub'),
  'align-super': d('align-super', 'text', 'align-super', { 'vertical-align': 'super' }, 'vertical-align: super'),
  'text-wrap': d('text-wrap', 'text', 'text-wrap', { 'text-wrap': 'wrap' }, 'text-wrap: wrap'),
  'text-nowrap': d('text-nowrap', 'text', 'text-nowrap', { 'text-wrap': 'nowrap' }, 'text-wrap: nowrap'),
  'hyphens-none': d('hyphens-none', 'text', 'hyphens-none', { hyphens: 'none' }, 'hyphens: none'),
  'hyphens-manual': d('hyphens-manual', 'text', 'hyphens-manual', { hyphens: 'manual' }, 'hyphens: manual'),
  'hyphens-auto': d('hyphens-auto', 'text', 'hyphens-auto', { hyphens: 'auto' }, 'hyphens: auto'),
  'antialiased': d('antialiased', 'text', 'antialiased', { '-webkit-font-smoothing': 'antialiased', '-moz-osx-font-smoothing': 'grayscale' }, 'font-smoothing: antialiased'),
  'subpixel-antialiased': d('subpixel-antialiased', 'text', 'subpixel-antialiased', { '-webkit-font-smoothing': 'auto', '-moz-osx-font-smoothing': 'auto' }, 'font-smoothing: subpixel'),
};

export const FONT_EXTRA_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'font-stretch-ultra-condensed': d('font-stretch-ultra-condensed', 'font', 'font-stretch-ultra-condensed', { 'font-stretch': 'ultra-condensed' }, 'font-stretch: ultra-condensed'),
  'font-stretch-condensed': d('font-stretch-condensed', 'font', 'font-stretch-condensed', { 'font-stretch': 'condensed' }, 'font-stretch: condensed'),
  'font-stretch-normal': d('font-stretch-normal', 'font', 'font-stretch-normal', { 'font-stretch': 'normal' }, 'font-stretch: normal'),
  'font-stretch-expanded': d('font-stretch-expanded', 'font', 'font-stretch-expanded', { 'font-stretch': 'expanded' }, 'font-stretch: expanded'),
  'font-stretch-ultra-expanded': d('font-stretch-ultra-expanded', 'font', 'font-stretch-ultra-expanded', { 'font-stretch': 'ultra-expanded' }, 'font-stretch: ultra-expanded'),
  'tabular-nums': d('tabular-nums', 'font', 'tabular-nums', { 'font-variant-numeric': 'tabular-nums' }, 'font-variant-numeric: tabular-nums'),
  'proportional-nums': d('proportional-nums', 'font', 'proportional-nums', { 'font-variant-numeric': 'proportional-nums' }, 'font-variant-numeric: proportional-nums'),
  'lining-nums': d('lining-nums', 'font', 'lining-nums', { 'font-variant-numeric': 'lining-nums' }, 'font-variant-numeric: lining-nums'),
  'oldstyle-nums': d('oldstyle-nums', 'font', 'oldstyle-nums', { 'font-variant-numeric': 'oldstyle-nums' }, 'font-variant-numeric: oldstyle-nums'),
  'slashed-zero': d('slashed-zero', 'font', 'slashed-zero', { 'font-variant-numeric': 'slashed-zero' }, 'font-variant-numeric: slashed-zero'),
  'normal-nums': d('normal-nums', 'font', 'normal-nums', { 'font-variant-numeric': 'normal' }, 'font-variant-numeric: normal'),
};

export const SIZE_EXTRA_SHORTCUTS: Record<string, ShortcutDefinition> = {
  'inline-size-auto': d('inline-size-auto', 'size', 'inline-size-auto', { 'inline-size': 'auto' }, 'inline-size: auto'),
  'inline-size-full': d('inline-size-full', 'size', 'inline-size-full', { 'inline-size': '100%' }, 'inline-size: 100%'),
  'block-size-auto': d('block-size-auto', 'size', 'block-size-auto', { 'block-size': 'auto' }, 'block-size: auto'),
  'block-size-full': d('block-size-full', 'size', 'block-size-full', { 'block-size': '100%' }, 'block-size: 100%'),
  'min-inline-size-0': d('min-inline-size-0', 'size', 'min-inline-size-0', { 'min-inline-size': '0' }, 'min-inline-size: 0'),
  'min-inline-size-full': d('min-inline-size-full', 'size', 'min-inline-size-full', { 'min-inline-size': '100%' }, 'min-inline-size: 100%'),
  'max-inline-size-full': d('max-inline-size-full', 'size', 'max-inline-size-full', { 'max-inline-size': '100%' }, 'max-inline-size: 100%'),
  'max-inline-size-none': d('max-inline-size-none', 'size', 'max-inline-size-none', { 'max-inline-size': 'none' }, 'max-inline-size: none'),
  'min-block-size-0': d('min-block-size-0', 'size', 'min-block-size-0', { 'min-block-size': '0' }, 'min-block-size: 0'),
  'min-block-size-full': d('min-block-size-full', 'size', 'min-block-size-full', { 'min-block-size': '100%' }, 'min-block-size: 100%'),
  'max-block-size-full': d('max-block-size-full', 'size', 'max-block-size-full', { 'max-block-size': '100%' }, 'max-block-size: 100%'),
  'max-block-size-none': d('max-block-size-none', 'size', 'max-block-size-none', { 'max-block-size': 'none' }, 'max-block-size: none'),
};

export const AEROCRAFT_KEYFRAMES_CSS = `
@keyframes ac-spin { to { transform: rotate(360deg); } }
@keyframes ac-ping { 75%, 100% { transform: scale(2); opacity: 0; } }
@keyframes ac-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
@keyframes ac-bounce { 0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); } 50% { transform: none; animation-timing-function: cubic-bezier(0, 0, 0.2, 1); } }
`.trim();
