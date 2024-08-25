import { Container } from '@mui/material';

import { QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { queryClient } from './api/utils/queryClient';
import { Appbar } from './features/components/AppBar';
import { MobileMenu } from './features/components/AppBar/MobileMenu';
import { ThemeContextProvider } from './Themes/ThemeContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';



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
					<ReactQueryDevtools initialIsOpen={true} />
					<ToastContainer />
					<Container sx={{ maxWidth: 'xl' }}>{page}</Container>
				</ThemeContextProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
