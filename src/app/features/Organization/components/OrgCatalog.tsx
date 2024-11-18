import CloseIcon from '@mui/icons-material/Close';
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

import { useGetOrgsAll, OrgFilters } from '@api/entities/organization';
import { SearchOutlineFilters } from '@app/components/Filter/SearchOutlineFilters';
import { H2hPagination } from '@app/components/Pagination/H2hPagination';
import { SearchOutline } from '@app/components/Searchbar/SearchOutline';
import { H2hSkeleton } from '@app/components/skeleton/Skeleton';
import { OrgCatalogCard } from '@app/features/Organization/index';

const OrgCatalog = () => {
	const limitCount = 12;
	const [currentPage, setCurrentPage] = useState(0);
	const [search, setSearch] = useState<OrgFilters['search']>('');
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

	const { data, isPending, isError, error, isFetching } = useGetOrgsAll(
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

	const totalActiveFilters = Object.values(activeFilters).flat().length;

	if (isPending) return <H2hSkeleton />;
	if (isError) return <Typography variant="body2">{error.message}</Typography>;

	const orgs = data?.results || [];
	const count = Math.ceil(data?.total / limitCount);

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
					Organization Search
				</Typography>
				<Typography color="text.secondary" sx={{ mb: 4, maxWidth: 'md', mx: 'auto' }} variant="h6">
					Discover and connect with organizations that match your interests
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
						placeholder="Search by organization name..."
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

			{/* Organizations Grid */}
			<Box sx={{ flexGrow: 1, minHeight: '60vh' }}>
				<Grid columns={{ xs: 1, sm: 8, md: 12, lg: 12 }} container spacing={{ xs: 2, sm: 3 }}>
					{orgs.map((org) => (
						<Grid item key={org.orgId} lg={3} md={4} sm={4} xs={1}>
							<OrgCatalogCard org={org} />
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

export { OrgCatalog };
