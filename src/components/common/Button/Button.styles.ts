import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface ButtonStyledProps {
	fullWidth?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	padding: 0;
	margin: 0;
	border: none;
	box-sizing: border-box;
	outline: none;
	padding: 12px 0;
	transition: all 80ms linear;
	border-radius: 4px;
	background-color: #4a154b;
	color: #ffffff;
	font-size: 18px;
	font-weight: 700;

	&:hover {
		background-color: rgba(74, 21, 75, 0.9);
		border: none;
	}

	&:focus {
		box-shadow:
			0 0 0 1px var(rgba(1)),
			0 0 0 5px rgba(29, 155, 209, 0.3);
	}

	${({ fullWidth = false }) =>
		fullWidth &&
		css`
			width: 100%;
		`}
`;
