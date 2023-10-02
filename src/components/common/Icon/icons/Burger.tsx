import { IconBase, IconBaseProps } from '../IconBase';

const Burger = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M5 5.82353C5 5.36871 5.36871 5 5.82353 5H19.1765C19.6313 5 20 5.36871 20 5.82353C20 6.27835 19.6313 6.64706 19.1765 6.64706H5.82353C5.36871 6.64706 5 6.27835 5 5.82353Z"
				fill={color}
			/>
			<path
				d="M5 18.1765C5 17.7216 5.36871 17.3529 5.82353 17.3529H18.7647C19.2195 17.3529 19.5882 17.7216 19.5882 18.1765C19.5882 18.6313 19.2195 19 18.7647 19H5.82353C5.36871 19 5 18.6313 5 18.1765Z"
				fill={color}
			/>
			<path
				d="M20 12C20 11.5452 19.6313 11.1765 19.1765 11.1765H5.82353C5.36871 11.1765 5 11.5452 5 12C5 12.4548 5.36871 12.8235 5.82353 12.8235H19.1765C19.6313 12.8235 20 12.4548 20 12Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Burger;
