import { RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import App from '../app/App';
// import { About } from '../app/routes/app/about';
import { LandingPage } from '../app/routes/landing';
import { CauseDetail } from '../features/cause/CauseDetail';
import CauseList from '../features/cause/CauseList';
import { OrgDetail } from '../features/organization/OrgDetail';
import { UserDetail } from '../features/user/UserDetail';
import { UserCatalog } from '../features/user/UserCatalog';
import OrgList from '../features/organization/OrgList';
import { LoginCover } from '../features/login-cover/LoginCover';
import { NewCauseList } from '../features/cause/NewCauseList';

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
				element: <NewCauseList />,
			},
			{
				path: '/cause/:causeId',
				element: <CauseDetail />,
			},
			{
				path: '/login',
				element: <LoginCover />,
			},
			// {
			// 	path: '/about',
			// 	element: ,
			// },
			// {
			// 	path: '/userProfile',
			// 	element: <UserProfile />
			// }
		],
	},
];

export const router = createBrowserRouter(routes);
