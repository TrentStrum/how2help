import { HttpResponse, PathParams, http } from 'msw';

import { getPaginationParams, creatPaginatedResponse } from '@api/helpers/PaginationHelper';
import { H2hPaginatedResponse } from '@api/utils/types';

import { Event, mockEvents } from '..';
import { mockAttendee } from './attendeeMocks';
import { mockOrgs } from '../../organization';

const currentDate = new Date().toJSON();

export const handlers = [
	http.get('/event', ({ request }) => {
		try {
			const url = new URL(request.url);
			const paginationParams = getPaginationParams(url);

			const paginatedResponse = creatPaginatedResponse(mockEvents, paginationParams);
			console.log('i am handler');
			return HttpResponse.json(paginatedResponse, { status: 200 });
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error', status: 500 });
		}
	}),

	http.get('/event/:eventId', ({ params }) => {
		const { eventId } = params;

		const numId: number = Number(eventId);

		if (!numId) {
			return new HttpResponse(null, { status: 404 });
		}
		return HttpResponse.json(mockEvents.find((u) => u.eventId === numId));
	}),

	http.get<PathParams>('/events/org', ({ request }) => {
		const url = new URL(request.url);

		const hostId = Number(url.searchParams.get('_hostId'));
		const hostType = url.searchParams.get('_hostType');

		const hostedEvents = mockEvents.filter(
			(event) => event.hostType === hostType && event.hostId === hostId,
		);
		console.log(hostedEvents.length);

		try {
			const paginationParams = getPaginationParams(url);

			const paginatedResponse = creatPaginatedResponse(hostedEvents, paginationParams);
			console.log(paginatedResponse);
			return HttpResponse.json(paginatedResponse, { status: 200 });
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error', status: 500 });
		}
	}),
	http.get('/events/user', () => {
		const urlParams = new URLSearchParams(document.location.search);

		const userId = parseInt(urlParams.get('userId') || '');
		const pageNumber = parseInt(urlParams.get('page') || '1', 10);
		const pageSize = parseInt(urlParams.get('limit') || '8', 10);

		const userAttendingEvents = mockAttendee
			.filter((attendee) => attendee.userId === userId)
			.flatMap((attendee) => {
				const event = mockEvents.find((event) => event.eventId === attendee.eventId);
				return event ? [event] : [];
			});

		if (userAttendingEvents.length === 0) {
			return HttpResponse.json('Error: Attending events not found', { status: 404 });
		}

		const status = 200;
		const statusText = 'Success';
		const start = (pageNumber - 1) * pageSize;
		const paginatedEvents = userAttendingEvents?.slice(start, start + pageSize);
		const total = paginatedEvents.length;
		const responseBody = {
			results: paginatedEvents,
			total,
			pageNumber,
			pageSize,
			status,
			statusText,
		};
		return HttpResponse.json<H2hPaginatedResponse<Event>>(responseBody, {
			status: 200,
		});
	}),

	http.get('/org/pastEvents/by-org/:orgId', ({ params }) => {
		const { orgId } = params;

		const numId: number = Number(orgId);

		if (!numId) {
			return new HttpResponse(null, { status: 404 });
		}
		const getPastEventsByOrgId = (numId: number): Event[] => {
			const org = mockOrgs.find((o) => o.orgId === numId);

			if (org && org.events.length > 0) {
				return org.events
					.map((eventId) =>
						mockEvents.find(
							(u) => u.eventId === eventId && new Date(u.eventDate).toJSON() < currentDate,
						),
					)
					.filter((event): event is Event => event !== undefined);
			}
			return [];
		};

		return HttpResponse.json(getPastEventsByOrgId(numId));
	}),
	http.get('/org/activeEvents/by-org/:orgId', ({ params }) => {
		const { orgId } = params;

		const numId: number = Number(orgId);

		if (!numId) {
			return new HttpResponse(null, { status: 404 });
		}

		const getActiveEventsByOrgId = (numId: number): Event[] => {
			const org = mockOrgs.find((o) => o.orgId === numId);

			if (org && org.events.length > 0) {
				return org.events
					.map((eventId) =>
						mockEvents.find(
							(u) => u.eventId === eventId && new Date(u.eventDate).toJSON() >= currentDate,
						),
					)
					.filter((event): event is Event => event !== undefined);
			}
			return [];
		};

		return HttpResponse.json(getActiveEventsByOrgId(numId));
	}),
];

// let host;
// switch (event?.hostType) {
// 	case 'User':
// 		host = mockUsers.find((u) => u.userId === event.hostId);
// 		break;
// 	case 'Organization':
// 		host = mockOrgs.find((o) => o.orgId === event.hostId);
// 		break;
// 	case 'Cause':
// 		host = mockCause.find((c) => c.causeId === event.hostId);
// 		break;
// 	default:
// 		return HttpResponse.json('Error: Invalid host type', { status: 400 });
// }

// if (!host) {
// 	return HttpResponse.json('Error: Host not found', { status: 404 });
// }

// const responseBody = {
// 	results: paginatedEvents,
// 	total,
// 	pageNumber,
// 	pageSize,
// 	status,
// 	statusText,
// };

// return HttpResponse.json<H2hPaginatedResponse<Event>>(responseBody, { status: 200 });
