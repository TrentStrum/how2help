import { RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import App from '../app/App';
import { LandingPage } from '../app/pages/Landing';
import { CauseProfile } from '../features/cause/components/CauseProfile';
import { OrgDetail } from '../features/organization/OrgDetail';
import { UserDetail } from '../features/user/UserDetail';
import { UserCatalog } from '../features/user/UserCatalog';
import OrgList from '../features/organization/OrgList';
import { LoginCover } from '../features/login-cover/LoginCover';
import { CauseList } from '../features/cause/components/CauseList';
import { Error404Page } from '../app/pages/Error404Page';


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
				path: '/org',
				element: <OrgList />,
			},
			{
				path: '/org/:orgId',
				element: <OrgDetail />,
			},
			{
				path: '/user',
				element: <UserCatalog />,
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
				element: <CauseProfile />,
			},
			{
				path: '/login',
				element: <LoginCover />,
			},
			{
				path: '/about',
				element: <Error404Page />,
			},
			// {
			// 	path: '/test',
			// 	element: <EventList />,
			// },
		],
	},
];

export const router = createBrowserRouter(routes);
