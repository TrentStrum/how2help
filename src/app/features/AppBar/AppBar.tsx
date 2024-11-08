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
import React, { ReactElement, cloneElement, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { generateThemeColors } from '@themes/colors';

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
		style: {
			backgroundColor: trigger ? theme.palette.primary.main : 'transparent',
			transition: trigger ? '0.3s' : '0.5s',
			color: trigger ? generateThemeColors().light.peach.main : theme.palette.primary.main,
		},
	});
}

const Appbar = () => {
	// const [ isloggedIn, setIsLoggedIn ] = useState<boolean>(false);
	const isloggedIn = false;

	const [value, setValue] = useState<string>('organizations');

	function handleChange(event: React.SyntheticEvent, newValue: string) {
		setValue(newValue);
	}

	const navigate = useNavigate();
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
												// onClick={handleLogoClick}
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
												aria-label="secondary tabs example"
												centered
												indicatorColor="secondary"
												onChange={handleChange}
												textColor="primary"
												value={value}
											>
												<Tab
													component={NavLink}
													label="Organizations"
													to="/org"
													value="organizations"
												/>
												<Tab component={NavLink} label="Users" to="/user" value="user" />
												<Tab component={NavLink} label="Causes" to="/cause" value="cause" />
												<Tab component={NavLink} label="Events" to="/event" value="event" />
												<Tab component={NavLink} label="Activity" to="/activity" value="activity" />
												<Tab component={NavLink} label="404" to="/notFound" value="error" />
												{/* <Tab component={NavLink} label="Test" to="/test" value="test" /> */}
											</Tabs>
										</Box>
									</Grid>
									<Grid alignContent="center" item justifyContent="center" xs={2}>
										<Box textAlign="center">
											{isloggedIn ? (
												<UserMenu /> // menu displayed if logged in
											) : (
												<Button onClick={routeChange} sx={{ color: '#333' }}>
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
