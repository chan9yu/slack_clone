import { IconBase, IconBaseProps } from '../IconBase';

const ChevronLeft = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.6137 6.24239C14.9383 6.56558 14.9383 7.08958 14.6137 7.41277L10.0066 12L14.6137 16.5872C14.9383 16.9104 14.9383 17.4344 14.6137 17.7576C14.2891 18.0808 13.7628 18.0808 13.4382 17.7576L8.24344 12.5852C7.91885 12.262 7.91885 11.738 8.24344 11.4148L13.4382 6.24239C13.7628 5.9192 14.2891 5.9192 14.6137 6.24239Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default ChevronLeft;
