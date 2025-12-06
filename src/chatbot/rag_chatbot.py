from qdrant_client import QdrantClient
from src.qdrant_client.utils import get_text_embedding
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.vectorstores import Qdrant

# Placeholder for a more sophisticated LLM initialization
# For now, using a simple ChatOpenAI instance. In a real scenario,
# you'd configure this with API keys and potentially a local LLM or different provider.
llm = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0)

def initialize_rag_chatbot(qdrant_client: QdrantClient, collection_name: str = "book_collection"):
    # Assuming `get_text_embedding` provides embeddings compatible with the Qdrant store
    # For this example, we'll need to wrap our qdrant client with a Langchain-compatible vectorstore.
    # In a full Langchain setup, you'd integrate the embedding model more directly.

    # This is a simplified representation. A real Langchain Qdrant integration
    # would involve `from_existing_collection` or similar with a proper `Embeddings` object.
    qdrant_vectorstore = Qdrant(client=qdrant_client, collection_name=collection_name, embeddings=None) # embeddings=None is a placeholder, needs a proper embedding function

    from langchain.prompts import PromptTemplate

    # Custom prompt template for better answer relevance and out-of-scope handling
    template = """Use the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer. If the question is clearly out of scope, politely decline to answer.

{context}

Question: {question}
Helpful Answer:"""
    QA_CHAIN_PROMPT = PromptTemplate.from_template(template)

    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=qdrant_vectorstore.as_retriever(),
        return_source_documents=True, # To check if any documents were retrieved
        chain_type_kwargs={"prompt": QA_CHAIN_PROMPT}
    )
    return qa_chain

def ask_chatbot(qa_chain: RetrievalQA, query: str) -> str:
    result = qa_chain({"query": query})
    response = result["result"]
    # Basic check for out-of-scope or unknown answers
    if "i don't know" in response.lower() or "politely decline to answer" in response.lower():
        return "I'm sorry, I cannot answer that question based on the provided context." # Default out-of-scope message
    return response
    