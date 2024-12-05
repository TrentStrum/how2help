import BusinessIcon from '@mui/icons-material/Business';
import CampaignIcon from '@mui/icons-material/Campaign';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Box, Grid, Skeleton, Typography } from '@mui/material';
import { ReactNode } from 'react';

import { useStatistics } from '@app/hooks/useStatistics';

const StatItem = ({
	icon,
	label,
	value,
	isLoading,
}: {
	icon: ReactNode;
	label: string;
	value: number;
	isLoading: boolean;
}) => (
	<Box
		sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			gap: 1,
		}}
	>
		{icon}
		{isLoading ? (
			<Skeleton height={30} width={60} />
		) : (
			<Typography color="primary" variant="h4">
				{value.toLocaleString()}
			</Typography>
		)}
		<Typography color="text.secondary" variant="body2">
			{label}
		</Typography>
	</Box>
);

export const Statistics = () => {
	const { data, isLoading } = useStatistics();

	return (
		<Grid
			container
			justifyContent="center"
			spacing={4}
			sx={{
				my: 2,
				py: 1,
				px: { xs: 2, sm: 4 },
				backgroundColor: 'background.paper',
				borderRadius: 1,
				boxShadow: 1,
			}}
		>
			<Grid item md={2.4} sm={4} xs={6}>
				<StatItem
					icon={<PeopleIcon color="primary" sx={{ fontSize: 40 }} />}
					isLoading={isLoading}
					label="Users"
					value={data?.userCount || 0}
				/>
			</Grid>
			<Grid item md={2.4} sm={4} xs={6}>
				<StatItem
					icon={<BusinessIcon color="primary" sx={{ fontSize: 40 }} />}
					isLoading={isLoading}
					label="Organizations"
					value={data?.organizationCount || 0}
				/>
			</Grid>
			<Grid item md={2.4} sm={4} xs={6}>
				<StatItem
					icon={<VolunteerActivismIcon color="primary" sx={{ fontSize: 40 }} />}
					isLoading={isLoading}
					label="Causes"
					value={data?.causeCount || 0}
				/>
			</Grid>
			<Grid item md={2.4} sm={4} xs={6}>
				<StatItem
					icon={<EventIcon color="primary" sx={{ fontSize: 40 }} />}
					isLoading={isLoading}
					label="Events"
					value={data?.eventCount || 0}
				/>
			</Grid>
			<Grid item md={2.4} sm={4} xs={6}>
				<StatItem
					icon={<CampaignIcon color="primary" sx={{ fontSize: 40 }} />}
					isLoading={isLoading}
					label="Activities"
					value={data?.activityCount || 0}
				/>
			</Grid>
		</Grid>
	);
};
