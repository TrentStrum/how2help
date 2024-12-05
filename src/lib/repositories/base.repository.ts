import { PostgrestError } from '@supabase/supabase-js';
import { supabase } from '@lib/supabase';
import { captureException } from '@lib/sentry';

export class BaseRepository<T> {
	constructor(protected readonly table: string) {}

	protected async handleError(error: PostgrestError | Error, context?: string) {
		const errorMessage = error instanceof Error ? error.message : error.details;
		captureException(new Error(errorMessage), { 
			tags: { table: this.table, context }
		});
		throw new Error(`Database error: ${errorMessage}`);
	}

	async findById(id: string): Promise<T | null> {
		try {
			const { data, error } = await supabase
				.from(this.table)
				.select('*')
				.eq('id', id)
				.single();

			if (error) throw error;
			return data;
		} catch (error) {
			await this.handleError(error as PostgrestError, 'findById');
			return null;
		}
	}

	async findMany(query: {
		page?: number;
		limit?: number;
		filters?: Record<string, any>;
		orderBy?: { column: string; ascending?: boolean };
	}): Promise<{ data: T[]; count: number }> {
		try {
			const { page = 1, limit = 10, filters = {}, orderBy } = query;
			const offset = (page - 1) * limit;

			let queryBuilder = supabase
				.from(this.table)
				.select('*', { count: 'exact' });

			// Apply filters
			Object.entries(filters).forEach(([key, value]) => {
				if (value !== undefined && value !== null) {
					queryBuilder = queryBuilder.eq(key, value);
				}
			});

			// Apply ordering
			if (orderBy) {
				queryBuilder = queryBuilder.order(orderBy.column, {
					ascending: orderBy.ascending ?? true
				});
			}

			// Apply pagination
			queryBuilder = queryBuilder.range(offset, offset + limit - 1);

			const { data, error, count } = await queryBuilder;

			if (error) throw error;
			return { data: data || [], count: count || 0 };
		} catch (error) {
			await this.handleError(error as PostgrestError, 'findMany');
			return { data: [], count: 0 };
		}
	}

	async create(data: Partial<T>): Promise<T | null> {
		try {
			const { data: created, error } = await supabase
				.from(this.table)
				.insert(data)
				.select()
				.single();

			if (error) throw error;
			return created;
		} catch (error) {
			await this.handleError(error as PostgrestError, 'create');
			return null;
		}
	}

	async update(id: string, data: Partial<T>): Promise<T | null> {
		try {
			const { data: updated, error } = await supabase
				.from(this.table)
				.update(data)
				.eq('id', id)
				.select()
				.single();

			if (error) throw error;
			return updated;
		} catch (error) {
			await this.handleError(error as PostgrestError, 'update');
			return null;
		}
	}

	async delete(id: string): Promise<boolean> {
		try {
			const { error } = await supabase
				.from(this.table)
				.delete()
				.eq('id', id);

			if (error) throw error;
			return true;
		} catch (error) {
			await this.handleError(error as PostgrestError, 'delete');
			return false;
		}
	}
}