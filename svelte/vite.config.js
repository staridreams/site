import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import Inspect from 'vite-plugin-inspect';

/** @type {import('vite').UserConfig} */
const config = {
   plugins: [sveltekit(), Inspect()],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src')
      }
   },
   test: {
      globals: true,
      environment: 'jsdom'
   }
};

export default config;
