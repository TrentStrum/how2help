import { useQuery } from '@tanstack/react-query';
import { userKeys } from '../../../utils/queryKeys';
import { getResource } from '../../../utils/Resources/getResource';
import { User } from '..';



const useGetUsersAll = () => {
	const query = useQuery<User[]>({
		queryKey: userKeys.all,
		queryFn: () => getResource('/user'),
	});
	return query;
};

export { useGetUsersAll };
