import "bootstrap/dist/css/bootstrap.min.css";
import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Reactdropdown() {
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
          State CRUD Documentation (with Country Dropdown)
        </h1>

        {/* Introduction */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Introduction
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            This guide explains how to build a <strong>State Management</strong> feature in a
            React application using Axios for API requests and Bootstrap for styling.
            It includes a dropdown for selecting a country when adding or updating a state.
            The functionality covers Create, Read, Update, and Delete (CRUD) operations.
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
                <td>/states</td>
                <td>Retrieve all states</td>
              </tr>
              <tr>
                <td><strong>POST</strong></td>
                <td>/states</td>
                <td>Add a new state</td>
              </tr>
              <tr>
                <td><strong>PUT</strong></td>
                <td>/states/:id</td>
                <td>Update a state by ID</td>
              </tr>
              <tr>
                <td><strong>DELETE</strong></td>
                <td>/states/:id</td>
                <td>Delete a state by ID</td>
              </tr>
              <tr>
                <td><strong>GET</strong></td>
                <td>/countries</td>
                <td>Retrieve all countries for dropdown</td>
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

function State() {
  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  const [countryId, setCountryId] = useState("");
  const [editingId, setEditingId] = useState(null);
  
  const stateApi = "http://localhost:5000/states";
  const countryApi = "http://localhost:5000/countries";

  useEffect(() => {
    fetchStates();
    fetchCountries();
  }, []);

  const fetchStates = async () => {
    const res = await axios.get(stateApi);
    setStates(res.data);
  };

  const fetchCountries = async () => {
    const res = await axios.get(countryApi);
    setCountries(res.data);
  };

  const addState = async () => {
    await axios.post(stateApi, { name, countryId });
    setName("");
    setCountryId("");
    fetchStates();
  };

  const updateState = async () => {
    await axios.put(\`\${stateApi}/\${editingId}\`, { name, countryId });
    setEditingId(null);
    setName("");
    setCountryId("");
    fetchStates();
  };

  const deleteState = async (id) => {
    await axios.delete(\`\${stateApi}/\${id}\`);
    fetchStates();
  };

  return (
    <div className="container">
      <h2>Manage States</h2>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="State Name" 
      />
      <select 
        value={countryId} 
        onChange={(e) => setCountryId(e.target.value)}
      >
        <option value="">Select Country</option>
        {countries.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <button onClick={editingId ? updateState : addState}>
        {editingId ? "Update" : "Add"}
      </button>
      <ul>
        {states.map((s) => (
          <li key={s.id}>
            {s.name} - {countries.find(c => c.id === s.countryId)?.name || "Unknown"}
            <button onClick={() => { 
              setName(s.name); 
              setCountryId(s.countryId); 
              setEditingId(s.id); 
            }}>Edit</button>
            <button onClick={() => deleteState(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default State;`}
          </pre>
        </section>

        {/* Conclusion */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Conclusion
          </div>
          <p style={{ fontSize: "1.05rem" }}>
            This documentation provides a step-by-step guide to implementing CRUD
            functionality for <strong>State Management</strong> with a linked <strong>Country dropdown</strong>
            in a React application using Axios.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Reactdropdown;
