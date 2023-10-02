import { IconBase, IconBaseProps } from '../IconBase';

const Italic = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M8 20L8.1995 18.902L9.89526 18.4538L12.3292 5.54622L10.813 5.12045L11.0125 4H16L15.8005 5.12045L14.0848 5.54622L11.6509 18.4538L13.187 18.902L12.9875 20H8Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Italic;
