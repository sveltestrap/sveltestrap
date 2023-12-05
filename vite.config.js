import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import autoPreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer'

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      svelte({
        emitCss: false,
        compilerOptions: {
          accessors: true,
          hydratable: true
        },
        preprocess: autoPreprocess({
          postcss: {
            plugins: [autoprefixer()]
          }
        })
      })
    ],
    build: {
      outDir: 'dist',
      lib: {
        entry: './src/index.js',
        name: 'sveltestrap',
        fileName: (format) => format === 'umd' ? 'sveltestrap.js' : 'sveltestrap.es.js'
      },
      rollupOptions: {
        external: ['svelte'],
        output: {
          globals: {
            svelte: 'svelte',
          },
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './setup.js',
      testTimeout: 10000,
      include: ['./src/**/*.spec.js'],
      resolveSnapshotPath: (testPath, snapExtension) => testPath.replace(/\.spec\.([tj]s?)/, `${snapExtension}.$1`)
    }
  }
});
