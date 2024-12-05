import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

import { Event } from '@api/entities/events';

interface CauseEventCardProps {
	event: Event;
}

const CauseEventCard = ({ event }: CauseEventCardProps) => {
	return (
		<Card>
			<CardMedia
				alt={event.name}
				component="img"
				height="140"
				image={event.avatarImageUrl || '/placeholder-event.jpg'}
			/>
			<CardContent>
				<Typography component="div" gutterBottom variant="h6">
					{event.name}
				</Typography>
				<Typography color="text.secondary" variant="body2">
					{event.description}
				</Typography>
				<Box sx={{ mt: 2 }}>
					<Typography color="text.secondary" variant="caption">
						{new Date(event.eventDate).toLocaleDateString()}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};

export { CauseEventCard };
