import { IconBase, IconBaseProps } from '../IconBase';

const StrikeThrough = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M14.9439 7.1413C15.0293 7.07609 15.111 6.97826 15.1893 6.84783L15.7973 5.63043C15.2639 5.1087 14.6275 4.70652 13.8879 4.42391C13.1555 4.1413 12.3484 4 11.4666 4C10.6844 4 9.98748 4.12319 9.37592 4.36957C8.76437 4.61594 8.24881 4.94565 7.82926 5.3587C7.41681 5.76449 7.10037 6.23188 6.87992 6.76087C6.66659 7.28986 6.55992 7.83696 6.55992 8.40217C6.55992 9.11232 6.66303 9.70652 6.86926 10.1848C7.00022 10.4839 7.157 10.7538 7.33959 10.9945H12.7756C12.6811 10.9591 12.5861 10.9247 12.4906 10.8913C12.0426 10.7319 11.6017 10.5833 11.1679 10.4457C10.7341 10.3007 10.3466 10.1341 10.0053 9.94565C9.67103 9.75725 9.40081 9.53261 9.19459 9.27174C8.98837 9.00362 8.88526 8.67029 8.88526 8.27174C8.88526 7.96014 8.93859 7.67391 9.04526 7.41304C9.15903 7.14493 9.32614 6.91304 9.54659 6.71739C9.76703 6.52174 10.0373 6.36957 10.3573 6.26087C10.6844 6.15217 11.0613 6.09783 11.4879 6.09783C11.9501 6.09783 12.3484 6.15942 12.6826 6.28261C13.0168 6.39855 13.3048 6.52899 13.5466 6.67391C13.7955 6.81159 14.0017 6.93841 14.1653 7.05435C14.3359 7.17029 14.4888 7.22826 14.6239 7.22826C14.7519 7.22826 14.8586 7.19928 14.9439 7.1413Z"
				fill={color}
			/>
			<path
				d="M16.0739 14.3912H13.5346C13.6919 14.6502 13.7706 14.9726 13.7706 15.3587C13.7706 16.1486 13.5217 16.7681 13.0239 17.2174C12.5333 17.6667 11.8364 17.8913 10.9333 17.8913C10.3786 17.8913 9.90214 17.8152 9.50392 17.663C9.1057 17.5036 8.76437 17.3333 8.47992 17.1522C8.20259 16.9638 7.96437 16.7935 7.76526 16.6413C7.56614 16.4819 7.38481 16.4022 7.22126 16.4022C7.10037 16.4022 6.99014 16.4312 6.89059 16.4891C6.79103 16.5471 6.70926 16.6268 6.64526 16.7283L5.91992 17.9457C6.21148 18.2572 6.54214 18.5399 6.91192 18.7935C7.2817 19.0471 7.67637 19.2645 8.09592 19.4457C8.52259 19.6196 8.96703 19.7536 9.42926 19.8478C9.89859 19.9493 10.3786 20 10.8693 20C11.7013 20 12.4408 19.8696 13.0879 19.6087C13.7421 19.3478 14.2897 18.9928 14.7306 18.5435C15.1786 18.087 15.5199 17.5543 15.7546 16.9457C15.9893 16.337 16.1066 15.6848 16.1066 14.9891C16.1066 14.7795 16.0957 14.5802 16.0739 14.3912Z"
				fill={color}
			/>
			<path d="M4 11.6738H20V13.0325H4V11.6738Z" fill={color} />
		</IconBase>
	);
};

export default StrikeThrough;
