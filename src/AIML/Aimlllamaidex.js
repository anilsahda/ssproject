import React from "react";

function Aimlllamaidex() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">
          LlamaIndex Practical Examples
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Learn LlamaIndex from beginner to advanced with practical examples for building Retrieval-Augmented Generation (RAG), AI Assistants, and Enterprise Knowledge Search.
        </p>
      </header>

      {/* Installation */}
      <Section title="Step 1 : Install LlamaIndex" color="text-green-600">
        <CodeBlock>
{`pip install llama-index

pip install llama-index-llms-openai

pip install llama-index-embeddings-openai

pip install llama-index-vector-stores-faiss

pip install pypdf

pip install python-dotenv`}
        </CodeBlock>
      </Section>

      {/* Import */}
      <Section title="Step 2 : Import Libraries" color="text-yellow-600">
        <CodeBlock>
{`from llama_index.core import VectorStoreIndex

from llama_index.core import SimpleDirectoryReader

from llama_index.llms.openai import OpenAI`}
        </CodeBlock>
      </Section>

      {/* Environment */}
      <Section title="Step 3 : Configure Environment Variables" color="text-red-600">
        <CodeBlock>
{`# .env

OPENAI_API_KEY=your_api_key`}
        </CodeBlock>
      </Section>

      {/* Read Documents */}
      <Section title="Step 4 : Load Documents" color="text-indigo-600">
        <CodeBlock>
{`from llama_index.core import SimpleDirectoryReader

documents = SimpleDirectoryReader(
    "documents"
).load_data()

print(documents)`}
        </CodeBlock>
      </Section>

      {/* Create Index */}
      <Section title="Step 5 : Create Vector Index" color="text-purple-600">
        <CodeBlock>
{`from llama_index.core import VectorStoreIndex

index = VectorStoreIndex.from_documents(
    documents
)`}
        </CodeBlock>
      </Section>

      {/* Query Engine */}
      <Section title="Step 6 : Create Query Engine" color="text-blue-600">
        <CodeBlock>
{`query_engine = index.as_query_engine()`}
        </CodeBlock>
      </Section>

      {/* Ask Questions */}
      <Section title="Step 7 : Ask Questions" color="text-green-600">
        <CodeBlock>
{`response = query_engine.query(
    "Explain Artificial Intelligence."
)

print(response)`}
        </CodeBlock>
      </Section>

      {/* Save Index */}
      <Section title="Step 8 : Persist Index" color="text-red-600">
        <CodeBlock>
{`index.storage_context.persist(
    persist_dir="./storage"
)`}
        </CodeBlock>
      </Section>

      {/* Load Index */}
      <Section title="Step 9 : Load Existing Index" color="text-yellow-600">
        <CodeBlock>
{`from llama_index.core import StorageContext
from llama_index.core import load_index_from_storage

storage_context = StorageContext.from_defaults(
    persist_dir="./storage"
)

index = load_index_from_storage(
    storage_context
)`}
        </CodeBlock>
      </Section>

      {/* Chat Engine */}
      <Section title="Step 10 : Create Chat Engine" color="text-purple-600">
        <CodeBlock>
{`chat_engine = index.as_chat_engine()

response = chat_engine.chat(
    "What is Machine Learning?"
)

print(response)`}
        </CodeBlock>
      </Section>

      {/* PDF */}
      <Section title="Step 11 : Load PDF Documents" color="text-indigo-600">
        <CodeBlock>
{`documents = SimpleDirectoryReader(
    input_dir="pdfs"
).load_data()`}
        </CodeBlock>
      </Section>

      {/* Multiple Docs */}
      <Section title="Step 12 : Index Multiple Documents" color="text-blue-600">
        <CodeBlock>
{`documents = SimpleDirectoryReader(
    "./documents"
).load_data()

index = VectorStoreIndex.from_documents(
    documents
)`}
        </CodeBlock>
      </Section>

      {/* Embeddings */}
      <Section title="Step 13 : Embeddings Workflow" color="text-green-600">
        <CodeBlock>
{`Documents

↓

Chunking

↓

Embeddings

↓

Vector Store

↓

Query Engine`}
        </CodeBlock>
      </Section>

      {/* RAG */}
      <Section title="Step 14 : RAG Workflow" color="text-red-600">
        <CodeBlock>
{`User Question

↓

Retriever

↓

Relevant Chunks

↓

LLM

↓

Answer`}
        </CodeBlock>
      </Section>

      {/* Architecture */}
      <Section title="Step 15 : LlamaIndex Architecture" color="text-yellow-600">
        <CodeBlock>
{`Files

↓

Readers

↓

Documents

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

      {/* Practice */}
      <Section title="Practice Exercises" color="text-purple-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Install LlamaIndex.</li>
          <li>Configure OpenAI API Key.</li>
          <li>Read text files.</li>
          <li>Load PDF documents.</li>
          <li>Create a Vector Index.</li>
          <li>Create a Query Engine.</li>
          <li>Ask questions from documents.</li>
          <li>Persist the index.</li>
          <li>Load an existing index.</li>
          <li>Create a Chat Engine.</li>
        </ul>
      </Section>

      {/* Mini Project */}
      <Section title="Mini Project : Enterprise Knowledge Chatbot" color="text-indigo-600">
        <CodeBlock>
{`Tasks

1. Upload PDF Documents.

2. Read Documents.

3. Create Vector Index.

4. Store Embeddings.

5. Build Query Engine.

6. Build Chat Engine.

7. Ask Questions.

8. Build FastAPI API.

9. Connect React Frontend.

10. Deploy Application.`}
        </CodeBlock>
      </Section>

      {/* Interview */}
      <Section title="Interview Questions" color="text-green-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>What is LlamaIndex?</li>
          <li>How is LlamaIndex different from LangChain?</li>
          <li>What is a Vector Index?</li>
          <li>What is a Query Engine?</li>
          <li>What is a Chat Engine?</li>
          <li>How does document indexing work?</li>
          <li>What is Retrieval-Augmented Generation (RAG)?</li>
          <li>How do embeddings improve semantic search?</li>
          <li>How do you persist and reload an index?</li>
          <li>When should you choose LlamaIndex over LangChain?</li>
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

export default Aimlllamaidex;