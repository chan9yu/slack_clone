import { IconBase, IconBaseProps } from '../IconBase';

const Kabab = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M14 5.05714C14 6.19328 13.1045 7.11429 12 7.11429C10.8955 7.11429 10 6.19328 10 5.05714C10 3.92101 10.8955 3 12 3C13.1045 3 14 3.92101 14 5.05714Z"
				fill={color}
			/>
			<path
				d="M14 12C14 13.1361 13.1045 14.0571 12 14.0571C10.8955 14.0571 10 13.1361 10 12C10 10.8639 10.8955 9.94286 12 9.94286C13.1045 9.94286 14 10.8639 14 12Z"
				fill={color}
			/>
			<path
				d="M14 18.9429C14 20.0789 13.1045 21 12 21C10.8955 21 10 20.0789 10 18.9429C10 17.8068 10.8955 16.8857 12 16.8857C13.1045 16.8857 14 17.8068 14 18.9429Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Kabab;
