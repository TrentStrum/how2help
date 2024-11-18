// import { Box, Grid, Pagination, Typography } from '@mui/material';
// import { useState } from 'react';

// import { CauseOrgSearchCard } from './CauseOrgSearchCard';
// import { Organization, useGetOrgByCause } from '../../../api/entities/organization';
// import { Searchbar } from '../../../components/Searchbar/Searchbar';
// import { SearchContained } from '../../../components/Searchbar/SearchContained';

// type Props = {
// 	causeId: string;
// };

// const CauseOrgSearch = ({ causeId }: Props) => {
// 	const [currentPage, setCurrentPage] = useState(0);
// 	const [search, setSearch] = useState<string>('');
// 	const limitCount = 3;
// 	const {
// 		data: orgs,
// 		isPending,
// 		isError,
// 	} = useGetOrgByCause(causeId, currentPage, limitCount, search);

// 	if (isPending || !orgs) return <Typography variant="body2">Loading...</Typography>;
// 	if (isError) return <Typography variant="body2">Error...</Typography>;

// 	const handleSearch = (value: string) => {
// 		setSearch(value);
// 		setCurrentPage(0);
// 	};

// 	if (orgs === undefined) {
// 		return <p>Error</p>;
// 	} else {
// 		console.log([orgs]);
// 	}

// 	return (
// 		<>
// 			<SearchContained />
// 			<Typography variant="h4">Where am I?</Typography>
// 			<Searchbar />
// 			<Grid container m={2} spacing={{ xs: 2 }}>
// 				{orgs.results.map((org: Organization) => (
// 					<Grid item key={org.orgId} lg={2} m={1} md={4} xs={10}>
// 						<CauseOrgSearchCard org={org} />
// 					</Grid>
// 				))}
// 			</Grid>
// 			<Box
// 				alignItems="center"
// 				display="flex"
// 				justifyContent="center"
// 				sx={{
// 					pt: { xs: 2, sm: 3 },
// 				}}
// 			>
// 				<Pagination color="primary" count={15} defaultPage={6} shape="rounded" siblingCount={0} />
// 			</Box>
// 		</>
// 	);
// };

// export { CauseOrgSearch };
