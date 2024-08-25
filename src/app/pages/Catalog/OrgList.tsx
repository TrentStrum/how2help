import { Box, Container, Grid, Skeleton, Typography } from '@mui/material';
import { Organization } from '../../../types/organization.types';
import { useGetOrgsAll } from '../../api/hooks/organization/useGetOrgs';
import { OrgCard } from './OrgCard';



export default function OrgList() {
	const { data: orgs, isLoading, isError } = useGetOrgsAll();

	if (isLoading) return <Skeleton />
	if (isError) return <Typography variant='body2'>Error...</Typography>;

	return (
		<Container>
			<Box mt={4}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
				>
					{orgs?.map((org: Organization) => (
						<Grid
							item
							xs={2}
							sm={4}
							md={4}
							key={org.orgId}
						>
							<OrgCard org={org} />
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
}
