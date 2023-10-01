import { IconBase, IconBaseProps } from '../IconBase';

const Calendar = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.9877 5.44516H5.99824C5.66716 5.44516 5.39877 5.72245 5.39877 6.06451L5.41284 17.9355C5.41284 18.2775 5.68123 18.5548 6.01231 18.5548H18.0018C18.3328 18.5548 18.6012 18.2775 18.6012 17.9355L18.5872 6.06451C18.5872 5.72245 18.3188 5.44516 17.9877 5.44516ZM5.99824 4C4.89464 4 4 4.92431 4 6.06451L4.01407 17.9355C4.01407 19.0757 4.90871 20 6.01231 20H18.0018C19.1054 20 20 19.0757 20 17.9355L19.9859 6.06451C19.9859 4.92431 19.0913 4 17.9877 4H5.99824Z"
				fill={color}
			/>
			<path d="M4.01407 7.61291H20V9.05807H4.01407V7.61291Z" fill={color} />
			<path d="M7.01143 10.7097H9.00967V12.7742H7.01143V10.7097Z" fill={color} />
			<path d="M7.01143 14.8387H9.00967V16.9032H7.01143V14.8387Z" fill={color} />
			<path d="M11.0079 10.7097H13.0062V12.7742H11.0079V10.7097Z" fill={color} />
			<path d="M11.0079 14.8387H13.0062V16.9032H11.0079V14.8387Z" fill={color} />
			<path d="M15.0044 10.7097H17.0026V12.7742H15.0044V10.7097Z" fill={color} />
			<path d="M15.0044 14.8387H17.0026V16.9032H15.0044V14.8387Z" fill={color} />
		</IconBase>
	);
};

export default Calendar;
