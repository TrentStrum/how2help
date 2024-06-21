import { HttpResponse, http } from "msw";
import { mockOrgs } from "./mocks";

export const handlers = [
	http.get('http://localhost:3000/orgs', () => {
		HttpResponse.json(mockOrgs);
	})
];
