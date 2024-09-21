import { useQuery } from '@tanstack/react-query';
import { getResource } from '../../../utils/Resources/getResource';
import { causeKeys } from '../../../utils/queryKeys';
import { Cause } from '..';

const useGetCauseAll = () => {
	const query = useQuery<Cause[]>({
		queryKey: causeKeys.all,
		queryFn: () => getResource('/cause'),
	});
	return query;
};

export { useGetCauseAll };
