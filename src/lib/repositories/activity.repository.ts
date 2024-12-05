import { Database } from '@lib/database.types';
import { BaseRepository } from './base.repository';

type Activity = Database['public']['Tables']['activities']['Row'];

export class ActivityRepository extends BaseRepository<Activity> {
	constructor() {
		super('activities');
	}

	async findByHost(
		hostId: string,
		hostType: string,
		page = 1,
		limit = 10
	): Promise<{ data: Activity[]; count: number }> {
		try {
			const offset = (page - 1) * limit;
			
			const { data, error, count } = await supabase
				.from(this.table)
				.select('*', { count: 'exact' })
				.eq('host_id', hostId)
				.eq('host_type', hostType)
				.eq('status', 'active')
				.order('start_date', { ascending: true })
				.range(offset, offset + limit - 1);

			if (error) throw error;
			return { data: data || [], count: count || 0 };
		} catch (error) {
			await this.handleError(error, 'findByHost');
			return { data: [], count: 0 };
		}
	}

	async searchActivities(query: string, page = 1, limit = 10): Promise<{ data: Activity[]; count: number }> {
		try {
			const offset = (page - 1) * limit;
			
			const { data, error, count } = await supabase
				.from(this.table)
				.select('*', { count: 'exact' })
				.or(`name.ilike.%${query}%,description.ilike.%${query}%`)
				.eq('status', 'active')
				.order('start_date', { ascending: true })
				.range(offset, offset + limit - 1);

			if (error) throw error;
			return { data: data || [], count: count || 0 };
		} catch (error) {
			await this.handleError(error, 'searchActivities');
			return { data: [], count: 0 };
		}
	}
}

export const activityRepository = new ActivityRepository();