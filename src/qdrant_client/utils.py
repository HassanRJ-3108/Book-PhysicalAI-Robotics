from qdrant_client import QdrantClient, models
from sentence_transformers import SentenceTransformer

def initialize_qdrant_client(host="localhost", port=6333, collection_name="book_collection"):
    client = QdrantClient(host=host, port=port)
    client.recreate_collection(
        collection_name=collection_name,
        vectors_config=models.VectorParams(size=384, distance=models.Distance.COSINE),
    )
    return client

def get_text_embedding(text: str) -> list[float]:
    model = SentenceTransformer('all-MiniLM-L6-v2')
    return model.encode(text).tolist()
