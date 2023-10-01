import { css, Global, useTheme } from '@emotion/react';

import { reset } from './base';

const GlobalStyle = () => {
	const { colors } = useTheme();

	return (
		<Global
			styles={css`
				${reset}

				* {
					font-family: 'Lato', sans-serif !important;
				}

				html,
				body,
				#root {
					height: 100%;
				}

				body {
					background-color: ${colors.background.primary_background};
					color: ${colors.text.black};
				}

				a {
					text-decoration: none;
					color: inherit;
				}

				input:focus {
					outline: none;
				}
			`}
		/>
	);
};

export default GlobalStyle;
