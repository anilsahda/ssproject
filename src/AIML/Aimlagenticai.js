import React from "react";

function Aimlagenticai() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">
          Agentic AI Practical Examples
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Learn Agentic AI from beginner to advanced with hands-on examples for
          AI Agents, Multi-Agent Systems, Tool Calling, Planning, Memory,
          Reasoning, Automation, and Enterprise AI Applications.
        </p>
      </header>

      {/* Introduction */}
      <Section title="Step 1 : What is Agentic AI?" color="text-green-600">
        <CodeBlock>
{`Agentic AI

↓

AI Agent

↓

Planning

↓

Reasoning

↓

Tool Calling

↓

Memory

↓

Execution

↓

Final Response`}
        </CodeBlock>
      </Section>

      {/* Packages */}
      <Section title="Step 2 : Install Required Packages" color="text-yellow-600">
        <CodeBlock>
{`pip install openai

pip install langchain

pip install langgraph

pip install llama-index

pip install crewai

pip install autogen

pip install chromadb

pip install qdrant-client

pip install fastapi`}
        </CodeBlock>
      </Section>

      {/* Architecture */}
      <Section title="Step 3 : Agentic AI Architecture" color="text-red-600">
        <CodeBlock>
{`User

↓

Planner Agent

↓

Reasoning Agent

↓

Tool Agent

↓

Retriever

↓

Vector Database

↓

LLM

↓

Final Answer`}
        </CodeBlock>
      </Section>

      {/* Agent Lifecycle */}
      <Section title="Step 4 : AI Agent Lifecycle" color="text-indigo-600">
        <CodeBlock>
{`Receive Task

↓

Understand Goal

↓

Create Plan

↓

Call Tools

↓

Retrieve Knowledge

↓

Reason

↓

Execute

↓

Return Response`}
        </CodeBlock>
      </Section>

      {/* AI Agent Example */}
      <Section title="Step 5 : Simple AI Agent Example" color="text-purple-600">
        <CodeBlock>
{`from openai import OpenAI

client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4.1",
    messages=[
        {
            "role":"system",
            "content":"You are an AI Assistant."
        },
        {
            "role":"user",
            "content":"Explain Machine Learning."
        }
    ]
)

print(response.choices[0].message.content)`}
        </CodeBlock>
      </Section>

      {/* Agent Components */}
      <Section title="Step 6 : Agent Components" color="text-blue-600">
        <CodeBlock>
{`Planning

Memory

Reasoning

Tools

Knowledge Base

Retriever

LLM

Response Generator`}
        </CodeBlock>
      </Section>

      {/* Tool Calling */}
      <Section title="Step 7 : Tool Calling Workflow" color="text-green-600">
        <CodeBlock>
{`User

↓

AI Agent

↓

Weather API

↓

Calculator

↓

Database

↓

Search Engine

↓

Response`}
        </CodeBlock>
      </Section>

      {/* Memory */}
      <Section title="Step 8 : Memory Types" color="text-red-600">
        <CodeBlock>
{`Short-Term Memory

Conversation Memory

Long-Term Memory

Knowledge Memory

Vector Memory`}
        </CodeBlock>
      </Section>

      {/* Multi-Agent */}
      <Section title="Step 9 : Multi-Agent Architecture" color="text-yellow-600">
        <CodeBlock>
{`User

↓

Manager Agent

↓

Research Agent

↓

Coding Agent

↓

Testing Agent

↓

Documentation Agent

↓

Final Response`}
        </CodeBlock>
      </Section>

      {/* Enterprise */}
      <Section title="Step 10 : Enterprise Agentic AI Architecture" color="text-purple-600">
        <CodeBlock>
{`React

↓

FastAPI

↓

Agent Framework

↓

LangGraph

↓

CrewAI

↓

LlamaIndex

↓

Vector Database

↓

LLM`}
        </CodeBlock>
      </Section>

      {/* Frameworks */}
      <Section title="Step 11 : Popular Agent Frameworks" color="text-indigo-600">
        <CodeBlock>
{`LangGraph

CrewAI

Microsoft AutoGen

OpenAI Agents SDK

LlamaIndex Workflows

Semantic Kernel

Haystack`}
        </CodeBlock>
      </Section>

      {/* Use Cases */}
      <Section title="Step 12 : Real World Use Cases" color="text-blue-600">
        <CodeBlock>
{`AI Customer Support

AI HR Assistant

AI Coding Assistant

AI Research Assistant

AI Medical Assistant

AI Legal Assistant

AI Finance Assistant

AI Sales Assistant

AI Automation

AI Workflow Engine`}
        </CodeBlock>
      </Section>

      {/* Best Practices */}
      <Section title="Step 13 : Best Practices" color="text-green-600">
        <CodeBlock>
{`Use Planning

Use Tool Calling

Store Memory

Use Vector Database

Handle Errors

Limit Tool Access

Secure API Keys

Monitor Agent Decisions`}
        </CodeBlock>
      </Section>

      {/* Practice */}
      <Section title="Practice Exercises" color="text-red-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Create your first AI Agent.</li>
          <li>Connect OpenAI GPT.</li>
          <li>Create a Planner Agent.</li>
          <li>Create a Research Agent.</li>
          <li>Create a Coding Agent.</li>
          <li>Implement Tool Calling.</li>
          <li>Connect Weather API.</li>
          <li>Connect Calculator Tool.</li>
          <li>Integrate ChromaDB.</li>
          <li>Implement Long-Term Memory.</li>
          <li>Create a Multi-Agent System.</li>
          <li>Integrate LangGraph.</li>
          <li>Integrate CrewAI.</li>
          <li>Deploy with FastAPI.</li>
          <li>Connect React Frontend.</li>
        </ul>
      </Section>

      {/* Mini Project */}
      <Section title="Mini Project : Enterprise AI Employee Assistant" color="text-yellow-600">
        <CodeBlock>
{`Tasks

1. Build React Frontend.

2. Build FastAPI Backend.

3. Create Planner Agent.

4. Create HR Agent.

5. Create Leave Management Agent.

6. Create Payroll Agent.

7. Integrate ChromaDB/Qdrant.

8. Implement RAG.

9. Connect OpenAI.

10. Deploy Using Docker.`}
        </CodeBlock>
      </Section>

      {/* Interview */}
      <Section title="Interview Questions" color="text-purple-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>What is Agentic AI?</li>
          <li>How is Agentic AI different from Generative AI?</li>
          <li>What is an AI Agent?</li>
          <li>What is planning in AI agents?</li>
          <li>What is tool calling?</li>
          <li>What is memory in AI agents?</li>
          <li>What is a Multi-Agent System?</li>
          <li>How does LangGraph support Agentic AI?</li>
          <li>What is CrewAI used for?</li>
          <li>How would you design an Enterprise AI Agent platform?</li>
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

export default Aimlagenticai;