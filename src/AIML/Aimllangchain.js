import React from "react";

function Aimllangchain() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">
          LangChain Practical Examples
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Learn LangChain from beginner to advanced with hands-on practical examples for AI / ML Engineers.
        </p>
      </header>

      {/* Installation */}
      <Section title="Step 1 : Install LangChain" color="text-green-600">
        <CodeBlock>
{`pip install langchain

pip install langchain-openai

pip install langchain-community

pip install langchain-core

pip install faiss-cpu

pip install chromadb

pip install pypdf

pip install tiktoken`}
        </CodeBlock>
      </Section>

      {/* Import */}
      <Section title="Step 2 : Import Libraries" color="text-yellow-600">
        <CodeBlock>
{`from langchain_openai import ChatOpenAI

from langchain_core.prompts import ChatPromptTemplate

from langchain.chains import LLMChain`}
        </CodeBlock>
      </Section>

      {/* Environment */}
      <Section title="Step 3 : Configure API Key" color="text-red-600">
        <CodeBlock>
{`# .env

OPENAI_API_KEY=your_api_key`}
        </CodeBlock>
      </Section>

      {/* LLM */}
      <Section title="Step 4 : Initialize LLM" color="text-indigo-600">
        <CodeBlock>
{`from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0
)`}
        </CodeBlock>
      </Section>

      {/* Prompt */}
      <Section title="Step 5 : Prompt Template" color="text-purple-600">
        <CodeBlock>
{`from langchain_core.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_template(
    "Explain {topic} in simple words."
)

chain = prompt | llm

response = chain.invoke({
    "topic":"Machine Learning"
})

print(response.content)`}
        </CodeBlock>
      </Section>

      {/* Output Parser */}
      <Section title="Step 6 : Output Parser" color="text-blue-600">
        <CodeBlock>
{`from langchain_core.output_parsers import StrOutputParser

chain = prompt | llm | StrOutputParser()

print(
    chain.invoke({
        "topic":"Deep Learning"
    })
)`}
        </CodeBlock>
      </Section>

      {/* Document Loader */}
      <Section title="Step 7 : Load PDF" color="text-green-600">
        <CodeBlock>
{`from langchain_community.document_loaders import PyPDFLoader

loader = PyPDFLoader("sample.pdf")

documents = loader.load()

print(len(documents))`}
        </CodeBlock>
      </Section>

      {/* Text Splitter */}
      <Section title="Step 8 : Split Documents" color="text-red-600">
        <CodeBlock>
{`from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50
)

chunks = splitter.split_documents(documents)

print(len(chunks))`}
        </CodeBlock>
      </Section>

      {/* Embeddings */}
      <Section title="Step 9 : Create Embeddings" color="text-yellow-600">
        <CodeBlock>
{`from langchain_openai import OpenAIEmbeddings

embedding = OpenAIEmbeddings()`}
        </CodeBlock>
      </Section>

      {/* Vector DB */}
      <Section title="Step 10 : Store in FAISS" color="text-purple-600">
        <CodeBlock>
{`from langchain_community.vectorstores import FAISS

db = FAISS.from_documents(
    chunks,
    embedding
)

db.save_local("faiss_db")`}
        </CodeBlock>
      </Section>

      {/* Search */}
      <Section title="Step 11 : Similarity Search" color="text-indigo-600">
        <CodeBlock>
{`results = db.similarity_search(
    "What is Artificial Intelligence?"
)

print(results[0].page_content)`}
        </CodeBlock>
      </Section>

      {/* Retriever */}
      <Section title="Step 12 : Retriever" color="text-blue-600">
        <CodeBlock>
{`retriever = db.as_retriever()

docs = retriever.invoke(
    "Explain Neural Networks"
)

print(docs)`}
        </CodeBlock>
      </Section>

      {/* Conversation */}
      <Section title="Step 13 : Conversation Memory" color="text-green-600">
        <CodeBlock>
{`from langchain.memory import ConversationBufferMemory

memory = ConversationBufferMemory()`}
        </CodeBlock>
      </Section>

      {/* RAG */}
      <Section title="Step 14 : RAG Workflow" color="text-red-600">
        <CodeBlock>
{`PDF

↓

Split

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

      {/* Chains */}
      <Section title="Step 15 : Simple Chain" color="text-yellow-600">
        <CodeBlock>
{`chain = prompt | llm

response = chain.invoke({
    "topic":"Python"
})

print(response.content)`}
        </CodeBlock>
      </Section>

      {/* Practice */}
      <Section title="Practice Exercises" color="text-purple-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Install LangChain packages.</li>
          <li>Configure OpenAI API key.</li>
          <li>Create a prompt template.</li>
          <li>Generate responses using an LLM.</li>
          <li>Load a PDF document.</li>
          <li>Split large documents into chunks.</li>
          <li>Create embeddings.</li>
          <li>Store vectors in FAISS.</li>
          <li>Perform similarity search.</li>
          <li>Build a simple Retrieval-Augmented Generation (RAG) pipeline.</li>
        </ul>
      </Section>

      {/* Mini Project */}
      <Section title="Mini Project : AI PDF Chat Assistant" color="text-indigo-600">
        <CodeBlock>
{`Tasks

1. Upload PDF.

2. Read PDF.

3. Split Text.

4. Generate Embeddings.

5. Store in FAISS.

6. Retrieve Similar Documents.

7. Ask Questions.

8. Generate AI Answers.

9. Build FastAPI Backend.

10. Connect React Frontend.`}
        </CodeBlock>
      </Section>

      {/* Interview */}
      <Section title="Interview Questions" color="text-green-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>What is LangChain?</li>
          <li>What is an LLM?</li>
          <li>What is Prompt Engineering?</li>
          <li>What is a Chain?</li>
          <li>What are Embeddings?</li>
          <li>What is a Vector Database?</li>
          <li>What is FAISS?</li>
          <li>What is ChromaDB?</li>
          <li>What is Retrieval-Augmented Generation (RAG)?</li>
          <li>How is LangChain used in enterprise AI applications?</li>
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

export default Aimllangchain;