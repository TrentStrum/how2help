import { Box } from '@mui/material';

import { User } from '@api/entities/user/types/user.types';

interface Props {
	user: User;
}

const UserProfileOrganizationsTab = ({ user }: Props) => {
	return (
		<Box>
			{/* TODO: Add organization list/grid for user */}
			<Box>Organizations tab content for user: {user.username}</Box>
		</Box>
	);
};

export { UserProfileOrganizationsTab };
