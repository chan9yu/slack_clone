import { SVGProps } from 'react';

import type { AtomComponentProps } from '../../../../@types';
import * as S from './IconBase.styles';

type ExtendedType = S.IconBaseStyledProps &
	AtomComponentProps<SVGSVGElement> &
	Omit<SVGProps<SVGSVGElement>, 'cursor'>;

export interface IconBaseProps extends ExtendedType {
	color?: string;
}

const IconBase = ({
	children,
	cursor,
	xmlns = 'http://www.w3.org/2000/svg',
	...rest
}: IconBaseProps) => (
	<S.IconBaseStyled cursor={cursor} xmlns={xmlns} {...rest}>
		{children}
	</S.IconBaseStyled>
);

export default IconBase;
