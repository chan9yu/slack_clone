import { IconBase, IconBaseProps } from '../IconBase';

const ChevronDown = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.24239 9.25562C6.56559 8.91479 7.08959 8.91479 7.41278 9.25562L12 14.0931L16.5872 9.25562C16.9104 8.91479 17.4344 8.91479 17.7576 9.25562C18.0808 9.59644 18.0808 10.149 17.7576 10.4898L12.5852 15.9444C12.262 16.2852 11.738 16.2852 11.4148 15.9444L6.24239 10.4898C5.9192 10.149 5.9192 9.59644 6.24239 9.25562Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default ChevronDown;
