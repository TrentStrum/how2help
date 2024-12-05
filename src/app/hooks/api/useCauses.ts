import { useSupabaseQuery } from './useSupabaseQuery';
import { useSupabaseMutation } from './useSupabaseMutation';
import { causeRepository } from '@lib/repositories';

export const useCauses = (page = 1, limit = 10) => {
	return useSupabaseQuery(
		['causes', page, limit],
		() => causeRepository.findActive(page, limit)
	);
};

export const useCause = (causeId: string) => {
	return useSupabaseQuery(
		['causes', causeId],
		() => causeRepository.findById(causeId),
		{
			enabled: !!causeId,
		}
	);
};

export const useSearchCauses = (query: string, page = 1, limit = 10) => {
	return useSupabaseQuery(
		['causes', 'search', query, page, limit],
		() => causeRepository.searchCauses(query, page, limit),
		{
			enabled: !!query,
		}
	);
};

export const useCreateCause = () => {
	return useSupabaseMutation(
		(data) => causeRepository.create(data),
		{
			invalidateQueries: ['causes'],
		}
	);
};

export const useUpdateCause = (causeId: string) => {
	return useSupabaseMutation(
		(data) => causeRepository.update(causeId, data),
		{
			invalidateQueries: ['causes', causeId],
		}
	);
};