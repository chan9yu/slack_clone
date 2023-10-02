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
	padding?: CSSProperties['padding'];
	width?: CSSProperties['width'];
}

export const FlexStyled = styled.div<FlexStyledProps>`
	display: flex;
	align-items: ${({ alignItems }) => alignItems || 'flex-start'};
	flex-direction: ${({ direction }) => direction || 'row'};
	height: ${({ fullHeight, height }) => (fullHeight ? '100%' : height || 'auto')};
	width: ${({ fullWidth, width }) => (fullWidth ? '100%' : width || 'auto')};
	gap: ${({ gap }) => gap || '0'};
	padding: ${({ padding }) => padding || '0px'};
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`;
