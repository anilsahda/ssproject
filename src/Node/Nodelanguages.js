function Nodelanguages() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Language CRUD Operation</h1>
        <p className="text-gray-500 text-xs mt-1">
          A step-by-step guide to implementing CRUD functionality for the <strong>Language</strong> entity in <strong>Node.js</strong> with <strong>MongoDB</strong>.
        </p>
      </header>

      {/* Step 1: Install Dependencies */}
      <Section title="Install Dependencies" color="text-indigo-600">
        <CodeBlock>
{`npm init -y
npm install express mongoose cors nodemon`}
        </CodeBlock>
      </Section>

      {/* Step 2: MongoDB Model */}
      <Section title="Model (language.model.js)" color="text-green-600">
        <CodeBlock>
{`const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model("Language", languageSchema);`}
        </CodeBlock>
      </Section>

      {/* Step 3: Express Routes */}
      <Section title="Routes (language.routes.js)" color="text-yellow-600">
        <CodeBlock>
{`const express = require("express");
const router = express.Router();
const Language = require("./language.model");

// GET all languages
router.get("/", async (req, res) => {
  const languages = await Language.find();
  res.json(languages);
});

// GET by ID
router.get("/:id", async (req, res) => {
  const language = await Language.findById(req.params.id);
  res.json(language);
});

// POST create
router.post("/", async (req, res) => {
  const language = new Language(req.body);
  await language.save();
  res.json({ message: "Language added successfully!" });
});

// PUT update
router.put("/:id", async (req, res) => {
  await Language.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Language updated successfully!" });
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Language.findByIdAndDelete(req.params.id);
  res.json({ message: "Language deleted successfully!" });
});

module.exports = router;`}
        </CodeBlock>
      </Section>

      {/* Step 4: Main Server File */}
      <Section title="Server (server.js)" color="text-red-600">
        <CodeBlock>
{`const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const languageRoutes = require("./language.routes");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/languageDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
app.use("/api/languages", languageRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));`}
        </CodeBlock>
      </Section>

      {/* Step 5: Example Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:7070/api/languages</code> – Retrieves all languages</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:7070/api/languages/{"{id}"}</code> – Retrieves a language by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:7070/api/languages</code> – Adds a new language</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:7070/api/languages/{"{id}"}</code> – Updates an existing language</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:7070/api/languages/{"{id}"}</code> – Deletes a language</li>
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
        <strong className={`${color}`}>{title}</strong>
      </div>
      {children}
    </section>
  );
}

/* Reusable Code Block Component */
function CodeBlock({ children }) {
  return (
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">
      <code>{children}</code>
    </pre>
  );
}

export default Nodelanguages;
