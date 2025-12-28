# Quick Start: Backend RAG Chatbot

## Setup

### 1. Install Dependencies
```bash
cd backend
pip install -r requirements.txt
```

### 2. Environment Variables
Create `backend/.env`:
```
GEMINI_API_KEY=your_gemini_api_key
QDRANT_URL=https://your-cluster.qdrant.io
QDRANT_API_KEY=your_qdrant_api_key
```

### 3. Ingest Book Content
```bash
python ingest_data.py
```

### 4. Start Server
```bash
uvicorn main:app --reload
# Runs on http://localhost:8000
```

## API Usage

### Chat Endpoint
```bash
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "How do I create a ROS 2 node?"}'
```

### Health Check
```bash
curl http://localhost:8000/health
```

## Testing

```bash
# Run tests
pytest

# Test specific file
pytest tests/test_chatbot.py
```

## Troubleshooting

**Issue:** Qdrant connection failed
**Solution:** Check QDRANT_URL and QDRANT_API_KEY in .env

**Issue:** Gemini API 403 error  
**Solution:** Verify GEMINI_API_KEY is valid

**Issue:** No results from RAG
**Solution:** Re-run ingest_data.py to populate Qdrant
