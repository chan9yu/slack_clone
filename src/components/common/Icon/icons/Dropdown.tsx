import { IconBase, IconBaseProps } from '../IconBase';

const Dropdown = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M17.5187 9H6.08116C5.65495 9 5.42416 9.49908 5.70019 9.82383L11.4189 16.5518C11.6186 16.7867 11.9812 16.7867 12.1809 16.5518L17.8996 9.82382C18.1757 9.49908 17.9449 9 17.5187 9Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Dropdown;
