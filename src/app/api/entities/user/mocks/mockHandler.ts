import { HttpResponse, http } from 'msw';
import { mockUsers } from '..';

export const handlers = [
	http.get('/user', () => {
		return HttpResponse.json(mockUsers);
	}),

	http.get('/user/:userId', ({ params }) => {
		const { userId } = params;

		const stringId: string = userId.toString();
		const numId: number = Number(stringId);

		if (!numId) {
			return new HttpResponse(null, { status: 404 });
		}
		return HttpResponse.json(mockUsers.find((u) => u.userId === numId));
	}),

	http.post('/auth/user', () => {
		return HttpResponse.json(mockUsers.find((u) => u.firstName === 'trent'));
	}),
];
