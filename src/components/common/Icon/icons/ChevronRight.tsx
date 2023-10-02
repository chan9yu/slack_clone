import { IconBase, IconBaseProps } from '../IconBase';

const ChevronRight = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.24344 6.24239C8.91885 6.56558 8.91885 7.08958 9.24344 7.41277L13.8505 12L9.24344 16.5872C8.91885 16.9104 8.91885 17.4344 9.24344 17.7576C9.56803 18.0808 10.0943 18.0808 10.4189 17.7576L15.6137 12.5852C15.9383 12.262 15.9383 11.738 15.6137 11.4148L10.4189 6.24239C10.0943 5.9192 9.56803 5.9192 9.24344 6.24239Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default ChevronRight;
