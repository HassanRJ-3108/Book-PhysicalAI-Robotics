---
title: "Backend RAG Chatbot"
description: "FastAPI backend with RAG chatbot using Qdrant, OpenAI Agents SDK, and Gemini API"
---

# Feature: Backend RAG Chatbot

## 1. Feature Description

Build FastAPI backend with Retrieval-Augmented Generation (RAG) chatbot that answers questions about Physical AI book using OpenAI Agents SDK for conversation management, Qdrant vector database for content retrieval, and Gemini API for LLM inference.

## 2. User Story

**As a** student reading the Physical AI book,
**I want to** ask questions and get accurate answers from book content,
**So that** I can quickly find information and clarify concepts without manually searching.

## 3. User Scenarios & Testing

| Scenario | Given | When | Then |
|:---|:---|:---|:---|
| **Ask Question** | User viewing book | Types "How do I create a ROS 2 node?" | Bot retrieves relevant content and provides answer with citations |
| **Follow-up** | Previous question answered | Asks "What about publishers?" | Bot understands context and provides related info |
| **Reset Chat** | Long conversation history | Clicks reset |  Conversation cleared, fresh context |

## 4. Functional Requirements

### FR1: FastAPI Server
- MUST run on port 8000
- MUST configure CORS for frontend (localhost:3000, localhost:3001)
- MUST include health check endpoint
- MUST handle errors gracefully with proper HTTP status codes

### FR2: Qdrant Integration
- MUST connect to Qdrant vector database (cloud or local)
- MUST store book content embeddings
- MUST retrieve top-k relevant chunks (k=5)
- MUST support similarity search

### FR3: Data Ingestion
- MUST provide script to ingest markdown files
- MUST chunk content appropriately (500-1000 chars)
- MUST generate embeddings for each chunk
- MUST store in Qdrant with metadata (chapter, page, title)

### FR4: OpenAI Agents SDK
- MUST create conversational agent
- MUST manage conversation history
- MUST integrate Qdrant retriever as tool
- MUST format responses with context

### FR5: Gemini API Integration
- MUST use Gemini 1.5 Flash for inference
- MUST handle API rate limits
- MUST provide fallback on errors
- MUST stream responses (optional)

### FR6: Chat Endpoint
- POST `/api/chat` MUST accept {message, conversation_id}
- MUST return {response, sources, conversation_id}
- MUST persist conversation history
- MUST cite source documents

## 5. Non-Functional Requirements

| NFR ID | Category | Requirement |
|:---|:---|:---|
| **NFR1** | **Performance** | Response time < 3s for queries |
| **NFR2** | **Accuracy** | RAG retrieval precision > 80% |
| **NFR3** | **Scalability** | Handle 100 concurrent users |
| **NFR4** | **Security** | API key in environment variables, not hardcoded |
| **NFR5** | **Reliability** | 99% uptime, graceful error handling |

## 6. Success Criteria

- **SC1:** FastAPI server runs without errors
- **SC2:** Qdrant connection successful
- **SC3:** 45 book pages ingested and vectorized
- **SC4:** Chat endpoint returns relevant answers
- **SC5:** Conversation history maintained across messages
- **SC6:** Error responses include helpful messages
- **SC7:** CORS allows frontend requests

## 7. API Contracts

### POST /api/chat
**Request:**
```json
{
  "message": "How do I create a ROS 2 node?",
  "conversation_id": "uuid-123" // optional
}
```

**Response:**
```json
{
  "response": "To create a ROS 2 node...",
  "sources": [
    {
      "chapter": "ROS 2",
      "page": "nodes-basics.md",
      "excerpt": "..."
    }
  ],
  "conversation_id": "uuid-123"
}
```

## 8. Tech Stack

- **Framework:** FastAPI 0.104+
- **Vector DB:** Qdrant 1.7+
- **Agent SDK:** OpenAI Agents SDK
- **LLM:** Google Gemini 1.5 Flash
- **Language:** Python 3.11+

## 9. Out of Scope

- User authentication (handled in Feature 004)
- Personalized responses based on user profile (future enhancement)
- Voice input/output
- Multi-language chat (future)
- Chat history persistence to database (in-memory for MVP)
