function Nodeimageupload() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-green-700">Image Upload in Node.js + MongoDB API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing CRUD functionality for the <strong>Customer</strong> entity using <code>Express</code>, <code>Mongoose</code>, and <code>Multer</code>.
        </p>
      </header>

      {/* Step 1: MongoDB Schema */}
      <Section title="Model (Customer.js)" color="text-indigo-600">
        <CodeBlock>
{`const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  mobile: { type: String },
  image: { type: String }
});

module.exports = mongoose.model("Customer", CustomerSchema);`}
        </CodeBlock>
      </Section>

      {/* Step 2: Multer Setup */}
      <Section title="Image Upload Setup (multer)" color="text-green-600">
        <CodeBlock>
{`const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });
module.exports = upload;`}
        </CodeBlock>
      </Section>

      {/* Step 3: Express Routes */}
      <Section title="Controller (customerRoutes.js)" color="text-yellow-600">
        <CodeBlock>
{`const express = require("express");
const Customer = require("../models/Customer");
const upload = require("../middleware/upload");
const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

// Get by Id
router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  res.json(customer);
});

// Add
router.post("/", upload.single("image"), async (req, res) => {
  const newCust = new Customer({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    image: req.file ? req.file.filename : null
  });
  await newCust.save();
  res.json(newCust);
});

// Update
router.put("/:id", upload.single("image"), async (req, res) => {
  const cust = await Customer.findById(req.params.id);
  cust.name = req.body.name;
  cust.email = req.body.email;
  cust.mobile = req.body.mobile;
  if (req.file) cust.image = req.file.filename;
  await cust.save();
  res.json(cust);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;`}
        </CodeBlock>
      </Section>

      {/* Step 4: Server.js */}
      <Section title="Server Setup (server.js)" color="text-red-600">
        <CodeBlock>
{`const express = require("express");
const mongoose = require("mongoose");
const customerRoutes = require("./routes/customerRoutes");

const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve uploaded images
app.use("/api/customers", customerRoutes);

mongoose.connect("mongodb://localhost:27017/CustomerDb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.listen(5000, () => console.log("Server running on port 5000"));`}
        </CodeBlock>
      </Section>

      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:7070/api/customers</code> – Retrieves all customers</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:7070/api/customers/{"{id}"}</code> – Retrieves a customer by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:7070/api/customers</code> – Adds a new customer (form-data with image)</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:7070/api/customers/{"{id}"}</code> – Updates an existing customer</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:7070/api/customers/{"{id}"}</code> – Deletes a customer</li>
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

export default Nodeimageupload;
