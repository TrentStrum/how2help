import { RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import App from '../app/App';
import { LandingPage } from '../app/pages/Landing';
import { CauseProfile } from '../features/cause/components/CauseProfile';
import { OrgDetail } from '../features/organization/OrgDetail';
import { UserDetail } from '../features/user/UserDetail';
import { UserCatalog } from '../features/user/UserCatalog';
import { LoginCover } from '../features/login-cover/LoginCover';
import { CauseCatalog } from '../features/cause/components/CauseCatalog';
import { Error404Page } from '../app/pages/Error404Page';
import { OrgCatalog } from '../features/organization/OrgCatalog';


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
				element: <OrgCatalog />,
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
				element: <CauseCatalog />,
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
				path: '/notFound',
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
