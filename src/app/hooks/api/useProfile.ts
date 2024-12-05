import { useSupabaseQuery } from './useSupabaseQuery';
import { useSupabaseMutation } from './useSupabaseMutation';
import { profileRepository } from '@lib/repositories';
import { useAuth } from '@app/contexts/auth';

export const useProfile = (userId?: string) => {
	const { user } = useAuth();
	const id = userId || user?.id;

	return useSupabaseQuery(
		['profile', id],
		() => profileRepository.findById(id!),
		{
			enabled: !!id,
		}
	);
};

export const useUpdateProfile = () => {
	const { user } = useAuth();

	return useSupabaseMutation(
		(data) => profileRepository.updateProfile(user!.id, data),
		{
			invalidateQueries: ['profile'],
		}
	);
};

export const useProfileByUsername = (username: string) => {
	return useSupabaseQuery(
		['profile', 'username', username],
		() => profileRepository.findByUsername(username),
		{
			enabled: !!username,
		}
	);
};