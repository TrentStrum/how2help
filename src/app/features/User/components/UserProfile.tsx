import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useGetUserById } from '@api/entities/user';

import { UserProfileContainer } from './UserProfileContainer';

const UserProfile = () => {
	const { userId } = useParams();
	const { data: user, isPending, isError } = useGetUserById(Number(userId));

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">Error...</Typography>;

	return (
		<>
			<UserProfileContainer user={user} />;
		</>
	);
};

export { UserProfile };
