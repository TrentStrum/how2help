import { useSupabaseQuery } from './useSupabaseQuery';
import { useSupabaseMutation } from './useSupabaseMutation';
import { eventRepository } from '@lib/repositories';

export const useEvents = (page = 1, limit = 10) => {
	return useSupabaseQuery(
		['events', page, limit],
		() => eventRepository.findUpcoming(page, limit)
	);
};

export const useEventsByOrganization = (organizationId: string, page = 1, limit = 10) => {
	return useSupabaseQuery(
		['events', 'organization', organizationId, page, limit],
		() => eventRepository.findActiveByOrganization(organizationId, page, limit),
		{
			enabled: !!organizationId,
		}
	);
};

export const useEvent = (eventId: string) => {
	return useSupabaseQuery(
		['events', eventId],
		() => eventRepository.findById(eventId),
		{
			enabled: !!eventId,
		}
	);
};

export const useCreateEvent = () => {
	return useSupabaseMutation(
		(data) => eventRepository.create(data),
		{
			invalidateQueries: ['events'],
		}
	);
};

export const useUpdateEvent = (eventId: string) => {
	return useSupabaseMutation(
		(data) => eventRepository.update(eventId, data),
		{
			invalidateQueries: ['events', eventId],
		}
	);
};