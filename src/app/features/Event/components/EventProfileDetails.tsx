import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import { Stack, Box, Typography } from '@mui/material';
import { format } from 'date-fns';

import { useGetActivitiesByEntityId } from '@api/entities/activity/hooks/useGetActivitiesByEntityId';
import { Event } from '@api/entities/events';
import { useGetEventAttendees } from '@api/entities/events/hooks/useGetEventAttendees';

type Props = {
	event: Event;
};

const EventDetails = ({ event }: Props) => {
	const {
		data: activitiesResponse,
		isLoading: activitiesLoading,
		error: activitiesError,
	} = useGetActivitiesByEntityId(event.eventId.toString(), 'event', 0, 10);

	const { data: attendees } = useGetEventAttendees(event.eventId);

	return (
		<Stack spacing={3} sx={{ p: 2 }}>
			<Box>
				<Typography gutterBottom variant="h6">
					Event Dates
				</Typography>
				<Stack alignItems="center" direction="row" spacing={1}>
					<CalendarTodayIcon color="primary" />
					<Typography>{format(new Date(event.eventDate), 'PPP')}</Typography>
				</Stack>
			</Box>

			<Box>
				<Typography gutterBottom variant="h6">
					Attendance
				</Typography>
				<Stack alignItems="center" direction="row" spacing={1}>
					<PeopleIcon color="primary" />
					<Typography>{attendees?.length || 0} confirmed attendees</Typography>
				</Stack>
			</Box>

			<Box>
				<Typography gutterBottom variant="h6">
					Open Activities
				</Typography>
				<Stack alignItems="center" direction="row" mb={1} spacing={1}>
					<WorkIcon color="primary" />
					<Typography>
						{activitiesLoading
							? 'Loading...'
							: `${activitiesResponse?.results?.length || 0} open activities`}
					</Typography>
				</Stack>
				{activitiesLoading ? (
					<Typography sx={{ ml: 4 }} variant="body2">
						Loading activities...
					</Typography>
				) : activitiesError ? (
					<Typography color="error" sx={{ ml: 4 }} variant="body2">
						Error loading activities
					</Typography>
				) : activitiesResponse?.results?.length ? (
					activitiesResponse.results.map((activity) => (
						<Typography key={activity.activityId} sx={{ ml: 4 }} variant="body2">
							• {activity.name}
						</Typography>
					))
				) : (
					<Typography sx={{ ml: 4 }} variant="body2">
						No activities found
					</Typography>
				)}
			</Box>
		</Stack>
	);
};

export { EventDetails };
