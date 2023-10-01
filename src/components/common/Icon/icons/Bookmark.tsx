import { IconBase, IconBaseProps } from '../IconBase';

const Bookmark = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.66667 5.51028C8.03548 5.51028 7.52381 6.01741 7.52381 6.64299V18.118L11.1544 14.7533C11.6303 14.3122 12.3697 14.3122 12.8456 14.7533L16.4762 18.118V6.64299C16.4762 6.01741 15.9645 5.51028 15.3333 5.51028H8.66667ZM6 6.64299C6 5.18331 7.19391 4 8.66667 4H15.3333C16.8061 4 18 5.18331 18 6.64299V18.7705C18 19.844 16.7074 20.4 15.9163 19.6668L12 16.0373L8.08371 19.6668C7.29257 20.4 6 19.844 6 18.7705V6.64299Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Bookmark;
