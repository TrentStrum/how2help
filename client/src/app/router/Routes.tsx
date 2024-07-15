import { RouteObject, createBrowserRouter } from 'react-router-dom';

import App from '../../App';
import { About } from '../pages/About';
import { LandingPage } from '../pages/Landing';
import { LoginForm } from '../components/Login';


import OrgList from '../components/OrgList';
import UserList from '../components/UserList';
import { OrgDetail } from '../components/OrgDetail';
import { UserDetail } from '../components/UserDetail';
import { CauseDetail } from '../components/CauseDetail';
import CauseList from '../components/CauseList';
import { UserProfile } from '../pages/UserProfile';

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
			{
				path: '/auth',
				element: <LoginForm />,
			},
			{
				path: '/userProfile',
				element: <UserProfile />
			}
		],
	},
];

export const router = createBrowserRouter(routes);
