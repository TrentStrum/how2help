import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useGetUsersAll } from '../../api/hooks/user/useGetUsers';
import { User } from '../../types/user.types';





export default function UserList() {
	const { data: users, isLoading, isError } = useGetUsersAll();

	if (isLoading) return <Typography variant='body2'>Loading...</Typography>;
	if (isError) return <Typography variant='body2'>Error...</Typography>;

	return (
		<ul>
			{users?.map((user: User) => (
				<li key={user.userId}>
					<Button>
						<Link to={`/user/${user.userId}`}>
							<Typography variant='body2'>{user.firstName}</Typography>
						</Link>
					</Button>
				</li>
			))}
		</ul>
	);
}
