import { HttpResponse, http } from 'msw';

import { mockOrgs } from './mocks';

export const handlers = [
	http.get('/org', () => {
		return HttpResponse.json(mockOrgs);
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
