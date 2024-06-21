import { useQuery } from '@tanstack/react-query';
import agent from '../app/api/handlers/agent';
import { User } from '../app/Models/IUser';

export default function UserList() {
	const {
		isPending,
		isError,
		data: users,
		error,
	} = useQuery({
		queryKey: ['getUsers'],
		queryFn: agent.User.getAll,
	});

	if (isPending) return <p>Loading...</p>;

	if (isError) return <p>Error: {error?.message}</p>;

	return (
		<>
			<ul>
				{users?.map((user: User) => (
					<li key={user.userId}>{user.firstName}</li>
				))}
			</ul>
		</>
	);
}
