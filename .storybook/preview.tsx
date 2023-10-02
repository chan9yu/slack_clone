import { ThemeProvider } from '@emotion/react';
import type { Decorator, Parameters } from '@storybook/react';
import React from 'react';

import { GlobalStyle, theme } from '../src/styles';

export const decorator: Decorator = (Story, context) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Story {...context} />
	</ThemeProvider>
);

export const parameters: Parameters = {
	actions: {
		argTypesRegex: '^on[A-Z].*'
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	options: {
		storySort: {
			order: ['Intro', 'Foundation', '*']
		}
	}
};
