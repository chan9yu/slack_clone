import { IconBase, IconBaseProps } from '../IconBase';

const SendSelected = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3 4.66859C3 3.45915 4.25367 2.65239 5.36184 3.1487L20.0126 10.0941C21.2999 10.6707 21.3369 12.4764 20.0743 13.1048L5.42355 20.8219C4.31009 21.376 3 20.5702 3 19.3312V14.6136C3 13.8488 3.52298 13.1821 4.26847 12.9967L11.7372 12.4753C12.2554 12.346 12.2611 11.6368 11.7372 11.5331L4.5 11C3.66196 10.8957 3.03308 10.1867 3.03308 9.34618L3 4.66859Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default SendSelected;
