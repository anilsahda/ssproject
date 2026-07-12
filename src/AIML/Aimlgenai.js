import React from "react";

function Aimlgenai() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">
          Generative AI (GenAI) Practical Examples
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Learn Generative AI from beginner to advanced with hands-on examples
          covering Large Language Models (LLMs), Prompt Engineering, AI APIs,
          RAG, AI Agents, and Enterprise AI Applications.
        </p>
      </header>

      {/* Installation */}
      <Section title="Step 1 : Install Required Packages" color="text-green-600">
        <CodeBlock>
{`pip install openai

pip install transformers

pip install sentence-transformers

pip install langchain

pip install langgraph

pip install llama-index

pip install chromadb

pip install qdrant-client

pip install fastapi`}
        </CodeBlock>
      </Section>

      {/* What is GenAI */}
      <Section title="Step 2 : What is Generative AI?" color="text-yellow-600">
        <CodeBlock>
{`Generative AI

↓

Foundation Models

↓

Large Language Models (LLMs)

↓

Prompt Engineering

↓

Embeddings

↓

Vector Database

↓

Retrieval-Augmented Generation (RAG)

↓

AI Applications`}
        </CodeBlock>
      </Section>

      {/* Popular Models */}
      <Section title="Step 3 : Popular LLM Models" color="text-red-600">
        <CodeBlock>
{`OpenAI GPT

Google Gemini

Anthropic Claude

Meta Llama

DeepSeek

Mistral

Microsoft Phi

Qwen`}
        </CodeBlock>
      </Section>

      {/* OpenAI */}
      <Section title="Step 4 : First OpenAI Example" color="text-indigo-600">
        <CodeBlock>
{`from openai import OpenAI

client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4.1",
    messages=[
        {
            "role":"user",
            "content":"What is Artificial Intelligence?"
        }
    ]
)

print(response.choices[0].message.content)`}
        </CodeBlock>
      </Section>

      {/* HuggingFace */}
      <Section title="Step 5 : Local LLM Example" color="text-purple-600">
        <CodeBlock>
{`from transformers import pipeline

generator = pipeline(
    "text-generation",
    model="gpt2"
)

print(
    generator(
        "Artificial Intelligence",
        max_length=50
    )
)`}
        </CodeBlock>
      </Section>

      {/* Prompt Engineering */}
      <Section title="Step 6 : Prompt Engineering" color="text-blue-600">
        <CodeBlock>
{`Zero Shot Prompt

One Shot Prompt

Few Shot Prompt

Chain of Thought Prompt

Role Prompt

Structured Prompt`}
        </CodeBlock>
      </Section>

      {/* Embeddings */}
      <Section title="Step 7 : Text Embeddings" color="text-green-600">
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

      {/* RAG */}
      <Section title="Step 8 : RAG Workflow" color="text-red-600">
        <CodeBlock>
{`PDF Files

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

Final Answer`}
        </CodeBlock>
      </Section>

      {/* AI Agents */}
      <Section title="Step 9 : AI Agents" color="text-yellow-600">
        <CodeBlock>
{`User

↓

AI Agent

↓

Tools

↓

Database

↓

API

↓

LLM

↓

Response`}
        </CodeBlock>
      </Section>

      {/* LangChain */}
      <Section title="Step 10 : LangChain Integration" color="text-purple-600">
        <CodeBlock>
{`Prompt

↓

LLM

↓

Memory

↓

Tools

↓

Output Parser

↓

Response`}
        </CodeBlock>
      </Section>

      {/* Enterprise */}
      <Section title="Step 11 : Enterprise GenAI Architecture" color="text-indigo-600">
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

      {/* AI Use Cases */}
      <Section title="Step 12 : Real-World Use Cases" color="text-blue-600">
        <CodeBlock>
{`Chatbot

Document Q&A

Resume Analyzer

Invoice Processing

Healthcare Assistant

Legal Assistant

HR Assistant

Recommendation System

AI Code Generator

AI Search Engine`}
        </CodeBlock>
      </Section>

      {/* AI Lifecycle */}
      <Section title="Step 13 : GenAI Development Lifecycle" color="text-green-600">
        <CodeBlock>
{`Problem Definition

↓

Data Collection

↓

Model Selection

↓

Prompt Engineering

↓

RAG

↓

Testing

↓

Deployment

↓

Monitoring`}
        </CodeBlock>
      </Section>

      {/* Best Practices */}
      <Section title="Step 14 : Best Practices" color="text-red-600">
        <CodeBlock>
{`Use Environment Variables

Validate Prompts

Store Chat History

Use Vector Databases

Implement Authentication

Monitor Token Usage

Cache Responses

Handle Errors Gracefully`}
        </CodeBlock>
      </Section>

      {/* Practice */}
      <Section title="Practice Exercises" color="text-yellow-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Install OpenAI SDK.</li>
          <li>Call an LLM using an API.</li>
          <li>Generate text using Hugging Face.</li>
          <li>Create effective prompts.</li>
          <li>Generate embeddings.</li>
          <li>Store embeddings in ChromaDB.</li>
          <li>Perform semantic search.</li>
          <li>Build a RAG pipeline.</li>
          <li>Create a chatbot.</li>
          <li>Integrate LangChain.</li>
          <li>Integrate LlamaIndex.</li>
          <li>Create an AI Agent.</li>
          <li>Expose the chatbot using FastAPI.</li>
          <li>Connect a React frontend.</li>
          <li>Deploy the application.</li>
        </ul>
      </Section>

      {/* Mini Project */}
      <Section title="Mini Project : Enterprise AI Chatbot" color="text-purple-600">
        <CodeBlock>
{`Tasks

1. Build React Frontend.

2. Build FastAPI Backend.

3. Integrate OpenAI GPT.

4. Upload PDF Documents.

5. Extract Text.

6. Generate Embeddings.

7. Store in ChromaDB/Qdrant.

8. Implement RAG.

9. Create AI Chat API.

10. Deploy Using Docker.`}
        </CodeBlock>
      </Section>

      {/* Interview */}
      <Section title="Interview Questions" color="text-indigo-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>What is Generative AI?</li>
          <li>How is GenAI different from traditional Machine Learning?</li>
          <li>What is a Large Language Model (LLM)?</li>
          <li>What is Prompt Engineering?</li>
          <li>What are embeddings?</li>
          <li>What is a Vector Database?</li>
          <li>What is Retrieval-Augmented Generation (RAG)?</li>
          <li>What are AI Agents?</li>
          <li>How do LangChain and LlamaIndex help in GenAI applications?</li>
          <li>How would you design a production-ready Enterprise AI Chatbot?</li>
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

export default Aimlgenai;