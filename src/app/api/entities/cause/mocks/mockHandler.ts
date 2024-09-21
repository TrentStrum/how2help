import { HttpResponse, http } from 'msw';
import { mockCause } from './mocks';

export const handlers = [
	http.get('/cause', () => {
		return HttpResponse.json(mockCause);
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
