import { IconBase, IconBaseProps } from '../IconBase';

const Tv = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2 6.55C2 5.14167 3.16795 4 4.6087 4H19.3913C20.832 4 22 5.14167 22 6.55V15.05C22 16.4583 20.832 17.6 19.3913 17.6H12.8696V19.64H15.2174C15.6016 19.64 15.913 19.9444 15.913 20.32C15.913 20.6956 15.6016 21 15.2174 21H8.78261C8.39841 21 8.08696 20.6956 8.08696 20.32C8.08696 19.9444 8.39841 19.64 8.78261 19.64H11.1304V17.6H4.6087C3.16795 17.6 2 16.4583 2 15.05V6.55ZM4.6087 5.36H19.3913C20.0637 5.36 20.6087 5.89278 20.6087 6.55V15.05C20.6087 15.7072 20.0637 16.24 19.3913 16.24H4.6087C3.93635 16.24 3.3913 15.7072 3.3913 15.05V6.55C3.3913 5.89278 3.93635 5.36 4.6087 5.36Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Tv;
