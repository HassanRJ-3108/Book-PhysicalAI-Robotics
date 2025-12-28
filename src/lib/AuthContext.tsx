import React, { createContext, useContext, useEffect, useState } from 'react';
import { authAPI, User, UserProfile } from './authAPI';

interface AuthContextType {
    user: User | null;
    profile: UserProfile | null;
    loading: boolean;
    signOut: () => Promise<void>;
    refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    // Refresh profile
    const refreshProfile = async () => {
        try {
            const userData = await authAPI.getCurrentUser();
            if (userData) {
                setUser(userData.user);
                setProfile(userData.profile || null);
            } else {
                setUser(null);
                setProfile(null);
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
            setUser(null);
            setProfile(null);
        }
    };

    // Sign out
    const signOut = async () => {
        try {
            await authAPI.signout();
            setUser(null);
            setProfile(null);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    // Load user on mount
    useEffect(() => {
        const loadUser = async () => {
            if (typeof window === 'undefined') {
                setLoading(false);
                return;
            }

            try {
                const userData = await authAPI.getCurrentUser();
                if (userData) {
                    setUser(userData.user);
                    setProfile(userData.profile || null);
                }
            } catch (error) {
                console.error('Error loading user:', error);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    const value = {
        user,
        profile,
        loading,
        signOut,
        refreshProfile,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
