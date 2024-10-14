import { Container, CssBaseline, styled, ThemeProvider } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { queryClient } from '@api-utils/queryClient';
import { CustomizationConsumer, CustomizationProvider } from '@themes/customization';

import { createTheme } from '../lib/Themes';
import { Appbar } from './features/AppBar';
import { MobileMenu } from './features/AppBar/mobileMenu';

const App = () => {
	const [isMobile, setIsMobile] = useState(false);
	const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

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
				<Offset />
				<Outlet />
			</>
		);
	}

	const helmetContext = {};

	return (
		<HelmetProvider context={helmetContext}>
			<QueryClientProvider client={queryClient}>
				<CustomizationProvider>
					<CustomizationConsumer>
						{(settings) => {
							if (!settings.isInitialized) {
								// return null
							}
							const theme = createTheme({
								colorPreset: settings.colorPreset,
								direction: settings.direction,
								paletteMode: settings.paletteMode,
							});

							return (
								<ThemeProvider theme={theme}>
									<CssBaseline />
									<ReactQueryDevtools initialIsOpen={true} />
									<Container sx={{ maxWidth: 'xl' }}>{page}</Container>
									<ToastContainer />
								</ThemeProvider>
							);
						}}
					</CustomizationConsumer>
				</CustomizationProvider>
			</QueryClientProvider>
		</HelmetProvider>
	);
};

export default App;
