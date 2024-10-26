import { Card, Box, Avatar, Typography, Button } from '@mui/material';

import { Cause } from '@api/entities/cause';
import { Event } from '@api/entities/events';
import { Organization } from '@api/entities/organization';
import { User } from '@api/entities/user';

type Props = {
	event: Event;
	entity: User | Organization | Cause;
};

const ProfileCalendarCard = ({ event, entity }: Props) => {
	return (
		<Card elevation={0} sx={{ boxShadow: 'none', p: 2 }} variant="outlined">
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					{event.avatarImageUrl ? (
						<Avatar src={event.avatarImageUrl} sx={{ mr: 1 }} />
					) : (
						<Avatar
							sx={{
								mr: 1,
								color: 'common.white',
							}}
						>
							{entity.avatarImageUrl}
						</Avatar>
					)}
					<Typography variant="h5">{event.name}</Typography>
				</Box>
			</Box>
			<Box alignItems="center" flexDirection="column" sx={{ my: 2 }}>
				<Typography variant="subtitle1">{event.description}</Typography>
			</Box>
			<Button fullWidth sx={{ mt: 2, mb: 2 }} variant="contained">
				RSVP - open form
			</Button>
			<Button fullWidth variant="outlined">
				More information - open modal
			</Button>
		</Card>
	);
};

export { ProfileCalendarCard };
