import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';

import { useGetActiveEventsByEntityId } from '@api/entities/events';
import { H2hPagination } from '@app/components/Pagination/H2hPagination';
import { SearchOutline } from '@app/components/Searchbar/SearchOutline';

import { CauseEventCard } from './CauseEventCard';

type Props = {
	causeId: string;
};

const CauseEventsTab = ({ causeId }: Props) => {
	const [currentPage, setCurrentPage] = useState(0);
	const limitCount = 6;
	const [searchTerm, setSearchTerm] = useState('');

	const { data, isPending, isError, error, isFetching } = useGetActiveEventsByEntityId(
		causeId.toString(),
		'cause',
		currentPage,
		limitCount,
		searchTerm,
	);

	const handleSearch = (value: string) => {
		setSearchTerm(value);
		setCurrentPage(0);
	};

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">{error?.message}</Typography>;

	const events = data?.results || [];
	const total = data?.total || 0;
	const count = Math.ceil(total / limitCount);

	return (
		<>
			<Box sx={{ mb: { xs: 2, sm: 3 } }}>
				<SearchOutline
					onSearch={handleSearch}
					placeholder="Search events..."
					searchValue={searchTerm}
					sx={{ width: '100%' }}
				/>
			</Box>

			<Box alignItems="center" display="flex" justifyContent="space-between" py={{ xs: 2, sm: 3 }}>
				<Typography color="text.secondary" variant="subtitle2">
					Showing: <b>{events?.length}</b> events
				</Typography>
			</Box>

			<Grid container spacing={3}>
				{events?.map((event) => (
					<Grid item key={event.eventId} md={4} sm={6} xs={12}>
						<CauseEventCard event={event} />
					</Grid>
				))}
			</Grid>

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
		</>
	);
};

export { CauseEventsTab };
