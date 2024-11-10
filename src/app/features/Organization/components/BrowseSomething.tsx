import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import { Box, Typography, Button } from '@mui/material';

import { AvatarState } from '@app/components/Avatar/Avatar-Style';

// Move these to a config file later
const COURSE_COUNT = 500;
const TITLE = 'Start learning today!';
const SUBTITLE = `Browse over ${COURSE_COUNT} quality courses to start learning something useful today!`;

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
			<Typography variant="h4">{TITLE}</Typography>
			<Typography
				color="text.secondary"
				fontWeight={400}
				sx={{
					pb: 2,
					px: 3,
				}}
				variant="h5"
			>
				{SUBTITLE}
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
