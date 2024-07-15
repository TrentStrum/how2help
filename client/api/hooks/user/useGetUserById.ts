import { useQuery } from '@tanstack/react-query';
import { userKeys } from '../../utils/queryKeys';
import { getResource } from '../../utils/Resources/getResource';

const useGetUserById = (userId: number, userToken: string) => {
	const query = useQuery({
		queryKey: userKeys.detail(userId),
		queryFn: () => getResource(`/user/${userId}`, { headers: getJWTHeader(userToken) }),
		staleTime: Infinity,
	});
	return query;
};

export { useGetUserById };
