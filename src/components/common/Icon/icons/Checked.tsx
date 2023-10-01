import { IconBase, IconBaseProps } from '../IconBase';

const Checked = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M5 7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V7Z"
				fill="#2EB67D"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17 9.01199L10.9321 16L7 12.2264L8.16473 11.1087L10.8214 13.6582L15.7346 8L17 9.01199Z"
				fill="#1D1C1D"
			/>
		</IconBase>
	);
};

export default Checked;
