import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useGetUserById } from '../../api/hooks/user/useGetUserById';



const UserDetail = () => {
	const { userId } = useParams();
	const { data: user, isLoading, isError } = useGetUserById(Number(userId));

	if (isLoading) return <Typography variant='body2'>Loading...</Typography>;
	if (isError) return <Typography variant='body2'>Error...</Typography>;

	return (
		<>
			<Typography variant='body2'>{user?.firstName}</Typography>
		</>
	);
};

export { UserDetail };
