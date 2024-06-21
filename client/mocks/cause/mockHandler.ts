import { HttpResponse, http } from "msw";
import { mockCause } from "./mocks";

export const handlers = [
	http.get('http://localhost:3000/causes', () => {
		HttpResponse.json(mockCause);
	})
];
