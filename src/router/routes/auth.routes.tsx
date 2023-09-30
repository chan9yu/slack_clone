import { RouteObject } from 'react-router-dom';

import { ROUTER_PATH } from '../../constants';
import { LoginPage, SignupPage } from '../../pages';

export const authRoutes: RouteObject[] = [
	{
		path: ROUTER_PATH.AUTH_LOGIN,
		element: <LoginPage />
	},
	{
		path: ROUTER_PATH.AUTH_SIGNUP,
		element: <SignupPage />
	}
];
