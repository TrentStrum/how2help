import { useQuery } from '@tanstack/react-query';
import { causeKeys } from '../../../utils/queryKeys';
import { getResource } from '../../../utils/Resources/getResource';

const useGetCausesAll = () => {
	const query = useQuery({
		queryKey: causeKeys.all,
		queryFn: () => getResource('/cause'),
	});
	return query;
};

export { useGetCausesAll };
