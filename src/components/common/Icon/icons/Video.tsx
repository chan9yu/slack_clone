import { IconBase, IconBaseProps } from '../IconBase';

const Video = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15.4418 12.8242V16.2308C15.4418 17.0804 14.7036 17.7692 13.7931 17.7692H4.96767C4.05711 17.7692 3.31896 17.0804 3.31896 16.2308V7.76923C3.31896 6.91956 4.05711 6.23077 4.96767 6.23077H13.7931C14.7036 6.23077 15.4418 6.91956 15.4418 7.76923V10.3516L20.0814 8.05933C20.3495 7.97132 20.6304 8.15695 20.6304 8.42215L20.681 14.7893C20.681 15.0767 20.3556 15.2626 20.0814 15.1319L15.4418 12.8242ZM16.7608 8.29412V7.76923C16.7608 6.23983 15.4321 5 13.7931 5H4.96767C3.32867 5 2 6.23983 2 7.76923V16.2308C2 17.7602 3.32867 19 4.96767 19H13.7931C15.4321 19 16.7608 17.7602 16.7608 16.2308V14.8347L19.4815 16.228C20.6334 16.7769 22 15.9962 22 14.7893L21.9493 8.42215C21.9493 7.3083 20.7697 6.52867 19.6437 6.89832L16.7608 8.29412Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Video;
