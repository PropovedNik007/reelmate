import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// const base = process.env.BASE_PATH ?? '/arterra';
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// fallback: '404.html'
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),
		paths: {
			// base,
			// base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
			base: dev ? '' : process.env.BASE_PATH ?? '/reelmate'
			// base: process.env.BASE_PATH ?? '/arterra'
        },
		prerender: {
			handleHttpError: ({ status, path, referrer }) => {
				if (status === 404) {
					console.warn(`Path not found: ${path}, referrer: ${referrer}`);
					return {
						ignore: true // Ignore 404s during prerendering
					};
				}
			}
		}
	}
};

export default config;
