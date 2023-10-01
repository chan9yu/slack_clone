import { IconBase, IconBaseProps } from '../IconBase';

const Active = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<g clip-path="url(#clip0_328_512)">
				<circle cx="12" cy="12" r="9" fill="#2EB67D" />
			</g>
			<defs>
				<clipPath id="clip0_328_512">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</IconBase>
	);
};

export default Active;
