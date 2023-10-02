import { IconBase, IconBaseProps } from '../IconBase';

const Linking = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.6 5.2C12.2745 5.2 11.2 6.27452 11.2 7.6V15.1C11.2 15.5971 11.6029 16 12.1 16C12.5971 16 13 15.5971 13 15.1V9.1C13 8.76863 13.2686 8.5 13.6 8.5C13.9314 8.5 14.2 8.76863 14.2 9.1V15.1C14.2 16.2598 13.2598 17.2 12.1 17.2C10.9402 17.2 10 16.2598 10 15.1V7.6C10 5.61177 11.6118 4 13.6 4C15.5882 4 17.2 5.61177 17.2 7.6V15.1C17.2 17.9167 14.9166 20.2 12.1 20.2C9.28335 20.2 7 17.9167 7 15.1V13.1C7 12.7686 7.26863 12.5 7.6 12.5C7.93137 12.5 8.2 12.7686 8.2 13.1V15.1C8.2 17.2539 9.94609 19 12.1 19C14.2539 19 16 17.2539 16 15.1V7.6C16 6.27452 14.9255 5.2 13.6 5.2Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Linking;
