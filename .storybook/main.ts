import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions'
	],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	core: {
		builder: '@storybook/builder-vite'
	},
	async viteFinal(config, options) {
		console.log(options);
		if (config.build && config.build.rollupOptions) {
			config.build.chunkSizeWarningLimit = 1000;
		}

		return config;
	}
};
export default config;
