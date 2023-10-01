import { IconBase, IconBaseProps } from '../IconBase';

const Sidebar = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M17 8.2C17 7.75817 17.3582 7.4 17.8 7.4H18.2C18.6418 7.4 19 7.75817 19 8.2C19 8.64183 18.6418 9 18.2 9H17.8C17.3582 9 17 8.64183 17 8.2Z"
				fill={color}
			/>
			<path
				d="M17.8 15C17.3582 15 17 15.3582 17 15.8C17 16.2418 17.3582 16.6 17.8 16.6H18.2C18.6418 16.6 19 16.2418 19 15.8C19 15.3582 18.6418 15 18.2 15H17.8Z"
				fill={color}
			/>
			<path
				d="M17 11.8C17 11.3582 17.3582 11 17.8 11H18.2C18.6418 11 19 11.3582 19 11.8C19 12.2418 18.6418 12.6 18.2 12.6H17.8C17.3582 12.6 17 12.2418 17 11.8Z"
				fill={color}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18 4C20.2091 4 22 5.79086 22 8V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V8C2 5.79086 3.79086 4 6 4H18ZM15.6 5.6H18C19.3255 5.6 20.4 6.67452 20.4 8V17C20.4 18.3255 19.3255 19.4 18 19.4H15.6V5.6ZM14 19.4H6C4.67452 19.4 3.6 18.3255 3.6 17V8C3.6 6.67452 4.67452 5.6 6 5.6H14V19.4Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Sidebar;
