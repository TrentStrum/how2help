import { Container, CssBaseline, styled, ThemeProvider, Box } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { queryClient } from '@api-utils/queryClient';
import { Footer } from '@components/Footer/Footer';
import { CustomizationConsumer, CustomizationProvider } from '@themes/customization';

import { createTheme } from '../lib/Themes';
import { AuthProvider } from './context/AuthContext';
import { Appbar } from './features/AppBar/AppBar';
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
	let content;

	if (isMobile) {
		content = (
			<>
				<Outlet />
				{isAuthenticated ? <MobileMenu /> : null}
			</>
		);
	} else {
		content = (
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
				<AuthProvider>
					<CustomizationProvider>
						<CustomizationConsumer>
							{(settings) => {
								const theme = createTheme({
									colorPreset: settings.colorPreset,
									direction: settings.direction,
									paletteMode: settings.paletteMode,
								});

								return (
									<ThemeProvider theme={theme}>
										<CssBaseline />
										<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
											<Container sx={{ maxWidth: 'xl', flex: 1 }}>{content}</Container>
											<Footer />
										</Box>
										<ReactQueryDevtools initialIsOpen={true} />
										<ToastContainer />
									</ThemeProvider>
								);
							}}
						</CustomizationConsumer>
					</CustomizationProvider>
				</AuthProvider>
			</QueryClientProvider>
		</HelmetProvider>
	);
};

export default App;
