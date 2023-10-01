import { IconBase, IconBaseProps } from '../IconBase';

const Window = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M3 11.25V3H11.25V11.25H3ZM3 21V12.75H11.25V21H3ZM12.75 11.25V3H21V11.25H12.75ZM12.75 21V12.75H21V21H12.75ZM4.5 9.75H9.75V4.5H4.5V9.75ZM14.25 9.75H19.5V4.5H14.25V9.75ZM14.25 19.5H19.5V14.25H14.25V19.5ZM4.5 19.5H9.75V14.25H4.5V19.5Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Window;
