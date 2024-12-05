import { HttpResponse, http, PathParams } from 'msw';

import { createPaginatedResponse, getPaginationParams } from '@api/helpers/PaginationHelper';

import { mockReviews } from './mocks';

export const handlers = [
	http.get<PathParams>('/review', ({ request }) => {
		try {
			const url = new URL(request.url);
			const paginationParams = getPaginationParams(url);

			const paginatedResponse = createPaginatedResponse(mockReviews, paginationParams);

			return HttpResponse.json(paginatedResponse, { status: 200 });
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error', status: 500 });
		}
	}),

	http.get('/review/:reviewId', ({ params }) => {
		const { reviewId } = params;

		const numId: number = Number(reviewId);

		if (!numId) {
			return new HttpResponse(null, { status: 404 });
		}
		return HttpResponse.json(mockReviews.find((u) => u.reviewId === numId));
	}),
	http.get('/review/by-org/:reviewId', ({ params }) => {
		const { reviewId } = params;

		const numId: number = Number(reviewId);

		if (!numId) {
			return new HttpResponse(null, { status: 404 });
		}

		return HttpResponse.json(
			mockReviews.filter((u) => {
				return u.entityId === numId && u.entityType === 'Organization';
			}),
		);
	}),
];
