import InsertInvitationTwoToneIcon from '@mui/icons-material/InsertInvitationTwoTone';
import MarkEmailReadTwoToneIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import { Box, Typography, Button } from '@mui/material';

import { AvatarState } from '@app/components/Avatar/Avatar-Style';

const NoUpcomingEvents = () => {
	return (
		<Box
			sx={{
				py: { xs: 2, md: 6, lg: 8 },
				textAlign: 'center',
			}}
		>
			<AvatarState
				isSoft
				state="info"
				sx={{
					width: 84,
					height: 84,
					mx: 'auto',
					mb: 2,
				}}
			>
				<InsertInvitationTwoToneIcon />
			</AvatarState>
			<Typography variant="h4">Upcoming events</Typography>
			<Typography
				color="text.secondary"
				fontWeight={400}
				sx={{
					px: 3,
					pb: 2,
				}}
				variant="h5"
			>
				Right now there are no upcoming events available!
			</Typography>
			<Button
				color="info"
				startIcon={<MarkEmailReadTwoToneIcon />}
				sx={{
					borderWidth: '2px',
					'&:hover': {
						borderWidth: '2px',
					},
				}}
				variant="outlined"
			>
				Subscribe to newsletter
			</Button>
		</Box>
	);
};

export { NoUpcomingEvents };
