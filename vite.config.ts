import react, { BabelOptions } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import * as pkg from './package.json';

const url = pkg.homepage;
const baseUrl = new URL(url).pathname;

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
	base: baseUrl,
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
