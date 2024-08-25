

import { RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { CauseDetail } from '../features/utils/CauseDetail';


import { About } from '../pages/About';
import OrgList from '../pages/Catalog/OrgList';
import { LandingPage } from '../pages/Landing';
import CauseList from '../features/Cause/CauseList';
import { OrgDetail } from '../features/Organizations/OrgDetail';
import { UserDetail } from '../features/Users/UserDetail';
import UserList from '../features/Users/UserList';

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
				path: '/catalog',
				element: <OrgList />,
			},
			{
				path: '/org/:orgId',
				element: <OrgDetail />,
			},
			{
				path: '/user',
				element: <UserList />,
			},
			{
				path: '/user/:userId',
				element: <UserDetail />,
			},
			{
				path: '/cause',
				element: <CauseList />,
			},
			{
				path: '/cause/:causeId',
				element: <CauseDetail />,
			},
			{
				path: '/about',
				element: <About />,
			},
			// {
			// 	path: '/userProfile',
			// 	element: <UserProfile />
			// }
		],
	},
];

export const router = createBrowserRouter(routes);
