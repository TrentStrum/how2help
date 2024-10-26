import { HttpResponse, http, PathParams } from 'msw';

import { creatPaginatedResponse, getPaginationParams } from '@api/helpers/PaginationHelper';

import { mockOrgs } from './mocks';

export const handlers = [
	http.get<PathParams>('/org', ({ request }) => {
		try {
			const url = new URL(request.url);
			const paginationParams = getPaginationParams(url);

			const paginatedResponse = creatPaginatedResponse(mockOrgs, paginationParams);

			return HttpResponse.json(paginatedResponse, { status: 200 });
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error', status: 500 });
		}
	}),

	http.get('/org/:orgId', ({ params }) => {
		const { orgId } = params;

		const numId: number = Number(orgId);

		if (!numId) {
			return new HttpResponse(null, { status: 404 });
		}
		return HttpResponse.json(mockOrgs.find((u) => u.orgId === numId));
	}),
	http.get('/org/by-cause/:causeId', ({ params }) => {
		const { causeId } = params;

		const numId: number = Number(causeId);

		if (!numId) {
			return new HttpResponse(null, { status: 404 });
		}

		return HttpResponse.json(
			mockOrgs.filter((u) => {
				return u.causes.some((i) => {
					return i.causeId === numId;
				});
			}),
		);
	}),
];
