import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // allows the site to be deployed on any path, not just the root
  appType: 'mpa', // ensures the dev server returns 404s for missing files
  plugins: [
    preact(),
  ],
});
