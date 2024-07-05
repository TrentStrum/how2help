import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Organization } from '../../../api/organization.types';
import { useGetOrgsAll } from '../../../api/hooks/organization/useGetOrgs';

export default function OrgList() {
	const { data: orgs, isLoading, isError } = useGetOrgsAll();

	if (isLoading) return <Typography variant='body2'>Loading...</Typography>;
	if (isError) return <Typography variant='body2'>Error...</Typography>;

	return (
		<ul>
			{orgs?.map((org: Organization) => (
				<li key={org.orgId}>
					<Button>
						<Link to={`/org/${org.orgId}`}>
							<Typography variant='body2'>{org.name}</Typography>
						</Link>
					</Button>
				</li>
			))}
		</ul>
	);
}
