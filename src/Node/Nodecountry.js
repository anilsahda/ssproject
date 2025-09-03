import React from "react";

function Nodecountry() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Country CRUD Operation</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing CRUD functionality for the <strong>Country</strong> entity in <strong>Node.js (Express) with MongoDB</strong>.
        </p>
      </header>

      {/* Step 1: MongoDB Schema */}
      <Section title="Schema (models/Country.js)" color="text-indigo-600">
        <CodeBlock>
{`const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Country", CountrySchema);`}
        </CodeBlock>
      </Section>

      {/* Step 2: Express Routes */}
      <Section title="Controller & Routes (routes/countryRoutes.js)" color="text-green-600">
        <CodeBlock>
{`const express = require("express");
const router = express.Router();
const Country = require("../models/Country");

// Get all countries
router.get("/", async (req, res) => {
  const countries = await Country.find();
  res.json(countries);
});

// Get country by ID
router.get("/:id", async (req, res) => {
  const country = await Country.findById(req.params.id);
  res.json(country);
});

// Add new country
router.post("/", async (req, res) => {
  const country = new Country({ name: req.body.name });
  await country.save();
  res.json({ message: "Country added successfully!" });
});

// Update country
router.put("/:id", async (req, res) => {
  await Country.findByIdAndUpdate(req.params.id, { name: req.body.name });
  res.json({ message: "Country updated successfully!" });
});

// Delete country
router.delete("/:id", async (req, res) => {
  await Country.findByIdAndDelete(req.params.id);
  res.json({ message: "Country deleted successfully!" });
});

module.exports = router;`}
        </CodeBlock>
      </Section>

      {/* Step 3: Server Setup */}
      <Section title="Server (server.js)" color="text-yellow-600">
        <CodeBlock>
{`const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const countryRoutes = require("./routes/countryRoutes");
app.use("/api/countries", countryRoutes);

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));`}
        </CodeBlock>
      </Section>

      {/* Step 4: Example API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:7070/api/countries</code> – Retrieves all countries</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:7070/api/countries/{"{id}"}</code> – Retrieves a country by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:7070/api/countries</code> – Adds a new country</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:7070/api/countries/{"{id}"}</code> – Updates a country</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:7070/api/countries/{"{id}"}</code> – Deletes a country</li>
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

export default Nodecountry;
