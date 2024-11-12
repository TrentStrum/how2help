import { HttpResponse, http } from 'msw';

import { createPaginatedResponse, getPaginationParams } from '@api/helpers/PaginationHelper';

import { mockCause } from './mocks';

export const handlers = [
	http.get('/cause', async ({ request }) => {
		try {
			const url = new URL(request.url);
			const paginationParams = getPaginationParams(url);
			const paginatedResponse = createPaginatedResponse(mockCause, paginationParams);
			return HttpResponse.json(paginatedResponse, { status: 200 });
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
		}
	}),
	http.get('/cause/:causeId', ({ params }) => {
		const { causeId } = params;

		const numId: number = Number(causeId);

		if (!numId) {
			return new HttpResponse(null, { status: 404 });
		}
		return HttpResponse.json(mockCause.find((u) => u.causeId === numId));
	}),
];
