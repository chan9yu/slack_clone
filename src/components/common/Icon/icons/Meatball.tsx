import { IconBase, IconBaseProps } from '../IconBase';

const Meatball = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M19.9429 14C18.8067 14 17.8857 13.1045 17.8857 12C17.8857 10.8955 18.8067 10 19.9429 10C21.079 10 22 10.8955 22 12C22 13.1045 21.079 14 19.9429 14Z"
				fill={color}
			/>
			<path
				d="M12 14C10.8639 14 9.94286 13.1045 9.94286 12C9.94286 10.8955 10.8639 10 12 10C13.1361 10 14.0571 10.8955 14.0571 12C14.0571 13.1045 13.1361 14 12 14Z"
				fill={color}
			/>
			<path
				d="M4.05714 14C2.92105 14 2 13.1045 2 12C2 10.8955 2.92105 10 4.05714 10C5.19323 10 6.11428 10.8955 6.11428 12C6.11428 13.1045 5.19323 14 4.05714 14Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Meatball;
