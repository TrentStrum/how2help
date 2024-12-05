import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import {
	Box,
	Drawer,
	Grid,
	IconButton,
	Typography,
	Button,
	Chip,
	Stack,
	FormGroup,
	FormControlLabel,
	Checkbox,
} from '@mui/material';
import { useState } from 'react';

import { Cause } from '@api/entities/cause';
import { useGetAllCauses } from '@api/entities/cause/hooks/useGetAllCauses';
import { H2hPagination } from '@app/components/Pagination/H2hPagination';
import { SearchOutline } from '@app/components/Searchbar';
import { H2hSkeleton } from '@app/components/skeleton/Skeleton';

import { CauseCatalogCard } from '.';

interface CauseFilterCounts {
	categories: { [key: string]: number };
	regions: { [key: string]: number };
	orgCount: { [key: string]: number };
	activityLevel: { [key: string]: number };
	priority: { [key: string]: number };
}

const getCauseFilterCounts = (causes: Cause[]): CauseFilterCounts => {
	return causes.reduce(
		(acc, cause) => {
			// Count categories
			acc.categories[cause.category] = (acc.categories[cause.category] || 0) + 1;

			// Count regions
			cause.regions.forEach((region) => {
				acc.regions[region] = (acc.regions[region] || 0) + 1;
			});

			// Count by organization size
			const orgCountRange = getOrgCountRange(cause.organizations.length);
			acc.orgCount[orgCountRange] = (acc.orgCount[orgCountRange] || 0) + 1;

			// Count by activity level
			acc.activityLevel[cause.activityLevel] = (acc.activityLevel[cause.activityLevel] || 0) + 1;

			// Count by priority
			acc.priority[cause.priority] = (acc.priority[cause.priority] || 0) + 1;

			return acc;
		},
		{
			categories: {},
			regions: {},
			orgCount: {},
			activityLevel: {},
			priority: {},
		} as CauseFilterCounts,
	);
};

const CauseCatalog = () => {
	const limitCount = 12; // Match org catalog pagination
	const [currentPage, setCurrentPage] = useState(0);
	const [search, setSearch] = useState<string>('');
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [activeFilters, setActiveFilters] = useState<{
		categories: string[];
		locations: string[];
		status: string[];
	}>({
		categories: [],
		locations: [],
		status: [],
	});
	const [tempFilters, setTempFilters] = useState(activeFilters);

	const {
		data: causes,
		isPending,
		isError,
		error,
		isFetching,
	} = useGetAllCauses(currentPage, limitCount, search);

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
		setTempFilters(activeFilters);
		setIsFilterOpen(false);
	};

	const clearFilters = () => {
		const emptyFilters = {
			categories: [],
			locations: [],
			status: [],
		};
		setActiveFilters(emptyFilters);
		setTempFilters(emptyFilters);
	};

	const totalActiveFilters = Object.values(activeFilters).flat().length;

	if (isPending) return <H2hSkeleton />;
	if (isError) return <Typography variant="body2">{error.message}</Typography>;

	const total = causes?.total || 0;
	const count = Math.max(1, Math.ceil(total / limitCount));

	return (
		<Box sx={{ px: { xs: 2, sm: 3 } }}>
			{/* Header */}
			<Box sx={{ mb: 6, textAlign: 'center' }}>
				<Typography
					sx={{
						mb: 2,
						fontWeight: 'bold',
					}}
					variant="h2"
				>
					Cause Search
				</Typography>
				<Typography color="text.secondary" sx={{ mb: 4, maxWidth: 'md', mx: 'auto' }} variant="h6">
					Discover and support causes that matter to you
				</Typography>
			</Box>

			{/* Search and Filter Bar */}
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
						placeholder="Search by cause name..."
						searchValue={search}
					/>
				</Box>
				<Button
					onClick={() => setIsFilterOpen(true)}
					startIcon={<FilterListIcon />}
					sx={{ px: 3 }}
					variant="outlined"
				>
					Filters {totalActiveFilters > 0 ? `(${totalActiveFilters})` : null}
				</Button>
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

			{/* Causes Grid */}
			<Box sx={{ flexGrow: 1, minHeight: '60vh' }}>
				<Grid container spacing={{ xs: 2, sm: 3 }}>
					{causes.results.map((cause: Cause) => (
						<Grid
							item
							key={cause.causeId}
							lg={3} // 4 cards per row on large screens
							md={4} // 3 cards per row on medium screens
							sm={6} // 2 cards per row on small screens
							xs={12} // 1 card per row on mobile
						>
							<CauseCatalogCard cause={cause} />
						</Grid>
					))}
				</Grid>
			</Box>

			{/* Pagination */}
			<Box sx={{ mt: 6, mb: 4, display: 'flex', justifyContent: 'center' }}>
				<H2hPagination
					changePage={setCurrentPage}
					count={count}
					isFetching={isFetching}
					page={currentPage}
				/>
			</Box>

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
									{['Education', 'Healthcare', 'Environment', 'Social Justice'].map((category) => (
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
									{['Global', 'National', 'Regional', 'Local'].map((location) => (
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

							{/* Status */}
							<Box>
								<Typography sx={{ mb: 2 }} variant="subtitle1">
									Status
								</Typography>
								<FormGroup>
									{['Active', 'Urgent', 'Completed', 'Ongoing'].map((status) => (
										<FormControlLabel
											control={
												<Checkbox
													checked={tempFilters.status.includes(status)}
													onChange={() => handleFilterChange('status', status)}
												/>
											}
											key={status}
											label={status}
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

export { CauseCatalog };
