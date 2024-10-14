import { RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import App from '@app/App';
import { OrganizationProfilePage } from '@app/pages/OrganizationProfilePage';
import { AboutPage } from '@pages/AboutPage';
import { CauseCatalogPage } from '@pages/CauseCatalogPage';
import { CauseProfilePage } from '@pages/CauseProfilePage';
import { Error404Page } from '@pages/Error404Page';
import { EventCatalogPage } from '@pages/EventCatalogPage';
import { EventProfilePage } from '@pages/EventProfilePage';
import { LandingPage } from '@pages/LandingPage';
import { LoginPage } from '@pages/LoginPage';
import { OrganizationCatalogPage } from '@pages/OrganizationCatalogPage';
import { RegisterPage } from '@pages/RegisterPage';
import { UserCatalogPage } from '@pages/UserCatalogPage';
import { UserProfilePage } from '@pages/UserProfilePage';

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <LandingPage />,
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
			{
				path: '/cause',
				element: <CauseCatalogPage />,
			},
			{
				path: '/cause/:causeId',
				element: <CauseProfilePage />,
			},
			{
				path: '/notFound',
				element: <Error404Page />,
			},
			{
				path: '/event',
				element: <EventCatalogPage />,
			},
			{
				path: '/event/:eventId',
				element: <EventProfilePage />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/org',
				element: <OrganizationCatalogPage />,
			},
			{
				path: '/org/:orgId',
				element: <OrganizationProfilePage />,
			},
			{
				path: '/register',
				element: <RegisterPage />,
			},
			{
				path: '/user',
				element: <UserCatalogPage />,
			},
			{
				path: '/user/:userId',
				element: <UserProfilePage />,
			},
		],
	},
];

export const router = createBrowserRouter(routes);
