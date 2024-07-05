import { useQuery } from '@tanstack/react-query';
import { causeKeys } from '../../queryKeys';
import { getResource } from '../../utils';

const useGetCausesAll = () => {
	const query = useQuery({
		queryKey: causeKeys.all,
		queryFn: () => getResource('/cause'),
	});
	return query;
};

export { useGetCausesAll };
