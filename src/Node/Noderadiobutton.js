function Noderadiobutton() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-green-700">Radio Button Integration in Node.js API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing <strong>Radio Button</strong> for <strong>Gender</strong> field in a <strong>Student</strong> entity using <strong>Node.js + Express + MongoDB</strong>.
        </p>
      </header>

      {/* Step 1: MongoDB Schema */}
      <Section title="MongoDB Schema (student.model.js)" color="text-indigo-600">
        <CodeBlock>
{`const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  mobile: { type: String },
  gender: { type: String, enum: ["Male", "Female"], required: true }, // Radio Button Field
});

module.exports = mongoose.model("Student", studentSchema);`}
        </CodeBlock>
      </Section>

      {/* Step 2: Express Routes */}
      <Section title="Express Routes (student.routes.js)" color="text-green-600">
        <CodeBlock>
{`const express = require("express");
const router = express.Router();
const Student = require("../models/student.model");

// GET all students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// POST add student
router.post("/", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json({ message: "Student added successfully!" });
});

// PUT update student
router.put("/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Student updated successfully!" });
});

// DELETE student
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted successfully!" });
});

module.exports = router;`}
        </CodeBlock>
      </Section>

      {/* Step 3: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:5000/api/students</code> – Retrieves all students</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:5000/api/students</code> – Adds a new student with radio button field</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:5000/api/students/{"{id}"}</code> – Updates gender or other fields</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:5000/api/students/{"{id}"}</code> – Deletes a student</li>
        </ul>
      </Section>

      {/* Step 4: Frontend Radio Button Example */}
      <Section title="React Frontend Radio Button Example" color="text-purple-600">
        <CodeBlock>
{`function StudentForm() {
  const [gender, setGender] = React.useState("Male");

  return (
    <form>
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <label className="ml-4">
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
    </form>
  );
}`}
        </CodeBlock>
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

export default Noderadiobutton;
