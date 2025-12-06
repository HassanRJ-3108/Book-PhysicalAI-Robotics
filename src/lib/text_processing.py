"""
Module for text processing, including chunking and embedding generation.
"""
import tiktoken
from typing import List
from transformers import AutoTokenizer, AutoModel
import torch

def chunk_text(text: str, model_name: str = "gpt-4", max_tokens: int = 1000, overlap: int = 200) -> List[str]:
    """
    Splits a given text into smaller chunks based on a maximum token limit.

    Args:
        text: The input text to be chunked.
        model_name: The name of the model to use for tokenization (e.g., "gpt-4", "text-embedding-ada-002").
        max_tokens: The maximum number of tokens allowed per chunk.
        overlap: The number of tokens to overlap between consecutive chunks.

    Returns:
        A list of text chunks.
    """
    if not text:
        return []

    encoding = tiktoken.encoding_for_model(model_name)
    tokens = encoding.encode(text)

    chunks = []
    i = 0
    while i < len(tokens):
        chunk = tokens[i : i + max_tokens]
        chunks.append(encoding.decode(chunk))
        if i + max_tokens >= len(tokens):
            break
        i += (max_tokens - overlap)
        if i < 0:  # Handle cases where max_tokens is less than or equal to overlap
            i = 0
            break
    return chunks

def generate_embeddings(texts: List[str], model_name: str = "sentence-transformers/all-MiniLM-L6-v2") -> List[List[float]]:
    """
    Generates vector embeddings for a list of texts using a pre-trained transformer model.

    Args:
        texts: A list of text strings for which to generate embeddings.
        model_name: The name of the pre-trained model to use for embedding generation.

    Returns:
        A list of lists of floats, where each inner list is the embedding for a corresponding text.
    """
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModel.from_pretrained(model_name)

    encoded_input = tokenizer(texts, padding=True, truncation=True, return_tensors='pt')

    with torch.no_grad():
        model_output = model(**encoded_input)

    # Take the mean of the last hidden state for pooling
    embeddings = model_output.last_hidden_state.mean(dim=1).tolist()
    return embeddings

