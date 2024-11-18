import { useQuery } from '@tanstack/react-query';

import { orgKeys } from '@api-utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

import { Organization } from '..';

const useGetOrgById = (orgId: number) => {
	const query = useQuery<Organization>({
		queryKey: orgKeys.detail(orgId),
		queryFn: () => getResource(`/org/${orgId}`),
		enabled: !!orgId && !isNaN(orgId),
		staleTime: 1000 * 60 * 5,
		retry: 1,
		select: (data: any): Organization => {
			if (!data || typeof data !== 'object') {
				throw new Error('Invalid organization data received');
			}

			// Ensure all required fields are present
			const requiredFields = ['orgId', 'name', 'description', 'type'];
			for (const field of requiredFields) {
				if (!(field in data)) {
					throw new Error(`Missing required field: ${field}`);
				}
			}

			// Transform the data to include optional new fields with defaults
			return {
				...data,
				mission: data.mission || null,
				foundedYear: data.foundedYear || null,
				size: data.size || null,
				email: data.email || null,
				phone: data.phone || null,
				address: data.address || null,
				website: data.website || data.orgWebUrl || null,
			};
		},
		retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
	});

	return query;
};

export { useGetOrgById };
