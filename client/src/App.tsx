import { Container } from '@mui/material';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { queryClient } from '../api/utils/queryClient';
import { ThemeContextProvider } from './app/Themes/ThemeContext';
import { Appbar } from './app/components/AppBar';
import { MobileMenu } from './app/components/AppBar/MobileMenu';
import AuthProvider from './auth/AuthProvider';

function App() {
	const [isMobile, setIsMobile] = useState(false);
	//const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth < 834) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const isAuthenticated = false;
	let page;

	if (isMobile) {
		page = (
			<>
				<Outlet />
				{isAuthenticated ? <MobileMenu /> : null}
			</>
		);
	} else {
		page = (
			<>
				{isAuthenticated ? null : <Appbar />}
				<Outlet />
			</>
		);
	}

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ThemeContextProvider>
					<AuthProvider>
						<ReactQueryDevtools initialIsOpen={true} />
						<ToastContainer />
						<Container sx={{ maxWidth: 'xl' }}>{page}</Container>
					</AuthProvider>
				</ThemeContextProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
