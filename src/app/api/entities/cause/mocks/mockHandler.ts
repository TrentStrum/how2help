import { HttpResponse, http } from 'msw';

import { mockOrgs } from '@api/entities/organization/mocks/mocks';
import { createPaginatedResponse, getPaginationParams } from '@api/helpers/PaginationHelper';

import { mockCause } from './mocks';

export const handlers = [
	http.get('/cause', async ({ request }) => {
		try {
			const url = new URL(request.url);
			const searchTerm = url.searchParams.get('_search')?.toLowerCase();
			const paginationParams = getPaginationParams(url);

			// Filter causes based on search term
			let filteredCauses = [...mockCause];
			if (searchTerm) {
				filteredCauses = mockCause.filter(
					(cause) =>
						cause.name.toLowerCase().includes(searchTerm) ||
						cause.description.toLowerCase().includes(searchTerm),
				);
			}

			const paginatedResponse = createPaginatedResponse(filteredCauses, paginationParams);
			return HttpResponse.json(paginatedResponse, { status: 200 });
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
		}
	}),
	http.get('/cause/:causeId', ({ params }) => {
		const { causeId } = params;

		const numId: number = Number(causeId);

		if (!numId) {
			return new HttpResponse(null, { status: 404 });
		}
		return HttpResponse.json(mockCause.find((u) => u.causeId === numId));
	}),
	http.get('/cause/:causeId/statistics', ({ params }) => {
		try {
			const { causeId } = params;
			const numId = Number(causeId);

			const cause = mockCause.find((c) => c.causeId === numId);

			if (!cause) {
				return new HttpResponse(null, { status: 404 });
			}

			const statistics = {
				organizationCount: cause.organizationCount,
				eventCount: cause.eventCount,
				countriesCount: cause.countries?.length,
				growthRate: cause.growthRate,
				impact: cause.impact,
			};

			return HttpResponse.json(statistics);
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
		}
	}),
	http.get('/cause/:causeId/focus-areas', ({ params }) => {
		try {
			const { causeId } = params;
			const numId = Number(causeId);

			const cause = mockCause.find((c) => c.causeId === numId);

			if (!cause) {
				return new HttpResponse(null, { status: 404 });
			}

			return HttpResponse.json(cause.focusAreas);
		} catch (error) {
			return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
		}
	}),
	http.get('/cause/by-org/:orgId', ({ params }) => {
		const { orgId } = params;
		const numId = Number(orgId);

		if (!numId) {
			return new HttpResponse(null, { status: 404 });
		}

		// Find the organization first
		const organization = mockOrgs.find((org) => org.orgId === numId);
		if (!organization) {
			return new HttpResponse(null, { status: 404 });
		}

		// Get all causes that match the org's causes array
		return HttpResponse.json(
			mockCause.filter((cause) => organization.causes?.includes(cause.causeId)),
		);
	}),
];
