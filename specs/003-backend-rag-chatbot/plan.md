# Implementation Plan: Backend RAG Chatbot

**Feature:** 003-backend-rag-chatbot  
**Estimated Effort:** 5 days

## Technical Approach

### Architecture
- FastAPI (ASGI server)
- Qdrant Cloud (vector database)
- OpenAI Agents SDK (conversation management)
- Gemini 1.5 Flash (LLM inference)

### Data Flow
1. User message → FastAPI endpoint
2. Query Qdrant for relevant book chunks (top-5)
3. Format prompt with context
4. Send to Gemini via Agents SDK
5. Return response with source citations

## Implementation Phases

### Phase 1: FastAPI Setup (Day 1)
**Tasks:**
- Initialize FastAPI project
- Install dependencies (fastapi, uvicorn, qdrant-client)
- Configure CORS for localhost:3000, 3001
- Create health check endpoint
- Set up .env for API keys

### Phase 2: Qdrant Integration (Day 2)
**Tasks:**
- Set up Qdrant cloud cluster
- Create "book_content" collection
- Configure embedding model (text-embedding-004)
- Write QdrantRetriever class
- Test similarity search

### Phase 3: Data Ingestion (Day 2-3)
**Tasks:**
- Create ingest_data.py script
- Read all markdown files from docs/
- Chunk text (500-1000 chars with overlap)
- Generate embeddings
- Upload to Qdrant with metadata

### Phase 4: Agent Implementation (Day 3-4)
**Tasks:**
- Install OpenAI Agents SDK
- Create BookChatbot agent class
- Integrate Gemini API
- Add Qdrant retriever as tool
- Implement conversation history
- Format responses with sources

### Phase 5: API Endpoints (Day 4)
**Tasks:**
- Implement POST /api/chat
- Add Pydantic models for validation
- Handle conversation_id
- Error handling and logging
- Test with Postman/curl

### Phase 6: Testing (Day 5)
**Tasks:**
- Write unit tests (pytest)
- Test RAG accuracy (20+ queries)
- Performance testing
- Error scenario testing
- Integration testing with frontend

## Timeline

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| 1. FastAPI | 8h | Server running |
| 2. Qdrant | 8h | DB connected |
| 3. Ingestion | 12h | Data vectorized |
| 4. Agent | 16h | Chatbot working |
| 5. API | 8h | Endpoints ready |
| 6. Testing | 8h | Tests passing |
| **Total** | **60h** | **~5 days** |
