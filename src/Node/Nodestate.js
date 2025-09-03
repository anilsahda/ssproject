import React from "react";

function Nodestate() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">State CRUD Operation</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing CRUD functionality for the <strong>State</strong> entity in <strong>Node.js</strong> with <strong>MongoDB</strong>.
        </p>
      </header>

      {/* Step 1: MongoDB Schema */}
      <Section title="Model (state.model.js)" color="text-green-600">
        <CodeBlock>
{`const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  countryId: { type: mongoose.Schema.Types.ObjectId, ref: "Country", required: true }
});

module.exports = mongoose.model("State", stateSchema);`}
        </CodeBlock>
      </Section>

      {/* Step 2: Express Routes */}
      <Section title="Routes (state.routes.js)" color="text-red-600">
        <CodeBlock>
{`const express = require("express");
const router = express.Router();
const State = require("../models/state.model");

// Get all states
router.get("/", async (req, res) => {
  const states = await State.find();
  res.json(states);
});

// Get state by ID
router.get("/:id", async (req, res) => {
  const state = await State.findById(req.params.id);
  res.json(state);
});

// Add new state
router.post("/", async (req, res) => {
  const state = new State(req.body);
  await state.save();
  res.json({ message: "State added successfully!" });
});

// Update state
router.put("/:id", async (req, res) => {
  await State.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "State updated successfully!" });
});

// Delete state
router.delete("/:id", async (req, res) => {
  await State.findByIdAndDelete(req.params.id);
  res.json({ message: "State deleted successfully!" });
});

module.exports = router;`}
        </CodeBlock>
      </Section>

      {/* Step 3: Server Setup */}
      <Section title="Server (server.js)" color="text-yellow-600">
        <CodeBlock>
{`const express = require("express");
const mongoose = require("mongoose");
const stateRoutes = require("./routes/state.routes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/demoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"));

app.use("/api/states", stateRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));`}
        </CodeBlock>
      </Section>

      {/* Step 4: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:5000/api/states</code> – Retrieves all states</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:5000/api/states/{"{id}"}</code> – Retrieves a state by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:5000/api/states</code> – Adds a new state</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:5000/api/states/{"{id}"}</code> – Updates an existing state</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:5000/api/states/{"{id}"}</code> – Deletes a state</li>
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

export default Nodestate;
