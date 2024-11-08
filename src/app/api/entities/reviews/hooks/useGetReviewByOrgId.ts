import { useQuery } from '@tanstack/react-query';

import { reviewKeys } from '@api-utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

import { Reviews } from '../types/review.types';

const useGetReviewByOrgId = (orgId: string) => {
	const query = useQuery<Reviews[]>({
		queryKey: reviewKeys.list(orgId),
		queryFn: () => getResource(`/review/by-org/${orgId}`),
	});

	return query;
};

export { useGetReviewByOrgId };
