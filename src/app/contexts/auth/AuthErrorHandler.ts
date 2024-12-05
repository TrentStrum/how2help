import { captureException } from '@lib/sentry';
import { toast } from 'react-toastify';

export class AuthError extends Error {
	constructor(message: string, public code?: string) {
		super(message);
		this.name = 'AuthError';
	}
}

export const handleAuthError = (error: Error | AuthError) => {
	let message = 'An error occurred during authentication';

	if (error instanceof AuthError) {
		switch (error.code) {
			case 'auth/invalid-email':
				message = 'Invalid email address';
				break;
			case 'auth/user-disabled':
				message = 'This account has been disabled';
				break;
			case 'auth/user-not-found':
				message = 'No account found with this email';
				break;
			case 'auth/wrong-password':
				message = 'Invalid password';
				break;
			default:
				message = error.message;
		}
	}

	// Log to Sentry
	captureException(error, {
		tags: {
			context: 'authentication',
		},
	});

	// Show user-friendly message
	toast.error(message);

	return message;
};