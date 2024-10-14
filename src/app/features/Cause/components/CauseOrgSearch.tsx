import { Box, Grid, Pagination, Typography } from '@mui/material';

import { CauseOrgSearchCard } from './CauseOrgSearchCard';
import { Organization, useGetOrgByCause } from '../../../api/entities/organization';
import { Searchbar } from '../../../components/Searchbar/Searchbar';
import { SearchContained } from '../../../components/Searchbar/SearchContained';

type Props = {
	causeId?: string;
};

const CauseOrgSearch = ({ causeId }: Props) => {
	const { data: orgs, isPending, isError } = useGetOrgByCause(causeId!);

	if (isPending || !orgs) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">Error...</Typography>;

	if (orgs === undefined) {
		return <p>Error</p>;
	} else {
		console.log([orgs]);
	}

	return (
		<>
			<SearchContained />
			<Searchbar />

			<Grid container m={2} spacing={{ xs: 2 }}>
				{orgs.map((org: Organization) => (
					<Grid key={org.orgId} lg={2} m={1} md={4} xs={10}>
						<CauseOrgSearchCard org={org} />
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
				<Pagination color="primary" count={15} defaultPage={6} shape="rounded" siblingCount={0} />
			</Box>
		</>
	);
};

export { CauseOrgSearch };
