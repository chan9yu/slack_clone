import { IconBase, IconBaseProps } from '../IconBase';

const Text = (props: IconBaseProps) => {
	const { width = '24', height = '24', viewBox = '0 0 24 24', color = '#616061', ...rest } = props;

	return (
		<IconBase width={width} height={height} viewBox={viewBox} fill="none" {...rest}>
			<path
				d="M10.4829 12.0835L8.44807 6.853C8.38778 6.69749 8.32447 6.51806 8.25815 6.3147C8.19183 6.10536 8.12853 5.88406 8.06824 5.65079C7.94163 6.13527 7.812 6.53899 7.67936 6.86197L5.64456 12.0835H10.4829ZM14.1365 16.8565H12.7799C12.6232 16.8565 12.4966 16.8176 12.4001 16.7398C12.3036 16.6621 12.2313 16.5634 12.1831 16.4438L10.9712 13.3395H5.15621L3.94437 16.4438C3.90819 16.5514 3.83886 16.6471 3.73637 16.7308C3.63387 16.8146 3.50726 16.8565 3.35654 16.8565H2L7.18197 4H8.95451L14.1365 16.8565Z"
				fill={color}
			/>
			<path
				d="M20.4264 12.7654C19.6848 12.7893 19.0518 12.8491 18.5273 12.9448C18.0088 13.0345 17.5837 13.1541 17.2521 13.3037C16.9266 13.4532 16.6884 13.6296 16.5377 13.833C16.393 14.0363 16.3206 14.2636 16.3206 14.5148C16.3206 14.7541 16.3598 14.9604 16.4382 15.1339C16.5166 15.3073 16.6221 15.4509 16.7547 15.5645C16.8934 15.6722 17.0532 15.7529 17.234 15.8068C17.4209 15.8546 17.6199 15.8785 17.8309 15.8785C18.1143 15.8785 18.3735 15.8516 18.6087 15.7978C18.8438 15.738 19.0639 15.6542 19.2688 15.5466C19.4799 15.4389 19.6788 15.3103 19.8657 15.1608C20.0586 15.0113 20.2455 14.8408 20.4264 14.6494V12.7654ZM15.2264 9.05107C15.7328 8.5666 16.2784 8.20474 16.8633 7.96549C17.4481 7.72625 18.0962 7.60663 18.8076 7.60663C19.3201 7.60663 19.7753 7.69036 20.1732 7.85783C20.5711 8.0253 20.9057 8.25857 21.177 8.55763C21.4483 8.85668 21.6533 9.21854 21.792 9.6432C21.9307 10.0679 22 10.5344 22 11.0428V16.8565H21.2856C21.1288 16.8565 21.0082 16.8325 20.9238 16.7847C20.8394 16.7308 20.7731 16.6292 20.7249 16.4796L20.544 15.6184C20.3028 15.8397 20.0677 16.037 19.8386 16.2105C19.6095 16.378 19.3683 16.5215 19.1151 16.6411C18.8619 16.7548 18.5906 16.8415 18.3012 16.9013C18.0178 16.9671 17.7013 17 17.3516 17C16.9959 17 16.6613 16.9522 16.3478 16.8565C16.0343 16.7548 15.7599 16.6052 15.5248 16.4079C15.2957 16.2105 15.1118 15.9623 14.9731 15.6632C14.8405 15.3582 14.7742 14.9993 14.7742 14.5866C14.7742 14.2277 14.8737 13.8838 15.0726 13.5549C15.2716 13.2199 15.5941 12.9239 16.0403 12.6667C16.4864 12.4095 17.0682 12.2001 17.7857 12.0386C18.5032 11.8712 19.3834 11.7755 20.4264 11.7516V11.0428C20.4264 10.337 20.2727 9.80469 19.9652 9.44582C19.6577 9.08098 19.2085 8.89855 18.6177 8.89855C18.2198 8.89855 17.8852 8.94939 17.6139 9.05107C17.3486 9.14677 17.1165 9.25742 16.9175 9.38302C16.7246 9.50265 16.5558 9.6133 16.4111 9.71498C16.2724 9.81067 16.1337 9.85852 15.9951 9.85852C15.8865 9.85852 15.7931 9.83161 15.7147 9.77778C15.6363 9.71797 15.57 9.64619 15.5158 9.56246L15.2264 9.05107Z"
				fill={color}
			/>
			<path
				d="M2 19.5C2 19.2239 2.22386 19 2.5 19H21.5C21.7761 19 22 19.2239 22 19.5C22 19.7761 21.7761 20 21.5 20H2.5C2.22386 20 2 19.7761 2 19.5Z"
				fill={color}
			/>
		</IconBase>
	);
};

export default Text;