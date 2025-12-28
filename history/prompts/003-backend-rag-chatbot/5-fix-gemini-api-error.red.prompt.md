---
id: 21
title: Fix Gemini API 403 Error
stage: red
date: 2025-12-09
surface: agent
model: gemini-exp-1206
feature: 003-backend-rag-chatbot
user: Hassan RJ
labels: [bugfix, api]
files:
  - "backend/.env"
  - "backend/chatbot/agent.py"
---

## Prompt

Fix Gemini API returning 403 Forbidden error when chatbot tries to generate responses.

## Response

**Root Cause:**
GEMINI_API_KEY was missing from backend/.env file

**Fix:**
1. Added GEMINI_API_KEY to .env:
   ```
   GEMINI_API_KEY=AIza...
   ```
2. Restarted backend server
3. Verified API calls working

**Testing:**
- Sent test query: "What is ROS 2?"
- Response generated successfully
- No more 403 errors

## Outcome
- ✅ Impact: Chatbot fully functional
- 🧪 Tests: API calls working
- 📁 Files: Updated .env
- 🔁 Next: Deploy to production
