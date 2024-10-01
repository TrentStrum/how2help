import { Box, Grid, Pagination, Typography } from '@mui/material';
import { CauseOrgSearchCard } from './CauseOrgSearchCard';
import { Searchbar } from '../../../../app/components/ui/Searchbar';
import { SearchContained } from '../../../../app/components/ui/SearchContained';
import { Organization, useGetOrgByCause } from '../../../../app/api/entities/organization';

type Props = {
	causeId?: string;
};

const CauseOrgSearch = ({ causeId }: Props) => {
	const { data: orgs, isPending, isError } = useGetOrgByCause(causeId!);

	if (isPending || !orgs) return <Typography variant='body2'>Loading...</Typography>;
	if (isError) return <Typography variant='body2'>Error...</Typography>;

	if (orgs === undefined) {
		return <p>Error</p>;
	} else {
		console.log([orgs]);
	}

	return (
		<>
			<SearchContained />
			<Searchbar />

			<Grid
				container
				spacing={{ xs: 2 }}
				m={2}
			>
				{orgs.map((org: Organization) => (
					<Grid
						xs={10}
						lg={2}
						md={4}
						key={org.orgId}
						m={1}
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
