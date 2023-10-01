import { jsx, useTheme } from '@emotion/react';
import { forwardRef } from 'react';

import type { AtomComponentPropsWithChildren } from '../../../@types';
import * as S from './Text.styles';

type HTMLTextElement = HTMLSpanElement | HTMLParagraphElement | HTMLHeadingElement;
type ExtendedType = S.TextStyleProps &
	Omit<AtomComponentPropsWithChildren<HTMLTextElement>, 'color'>;

interface TextProps extends ExtendedType {
	tag?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Text = forwardRef<HTMLTextElement, TextProps>((props, ref) => {
	const {
		color = 'black',
		noWrap = false,
		size = 'body',
		tag = 'span',
		weight = 'regular',
		...rest
	} = props;

	const textProps: S.TextStyleProps = {
		color,
		noWrap,
		size,
		weight
	};

	const theme = useTheme();
	const textStyle = S.makeTextStyle(textProps, theme);

	return jsx(tag, { ref, css: textStyle, ...rest });
});

Text.displayName = 'Text';

export default Text;
