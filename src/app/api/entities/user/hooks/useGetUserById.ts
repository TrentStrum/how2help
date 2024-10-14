import { useQuery } from '@tanstack/react-query';

import { userKeys } from '@api-utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

import { User } from '..';

const useGetUserById = (userId: number) => {
	const query = useQuery<User>({
		queryKey: userKeys.detail(userId),
		queryFn: () => getResource(`/user/${userId}`),
		staleTime: Infinity,
	});
	return query;
};

export { useGetUserById };
