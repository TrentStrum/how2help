import {
	AppBar,
	Box,
	Button,
	IconButton,
	Tab,
	Tabs,
	Toolbar,
	Typography,
	styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function TestAppBar() {
      const [value, setValue] = useState('one');

		const handleChange = (
			event: React.SyntheticEvent,
			newValue: string
		) => {
			setValue(newValue);
		};
	const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='fixed'>
					<Toolbar>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant='h6'
							component='div'
							sx={{ flexGrow: 1 }}
						>
							How2Help
						</Typography>
						<Box sx={{ width: '100%' }}>
							<Tabs
								value={value}
								onChange={handleChange}
								textColor='secondary'
								indicatorColor='secondary'
								aria-label='secondary tabs example'
							>
								<Tab
									value='one'
									label='Item One'
								/>
								<Tab
									value='two'
									label='Item Two'
								/>
								<Tab
									value='three'
									label='Item Three'
								/>
							</Tabs>
						</Box>
						<Button color='inherit'>Login</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<Offset />
		</>
	);
}
