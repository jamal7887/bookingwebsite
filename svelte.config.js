// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default defineConfig({
	kit: {
		adapter: adapter(),

		// Additional Vite config for aliases
		alias: {
			'@components': './src/components',
			'@imgs': './src/imgs'
		}
	},

	preprocess: vitePreprocess()
});
