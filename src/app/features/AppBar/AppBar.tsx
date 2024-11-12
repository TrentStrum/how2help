import {
	AppBar,
	Box,
	Button,
	Container,
	Grid,
	Tab,
	Tabs,
	Toolbar,
	Typography,
	useTheme,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { ReactElement, cloneElement } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '@app/context/AuthContext';

import { UserMenu } from './userMenu';

interface AppbarProps {
	children: ReactElement;
}

function ElevationScroll(props: AppbarProps) {
	const theme = useTheme();
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return cloneElement(children, {
		elevation: trigger ? 4 : 0,
		sx: {
			backgroundColor: trigger ? theme.palette.primary.main : 'transparent',
			transition: 'all 0.3s ease-in-out',
			'& .MuiTypography-root': {
				color: trigger ? theme.palette.primary.contrastText : theme.palette.primary.main,
				transition: 'color 0.3s ease-in-out',
			},
			'& .MuiTab-root': {
				color: trigger ? theme.palette.primary.contrastText : theme.palette.primary.main,
				transition: 'color 0.3s ease-in-out',
			},
			'& .MuiButton-root': {
				color: trigger ? theme.palette.primary.contrastText : theme.palette.primary.main,
				transition: 'color 0.3s ease-in-out',
				'&:hover': {
					backgroundColor: trigger ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.04)',
				},
			},
		},
	});
}

const Appbar = () => {
	const { isAuthenticated } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();

	const getActiveTab = () => {
		const path = location.pathname.split('/')[1];
		if (!path) {
			return false;
		}
		return `/${path}`;
	};

	const routeChange = () => {
		const path = '/login';
		navigate(path);
	};

	return (
		<>
			<CssBaseline />
			<ElevationScroll>
				<AppBar position="fixed">
					<Box sx={{ flexGrow: 1 }}>
						<Container maxWidth="xl">
							<Toolbar>
								<Grid container>
									<Grid alignContent="center" item xs={2}>
										<Box component={Link} style={{ textDecoration: 'none' }} to="/">
											<Typography
												color="primary"
												sx={{ flexGrow: 1 }}
												textAlign="center"
												variant="h2"
											>
												How2Help
											</Typography>
										</Box>
									</Grid>
									<Grid alignContent="center" item justifyContent="center" xs={8}>
										<Box>
											<Tabs
												aria-label="navigation tabs"
												centered
												indicatorColor="secondary"
												textColor="primary"
												value={getActiveTab()}
											>
												<Tab component={NavLink} label="Organizations" to="/org" value="/org" />
												<Tab component={NavLink} label="Causes" to="/cause" value="/cause" />
												<Tab component={NavLink} label="Events" to="/event" value="/event" />
												<Tab
													component={NavLink}
													label="Activity"
													to="/activity"
													value="/activity"
												/>
												<Tab component={NavLink} label="Users" to="/user" value="/user" />
												<Tab component={NavLink} label="404" to="/notFound" value="/notFound" />
											</Tabs>
										</Box>
									</Grid>
									<Grid alignContent="center" item justifyContent="center" xs={2}>
										<Box textAlign="center">
											{isAuthenticated ? (
												<UserMenu />
											) : (
												<Button
													onClick={routeChange}
													sx={{
														color: (theme) => theme.palette.primary.contrastText,
														'&:hover': {
															backgroundColor: 'rgba(255, 255, 255, 0.1)',
														},
													}}
												>
													Login
												</Button>
											)}
										</Box>
									</Grid>
								</Grid>
							</Toolbar>
						</Container>
					</Box>
				</AppBar>
			</ElevationScroll>
			<Box sx={{ mb: 1 }} />
		</>
	);
};

export { Appbar };
