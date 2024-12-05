import { Database } from '@lib/database.types';
import { BaseRepository } from './base.repository';

type Cause = Database['public']['Tables']['causes']['Row'];

export class CauseRepository extends BaseRepository<Cause> {
	constructor() {
		super('causes');
	}

	async findActive(page = 1, limit = 10): Promise<{ data: Cause[]; count: number }> {
		return this.findMany({
			page,
			limit,
			filters: { status: 'active' },
			orderBy: { column: 'name' }
		});
	}

	async searchCauses(query: string, page = 1, limit = 10): Promise<{ data: Cause[]; count: number }> {
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
			await this.handleError(error, 'searchCauses');
			return { data: [], count: 0 };
		}
	}
}

export const causeRepository = new CauseRepository();