import { CSSProperties, ReactNode, forwardRef } from 'react';

import * as S from './Flex.styles';

interface FlexProps extends S.FlexStyledProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
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
		width
	};

	return (
		<S.FlexStyled ref={ref} className={className} style={style} {...styleProps} {...rest}>
			{children}
		</S.FlexStyled>
	);
});

Flex.displayName = 'Flex';

export default Flex;
