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

				a {
					text-decoration: none;
					color: inherit;
				}
			`}
		/>
	);
};

export default GlobalStyle;
