---
title: "AI Chatbot UI Component"
description: "React chatbot component integrated with FastAPI RAG backend"
---

# Feature: AI Chatbot UI Component

## 1. Feature Description

React-based chatbot UI component that integrates with FastAPI RAG backend, providing interactive Q&A about Physical AI book content with conversation history and suggested questions.

## 2. User Story

**As a** student reading the book,
**I want to** interact with an AI chatbot in the UI,
**So that** I can ask questions and get instant answers without leaving the page.

## 3. Functional Requirements

### FR1: ChatBot Component
- MUST display floating chat button (bottom-right)
- MUST expand to chat window on click
- MUST show conversation history
- MUST support message sending
- MUST display loading state while waiting for response

### FR2: Message Display
- MUST differentiate user vs bot messages
- MUST show timestamps
- MUST display source citations as links
- MUST support markdown in bot responses

### FR3: User Experience
- MUST provide suggested questions
- MUST allow conversation reset
- MUST auto-scroll to latest message
- MUST work on mobile (responsive)

## 4. Success Criteria

- [x] Chat button visible and clickable
- [x] Messages send to backend API
- [x] Responses display correctly
- [x] Source citations clickable
- [x] Mobile responsive
- [x] Loading indicator shows

## 5. Tech Stack

- **Frontend:** React, TypeScript
- **Styling:** CSS Modules
- **API:** Fetch to FastAPI backend
- **Markdown:** react-markdown (for bot responses)
