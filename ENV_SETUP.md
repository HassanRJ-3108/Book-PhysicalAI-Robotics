# Frontend Environment Variables - SETUP GUIDE

## Copy this file to .env.local in the root directory

Create a file named `.env.local` in the root of your project and add:

```bash
# Supabase Configuration
# Get these from: https://supabase.com/dashboard/project/_/settings/api

NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_public_key_here
```

## Where to find your Supabase credentials:

1. Go to https://supabase.com/dashboard
2. Select your project
3. Click Settings (gear icon) → API
4. Copy:
   - Project URL → NEXT_PUBLIC_SUPABASE_URL
   - anon public key → NEXT_PUBLIC_SUPABASE_ANON_KEY

**IMPORTANT**: Make sure to use the `NEXT_PUBLIC_` prefix for client-side environment variables in Docusaurus.
