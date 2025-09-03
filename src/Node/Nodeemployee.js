function Nodeemployee() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-yellow-700">Employee CRUD Operation using Interface</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing CRUD functionality for the <strong>Employee</strong> entity using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>Mongoose (MongoDB)</strong>.
        </p>
      </header>

      {/* Step 1: MongoDB Collection */}
      <Section title="MongoDB Collection" color="text-indigo-600">
        <CodeBlock>
{`use companydb;
db.createCollection("employees");`}
        </CodeBlock>
      </Section>

      {/* Step 2: Model */}
      <Section title="Model (employee.model.js)" color="text-green-600">
        <CodeBlock>
{`const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);`}
        </CodeBlock>
      </Section>

      {/* Step 3: Repository / Service */}
      <Section title="Service (employee.service.js)" color="text-purple-600">
        <CodeBlock>
{`const Employee = require('./employee.model');

async function getAllEmployees() {
  return await Employee.find();
}

async function getEmployeeById(id) {
  return await Employee.findById(id);
}

async function addEmployee(data) {
  const employee = new Employee(data);
  return await employee.save();
}

async function updateEmployee(id, data) {
  return await Employee.findByIdAndUpdate(id, data, { new: true });
}

async function deleteEmployee(id) {
  return await Employee.findByIdAndDelete(id);
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee
};`}
        </CodeBlock>
      </Section>

      {/* Step 4: Controller */}
      <Section title="Controller (employee.controller.js)" color="text-red-600">
        <CodeBlock>
{`const service = require('./employee.service');

async function getAll(req, res) {
  const employees = await service.getAllEmployees();
  res.json(employees);
}

async function getById(req, res) {
  const employee = await service.getEmployeeById(req.params.id);
  if (!employee) return res.status(404).send("Employee not found");
  res.json(employee);
}

async function create(req, res) {
  const employee = await service.addEmployee(req.body);
  res.status(201).json(employee);
}

async function update(req, res) {
  const employee = await service.updateEmployee(req.params.id, req.body);
  if (!employee) return res.status(404).send("Employee not found");
  res.json(employee);
}

async function remove(req, res) {
  const employee = await service.deleteEmployee(req.params.id);
  if (!employee) return res.status(404).send("Employee not found");
  res.sendStatus(204);
}

module.exports = { getAll, getById, create, update, remove };`}
        </CodeBlock>
      </Section>

      {/* Step 5: Routes */}
      <Section title="Routes (employee.routes.js)" color="text-yellow-600">
        <CodeBlock>
{`const express = require('express');
const router = express.Router();
const controller = require('./employee.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;`}
        </CodeBlock>
      </Section>

      {/* Step 6: Server Setup */}
      <Section title="Server (server.js)" color="text-green-600">
        <CodeBlock>
{`const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./employee.routes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/companydb')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use('/api/employees', employeeRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));`}
        </CodeBlock>
      </Section>

      {/* Step 7: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:3000/api/employees</code> – Retrieves all employees</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:3000/api/employees/{"{id}"}</code> – Retrieves an employee by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:3000/api/employees</code> – Adds a new employee</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:3000/api/employees/{"{id}"}</code> – Updates an existing employee</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:3000/api/employees/{"{id}"}</code> – Deletes an employee</li>
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

export default Nodeemployee;
