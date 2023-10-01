import { IconBase, IconBaseProps } from '../IconBase';

const CorrectFill = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
				fill={color}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.5298 9.45597L10.847 16.013L7.51562 12.8098L8.48598 11.8006L10.7546 13.982L15.4718 8.53906L16.5298 9.45597Z"
				fill="white"
			/>
		</IconBase>
	);
};

export default CorrectFill;
