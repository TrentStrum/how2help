import { useQuery } from '@tanstack/react-query';

import { getResource } from '../../utils/Resources/getResource';
import { causeKeys } from '../../utils/queryKeys';

const useGetCauseById = (causeId: number) => {
	const query = useQuery({
		queryKey: causeKeys.detail(causeId),
		queryFn: () => getResource(`/cause/${causeId}`),
	});
	return query;
};

export { useGetCauseById };
