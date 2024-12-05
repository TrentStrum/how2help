import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	auth: {
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: true
	},
});

// Types for auth responses
export type AuthResponse = {
	user: User | null;
	session: Session | null;
	error: Error | null;
};

export type User = {
	id: string;
	email?: string;
	user_metadata?: {
		full_name?: string;
		avatar_url?: string;
	};
};

export type Session = {
	access_token: string;
	refresh_token: string;
	expires_in: number;
	token_type: string;
	user: User;
};

export type Error = {
	message: string;
};