import { HttpResponse, PathParams, http } from 'msw';

import { mockEventComments } from '@api/entities/comments/mocks/mocks';
import { mockReactions } from '@api/entities/reactions/mocks/mocks';
import { getPaginationParams, createPaginatedResponse } from '@api/helpers/PaginationHelper';
import { H2hPaginatedResponse } from '@api/utils/types';

import { Event, mockEventAttendees, mockEvents } from '..';
import { mockOrgs } from '../../organization';

const currentDate = new Date().toJSON();

export const handlers = [
	// useGetAllEvents
	http.get('/event', ({ request }) => {
		try {
			const url = new URL(request.url);
			const paginationParams = getPaginationParams(url);
			const search = url.searchParams.get('_search')?.toLowerCase() || '';

			// Filter events by search term if present
			const filteredEvents = search
				? mockEvents.filter(
						(event) =>
							event.name.toLowerCase().includes(search) ||
							event.description.toLowerCase().includes(search),
					)
				: mockEvents;

			// Create paginated response using the filtered events
			const paginatedResponse = createPaginatedResponse(filteredEvents, paginationParams);
			return HttpResponse.json(paginatedResponse, { status: 200 });
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
		}
	}),

	// useGetEventById
	http.get('/event/:eventId', ({ params }) => {
		const { eventId } = params;

		const numId: number = Number(eventId);

		if (!numId) {
			return new HttpResponse(null, { status: 404 });
		}
		return HttpResponse.json(mockEvents.find((u) => u.eventId === numId));
	}),

	// useGet
	http.get<PathParams>('/events/org', ({ request }) => {
		const url = new URL(request.url);

		const hostId = Number(url.searchParams.get('_hostId'));
		const hostType = url.searchParams.get('_hostType');

		console.log(`hostId: ${hostId}`);
		console.log(`hostType: ${hostType}`);

		const hostedEvents = mockEvents.filter(
			(event) => event.hostType === hostType && event.hostId === hostId,
		);
		console.log(`hostedEvents: ${hostedEvents}`);

		try {
			const paginationParams = getPaginationParams(url);
			const paginatedResponse = createPaginatedResponse(hostedEvents, paginationParams);
			return HttpResponse.json(paginatedResponse, { status: 200 });
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error', status: 500 });
		}
	}),

	// useGet
	http.get('/events/user', () => {
		const urlParams = new URLSearchParams(document.location.search);

		const userId = parseInt(urlParams.get('userId') || '');
		const pageNumber = parseInt(urlParams.get('page') || '1', 10);
		const pageSize = parseInt(urlParams.get('limit') || '8', 10);

		const userAttendingEvents = mockEventAttendees
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

	// useGet
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

	// useGet
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

	// Add this handler to your existing handlers array
	http.get('/event/:eventId/attendees', ({ params }) => {
		try {
			const { eventId } = params;
			const numId = Number(eventId);

			if (!numId) {
				return HttpResponse.json({ error: 'Invalid event ID' }, { status: 400 });
			}

			const eventAttendees = mockEventAttendees.filter((attendee) => attendee.eventId === numId);

			return HttpResponse.json(eventAttendees, { status: 200 });
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
		}
	}),
	http.get('/event/:eventId/reactions', ({ params }) => {
		const { eventId } = params;
		// const numId = Number(eventId);

		return HttpResponse.json(mockReactions.filter((reaction) => reaction.eventId === eventId));
	}),
	http.get('/event/:eventId/comments', ({ params }) => {
		const { eventId } = params;
		return HttpResponse.json(mockEventComments.filter((comment) => comment.eventId === eventId));
	}),
];
