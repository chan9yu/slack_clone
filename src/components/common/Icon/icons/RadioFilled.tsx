import { IconBase, IconBaseProps } from '../IconBase';

const RadioFilled = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M18.2 12C18.2 15.4242 15.4242 18.2 12 18.2C8.57583 18.2 5.8 15.4242 5.8 12C5.8 8.57583 8.57583 5.8 12 5.8C15.4242 5.8 18.2 8.57583 18.2 12Z"
				fill="#2EB67D"
				stroke="black"
				strokeWidth="1.6"
			/>
		</IconBase>
	);
};

export default RadioFilled;
