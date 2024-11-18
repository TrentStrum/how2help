import { HttpResponse, PathParams, http } from 'msw';

import { getPaginationParams, createPaginatedResponse } from '@api/helpers/PaginationHelper';

import { mockActivities } from './mocks';

export const handlers = [
	// useGetAllActivities
	http.get('/activity', async ({ request }) => {
		try {
			const url = new URL(request.url);
			const searchTerm = url.searchParams.get('_search')?.toLowerCase();
			const paginationParams = getPaginationParams(url);

			// Filter activities based on search term
			let filteredActivities = [...mockActivities];
			if (searchTerm) {
				filteredActivities = mockActivities.filter(
					(activity) =>
						activity.name.toLowerCase().includes(searchTerm) ||
						activity.description.toLowerCase().includes(searchTerm),
				);
			}

			const paginatedResponse = createPaginatedResponse(filteredActivities, paginationParams);
			return HttpResponse.json(paginatedResponse, { status: 200 });
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
		}
	}),

	// useGetActivityByEntityId
	http.get<PathParams>('/activity/by-org', ({ request }) => {
		const url = new URL(request.url);
		const hostId = Number(url.searchParams.get('_hostId'));
		const hostType = url.searchParams.get('_hostType');
		const search = url.searchParams.get('_search')?.toLowerCase();

		// First filter by host
		let filteredActivities = mockActivities.filter(
			(activity) => activity.hostType === hostType && activity.hostId === hostId,
		);

		// Then apply search filter if search term exists
		if (search) {
			filteredActivities = filteredActivities.filter((activity) => {
				const nameLower = activity.name.toLowerCase();
				const nameMatch = nameLower.includes(search);
				return nameMatch || activity.description?.toLowerCase().includes(search);
			});
		}

		try {
			const paginationParams = getPaginationParams(url);
			const paginatedResponse = createPaginatedResponse(filteredActivities, paginationParams);

			return HttpResponse.json(paginatedResponse, { status: 200 });
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error', status: 500 });
		}
	}),

	// useGetActivityById
	http.get('/activity/:activityId', ({ params }) => {
		const { activityId } = params;

		const stringId: string = activityId.toString();
		const numId: number = Number(stringId);

		if (!numId) {
			return new HttpResponse(null, { status: 404 });
		}
		return HttpResponse.json(mockActivities.find((u) => u.activityId === numId));
	}),
	// http.get<PathParams>('/activity/by-org', ({ request }) => {
	// 	console.log('Request URL:', request.url);
	// 	return HttpResponse.json({ message: 'Intercepted' }, { status: 200 });
	// }),
];
