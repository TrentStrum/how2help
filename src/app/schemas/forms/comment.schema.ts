import { z } from 'zod';

export const commentSchema = z.object({
	content: z.string().min(1, 'Comment cannot be empty'),
	parentId: z.string().optional(),
	attachments: z.array(z.object({
		type: z.enum(['image', 'file']),
		url: z.string().url('Invalid URL'),
		name: z.string(),
	})),
	visibility: z.enum(['public', 'private', 'connections']),
	flags: z.array(z.enum(['spam', 'inappropriate', 'offensive'])),
});

export type CommentFormData = z.infer<typeof commentSchema>;