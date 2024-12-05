import { z } from 'zod';

export const eventSchema = z.object({
	title: z.string().min(1, 'Event title is required'),
	type: z.enum(['workshop', 'fundraiser', 'volunteer', 'awareness', 'other']),
	datetime: z.object({
		date: z.date(),
		startTime: z.string(),
		endTime: z.string(),
		timezone: z.string(),
	}),
	location: z.object({
		type: z.enum(['physical', 'virtual', 'hybrid']),
		address: z.string().optional(),
		virtualLink: z.string().url('Invalid virtual meeting URL').optional(),
		instructions: z.string().optional(),
	}),
	capacity: z.object({
		minimum: z.number().min(1, 'Minimum participants required'),
		maximum: z.number().min(1, 'Maximum participants required'),
	}),
	requirements: z.object({
		skills: z.array(z.string()),
		equipment: z.array(z.string()),
		age: z.number().min(0, 'Minimum age required'),
		experience: z.string().optional(),
	}),
	description: z.string().min(10, 'Description must be at least 10 characters'),
	registration: z.object({
		deadline: z.date(),
		fee: z.number().min(0, 'Fee must be 0 or greater'),
		refundPolicy: z.string().optional(),
	}),
	safety: z.array(z.string()).min(1, 'Add at least one safety guideline'),
});

export type EventFormData = z.infer<typeof eventSchema>;