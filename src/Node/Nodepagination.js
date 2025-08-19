function Nodepagination() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Pagination in Node.js + MongoDB</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implement pagination for entities like <strong>Student</strong> using <strong>Express.js</strong> and <strong>MongoDB (Mongoose)</strong>.
        </p>
      </header>

      {/* Backend */}
      <Section title="Backend - Express API (students.js)" color="text-indigo-600">
        <CodeBlock>
{`const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// GET paginated students
router.get("/paginated", async (req, res) => {
  try {
    const pageNumber = parseInt(req.query.pageNumber) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const totalRecords = await Student.countDocuments();
    const students = await Student.find()
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);

    res.json({
      totalRecords,
      pageNumber,
      pageSize,
      data: students,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;`}
        </CodeBlock>
      </Section>

      <Section title="Mongoose Model (Student.js)" color="text-green-600">
        <CodeBlock>
{`const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String
});

module.exports = mongoose.model("Student", studentSchema);`}
        </CodeBlock>
      </Section>

      <Section title="Frontend - React Pagination Component" color="text-yellow-600">
        <CodeBlock>
{`import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentPagination() {
  const [students, setStudents] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    fetchStudents();
  }, [pageNumber, pageSize]);

  const fetchStudents = async () => {
    const response = await axios.get(\`http://localhost:5000/api/students/paginated?pageNumber=\${pageNumber}&pageSize=\${pageSize}\`);
    setStudents(response.data.data);
    setTotalRecords(response.data.totalRecords);
  };

  const totalPages = Math.ceil(totalRecords / pageSize);

  return (
    <div>
      <div>
        <label>Page Size: </label>
        <select value={pageSize} onChange={(e)=>setPageSize(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button disabled={pageNumber===1} onClick={()=>setPageNumber(pageNumber-1)}>Prev</button>
        <span> Page {pageNumber} of {totalPages} </span>
        <button disabled={pageNumber===totalPages} onClick={()=>setPageNumber(pageNumber+1)}>Next</button>
      </div>
    </div>
  );
}

export default StudentPagination;`}
        </CodeBlock>
      </Section>

      <Section title="Summary" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li><strong>Backend:</strong> Uses <code>skip()</code> and <code>limit()</code> in MongoDB.</li>
          <li><strong>Frontend:</strong> React fetches students dynamically with page number and size.</li>
          <li><strong>Reusable:</strong> Can be applied to any entity (Employee, Product, etc.).</li>
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

export default Nodepagination;
