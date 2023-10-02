import { IconBase, IconBaseProps } from '../IconBase';

const Canvas = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.73302 18.2449H6.47312C4.55497 18.2449 3 16.6825 3 14.7551V6.4898C3 4.56243 4.55497 3 6.47312 3H15.6989C17.6171 3 19.172 4.56244 19.172 6.4898V7.08905C20.2604 7.6783 21 8.83399 21 10.1633V15.0594L15.0878 21H10.129C8.46171 21 7.06879 19.8195 6.73302 18.2449ZM4.46237 6.4898C4.46237 5.37396 5.36261 4.46939 6.47312 4.46939H15.6989C16.8094 4.46939 17.7097 5.37396 17.7097 6.4898V6.67822C17.6491 6.67507 17.5882 6.67347 17.5269 6.67347H10.129C8.21088 6.67347 6.65591 8.23591 6.65591 10.1633V16.7755H6.47312C5.36261 16.7755 4.46237 15.8709 4.46237 14.7551V6.4898ZM8.11828 10.1633C8.11828 9.04743 9.01853 8.14286 10.129 8.14286H17.5269C18.6374 8.14286 19.5376 9.04743 19.5376 10.1633V14.0204H15.6989C14.7903 14.0204 14.0538 14.7605 14.0538 15.6735V19.5306H10.129C9.01853 19.5306 8.11828 18.626 8.11828 17.5102V10.1633ZM15.6989 15.4898H18.5036L15.5161 18.4916V15.6735C15.5161 15.572 15.598 15.4898 15.6989 15.4898Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Canvas;
