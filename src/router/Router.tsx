import { Navigate, RouteObject, RouterProvider, createHashRouter } from 'react-router-dom';

import { ROUTER_PATH } from '../constants';
import { AuthLayout } from '../layouts';
import * as P from '../pages';

const authRouteObject: RouteObject[] = [
	{
		path: ROUTER_PATH.AUTH_LOGIN,
		element: <P.LoginPage />
	},
	{
		path: ROUTER_PATH.AUTH_SIGNUP,
		element: <P.SignupPage />
	}
];

const routeObject: RouteObject[] = [
	{
		path: ROUTER_PATH.ROOT,
		element: <Navigate to={ROUTER_PATH.AUTH_LOGIN} />,
		errorElement: <P.ErrorPage />
	},
	{
		path: ROUTER_PATH.AUTH,
		element: <AuthLayout />,
		children: authRouteObject
	}
];

const Router = () => <RouterProvider router={createHashRouter(routeObject)} />;

export default Router;
