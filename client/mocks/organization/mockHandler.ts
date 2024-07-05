import { HttpResponse, http } from "msw";
import { mockOrgs } from "./mocks";

export const handlers = [
	http.get('/org', () => {
		return HttpResponse.json(mockOrgs);
	}),
	http.get('/org/:orgId', ({ params }) => {
		const { orgId } = params;

		const stringId: string = orgId.toString();
		const numId: number = Number(stringId);

		if (!numId) {
			return new HttpResponse(null, { status: 404 });
		}
		return HttpResponse.json(mockOrgs.find((u) => u.orgId === numId));
	}),
];
