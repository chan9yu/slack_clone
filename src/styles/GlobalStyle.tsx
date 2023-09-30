import { css, Global } from '@emotion/react';

import { pretendard, reset } from './base';

const GlobalStyle = () => {
	return (
		<Global
			styles={css`
				${reset}
				${pretendard}

        * {
					font-family: 'Pretendard' !important;
				}

				html,
				body,
				#root {
					height: 100%;
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
