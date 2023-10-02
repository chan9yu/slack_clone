import { Theme, css } from '@emotion/react';

export interface TextStyleProps {
	color?: string;
	noWrap?: boolean;
	size?: keyof Theme['typography']['size'];
	weight?: keyof Theme['typography']['weight'];
}

export const makeTextStyle = (props: TextStyleProps, theme: Theme) => css`
	color: ${props.color ? props.color : theme.colors.gray.darker};
	font-size: ${theme.typography.size[props.size || 'body']};
	font-weight: ${theme.typography.weight[props.weight || 'regular']};
	font-style: normal;
	line-height: normal;
`;
