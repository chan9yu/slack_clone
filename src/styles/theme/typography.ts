import type { Theme } from '@emotion/react';

const size: Theme['typography']['size'] = {
	caption2: '12px',
	caption1: '13px',
	subheading: '15px',
	body: '18px',
	heading4: '22px',
	heading3: '32px',
	heading2: '40px',
	heading1: '48px'
};

const weight: Theme['typography']['weight'] = {
	regular: '400',
	semibold: '400',
	bold: '700',
	black: '900'
};

export const typography: Theme['typography'] = {
	size,
	weight
};
