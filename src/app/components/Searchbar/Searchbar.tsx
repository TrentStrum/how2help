import { Box, Typography, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

const periods = [
	{
		value: 'popular',
		text: 'Most popular',
	},
	{
		value: 'recent',
		text: 'Recent tasks',
	},
	{
		value: 'updated',
		text: 'Latest updated tasks',
	},
	{
		value: 'oldest',
		text: 'Oldest tasks first',
	},
];
const Searchbar = () => {
	const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
	return (
		<Box alignItems="center" display="flex" justifyContent="space-between" py={{ xs: 2, sm: 3 }}>
			<Box>
				<Typography color="text.secondary" variant="subtitle2">
					<Typography
						component="span"
						sx={{
							display: { xs: 'none', sm: 'inline' },
						}}
					>
						Showing:
					</Typography>{' '}
					<b>57 Organizations</b>
				</Typography>
			</Box>
			<Box alignItems="center" display="flex">
				<Typography
					sx={{
						pr: 1,
						display: { xs: 'none', sm: 'inline' },
					}}
					variant="subtitle2"
				>
					Sort by:
				</Typography>
				<Menu
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
					disableScrollLock
					onClose={() => setOpenMenuPeriod(false)}
					open={openPeriod}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
				>
					{periods.map((_period) => (
						<MenuItem
							key={_period.value}
							onClick={() => {
								setOpenMenuPeriod(false);
							}}
						>
							{_period.text}
						</MenuItem>
					))}
				</Menu>
			</Box>
		</Box>
	);
};

export { Searchbar };
