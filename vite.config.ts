import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/jordanjanakievski.github.io/',
  plugins: [sveltekit()]
});
