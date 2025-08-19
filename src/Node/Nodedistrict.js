import React from "react";

function Nodedistrict() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">District CRUD Operation</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing CRUD functionality for the <strong>District</strong> entity in <strong>Node.js</strong> with <strong>MongoDB</strong>.
        </p>
      </header>

      {/* Step 1: MongoDB Schema */}
      <Section title="Schema (models/District.js)" color="text-indigo-600">
        <CodeBlock>
{`const mongoose = require("mongoose");

const DistrictSchema = new mongoose.Schema({
  name: { type: String, required: true },
  countryId: { type: mongoose.Schema.Types.ObjectId, ref: "Country", required: true },
  stateId: { type: mongoose.Schema.Types.ObjectId, ref: "State", required: true }
});

module.exports = mongoose.model("District", DistrictSchema);`}
        </CodeBlock>
      </Section>

      {/* Step 2: Express Router */}
      <Section title="Routes (routes/districtRoutes.js)" color="text-green-600">
        <CodeBlock>
{`const express = require("express");
const router = express.Router();
const District = require("../models/District");

// Get all
router.get("/", async (req, res) => {
  const districts = await District.find();
  res.json(districts);
});

// Get by Id
router.get("/:id", async (req, res) => {
  const district = await District.findById(req.params.id);
  res.json(district);
});

// Create
router.post("/", async (req, res) => {
  const district = new District(req.body);
  await district.save();
  res.json({ message: "District added successfully!" });
});

// Update
router.put("/:id", async (req, res) => {
  await District.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "District updated successfully!" });
});

// Delete
router.delete("/:id", async (req, res) => {
  await District.findByIdAndDelete(req.params.id);
  res.json({ message: "District deleted successfully!" });
});

module.exports = router;`}
        </CodeBlock>
      </Section>

      {/* Step 3: Server Setup */}
      <Section title="Server (server.js)" color="text-yellow-600">
        <CodeBlock>
{`const express = require("express");
const mongoose = require("mongoose");
const districtRoutes = require("./routes/districtRoutes");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/districts", districtRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));`}
        </CodeBlock>
      </Section>

      {/* Step 4: Example API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:7070/api/districts</code> – Retrieves all districts</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:7070/api/districts/{"{id}"}</code> – Retrieves a district by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:7070/api/districts</code> – Adds a new district</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:7070/api/districts/{"{id}"}</code> – Updates an existing district</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:7070/api/districts/{"{id}"}</code> – Deletes a district</li>
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

export default Nodedistrict;
