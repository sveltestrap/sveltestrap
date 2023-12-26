import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte({ emitCss: false })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['test-setup.js'],
    testTimeout: 20000,
    alias: [
      {
        find: /^svelte$/,
        replacement: 'svelte/internal'
      }
    ],
    include: ['./src/**/*.spec.js'],
    resolveSnapshotPath: (testPath, snapExtension) => testPath.replace(/\.spec\.([tj]s?)/, `${snapExtension}.$1`)
  }
});
