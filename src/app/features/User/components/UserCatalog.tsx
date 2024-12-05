import CloseIcon from '@mui/icons-material/Close';
// import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
// import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import {
	Avatar,
	Box,
	Button,
	Card,
	Checkbox,
	Chip,
	Drawer,
	FormControlLabel,
	FormGroup,
	IconButton,
	Link,
	Stack,
	Typography,
	CircularProgress,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useGetUsersAll } from '@api/entities/user';
import { SearchOutlineFilters } from '@app/components/Filter/SearchOutlineFilters';
import { SearchOutline } from '@app/components/Searchbar/SearchOutline';

const UserCatalog = () => {
	const [queryOptions, setQueryOptions] = useState({
		search: '',
		filters: {
			categories: [] as string[],
			locations: [] as string[],
			size: [] as string[],
		},
	});
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [tempFilters, setTempFilters] = useState(queryOptions.filters);

	const { ref: loadMoreRef, inView } = useInView({
		threshold: 0.1,
		triggerOnce: false,
	});

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError, error, isLoading } =
		useGetUsersAll({
			...queryOptions,
			limit: 12,
		});

	useEffect(() => {
		if (inView && hasNextPage && !isFetchingNextPage) {
			void fetchNextPage();
		}
	}, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

	const handleSearch = (value: string) => {
		setQueryOptions((prev) => ({
			...prev,
			search: value,
		}));
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
		setQueryOptions((prev) => ({
			...prev,
			filters: tempFilters,
		}));
		setIsFilterOpen(false);
	};

	const handleCloseFilters = () => {
		setTempFilters(queryOptions.filters);
		setIsFilterOpen(false);
	};

	const clearFilters = () => {
		const emptyFilters = {
			categories: [],
			locations: [],
			size: [],
		};
		setQueryOptions((prev) => ({
			...prev,
			filters: emptyFilters,
		}));
		setTempFilters(emptyFilters);
	};

	const totalActiveFilters = Object.values(queryOptions.filters).flat().length;

	// Flatten all pages of users
	const users = data?.pages.flatMap((page) => page.results) ?? [];

	if (isLoading) {
		return (
			<Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
				<CircularProgress />
			</Box>
		);
	}

	if (isError && error) {
		return (
			<Typography color="error" sx={{ textAlign: 'center', py: 8 }} variant="h6">
				{error.message}
			</Typography>
		);
	}

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
					User Search
				</Typography>
				<Typography color="text.secondary" sx={{ mb: 4, maxWidth: 'md', mx: 'auto' }} variant="h6">
					Discover and connect with users like you
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
						searchValue={queryOptions.search}
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
						{Object.entries(queryOptions.filters).map(([type, values]) =>
							values.map((value) => (
								<Chip
									key={`${type}-${value}`}
									label={value}
									onDelete={() =>
										handleFilterChange(type as keyof typeof queryOptions.filters, value)
									}
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

			<Box width="100%">
				{users.length === 0 ? (
					<Typography
						align="center"
						color="text.secondary"
						fontWeight={500}
						sx={{ py: { xs: 2, sm: 3, md: 6, lg: 10 } }}
						variant="h3"
					>
						We couldn&apos;t find any users matching your search criteria
					</Typography>
				) : (
					<Box sx={{ maxWidth: 'md', mx: 'auto' }}>
						{users.map((user) => (
							<Link href={`/user/${user.userId}`} key={user.userId} sx={{ textDecoration: 'none' }}>
								<Card
									key={user.userId}
									sx={{
										mb: 2,
										p: 2,
										'&:hover': {
											backgroundColor: 'action.hover',
											cursor: 'pointer',
										},
									}}
								>
									<Stack alignItems="center" direction="row" justifyContent="space-between">
										<Stack alignItems="center" direction="row" spacing={2}>
											<Avatar src={user.avatarImageUrl} sx={{ width: 48, height: 48 }} />
											<Box>
												<Link
													href={`/user/${user.userId}`}
													sx={{ fontWeight: 500 }}
													underline="hover"
													variant="subtitle1"
												>
													{user.username}
												</Link>
												<Typography color="text.secondary" variant="body2">
													{user.favoriteOrgs?.length} favorite organizations •{' '}
													{user.favoriteCauses?.length} causes
												</Typography>
											</Box>
										</Stack>
										<Button
											color="primary"
											onClick={() => {}}
											sx={{ minWidth: 100 }}
											variant="contained"
										>
											Follow
										</Button>
									</Stack>
								</Card>
							</Link>
						))}
					</Box>
				)}
			</Box>

			{/* Infinite scroll loader */}
			<Box
				ref={loadMoreRef}
				sx={{
					py: 4,
					textAlign: 'center',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				{isFetchingNextPage ? (
					<CircularProgress size={32} />
				) : hasNextPage ? (
					<Typography color="text.secondary">Scroll to load more</Typography>
				) : users.length > 0 ? (
					<Typography color="text.secondary">No more users to load</Typography>
				) : null}
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

export { UserCatalog };
