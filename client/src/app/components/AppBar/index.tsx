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
	styled,
	useTheme,
} from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { ReactElement, cloneElement, useState } from 'react';

import { UserMenu } from './UserMenu';

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
		},
	});
}

const Appbar = () => {
	// const [ isloggedIn, setIsLoggedIn ] = useState<boolean>(false);

	const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

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
		const path = '/auth';
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
												variant='h6'
												sx={{ flexGrow: 1 }}
												color='secondary'
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
												textColor='secondary'
												indicatorColor='secondary'
												aria-label='secondary tabs example'
												centered
											>
												<Tab
													label='Catalog'
													value='catalog'
													to='/catalog'
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
			<Offset />
		</>
	);
};

export { Appbar };
