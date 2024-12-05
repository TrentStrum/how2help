import { Paper, Stack, Typography, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useGetOrgById } from '@api/entities/organization';

import { OrgProfileBanner } from './OrgProfileBanner';
import { OrgProfileTabs } from './OrgProfileTabs';

const OrgProfile = () => {
	const { orgId } = useParams<{ orgId: string }>();
	const { data: org, isPending, isError } = useGetOrgById(Number(orgId));

	if (isPending) return <Typography>Loading...</Typography>;
	if (isError) return <Typography>Error loading organization</Typography>;
	if (!org) return <Typography>Organization not found</Typography>;

	return (
		<Paper
			elevation={0}
			sx={{
				borderRadius: 2,
				bgcolor: 'background.paper',
				transition: 'all 0.3s ease-in-out',
				overflow: 'hidden',
			}}
		>
			<OrgProfileBanner org={org} />
			<Divider />
			<Stack
				spacing={4}
				sx={{
					p: { xs: 3, sm: 4 },
				}}
			>
				<OrgProfileTabs orgId={org.orgId} />
			</Stack>
		</Paper>
	);
};

export { OrgProfile };
