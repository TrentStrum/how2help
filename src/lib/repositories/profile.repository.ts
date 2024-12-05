import { Database } from '@lib/database.types';
import { BaseRepository } from './base.repository';

type Profile = Database['public']['Tables']['profiles']['Row'];

export class ProfileRepository extends BaseRepository<Profile> {
	constructor() {
		super('profiles');
	}

	async findByUsername(username: string): Promise<Profile | null> {
		try {
			const { data, error } = await this.supabase
				.from(this.table)
				.select('*')
				.eq('username', username)
				.single();

			if (error) throw error;
			return data;
		} catch (error) {
			await this.handleError(error, 'findByUsername');
			return null;
		}
	}

	async updateProfile(userId: string, updates: Partial<Profile>): Promise<Profile | null> {
		try {
			const { data, error } = await this.supabase
				.from(this.table)
				.update({
					...updates,
					updated_at: new Date().toISOString(),
				})
				.eq('id', userId)
				.select()
				.single();

			if (error) throw error;
			return data;
		} catch (error) {
			await this.handleError(error, 'updateProfile');
			return null;
		}
	}
}

export const profileRepository = new ProfileRepository();