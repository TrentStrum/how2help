import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import { Box, Typography, Button } from '@mui/material';

import { AvatarState } from '@app/components/Avatar/Avatar-Style';

const BrowseSomething = () => {
	return (
		<Box
			sx={{
				py: { xs: 2, md: 6, lg: 8 },
				textAlign: 'center',
			}}
		>
			<AvatarState
				isSoft
				state="warning"
				sx={{
					width: 84,
					height: 84,
					mx: 'auto',
					mb: 2,
				}}
			>
				<NotificationsActiveTwoToneIcon />
			</AvatarState>
			<Typography variant="h4">Start learning today!</Typography>
			<Typography
				color="text.secondary"
				fontWeight={400}
				sx={{
					pb: 2,
					px: 3,
				}}
				variant="h5"
			>
				Browse over 500 quality courses to start learning something useful today!
			</Typography>
			<Button
				color="warning"
				sx={{
					borderWidth: '2px',
					'&:hover': {
						borderWidth: '2px',
					},
				}}
				variant="outlined"
			>
				Browse courses
			</Button>
		</Box>
	);
};

export { BrowseSomething };
