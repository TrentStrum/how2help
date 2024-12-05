import { Typography, Chip, useTheme, Divider, ListItem, ListSubheader, Box } from '@mui/material';

import { Event, useGetPastEventsByEntityId } from '@api/entities/events';

import { PastEventCard } from './PastEventCard';

type Props = {
	entityId: string;
};

const PastEventList = ({ entityId }: Props) => {
	const theme = useTheme();
	const { data: events, isPending, isError } = useGetPastEventsByEntityId(entityId);

	if (isPending) return <Typography variant="body2">Loading past events...</Typography>;
	if (isError) return <Typography variant="body2">Error past events...</Typography>;

	console.log(events);

	return (
		<>
			<ListSubheader
				color="primary"
				component="div"
				sx={{
					background: theme.palette.background.paper,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					py: 1,
				}}
			>
				<Typography fontWeight={500}>Past Events</Typography>
				<Chip color="warning" label="Expired" />
			</ListSubheader>
			<Divider />

			{events?.map((event: Event) => (
				<ListItem
					component="div"
					key={event.eventId}
					sx={{
						pt: 2,
						pb: 0,
					}}
				>
					<PastEventCard event={event} />
				</ListItem>
			))}
			<Box component="div" mt={1} />
		</>
	);
};

export { PastEventList };
