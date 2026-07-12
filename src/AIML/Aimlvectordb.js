import React from "react";

function Aimlvectordb() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">
          Vector Database Practical Examples
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Learn Vector Databases from beginner to advanced with practical
          examples for AI, RAG, Semantic Search, Enterprise Search, and LLM
          Applications.
        </p>
      </header>

      {/* Introduction */}
      <Section title="Step 1 : Popular Vector Databases" color="text-green-600">
        <CodeBlock>
{`Open Source

• FAISS
• ChromaDB
• Qdrant
• Milvus
• Weaviate

Cloud

• Pinecone
• Azure AI Search
• MongoDB Atlas Vector Search
• PostgreSQL + pgvector`}
        </CodeBlock>
      </Section>

      {/* Installation */}
      <Section title="Step 2 : Install Packages" color="text-yellow-600">
        <CodeBlock>
{`pip install faiss-cpu

pip install chromadb

pip install qdrant-client

pip install pymilvus

pip install weaviate-client

pip install sentence-transformers

pip install openai`}
        </CodeBlock>
      </Section>

      {/* Embeddings */}
      <Section title="Step 3 : Create Embeddings" color="text-red-600">
        <CodeBlock>
{`from sentence_transformers import SentenceTransformer

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

embedding = model.encode(
    "Artificial Intelligence"
)

print(embedding.shape)`}
        </CodeBlock>
      </Section>

      {/* FAISS */}
      <Section title="Step 4 : FAISS Example" color="text-indigo-600">
        <CodeBlock>
{`import faiss
import numpy as np

dimension = 384

index = faiss.IndexFlatL2(
    dimension
)

vectors = np.random.random(
    (5, dimension)
).astype("float32")

index.add(vectors)

print(index.ntotal)`}
        </CodeBlock>
      </Section>

      {/* Search */}
      <Section title="Step 5 : Similarity Search" color="text-purple-600">
        <CodeBlock>
{`query = np.random.random(
    (1,384)
).astype("float32")

distance, index_ids = index.search(
    query,
    3
)

print(index_ids)`}
        </CodeBlock>
      </Section>

      {/* Chroma */}
      <Section title="Step 6 : ChromaDB Example" color="text-blue-600">
        <CodeBlock>
{`import chromadb

client = chromadb.Client()

collection = client.create_collection(
    "employees"
)

collection.add(
    documents=[
        "Machine Learning",
        "Artificial Intelligence"
    ],
    ids=["1","2"]
)`}
        </CodeBlock>
      </Section>

      {/* Query */}
      <Section title="Step 7 : Query ChromaDB" color="text-green-600">
        <CodeBlock>
{`results = collection.query(
    query_texts=[
        "Explain AI"
    ],
    n_results=2
)

print(results)`}
        </CodeBlock>
      </Section>

      {/* Pinecone */}
      <Section title="Step 8 : Pinecone Workflow" color="text-red-600">
        <CodeBlock>
{`Documents

↓

Embeddings

↓

Pinecone Index

↓

Similarity Search

↓

LLM`}
        </CodeBlock>
      </Section>

      {/* pgvector */}
      <Section title="Step 9 : PostgreSQL + pgvector" color="text-yellow-600">
        <CodeBlock>
{`CREATE EXTENSION vector;

CREATE TABLE documents
(
    id SERIAL PRIMARY KEY,
    content TEXT,
    embedding VECTOR(384)
);`}
        </CodeBlock>
      </Section>

      {/* Qdrant */}
      <Section title="Step 10 : Qdrant Example" color="text-purple-600">
        <CodeBlock>
{`from qdrant_client import QdrantClient

client = QdrantClient(
    "localhost",
    port=6333
)`}
        </CodeBlock>
      </Section>

      {/* Milvus */}
      <Section title="Step 11 : Milvus Example" color="text-indigo-600">
        <CodeBlock>
{`from pymilvus import connections

connections.connect(
    host="localhost",
    port="19530"
)`}
        </CodeBlock>
      </Section>

      {/* Weaviate */}
      <Section title="Step 12 : Weaviate Example" color="text-blue-600">
        <CodeBlock>
{`import weaviate

client = weaviate.Client(
    "http://localhost:8080"
)`}
        </CodeBlock>
      </Section>

      {/* RAG */}
      <Section title="Step 13 : RAG Architecture" color="text-green-600">
        <CodeBlock>
{`PDF

↓

Chunking

↓

Embeddings

↓

Vector Database

↓

Retriever

↓

LLM

↓

Answer`}
        </CodeBlock>
      </Section>

      {/* Enterprise */}
      <Section title="Step 14 : Enterprise AI Architecture" color="text-red-600">
        <CodeBlock>
{`React

↓

FastAPI

↓

LangChain

↓

LlamaIndex

↓

Vector Database

↓

OpenAI

↓

Response`}
        </CodeBlock>
      </Section>

      {/* CRUD */}
      <Section title="Step 15 : CRUD Operations" color="text-yellow-600">
        <CodeBlock>
{`Create Embeddings

Insert Vectors

Update Vectors

Delete Vectors

Similarity Search

Metadata Search`}
        </CodeBlock>
      </Section>

      {/* Practice */}
      <Section title="Practice Exercises" color="text-purple-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Install FAISS.</li>
          <li>Install ChromaDB.</li>
          <li>Create text embeddings.</li>
          <li>Insert vectors into FAISS.</li>
          <li>Perform similarity search.</li>
          <li>Store vectors in ChromaDB.</li>
          <li>Search documents using embeddings.</li>
          <li>Connect PostgreSQL + pgvector.</li>
          <li>Explore Pinecone.</li>
          <li>Explore Milvus.</li>
          <li>Explore Qdrant.</li>
          <li>Explore Weaviate.</li>
          <li>Build semantic search.</li>
          <li>Build a RAG application.</li>
          <li>Create an enterprise knowledge base.</li>
        </ul>
      </Section>

      {/* Mini Project */}
      <Section title="Mini Project : Enterprise Document Search" color="text-indigo-600">
        <CodeBlock>
{`Tasks

1. Upload PDF Files.

2. Extract Text.

3. Split Documents.

4. Generate Embeddings.

5. Store in Vector Database.

6. Perform Similarity Search.

7. Retrieve Top Documents.

8. Generate AI Response.

9. Build FastAPI Backend.

10. Connect React Frontend.`}
        </CodeBlock>
      </Section>

      {/* Interview */}
      <Section title="Interview Questions" color="text-green-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>What is a Vector Database?</li>
          <li>Why do LLM applications use Vector Databases?</li>
          <li>What are embeddings?</li>
          <li>How does semantic search work?</li>
          <li>What is cosine similarity?</li>
          <li>What is FAISS?</li>
          <li>What is ChromaDB?</li>
          <li>What is Pinecone?</li>
          <li>What is Retrieval-Augmented Generation (RAG)?</li>
          <li>When should you use PostgreSQL + pgvector instead of a dedicated Vector Database?</li>
        </ul>
      </Section>

    </div>
  );
}

/* Reusable Section Component */
function Section({ title, color, children }) {
  return (
    <section>
      <div className="flex items-center mb-2">
        <strong className={color}>{title}</strong>
      </div>
      {children}
    </section>
  );
}

/* Reusable Code Block Component */
function CodeBlock({ children }) {
  return (
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5 whitespace-pre-wrap">
      <code>{children}</code>
    </pre>
  );
}

export default Aimlvectordb;