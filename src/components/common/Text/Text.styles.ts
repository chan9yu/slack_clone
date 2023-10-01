import { Theme, css } from '@emotion/react';

export interface TextStyleProps {
	color?: keyof Theme['colors']['text'];
	noWrap?: boolean;
	size?: keyof Theme['textStyles']['size'];
	weight?: keyof Theme['textStyles']['weight'];
}

export const makeTextStyle = (props: TextStyleProps) => css`
	color: ${props.color};
	font-size: ${props.size};
	font-weight: ${props.weight};
	font-style: normal;
	line-height: normal;
`;
