export interface ShortcutDefinition {
  name: string;
  utilityRecipe?: string;
  css: Record<string, string>;
  description: string;
  group: string;
  nestedSelector?: string;
  nestedCss?: Record<string, string>;
}

export type ShortcutGroup = Record<string, ShortcutDefinition>;

export type ShortcutsRegistry = Record<string, ShortcutGroup>;
