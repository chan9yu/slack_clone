import { IconBase, IconBaseProps } from '../IconBase';

const Help = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 19.6286C16.2131 19.6286 19.6286 16.2131 19.6286 12C19.6286 7.78686 16.2131 4.37143 12 4.37143C7.78686 4.37143 4.37143 7.78686 4.37143 12C4.37143 16.2131 7.78686 19.6286 12 19.6286ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
				fill={color}
			/>
			<path
				d="M10.4024 10.4005C10.2021 9.46084 10.982 8.57143 12.0175 8.57143C12.9057 8.57143 13.6299 9.24806 13.6299 10.0714C13.6299 10.5436 13.393 10.9881 12.9905 11.2714L12.0009 11.9679C11.5888 12.2579 11.3463 12.7131 11.3463 13.1964V14.4643H12.7164V13.1964C12.7164 13.1177 12.7559 13.0436 12.823 12.9964L13.8125 12.3C14.5601 11.7739 15 10.9483 15 10.0714C15 8.52786 13.6516 7.28571 12.0175 7.28571C10.1317 7.28571 8.68622 8.90421 9.05886 10.6526L9.07604 10.7332C9.15024 11.0814 9.51115 11.3071 9.88216 11.2375C10.2532 11.1679 10.4938 10.8292 10.4196 10.4811L10.4024 10.4005Z"
				fill={color}
			/>
			<path
				d="M12.0314 17.5714C12.662 17.5714 13.1731 17.0917 13.1731 16.5C13.1731 15.9083 12.662 15.4286 12.0314 15.4286C11.4008 15.4286 10.8896 15.9083 10.8896 16.5C10.8896 17.0917 11.4008 17.5714 12.0314 17.5714Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Help;