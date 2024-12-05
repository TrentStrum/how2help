import { ReactNode } from 'react';
import { 
	SignInWithPasswordCredentials,
	SignUpWithPasswordCredentials,
	Session,
	User,
} from '@supabase/supabase-js';

export interface AuthContextType {
	session: Session | null;
	user: User | null;
	loading: boolean;
	signUp: (credentials: SignUpWithPasswordCredentials) => Promise<any>;
	signIn: (credentials: SignInWithPasswordCredentials) => Promise<any>;
	signOut: () => Promise<void>;
	resetPassword: (email: string) => Promise<any>;
	updatePassword: (password: string) => Promise<any>;
}

export interface AuthProviderProps {
	children: ReactNode;
}