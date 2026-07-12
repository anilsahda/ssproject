import React from "react";

function Aimlprojectsetup() {
  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-indigo-700 border-b-4 border-indigo-300 pb-3">
        AI / ML Project Setup
      </h2>

      <SectionBlock title="Prerequisites" color="indigo">
        <CodeBlock>
          <ul className="list-disc ml-6 text-gray-800">
            <li>Python 3.12+</li>
            <li>Virtual Environment (venv)</li>
            <li>VS Code / PyCharm</li>
            <li>Git</li>
            <li>PostgreSQL / SQLite</li>
          </ul>
        </CodeBlock>
      </SectionBlock>

<SectionBlock title="1. Steps to Create AI / ML Project" color="green">
  <CodeBlock>
{`# Create Project Directory
mkdir AIMLProject

# Navigate to Project Directory
cd AIMLProject

# Create Virtual Environment
python -m venv venv

# Activate Virtual Environment

# Windows
venv\\Scripts\\activate

# Linux / macOS
source venv/bin/activate

# Upgrade pip
python -m pip install --upgrade pip

# Create requirements.txt
type nul > requirements.txt      # Windows
touch requirements.txt           # Linux / macOS

# Open Project in Visual Studio Code
code .`}
  </CodeBlock>
</SectionBlock>

<SectionBlock title="2. Install Core Packages" color="yellow">
  <CodeBlock>
{`# Data Processing
pip install numpy
pip install pandas

# Data Visualization
pip install matplotlib
pip install seaborn

# Machine Learning
pip install scikit-learn

# Environment Variables
pip install python-dotenv

# Jupyter Notebook
pip install notebook
pip install jupyter
pip install ipykernel

# Excel Support
pip install openpyxl`}
  </CodeBlock>
</SectionBlock>
      <SectionBlock title="3. Install AI / Deep Learning Packages" color="purple">
        <CodeBlock>
{`pip install torch torchvision torchaudio
pip install tensorflow
pip install transformers
pip install sentence-transformers
pip install datasets
pip install evaluate`}
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="4. Install LLM Packages" color="red">
        <CodeBlock>
{`pip install openai
pip install langchain
pip install langgraph
pip install llama-index
pip install tiktoken`}
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="5. Install FastAPI Packages" color="purple">
        <CodeBlock>
{`pip install fastapi
pip install uvicorn
pip install sqlalchemy
pip install alembic
pip install pydantic
pip install python-multipart`}
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="6. AI / ML Project Structure" color="blue">
        <CodeBlock>
{`AIProject
│
├── app
│   ├── api
│   ├── models
│   ├── services
│   ├── repository
│   ├── database
│   ├── schemas
│   ├── utils
│   └── main.py
│
├── datasets
├── notebooks
├── uploads
├── trained_models
├── tests
├── logs
├── .env
├── requirements.txt
└── README.md`}
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="7. Create First AI Program" color="green">
        <CodeBlock>
{`print("Welcome to AI / ML Project")`}
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="8. Environment Configuration" color="purple">
        <CodeBlock>
{`# .env

OPENAI_API_KEY=your_api_key

DATABASE_URL=postgresql://postgres:password@localhost:5432/aimldb`}
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="9. Run the AI / ML Project" color="green">
        <CodeBlock>
{`python main.py

# OR

uvicorn app.main:app --reload`}
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="Testing Project" color="blue">
        <CodeBlock>
          <ul className="list-disc ml-6 text-gray-800">
            <li>Run Python Program</li>
            <li>Verify Installed Packages</li>
            <li>Verify FastAPI Swagger</li>
            <li>Verify Database Connection</li>
          </ul>
        </CodeBlock>
      </SectionBlock>

      <section>
        <b>✅ Summary</b>

        <ul className="list-disc ml-6 mt-2 text-gray-800">
          <li>AI / ML Project Created</li>
          <li>Virtual Environment Configured</li>
          <li>Core Packages Installed</li>
          <li>Deep Learning Packages Installed</li>
          <li>LLM Packages Installed</li>
          <li>FastAPI Configured</li>
          <li>Project Structure Ready</li>
          <li>Ready for AI / ML Development</li>
        </ul>
      </section>
    </div>
  );
}

function SectionBlock({ title, color, children }) {
  const textColor = {
    indigo: "text-indigo-700",
    green: "text-green-700",
    yellow: "text-yellow-700",
    red: "text-red-700",
    purple: "text-purple-700",
    blue: "text-blue-700",
  }[color] || "text-gray-700";

  return (
    <section>
      <div className="flex items-center mb-3">
        <strong className={`${textColor} text-lg`}>
          {title}
        </strong>
      </div>
      {children}
    </section>
  );
}

function CodeBlock({ children }) {
  return (
    <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
      <code>{children}</code>
    </pre>
  );
}

export default Aimlprojectsetup;