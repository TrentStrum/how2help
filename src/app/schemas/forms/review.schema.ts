import { z } from 'zod';

export const reviewSchema = z.object({
	rating: z.number().min(1).max(5),
	title: z.string().min(1, 'Review title is required'),
	content: z.string().min(10, 'Review must be at least 10 characters'),
	entityType: z.enum(['organization', 'event', 'volunteer']),
	entityId: z.string().min(1, 'Entity ID is required'),
	media: z.array(z.object({
		type: z.enum(['image', 'video']),
		url: z.string().url('Invalid URL'),
		caption: z.string().optional(),
	})),
	experience_date: z.date(),
	recommend: z.boolean(),
	verification: z.object({
		participated: z.boolean(),
		proof: z.string().optional(),
	}),
});

export type ReviewFormData = z.infer<typeof reviewSchema>;