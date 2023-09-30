import { InputHTMLAttributes, forwardRef } from 'react';

import * as S from './Input.styles';

interface InputProps extends S.InputStyledProps, InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { ...rest } = props;

	const styleProps: S.InputStyledProps = {};

	return <S.InputStyled ref={ref} {...styleProps} {...rest} />;
});

export default Input;
