import { ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
import { Decorator } from '@storybook/react';
import React from 'react';

import { GlobalStyle, theme } from '../src/styles';

const decorator: Decorator = (Story, context) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Story {...context} />
	</ThemeProvider>
);

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	},
	decorators: [decorator]
};

export default preview;
