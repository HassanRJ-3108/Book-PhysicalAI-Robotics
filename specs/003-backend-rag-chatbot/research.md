# Research: Backend RAG Chatbot

**Feature:** 003-backend-rag-chatbot

## Vector Database Selection

**Options:**
1. Qdrant (chosen)
2. Pinecone
3. Weaviate
4. ChromaDB

**Decision:** Qdrant Cloud

**Rationale:**
- Free tier sufficient for MVP (1GB storage)
- Excellent Python SDK
- Fast similarity search
- Managed hosting (no infrastructure)
- Good documentation

## LLM Provider Selection

**Options:**
1. OpenAI GPT-4
2. Gemini 1.5 Flash (chosen)
3. Claude 3
4. Llama 2

**Decision:** Gemini 1.5 Flash

**Rationale:**
- Free tier with generous limits
- Fast inference (<2s)
- Good RAG performance
- Easy API integration
- Cost-effective for hackathon

## Conversation Management

**Options:**
1. Manual history tracking
2. OpenAI Agents SDK (chosen)
3. LangChain
4. Custom agent framework

**Decision:** OpenAI Agents SDK

**Rationale:**
- Simplified conversation state
- Built-in tool integration
- Clean API
- Well-documented
- No LangChain complexity

## Chunking Strategy

**Approach:** Sliding window with overlap
- Chunk size: 750 characters
- Overlap: 150 characters
- Preserves context across chunks
- Better retrieval accuracy

## Embedding Model

**Model:** text-embedding-004 (Google)
- 768 dimensions
- Optimized for semantic search
- Free via Gemini API

## References

- [Qdrant Documentation](https://qdrant.tech/documentation/)
- [OpenAI Agents SDK](https://github.com/openai/openai-agents-sdk)
- [Gemini API Docs](https://ai.google.dev/docs)
