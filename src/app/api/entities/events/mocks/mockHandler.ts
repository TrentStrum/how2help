import { HttpResponse, http } from 'msw';

import { Event } from '..';
import { mockEvent } from './mocks';
import { mockOrgs } from '../../organization';

const currentDate = new Date().toJSON();

export const handlers = [
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
						mockEvent.find(
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
						mockEvent.find(
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
