import { IconBase, IconBaseProps } from '../IconBase';

const CheckboxPreference = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5 7.66667C5 6.1939 6.1939 5 7.66667 5H16.3334C17.8061 5 19 6.1939 19 7.66667V16.3333C19 17.8061 17.8061 19 16.3334 19H7.66667C6.1939 19 5 17.8061 5 16.3333V7.66667ZM7.66667 6.06668H16.3334C17.217 6.06668 17.9334 6.78301 17.9334 7.66667V16.3333C17.9334 17.217 17.217 17.9334 16.3334 17.9334H7.66667C6.78301 17.9334 6.06668 17.217 6.06668 16.3333V7.66667C6.06668 6.78301 6.78301 6.06668 7.66667 6.06668Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default CheckboxPreference;
