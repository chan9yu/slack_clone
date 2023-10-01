import { IconBase, IconBaseProps } from '../IconBase';

const RightArrow = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.3782 4.43433C11.6906 4.74675 11.6906 5.25328 11.3782 5.5657L5.74387 11.2H20.1982C20.64 11.2 20.9982 11.5582 20.9982 12C20.9982 12.4418 20.64 12.8 20.1982 12.8H5.74387L11.3782 18.4343C11.6906 18.7467 11.6906 19.2533 11.3782 19.5657C11.0658 19.8781 10.5592 19.8781 10.2468 19.5657L3.38823 12.7071C2.99771 12.3166 2.99771 11.6834 3.38823 11.2929L10.2468 4.43433C10.5592 4.12191 11.0658 4.12191 11.3782 4.43433Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default RightArrow;
