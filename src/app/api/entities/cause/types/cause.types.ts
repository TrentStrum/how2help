export interface Cause {
	causeId: number;
	name: string;
	description: string;
	longDescription: string;
	bannerImageUrl: string;
	avatarImageUrl: string;
	mission?: string;
	organizationCount?: number;
	eventCount?: number;
	countries?: string[];
	growthRate?: string;
	focusAreas?: string[];
	impact?: {
		beneficiariesHelped?: number;
		projectsCompleted?: number;
		volunteersEngaged?: number;
	};
	status: 'active' | 'inactive';
	type: 'Cause';
}
