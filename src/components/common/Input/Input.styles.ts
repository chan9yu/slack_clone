import styled from '@emotion/styled';

import { getOpacityColor } from '../../../styles';

export interface InputStyledProps {
	isError?: boolean;
}

export const InputWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const InputInner = styled.div`
	width: inherit;
	position: relative;

	svg {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 10px;
	}
`;

export const InputStyled = styled.input<InputStyledProps>`
	width: 100%;
	height: 44px;
	padding: 12px;
	box-sizing: border-box;
	font-size: 18px;
	line-height: 1.33;
	border-radius: 4px;
	transition: all 80ms ease-out;
	background-color: transparent;
	border-width: 1px;
	border-style: solid;
	border-color: ${({ isError }) => (isError ? '#e01e5a' : getOpacityColor('#1d1c1d', 30))};
	color: #1d1c1d;

	&:focus {
		border-color: ${getOpacityColor('#000000', 0)};
		box-shadow:
			0 0 0 1px ${({ isError }) => (isError ? '#e01e5a' : '#1264a3')},
			0 0 0 5px ${({ isError }) => getOpacityColor(isError ? '#e01e5a' : '#1d9bd1', 30)};
	}
`;
