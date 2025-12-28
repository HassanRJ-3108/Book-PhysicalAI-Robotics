---
title: "Authentication & Personalization"
description: "Supabase-based auth system with user profiles and learning preferences"
---

# Feature: Authentication & Personalization

## 1. Feature Description

Implement Supabase authentication system with user signup/signin, profile management, and personalized learning preferences for Physical AI book readers.

## 2. User Story

**As a** student using the Physical AI book,
**I want to** create an account and save my learning preferences,
**So that** I get personalized content recommendations and track my progress.

## 3. User Scenarios

| Scenario | Given | When | Then |
|:---|:---|:---|:---|
| **Sign Up** | New user visits /signup | Enters email, password, name | Account created, confirmation email sent |
| **Email Confirmation** | User receives email | Clicks confirmation link | Auto-logged in, redirected to /profile |
| **Complete Profile** | Logged-in user at /profile | Fills preferences form | Profile saved, personalized experience enabled |
| **Sign In** | Returning user at /signin | Enters credentials | Logged in, redirected to homepage |

## 4. Functional Requirements

### FR1: Signup Flow
- MUST collect email, password, name (initial signup)
- MUST send Supabase email confirmation
- MUST auto-login after email confirmation
- MUST redirect to /profile for profile completion

### FR2: Profile Management
- MUST collect: programming knowledge, learning style, robotics experience, learning goals
- MUST save to Supabase user_profiles table
- MUST allow profile updates
- MUST display in navbar dropdown

### FR3: Authentication State
- MUST persist auth state across sessions
- MUST provide AuthContext for app-wide access
- MUST handle token refresh
- MUST support signout

### FR4: Backend Integration
- FastAPI MUST validate Supabase tokens
- MUST fetch user profile from database
- MUST personalize chatbot responses based on profile

## 5. Success Criteria

- [x] Signup with email confirmation works
- [x] Profile page collects all required fields
- [x] Auth state persists across page reloads
- [x] Navbar shows user name and avatar
- [x] Backend validates Supabase tokens
- [x] Chatbot uses user profile for context

## 6. Tech Stack

- **Frontend Auth:** Supabase Auth UI, React Context
- **Backend Auth:** Supabase Python client
- **Database:** Supabase Postgres (user_profiles table)
- **API:** FastAPI with Supabase JWT validation
