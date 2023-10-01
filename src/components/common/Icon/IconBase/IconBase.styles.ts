import styled from '@emotion/styled';
import { CSSProperties } from 'react';

export interface IconBaseStyledProps {
	cursor?: CSSProperties['cursor'];
}

export const IconBaseStyled = styled.svg<IconBaseStyledProps>`
	cursor: ${({ cursor }) => cursor || 'default'};
	flex-shrink: 1;
`;
