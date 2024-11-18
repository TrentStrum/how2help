import { Paper, Stack, Typography, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useGetCauseById } from '@api/entities/cause';

import { CauseProfileBanner } from './CauseProfileBanner';
import { CauseProfileTabs } from './CauseProfileTabs';

const CauseProfile = () => {
	const { causeId } = useParams<{ causeId: string }>();
	const { data: cause, isPending, isError } = useGetCauseById(Number(causeId));

	if (isPending) return <Typography>Loading...</Typography>;
	if (isError) return <Typography>Error loading cause</Typography>;
	if (!cause) return <Typography>Cause not found</Typography>;

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
			<CauseProfileBanner cause={cause} />
			<Divider />
			<Stack
				spacing={4}
				sx={{
					p: { xs: 3, sm: 4 },
				}}
			>
				<CauseProfileTabs causeId={cause.causeId} />
			</Stack>
		</Paper>
	);
};

export { CauseProfile };
