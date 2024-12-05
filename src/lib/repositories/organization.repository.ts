import { Database } from '@lib/database.types';
import { BaseRepository } from './base.repository';

type Organization = Database['public']['Tables']['organizations']['Row'];

export class OrganizationRepository extends BaseRepository<Organization> {
	constructor() {
		super('organizations');
	}

	async findByCause(causeId: string, page = 1, limit = 10): Promise<{ data: Organization[]; count: number }> {
		try {
			const offset = (page - 1) * limit;
			
			const { data, error, count } = await this.supabase
				.from(this.table)
				.select('*, organization_causes!inner(*)', { count: 'exact' })
				.eq('organization_causes.cause_id', causeId)
				.eq('status', 'active')
				.range(offset, offset + limit - 1);

			if (error) throw error;
			return { data: data || [], count: count || 0 };
		} catch (error) {
			await this.handleError(error, 'findByCause');
			return { data: [], count: 0 };
		}
	}

	async searchOrganizations(query: string, page = 1, limit = 10): Promise<{ data: Organization[]; count: number }> {
		try {
			const offset = (page - 1) * limit;
			
			const { data, error, count } = await this.supabase
				.from(this.table)
				.select('*', { count: 'exact' })
				.or(`name.ilike.%${query}%,description.ilike.%${query}%`)
				.eq('status', 'active')
				.range(offset, offset + limit - 1);

			if (error) throw error;
			return { data: data || [], count: count || 0 };
		} catch (error) {
			await this.handleError(error, 'searchOrganizations');
			return { data: [], count: 0 };
		}
	}
}

export const organizationRepository = new OrganizationRepository();