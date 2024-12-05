import { z } from 'zod';

export const causeSchema = z.object({
	name: z.string().min(1, 'Cause name is required'),
	category: z.string().min(1, 'Category is required'),
	description: z.string().min(10, 'Description must be at least 10 characters'),
	objectives: z.array(z.string()).min(1, 'Add at least one objective'),
	beneficiaries: z.array(z.string()).min(1, 'Add at least one beneficiary group'),
	impactMetrics: z.array(z.object({
		metric: z.string().min(1, 'Metric name is required'),
		target: z.number().min(0, 'Target must be a positive number'),
		unit: z.string().min(1, 'Unit is required'),
	})),
	organizations: z.array(z.string()).min(1, 'Select at least one organization'),
	media: z.array(z.object({
		type: z.enum(['image', 'video', 'document']),
		url: z.string().url('Invalid URL'),
		caption: z.string().optional(),
	})),
});

export type CauseFormData = z.infer<typeof causeSchema>;