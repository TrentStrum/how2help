import { useQuery } from '@tanstack/react-query';

import { activityKeys } from '@api-utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

import { Activity } from '..';

const useGetActivityById = (activityId: number) => {
	const query = useQuery<Activity>({
		queryKey: activityKeys.detail(activityId),
		queryFn: () => getResource(`/activity/${activityId}`),
	});

	return query;
};

export { useGetActivityById };
