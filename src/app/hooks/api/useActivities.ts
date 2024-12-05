import { useSupabaseQuery } from './useSupabaseQuery';
import { useSupabaseMutation } from './useSupabaseMutation';
import { activityRepository } from '@lib/repositories';

export const useActivities = (page = 1, limit = 10) => {
	return useSupabaseQuery(
		['activities', page, limit],
		() => activityRepository.findMany({ page, limit })
	);
};

export const useActivitiesByHost = (hostId: string, hostType: string, page = 1, limit = 10) => {
	return useSupabaseQuery(
		['activities', 'host', hostId, hostType, page, limit],
		() => activityRepository.findByHost(hostId, hostType, page, limit),
		{
			enabled: !!hostId && !!hostType,
		}
	);
};

export const useActivity = (activityId: string) => {
	return useSupabaseQuery(
		['activities', activityId],
		() => activityRepository.findById(activityId),
		{
			enabled: !!activityId,
		}
	);
};

export const useCreateActivity = () => {
	return useSupabaseMutation(
		(data) => activityRepository.create(data),
		{
			invalidateQueries: ['activities'],
		}
	);
};

export const useUpdateActivity = (activityId: string) => {
	return useSupabaseMutation(
		(data) => activityRepository.update(activityId, data),
		{
			invalidateQueries: ['activities', activityId],
		}
	);
};