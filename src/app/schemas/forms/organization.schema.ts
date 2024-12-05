import { z } from 'zod';

export const organizationSchema = z.object({
	name: z.string().min(1, 'Organization name is required'),
	type: z.enum(['nonprofit', 'charity', 'community', 'other']),
	mission: z.string().min(10, 'Mission statement must be at least 10 characters'),
	contact: z.object({
		email: z.string().email('Invalid email address'),
		phone: z.string().min(1, 'Phone number is required'),
		website: z.string().url('Invalid website URL').optional(),
	}),
	location: z.object({
		address: z.string().min(1, 'Address is required'),
		city: z.string().min(1, 'City is required'),
		state: z.string().min(1, 'State is required'),
		country: z.string().min(1, 'Country is required'),
	}),
	serviceAreas: z.array(z.string()).min(1, 'Select at least one service area'),
	socialMedia: z.object({
		facebook: z.string().url('Invalid Facebook URL').optional(),
		twitter: z.string().url('Invalid Twitter URL').optional(),
		linkedin: z.string().url('Invalid LinkedIn URL').optional(),
		instagram: z.string().url('Invalid Instagram URL').optional(),
	}),
	staff: z.array(z.object({
		name: z.string().min(1, 'Staff member name is required'),
		role: z.string().min(1, 'Role is required'),
		email: z.string().email('Invalid email address'),
	})).min(1, 'Add at least one staff member'),
});

export type OrganizationFormData = z.infer<typeof organizationSchema>;