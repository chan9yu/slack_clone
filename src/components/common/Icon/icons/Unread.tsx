import { IconBase, IconBaseProps } from '../IconBase';

const Unread = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path d="M4 5H20V6.64706H4V5Z" fill={color} />
			<path d="M4 17.3529H14.5882V19H4V17.3529Z" fill={color} />
			<path d="M20 11.1765H4V12.8235H20V11.1765Z" fill={color} />
		</IconBase>
	);
};

export default Unread;
