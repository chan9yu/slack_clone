import { Helmet } from 'react-helmet-async';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { Flex, Logo, Text } from '../../components';
import { ROUTER_PATH } from '../../constants';
import * as S from './AuthLayout.styled';

const authData = {
	[ROUTER_PATH.AUTH_LOGIN]: {
		title: '이메일로 로그인해 보세요',
		subTitle: { bold: '직장에서 사용하는 이메일 주소', regular: '로 로그인하는 걸 추천드려요.' },
		linkLabel: 'Slack을 처음 사용하시나요?',
		linkText: '계정 생성',
		linkTo: ROUTER_PATH.AUTH_SIGNUP
	},
	[ROUTER_PATH.AUTH_SIGNUP]: {
		title: '먼저 이메일부터 입력해 보세요',
		subTitle: { bold: '직장에서 사용하는 이메일 주소', regular: '로 로그인하는 걸 추천드려요.' },
		linkLabel: '이미 Slack을 사용하고 있나요?',
		linkText: '기존 워크스페이스에 로그인',
		linkTo: ROUTER_PATH.AUTH_LOGIN
	}
};

const currentYear = new Date().getFullYear();

const AuthLayout = () => {
	const { pathname } = useLocation();

	const {
		title,
		subTitle: { bold: subTitleBold, regular: subTitleRegular },
		linkLabel,
		linkText,
		linkTo
	} = authData[pathname as keyof typeof authData];

	return (
		<>
			<Helmet>
				<title>로그인 | Slack</title>
			</Helmet>
			<Flex alignItems="center" direction="column" fullHeight>
				<S.Header>
					<Logo />
				</S.Header>
				<Flex alignItems="center" direction="column" gap="16px" padding="0 0 32px">
					<S.Title>{title}</S.Title>
					<Flex>
						<Text color="#454245" weight="bold">
							{subTitleBold}
						</Text>
						<Text color="#454245">{subTitleRegular}</Text>
					</Flex>
				</Flex>
				<Outlet />
				<S.LinkWrapper>
					{linkLabel}
					<Link to={linkTo}>{linkText}</Link>
				</S.LinkWrapper>
				<S.Footer>&copy;{currentYear} Chan9yu. All rights reserved.</S.Footer>
			</Flex>
		</>
	);
};

export default AuthLayout;
