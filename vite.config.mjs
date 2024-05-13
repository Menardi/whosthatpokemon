import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // allows the site to be deployed on any path, not just the root
  plugins: [
    preact(),
  ],
});
