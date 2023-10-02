import { IconBase, IconBaseProps } from '../IconBase';

const Cancel = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M17.4691 5.26265C17.8193 4.91245 18.3871 4.91245 18.7373 5.26265C19.0876 5.61286 19.0876 6.18066 18.7373 6.53086L6.53086 18.7373C6.18066 19.0876 5.61286 19.0876 5.26266 18.7373C4.91245 18.3871 4.91245 17.8193 5.26265 17.4691L17.4691 5.26265Z"
				fill={color}
			/>
			<path
				d="M18.7373 17.4691C19.0875 17.8193 19.0875 18.3871 18.7373 18.7373C18.3871 19.0876 17.8193 19.0876 17.4691 18.7373L5.26265 6.53086C4.91245 6.18065 4.91245 5.61286 5.26265 5.26265C5.61286 4.91245 6.18065 4.91245 6.53086 5.26265L18.7373 17.4691Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Cancel;
