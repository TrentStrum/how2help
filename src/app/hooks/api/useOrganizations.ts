import { useSupabaseQuery } from './useSupabaseQuery';
import { useSupabaseMutation } from './useSupabaseMutation';
import { organizationRepository } from '@lib/repositories';

export const useOrganizations = (page = 1, limit = 10) => {
	return useSupabaseQuery(
		['organizations', page, limit],
		() => organizationRepository.findMany({ page, limit })
	);
};

export const useOrganizationsByCause = (causeId: string, page = 1, limit = 10) => {
	return useSupabaseQuery(
		['organizations', 'cause', causeId, page, limit],
		() => organizationRepository.findByCause(causeId, page, limit),
		{
			enabled: !!causeId,
		}
	);
};

export const useOrganization = (organizationId: string) => {
	return useSupabaseQuery(
		['organizations', organizationId],
		() => organizationRepository.findById(organizationId),
		{
			enabled: !!organizationId,
		}
	);
};

export const useCreateOrganization = () => {
	return useSupabaseMutation(
		(data) => organizationRepository.create(data),
		{
			invalidateQueries: ['organizations'],
		}
	);
};

export const useUpdateOrganization = (organizationId: string) => {
	return useSupabaseMutation(
		(data) => organizationRepository.update(organizationId, data),
		{
			invalidateQueries: ['organizations', organizationId],
		}
	);
};