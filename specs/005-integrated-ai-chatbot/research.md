# Research: AI Chatbot UI Component

**Feature:** 005-integrated-ai-chatbot

## Component Library Selection

**Options:**
1. Plain React (chosen)
2. Material-UI
3. Chakra UI
4. Ant Design

**Decision:** Plain React with CSS Modules

**Rationale:**
- No additional dependencies
- Full control over styling
- Smaller bundle size
- Better performance
- Matches Docusaurus design system

## Chat UI Patterns Research

**Patterns Analyzed:**
1. **Floating Action Button (FAB)** - chosen
2. Sidebar chat
3. Inline chat
4. Modal chat

**Decision:** FAB with expandable window

**Rationale:**
- Non-intrusive (doesn't block content)
- Familiar pattern (WhatsApp, Facebook Messenger)
- Easy to dismiss
- Mobile-friendly
- Always accessible

## Message Display Strategy

**Options:**
1. Plain text
2. Markdown (chosen)
3. Rich text editor

**Decision:** Markdown with react-markdown

**Rationale:**
- Bot responses may include code blocks
- Formatting for numbered lists, bold, etc.
- Lightweight library
- Good security (XSS protection)

## Backend Communication

**Approach:** RESTful API with fetch

**Endpoints:**
- POST /api/chat - Send message
- Optional: WebSocket for streaming (future)

**Why not WebSocket initially:**
- Simpler implementation
- Sufficient for MVP
- Can upgrade later

## State Management

**Approach:** Component state with useState

**State Structure:**
```typescript
{
  messages: Message[],
  isOpen: boolean,
  isLoading: boolean,
  conversationId: string
}
```

**Why not Context/Redux:**
- State localized to ChatBot only
- No need for global state
- Simpler debugging

## Mobile Responsiveness

**Breakpoints:**
- Desktop (> 768px): Fixed bottom-right, 400px width
- Mobile (< 768px): Full screen when open

**Approach:**
- CSS media queries
- Touch-friendly UI (larger buttons)
- Smooth animations

## References

- [React Hooks Guide](https://react.dev/reference/react)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [react-markdown](https://github.com/remarkjs/react-markdown)
