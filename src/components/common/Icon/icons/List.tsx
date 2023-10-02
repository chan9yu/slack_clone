import { IconBase, IconBaseProps } from '../IconBase';

const List = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M6.70588 5.82424C6.70588 5.36903 7.06142 5 7.5 5H20.2059C20.6445 5 21 5.36903 21 5.82424C21 6.27946 20.6445 6.64848 20.2059 6.64848H7.5C7.06142 6.64848 6.70588 6.27946 6.70588 5.82424Z"
				fill={color}
			/>
			<path
				d="M3 5.82424C3 5.36903 3.35554 5 3.79412 5C4.2327 5 4.58824 5.36903 4.58824 5.82424C4.58824 6.27946 4.2327 6.64848 3.79412 6.64848C3.35554 6.64848 3 6.27946 3 5.82424Z"
				fill={color}
			/>
			<path
				d="M6.70588 12C6.70588 11.5448 7.06142 11.1758 7.5 11.1758H20.2059C20.6445 11.1758 21 11.5448 21 12C21 12.4552 20.6445 12.8242 20.2059 12.8242H7.5C7.06142 12.8242 6.70588 12.4552 6.70588 12Z"
				fill={color}
			/>
			<path
				d="M3 12C3 11.5448 3.35554 11.1758 3.79412 11.1758C4.2327 11.1758 4.58824 11.5448 4.58824 12C4.58824 12.4552 4.2327 12.8242 3.79412 12.8242C3.35554 12.8242 3 12.4552 3 12Z"
				fill={color}
			/>
			<path
				d="M6.70588 18.1758C6.70588 17.7205 7.06142 17.3515 7.5 17.3515H20.2059C20.6445 17.3515 21 17.7205 21 18.1758C21 18.631 20.6445 19 20.2059 19H7.5C7.06142 19 6.70588 18.631 6.70588 18.1758Z"
				fill={color}
			/>
			<path
				d="M3 18.1758C3 17.7205 3.35554 17.3515 3.79412 17.3515C4.2327 17.3515 4.58824 17.7205 4.58824 18.1758C4.58824 18.631 4.2327 19 3.79412 19C3.35554 19 3 18.631 3 18.1758Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default List;
