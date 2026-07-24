import { describe, expect, it, vi } from 'vitest';
import { applyStyle, clearStyle, getRegisteredStyles } from '../src/runtime/index';

describe('runtime applyStyle', () => {
  it('falls back to element.style when Typed OM is unavailable', () => {
    const setProperty = vi.fn();
    const removeProperty = vi.fn();
    const element = {
      style: { setProperty, removeProperty },
    } as unknown as HTMLElement;

    const handle = applyStyle(element, { width: 120, opacity: { value: 0.5, unit: 'number' } });
    expect(setProperty).toHaveBeenCalledWith('width', '120px');
    expect(setProperty).toHaveBeenCalledWith('opacity', '0.5');
    expect(getRegisteredStyles(element)?.width).toBe(120);

    handle.set({ height: '40%' });
    expect(setProperty).toHaveBeenCalledWith('height', '40%');

    clearStyle(element, ['width']);
    expect(removeProperty).toHaveBeenCalledWith('width');
  });
});
