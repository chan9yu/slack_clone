import { IconBase, IconBaseProps } from '../IconBase';

const Eye = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.0919 17.0435C6.711 16.2642 4.63926 14.4952 3.66193 11.7366C3.64919 11.7006 3.63663 11.6644 3.62425 11.6281C3.64068 11.5947 3.65728 11.5615 3.67402 11.5285C4.87232 9.16366 6.87213 7.63232 9.10847 6.93448C10.0447 6.64233 11.0223 6.49626 12 6.49626C12.9777 6.49626 13.9553 6.64233 14.8915 6.93448C17.1279 7.63233 19.1277 9.16366 20.326 11.5285C20.3427 11.5615 20.3593 11.5947 20.3757 11.6281C20.3634 11.6644 20.3508 11.7006 20.3381 11.7366C19.3607 14.4952 17.289 16.2642 14.9081 17.0435C13.9707 17.3503 12.9853 17.5037 12 17.5037C11.0147 17.5037 10.0293 17.3503 9.0919 17.0435ZM9.73272 15.5654C10.3904 15.9688 11.1675 16.2019 12 16.2019C12.8325 16.2019 13.6096 15.9688 14.2673 15.5654C15.4794 14.822 16.2857 13.5003 16.2857 11.9936C16.2857 10.4831 15.4752 9.15849 14.258 8.41616C13.6023 8.0163 12.8286 7.78539 12 7.78539C11.1714 7.78539 10.3977 8.0163 9.74201 8.41616C8.52477 9.15849 7.71429 10.4831 7.71429 11.9936C7.71429 13.5003 8.52065 14.822 9.73272 15.5654ZM22 11.526C21.9433 11.7277 21.8818 11.9252 21.8157 12.1187C18.6841 21.2938 5.31587 21.2938 2.18426 12.1187C2.11823 11.9252 2.05674 11.7277 2 11.526C2.08294 11.3321 2.17026 11.1426 2.26178 10.9573C6.18557 3.01423 17.8144 3.01423 21.7382 10.9573C21.8297 11.1426 21.9171 11.3321 22 11.526ZM12 14.6019C13.5109 14.6019 14.6857 13.4067 14.6857 11.9936C14.6857 10.5805 13.5109 9.38539 12 9.38539C10.4891 9.38539 9.31429 10.5805 9.31429 11.9936C9.31429 13.4067 10.4891 14.6019 12 14.6019Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Eye;
