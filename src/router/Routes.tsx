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
	ActivityProfilePage,
	ActivityCatalogPage,
} from '@app/pages';

// import { ProtectedRoute } from './ProtectedRoutes';

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
				path: '/notFound',
				element: <Error404Page />,
			},
			{
				path: '/register',
				element: <RegisterPage />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
			// Protected routes
			// {
			// 	element: (
			// 		<ProtectedRoute>
			// 			<Outlet />
			// 		</ProtectedRoute>
			// 	),
			// 	children: [
			{
				path: '/cause',
				element: <CauseCatalogPage />,
			},
			{
				path: '/cause/:causeId',
				element: <CauseProfilePage />,
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
				path: '/activity',
				element: <ActivityCatalogPage />,
			},
			{
				path: '/activity/:activityId',
				element: <ActivityProfilePage />,
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
// },
// ];

export const router = createBrowserRouter(routes);
