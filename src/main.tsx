import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { initSentry } from '@lib/sentry';
import { AuthProvider } from '@app/contexts/auth';
import { router } from './router/Routes';

// Initialize Sentry
initSentry();

async function enableMocking() {
	if (process.env.NODE_ENV !== 'development') {
		return;
	}
	const { worker } = await import('./app/api/mocks/browser');
	return worker.start();
}

enableMocking().then(() => {
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</StrictMode>,
	);
});