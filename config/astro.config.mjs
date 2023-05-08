import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import react from "@astrojs/react";

export default defineConfig({
	output: 'static',
	vite: {
		css: {
			postcss: `./config`
		},
		resolve: {
			alias: [
				{
					find: '@mixins',
					replacement: `./src/styles/mixins/index.css`
				}
			]
		}
	},
	integrations: [
		image(),
		react()
	],
});
