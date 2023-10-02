import { IconBase, IconBaseProps } from '../IconBase';

const SearchCancel = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 21C16.9705 21 21 16.9705 21 12C21 7.02944 16.9705 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9705 7.02944 21 12 21ZM15.5668 15.5668C15.7522 15.3814 15.7522 15.0808 15.5668 14.8954L12.6714 12L15.5668 9.10457C15.7523 8.91917 15.7523 8.61857 15.5668 8.43316C15.3814 8.24776 15.0808 8.24776 14.8954 8.43316L12 11.3286L9.10457 8.43316C8.91916 8.24776 8.61857 8.24776 8.43316 8.43316C8.24776 8.61857 8.24776 8.91916 8.43316 9.10457L11.3286 12L8.43316 14.8954C8.24777 15.0808 8.24777 15.3814 8.43317 15.5668C8.61857 15.7523 8.91917 15.7523 9.10457 15.5668L12 12.6714L14.8954 15.5668C15.0808 15.7523 15.3814 15.7523 15.5668 15.5668Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default SearchCancel;
