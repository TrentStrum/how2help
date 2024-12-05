import { z } from 'zod';

export const userProfileSchema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	email: z.string().email('Invalid email address'),
	phone: z.string().optional(),
	location: z.object({
		street: z.string().min(1, 'Street address is required'),
		city: z.string().min(1, 'City is required'),
		state: z.string().min(1, 'State is required'),
		country: z.string().min(1, 'Country is required'),
	}),
	skills: z.array(z.string()).min(1, 'Select at least one skill'),
	interests: z.array(z.string()).min(1, 'Select at least one interest'),
	availability: z.object({
		weekdays: z.boolean(),
		weekends: z.boolean(),
		mornings: z.boolean(),
		afternoons: z.boolean(),
		evenings: z.boolean(),
	}),
	languages: z.array(z.string()),
	emergencyContact: z.object({
		name: z.string().min(1, 'Emergency contact name is required'),
		relationship: z.string().min(1, 'Relationship is required'),
		phone: z.string().min(1, 'Emergency contact phone is required'),
	}),
	privacySettings: z.object({
		profileVisibility: z.enum(['public', 'private', 'connections']),
		emailVisibility: z.boolean(),
		phoneVisibility: z.boolean(),
	}),
});

export type UserProfileFormData = z.infer<typeof userProfileSchema>;