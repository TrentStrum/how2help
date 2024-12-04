import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { IEvent } from '@api/entities/events/types';

interface EventCardProps {
	event: IEvent;
}

const EventCard = ({ event }: EventCardProps) => {
	return (
		<Card>
			<CardMedia alt={event.name} component="img" height="140" image={event.avatarImageUrl} />
			<CardContent>
				<Typography gutterBottom variant="h6">
					{event.name}
				</Typography>
				<Typography color="text.secondary" variant="body2">
					{event.description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default EventCard;
