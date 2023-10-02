import { IconBase, IconBaseProps } from '../IconBase';

const Radio = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 17.8625C15.2378 17.8625 17.8625 15.2378 17.8625 12C17.8625 8.76223 15.2378 6.1375 12 6.1375C8.76223 6.1375 6.1375 8.76223 6.1375 12C6.1375 15.2378 8.76223 17.8625 12 17.8625ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Radio;
