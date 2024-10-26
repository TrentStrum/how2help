import { Typography, Chip, useTheme, Divider, ListItem, ListSubheader, Box } from '@mui/material';
import { useState } from 'react';

import { Event, useGetActiveEventsByEntityId } from '@api/entities/events';

import { ActiveEventCard } from './ActiveEventCard';

type Props = {
	entityId: string;
};

const ActiveEventList = ({ entityId }: Props) => {
	const theme = useTheme();
	const [currentPage, setCurrentPage] = useState(0);
	const [limit, setLimit] = useState<number>(10);

	const { data, isPending, isError, error } = useGetActiveEventsByEntityId(
		'Organization',
		entityId,
		currentPage,
		limit,
	);

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">{error.message}</Typography>;

	let events = data.results;

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
				<Typography fontWeight={500}>Upcoming Events</Typography>
				<Chip color="success" label="Today" />
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
					<ActiveEventCard event={event} />
				</ListItem>
			))}
			<Box component="div" mt={1} />
		</>
	);
};

export { ActiveEventList };
