/**
 * API Client for Backend Authentication
 * 
 * All auth operations go through FastAPI backend
 * Backend will be deployed on Railway
 */

// Backend API URL - change this after Railway deployment
const API_URL = 'http://localhost:8000';

interface User {
    id: string;
    email: string;
    user_metadata?: {
        name?: string;
        display_name?: string;
    };
}

interface UserProfile {
    id: string;
    programming_knowledge: 'beginner' | 'intermediate' | 'advanced';
    prior_robotics_experience: boolean;
    learning_goals: string[];
    preferred_learning_style: 'hands-on' | 'theory-first' | 'mixed';
}

interface AuthResponse {
    access_token: string;
    token_type: string;
    user: User;
    profile?: UserProfile;
    email_confirmation_required?: boolean;
    message?: string;
}

interface SignupData {
    email: string;
    password: string;
    name: string;
    profile: {
        programming_knowledge: 'beginner' | 'intermediate' | 'advanced';
        prior_robotics_experience: boolean;
        learning_goals: string[];
        preferred_learning_style: 'hands-on' | 'theory-first' | 'mixed';
    };
}

class AuthAPI {
    private getToken(): string | null {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem('auth_token');
    }

    private setToken(token: string): void {
        if (typeof window === 'undefined') return;
        localStorage.setItem('auth_token', token);
    }

    private removeToken(): void {
        if (typeof window === 'undefined') return;
        localStorage.removeItem('auth_token');
    }

    async signup(data: SignupData): Promise<AuthResponse> {
        const response = await fetch(`${API_URL}/api/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Signup failed');
        }

        const result = await response.json();
        if (result.session?.access_token) {
            this.setToken(result.session.access_token);
        }
        return result;
    }

    async signin(email: string, password: string): Promise<AuthResponse> {
        const response = await fetch(`${API_URL}/api/auth/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Sign in failed');
        }

        const result = await response.json();
        if (result.access_token) {
            this.setToken(result.access_token);
        }
        return result;
    }

    async signout(): Promise<void> {
        await fetch(`${API_URL}/api/auth/signout`, {
            method: 'POST'
        });
        this.removeToken();
    }

    async getCurrentUser(): Promise<{ user: User; profile?: UserProfile } | null> {
        const token = this.getToken();
        if (!token) return null;

        const response = await fetch(`${API_URL}/api/auth/user?token=${token}`);

        if (!response.ok) {
            this.removeToken();
            return null;
        }

        return await response.json();
    }

    async updateProfile(profileData: UserProfile): Promise<UserProfile> {
        const token = this.getToken();
        if (!token) throw new Error('Not authenticated');

        const response = await fetch(`${API_URL}/api/auth/profile?token=${token}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(profileData)
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Profile update failed');
        }

        const result = await response.json();
        return result.profile;
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }
}

export const authAPI = new AuthAPI();
export type { User, UserProfile, SignupData };
