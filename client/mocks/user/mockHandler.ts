import { mockUsers } from './mocks';
import { HttpResponse, http } from 'msw';

export const handlers = [
	http.get('/user', () => {
		return HttpResponse.json(mockUsers);
	}),

	http.get('/user/:id', ({ params }) => {
		const { id } = params;

		const stringId: string = id.toString();
		const numId: number = parseInt(stringId);

		if (!numId) {
			return new HttpResponse(null, { status: 404 });
		}
		return HttpResponse.json(mockUsers.find((u) => u.userId === numId));
	}),
];
