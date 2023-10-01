import { IconBase, IconBaseProps } from '../IconBase';

const Privacy = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.72727 10.12V8.76C7.72727 6.13112 9.8641 4 12.5 4C15.1359 4 17.2727 6.13112 17.2727 8.76V10.12C18.779 10.12 20 11.3378 20 12.84V18.28C20 19.7822 18.779 21 17.2727 21H7.72727C6.22104 21 5 19.7822 5 18.28V12.84C5 11.3378 6.22104 10.12 7.72727 10.12ZM9.09091 8.76C9.09091 6.88223 10.6172 5.36 12.5 5.36C14.3828 5.36 15.9091 6.88223 15.9091 8.76V10.12H9.09091V8.76ZM6.5 12.84C6.5 12.164 7.04947 11.616 7.72727 11.616H17.2727C17.9505 11.616 18.5 12.164 18.5 12.84V18.28C18.5 18.956 17.9505 19.504 17.2727 19.504H7.72727C7.04947 19.504 6.5 18.956 6.5 18.28V12.84Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Privacy;
