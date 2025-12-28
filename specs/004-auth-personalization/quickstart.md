# Quick Start: Authentication & Personalization

## Setup

### 1. Supabase Configuration
- Get Supabase URL and Anon Key from dashboard
- Add to frontend `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```
- Add to backend `.env`:
```
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

### 2. Database Setup
Run SQL in Supabase SQL Editor:
```sql
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  programming_knowledge TEXT CHECK (programming_knowledge IN ('beginner', 'intermediate', 'advanced')),
  learning_style TEXT CHECK (learning_style IN ('hands-on', 'theory-first', 'mixed')),
  prior_robotics_experience BOOLEAN DEFAULT FALSE,
  learning_goals TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read/write own profile
CREATE POLICY "Users can manage own profile"
  ON user_profiles
  FOR ALL
  USING (auth.uid() = id);
```

### 3. Test Auth Flow

**Signup:**
```bash
# Navigate to http://localhost:3001/signup
# Fill: email, password, name
# Check email for confirmation link
# Click link → auto-login → redirected to /profile
```

**Profile:**
```bash
# Navigate to http://localhost:3001/profile
# Fill form (programming knowledge, learning style, etc.)
# Click Save
# Profile saved to Supabase
```

**Sign In:**
```bash
# Navigate to http://localhost:3001/signin
# Enter credentials
# Logged in → redirected to homepage
```

## Troubleshooting

**Issue:** Email confirmation not sent
**Solution:** Check Supabase email settings, verify SMTP configured

**Issue:** Profile not saving
**Solution:** Check RLS policies, verify user is authenticated

**Issue:** SSR build error with Supabase
**Solution:** Ensure AuthProvider wrapped in BrowserOnly in Root.tsx
