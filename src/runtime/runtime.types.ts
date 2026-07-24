export type StyleUnit = 'px' | 'percent' | 'number' | 'deg' | 'raw';

export type StyleValue =
  | number
  | string
  | {
      value: number;
      unit?: StyleUnit;
    };

export type StyleMap = Record<string, StyleValue>;

export type ApplyStyleOptions = {
  useRegistry?: boolean;
};

export type StyleHandle = {
  set: (styles: StyleMap) => void;
  clear: (properties?: string[]) => void;
  element: HTMLElement;
};

export type TypedOmCss = {
  px: (value: number) => unknown;
  percent: (value: number) => unknown;
  number: (value: number) => unknown;
  deg: (value: number) => unknown;
};

export type AttributeStyleMapLike = {
  set: (property: string, value: unknown) => void;
  delete: (property: string) => void;
};
