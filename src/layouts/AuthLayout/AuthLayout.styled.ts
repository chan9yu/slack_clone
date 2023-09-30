import styled from '@emotion/styled';

export const Header = styled.header`
	padding: 48px 0 40px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h2`
	color: #1d1c1d;
	text-align: center;
	font-size: 48px;
	font-style: normal;
	font-weight: 700;
`;

export const SubTitle = styled.h5`
	color: #454245;
	text-align: center;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
`;

export const SubTitleStrong = styled.strong`
	font-weight: bold;
`;

export const Form = styled.form`
	margin: 0 auto;
	width: 400px;
	max-width: 400px;
`;

export const Label = styled.label`
	margin-bottom: 16px;

	& > span {
		display: block;
		text-align: left;
		padding-bottom: 8px;
		font-size: 15px;
		cursor: pointer;
		line-height: 1.46666667;
		font-weight: 700;
	}
`;

export const Input = styled.input`
	border-radius: 4px;
	border: 1px solid rgba(1);
	transition:
		border 80ms ease-out,
		box-shadow 80ms ease-out;
	box-sizing: border-box;
	margin: 0 0 20px;
	width: 100%;
	color: rgba(1);
	background-color: rgba(1);
	padding: 12px;
	height: 44px;
	padding-top: 11px;
	padding-bottom: 13px;
	font-size: 18px;
	line-height: 1.33333333;

	&:focus {
		box-shadow:
			0 0 0 1px rgba(1),
			0 0 0 5px rgba(29, 155, 209, 0.3);
	}
`;

export const Button = styled.button`
	margin-bottom: 12px;
	width: 100%;
	max-width: 100%;
	color: #fff;
	background-color: #4a154b;
	border: none;
	font-size: 18px;
	font-weight: 900;
	height: 44px;
	min-width: 96px;
	padding: 0 16px 3px;
	transition: all 80ms linear;
	user-select: none;
	outline: none;
	cursor: pointer;
	border-radius: 4px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

	&:hover {
		background-color: rgba(74, 21, 75, 0.9);
		border: none;
	}

	&:focus {
		box-shadow:
			0 0 0 1px var(rgba(1)),
			0 0 0 5px rgba(29, 155, 209, 0.3);
	}
`;

export const Error = styled.div`
	color: #e01e5a;
	margin: 8px 0 16px;
	font-weight: bold;
`;

export const Success = styled.div`
	color: #2eb67d;
	font-weight: bold;
`;

export const LinkWrapper = styled.div`
	padding-top: 24px;
	font-size: 15px;
	color: #616061;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	font-weight: 400;

	& a {
		color: #1264a3;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Footer = styled.footer`
	margin: auto 0 36px;
	color: #696969;
	font-size: 15px;
	font-weight: 300;
`;
