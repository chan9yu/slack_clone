import { IconBase, IconBaseProps } from '../IconBase';

const Clock = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M12.6857 6.42857C12.6857 6.04986 12.3787 5.74286 12 5.74286C11.6213 5.74286 11.3143 6.04986 11.3143 6.42857V12.6857H17.5714C17.9501 12.6857 18.2571 12.3787 18.2571 12C18.2571 11.6213 17.9501 11.3143 17.5714 11.3143H12.6857V6.42857Z"
				fill={color}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM19.6286 12C19.6286 16.2131 16.2131 19.6286 12 19.6286C7.78686 19.6286 4.37143 16.2131 4.37143 12C4.37143 7.78686 7.78686 4.37143 12 4.37143C16.2131 4.37143 19.6286 7.78686 19.6286 12Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Clock;
