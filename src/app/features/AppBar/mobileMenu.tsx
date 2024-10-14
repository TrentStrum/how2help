import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import { Box, Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from 'react';

const MobileMenu = () => {
	const [value, setValue] = useState(0);

	return (
		<Box sx={{ pb: 7 }}>
			<Paper elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
				<BottomNavigation
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
					showLabels
					value={value}
				>
					<BottomNavigationAction icon={<RestoreIcon />} label="Recents" />
					<BottomNavigationAction icon={<FavoriteIcon />} label="Favorites" />
					<BottomNavigationAction icon={<LocationOnIcon />} label="Nearby" />
				</BottomNavigation>
			</Paper>
		</Box>
	);
};

export { MobileMenu };
