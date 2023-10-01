import { IconBase, IconBaseProps } from '../IconBase';

const Run = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.5714 4.37143H6.42857C5.29244 4.37143 4.37143 5.29244 4.37143 6.42857V17.5714C4.37143 18.7076 5.29244 19.6286 6.42857 19.6286H17.5714C18.7076 19.6286 19.6286 18.7076 19.6286 17.5714V6.42857C19.6286 5.29244 18.7076 4.37143 17.5714 4.37143ZM6.42857 3C4.53502 3 3 4.53502 3 6.42857V17.5714C3 19.465 4.53502 21 6.42857 21H17.5714C19.465 21 21 19.465 21 17.5714V6.42857C21 4.53502 19.465 3 17.5714 3H6.42857Z"
				fill={color}
			/>
			<path d="M13.8947 6.78947H15.7895L10.1053 17.2105H8.21053L13.8947 6.78947Z" fill={color} />
		</IconBase>
	);
};

export default Run;
