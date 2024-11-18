import { HttpResponse, http } from 'msw';

import { mockCause } from '@api/entities/cause';
import { mockUsers } from '@api/entities/user/mocks/mocks';
import { createPaginatedResponse, getPaginationParams } from '@api/helpers/PaginationHelper';

import { mockOrgs } from './mocks';

export const handlers = [
	http.get('/org/causeTags', async ({ request }) => {
		try {
			console.log('CauseTags handler triggered:', request.url);
			const url = new URL(request.url);
			const hostId = Number(url.searchParams.get('_hostId'));
			console.log('Host ID:', hostId);

			if (!hostId) {
				return HttpResponse.json({ error: 'Missing required parameters' }, { status: 400 });
			}

			const org = mockOrgs.find((org) => org.orgId === hostId);
			if (!org) {
				return HttpResponse.json({ error: 'Organization not found' }, { status: 404 });
			}

			const causeIds = org.causes;
			const causes = mockCause.filter((cause) => causeIds.includes(cause.causeId));
			console.log('Returning causes:', causes);

			return HttpResponse.json(causes);
		} catch (error) {
			console.error('Handler error:', error);
			return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
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

	http.get('/org/:orgId/favorite-status', ({ params }) => {
		try {
			const { orgId } = params;
			const numId = Number(orgId);

			if (!numId) {
				return new HttpResponse(null, { status: 404 });
			}
			const currentUser = mockUsers[0];
			const isFavorite = currentUser.favoriteOrgs?.includes(numId) ?? false;

			return HttpResponse.json({ isFavorite });
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
		}
	}),

	http.put('/org/:orgId/favorite', async ({ request, params }) => {
		try {
			const { orgId } = params;
			const numId = Number(orgId);
			const { isFavorite } = (await request.json()) as { isFavorite: boolean };

			// Get auth token from header
			const authHeader = request.headers.get('Authorization');
			if (!authHeader?.startsWith('Bearer ')) {
				return new HttpResponse(null, { status: 401 });
			}

			// Extract userId from mock JWT
			const token = authHeader.split('Bearer ')[1];
			const userId = token.split('-')[1]; // Based on your generateMockJWT format

			// Find current user
			const currentUser = mockUsers.find((user) => user.userId.toString() === userId);
			if (!currentUser) {
				return new HttpResponse(null, { status: 401 });
			}

			if (!currentUser.favoriteOrgs) {
				currentUser.favoriteOrgs = [];
			}

			if (isFavorite) {
				currentUser.favoriteOrgs.push(numId);
			} else {
				const index = currentUser.favoriteOrgs.indexOf(numId);
				if (index !== -1) {
					currentUser.favoriteOrgs.splice(index, 1);
				}
			}

			return HttpResponse.json({ success: true });
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
		}
	}),

	http.get('/org/by-cause/:causeId', async ({ request, params }) => {
		try {
			const { causeId } = params;
			const numId = Number(causeId);
			const url = new URL(request.url);
			const searchTerm = url.searchParams.get('_search')?.toLowerCase();
			const paginationParams = getPaginationParams(url);

			if (!numId) {
				return new HttpResponse(null, { status: 404 });
			}

			// Filter organizations by cause
			let filteredOrgs = mockOrgs.filter((org) => org.causes.some((causeId) => causeId === numId));

			// Apply search if present
			if (searchTerm) {
				filteredOrgs = filteredOrgs.filter(
					(org) =>
						org.name.toLowerCase().includes(searchTerm) ||
						org.description.toLowerCase().includes(searchTerm),
				);
			}

			const paginatedResponse = createPaginatedResponse(filteredOrgs, paginationParams);
			return HttpResponse.json(paginatedResponse, { status: 200 });
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
		}
	}),

	http.get('/org', async ({ request }) => {
		try {
			const url = new URL(request.url);
			const searchTerm = url.searchParams.get('_search')?.toLowerCase();
			const paginationParams = getPaginationParams(url);

			// Filter organizations based on search term
			let filteredOrgs = [...mockOrgs];
			if (searchTerm) {
				filteredOrgs = mockOrgs.filter(
					(org) =>
						org.name.toLowerCase().includes(searchTerm) ||
						org.description.toLowerCase().includes(searchTerm),
				);
			}

			const paginatedResponse = createPaginatedResponse(filteredOrgs, paginationParams);
			return HttpResponse.json(paginatedResponse, { status: 200 });
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
		}
	}),
];
