import { ButtonHTMLAttributes, CSSProperties, ReactNode, forwardRef } from 'react';

import * as S from './Button.styles';

interface ButtonProps extends S.ButtonStyledProps, ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { children, className = '', fullWidth = false, style, ...rest } = props;

	const styleProps: S.ButtonStyledProps = {
		fullWidth
	};

	return (
		<S.ButtonStyled ref={ref} className={className} style={style} {...styleProps} {...rest}>
			{children}
		</S.ButtonStyled>
	);
});

Button.displayName = 'Button';

export default Button;
