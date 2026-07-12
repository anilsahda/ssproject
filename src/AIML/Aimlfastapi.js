import React from "react";

function Aimlfastapi() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">
          FastAPI Practical Examples
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Learn FastAPI from beginner to advanced with practical examples for building REST APIs, AI APIs, and Microservices.
        </p>
      </header>

      {/* Installation */}
      <Section title="Step 1 : Install FastAPI" color="text-green-600">
        <CodeBlock>
{`pip install fastapi

pip install uvicorn

pip install sqlalchemy

pip install psycopg2-binary

pip install python-dotenv

pip install pydantic

pip install python-multipart

pip install passlib[bcrypt]

pip install python-jose`}
        </CodeBlock>
      </Section>

      {/* Create Project */}
      <Section title="Step 2 : Create Project Structure" color="text-yellow-600">
        <CodeBlock>
{`FastAPIProject/

│── app/
│   ├── routers/
│   ├── models/
│   ├── schemas/
│   ├── services/
│   ├── repository/
│   ├── database/
│   ├── middleware/
│   ├── utils/
│   ├── config/
│   ├── main.py
│
│── uploads/
│── tests/
│── requirements.txt
│── .env`}
        </CodeBlock>
      </Section>

      {/* Hello World */}
      <Section title="Step 3 : Create First API" color="text-red-600">
        <CodeBlock>
{`from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message":"Welcome to FastAPI"}`}
        </CodeBlock>
      </Section>

      {/* Run */}
      <Section title="Step 4 : Run Application" color="text-indigo-600">
        <CodeBlock>
{`uvicorn app.main:app --reload`}
        </CodeBlock>
      </Section>

      {/* Swagger */}
      <Section title="Step 5 : Swagger UI" color="text-purple-600">
        <CodeBlock>
{`Swagger UI

http://localhost:8000/docs

Redoc

http://localhost:8000/redoc`}
        </CodeBlock>
      </Section>

      {/* Request */}
      <Section title="Step 6 : Request Body Using Pydantic" color="text-blue-600">
        <CodeBlock>
{`from pydantic import BaseModel

class Employee(BaseModel):
    name:str
    email:str
    salary:float`}
        </CodeBlock>
      </Section>

      {/* POST */}
      <Section title="Step 7 : POST API" color="text-green-600">
        <CodeBlock>
{`@app.post("/employees")
def create_employee(employee:Employee):
    return employee`}
        </CodeBlock>
      </Section>

      {/* GET */}
      <Section title="Step 8 : GET API" color="text-red-600">
        <CodeBlock>
{`@app.get("/employees")
def get_employees():
    return []`}
        </CodeBlock>
      </Section>

      {/* Path */}
      <Section title="Step 9 : Path Parameters" color="text-yellow-600">
        <CodeBlock>
{`@app.get("/employees/{id}")
def get_employee(id:int):
    return {"id":id}`}
        </CodeBlock>
      </Section>

      {/* Query */}
      <Section title="Step 10 : Query Parameters" color="text-purple-600">
        <CodeBlock>
{`@app.get("/search")
def search(name:str):
    return {"name":name}`}
        </CodeBlock>
      </Section>

      {/* Database */}
      <Section title="Step 11 : SQLAlchemy Integration" color="text-indigo-600">
        <CodeBlock>
{`from sqlalchemy import create_engine

DATABASE_URL="postgresql://postgres:password@localhost:5432/fastapidb"

engine=create_engine(DATABASE_URL)`}
        </CodeBlock>
      </Section>

      {/* JWT */}
      <Section title="Step 12 : JWT Authentication" color="text-blue-600">
        <CodeBlock>
{`Login

↓

Generate JWT Token

↓

Validate Token

↓

Authorize User

↓

Access Protected API`}
        </CodeBlock>
      </Section>

      {/* Upload */}
      <Section title="Step 13 : File Upload" color="text-green-600">
        <CodeBlock>
{`from fastapi import UploadFile, File

@app.post("/upload")
def upload(file:UploadFile=File(...)):
    return {"filename":file.filename}`}
        </CodeBlock>
      </Section>

      {/* Middleware */}
      <Section title="Step 14 : Middleware" color="text-red-600">
        <CodeBlock>
{`from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)`}
        </CodeBlock>
      </Section>

      {/* AI API */}
      <Section title="Step 15 : AI API Example" color="text-yellow-600">
        <CodeBlock>
{`from langchain_openai import ChatOpenAI

@app.post("/chat")
def chat(question:str):

    llm=ChatOpenAI()

    response=llm.invoke(question)

    return {
        "answer":response.content
    }`}
        </CodeBlock>
      </Section>

      {/* Architecture */}
      <Section title="Step 16 : Enterprise Architecture" color="text-purple-600">
        <CodeBlock>
{`React

↓

FastAPI

↓

Service Layer

↓

Repository Layer

↓

PostgreSQL

↓

Redis

↓

Vector Database`}
        </CodeBlock>
      </Section>

      {/* Deployment */}
      <Section title="Step 17 : Docker Deployment" color="text-indigo-600">
        <CodeBlock>
{`docker build -t fastapi-app .

docker run -p 8000:8000 fastapi-app`}
        </CodeBlock>
      </Section>

      {/* Practice */}
      <Section title="Practice Exercises" color="text-blue-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Install FastAPI.</li>
          <li>Create Hello World API.</li>
          <li>Create GET API.</li>
          <li>Create POST API.</li>
          <li>Create PUT API.</li>
          <li>Create DELETE API.</li>
          <li>Use Path Parameters.</li>
          <li>Use Query Parameters.</li>
          <li>Connect PostgreSQL.</li>
          <li>Implement CRUD Operations.</li>
          <li>Implement JWT Authentication.</li>
          <li>Upload Files.</li>
          <li>Enable CORS.</li>
          <li>Create AI Chat API.</li>
          <li>Test APIs using Swagger.</li>
        </ul>
      </Section>

      {/* Mini Project */}
      <Section title="Mini Project : AI Chat API" color="text-green-600">
        <CodeBlock>
{`Tasks

1. Build Employee CRUD API.

2. Connect PostgreSQL.

3. Implement JWT Authentication.

4. Upload Documents.

5. Integrate LangChain.

6. Integrate OpenAI.

7. Store Chat History.

8. Build AI Chat Endpoint.

9. Connect React Frontend.

10. Deploy Using Docker.`}
        </CodeBlock>
      </Section>

      {/* Interview */}
      <Section title="Interview Questions" color="text-red-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>What is FastAPI?</li>
          <li>Why is FastAPI faster than Flask?</li>
          <li>What is ASGI?</li>
          <li>What is Pydantic?</li>
          <li>What is Dependency Injection?</li>
          <li>How does FastAPI generate Swagger documentation?</li>
          <li>How do you implement JWT Authentication?</li>
          <li>How do you upload files in FastAPI?</li>
          <li>How do you connect PostgreSQL with SQLAlchemy?</li>
          <li>Why is FastAPI preferred for AI and ML applications?</li>
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

export default Aimlfastapi;