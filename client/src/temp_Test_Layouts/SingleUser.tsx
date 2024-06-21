import { useQuery } from '@tanstack/react-query';
import agent from '../app/api/handlers/agent';

export default function SingleUser() {
	const userId = 1;
	const { isLoading, isError, data: user, error } = useQuery({
		queryKey: ['getUserById'],
		queryFn: async () => agent.User.get(userId),
	});

	if (isLoading) return <p>Loading...</p>;

	if (isError) return <p>Error: {error?.message}</p>;

	return (
		<>
			<p>{user?.lastName}</p>
		</>
	);
}
