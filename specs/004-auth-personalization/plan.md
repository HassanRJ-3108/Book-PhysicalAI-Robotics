# Implementation Plan: Authentication & Personalization

**Feature:** 004-auth-personalization  
**Estimated Effort:** 4 days

## Technical Approach

### Stack
- Frontend: Supabase Auth UI, React Context
- Backend: FastAPI + Supabase Python Client
- Database: Supabase Postgres (user_profiles table)

## Implementation Phases

### Phase 1: Supabase Setup (Day 1)
**Tasks:**
- Create Supabase project
- Enable email authentication
- Configure email templates
- Create user_profiles table:
  ```sql
  CREATE TABLE user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users,
    programming_knowledge TEXT,
    learning_style TEXT,
    prior_robotics_experience BOOLEAN,
    learning_goals TEXT[],
    created_at TIMESTAMP DEFAULT NOW()
  );
  ```
- Set up Row Level Security (RLS) policies

### Phase 2: Frontend Auth (Day 2)
**Tasks:**
- Create AuthContext.tsx (user state management)
- Create authAPI.ts (API calls to backend)
- Build signup.tsx (email, password, name only)
- Build signin.tsx (email, password)
- Build profile.tsx (complete profile form)
- Create NavbarAuth component (user dropdown)
- Wrap app in BrowserOnly for SSR compatibility

### Phase 3: Backend Auth Routes (Day 2-3)
**Tasks:**
- Install supabase-py
- Create auth/routes.py:
  - POST /api/auth/signup
  - POST /api/auth/signin
  - POST /api/auth/signout  
  - GET /api/auth/user
  - POST /api/auth/profile
- Add JWT validation middleware
- Test endpoints with Postman

### Phase 4: Integration (Day 3)
**Tasks:**
- Connect frontend forms to backend API
- Test signup flow (email → confirmation → login → profile)
- Verify profile updates persist
- Test auth state across page reloads

### Phase 5: Personalization (Day 4)
**Tasks:**
- Pass user profile to chatbot backend
- Customize responses based on knowledge level
- Show personalized content recommendations
- Test end-to-end personalization

## Timeline

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| 1. Supabase | 8h | DB setup |
| 2. Frontend | 10h | Auth UI |
| 3. Backend | 10h | API routes |
| 4. Integration | 6h | E2E testing |
| 5. Personalization | 6h | Custom responses |
| **Total** | **40h** | **~4 days** |
