import { IconBase, IconBaseProps } from '../IconBase';

const EmptyBox = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 7.04762C4 5.36446 5.36446 4 7.04762 4H16.9524C18.6356 4 20 5.36446 20 7.04762V16.9524C20 18.6356 18.6356 20 16.9524 20H7.04762C5.36446 20 4 18.6356 4 16.9524V7.04762ZM7.04762 5.21906H16.9524C17.9623 5.21906 18.781 6.03772 18.781 7.04762V16.9524C18.781 17.9623 17.9623 18.781 16.9524 18.781H7.04762C6.03772 18.781 5.21906 17.9623 5.21906 16.9524V7.04762C5.21906 6.03772 6.03772 5.21906 7.04762 5.21906Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default EmptyBox;
