import { lazy } from 'react';

export const LoginPage = lazy(() => import('./auth/LoginPage'));
export const SignupPage = lazy(() => import('./auth/SignupPage'));
export const ErrorPage = lazy(() => import('./root/ErrorPage'));
