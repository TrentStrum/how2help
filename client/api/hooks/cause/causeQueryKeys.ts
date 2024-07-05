export const userQueryKeys = {
	all: ['user'] as const,
	detail: (id: string) => [...userQueryKeys.details(), id] as const,
	details: () => [...userQueryKeys.all, 'detail'] as const,
	list: (filters: string) => [...userQueryKeys.lists(), { filters }] as const,
	lists: () => [...userQueryKeys.all, 'list'] as const,
};