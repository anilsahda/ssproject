import "bootstrap/dist/css/bootstrap.min.css";
import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Reactcountry() {
  const sectionHeaderStyle = {
    borderBottom: "2px solid #007bff",
    paddingBottom: "5px",
    marginBottom: "15px",
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#007bff",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "40px 20px" }}>
      <div className="container bg-white p-5 shadow-sm rounded">
        <h1 className="fw-bold mb-5 text-primary text-center">
          Country CRUD Documentation
        </h1>

        {/* Introduction */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Introduction
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            This guide explains how to build a Country Management feature in a
            React application using Axios for API requests and Bootstrap for
            styling. The functionality includes Create, Read, Update, and Delete
            (CRUD) operations.
          </p>
        </section>

        {/* API Endpoints */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> API Endpoints
          </div>
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>Method</th>
                <th>Endpoint</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>GET</strong></td>
                <td>/countries</td>
                <td>Retrieve all countries</td>
              </tr>
              <tr>
                <td><strong>POST</strong></td>
                <td>/countries</td>
                <td>Add a new country</td>
              </tr>
              <tr>
                <td><strong>PUT</strong></td>
                <td>/countries/:id</td>
                <td>Update a country by ID</td>
              </tr>
              <tr>
                <td><strong>DELETE</strong></td>
                <td>/countries/:id</td>
                <td>Delete a country by ID</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Install Axios */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Install Axios
          </div>
          <pre
            className="p-3 rounded"
            style={{
              backgroundColor: "#f1f3f5",
              fontFamily: "monospace",
              fontSize: "1rem",
              border: "1px solid #dee2e6",
            }}
          >
            npm install axios
          </pre>
        </section>

        {/* Example Code */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Example React Component
          </div>
          <pre
            className="p-3 rounded"
            style={{
              backgroundColor: "#f8f9fa",
              color: "#212529",
              fontFamily: "'Fira Code', monospace",
              fontSize: "0.95rem",
              whiteSpace: "pre-wrap",
              border: "1px solid #dee2e6",
            }}
          >
{`import React, { useState, useEffect } from "react";
import axios from "axios";

function Country() {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [editingId, setEditingId] = useState(null);
  const apiUrl = "http://localhost:5000/countries";

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const res = await axios.get(apiUrl);
    setCountries(res.data);
  };

  const addCountry = async () => {
    await axios.post(apiUrl, { name, code });
    fetchCountries();
  };

  const updateCountry = async () => {
    await axios.put(\`\${apiUrl}/\${editingId}\`, { name, code });
    setEditingId(null);
    fetchCountries();
  };

  const deleteCountry = async (id) => {
    await axios.delete(\`\${apiUrl}/\${id}\`);
    fetchCountries();
  };

  return (
    <div className="container">
      <h2>Manage Countries</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Country Name" />
      <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Country Code" />
      <button onClick={editingId ? updateCountry : addCountry}>
        {editingId ? "Update" : "Add"}
      </button>
      <ul>
        {countries.map((c) => (
          <li key={c.id}>
            {c.name} ({c.code})
            <button onClick={() => { setName(c.name); setCode(c.code); setEditingId(c.id); }}>Edit</button>
            <button onClick={() => deleteCountry(c.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Country;`}
          </pre>
        </section>

        {/* Conclusion */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Conclusion
          </div>
          <p style={{ fontSize: "1.05rem" }}>
            This documentation provides a step-by-step guide to implementing
            CRUD functionality for country management in a React application
            using Axios.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Reactcountry;
