import type { AeroCraftBreakpoints, AeroCraftGroupsConfig, AeroCraftMode, AeroCraftSeparator } from '../types/config.types';

export const DEFAULT_PREFIX = '';
export const DEFAULT_SEPARATOR: AeroCraftSeparator = '-';
export const DEFAULT_MODE: AeroCraftMode = 'standalone';

export const DEFAULT_BREAKPOINTS: AeroCraftBreakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const DEFAULT_GROUPS: AeroCraftGroupsConfig = {
  layout: true,
  flex: true,
  grid: true,
  position: true,
  inset: true,
  size: true,
  spacing: true,
  gap: true,
  text: true,
  font: true,
  list: true,
  display: true,
  overflow: true,
  cursor: true,
  transition: true,
  motion: true,
  transform: true,
  filter: true,
  backdrop: true,
  background: true,
  outline: true,
  effect: true,
  table: true,
  scroll: true,
  interactive: true,
  svg: true,
  a11y: true,
  zindex: true,
  radius: true,
  border: true,
  opacity: true,
  shadow: true,
  color: true,
};
