---
id: 8
title: Fix SSR Build Errors
stage: red
date: 2025-12-06
surface: agent
model: gemini-exp-1206
feature: 001-docusaurus-physical-ai-book
branch: 001-docusaurus-physical-ai-book
user: Hassan RJ
command: fix
labels: [bugfix, ssr, build]
files:
  - "src/theme/Root.tsx"
tests: ["Production build"]
---

## Prompt

Fix Server-Side Rendering (SSR) build errors:
- TypeError: Cannot read properties of undefined (reading 'init')
- Supabase client causing SSR issues
- Production build failing

## Response

**Root Cause:**
Supabase client was being initialized during SSR, but browser-only APIs (localStorage) were accessed

**Fix:**
- Wrapped AuthProvider and ChatBot in `@docusaurus/BrowserOnly`
- Updated Root.tsx to prevent SSR execution:
  ```tsx
  import BrowserOnly from '@docusaurus/BrowserOnly';
  
  export default function Root({children}) {
    return (
      <>
        <BrowserOnly>
          {() => <AuthProvider>{children}</AuthProvider>}
        </BrowserOnly>
        <BrowserOnly>
          {() => <ChatBot />}
        </BrowserOnly>
      </>
    );
  }
  ```

**Testing:**
- Production build successful: `npm run build`
- Dev server works: `npm start`
- Auth context loads in browser only
- No SSR errors

## Outcome

- ✅ Impact: Build succeeds, deployment ready
- 🧪 Tests: Build passes without errors
- 📁 Files: Fixed Root.tsx
- 🔁 Next: Deploy to GitHub Pages
- 🧠 Reflection: Always consider SSR implications in Docusaurus
