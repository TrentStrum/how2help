import { HttpResponse, PathParams, http } from 'msw';

import { getPaginationParams, createPaginatedResponse } from '@api/helpers/PaginationHelper';

import { mockActivities } from './mocks';

export const handlers = [
	// useGetAllActivities
	http.get('/activity', ({ request }) => {
		try {
			const url = new URL(request.url);
			const paginationParams = getPaginationParams(url);

			const paginatedResponse = createPaginatedResponse(mockActivities, paginationParams);
			return HttpResponse.json(paginatedResponse, { status: 200 });
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error', status: 500 });
		}
	}),

	// useGetActivityByEntityId
	http.get<PathParams>('/activity/by-org', ({ request }) => {
		const url = new URL(request.url);
		const hostId = Number(url.searchParams.get('_hostId'));
		const hostType = url.searchParams.get('_hostType');

		const hostedActivities = mockActivities.filter(
			(activity) => activity.hostType === hostType && activity.hostId === hostId,
		);
		console.log('hostedActivities:', hostedActivities);

		try {
			const paginationParams = getPaginationParams(url);
			const paginatedResponse = createPaginatedResponse(hostedActivities, paginationParams);

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
