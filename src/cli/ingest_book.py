"""
Main script for ingesting book knowledge into Qdrant.
"""
import argparse
import os
import sys

# Add the parent directory of src to the system path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from lib.text_processing import chunk_text, generate_embeddings
from qdrant_client import QdrantClient, models

VECTOR_SIZE = 384  # From 'sentence-transformers/all-MiniLM-L6-v2'
DISTANCE_METRIC = models.Distance.COSINE

def main():
    parser = argparse.ArgumentParser(description="Ingest book knowledge into Qdrant.")
    parser.add_argument(
        "--qdrant-host",
        type=str,
        required=True,
        help="Host for the Qdrant instance (e.g., 'localhost:6333')",
    )
    parser.add_argument(
        "--collection-name",
        type=str,
        required=True,
        help="Name of the Qdrant collection to use",
    )
    parser.add_argument(
        "--book-path",
        type=str,
        required=True,
        help="Path to the book knowledge text file (e.g., 'book_knowledge.txt')",
    )
    args = parser.parse_args()

    print(f"Ingestion script started for collection '{args.collection_name}' on Qdrant host '{args.qdrant_host}'.")
    print(f"Using book knowledge from: {args.book_path}")

    try:
        with open(args.book_path, 'r', encoding='utf-8') as f:
            book_content = f.read()
        print(f"Successfully read book content from {args.book_path}")
    except FileNotFoundError:
        print(f"Error: Book file not found at {args.book_path}")
        return
    except Exception as e:
        print(f"Error reading book file: {e}")
        return

    # Process the book content
    print("Chunking text...")
    chunks = chunk_text(book_content)
    print(f"Created {len(chunks)} chunks.")

    if not chunks:
        print("No chunks generated. Exiting.")
        return

    print("Generating embeddings for chunks...")
    try:
        embeddings = generate_embeddings(chunks)
        print("Embeddings generated successfully.")
    except Exception as e:
        print(f"Error generating embeddings: {e}")
        return

    print(f"Connecting to Qdrant host: {args.qdrant_host}")
    try:
        qdrant_client = QdrantClient(host=args.qdrant_host)
        print("Qdrant client initialized.")

        print(f"Recreating collection '{args.collection_name}'...")
        qdrant_client.recreate_collection(
            collection_name=args.collection_name,
            vectors_config=models.VectorParams(
                size=VECTOR_SIZE,
                distance=DISTANCE_METRIC
            ),
        )
        print(f"Collection '{args.collection_name}' recreated successfully.")

    print(f"Upserting {len(chunks)} points into collection '{args.collection_name}'...")
    points = []
    for i, (chunk, embedding) in enumerate(zip(chunks, embeddings)):
        points.append(
            models.PointStruct(
                id=i,
                vector=embedding,
                payload={
                    "text": chunk,
                    "chunk_id": i,
                },
            )
        )

    try:
        operation_info = qdrant_client.upsert(
            collection_name=args.collection_name,
            wait=True,
            points=points,
        )
        print(f"Upsertion completed: {operation_info}")
    except Exception as e:
        print(f"Error upserting points to Qdrant: {e}")
        return

if __name__ == "__main__":
    main()