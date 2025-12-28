# Data Model: Authentication & Personalization

**Feature:** 004-auth-personalization

## Supabase auth.users Table
Built-in Supabase table (managed):
```sql
auth.users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE,
  encrypted_password TEXT,
  email_confirmed_at TIMESTAMP,
  user_metadata JSONB,  -- {name: "Hassan"}
  created_at TIMESTAMP
)
```

## user_profiles Table

```sql
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  programming_knowledge TEXT CHECK (programming_knowledge IN (
    'beginner', 'intermediate', '

advanced'
  )),
  learning_style TEXT CHECK (learning_style IN (
    'hands-on', 'theory-first', 'mixed'
  )),
  prior_robotics_experience BOOLEAN DEFAULT FALSE,
  learning_goals TEXT[],  -- Array: ['ros2', 'simulation', 'ai']
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## TypeScript Interfaces

### Frontend
```typescript
interface User {
  id: string;
  email: string;
  user_metadata: {
    name: string;
  };
}

interface UserProfile {
  id: string;
  programming_knowledge: 'beginner' | 'intermediate' | 'advanced';
  learning_style: 'hands-on' | 'theory-first' | 'mixed';
  prior_robotics_experience: boolean;
  learning_goals: string[];
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  signUp: (email, password, name) => Promise<void>;
  signIn: (email, password) => Promise<void>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}
```

### Backend (Pydantic)
```python
class SignupRequest(BaseModel):
    email: EmailStr
    password: str
    name: str

class ProfileUpdate(BaseModel):
    programming_knowledge: Literal['beginner', 'intermediate', 'advanced']
    learning_style: Literal['hands-on', 'theory-first', 'mixed']
    prior_robotics_experience: bool
    learning_goals: List[str]
```

## RLS Policies

```sql
-- Users can read/update their own profile
CREATE POLICY "own_profile_access"
  ON user_profiles
  FOR ALL
  USING (auth.uid() = id);

-- New users can insert their profile
CREATE POLICY "insert_own_profile"
  ON user_profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);
```
