import styled from '@emotion/styled';

export interface InputStyledProps {}

export const InputStyled = styled.input<InputStyledProps>`
	width: 100%;
	height: 44px;
	padding: 12px;
	box-sizing: border-box;
	font-size: 18px;
	line-height: 1.33;
	border-radius: 4px;
	border: 1px solid rgba(29, 28, 29, 0.3);
	transition: all 80ms ease-out;
	color: #1d1c1d;
	background-color: transparent;

	&:focus {
		border-color: #00000000;
		box-shadow:
			0 0 0 1px rgba(18, 100, 163, 1),
			0 0 0 5px #1d9bd14d;
	}
`;
