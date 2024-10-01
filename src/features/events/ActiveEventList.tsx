import { Typography, Chip, useTheme, Divider, ListItem, ListSubheader, Box } from '@mui/material';
import { Event, useGetActiveEventsByEntityId } from '../../app/api/entities/events';
import { ActiveEventCard } from './ActiveEventCard';

type Props = {
	entityId: string;
};

const ActiveEventList = ({ entityId }: Props) => {
	const theme = useTheme();

	const entityIdActive = entityId;

	const { data: events, isPending, isError } = useGetActiveEventsByEntityId(entityIdActive);

	if (isPending) return <Typography variant='body2'>Loading active events...</Typography>;
	if (isError) return <Typography variant='body2'>Error active events...</Typography>;

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
				<Typography fontWeight={500}>Upcoming Events</Typography>
				<Chip
					label='Today'
					color='success'
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
					<ActiveEventCard event={event} />
				</ListItem>
			))}
			<Box component='div' mt={1}/>
		</>
	);
};

export { ActiveEventList };
