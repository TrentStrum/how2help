import FilterListIcon from '@mui/icons-material/FilterList';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Typography, Box, Grid, InputAdornment, TextField, Button } from '@mui/material';
import { useState } from 'react';

import { useGetAllActiveEvents } from '@api/entities/events/hooks/useGetAllActiveEvents';
import { H2hPagination } from '@app/components/Pagination/H2hPagination';
import { H2hSkeleton } from '@app/components/skeleton/Skeleton';

import { EventCatalogCard } from './EventCatalogCard';

const EventCatalog = () => {
	const limitCount = 12; // Match org/cause catalog pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState<string>('');
	const [isFocused, setIsFocused] = useState(false);

	const { data, isPending, isError, error, isFetching } = useGetAllActiveEvents(
		currentPage,
		limitCount,
		search,
	);

	const handleSearch = (value: string) => {
		setSearch(value);
		setCurrentPage(1);
	};

	if (isPending) return <H2hSkeleton />;
	if (isError) return <Typography variant="body2">{error?.message}</Typography>;

	const events = data?.results || [];
	const total = data?.total || 0;
	const count = Math.max(1, Math.ceil(total / limitCount));

	return (
		<Box sx={{ px: { xs: 2, sm: 3 } }}>
			{/* Header */}
			<Box sx={{ mb: 6, textAlign: 'center' }}>
				<Typography sx={{ mb: 2, fontWeight: 'bold' }} variant="h2">
					Event Search
				</Typography>
				<Typography color="text.secondary" sx={{ mb: 4, maxWidth: 'md', mx: 'auto' }} variant="h6">
					Discover and participate in upcoming events
				</Typography>
			</Box>

			{/* Search Bar */}
			<Box sx={{ maxWidth: 'md', mx: 'auto', mb: 6, display: 'flex', gap: 2 }}>
				<TextField
					InputProps={{
						startAdornment: !isFocused && (
							<InputAdornment position="start" sx={{ ml: 1 }}>
								<SearchTwoToneIcon />
							</InputAdornment>
						),
					}}
					onBlur={() => setIsFocused(false)}
					onChange={(e) => handleSearch(e.target.value)}
					onFocus={() => setIsFocused(true)}
					placeholder={isFocused ? '' : 'Search by event name...'}
					sx={{
						flex: 1,
						'& .MuiInputBase-root': {
							borderRadius: 2,
							bgcolor: 'background.paper',
							boxShadow: isFocused ? 4 : 1,
							transition: 'box-shadow 0.3s ease-in-out',
						},
						'& .MuiInputBase-input': {
							pl: 1,
							py: 2,
						},
					}}
					value={search}
				/>
				<Button startIcon={<FilterListIcon />} sx={{ px: 3 }} variant="outlined">
					Filters
				</Button>
			</Box>

			{/* Events Grid */}
			<Box sx={{ flexGrow: 1, minHeight: '60vh' }}>
				<Grid container spacing={{ xs: 2, md: 3 }}>
					{events.map((event) => (
						<Grid item key={event.eventId} lg={3} md={4} sm={6} xs={12}>
							<EventCatalogCard event={event} />
						</Grid>
					))}
				</Grid>
			</Box>

			{/* Only show pagination if there are events */}
			{events.length > 0 ? (
				<Box sx={{ mt: 6, mb: 4, display: 'flex', justifyContent: 'center' }}>
					<H2hPagination
						changePage={setCurrentPage}
						count={count}
						isFetching={isFetching}
						page={currentPage}
					/>
				</Box>
			) : null}
		</Box>
	);
};

export { EventCatalog };
