import React from "react";

function Aimllanggraph() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">
          LangGraph Practical Examples
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Learn LangGraph from beginner to advanced by building AI workflows, multi-step reasoning, and AI agents with practical examples.
        </p>
      </header>

      {/* Installation */}
      <Section title="Step 1 : Install LangGraph" color="text-green-600">
        <CodeBlock>
{`pip install langgraph

pip install langchain

pip install langchain-openai

pip install langchain-community

pip install python-dotenv

pip install faiss-cpu`}
        </CodeBlock>
      </Section>

      {/* Import */}
      <Section title="Step 2 : Import Libraries" color="text-yellow-600">
        <CodeBlock>
{`from langgraph.graph import StateGraph, END

from langchain_openai import ChatOpenAI

from typing import TypedDict`}
        </CodeBlock>
      </Section>

      {/* Environment */}
      <Section title="Step 3 : Configure Environment Variables" color="text-red-600">
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

      {/* State */}
      <Section title="Step 5 : Create Graph State" color="text-purple-600">
        <CodeBlock>
{`from typing import TypedDict

class GraphState(TypedDict):
    question: str
    answer: str`}
        </CodeBlock>
      </Section>

      {/* Node */}
      <Section title="Step 6 : Create Node" color="text-blue-600">
        <CodeBlock>
{`def chatbot(state):

    response = llm.invoke(state["question"])

    return {
        "answer": response.content
    }`}
        </CodeBlock>
      </Section>

      {/* Graph */}
      <Section title="Step 7 : Create Graph" color="text-green-600">
        <CodeBlock>
{`workflow = StateGraph(GraphState)

workflow.add_node(
    "chatbot",
    chatbot
)`}
        </CodeBlock>
      </Section>

      {/* Edges */}
      <Section title="Step 8 : Add Edges" color="text-red-600">
        <CodeBlock>
{`workflow.set_entry_point("chatbot")

workflow.add_edge(
    "chatbot",
    END
)`}
        </CodeBlock>
      </Section>

      {/* Compile */}
      <Section title="Step 9 : Compile Graph" color="text-yellow-600">
        <CodeBlock>
{`graph = workflow.compile()`}
        </CodeBlock>
      </Section>

      {/* Execute */}
      <Section title="Step 10 : Execute Graph" color="text-purple-600">
        <CodeBlock>
{`result = graph.invoke({
    "question":"Explain AI"
})

print(result["answer"])`}
        </CodeBlock>
      </Section>

      {/* Conditional */}
      <Section title="Step 11 : Conditional Routing" color="text-indigo-600">
        <CodeBlock>
{`workflow.add_conditional_edges(
    "router",
    route_function
)`}
        </CodeBlock>
      </Section>

      {/* Memory */}
      <Section title="Step 12 : Add Memory" color="text-blue-600">
        <CodeBlock>
{`from langgraph.checkpoint.memory import MemorySaver

memory = MemorySaver()`}
        </CodeBlock>
      </Section>

      {/* Multi Agent */}
      <Section title="Step 13 : Multi-Agent Workflow" color="text-green-600">
        <CodeBlock>
{`User

↓

Planner Agent

↓

Research Agent

↓

Writer Agent

↓

Reviewer Agent

↓

Final Response`}
        </CodeBlock>
      </Section>

      {/* RAG */}
      <Section title="Step 14 : RAG + LangGraph Workflow" color="text-red-600">
        <CodeBlock>
{`User Question

↓

Retriever

↓

Vector Database

↓

LLM

↓

Generate Answer

↓

Return Response`}
        </CodeBlock>
      </Section>

      {/* Agent */}
      <Section title="Step 15 : Tool Calling Agent" color="text-yellow-600">
        <CodeBlock>
{`Agent

↓

Receive User Request

↓

Select Tool

↓

Execute Tool

↓

LLM

↓

Final Response`}
        </CodeBlock>
      </Section>

      {/* Human */}
      <Section title="Step 16 : Human in the Loop" color="text-purple-600">
        <CodeBlock>
{`Workflow

↓

AI Decision

↓

Human Approval

↓

Continue Workflow`}
        </CodeBlock>
      </Section>

      {/* Streaming */}
      <Section title="Step 17 : Streaming Responses" color="text-indigo-600">
        <CodeBlock>
{`for event in graph.stream(
    {"question":"Explain ML"}
):
    print(event)`}
        </CodeBlock>
      </Section>

      {/* Diagram */}
      <Section title="Step 18 : LangGraph Flow" color="text-blue-600">
        <CodeBlock>
{`User

↓

Prompt

↓

Router

↓

Planner

↓

Research

↓

Reasoning

↓

Tool Calling

↓

LLM

↓

Review

↓

Answer`}
        </CodeBlock>
      </Section>

      {/* Practice */}
      <Section title="Practice Exercises" color="text-green-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Install LangGraph.</li>
          <li>Create a graph state.</li>
          <li>Create multiple nodes.</li>
          <li>Add graph edges.</li>
          <li>Compile a graph.</li>
          <li>Execute a graph.</li>
          <li>Add conditional routing.</li>
          <li>Implement memory.</li>
          <li>Create a multi-agent workflow.</li>
          <li>Integrate RAG with LangGraph.</li>
        </ul>
      </Section>

      {/* Mini Project */}
      <Section title="Mini Project : AI Research Assistant" color="text-red-600">
        <CodeBlock>
{`Tasks

1. Accept User Question.

2. Route Request.

3. Search Knowledge Base.

4. Retrieve Documents.

5. Generate AI Response.

6. Review Output.

7. Save Conversation.

8. Build FastAPI API.

9. Connect React Frontend.

10. Deploy Application.`}
        </CodeBlock>
      </Section>

      {/* Interview */}
      <Section title="Interview Questions" color="text-indigo-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>What is LangGraph?</li>
          <li>How is LangGraph different from LangChain?</li>
          <li>What is a StateGraph?</li>
          <li>What is a Node?</li>
          <li>What are Graph Edges?</li>
          <li>What is Conditional Routing?</li>
          <li>What is Human-in-the-Loop?</li>
          <li>What is Multi-Agent Architecture?</li>
          <li>How does LangGraph support RAG?</li>
          <li>When should you use LangGraph instead of LangChain?</li>
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

export default Aimllanggraph;