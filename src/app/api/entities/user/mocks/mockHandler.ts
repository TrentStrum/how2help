import { HttpResponse, http } from 'msw';

import { mockUsers } from '..';

interface LoginInput {
	email: string;
	password: string;
}

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

	http.post('/auth/login', async ({ request }) => {
		const loginInput = (await request.json()) as LoginInput;

		const foundUser = mockUsers.find(
			(u) => u.email === loginInput.email && u.password === loginInput.password,
		);

		if (!foundUser) return HttpResponse.json({ message: 'Invalid credentials' }, { status: 404 });

		return HttpResponse.json(
			{
				userId: foundUser.userId,
				email: foundUser.email,
				username: foundUser.username,
			},
			{ status: 200 },
		);
	}),

	http.get('/user/profile', ({ request }) => {
		const authHeader = request.headers.get('Authorization');

		if (!authHeader || !authHeader.startsWith('Bearer ')) {
			return HttpResponse.json({ message: 'Unauthorized' }, { status: 401 });
		}

		const token = authHeader.split(' ')[1];

		try {
			const userEmail = token.split('-for-')[1];
			const user = mockUsers.find((u) => u.email === userEmail);

			if (!user) {
				return HttpResponse.json({ message: 'User not found' }, { status: 404 });
			}

			return HttpResponse.json(
				{
					email: user.email,
					username: user.username,
				},
				{ status: 200 },
			);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error) {
			return HttpResponse.json({ message: 'Invaluid or expired token' }, { status: 401 });
		}
	}),
];
