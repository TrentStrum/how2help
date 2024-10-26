import { Box, Grid, Pagination, Typography } from '@mui/material';

import { Organization } from '@api/entities/organization';

import { EventOrgSearchCard } from './EventOrgSearchCard';
import { Searchbar } from '../../../components/Searchbar/Searchbar';
import { SearchContained } from '../../../components/Searchbar/SearchContained';

type Props = {
	eventId?: string;
};

const EventOrgSearch = ({ eventId }: Props) => {
	// const { data: orgs, isPending, isError } = useGetOrgByEvent(eventId!);

	// if (isPending || !orgs) return <Typography variant="body2">Loading...</Typography>;
	// if (isError) return <Typography variant="body2">Error...</Typography>;

	// if (orgs === undefined) {
	// 	return <p>Error</p>;
	// } else {
	// 	console.log([orgs]);
	// }

	return (
		<>
			<Typography variant="h4">Find Organization by Event coming soon...</Typography>
			{/* <SearchContained />
			<Searchbar />
			<Grid container m={2} spacing={{ xs: 2 }}>
				{orgs.map((org: Organization) => (
					<Grid key={org.orgId} lg={2} m={1} md={4} xs={10}>
						<EventOrgSearchCard org={org} />
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
			</Box> */}
		</>
	);
};

export { EventOrgSearch };
