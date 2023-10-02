import { IconBase, IconBaseProps } from '../IconBase';

const Search = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.7807 15.8828C19.4232 12.7565 19.2185 8.06845 16.2311 5.18784C13.1219 2.18972 8.1757 2.2848 5.18351 5.40019C2.19132 8.51559 2.28621 13.4716 5.39545 16.4697C8.26926 19.2408 12.7124 19.3694 15.7314 16.913L19.7567 20.7944C20.0438 21.0713 20.4989 21.0681 20.7822 20.7873C21.0754 20.4966 21.0722 20.0209 20.7749 19.7342L16.7807 15.8828ZM15.1894 6.27248C17.7008 8.69412 17.7774 12.6972 15.3606 15.2135C12.9437 17.7299 8.94859 17.8067 6.43719 15.385C3.9258 12.9634 3.84916 8.96037 6.26601 6.444C8.68286 3.92763 12.678 3.85084 15.1894 6.27248Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Search;
