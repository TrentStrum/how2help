import { HttpResponse, http } from 'msw';

import { mockUsers } from '..';

interface LoginInput {
	email: string;
	password: string;
}

export const handlers = [
	http.get('/user', async ({ request }) => {
		try {
			const url = new URL(request.url);
			const page = Number(url.searchParams.get('_page')) || 0;
			const limit = Number(url.searchParams.get('_limit')) || 10;
			const search = url.searchParams.get('_search')?.toLowerCase();

			// Get filter values
			const categories = url.searchParams.getAll('_categories');
			const locations = url.searchParams.getAll('_locations');

			let filteredUsers = [...mockUsers];

			// Apply search filter
			if (search) {
				filteredUsers = filteredUsers.filter(
					(user) =>
						user.username.toLowerCase().includes(search) ||
						user.firstName.toLowerCase().includes(search) ||
						user.lastName.toLowerCase().includes(search),
				);
			}

			// Apply other filters
			if (categories.length) {
				filteredUsers = filteredUsers.filter((user) => categories.includes(user.username));
			}

			if (locations.length) {
				filteredUsers = filteredUsers.filter((user) => user.city && locations.includes(user.city));
			}

			// Calculate pagination
			const start = page * limit;
			const paginatedUsers = filteredUsers.slice(start, start + limit);

			return HttpResponse.json(
				{
					results: paginatedUsers,
					total: filteredUsers.length,
					pageNumber: page,
					pageSize: limit,
				},
				{ status: 200 },
			);
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
		}
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
			return HttpResponse.json({ message: 'Invalid or expired token' }, { status: 401 });
		}
	}),
];
