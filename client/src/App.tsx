import { Container } from '@mui/material';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { queryClient } from '../api/queryClient';
import { ThemeContextProvider } from './app/Themes/ThemeContext';
import { Appbar } from './app/components/AppBar';
import { MobileMenu } from './app/components/AppBar/MobileMenu';

// const queryClient = new QueryClient();

function App() {
	const [isMobile, setIsMobile] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
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

	let page;

	function handleAuthentication() {
		setIsAuthenticated(!isAuthenticated);
	}

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
			<ThemeContextProvider>
				<QueryClientProvider client={queryClient}>
					<ReactQueryDevtools initialIsOpen={true} />
					<ToastContainer />
					<Container sx={{ maxWidth: 'xl' }}>{page}</Container>
				</QueryClientProvider>
			</ThemeContextProvider>
		</>
	);
}

export default App;
