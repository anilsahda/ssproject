import React from "react";

function Aimlrag() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">
          Retrieval-Augmented Generation (RAG) Practical Examples
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Learn Retrieval-Augmented Generation (RAG) from beginner to advanced
          with practical examples covering document ingestion, embeddings,
          vector databases, retrieval, Large Language Models (LLMs), and
          enterprise AI applications.
        </p>
      </header>

      {/* Introduction */}
      <Section title="Step 1 : What is RAG?" color="text-green-600">
        <CodeBlock>
{`User Question

↓

Retriever

↓

Vector Database

↓

Relevant Documents

↓

Large Language Model (LLM)

↓

Accurate AI Response`}
        </CodeBlock>
      </Section>

      {/* Installation */}
      <Section title="Step 2 : Install Required Packages" color="text-yellow-600">
        <CodeBlock>
{`pip install openai

pip install langchain

pip install langgraph

pip install llama-index

pip install chromadb

pip install qdrant-client

pip install sentence-transformers

pip install pypdf

pip install fastapi`}
        </CodeBlock>
      </Section>

      {/* Architecture */}
      <Section title="Step 3 : RAG Architecture" color="text-red-600">
        <CodeBlock>
{`PDF Files

↓

Loader

↓

Text Extraction

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

Final Response`}
        </CodeBlock>
      </Section>

      {/* Load PDF */}
      <Section title="Step 4 : Load PDF Documents" color="text-indigo-600">
        <CodeBlock>
{`from langchain.document_loaders import PyPDFLoader

loader = PyPDFLoader("sample.pdf")

documents = loader.load()`}
        </CodeBlock>
      </Section>

      {/* Chunk */}
      <Section title="Step 5 : Split Documents" color="text-purple-600">
        <CodeBlock>
{`from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=100
)

chunks = splitter.split_documents(documents)`}
        </CodeBlock>
      </Section>

      {/* Embedding */}
      <Section title="Step 6 : Generate Embeddings" color="text-blue-600">
        <CodeBlock>
{`from sentence_transformers import SentenceTransformer

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

embedding = model.encode(
    "Artificial Intelligence"
)`}
        </CodeBlock>
      </Section>

      {/* Store */}
      <Section title="Step 7 : Store Embeddings" color="text-green-600">
        <CodeBlock>
{`Vector Databases

• ChromaDB

• Qdrant

• Pinecone

• FAISS

• Milvus

• Weaviate`}
        </CodeBlock>
      </Section>

      {/* Retrieve */}
      <Section title="Step 8 : Retrieve Relevant Documents" color="text-red-600">
        <CodeBlock>
{`User Question

↓

Retriever

↓

Top-K Documents

↓

Context

↓

LLM`}
        </CodeBlock>
      </Section>

      {/* Prompt */}
      <Section title="Step 9 : Prompt with Context" color="text-yellow-600">
        <CodeBlock>
{`Question:

Explain Machine Learning.

Context:

Retrieved Documents

↓

LLM

↓

Answer`}
        </CodeBlock>
      </Section>

      {/* LangChain */}
      <Section title="Step 10 : LangChain RAG Pipeline" color="text-purple-600">
        <CodeBlock>
{`Loader

↓

Splitter

↓

Embedding

↓

Vector Store

↓

Retriever

↓

Prompt Template

↓

LLM

↓

Answer`}
        </CodeBlock>
      </Section>

      {/* LlamaIndex */}
      <Section title="Step 11 : LlamaIndex Workflow" color="text-indigo-600">
        <CodeBlock>
{`Documents

↓

Index

↓

Retriever

↓

Query Engine

↓

LLM

↓

Response`}
        </CodeBlock>
      </Section>

      {/* Enterprise */}
      <Section title="Step 12 : Enterprise RAG Architecture" color="text-blue-600">
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

OpenAI / Gemini

↓

Enterprise AI Assistant`}
        </CodeBlock>
      </Section>

      {/* Use Cases */}
      <Section title="Step 13 : Real-World Use Cases" color="text-green-600">
        <CodeBlock>
{`Enterprise Chatbot

Document Search

Knowledge Base

Legal Assistant

Medical Assistant

HR Assistant

Customer Support

Research Assistant

Policy Search

Code Assistant`}
        </CodeBlock>
      </Section>

      {/* Best Practices */}
      <Section title="Step 14 : Best Practices" color="text-red-600">
        <CodeBlock>
{`Use Good Chunk Size

Optimize Chunk Overlap

Use High-Quality Embeddings

Choose Correct Vector Database

Cache Frequently Used Results

Secure API Keys

Monitor Token Usage

Evaluate Retrieval Accuracy`}
        </CodeBlock>
      </Section>

      {/* Practice */}
      <Section title="Practice Exercises" color="text-yellow-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Load PDF documents.</li>
          <li>Extract text from PDFs.</li>
          <li>Split documents into chunks.</li>
          <li>Generate embeddings.</li>
          <li>Store embeddings in ChromaDB.</li>
          <li>Store embeddings in Qdrant.</li>
          <li>Perform semantic search.</li>
          <li>Retrieve Top-K documents.</li>
          <li>Create prompt templates.</li>
          <li>Generate AI answers using retrieved context.</li>
          <li>Implement LangChain RAG.</li>
          <li>Implement LlamaIndex Query Engine.</li>
          <li>Expose RAG API using FastAPI.</li>
          <li>Create React Chat Interface.</li>
          <li>Deploy complete RAG application.</li>
        </ul>
      </Section>

      {/* Mini Project */}
      <Section title="Mini Project : Enterprise Document Chatbot" color="text-purple-600">
        <CodeBlock>
{`Tasks

1. Build React Frontend.

2. Build FastAPI Backend.

3. Upload PDF Files.

4. Extract Text.

5. Chunk Documents.

6. Generate Embeddings.

7. Store in ChromaDB/Qdrant.

8. Implement LangChain.

9. Connect OpenAI GPT.

10. Deploy Using Docker.`}
        </CodeBlock>
      </Section>

      {/* Interview */}
      <Section title="Interview Questions" color="text-indigo-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>What is Retrieval-Augmented Generation (RAG)?</li>
          <li>Why is RAG better than using an LLM alone?</li>
          <li>What are embeddings?</li>
          <li>What is document chunking?</li>
          <li>How do vector databases work?</li>
          <li>What is a retriever?</li>
          <li>What is Top-K retrieval?</li>
          <li>How does LangChain implement RAG?</li>
          <li>How does LlamaIndex differ from LangChain?</li>
          <li>How would you design a production-ready enterprise RAG system?</li>
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

export default Aimlrag;