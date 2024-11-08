import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Typography, Container, Box, Grid, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

import { useGetOrgsAll, OrgFilters } from '@api/entities/organization';
import { H2hPagination } from '@app/components/Pagination/H2hPagination';
import { H2hSkeleton } from '@app/components/skeleton/Skeleton';
import { OrgCard } from '@app/features/Organization/index';

const OrgCatalog = () => {
	const limitCount = 8; // Number of items per page
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState<OrgFilters['search']>('');
	const { data, isPending, isError, error, isFetching } = useGetOrgsAll(
		currentPage,
		limitCount,
		search,
	);

	const handleSearch = (value: string) => {
		setSearch(value);
		setCurrentPage(1); // Reset to first page when searching
	};

	if (isPending) return <H2hSkeleton />;
	if (isError) return <Typography variant="body2">{error.message}</Typography>;

	const orgs = data?.results || [];

	const count = Math.ceil(data?.total / limitCount);

	return (
		<Container>
			<Box sx={{ flexGrow: 1 }}>
				<Grid columns={{ xs: 4, sm: 8, md: 12 }} container spacing={{ xs: 2, md: 3 }}>
					<Grid item xs={12}>
						<TextField
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchTwoToneIcon />
									</InputAdornment>
								),
							}}
							fullWidth
							onChange={(e) => handleSearch(e.target.value)}
							placeholder="Search by organization name..."
							value={search}
						/>
					</Grid>
					{orgs.map((org) => (
						<Grid item key={org.orgId} md={4} sm={4} xs={2}>
							<OrgCard org={org} />
						</Grid>
					))}
				</Grid>
			</Box>
			<Box mt={2}>
				<H2hPagination
					changePage={setCurrentPage}
					count={count}
					isFetching={isFetching}
					page={currentPage}
				/>
			</Box>
		</Container>
	);
};

export { OrgCatalog };
