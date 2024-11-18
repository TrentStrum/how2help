import { Box, Typography } from '@mui/material';

import { User } from '@api/entities/user/types/user.types';

interface Props {
	user: User;
}

const UserProfileImpactTab = ({ user }: Props) => {
	return (
		<Box>
			<Typography gutterBottom variant="h6">
				{user.username}&apos;s Impact Overview
			</Typography>
			{/* TODO: Add impact metrics, volunteer hours, causes helped, etc */}
			<Typography color="text.secondary">Impact metrics coming soon...</Typography>
		</Box>
	);
};

export { UserProfileImpactTab };
