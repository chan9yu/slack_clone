import { Theme, css } from '@emotion/react';

export interface TextStyleProps {
	color?: keyof Theme['colors']['text'];
	noWrap?: boolean;
	size?: keyof Theme['textStyles']['size'];
	weight?: keyof Theme['textStyles']['weight'];
}

export const makeTextStyle = (props: TextStyleProps, theme: Theme) => css`
	color: ${theme.colors.text[props.color || 'black']};
	font-size: ${theme.textStyles.size[props.size || 'body']};
	font-weight: ${theme.textStyles.weight[props.weight || 'regular']};
	font-style: normal;
	line-height: normal;
`;
