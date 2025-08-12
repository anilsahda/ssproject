import "bootstrap/dist/css/bootstrap.min.css";
import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Reactcascadingdropdown() {
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
          District CRUD Documentation (with Cascading Dropdowns)
        </h1>

        {/* Introduction */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Introduction
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            This guide explains how to build a <strong>District Management</strong> feature in a
            React application using Axios for API requests and Bootstrap for styling.
            It includes cascading dropdowns for selecting <strong>Country</strong> and <strong>State</strong>
            before adding or updating a district. The functionality covers Create, Read, Update, and Delete (CRUD) operations.
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
                <td>/districts</td>
                <td>Retrieve all districts</td>
              </tr>
              <tr>
                <td><strong>POST</strong></td>
                <td>/districts</td>
                <td>Add a new district</td>
              </tr>
              <tr>
                <td><strong>PUT</strong></td>
                <td>/districts/:id</td>
                <td>Update a district by ID</td>
              </tr>
              <tr>
                <td><strong>DELETE</strong></td>
                <td>/districts/:id</td>
                <td>Delete a district by ID</td>
              </tr>
              <tr>
                <td><strong>GET</strong></td>
                <td>/countries</td>
                <td>Retrieve all countries</td>
              </tr>
              <tr>
                <td><strong>GET</strong></td>
                <td>/states?countryId=<pre>
{` ... d.id ... `}
</pre></td>
                <td>Retrieve states for a selected country</td>
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

function District() {
  const [districts, setDistricts] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  
  const [name, setName] = useState("");
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
  const [editingId, setEditingId] = useState(null);

  const districtApi = "http://localhost:5000/districts";
  const countryApi = "http://localhost:5000/countries";
  const stateApi = "http://localhost:5000/states";

  useEffect(() => {
    fetchDistricts();
    fetchCountries();
  }, []);

  const fetchDistricts = async () => {
    const res = await axios.get(districtApi);
    setDistricts(res.data);
  };

  const fetchCountries = async () => {
    const res = await axios.get(countryApi);
    setCountries(res.data);
  };

  const fetchStatesByCountry = async (countryId) => {
    if (!countryId) {
      setStates([]);
      return;
    }
    const res = await axios.get(\`\${stateApi}?countryId=\${countryId}\`);
    setStates(res.data);
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountryId(selectedCountry);
    setStateId("");
    fetchStatesByCountry(selectedCountry);
  };

  const addDistrict = async () => {
    await axios.post(districtApi, { name, countryId, stateId });
    resetForm();
    fetchDistricts();
  };

  const updateDistrict = async () => {
    await axios.put(\`\${districtApi}/\${editingId}\`, { name, countryId, stateId });
    resetForm();
    fetchDistricts();
  };

  const deleteDistrict = async (id) => {
    await axios.delete(\`\${districtApi}/\${id}\`);
    fetchDistricts();
  };

  const resetForm = () => {
    setName("");
    setCountryId("");
    setStateId("");
    setEditingId(null);
    setStates([]);
  };

  return (
    <div className="container">
      <h2>Manage Districts</h2>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="District Name" 
      />
      <select value={countryId} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countries.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <select value={stateId} onChange={(e) => setStateId(e.target.value)}>
        <option value="">Select State</option>
        {states.map((s) => (
          <option key={s.id} value={s.id}>{s.name}</option>
        ))}
      </select>
      <button onClick={editingId ? updateDistrict : addDistrict}>
        {editingId ? "Update" : "Add"}
      </button>
      <ul>
        {districts.map((d) => (
          <li key={d.id}>
            {d.name} - 
            {countries.find(c => c.id === d.countryId)?.name || "Unknown"}, 
            {states.find(s => s.id === d.stateId)?.name || "Unknown"}
            <button onClick={() => { 
              setName(d.name); 
              setCountryId(d.countryId); 
              fetchStatesByCountry(d.countryId);
              setStateId(d.stateId); 
              setEditingId(d.id); 
            }}>Edit</button>
            <button onClick={() => deleteDistrict(d.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default District;`}
          </pre>
        </section>

        {/* Conclusion */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Conclusion
          </div>
          <p style={{ fontSize: "1.05rem" }}>
            This documentation provides a step-by-step guide to implementing CRUD
            functionality for <strong>District Management</strong> with a cascading dropdown
            for selecting country and state in a React application using Axios.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Reactcascadingdropdown;
