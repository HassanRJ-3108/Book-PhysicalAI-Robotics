from langchain.text_splitter import RecursiveCharacterTextSplitter
from qdrant_client.http.models import PointStruct
from src.qdrant_client.utils import get_text_embedding, initialize_qdrant_client

def load_and_split_text(file_path: str) -> list[str]:
    with open(file_path, "r", encoding="utf-8") as f:
        text = f.read()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    return text_splitter.split_text(text)

def ingest_book_content(file_path: str, collection_name: str = "book_collection"):
    client = initialize_qdrant_client(collection_name=collection_name)
    texts = load_and_split_text(file_path)
    points = []
    for i, text in enumerate(texts):
        embedding = get_text_embedding(text)
        points.append(PointStruct(id=i, vector=embedding, payload={"text": text}))
    client.upsert(collection_name=collection_name, points=points)
    print(f"Ingested {len(texts)} chunks into Qdrant collection {collection_name}")