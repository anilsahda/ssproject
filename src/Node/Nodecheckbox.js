function Nodecheckbox() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-green-700">Checkbox Integration in Node.js + Express API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing CRUD functionality for the <strong>Employee</strong> entity in <strong>Node.js</strong> with MongoDB (Mongoose).
        </p>
      </header>

      <Section title="Employee Schema (employeeModel.js)" color="text-indigo-600">
        <CodeBlock>
{`const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String },
  Mobile: { type: String },
  CountryId: { type: String, required: true },
  StateId: { type: String, required: true },
  DistrictId: { type: String, required: true },
  GenderId: { type: String, required: true },
  Languages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Language" }]
});

module.exports = mongoose.model("Employee", employeeSchema);`}
        </CodeBlock>
      </Section>

      <Section title="Language Schema (languageModel.js)" color="text-indigo-600">
        <CodeBlock>
{`const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  Name: { type: String, required: true }
});

module.exports = mongoose.model("Language", languageSchema);`}
        </CodeBlock>
      </Section>

      <Section title="Controller (employeeController.js)" color="text-green-600">
        <CodeBlock>
{`const Employee = require("../models/employeeModel");

// Get all employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate("Languages");
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate("Languages");
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add employee
exports.addEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.json({ message: "Employee added successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update employee
exports.updateEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndUpdate(req.body.Id, req.body);
    res.json({ message: "Employee updated successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete employee
exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};`}
        </CodeBlock>
      </Section>

      <Section title="Routes (employeeRoutes.js)" color="text-red-600">
        <CodeBlock>
{`const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.get("/", employeeController.getEmployees);
router.get("/:id", employeeController.getEmployeeById);
router.post("/", employeeController.addEmployee);
router.put("/", employeeController.updateEmployee);
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;`}
        </CodeBlock>
      </Section>

      <Section title="Database Connection (db.js)" color="text-purple-600">
        <CodeBlock>
{`const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/EmployeeDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection failed", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;`}
        </CodeBlock>
      </Section>

      <Section title="Server Setup (server.js)" color="text-blue-600">
        <CodeBlock>
{`const express = require("express");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
app.use(express.json());

// Connect to DB
connectDB();

// API Routes
app.use("/api/employees", employeeRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));`}
        </CodeBlock>
      </Section>

      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:7070/api/employees</code> – Retrieves all employees</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:7070/api/employees/{"{id}"}</code> – Retrieves an employee by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:7070/api/employees</code> – Adds a new employee</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:7070/api/employees</code> – Updates an existing employee</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:7070/api/employees/{"{id}"}</code> – Deletes an employee</li>
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
      {children}
    </pre>
  );
}

export default Nodecheckbox;
