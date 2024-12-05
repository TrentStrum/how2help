import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetRecentEvents } from '@api/entities/events';
import { EventCardSkeleton } from '@app/components/Skeletons/EventCardSkeleton';

const EventCard = lazy(() => import('../../features/Event/components/EventCard'));

export const RecentEvents = () => {
	const navigate = useNavigate();
	const { data, isPending } = useGetRecentEvents();
	const events = Array.isArray(data) ? data : [];

	if (isPending) {
		return (
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					{[...Array(4)].map((_, i) => (
						<Grid item key={i} md={3} sm={6} xs={12}>
							<EventCardSkeleton />
						</Grid>
					))}
				</Grid>
			</Container>
		);
	}

	return (
		<Container maxWidth="lg">
			<Box mb={6} textAlign="center">
				<Typography color="primary" gutterBottom variant="h3">
					Recent Events
				</Typography>
				<Typography color="text.secondary" mb={4} variant="h6">
					Join these upcoming volunteer opportunities
				</Typography>
			</Box>

			<Grid container spacing={4}>
				{events.slice(0, 4).map((event) => (
					<Grid item key={event.id} md={3} sm={6} xs={12}>
						<Suspense fallback={<EventCardSkeleton />}>
							<EventCard event={event} />
						</Suspense>
					</Grid>
				))}
			</Grid>

			<Box mt={6} textAlign="center">
				<Button
					onClick={() => navigate('/events')}
					size="large"
					sx={{ px: 4, py: 1.5 }}
					variant="contained"
				>
					View All Events
				</Button>
			</Box>
		</Container>
	);
};
