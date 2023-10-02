import { IconBase, IconBaseProps } from '../IconBase';

const Page = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.30773 5.38776C6.25011 5.38776 5.39273 6.24207 5.39273 7.29592V17.7041C5.39273 18.7579 6.25011 19.6122 7.30773 19.6122H11.7775V14.4825C11.7775 13.6203 12.479 12.9213 13.3444 12.9213H18.6073V7.29592C18.6073 6.24207 17.7499 5.38776 16.6923 5.38776H7.30773ZM17.6021 14.309H13.3444C13.2482 14.309 13.1703 14.3867 13.1703 14.4825V18.6508L17.6021 14.309ZM4 7.29592C4 5.47563 5.48092 4 7.30773 4H16.6923C18.5191 4 20 5.47563 20 7.29592V13.906L12.7589 21H7.30773C5.48092 21 4 19.5244 4 17.7041V7.29592Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Page;
