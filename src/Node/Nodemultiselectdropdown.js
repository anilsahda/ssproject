import React from "react";

function Nodemultiselectdropdown() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Multiselect Dropdown Integration</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing CRUD functionality for the <strong>Employee</strong> entity in{" "}
          <strong>Node.js + Express + MongoDB (Mongoose)</strong>.
        </p>
      </header>

      {/* Step 1: Install Packages */}
      <Section title="Install Dependencies" color="text-indigo-600">
        <CodeBlock>
{`npm install express mongoose cors body-parser`}
        </CodeBlock>
      </Section>

      {/* Step 2: Employee Model */}
      <Section title="Model (Employee.js)" color="text-green-600">
        <CodeBlock>
{`const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  mobile: String,
  countryId: mongoose.Schema.Types.ObjectId,
  stateId: mongoose.Schema.Types.ObjectId,
  districtId: mongoose.Schema.Types.ObjectId,
  genderId: mongoose.Schema.Types.ObjectId,
  languages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Language" }]
});

module.exports = mongoose.model("Employee", EmployeeSchema);`}
        </CodeBlock>
      </Section>

      {/* Step 3: Language Model */}
      <Section title="Model (Language.js)" color="text-green-600">
        <CodeBlock>
{`const mongoose = require("mongoose");

const LanguageSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model("Language", LanguageSchema);`}
        </CodeBlock>
      </Section>

      {/* Step 4: Express Routes */}
      <Section title="Controller (employeeRoutes.js)" color="text-red-600">
        <CodeBlock>
{`const express = require("express");
const Employee = require("../models/Employee");
const router = express.Router();

// GET all employees
router.get("/", async (req, res) => {
  const employees = await Employee.find().populate("languages");
  res.json(employees);
});

// GET employee by ID
router.get("/:id", async (req, res) => {
  const employee = await Employee.findById(req.params.id).populate("languages");
  res.json(employee);
});

// POST add employee
router.post("/", async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.json(employee);
});

// PUT update employee
router.put("/:id", async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(employee);
});

// DELETE employee
router.delete("/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee deleted successfully" });
});

module.exports = router;`}
        </CodeBlock>
      </Section>

      {/* Step 5: API Server */}
      <Section title="Server (server.js)" color="text-yellow-600">
        <CodeBlock>
{`const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/companydb");

app.use("/api/employees", employeeRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));`}
        </CodeBlock>
      </Section>

      {/* Step 6: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:5000/api/employees</code> – Retrieves all employees</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:5000/api/employees/{"{id}"}</code> – Retrieves an employee by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:5000/api/employees</code> – Adds a new employee</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:5000/api/employees/{"{id}"}</code> – Updates an existing employee</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:5000/api/employees/{"{id}"}</code> – Deletes an employee</li>
        </ul>
      </Section>
    </div>
  );
}

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

function CodeBlock({ children }) {
  return (
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">
      <code>{children}</code>
    </pre>
  );
}

export default Nodemultiselectdropdown;
