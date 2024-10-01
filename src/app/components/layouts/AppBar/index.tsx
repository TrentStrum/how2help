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
import { Link, NavLink, useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { ReactElement, cloneElement, useState } from 'react';
import { UserMenu } from './userMenu';
import { generateThemeColors } from '../../../../lib/Themes/colors';

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

	function handleLogoClick() {
		setValue('home');
	}
	const [value, setValue] = useState<string>('catalog');

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
				<AppBar position='fixed'>
					<Box sx={{ flexGrow: 1 }}>
						<Container maxWidth='xl'>
							<Toolbar>
								<Grid container>
									<Grid
										item
										xs={2}
										alignContent='center'
									>
										<Box
											component={Link}
											to='/'
											style={{ textDecoration: 'none' }}
										>
											<Typography
												variant='h2'
												sx={{ flexGrow: 1 }}
												color='primary'
												onClick={handleLogoClick}
												textAlign='center'
											>
												How2Help
											</Typography>
										</Box>
									</Grid>
									<Grid
										item
										justifyContent='center'
										alignContent='center'
										xs={8}
									>
										<Box>
											<Tabs
												value={value}
												onChange={handleChange}
												textColor='primary'
												indicatorColor='secondary'
												aria-label='secondary tabs example'
												centered
											>
												<Tab
													label='Catalog'
													value='catalog'
													to='/org'
													component={NavLink}
												/>
												<Tab
													label='Users'
													value='user'
													to='/user'
													component={NavLink}
												/>
												<Tab
													label='Causes'
													value='cause'
													to='/cause'
													component={NavLink}
												/>
												<Tab
													label='Events'
													value='events'
													to='/events'
													component={NavLink}
												/>
												<Tab
													label='404'
													value='error'
													to='/notFound'
													component={NavLink}
												/>
												<Tab
													label='Test'
													value='test'
													to='/test'
													component={NavLink}
												/>
											</Tabs>
										</Box>
									</Grid>
									<Grid
										item
										xs={2}
										justifyContent='center'
										alignContent='center'
									>
										<Box textAlign='center'>
											{isloggedIn ? (
												<UserMenu /> // menu displayed if logged in
											) : (
												<Button
													sx={{ color: '#333' }}
													onClick={routeChange}
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
