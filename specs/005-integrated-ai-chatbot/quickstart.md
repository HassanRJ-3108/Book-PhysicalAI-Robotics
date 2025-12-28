# Quick Start: AI Chatbot UI

## Setup

Already integrated - no additional setup needed!

## Usage

### User Perspective

**Chat Button:**
- Located bottom-right corner
- Click to open chatbot

**Ask Questions:**
```
Type: "How do I create a ROS 2 node?"
Bot: Provides answer with source citations
```

**Suggested Questions:**
- Pre-populated questions for quick start
- Click to auto-fill and send

**Reset:**
- Clear conversation history
- Start fresh chat

## Developer Guide

### Component Location
```
src/components/ChatBot.tsx
src/components/ChatBot.module.css
```

### API Integration
```typescript
const response = await fetch('http://localhost:8000/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: userMessage })
});
```

### Styling
- CSS Modules for scoped styles
- Responsive design (mobile + desktop)
- Dark mode compatible

## Troubleshooting

**Issue:** Bot not responding
**Solution:** Check backend is running on port 8000

**Issue:** Sources not clickable
**Solution:** Verify source format from backend matches expected structure
