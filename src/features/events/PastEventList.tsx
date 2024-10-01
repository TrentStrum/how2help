import { Typography, Chip, useTheme, Divider, ListItem, ListSubheader, Box } from '@mui/material';
import { Event, useGetPastEventsByEntityId } from '../../app/api/entities/events';
import { PastEventCard } from './PastEventCard';

type Props = {
	entityId: string;
};

const PastEventList = ({ entityId }: Props) => {
	const theme = useTheme();
	const { data: events, isPending, isError } = useGetPastEventsByEntityId(entityId);

	if (isPending) return <Typography variant='body2'>Loading past events...</Typography>;
	if (isError) return <Typography variant='body2'>Error past events...</Typography>;

	console.log(events);

	return (
		<>
			<ListSubheader
				component='div'
				color='primary'
				sx={{
					background: theme.palette.background.paper,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					py: 1,
				}}
			>
				<Typography fontWeight={500}>Past Events</Typography>
				<Chip
					label='Expired'
					color='warning'
				/>
			</ListSubheader>
			<Divider />

			{events?.map((event: Event) => (
				<ListItem
					component='div'
					sx={{
						pt: 2,
						pb: 0,
					}}
					key={event.eventId}
				>
					<PastEventCard event={event} />
				</ListItem>
			))}
			<Box
				component='div'
				mt={1}
			/>
		</>
	);
};

export { PastEventList };
