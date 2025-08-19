function Nodeprojectsetup() {
  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-green-700 border-b-4 border-green-300 pb-3">
        Node.js Express API Project Setup
      </h2>

      {/* Prerequisites */}
      <SectionBlock title="Prerequisites" color="indigo">
        <CodeBlock>
          <ul className="list-disc ml-6 text-gray-800">
            <li>Install <b>Node.js</b> (v18 or later)</li>
            <li>Install <b>npm</b> (comes with Node.js)</li>
            <li>Install <b>MongoDB</b> / MySQL / PostgreSQL</li>
            <li>Code Editor (VS Code recommended)</li>
          </ul>
        </CodeBlock>
      </SectionBlock>

      {/* Project Creation */}
      <SectionBlock title="1. Create Node.js API Project" color="green">
        <CodeBlock>
{`# Create a new project
mkdir my-node-api && cd my-node-api

# Initialize package.json
npm init -y

# Install dependencies
npm install express cors mongoose dotenv
npm install --save-dev nodemon`}
        </CodeBlock>
      </SectionBlock>

      {/* Folder Structure */}
      <SectionBlock title="2. Folder Structure" color="yellow">
        <CodeBlock>
{`my-node-api/
 ┣ 📂config/        → database connection
 ┣ 📂models/        → mongoose models
 ┣ 📂routes/        → API routes
 ┣ 📂controllers/   → route handlers
 ┣ 📜server.js      → main entry point`}
        </CodeBlock>
      </SectionBlock>

      {/* server.js */}
      <SectionBlock title="3. server.js" color="red">
        <CodeBlock>
{`import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Routes
import customerRoutes from "./routes/customerRoutes.js";
app.use("/api/customers", customerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));`}
        </CodeBlock>
      </SectionBlock>

      {/* MongoDB Config */}
      <SectionBlock title="4. config/db.js" color="purple">
        <CodeBlock>
{`import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;`}
        </CodeBlock>
      </SectionBlock>

      {/* .env */}
      <SectionBlock title="5. .env file" color="blue">
        <CodeBlock>
{`PORT=5000
MONGO_URI=mongodb://localhost:27017/mydb`}
        </CodeBlock>
      </SectionBlock>

      {/* Run project */}
      <SectionBlock title="6. Run Project" color="green">
        <CodeBlock>
{`# Development mode
npx nodemon server.js

# Production mode
node server.js`}
        </CodeBlock>
      </SectionBlock>
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
        <strong className={`${textColor} text-lg`}>{title}</strong>
      </div>
      {children}
    </section>
  );
}

function CodeBlock({ children }) {
  return (
    <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded-lg overflow-x-auto">
      {children}
    </pre>
  );
}

export default Nodeprojectsetup;
