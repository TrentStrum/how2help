

export const orgKeys = {
	all: ['org'] as const,
	lists: () => [...orgKeys.all, 'list'] as const,
	list: (filters: string) => [...orgKeys.lists(), { filters }] as const,
	details: () => [...orgKeys.all, 'detail'] as const,
	detail: (orgId: number) => [...orgKeys.details(), orgId] as const,
};

export const userKeys = {
	all: ['user'] as const,
	lists: () => [...userKeys.all, 'list'] as const,
	list: (filters: string) => [...userKeys.lists(), { filters }] as const,
	details: () => [...userKeys.all, 'detail'] as const,
	detail: (userId: number) => [...userKeys.details(), userId] as const,
};

export const causeKeys = {
	all: ['cause'] as const,
	lists: () => [...causeKeys.all, 'list'] as const,
	list: (filters: string) => [...causeKeys.lists(), { filters }] as const,
	details: () => [...causeKeys.all, 'detail'] as const,
	detail: (causeId: number) => [...causeKeys.details(), causeId] as const,
};

export const imageKeys = {
	all: ['image'] as const,
	lists: () => [...imageKeys.all, 'list'] as const,
	list: (filters: string) => [...imageKeys.lists(), { filters }] as const,
	details: () => [...imageKeys.all, 'detail'] as const,
	detail: (imageId: number) => [...imageKeys.details(), imageId] as const,
};