import { defineConfig } from 'vite';
import { default as solidPlugin } from 'vite-plugin-solid';

export default defineConfig({
	plugins: [solidPlugin()],
});
