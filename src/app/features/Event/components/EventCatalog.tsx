import CloseIcon from '@mui/icons-material/Close';
import {
	Typography,
	Box,
	Grid,
	Button,
	Stack,
	Chip,
	Drawer,
	FormGroup,
	Checkbox,
	FormControlLabel,
	IconButton,
} from '@mui/material';
import { useState } from 'react';

import { useGetAllActiveEvents } from '@api/entities/events/hooks/useGetAllActiveEvents';
import { EventFilters } from '@api/entities/events/types/event.types';
import { SearchOutlineFilters } from '@app/components/Filter/SearchOutlineFilters';
import { H2hPagination } from '@app/components/Pagination/H2hPagination';
import { SearchOutline } from '@app/components/Searchbar/SearchOutline';
import { H2hSkeleton } from '@app/components/skeleton/Skeleton';
import { Event } from '@api/entities/event';

import { EventCatalogCard } from './EventCatalogCard';

interface EventFilterCounts {
	types: { [key: string]: number };
	status: { [key: string]: number };
	locations: { [key: string]: number };
	organizations: { [key: string]: number };
	causes: { [key: string]: number };
	dateRanges: { [key: string]: number };
}

const getEventFilterCounts = (events: Event[]): EventFilterCounts => {
	return events.reduce(
		(acc, event) => {
			// Count event types
			acc.types[event.type] = (acc.types[event.type] || 0) + 1;

			// Count status
			const status = getEventStatus(event.startDate, event.endDate);
			acc.status[status] = (acc.status[status] || 0) + 1;

			// Count locations
			if (event.location) {
				acc.locations[event.location] = (acc.locations[event.location] || 0) + 1;
			}

			// Count organizations
			if (event.organizationId) {
				acc.organizations[event.organizationId] = (acc.organizations[event.organizationId] || 0) + 1;
			}

			// Count causes
			event.causes.forEach((cause) => {
				acc.causes[cause] = (acc.causes[cause] || 0) + 1;
			});

			// Count date ranges
			const dateRange = getDateRange(event.startDate);
			acc.dateRanges[dateRange] = (acc.dateRanges[dateRange] || 0) + 1;

			return acc;
		},
		{
			types: {},
			status: {},
			locations: {},
			organizations: {},
			causes: {},
			dateRanges: {},
		} as EventFilterCounts,
	);
};

const EventCatalog = () => {
	const limitCount = 12; // Match org/cause catalog pagination
	const [currentPage, setCurrentPage] = useState(0);
	const [search, setSearch] = useState<EventFilters['search']>('');
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [activeFilters, setActiveFilters] = useState<{
		categories: string[];
		locations: string[];
		size: string[];
	}>({
		categories: [],
		locations: [],
		size: [],
	});

	const [tempFilters, setTempFilters] = useState(activeFilters);

	const { data, isPending, isError, error, isFetching } = useGetAllActiveEvents(
		currentPage,
		limitCount,
		search,
	);

	const handleSearch = (value: string) => {
		setSearch(value);
		setCurrentPage(0);
	};

	const handleFilterChange = (type: keyof typeof tempFilters, value: string) => {
		setTempFilters((prev) => ({
			...prev,
			[type]: prev[type].includes(value)
				? prev[type].filter((item) => item !== value)
				: [...prev[type], value],
		}));
	};

	const handleApplyFilters = () => {
		setActiveFilters(tempFilters);
		setCurrentPage(1);
		setIsFilterOpen(false);
	};

	const handleCloseFilters = () => {
		setTempFilters(activeFilters); // Reset temp filters to active filters
		setIsFilterOpen(false);
	};

	const clearFilters = () => {
		const emptyFilters = {
			categories: [],
			locations: [],
			size: [],
		};
		setActiveFilters(emptyFilters);
		setTempFilters(emptyFilters);
	};

	if (isPending) return <H2hSkeleton />;
	if (isError) return <Typography variant="body2">{error?.message}</Typography>;

	const events = data?.results || [];
	const total = data?.total || 0;
	const count = Math.max(1, Math.ceil(total / limitCount));

	const totalActiveFilters = Object.values(activeFilters).flat().length;

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
			<Box
				sx={{
					maxWidth: 'md',
					mx: 'auto',
					mb: 6,
					display: 'flex',
					gap: 2,
				}}
			>
				<Box sx={{ flex: 1 }}>
					<SearchOutline
						onSearch={handleSearch}
						placeholder="Search by event name..."
						searchValue={search}
					/>
				</Box>
				<SearchOutlineFilters
					onFilterClick={() => setIsFilterOpen(true)}
					totalActiveFilters={totalActiveFilters}
				/>
			</Box>

			{/* Active Filters */}
			{totalActiveFilters > 0 ? (
				<Box sx={{ maxWidth: 'md', mx: 'auto', mb: 3 }}>
					<Stack alignItems="center" direction="row" flexWrap="wrap" spacing={1} useFlexGap>
						{Object.entries(activeFilters).map(([type, values]) =>
							values.map((value) => (
								<Chip
									key={`${type}-${value}`}
									label={value}
									onDelete={() => handleFilterChange(type as keyof typeof activeFilters, value)}
									sx={{ mb: 1 }}
								/>
							)),
						)}
						<Button color="error" onClick={clearFilters} size="small" sx={{ mb: 1 }}>
							Clear all
						</Button>
					</Stack>
				</Box>
			) : null}

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
			{/* Filter Drawer */}
			<Drawer
				PaperProps={{
					sx: { width: { xs: '100%', sm: 400 } },
				}}
				anchor="right"
				onClose={handleCloseFilters}
				open={isFilterOpen}
			>
				<Box
					sx={{
						p: 3,
						display: 'flex',
						flexDirection: 'column',
						height: '100%',
					}}
				>
					<Box
						sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}
					>
						<Typography variant="h6">Filters</Typography>
						<IconButton onClick={handleCloseFilters}>
							<CloseIcon />
						</IconButton>
					</Box>

					{/* Filter Sections */}
					<Box sx={{ flex: 1, overflow: 'auto' }}>
						<Stack spacing={3}>
							{/* Categories */}
							<Box>
								<Typography sx={{ mb: 2 }} variant="subtitle1">
									Categories
								</Typography>
								<FormGroup>
									{['Education', 'Healthcare', 'Environment', 'Social Services'].map((category) => (
										<FormControlLabel
											control={
												<Checkbox
													checked={tempFilters.categories.includes(category)}
													onChange={() => handleFilterChange('categories', category)}
												/>
											}
											key={category}
											label={category}
										/>
									))}
								</FormGroup>
							</Box>

							{/* Locations */}
							<Box>
								<Typography sx={{ mb: 2 }} variant="subtitle1">
									Locations
								</Typography>
								<FormGroup>
									{['New York', 'Los Angeles', 'Chicago', 'Houston'].map((location) => (
										<FormControlLabel
											control={
												<Checkbox
													checked={tempFilters.locations.includes(location)}
													onChange={() => handleFilterChange('locations', location)}
												/>
											}
											key={location}
											label={location}
										/>
									))}
								</FormGroup>
							</Box>

							{/* Organization Size */}
							<Box>
								<Typography sx={{ mb: 2 }} variant="subtitle1">
									Organization Size
								</Typography>
								<FormGroup>
									{['1-50', '51-200', '201-500', '500+'].map((size) => (
										<FormControlLabel
											control={
												<Checkbox
													checked={tempFilters.size.includes(size)}
													onChange={() => handleFilterChange('size', size)}
												/>
											}
											key={size}
											label={size}
										/>
									))}
								</FormGroup>
							</Box>
						</Stack>
					</Box>

					<Button color="primary" onClick={handleApplyFilters} variant="contained">
						Apply Filters
					</Button>
				</Box>
			</Drawer>
		</Box>
	);
};

export { EventCatalog };
