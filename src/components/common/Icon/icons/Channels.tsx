import { IconBase, IconBaseProps } from '../IconBase';

const Channels = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M8.2371 8.0613H9.96216C9.9585 8.14299 9.95665 8.22514 9.95665 8.30769C9.95665 8.81907 10.0278 9.31427 10.1609 9.78437H7.82904L6.77976 14.2151H10.0636L10.7816 11.183C11.15 11.7728 11.6282 12.2902 12.1886 12.7083L11.8318 14.2151H14.63V15.9382H11.4237L10.4618 20H8.69365L9.65554 15.9382H6.37174L5.40984 20H3.64165L4.60355 15.9382H2V14.2151H5.01157L6.06084 9.78437H3.263V8.0613H6.46887L7.43065 4H9.19884L8.2371 8.0613Z"
				fill={color}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15.6401 12.6154C16.6331 12.6154 17.5496 12.2964 18.2875 11.7578L21.1069 14.5053L22 13.635L19.1806 10.8875C19.7333 10.1684 20.0606 9.27528 20.0606 8.30769C20.0606 5.9286 18.0815 4 15.6401 4C13.1987 4 11.2196 5.9286 11.2196 8.30769C11.2196 10.6868 13.1987 12.6154 15.6401 12.6154ZM15.6401 11.1384C17.2445 11.1384 18.545 9.87109 18.545 8.30769C18.545 6.74429 17.2445 5.47694 15.6401 5.47694C14.0358 5.47694 12.7353 6.74429 12.7353 8.30769C12.7353 9.87109 14.0358 11.1384 15.6401 11.1384Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Channels;
