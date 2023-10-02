import { IconBase, IconBaseProps } from '../IconBase';

const Mobile = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.33215 3.15991C7.30714 2.75113 8.29436 3.18557 8.90107 3.79238L11.1405 6.03217C12.1754 7.06725 12.2667 8.71509 11.3524 9.85814L10.996 10.3037C10.8553 10.4796 10.8693 10.7331 11.0286 10.8923L13.4968 13.361C13.656 13.5202 13.9095 13.5342 14.0853 13.3936L14.437 13.1121C15.6305 12.1572 17.3627 12.3043 18.3781 13.4468L20.3045 15.6144C21.1218 16.534 21.3496 18.0615 20.2669 19.0289C18.7973 20.3419 16.2957 21.6085 13.5183 20.6825L13.4999 20.6764L13.4818 20.6691C11.9754 20.0665 9.85523 18.4715 7.91331 16.5154C5.96294 14.5507 4.09994 12.1292 3.16968 9.80311L3.15297 9.76134L3.14206 9.71769C2.85976 8.5883 3.00383 7.23641 3.52404 6.03937C4.04719 4.83556 4.97825 3.72754 6.33215 3.15991ZM7.96368 4.72993C7.58688 4.35307 7.1524 4.25369 6.84465 4.38272C5.87 4.79134 5.15727 5.60736 4.73984 6.5679C4.32676 7.51843 4.125 8.625 4.41792 9.35383C5.26158 11.4355 6.97832 13.6917 8.85405 15.5812C10.7421 17.4831 12.6998 18.922 13.9561 19.4308C16.0969 20.1352 18.105 19.1826 19.3837 18.0401C19.7635 17.7008 19.7993 17.0416 19.3137 16.4953L17.3873 14.3277C16.8405 13.7125 15.9078 13.6333 15.2652 14.1475L14.9134 14.4289C14.2101 14.9916 13.1962 14.9355 12.5594 14.2985L10.0912 11.8299C9.45429 11.1929 9.39813 10.1789 9.96078 9.47543L10.3172 9.02986C10.8095 8.41437 10.7604 7.52707 10.2031 6.96972L7.96368 4.72993Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Mobile;