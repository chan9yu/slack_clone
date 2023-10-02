import { IconBase, IconBaseProps } from '../IconBase';

const Correct = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19 7.51798L10.5049 18L5 12.3397L6.63062 10.663L10.3499 14.4873L17.2284 6L19 7.51798Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Correct;
