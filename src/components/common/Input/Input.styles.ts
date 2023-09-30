import styled from '@emotion/styled';

export interface InputStyledProps {}

export const InputStyled = styled.input<InputStyledProps>`
	border-radius: 4px;
	border: 1px solid var(rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1));
	transition:
		border 80ms ease-out,
		box-shadow 80ms ease-out;
	box-sizing: border-box;
	margin: 0 0 20px;
	width: 100%;
	color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
	background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
	padding: 12px;
	height: 44px;
	padding-top: 11px;
	padding-bottom: 13px;
	font-size: 18px;
	line-height: 1.33333333;

	&:focus {
		box-shadow:
			0 0 0 1px var(rgba(var(--sk_highlight, 18, 100, 163), 1)),
			0 0 0 5px rgba(29, 155, 209, 0.3);
	}
`;
