# Data Model: AI Chatbot UI Component

**Feature:** 005-integrated-ai-chatbot

## TypeScript Interfaces

### Message
```typescript
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  sources?: Source[];
}

interface Source {
  chapter: string;
  page: string;
  excerpt: string;
  url?: string;
}
```

### ChatBot Component State
```typescript
interface ChatBotState {
  messages: Message[];
  isOpen: boolean;
  isLoading: boolean;
  conversationId: string;
  input: string;
}
```

### API Request/Response
```typescript
// Request
interface ChatRequest {
  message: string;
  conversation_id?: string;
  user_id?: string;
}

// Response
interface ChatResponse {
  response: string;
  sources: Source[];
  conversation_id: string;
}
```

## Component Props
```typescript
interface ChatBotProps {
  apiEndpoint?: string;  // Default: http://localhost:8000/api/chat
  suggestedQuestions?: string[];
  theme?: 'light' | 'dark';
}
```

## LocalStorage Schema
```typescript
// Stored conversation history (optional feature)
interface StoredConversation {
  conversation_id: string;
  messages: Message[];
  last_updated: string;
}

// Key: `chatbot_conversation_${userId}`
```

## CSS Class Names (Module)
```css
.chatButton { }
.chatWindow { }
.chatHeader { }
.messageList { }
.message { }
.userMessage { }
.botMessage { }
.inputContainer { }
.input { }
.sendButton { }
.loadingIndicator { }
.suggestedQuestions { }
.sourcesList { }
```

## Event Handlers
```typescript
type MessageHandler = (message: string) => Promise<void>;
type ResetHandler = () => void;
type ToggleHandler = () => void;
```
