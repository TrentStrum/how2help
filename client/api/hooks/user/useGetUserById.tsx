import { useQuery } from '@tanstack/react-query';
import { userKeys } from '../../queryKeys';
import { getResource } from '../../utils';


const useGetUserById = (userId: number) => {
	const query = useQuery({
		queryKey: userKeys.detail(userId),
		queryFn: () => getResource(`/user/${userId}`),
	});
	return query;
};

export { useGetUserById };
