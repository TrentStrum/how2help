import { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';

import { supabase } from '@lib/supabase';
import { setUserContext } from '@lib/sentry';
import { AuthContextType, AuthProviderProps } from './types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [session, setSession] = useState<Session | null>(null);
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Get initial session
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
			setUser(session?.user ?? null);
			setLoading(false);
		});

		// Listen for auth changes
		const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
			setUser(session?.user ?? null);
			setLoading(false);

			// Update Sentry user context
			if (session?.user) {
				setUserContext({
					id: session.user.id,
					email: session.user.email,
				});
			}
		});

		return () => subscription.unsubscribe();
	}, []);

	const value = {
		session,
		user,
		loading,
		signUp: supabase.auth.signUp,
		signIn: supabase.auth.signInWithPassword,
		signOut: () => supabase.auth.signOut(),
		resetPassword: (email: string) => 
			supabase.auth.resetPasswordForEmail(email, {
				redirectTo: `${window.location.origin}/reset-password`,
			}),
		updatePassword: (password: string) =>
			supabase.auth.updateUser({ password }),
	};

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};