import react, { BabelOptions } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const babelOptions: BabelOptions = {
	plugins: [
		[
			'@emotion/babel-plugin',
			{
				autoLabel: 'dev-only',
				labelFormat: '[local]'
			}
		]
	]
};

export default defineConfig({
	base: '/slack_clone/',
	server: {
		host: 'localhost',
		port: 3035
	},
	plugins: [
		react({
			jsxImportSource: '@emotion/react',
			babel: babelOptions
		})
	]
});
