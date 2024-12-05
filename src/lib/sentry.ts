import * as Sentry from '@sentry/react';

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;

if (!SENTRY_DSN) {
	console.warn('Missing Sentry DSN');
}

export const initSentry = () => {
	if (SENTRY_DSN) {
		Sentry.init({
			dsn: SENTRY_DSN,
			integrations: [
				new Sentry.BrowserTracing(),
				new Sentry.Replay(),
			],
			tracesSampleRate: 1.0,
			replaysSessionSampleRate: 0.1,
			replaysOnErrorSampleRate: 1.0,
		});
	}
};

export const captureException = (error: Error, context?: Record<string, any>) => {
	Sentry.captureException(error, {
		extra: context
	});
};

export const setUserContext = (user: { id: string; email?: string }) => {
	Sentry.setUser(user);
};