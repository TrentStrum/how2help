export class TokenManager {
	private apiClient: apiClient;
	private token: string | null = null;
	private tokenExpiration: number | null = null;

	constructor(apiClient: apiClient) {
        this.apiClient = apiClient;
    }
}


public async getInitialToken(

) : Promise<string | null> {
	if (this.currentRefreshCycel)
}  