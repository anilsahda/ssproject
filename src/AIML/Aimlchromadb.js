import React from "react";

function Aimlchromadb() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">
          ChromaDB Practical Examples
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Learn ChromaDB from beginner to advanced with practical examples for
          Vector Storage, Semantic Search, Retrieval-Augmented Generation (RAG),
          and Enterprise AI Applications.
        </p>
      </header>

      {/* Installation */}
      <Section title="Step 1 : Install ChromaDB" color="text-green-600">
        <CodeBlock>
{`pip install chromadb

pip install sentence-transformers

pip install langchain

pip install langchain-community

pip install python-dotenv`}
        </CodeBlock>
      </Section>

      {/* Import */}
      <Section title="Step 2 : Import Libraries" color="text-yellow-600">
        <CodeBlock>
{`import chromadb

from sentence_transformers import SentenceTransformer`}
        </CodeBlock>
      </Section>

      {/* Create Client */}
      <Section title="Step 3 : Create ChromaDB Client" color="text-red-600">
        <CodeBlock>
{`import chromadb

client = chromadb.Client()`}
        </CodeBlock>
      </Section>

      {/* Collection */}
      <Section title="Step 4 : Create Collection" color="text-indigo-600">
        <CodeBlock>
{`collection = client.create_collection(
    name="employees"
)`}
        </CodeBlock>
      </Section>

      {/* Embeddings */}
      <Section title="Step 5 : Generate Embeddings" color="text-purple-600">
        <CodeBlock>
{`model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

embedding = model.encode(
    "Artificial Intelligence"
)

print(embedding.shape)`}
        </CodeBlock>
      </Section>

      {/* Insert */}
      <Section title="Step 6 : Insert Documents" color="text-blue-600">
        <CodeBlock>
{`collection.add(
    ids=["1","2","3"],
    documents=[
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning"
    ]
)`}
        </CodeBlock>
      </Section>

      {/* Metadata */}
      <Section title="Step 7 : Insert Metadata" color="text-green-600">
        <CodeBlock>
{`collection.add(
    ids=["4"],
    documents=["Python Programming"],
    metadatas=[
        {"category":"Programming"}
    ]
)`}
        </CodeBlock>
      </Section>

      {/* Query */}
      <Section title="Step 8 : Semantic Search" color="text-red-600">
        <CodeBlock>
{`results = collection.query(
    query_texts=[
        "Explain Artificial Intelligence"
    ],
    n_results=2
)

print(results)`}
        </CodeBlock>
      </Section>

      {/* Get */}
      <Section title="Step 9 : Retrieve Documents" color="text-yellow-600">
        <CodeBlock>
{`documents = collection.get()

print(documents)`}
        </CodeBlock>
      </Section>

      {/* Update */}
      <Section title="Step 10 : Update Document" color="text-purple-600">
        <CodeBlock>
{`collection.update(
    ids=["1"],
    documents=[
        "Artificial Intelligence Updated"
    ]
)`}
        </CodeBlock>
      </Section>

      {/* Delete */}
      <Section title="Step 11 : Delete Document" color="text-indigo-600">
        <CodeBlock>
{`collection.delete(
    ids=["2"]
)`}
        </CodeBlock>
      </Section>

      {/* Persist */}
      <Section title="Step 12 : Persistent ChromaDB" color="text-blue-600">
        <CodeBlock>
{`client = chromadb.PersistentClient(
    path="./chromadb"
)`}
        </CodeBlock>
      </Section>

      {/* LangChain */}
      <Section title="Step 13 : LangChain Integration" color="text-green-600">
        <CodeBlock>
{`from langchain_community.vectorstores import Chroma

vectorstore = Chroma(
    persist_directory="./chromadb"
)`}
        </CodeBlock>
      </Section>

      {/* RAG */}
      <Section title="Step 14 : RAG Workflow" color="text-red-600">
        <CodeBlock>
{`PDF Files

↓

Text Extraction

↓

Chunking

↓

Embeddings

↓

ChromaDB

↓

Retriever

↓

LLM

↓

AI Response`}
        </CodeBlock>
      </Section>

      {/* Architecture */}
      <Section title="Step 15 : Enterprise Architecture" color="text-yellow-600">
        <CodeBlock>
{`React

↓

FastAPI

↓

LangChain

↓

ChromaDB

↓

OpenAI

↓

AI Assistant`}
        </CodeBlock>
      </Section>

      {/* CRUD */}
      <Section title="Step 16 : CRUD Operations" color="text-purple-600">
        <CodeBlock>
{`Create Collection

Insert Documents

Retrieve Documents

Update Documents

Delete Documents

Semantic Search`}
        </CodeBlock>
      </Section>

      {/* Practice */}
      <Section title="Practice Exercises" color="text-indigo-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Install ChromaDB.</li>
          <li>Create a ChromaDB client.</li>
          <li>Create collections.</li>
          <li>Generate embeddings.</li>
          <li>Insert documents.</li>
          <li>Insert metadata.</li>
          <li>Retrieve documents.</li>
          <li>Update documents.</li>
          <li>Delete documents.</li>
          <li>Perform semantic search.</li>
          <li>Create persistent storage.</li>
          <li>Integrate with LangChain.</li>
          <li>Build a document retriever.</li>
          <li>Create a RAG chatbot.</li>
          <li>Build an enterprise knowledge search system.</li>
        </ul>
      </Section>

      {/* Mini Project */}
      <Section title="Mini Project : AI Document Search" color="text-green-600">
        <CodeBlock>
{`Tasks

1. Upload PDF Files.

2. Extract Text.

3. Split into Chunks.

4. Generate Embeddings.

5. Store in ChromaDB.

6. Perform Semantic Search.

7. Integrate LangChain.

8. Generate AI Answers.

9. Build FastAPI Backend.

10. Connect React Frontend.`}
        </CodeBlock>
      </Section>

      {/* Interview */}
      <Section title="Interview Questions" color="text-red-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>What is ChromaDB?</li>
          <li>Why is ChromaDB used in AI applications?</li>
          <li>What are embeddings?</li>
          <li>How does semantic search work?</li>
          <li>What is a collection in ChromaDB?</li>
          <li>How do you store metadata?</li>
          <li>How do you update and delete documents?</li>
          <li>How do you integrate ChromaDB with LangChain?</li>
          <li>How does ChromaDB support Retrieval-Augmented Generation (RAG)?</li>
          <li>When should you choose ChromaDB instead of FAISS or Pinecone?</li>
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

export default Aimlchromadb;