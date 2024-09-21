import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router/Routes';

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
			<RouterProvider router={router} />
		</StrictMode>
	);
});
