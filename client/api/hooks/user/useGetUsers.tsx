import { useQuery } from '@tanstack/react-query';

import { userKeys } from '../../queryKeys';
import { getResource } from '../../utils';

const useGetUsers = () => {
	const query = useQuery({
		queryKey: userKeys.all,
		queryFn: () => getResource('/user'),
	});
	return query;
};

export { useGetUsers };
