import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';

import { useGetActiveEventsByEntityId } from '@api/entities/events';
import { H2hPagination } from '@app/components/Pagination/H2hPagination';

import { OrgProfileEventCard } from './OrgProfileEventCard';

type Props = {
	orgId: string;
};

export const OrgProfileEventsTab = ({ orgId }: Props) => {
	const [currentPage, setCurrentPage] = useState(0);
	const limitCount = 3; // Show 8 events per page (2 rows of 4 on large screens)

	const {
		data: events,
		isPending,
		isError,
		error,
		isFetching,
	} = useGetActiveEventsByEntityId(orgId, 'organization', currentPage, limitCount);

	if (isPending) return <Typography>Loading events...</Typography>;
	if (isError) return <Typography color="error">{error.message}</Typography>;
	if (!events?.results?.length) return <Typography>No upcoming events.</Typography>;

	const total = events?.total || 0;
	const count = Math.ceil(total / limitCount);

	return (
		<Box sx={{ width: '100%' }}>
			<Grid container spacing={3}>
				{events.results.map((event) => (
					<Grid
						item
						key={event.eventId}
						lg={3} // 4 cards per row on large screens
						md={4} // 3 cards per row on medium screens
						sm={6} // 2 cards per row on small screens
						xs={12} // 1 card per row on mobile
					>
						<OrgProfileEventCard
							eventDate={event.eventDate}
							eventId={event.eventId.toString()}
							location={event.location}
							name={event.name}
							startTime={event.startTime}
						/>
					</Grid>
				))}
			</Grid>

			{/* Pagination */}
			<Box
				alignItems="center"
				display="flex"
				justifyContent="center"
				sx={{
					pt: { xs: 2, sm: 3 },
				}}
			>
				<H2hPagination
					changePage={setCurrentPage}
					count={count}
					isFetching={isFetching}
					page={currentPage}
				/>
			</Box>
		</Box>
	);
};
