import { http, HttpResponse } from 'msw';

import { mockUsers, User } from '@api/entities/user';

const generateMockJWT = (userId: string) => {
	return `mock-jwt-${userId}-${Date.now()}`;
};

export const handlers = [
	http.post('/api/login', async ({ request }) => {
		const body = await request.json();
		const user: User | undefined = mockUsers.find((u) => u.email === body.email);

		if (!user) {
			return HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 });
		}

		const token = generateMockJWT(user.userId.toString());
		return HttpResponse.json(
			{
				userId: user.userId,
				email: user.email,
				username: user.username,
				token, // Add the token to the response
			},
			{ status: 200 },
		);
	}),

	http.get('/api/protected-data', async ({ request }) => {
		const authHeader = request.headers.get('Authorization');

		if (!authHeader?.startsWith('Bearer ')) {
			return HttpResponse.json({ message: 'Unauthorized' }, { status: 401 });
		}

		return HttpResponse.json({ data: 'Protected content' }, { status: 200 });
	}),
];
