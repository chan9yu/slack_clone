import { IconBase, IconBaseProps } from '../IconBase';

const CheckMark = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M8.28448 11.4625L10.6424 13.8591C10.7082 13.926 10.8148 13.926 10.8806 13.8591L15.7155 8.9449C16.0575 8.5973 16.612 8.5973 16.954 8.94493C17.296 9.29254 17.296 9.8561 16.954 10.2037L11.1556 16.0973C10.9379 16.3185 10.5851 16.3185 10.3674 16.0973L7.04598 12.7213C6.70398 12.3737 6.70398 11.8101 7.04598 11.4625C7.38797 11.1149 7.94249 11.1149 8.28448 11.4625Z"
				fill={color}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3 6.42857C3 4.53502 4.53502 3 6.42857 3H17.5715C19.465 3 21 4.53502 21 6.42857V17.5714C21 19.465 19.465 21 17.5715 21H6.42857C4.53502 21 3 19.465 3 17.5714V6.42857ZM6.42857 4.37144H17.5715C18.7076 4.37144 19.6286 5.29244 19.6286 6.42857V17.5714C19.6286 18.7076 18.7076 19.6286 17.5715 19.6286H6.42857C5.29244 19.6286 4.37144 18.7076 4.37144 17.5714V6.42857C4.37144 5.29244 5.29244 4.37144 6.42857 4.37144Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default CheckMark;
