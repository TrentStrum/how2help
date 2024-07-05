import { useQuery } from '@tanstack/react-query';
import { getResource } from '../../utils';
import { Cause } from '../../cause.types';
import { causeKeys } from '../../queryKeys';


const useGetCauseAll = () => {
	const query = useQuery<Cause[]>({
		queryKey: causeKeys.all,
		queryFn: () => getResource('/cause'),
	});
	return query;
};

export { useGetCauseAll }; 