import { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode, forwardRef } from 'react';

import * as S from './Flex.styles';

type ExtendedType = S.FlexStyledProps &
	Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'ref'>;

interface FlexProps extends ExtendedType {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
	tag?: keyof JSX.IntrinsicElements;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Flex = forwardRef<any, FlexProps>((props, ref) => {
	const {
		alignItems,
		children,
		className = '',
		direction,
		fullHeight,
		fullWidth,
		gap,
		height,
		justifyContent,
		style,
		tag,
		padding,
		width,
		...rest
	} = props;

	const styleProps: S.FlexStyledProps = {
		alignItems,
		direction,
		fullHeight,
		fullWidth,
		gap,
		height,
		justifyContent,
		padding,
		width
	};

	return (
		<S.FlexStyled ref={ref} as={tag} className={className} style={style} {...styleProps} {...rest}>
			{children}
		</S.FlexStyled>
	);
});

Flex.displayName = 'Flex';

export default Flex;
