import { IconBase, IconBaseProps } from '../IconBase';

const DropdownRight = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M8.93591 6.1452L8.93591 17.5828C8.93591 18.009 9.43499 18.2398 9.75974 17.9637L16.4877 12.245C16.7226 12.0453 16.7226 11.6827 16.4877 11.483L9.75973 5.7643C9.43499 5.4882 8.93591 5.719 8.93591 6.1452Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default DropdownRight;
