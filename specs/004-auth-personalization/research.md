# Research: Authentication & Personalization

**Feature:** 004-auth-personalization

## Auth Provider Selection

**Options:**
1. Supabase Auth (chosen)
2. Firebase Auth
3. Auth0
4. Custom JWT

**Decision:** Supabase Auth

**Rationale:**
- Free tier generous (50,000 MAU)
- Built-in email confirmation
- PostgreSQL database included
- Row Level Security (RLS)
- Good React integration
- No vendor lock-in (open source)

## Signup Flow Strategy

**Options:**
1. Single-step (all fields at once)
2. Two-step (email → profile) - chosen

**Decision:** Two-step with email confirmation

**Rationale:**
- Lower initial friction (email/password only)
- Mandatory email verification (security)
- Collect profile details after confirmation
- Better UX (progressive disclosure)

## Profile Data Storage

**Options:**
1. auth.users metadata
2. Separate user_profiles table (chosen)

**Decision:** Separate table

**Rationale:**
- More flexible schema
- Easier queries and updates
- RLS policies for security
- Better separation of concerns

## Frontend State Management

**Approach:** React Context API

**Rationale:**
- No external dependencies (Redux, Zustand)
- Sufficient for auth state
- Simple implementation
- SSR-compatible with BrowserOnly

## SSR Compatibility

**Challenge:** Supabase client uses localStorage (browser-only API)

**Solution:** Wrap AuthProvider in @docusaurus/BrowserOnly

**Implementation:**
```tsx
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Root({children}) {
  return (
    <BrowserOnly>
      {() => <AuthProvider>{children}</AuthProvider>}
    </BrowserOnly>
  );
}
```

## References

- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [Supabase RLS](https://supabase.com/docs/guides/auth/row-level-security)
- [React Context](https://react.dev/reference/react/useContext)
