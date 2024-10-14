import { useQuery } from '@tanstack/react-query';

import { userKeys } from '@api-utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

import { User } from '..';

const useGetUsersAll = () => {
	const query = useQuery<User[]>({
		queryKey: userKeys.all,
		queryFn: () => getResource('/user'),
	});
	return query;
};

export { useGetUsersAll };
