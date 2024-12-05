import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Badge,
} from '@mui/material';
import { useState, useMemo } from 'react';

import { useGetOrgsAll, OrgFilters, Organization } from '@api/entities/organization';
import { getCauseName, getRegionFromCountries } from '@api/utils/filterHelpers';
import { SearchOutlineFilters } from '@app/components/Filter/SearchOutlineFilters';
import { H2hPagination } from '@app/components/Pagination/H2hPagination';
import { SearchOutline } from '@app/components/Searchbar/SearchOutline';
import { H2hSkeleton } from '@app/components/skeleton/Skeleton';
import { OrgCatalogCard } from '@app/features/Organization/index';

interface FilterCounts {
	causes: { [key: string]: number };
	countries: { [key: string]: number };
	rating: { [key: string]: number };
	location: { [key: string]: number };
	status: { [key: string]: number };
}

const getFilterCounts = (orgs: Organization[]): FilterCounts => {
	return orgs.reduce(
		(acc, org) => {
			// Count causes
			org.causes.forEach((causeId) => {
				const causeName = getCauseName(causeId); // You'll need to implement this
				acc.causes[causeName] = (acc.causes[causeName] || 0) + 1;
			});

			// Count countries
			org.countryServing.forEach((country) => {
				acc.countries[country] = (acc.countries[country] || 0) + 1;
			});

			// Count ratings
			const ratingKey = `${org.userRating} Stars & Up ⭐`.repeat(org.userRating);
			acc.rating[ratingKey] = (acc.rating[ratingKey] || 0) + 1;

			// Count status
			acc.status[org.status] = (acc.status[org.status] || 0) + 1;

			// Determine location category
			const locationKey =
				org.countryServing.length > 3
					? 'International'
					: getRegionFromCountries(org.countryServing); // You'll need to implement this
			acc.location[locationKey] = (acc.location[locationKey] || 0) + 1;

			return acc;
		},
		{
			causes: {},
			countries: {},
			rating: {},
			location: {},
			status: {},
		} as FilterCounts,
	);
};

const OrgCatalog = () => {
	const limitCount = 12;
	const [currentPage, setCurrentPage] = useState(0);
	const [search, setSearch] = useState<OrgFilters['search']>('');
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [activeFilters, setActiveFilters] = useState<{
		causes: string[];
		countries: string[];
		status: string[];
		rating: string[];
		location: string[];
	}>({
		causes: [],
		countries: [],
		status: [],
		rating: [],
		location: [],
	});
	const [tempFilters, setTempFilters] = useState(activeFilters);

	const { data, isPending, isError, error, isFetching } = useGetOrgsAll(
		currentPage,
		limitCount,
		search,
	);

	// Calculate filter counts
	const filterCounts = useMemo(
		() => (data?.results ? getFilterCounts(data.results) : null),
		[data],
	);

	// Calculate popular filters based on data
	const popularFilters = useMemo(() => {
		if (!filterCounts) return [];

		const getTopFilters = (
			category: keyof FilterCounts,
			count: number,
			transform?: (key: string) => { label: string; value: string },
		) => {
			return Object.entries(filterCounts[category])
				.sort(([, a], [, b]) => b - a)
				.slice(0, count)
				.map(([key]) => ({
					type: category,
					...(transform ? transform(key) : { label: key, value: key }),
				}));
		};

		return [
			// Most common rating with high engagement
			...getTopFilters('rating', 1, (key) => ({
				label: `${key} (Most Popular)`,
				value: key,
			})),

			// Top 2 causes
			...getTopFilters('causes', 2, (key) => ({
				label: `${key} Organizations`,
				value: key,
			})),

			// Most active location
			...getTopFilters('location', 1),

			// Active status if there are many active orgs
			...(filterCounts.status['active'] > filterCounts.status['closed']
				? [
						{
							type: 'status',
							label: 'Currently Active',
							value: 'active',
						},
					]
				: []),
		];
	}, [filterCounts]);

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
			causes: [],
			countries: [],
			status: [],
			rating: [],
			location: [],
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
							{/* Popular Filters - Now Dynamic */}
							<Box>
								<Typography sx={{ mb: 2 }} variant="subtitle1">
									Popular Filters
								</Typography>
								<Stack direction="row" flexWrap="wrap" gap={1}>
									{popularFilters.map((filter) => (
										<Chip
											color={
												tempFilters[filter.type as keyof typeof tempFilters].includes(filter.value)
													? 'primary'
													: 'default'
											}
											key={`${filter.type}-${filter.value}`}
											label={filter.label}
											onClick={() =>
												handleFilterChange(filter.type as keyof typeof tempFilters, filter.value)
											}
											sx={{ mb: 1 }}
										/>
									))}
								</Stack>
							</Box>

							{/* Rating Filter */}
							<Accordion defaultExpanded>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											width: '100%',
											pr: 2,
										}}
									>
										<Typography variant="subtitle1">Rating</Typography>
										<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
											<Typography color="text.secondary" variant="caption">
												{Object.values(filterCounts?.rating || {}).reduce((a, b) => a + b, 0)}
											</Typography>
											<Badge badgeContent={tempFilters.rating.length} color="primary" />
										</Box>
									</Box>
								</AccordionSummary>
								<AccordionDetails>
									<FormGroup>
										{[
											'5 Stars & Up ⭐⭐⭐⭐⭐',
											'4 Stars & Up ⭐⭐⭐⭐',
											'3 Stars & Up ⭐⭐⭐',
										].map((rating) => (
											<FormControlLabel
												control={
													<Checkbox
														checked={tempFilters.rating.includes(rating)}
														onChange={() => handleFilterChange('rating', rating)}
													/>
												}
												key={rating}
												label={rating}
											/>
										))}
									</FormGroup>
								</AccordionDetails>
							</Accordion>

							{/* Causes Filter */}
							<Accordion defaultExpanded>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											width: '100%',
											pr: 2,
										}}
									>
										<Typography variant="subtitle1">Causes</Typography>
										<Badge badgeContent={tempFilters.causes.length} color="primary" />
									</Box>
								</AccordionSummary>
								<AccordionDetails>
									<FormGroup>
										{[
											'LGBTQ+ Rights',
											'Palestine Support',
											'Gun Violence Prevention',
											"Women's Rights",
											'Human Rights',
											'Humanitarian Aid',
											'Healthcare',
											'Education',
										].map((cause) => (
											<FormControlLabel
												control={
													<Checkbox
														checked={tempFilters.causes.includes(cause)}
														onChange={() => handleFilterChange('causes', cause)}
													/>
												}
												key={cause}
												label={cause}
											/>
										))}
									</FormGroup>
								</AccordionDetails>
							</Accordion>

							{/* Countries Filter */}
							<Accordion>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											width: '100%',
											pr: 2,
										}}
									>
										<Typography variant="subtitle1">Countries</Typography>
										<Badge badgeContent={tempFilters.countries.length} color="primary" />
									</Box>
								</AccordionSummary>
								<AccordionDetails>
									<FormGroup>
										{[
											'USA',
											'Palestine',
											'Canada',
											'Germany',
											'France',
											'UK',
											'Mexico',
											'Argentina',
										].map((country) => (
											<FormControlLabel
												control={
													<Checkbox
														checked={tempFilters.countries.includes(country)}
														onChange={() => handleFilterChange('countries', country)}
													/>
												}
												key={country}
												label={country}
											/>
										))}
									</FormGroup>
								</AccordionDetails>
							</Accordion>

							{/* Location Keywords Filter */}
							<Accordion>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											width: '100%',
											pr: 2,
										}}
									>
										<Typography variant="subtitle1">Location Keywords</Typography>
										<Badge badgeContent={tempFilters.location.length} color="primary" />
									</Box>
								</AccordionSummary>
								<AccordionDetails>
									<FormGroup>
										{[
											'International',
											'North America',
											'Europe',
											'Middle East',
											'Latin America',
											'Multiple Regions',
										].map((location) => (
											<FormControlLabel
												control={
													<Checkbox
														checked={tempFilters.location.includes(location)}
														onChange={() => handleFilterChange('location', location)}
													/>
												}
												key={location}
												label={location}
											/>
										))}
									</FormGroup>
								</AccordionDetails>
							</Accordion>

							{/* Status Filter */}
							<Accordion>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											width: '100%',
											pr: 2,
										}}
									>
										<Typography variant="subtitle1">Organization Status</Typography>
										<Badge badgeContent={tempFilters.status.length} color="primary" />
									</Box>
								</AccordionSummary>
								<AccordionDetails>
									<FormGroup>
										{[
											{ value: 'active', label: 'Currently Active' },
											{ value: 'closed', label: 'Temporarily Closed' },
										].map(({ value, label }) => (
											<FormControlLabel
												control={
													<Checkbox
														checked={tempFilters.status.includes(value)}
														onChange={() => handleFilterChange('status', value)}
													/>
												}
												key={value}
												label={label}
											/>
										))}
									</FormGroup>
								</AccordionDetails>
							</Accordion>
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
