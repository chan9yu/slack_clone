import { IconBase, IconBaseProps } from '../IconBase';

const LeftArrow = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.6325 4.43433C12.9449 4.12191 13.4514 4.12191 13.7638 4.43433L20.6224 11.2929C21.0129 11.6834 21.0129 12.3166 20.6224 12.7071L13.7638 19.5657C13.4514 19.8781 12.9449 19.8781 12.6325 19.5657C12.32 19.2533 12.32 18.7467 12.6325 18.4343L18.2668 12.8H3.81245C3.37062 12.8 3.01245 12.4418 3.01245 12C3.01245 11.5582 3.37062 11.2 3.81245 11.2H18.2668L12.6325 5.5657C12.32 5.25328 12.32 4.74675 12.6325 4.43433Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default LeftArrow;
