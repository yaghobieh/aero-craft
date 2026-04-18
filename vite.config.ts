import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    dts({
      include: ['src'],
      exclude: ['src/**/*.test.*'],
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@types': resolve(__dirname, 'src/types'),
      '@const': resolve(__dirname, 'src/constants'),
      '@core': resolve(__dirname, 'src/core'),
      '@postcss': resolve(__dirname, 'src/postcss'),
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'postcss/index': resolve(__dirname, 'src/postcss/index.ts'),
        'react/index': resolve(__dirname, 'src/react/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['postcss', 'path', 'fs', 'node:path', 'node:fs', 'glob', 'react', 'react-dom'],
      output: {
        preserveModules: false,
        exports: 'named',
      },
    },
    sourcemap: true,
    minify: 'esbuild',
  },
});
