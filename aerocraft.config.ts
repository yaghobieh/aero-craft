import { defineConfig } from '@forgedevstack/aerocraft';

export default defineConfig({
  prefix: '',
  separator: '-',
  mode: 'standalone',
  responsive: true,
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  groups: 'all',
  customShortcuts: {
    'card': {
      tailwind: 'rounded-xl shadow-md p-6 bg-white',
      css: { 'border-radius': '0.75rem', 'box-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1)', padding: '1.5rem', background: '#fff' },
      description: 'Opinionated card shortcut',
      group: 'custom',
    },
  },
});
