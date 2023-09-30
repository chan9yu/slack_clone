import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [
		react({
			jsxImportSource: '@emotion/react',
			babel: {
				plugins: [
					[
						'@emotion/babel-plugin',
						{
							autoLabel: 'dev-only',
							labelFormat: '[local]'
						}
					]
				]
			}
		})
	],
	base: '/test/',
	server: {
		host: 'localhost',
		port: 3035
	}
});
