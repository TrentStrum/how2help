import { RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import App from '@app/App';
import {
	AboutPage,
	CauseCatalogPage,
	CauseProfilePage,
	Error404Page,
	EventCatalogPage,
	EventProfilePage,
	LandingPage,
	LoginPage,
	OrganizationCatalogPage,
	OrganizationProfilePage,
	RegisterPage,
	UserCatalogPage,
	UserProfilePage,
} from '@app/pages';

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
