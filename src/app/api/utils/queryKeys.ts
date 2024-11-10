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
	list: (entityId: number) => [...causeKeys.lists(), { entityId }] as const,
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

export const eventKeys = {
	all: ['event'] as const,
	lists: () => [...eventKeys.all, 'list'] as const,
	list: (filters: string) => [...eventKeys.lists(), { filters }] as const,
	details: () => [...imageKeys.all, 'detail'] as const,
	detail: (imageId: number) => [...eventKeys.details(), imageId] as const,
};

export const reviewKeys = {
	all: ['event'] as const,
	lists: () => [...reviewKeys.all, 'list'] as const,
	list: (filters: string) => [...reviewKeys.lists(), { filters }] as const,
	details: () => [...reviewKeys.all, 'detail'] as const,
	detail: (imageId: number) => [...reviewKeys.details(), imageId] as const,
};

export const activityKeys = {
	all: ['activity'] as const,
	lists: () => [...activityKeys.all, 'list'] as const,
	list: (filters: string) => [...activityKeys.lists(), { filters }] as const,
	details: () => [...activityKeys.all, 'detail'] as const,
	detail: (imageId: number) => [...activityKeys.details(), imageId] as const,
};
