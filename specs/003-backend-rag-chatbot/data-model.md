# Data Model: Backend RAG Chatbot

**Feature:** 003-backend-rag-chatbot

## API Request/Response Models

### ChatRequest
```python
class ChatRequest(BaseModel):
    message: str
    conversation_id: Optional[str] = None
    user_id: Optional[str] = None  # For personalization
```

### ChatResponse
```python
class ChatResponse(BaseModel):
    response: str
    sources: List[Source]
    conversation_id: str
    
class Source(BaseModel):
    chapter: str
    page: str
    excerpt: str
    relevance_score: float
```

## Qdrant Document Schema

```python
{
    "id": "uuid",
    "vector": [768 floats],  # Embedding
    "payload": {
        "content": str,  # Actual text chunk
        "chapter": str,  # e.g., "ros2"
        "page": str,     # e.g., "nodes-basics.md"
        "title": str,    # Page title
        "chunk_index": int
    }
}
```

## Conversation History

```python
class ConversationMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str
    timestamp: datetime
    
class Conversation(BaseModel):
    id: str
    messages: List[ConversationMessage]
    created_at: datetime
    last_updated: datetime
```

## Agent Configuration

```python
class AgentConfig(BaseModel):
    model: str = "gemini-1.5-flash"
    temperature: float = 0.7
    max_tokens: int = 1000
    top_k_retrieval: int = 5
    system_prompt: str
```

## No Database Schema
All data is ephemeral (in-memory conversation history) or in Qdrant (vector embeddings).
