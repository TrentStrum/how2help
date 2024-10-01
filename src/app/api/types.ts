export type H2HResponse<TResult = unknown> = {
	status: number;
	statusText: string;
	results: TResult;
};
