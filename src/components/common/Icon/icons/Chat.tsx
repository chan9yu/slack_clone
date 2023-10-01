import { IconBase, IconBaseProps } from '../IconBase';

const Chat = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.47505 18.4855L4.81985 18.7545C4.92516 18.2279 4.83674 17.7275 4.66456 17.3184C4.47622 16.8708 4.37143 16.3779 4.37143 15.8571C4.37143 13.7742 6.05996 12.0857 8.14287 12.0857C10.2258 12.0857 11.9143 13.7742 11.9143 15.8571C11.9143 17.94 10.2258 19.6286 8.14287 19.6286C7.62206 19.6286 7.12924 19.5238 6.68164 19.3354C6.27247 19.1633 5.77211 19.0748 5.24554 19.1802L5.51449 20.525C5.72822 20.4822 5.94884 20.515 6.14974 20.5995C6.7627 20.8574 7.43613 21 8.14287 21C10.9832 21 13.2857 18.6975 13.2857 15.8571C13.2857 13.0168 10.9832 10.7143 8.14287 10.7143C5.30254 10.7143 3 13.0168 3 15.8571C3 16.5639 3.14256 17.2373 3.40048 17.8503C3.48502 18.0512 3.5178 18.2718 3.47505 18.4855ZM4.71343 19.2866L5.24554 19.1802L5.51449 20.525L3.68562 20.8907C3.3429 20.9593 3.04073 20.6571 3.10928 20.3144L3.47505 18.4855L4.81985 18.7545L4.71343 19.2866Z"
				fill={color}
			/>
			<path
				d="M19.7592 11.1429C19.7592 12.0936 19.5676 12.9965 19.2222 13.8174C19.0091 14.3239 18.9068 14.9263 19.0311 15.5478L19.4734 17.7591L17.2621 17.3168C16.6406 17.1925 16.0382 17.2948 15.5317 17.5079C15.3109 17.6008 15.0842 17.6826 14.8523 17.7525C14.7542 18.2324 14.6089 18.6951 14.4215 19.1356C14.974 19.0281 15.5065 18.8647 16.0129 18.6516C16.331 18.5178 16.6803 18.4659 17.0187 18.5336L19.9144 19.1127C20.4571 19.2212 20.9355 18.7428 20.827 18.2002L20.2478 15.3044C20.1802 14.966 20.2321 14.6167 20.3659 14.2986C20.7743 13.3281 21 12.2619 21 11.1429C21 6.64568 17.3543 3 12.8571 3C8.89504 3 5.59387 5.82974 4.86439 9.57846C5.30499 9.39102 5.76783 9.24572 6.24786 9.14763C7.10376 6.30854 9.73897 4.24082 12.8571 4.24082C16.669 4.24082 19.7592 7.33097 19.7592 11.1429Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Chat;