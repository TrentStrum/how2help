import { RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { CauseDetail } from '../../features/utils/CauseDetail';

import CauseList from '../../features/cause/CauseList';
import { OrgDetail } from '../../features/organization/OrgDetail';
import { UserDetail } from '../../features/user/UserDetail';
import OrgList from '../../features/organization/OrgList';
import { About } from '../routes/app/about';
import { LandingPage } from '../routes/landing';



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
				path: '/catalog/org',
				element: <OrgList />
			},
			{
				path: '/catalog/org/:orgId',
				element: <OrgDetail />,
			},
			{
				path: '/user/:userId',
				element: <UserDetail />,
			},
			{
				path: '/catalog/cause',
				element: <CauseList />,
			},
			{
				path: '/catalog/cause/:causeId',
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
