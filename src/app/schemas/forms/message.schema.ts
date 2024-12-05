import { z } from 'zod';

export const messageSchema = z.object({
	subject: z.string().min(1, 'Subject is required'),
	content: z.string().min(1, 'Message cannot be empty'),
	recipients: z.array(z.string()).min(1, 'Select at least one recipient'),
	priority: z.enum(['low', 'normal', 'high']),
	attachments: z.array(z.object({
		type: z.enum(['image', 'document']),
		url: z.string().url('Invalid URL'),
		name: z.string(),
		size: z.number(),
	})),
	category: z.enum(['general', 'event', 'activity', 'support']),
	template: z.string().optional(),
	read_receipt: z.boolean(),
});

export type MessageFormData = z.infer<typeof messageSchema>;