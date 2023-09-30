import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ROUTER_PATH } from '../constants';
import { AuthLayout, RootLayout } from '../layouts';
import { ErrorPage } from '../pages';
import { authRoutes } from './routes';

/** 공통 레이아웃, 에러 페이지 설정 */
const routeObject: RouteObject[] = [
	{
		path: ROUTER_PATH.ROOT,
		element: <RootLayout />,
		errorElement: <ErrorPage />
		// children: routes
	},
	{
		path: ROUTER_PATH.AUTH,
		element: <AuthLayout />,
		errorElement: <ErrorPage />,
		children: authRoutes
	}
];

const Router = () => <RouterProvider router={createBrowserRouter(routeObject)} />;

export default Router;
