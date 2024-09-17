import { Box, Grid, Pagination, Typography } from '@mui/material';
import { SearchContained } from './SearchContained';
import { useGetOrgByCause } from '../../api/hooks/organization/useGetOrgByCause';
import { CauseOrgSearchCard } from './CauseOrgSearchCard';
import { Organization } from '../../types/organization.types';
import { CauseOrgSearchbar } from './CauseOrgSearchbar';

type Props = {
	causeId: string;
};

const CauseOrgSearch = ({ causeId }: Props) => {
	const { data: orgs, isLoading, isError } = useGetOrgByCause(causeId);

	if (isLoading) return <Typography variant='body2'>Loading...</Typography>;
	if (isError) return <Typography variant='body2'>Error...</Typography>;

	if (orgs === undefined) {
		return <p>Error</p>;
	} else {
		console.log([orgs]);
	}

	

	return (
		<>
			<SearchContained />
			<CauseOrgSearchbar />
			<Grid
				container
				spacing={{ xs: 2, sm: 3 }}
			>
				{orgs.map((org: Organization) => (
					<Grid
						xs={12}
						lg={4}
						md={6}
						key={org.orgId}
					>
						<CauseOrgSearchCard org={org} />
					</Grid>
				))}
			</Grid>
			<Box
				sx={{
					pt: { xs: 2, sm: 3 },
				}}
				display='flex'
				alignItems='center'
				justifyContent='center'
			>
				<Pagination
					count={15}
					defaultPage={6}
					siblingCount={0}
					shape='rounded'
					color='primary'
				/>
			</Box>
		</>
	);
};

export { CauseOrgSearch };
