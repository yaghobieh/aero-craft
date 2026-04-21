export interface ShortcutDefinition {
  name: string;
  tailwind?: string;
  css: Record<string, string>;
  description: string;
  group: string;
}

export type ShortcutGroup = Record<string, ShortcutDefinition>;

export type ShortcutsRegistry = Record<string, ShortcutGroup>;
