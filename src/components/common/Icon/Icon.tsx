import { forwardRef } from 'react';

import { IconBaseProps } from './IconBase';
import * as I from './icons';

interface IconComponentProps extends Omit<IconBaseProps, 'name'> {
	name: keyof typeof I;
}

const Icon = forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
	const { name, ...rest } = props;
	const IconComponent = I[name];

	return <IconComponent ref={ref} {...rest} />;
});

Icon.displayName = 'Icon';

export default Icon;
