import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Paper } from '@mui/material';
import { useState } from 'react';

const MobileMenu = () => {
	const [value, setValue] = useState(0);

	return (
		<Box sx={{ pb: 7 }}>
			<Paper
				sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
				elevation={3}
			>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					<BottomNavigationAction
						label='Recents'
						icon={<RestoreIcon />}
					/>
					<BottomNavigationAction
						label='Favorites'
						icon={<FavoriteIcon />}
					/>
					<BottomNavigationAction
						label='Nearby'
						icon={<LocationOnIcon />}
					/>
				</BottomNavigation>
			</Paper>
		</Box>
	);
};

export { MobileMenu };
