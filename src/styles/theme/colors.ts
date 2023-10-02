import type { Theme } from '@emotion/react';

const core: Theme['colors']['core'] = {
	primary: '#3A123E',
	primary_brand: '#4A154B',
	black: '#000000',
	white: '#FFFFFF',
	blue: '#36C5F0',
	green: '#2EB67D',
	yellow: '#ECB22E',
	red: '#E01E5A'
};

const secondary: Theme['colors']['secondary'] = {
	cobalt: '#1E328F',
	skyblue: '#2F8AB7',
	teal: '#0096A2',
	pool: '#78D7DD',
	evergreen: '#185F34',
	moss: '#779846',
	yolk: '#FFA100',
	sandbar: '#FFD57E',
	peach: '#FED4BE',
	salmon: '#F2606A',
	bubblegum: '#F6BBC1',
	crimson: '#921D21',
	terracotta: '#DE8969',
	berry: '#7C2852',
	mauve: '#C05B8C'
};

const gray: Theme['colors']['gray'] = {
	darker: '#1D1C1D',
	dark: '#616061',
	medium: '#868686',
	light: '#BBBBBB',
	lighter: '#DDDDDD',
	lightest: '#F8F8F8'
};

const hover: Theme['colors']['hover'] = {
	dark: '#1364A3',
	default: '#0C4C8C'
};

const highlight: Theme['colors']['highlight'] = {
	accent: '#1C9BD1',
	secondary: '#F3C845'
};

const overlay: Theme['colors']['overlay'] = {
	black: '#0000007f'
};

const nav: Theme['colors']['nav'] = {
	divider_line: '#C4B8C5',
	unselected_text: '#522653'
};

const background: Theme['colors']['background'] = {
	top_nav: '#301034',
	top_search: '#4F3452'
};

export const colors: Theme['colors'] = {
	core,
	secondary,
	gray,
	hover,
	highlight,
	overlay,
	nav,
	background
};
