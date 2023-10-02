import { IconBase, IconBaseProps } from '../IconBase';

const Result = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<rect width="24" height="24" fill="white" />
			<g clipPath="url(#clip0_360_817)">
				<path d="M3 5H18V7H3V5Z" fill={color} />
				<path d="M3 9H9V11H3V9Z" fill={color} />
				<path d="M3 13H9V15H3V13Z" fill={color} />
				<path d="M3 17H9V19H3V17Z" fill={color} />
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M18.6559 16.1571C20.124 14.4203 20.0103 11.8158 18.3506 10.2155C16.6233 8.54984 13.8754 8.60267 12.2131 10.3334C10.5507 12.0642 10.6035 14.8175 12.3308 16.4832C13.9274 18.0227 16.3958 18.0941 18.073 16.7294L20.3093 18.8858C20.4688 19.0396 20.7216 19.0378 20.879 18.8818C21.0419 18.7203 21.0401 18.4561 20.8749 18.2968L18.6559 16.1571ZM17.7719 10.818C19.1671 12.1634 19.2097 14.3873 17.867 15.7853C16.5243 17.1833 14.3048 17.2259 12.9095 15.8806C11.5143 14.5352 11.4718 12.3113 12.8145 10.9133C14.1571 9.51535 16.3767 9.47269 17.7719 10.818Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_360_817">
					<rect width="18" height="14" fill="white" transform="translate(3 5)" />
				</clipPath>
			</defs>
		</IconBase>
	);
};

export default Result;
