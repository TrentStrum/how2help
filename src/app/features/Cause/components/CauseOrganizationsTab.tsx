import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';

import { Organization, useGetOrgByCause } from '@api/entities/organization';
import { H2hPagination } from '@app/components/Pagination/H2hPagination';
import { SearchOutline } from '@app/components/Searchbar/SearchOutline';

import { CauseOrgTabCard } from './CauseOrgTabCard';

type Props = {
	causeId: string;
};

const CauseOrganizationsTab = ({ causeId }: Props) => {
	const [currentPage, setCurrentPage] = useState(0);
	const limitCount = 3;
	const [searchTerm, setSearchTerm] = useState('');

	const { data, isPending, isError, error } = useGetOrgByCause(
		causeId,
		currentPage,
		limitCount,
		searchTerm,
	);

	const handleSearch = (value: string) => {
		setSearchTerm(value);
		setCurrentPage(0);
	};

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">{error.message}</Typography>;

	const orgs = data?.results;

	return (
		<>
			<Box sx={{ mb: { xs: 2, sm: 3 } }}>
				<SearchOutline
					onSearch={handleSearch}
					placeholder="Search organizations..."
					searchValue={searchTerm}
					sx={{ width: '100%' }}
				/>
			</Box>
			<Grid container spacing={3}>
				{orgs && orgs.length > 0 ? (
					orgs.map((org: Organization) => (
						<Grid item key={org.orgId} md={4} sm={6} xs={12}>
							<CauseOrgTabCard org={org} />
						</Grid>
					))
				) : (
					<Grid item xs={12}>
						<Typography align="center" variant="body1">
							No organizations found
						</Typography>
					</Grid>
				)}
			</Grid>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					pt: 3,
				}}
			>
				<H2hPagination
					changePage={setCurrentPage}
					count={Math.ceil((orgs?.length || 0) / limitCount)}
					isFetching={isPending}
					page={currentPage}
				/>
			</Box>
		</>
	);
};

export { CauseOrganizationsTab };
