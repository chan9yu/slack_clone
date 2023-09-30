import { css } from '@emotion/react';

import pkg from '../../../package.json';

const isProd = import.meta.env.PROD;
const baseUrl = isProd ? pkg.homepage : '/';

export const pretendard = css`
	@font-face {
		font-family: 'Pretendard';
		font-weight: 900;
		font-stretch: normal;
		font-style: normal;
		font-display: optional;
		src:
			local('Pretendard'),
			url('${baseUrl}fonts/Pretendard-Black.woff2') format('font-woff2'),
			url('${baseUrl}fonts/Pretendard-Black.woff') format('woff'),
			url('${baseUrl}fonts/Pretendard-Black.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 800;
		font-stretch: normal;
		font-style: normal;
		font-display: optional;
		src:
			local('Pretendard'),
			url('${baseUrl}fonts/Pretendard-ExtraBold.woff2') format('font-woff2'),
			url('${baseUrl}fonts/Pretendard-ExtraBold.woff') format('woff'),
			url('${baseUrl}fonts/Pretendard-ExtraBold.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 700;
		font-stretch: normal;
		font-style: normal;
		font-display: optional;
		src:
			local('Pretendard'),
			url('${baseUrl}fonts/Pretendard-Bold.woff2') format('font-woff2'),
			url('${baseUrl}fonts/Pretendard-Bold.woff') format('woff'),
			url('${baseUrl}fonts/Pretendard-Bold.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 600;
		font-stretch: normal;
		font-style: normal;
		font-display: optional;
		src:
			local('Pretendard'),
			url('${baseUrl}fonts/Pretendard-SemiBold.woff2') format('font-woff2'),
			url('${baseUrl}fonts/Pretendard-SemiBold.woff') format('woff'),
			url('${baseUrl}fonts/Pretendard-SemiBold.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 500;
		font-stretch: normal;
		font-style: normal;
		font-display: optional;
		src:
			local('Pretendard'),
			url('${baseUrl}fonts/Pretendard-Medium.woff2') format('font-woff2'),
			url('${baseUrl}fonts/Pretendard-Medium.woff') format('woff'),
			url('${baseUrl}fonts/Pretendard-Medium.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 400;
		font-stretch: normal;
		font-style: normal;
		font-display: optional;
		src:
			local('Pretendard'),
			url('${baseUrl}fonts/Pretendard-Regular.woff2') format('font-woff2'),
			url('${baseUrl}fonts/Pretendard-Regular.woff') format('woff'),
			url('${baseUrl}fonts/Pretendard-Regular.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 300;
		font-stretch: normal;
		font-style: normal;
		font-display: optional;
		src:
			local('Pretendard'),
			url('${baseUrl}fonts/Pretendard-Light.woff2') format('font-woff2'),
			url('${baseUrl}fonts/Pretendard-Light.woff') format('woff'),
			url('${baseUrl}fonts/Pretendard-Light.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 200;
		font-stretch: normal;
		font-style: normal;
		font-display: optional;
		src:
			local('Pretendard'),
			url('${baseUrl}fonts/Pretendard-ExtraLight.woff2') format('font-woff2'),
			url('${baseUrl}fonts/Pretendard-ExtraLight.woff') format('woff'),
			url('${baseUrl}fonts/Pretendard-ExtraLight.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 100;
		font-stretch: normal;
		font-style: normal;
		font-display: optional;
		src:
			local('Pretendard'),
			url('${baseUrl}fonts/Pretendard-Thin.woff2') format('font-woff2'),
			url('${baseUrl}fonts/Pretendard-Thin.woff') format('woff'),
			url('${baseUrl}fonts/Pretendard-Thin.ttf') format('truetype');
	}
`;
