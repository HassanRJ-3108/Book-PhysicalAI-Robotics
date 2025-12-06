import argparse
from src.ingestion.book_ingestor import ingest_book_content
from src.chatbot.rag_chatbot import initialize_rag_chatbot, ask_chatbot
from qdrant_client import QdrantClient

def main():
    parser = argparse.ArgumentParser(description="RAG Chatbot CLI")
    subparsers = parser.add_subparsers(dest="command", help="Available commands")

    # Ingestion command
    ingest_parser = subparsers.add_parser("ingest", help="Ingest book content into Qdrant")
    ingest_parser.add_argument("file_path", type=str, help="Path to the book content file")
    ingest_parser.set_defaults(func=lambda args: ingest_book_content(args.file_path))

    # Chatbot command
    chat_parser = subparsers.add_parser("chat", help="Interact with the RAG Chatbot")
    chat_parser.add_argument("query", type=str, help="Your question for the chatbot")
    chat_parser.add_argument("--collection", type=str, default="book_collection", help="Qdrant collection name")
    chat_parser.set_defaults(func=lambda args: chat_with_bot(args.query, args.collection))

    args = parser.parse_args()
    if hasattr(args, "func"):
        args.func(args)
    else:
        parser.print_help()

def chat_with_bot(query: str, collection_name: str):
    qdrant_client = QdrantClient(host="localhost", port=6333)
    qa_chain = initialize_rag_chatbot(qdrant_client, collection_name)
    response = ask_chatbot(qa_chain, query)
    print(f"Chatbot: {response}")

if __name__ == "__main__":
    main()
