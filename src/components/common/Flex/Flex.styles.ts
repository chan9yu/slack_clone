import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { CSSProperties } from 'react';

export interface FlexStyledProps {
	alignItems?: CSSProperties['alignItems'];
	direction?: CSSProperties['flexDirection'];
	fullHeight?: boolean;
	fullWidth?: boolean;
	height?: CSSProperties['height'];
	justifyContent?: CSSProperties['justifyContent'];
	gap?: CSSProperties['gap'];
	width?: CSSProperties['width'];
}

export const FlexStyled = styled.div<FlexStyledProps>`
	display: flex;

	${({ alignItems }) =>
		alignItems &&
		css`
			align-items: ${alignItems};
		`}

	${({ direction }) =>
		direction &&
		css`
			flex-direction: ${direction};
		`}

  ${({ fullHeight }) =>
		fullHeight &&
		css`
			height: 100%;
		`}

  ${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}

  ${({ gap }) =>
		gap &&
		css`
			gap: ${gap};
		`}

  ${({ height }) =>
		height &&
		css`
			height: ${height};
		`}

	${({ justifyContent }) =>
		justifyContent &&
		css`
			justify-content: ${justifyContent};
		`}
    
  ${({ width }) =>
		width &&
		css`
			width: ${width};
		`}
`;
