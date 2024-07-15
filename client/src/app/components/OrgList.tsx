import { Box, Container, Grid, Typography } from '@mui/material';

import { Organization } from '../../../api/hooks/organization/organization.types';
import { useGetOrgsAll } from '../../../api/hooks/organization/useGetOrgs';
import { OrgCard } from '../pages/Catalog/OrgCard';

export default function OrgList() {
	const { data: orgs, isLoading, isError } = useGetOrgsAll();

	if (isLoading) return <Typography variant='body2'>Loading...</Typography>;
	if (isError) return <Typography variant='body2'>Error...</Typography>;

	return (
		<Container>
			<Box sx={{ flexGrow: 1 }}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{orgs?.map((org: Organization) => (
						<Grid
							item
							xs={2}
							sm={4}
							md={4}
							key={org.orgId}
						>
							<OrgCard
								org={org}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
}
