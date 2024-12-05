import { z } from 'zod';

export const activitySchema = z.object({
	role: z.string().min(1, 'Role title is required'),
	commitment: z.object({
		hours: z.number().min(1, 'Minimum hours required'),
		frequency: z.enum(['one-time', 'weekly', 'monthly', 'flexible']),
		duration: z.string().min(1, 'Duration is required'),
	}),
	requirements: z.object({
		skills: z.array(z.string()).min(1, 'Select at least one required skill'),
		experience: z.string().optional(),
		certifications: z.array(z.string()),
		background_check: z.boolean(),
	}),
	health: z.object({
		physical_demands: z.string(),
		safety_equipment: z.array(z.string()),
		vaccinations: z.array(z.string()),
	}),
	references: z.array(z.object({
		name: z.string().min(1, 'Reference name is required'),
		relationship: z.string().min(1, 'Relationship is required'),
		contact: z.string().min(1, 'Contact information is required'),
	})).min(1, 'At least one reference is required'),
	motivation: z.string().min(50, 'Please provide a detailed motivation statement'),
});

export type ActivityFormData = z.infer<typeof activitySchema>;