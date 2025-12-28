# Tasks: Backend RAG Chatbot

**Feature:** 003-backend-rag-chatbot  
**Total Tasks:** 28

## Phase 1: FastAPI Setup ⏱️ 4h

- [x] Initialize FastAPI project structure
- [x] Install dependencies (fastapi, uvicorn, qdrant-client, openai-agents-sdk)
- [x] Configure CORS middleware
- [x] Create health check endpoint
- [x] Set up environment variables (.env)
- [x] Test dev server runs

## Phase 2: Qdrant Integration ⏱️ 6h

- [x] Set up Qdrant cloud account
- [x] Create collection for book content
- [x] Configure embeddings model
- [x] Write QdrantRetriever class
- [x] Test connection and basic queries

## Phase 3: Data Ingestion ⏱️ 8h

- [x] Create ingest_data.py script
- [x] Read all markdown files from docs/
- [x] Implement text chunking (500-1000 chars)
- [x] Generate embeddings for chunks
- [x] Store in Qdrant with metadata
- [x] Verify 45 docs ingested successfully

## Phase 4: OpenAI Agents SDK ⏱️ 10h

- [x] Create BookChatbot agent class
- [x] Configure Gemini API integration
- [x] Implement RAG retrieval tool
- [x] Set up conversation history management
- [x] Format responses with sources
- [x] Test agent with sample queries

## Phase 5: API Endpoints ⏱️ 6h

- [x] Implement POST /api/chat endpoint
- [x] Add request/response validation (Pydantic)
- [x] Implement conversation_id handling
- [x] Add error handling and logging
- [x] Test endpoint with curl/Postman

## Phase 6: Error Handling ⏱️ 4h

- [x] Add try-catch blocks
- [x] Implement proper HTTP status codes
- [x] Create error response format
- [x] Handle Gemini API rate limits
- [x] Test error scenarios

## Phase 7: Testing ⏱️ 6h

- [x] Write unit tests for retriever
- [x] Test chat endpoint with various queries
- [x] Verify source citations correct
- [x] Test conversation history persistence
- [x] Performance testing (response time < 3s)

## Phase 8: Documentation ⏱️ 2h

- [x] Create README for backend
- [x] Document API endpoints
- [x] Add setup instructions
- [x] Write deployment guide
