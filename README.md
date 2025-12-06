# Physical AI Book RAG Chatbot - Complete System

A complete RAG (Retrieval-Augmented Generation) chatbot system for the Physical AI & Robotics book, featuring:
- **FastAPI Backend** with chat endpoints
- **OpenAI Agents SDK** with Gemini API
- **Qdrant Cloud** vector database
- **Beautiful Floating Chat UI** in Docusaurus

---

## 🎯 Features

### Backend
- ✅ RAG chatbot using OpenAI Agents SDK + Gemini
- ✅ FastAPI REST API with CORS
- ✅ Qdrant Cloud vector search
- ✅ Async support for scalability
- ✅ Health check endpoints

### Frontend
- ✅ Floating chat button (bottom-right)
- ✅ Modern, responsive chat UI
- ✅ Dark mode support
- ✅ Message history
- ✅ Reset chat functionality
- ✅ Smooth animations
- ✅ Mobile-friendly

---

## 📁 Project Structure

```
hackathon-project/
├── backend/                    # Python FastAPI backend
│   ├── chatbot/
│   │   ├── agent.py           # RAG chatbot with Agents SDK
│   │   └── qdrant_retriever.py # Qdrant search
│   ├── models/
│   │   └── schemas.py         # Pydantic models
│   ├── main.py                # FastAPI application
│   ├── ingest_data.py         # Data ingestion script
│   └── test_chatbot.py        # Test script
│
├── src/                       # Frontend (Docusaurus)
│   ├── components/
│   │   ├── ChatBot.tsx        # Floating chat component
│   │   └── ChatBot.module.css # Chatbot styles
│   └── theme/
│       └── Root.tsx           # Global integration
│
└── book_knowledge.txt         # Book content (14 chunks in Qdrant)
```

---

## 🚀 Setup & Running

### 1. Backend Setup

```bash
cd backend

# Install dependencies
uv sync

# Configure environment
cp env.example .env
# Add your GEMINI_API_KEY to .env

# (Optional) Ingest book data if not done
uv run python ingest_data.py

# Start FastAPI server
uv run python main.py
```

Backend will run on: `http://localhost:8000`

**API Endpoints:**
- `GET /` - API info
- `GET /health` - Health check
- `POST /api/chat` - Chat endpoint
- `POST /api/chat/reset` - Reset conversation
- `GET /docs` - Swagger UI

### 2. Frontend Setup

```bash
# From project root
npm install

# Start Docusaurus dev server
npm start
```

Frontend will run on: `http://localhost:3000`

---

## 💬 Using the Chatbot

1. **Start Backend**: `cd backend && uv run python main.py`
2. **Start Frontend**: `npm start`
3. **Open Browser**: Navigate to `http://localhost:3000`
4. **Click Chat Button**: Bottom-right floating button (🤖)
5. **Ask Questions**: About Physical AI, ROS 2, Robotics, etc.

### Chat Features

- **Open Chat**: Click floating button
- **Send Message**: Type and press Enter or click send
- **Reset Chat**: Click reset icon (🔄) in header
- **Close Chat**: Click X icon in header
- **Suggestions**: Click suggested questions to get started

---

## 🎨 UI Features

### Responsive Design
- **Desktop**: 400x600px chat window
- **Tablet**: Full-width with margins
- **Mobile**: Full-screen chat experience

### Animations
- Smooth slide-up on open
- Fade-in messages
- Floating bot avatar
- Typing indicator
- Hover effects

### Dark Mode
- Automatically adapts to Docusaurus theme
- Consistent colors in both modes

---

## 🔧 Configuration

### Backend (`backend/.env`)
```bash
GEMINI_API_KEY=your_api_key_here
```

### Qdrant (Hardcoded in code)
- **URL**: Cloud instance
- **Collection**: `book_knowledge`
- **Chunks**: 14 chunks from 7 chapters
- **Vector Size**: 768 (Gemini embeddings)

### CORS (in `main.py`)
```python
allow_origins=[
    "http://localhost:3000",  # Docusaurus dev
    "http://localhost:3001",
    "*"  # Allow all (restrict in production)
]
```

---

## 📊 API Usage Examples

### Chat Request
```bash
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What is Physical AI?",
    "conversation_id": "user-123"
  }'
```

### Response
```json
{
  "response": "Physical AI refers to...",
  "conversation_id": "user-123",
  "success": true
}
```

### Health Check
```bash
curl http://localhost:8000/health
```

---

## 🧪 Testing

### Test Backend Only
```bash
cd backend
uv run python test_chatbot.py
```

### Test API Endpoints
```bash
# Health check
curl http://localhost:8000/health

# Chat
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Tell me about ROS 2"}'
```

### Test Full System
1. Start backend: `uv run python main.py`
2. Start frontend: `npm start`
3. Open browser: `http://localhost:3000`
4. Click chat button and interact

---

## 🔜 Future Enhancements

### Planned Features
- [ ] User authentication (Sign Up / Login)
- [ ] Personalized chat history per user
- [ ] Database storage for conversations
- [ ] Streaming responses (real-time)
- [ ] Multi-language support
- [ ] Voice input/output
- [ ] Export conversation
- [ ] Feedback system

### In Progress
- Chat conversation memory
- Better error handling
- Rate limiting
- Analytics

---

## 📚 Tech Stack

### Backend
- **FastAPI** - Modern async web framework
- **OpenAI Agents SDK** - Agentic framework
- **Qdrant** - Vector database
- **Gemini API** - LLM & embeddings
- **Uvicorn** - ASGI server

### Frontend
- **React** - UI framework
- **TypeScript** - Type safety
- **Docusaurus** - Documentation site
- **CSS Modules** - Scoped styling

---

## 🐛 Troubleshooting

### Backend won't start
- Check if Gemini API key is set in `.env`
- Ensure all dependencies are installed: `uv sync`
- Check port 8000 is not in use

### Frontend can't connect
- Verify backend is running on port 8000
- Check CORS settings in `main.py`
- Open browser console for errors

### Chatbot not responding
- Check backend logs for errors
- Verify Qdrant connection
- Test with `curl` directly to API

### Rate limit errors
- Gemini API has rate limits
- Wait a minute and try again
- Check your API quota

---

## 📖 Documentation

- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/)
- [Qdrant Docs](https://qdrant.tech/documentation/)
- [Gemini API](https://ai.google.dev/)
- [Docusaurus](https://docusaurus.io/)

---

## 🎉 Quick Start (TL;DR)

```bash
# Terminal 1 - Backend
cd backend
uv sync
echo "GEMINI_API_KEY=your_key" > .env
uv run python main.py

# Terminal 2 - Frontend
npm start

# Open browser: http://localhost:3000
# Click chat button (bottom-right)
# Ask: "What is Physical AI?"
```

Enjoy your AI-powered book assistant! 🤖
