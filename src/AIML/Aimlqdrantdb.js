import React from "react";

function Aimlqdrantdb() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">
          Qdrant Practical Examples
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Learn Qdrant from beginner to advanced with practical examples for
          Vector Storage, Semantic Search, AI Search, Retrieval-Augmented
          Generation (RAG), and Enterprise AI Applications.
        </p>
      </header>

      {/* Installation */}
      <Section title="Step 1 : Install Qdrant" color="text-green-600">
        <CodeBlock>
{`pip install qdrant-client

pip install sentence-transformers

pip install langchain

pip install langchain-community

pip install python-dotenv`}
        </CodeBlock>
      </Section>

      {/* Docker */}
      <Section title="Step 2 : Run Qdrant using Docker" color="text-yellow-600">
        <CodeBlock>
{`docker pull qdrant/qdrant

docker run -p 6333:6333 qdrant/qdrant`}
        </CodeBlock>
      </Section>

      {/* Import */}
      <Section title="Step 3 : Import Libraries" color="text-red-600">
        <CodeBlock>
{`from qdrant_client import QdrantClient

from sentence_transformers import SentenceTransformer`}
        </CodeBlock>
      </Section>

      {/* Connect */}
      <Section title="Step 4 : Connect to Qdrant" color="text-indigo-600">
        <CodeBlock>
{`client = QdrantClient(
    host="localhost",
    port=6333
)`}
        </CodeBlock>
      </Section>

      {/* Collection */}
      <Section title="Step 5 : Create Collection" color="text-purple-600">
        <CodeBlock>
{`from qdrant_client.models import VectorParams, Distance

client.create_collection(
    collection_name="employees",
    vectors_config=VectorParams(
        size=384,
        distance=Distance.COSINE
    )
)`}
        </CodeBlock>
      </Section>

      {/* Embeddings */}
      <Section title="Step 6 : Generate Embeddings" color="text-blue-600">
        <CodeBlock>
{`model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

embedding = model.encode(
    "Artificial Intelligence"
)`}
        </CodeBlock>
      </Section>

      {/* Insert */}
      <Section title="Step 7 : Insert Vectors" color="text-green-600">
        <CodeBlock>
{`from qdrant_client.models import PointStruct

client.upsert(
    collection_name="employees",
    points=[
        PointStruct(
            id=1,
            vector=embedding.tolist(),
            payload={
                "text":"Artificial Intelligence"
            }
        )
    ]
)`}
        </CodeBlock>
      </Section>

      {/* Search */}
      <Section title="Step 8 : Semantic Search" color="text-red-600">
        <CodeBlock>
{`results = client.search(
    collection_name="employees",
    query_vector=embedding.tolist(),
    limit=5
)

print(results)`}
        </CodeBlock>
      </Section>

      {/* Filter */}
      <Section title="Step 9 : Metadata Filtering" color="text-yellow-600">
        <CodeBlock>
{`payload={
    "department":"IT",
    "country":"India"
}`}
        </CodeBlock>
      </Section>

      {/* Update */}
      <Section title="Step 10 : Update Vectors" color="text-purple-600">
        <CodeBlock>
{`client.upsert(
    collection_name="employees",
    points=[
        PointStruct(
            id=1,
            vector=embedding.tolist(),
            payload={
                "text":"Updated AI Document"
            }
        )
    ]
)`}
        </CodeBlock>
      </Section>

      {/* Delete */}
      <Section title="Step 11 : Delete Vectors" color="text-indigo-600">
        <CodeBlock>
{`client.delete(
    collection_name="employees",
    points_selector=[1]
)`}
        </CodeBlock>
      </Section>

      {/* LangChain */}
      <Section title="Step 12 : LangChain Integration" color="text-blue-600">
        <CodeBlock>
{`from langchain_community.vectorstores import Qdrant

vectorstore = Qdrant(
    client=client,
    collection_name="employees"
)`}
        </CodeBlock>
      </Section>

      {/* RAG */}
      <Section title="Step 13 : RAG Workflow" color="text-green-600">
        <CodeBlock>
{`PDF Files

↓

Chunking

↓

Embeddings

↓

Qdrant

↓

Retriever

↓

LLM

↓

AI Response`}
        </CodeBlock>
      </Section>

      {/* Architecture */}
      <Section title="Step 14 : Enterprise AI Architecture" color="text-red-600">
        <CodeBlock>
{`React

↓

FastAPI

↓

LangChain

↓

Qdrant

↓

OpenAI

↓

AI Assistant`}
        </CodeBlock>
      </Section>

      {/* CRUD */}
      <Section title="Step 15 : CRUD Operations" color="text-yellow-600">
        <CodeBlock>
{`Create Collection

Insert Vectors

Retrieve Vectors

Update Vectors

Delete Vectors

Similarity Search

Metadata Filtering`}
        </CodeBlock>
      </Section>

      {/* Practice */}
      <Section title="Practice Exercises" color="text-purple-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Install Qdrant.</li>
          <li>Run Qdrant with Docker.</li>
          <li>Create a collection.</li>
          <li>Generate embeddings.</li>
          <li>Insert vectors.</li>
          <li>Perform similarity search.</li>
          <li>Store metadata.</li>
          <li>Filter by metadata.</li>
          <li>Update vectors.</li>
          <li>Delete vectors.</li>
          <li>Integrate LangChain.</li>
          <li>Build a semantic search engine.</li>
          <li>Create a RAG chatbot.</li>
          <li>Connect FastAPI.</li>
          <li>Build an enterprise AI search system.</li>
        </ul>
      </Section>

      {/* Mini Project */}
      <Section title="Mini Project : Enterprise AI Knowledge Base" color="text-indigo-600">
        <CodeBlock>
{`Tasks

1. Upload PDF Documents.

2. Extract Text.

3. Chunk Documents.

4. Generate Embeddings.

5. Store in Qdrant.

6. Perform Similarity Search.

7. Retrieve Relevant Documents.

8. Generate AI Answers.

9. Build FastAPI Backend.

10. Connect React Frontend.`}
        </CodeBlock>
      </Section>

      {/* Interview */}
      <Section title="Interview Questions" color="text-green-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>What is Qdrant?</li>
          <li>How does Qdrant store vectors?</li>
          <li>What is cosine similarity?</li>
          <li>What are payloads in Qdrant?</li>
          <li>How do metadata filters work?</li>
          <li>How do you perform semantic search?</li>
          <li>How do you integrate Qdrant with LangChain?</li>
          <li>Why is Qdrant popular for RAG applications?</li>
          <li>How is Qdrant different from ChromaDB and FAISS?</li>
          <li>When should you choose Qdrant for enterprise AI systems?</li>
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

export default Aimlqdrantdb;