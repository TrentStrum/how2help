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
const CauseOrgSearchbar = () => {
    	const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
	return (
		<>
			<Box
				py={{ xs: 2, sm: 3 }}
				display='flex'
				alignItems='center'
				justifyContent='space-between'
			>
				<Box>
					<Typography
						variant='subtitle2'
						color='text.secondary'
					>
						<Typography
							component='span'
							sx={{
								display: { xs: 'none', sm: 'inline' },
							}}
						>
							Showing:
						</Typography>{' '}
						<b>57 Organizations</b>
					</Typography>
				</Box>
				<Box
					display='flex'
					alignItems='center'
				>
					<Typography
						variant='subtitle2'
						sx={{
							pr: 1,
							display: { xs: 'none', sm: 'inline' },
						}}
					>
						Sort by:
					</Typography>
					<Menu
						disableScrollLock
						onClose={() => setOpenMenuPeriod(false)}
						open={openPeriod}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
						}}
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
		</>
	);
};

export { CauseOrgSearchbar };
