import { HttpResponse, http } from 'msw';
import { mockCause } from './mocks';

export const handlers = [
	http.get('/catalog/cause', () => {
		return HttpResponse.json(mockCause);
	}),
	http.get('/catalog/cause/:causeId', ({ params }) => {
		const { causeId } = params;

		const stringId: string = causeId.toString();
		const numId: number = Number(stringId);

		if (!numId) {
			return new HttpResponse(null, { status: 404 });
		}
		return HttpResponse.json(mockCause.find((u) => u.causeId === numId));
	}),
];
