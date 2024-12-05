import { Database } from '@lib/database.types';
import { BaseRepository } from './base.repository';

type Event = Database['public']['Tables']['events']['Row'];

export class EventRepository extends BaseRepository<Event> {
	constructor() {
		super('events');
	}

	async findActiveByOrganization(
		organizationId: string,
		page = 1,
		limit = 10
	): Promise<{ data: Event[]; count: number }> {
		try {
			const offset = (page - 1) * limit;
			
			const { data, error, count } = await supabase
				.from(this.table)
				.select('*', { count: 'exact' })
				.eq('host_id', organizationId)
				.eq('status', 'active')
				.gte('event_date', new Date().toISOString())
				.order('event_date', { ascending: true })
				.range(offset, offset + limit - 1);

			if (error) throw error;
			return { data: data || [], count: count || 0 };
		} catch (error) {
			await this.handleError(error, 'findActiveByOrganization');
			return { data: [], count: 0 };
		}
	}

	async findUpcoming(page = 1, limit = 10): Promise<{ data: Event[]; count: number }> {
		return this.findMany({
			page,
			limit,
			filters: { status: 'active' },
			orderBy: { column: 'event_date', ascending: true }
		});
	}

	async searchEvents(query: string, page = 1, limit = 10): Promise<{ data: Event[]; count: number }> {
		try {
			const offset = (page - 1) * limit;
			
			const { data, error, count } = await supabase
				.from(this.table)
				.select('*', { count: 'exact' })
				.or(`name.ilike.%${query}%,description.ilike.%${query}%`)
				.eq('status', 'active')
				.gte('event_date', new Date().toISOString())
				.order('event_date', { ascending: true })
				.range(offset, offset + limit - 1);

			if (error) throw error;
			return { data: data || [], count: count || 0 };
		} catch (error) {
			await this.handleError(error, 'searchEvents');
			return { data: [], count: 0 };
		}
	}
}

export const eventRepository = new EventRepository();