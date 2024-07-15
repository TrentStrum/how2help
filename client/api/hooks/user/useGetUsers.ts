import { useQuery } from '@tanstack/react-query';

import { userKeys } from '../../utils/queryKeys';
import { getResource } from '../../utils/Resources/getResource';

const useGetUsers = () => {
	const query = useQuery({
		queryKey: userKeys.all,
		queryFn: () => getResource('/user'),
	});
	return query;
};

export { useGetUsers };
