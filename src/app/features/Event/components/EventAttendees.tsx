import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { EventTabProps } from '../types/event.types';

export const EventAttendees = ({ event }: EventTabProps) => {
	return (
		<>
			<Typography variant="h4" gutterBottom>
				Attendees ({event.attendees?.length || 0})
			</Typography>
			<List>
				{event.attendees?.map((attendee) => (
					<ListItem key={attendee.id}>
						<ListItemAvatar>
							<Avatar src={attendee.user.avatarUrl} alt={attendee.user.name} />
						</ListItemAvatar>
						<ListItemText
							primary={attendee.user.name}
							secondary={`Joined ${new Date(attendee.joinedAt).toLocaleDateString()}`}
						/>
					</ListItem>
				))}
			</List>
		</>
	);
}; 