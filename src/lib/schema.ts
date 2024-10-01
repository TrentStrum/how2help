import { z } from 'zod';

// export const schema = z.intersection(
	export const schema = z.object({
		// name: z
		// 	.string()
		// 	.min(1, { message: 'Name is required and must be less than 10 characters' }),
		email: z.string().email().min(1, { message: 'Email is required' }),
		// states: z
		// 	.array(z.string())
		// 	.min(1, { message: 'State is required' })
		// 	.max(2, { message: 'You can select up to 2 states' }),
		// gender: z.string().min(1),
		// registrationDateAndTime: z.date(),
		password: z.string().min(6, 'Password must be at least 6 characters long'),
	});

	// z.discriminatedUnion('variant', [
	// 	z.object({ variant: z.literal('create') }),
	// 	z.object({ variant: z.literal('update'), id: z.string().min(1) }),
	// ])

// .and(
// 	z.union([
// 		z.object({ isTeacher: z.literal(false) }),
// 		z.object({
// 			isTeacher: z.literal(true),

// 			students: z.array(
// 				z.object({
// 					name: z.string().min(4),
// 				})
// 			),
// 		}),
// ])
// );

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
	// variant: 'create',
	email: '',
	// name: '',
	// states: [],
	// gender: '',
	// registrationDateAndTime: new Date(),
    password: '',
};
