const OPACITY_VALUES = {
	0: '00',
	5: '0c',
	10: '19',
	15: '26',
	20: '33',
	25: '3f',
	30: '4c',
	35: '59',
	40: '66',
	45: '72',
	50: '7f',
	55: '8c',
	60: '99',
	65: 'a5',
	70: 'b2',
	75: 'bf',
	80: 'cc',
	85: 'd8',
	90: 'e5',
	95: 'f2',
	100: 'ff'
} as const;

/**
 * @param color opacity 적용할 색깔 (hex code, 6자)
 * @param opacity opacity % (0 ~ 100%, 5% 간격)
 * @description opacity 적용 유틸 함수
 */
export const getOpacityColor = (colorCode: `#${string}`, opacity: keyof typeof OPACITY_VALUES) => {
	const hexColorCodeRegex = /^#[0-9A-Fa-f]{6}$/;
	if (!hexColorCodeRegex.test(colorCode))
		throw new Error('유효한 6자리 16진수 색상 코드를 입력하세요 (#으로 시작)');

	return `${colorCode}${OPACITY_VALUES[opacity]}`;
};
