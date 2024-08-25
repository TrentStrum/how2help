import { useQuery } from '@tanstack/react-query';
import { getResource } from '../../utils/Resources/getResource';
import { Cause } from '../../../../types/cause.types';
import { causeKeys } from '../../utils/queryKeys';

const useGetCauseAll = () => {
	const query = useQuery<Cause[]>({
		queryKey: causeKeys.all,
		queryFn: () => getResource('/cause'),
	});
	return query;
};

export { useGetCauseAll };
