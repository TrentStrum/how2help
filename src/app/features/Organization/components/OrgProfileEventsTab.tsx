import { Box, Typography } from '@mui/material';

import { useGetActiveEventsByEntityId } from '@api/entities/events';

import { OrgProfileEventCard } from './OrgProfileEventCard';

type Props = {
	orgId: string;
};

export const OrgProfileEventsTab = ({ orgId }: Props) => {
	const {
		data: events,
		isPending,
		isError,
		error,
	} = useGetActiveEventsByEntityId(orgId, 'organization', 1, 10);

	if (isPending) return <Typography>Loading events...</Typography>;
	if (isError) return <Typography color="error">{error.message}</Typography>;
	if (!events?.results?.length) return <Typography>No upcoming events.</Typography>;

	return (
		<Box
			sx={{
				width: '100%',
				overflowX: 'auto',
				// Hide scrollbar for webkit browsers
				'&::-webkit-scrollbar': {
					display: 'none',
				},
				// Hide scrollbar for Firefox
				scrollbarWidth: 'none',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					gap: 3,
					pb: 2, // Add padding bottom for scrollbar space
					px: 1, // Add slight padding on sides
				}}
			>
				{events.results.map((event) => (
					<Box
						key={event.eventId}
						sx={{
							minWidth: {
								xs: '280px',
								sm: '320px',
							},
							flexShrink: 0,
						}}
					>
						<OrgProfileEventCard
							description={event.description}
							eventDate={event.eventDate}
							location={event.location}
							name={event.name}
							startTime={event.startTime}
						/>
					</Box>
				))}
			</Box>
		</Box>
	);
};
