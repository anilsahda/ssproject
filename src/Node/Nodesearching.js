function Nodesearching() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Search Functionality in Node.js API (MongoDB)</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implement search functionality for entities like <strong>Student</strong> or <strong>Employee</strong> 
          using <strong>Node.js + Express + MongoDB</strong> backend and a React frontend.
        </p>
      </header>

      <Section title="Backend - Express Route with MongoDB" color="text-indigo-600">
        <CodeBlock>
{`// routes/studentRoutes.js
const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Search endpoint
router.get("/search", async (req, res) => {
  try {
    const query = req.query.q || "";
    const students = await Student.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { email: { $regex: query, $options: "i" } }
      ]
    });
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;`}  
        </CodeBlock>
      </Section>

      <Section title="Mongoose Model" color="text-green-600">
        <CodeBlock>
{`// models/Student.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String
});

module.exports = mongoose.model("Student", studentSchema);`}
        </CodeBlock>
      </Section>

      <Section title="API Endpoint Example" color="text-yellow-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>
            <code className="bg-gray-100 px-1 rounded">GET http://localhost:5000/api/students/search?q=John</code> – 
            Retrieves students matching <strong>John</strong> in name or email.
          </li>
        </ul>
      </Section>

      <Section title="Frontend - React Component" color="text-red-600">
        <CodeBlock>
{`import React, { useState } from "react";
import axios from "axios";

function StudentSearch() {
  const [query, setQuery] = useState("");
  const [students, setStudents] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(\`http://localhost:5000/api/students/search?q=\${query}\`);
    setStudents(response.data);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border px-2 py-1 rounded w-64"
          placeholder="Search by name or email"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">
          Search
        </button>
      </form>

      <table className="border w-full text-left text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">Id</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Mobile</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td className="border px-2 py-1">{student._id}</td>
              <td className="border px-2 py-1">{student.name}</td>
              <td className="border px-2 py-1">{student.email}</td>
              <td className="border px-2 py-1">{student.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentSearch;`}
        </CodeBlock>
      </Section>

      <Section title="Summary" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Backend uses Express with MongoDB to filter results using <code>$regex</code>.</li>
          <li>Frontend React component calls the API endpoint and displays results in a table.</li>
          <li>Can be applied to any entity (Student, Employee, Customer, etc.).</li>
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

export default Nodesearching;
