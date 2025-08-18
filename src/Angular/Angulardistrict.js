import "bootstrap/dist/css/bootstrap.min.css";
import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Angulardistrict() {
  const sectionHeaderStyle = {
    borderBottom: "2px solid #007bff",
    paddingBottom: "5px",
    marginBottom: "15px",
    fontSize: "1.2rem",
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
          Cascading Dropdown - React
        </h1>

        {/* Step 1: State and Base URL */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: State and Base URL
          </div>
          <pre style={preStyle}>{`const [districts, setDistricts] = useState([]);
const [countries, setCountries] = useState([]);
const [states, setStates] = useState([]);
const [id, setId] = useState(0);
const [name, setName] = useState("");
const [countryId, setCountryId] = useState(0);
const [stateId, setStateId] = useState(0);

const baseUrl = \`\${process.env.REACT_APP_BASE_URL}/Districts\`;
const countryUrl = \`\${process.env.REACT_APP_BASE_URL}/Countries\`;
const stateUrl = \`\${process.env.REACT_APP_BASE_URL}/States\`;`}</pre>
        </section>

        {/* Step 2: Load Data */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Load Data from APIs
          </div>
          <pre style={preStyle}>{`useEffect(() => {
  loadCountries();
  loadStates();
  loadDistricts();
}, []);

const loadCountries = () => {
  axios.get(countryUrl).then(res => setCountries(res.data));
};

const loadStates = () => {
  axios.get(stateUrl).then(res => setStates(res.data));
};

const loadDistricts = () => {
  axios.get(baseUrl).then(res => setDistricts(res.data));
};`}</pre>
        </section>

        {/* Step 3: Add / Update District */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 3: Add or Update District
          </div>
          <pre style={preStyle}>{`const handleSave = () => {
  if (name.trim() === "" || countryId === 0 || stateId === 0) {
    Swal.fire("Validation Error", "All fields are required", "warning");
    return;
  }

  const data = { id, name, countryId: parseInt(countryId), stateId: parseInt(stateId) };

  if (id === 0) {
    axios.post(baseUrl, data)
      .then(() => { Swal.fire("Success", "District added successfully!", "success"); resetForm(); loadDistricts(); })
      .catch(() => Swal.fire("Error", "Failed to add district", "error"));
  } else {
    axios.put(baseUrl, data)
      .then(() => { Swal.fire("Success", "District updated successfully!", "success"); resetForm(); loadDistricts(); })
      .catch(() => Swal.fire("Error", "Failed to update district", "error"));
  }
};`}</pre>
        </section>

        {/* Step 4: Edit District */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 4: Edit District
          </div>
          <pre style={preStyle}>{`const handleEdit = (district) => {
  setId(district.id);
  setName(district.name);
  setCountryId(district.countryId);
  setStateId(district.stateId);
};`}</pre>
        </section>

        {/* Step 5: Delete District */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 5: Delete District
          </div>
          <pre style={preStyle}>{`const handleDelete = (districtId) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!"
  }).then(result => {
    if (result.isConfirmed) {
      axios.delete(\`\${baseUrl}/\${districtId}\`)
        .then(() => { Swal.fire("Deleted!", "District has been deleted.", "success"); loadDistricts(); })
        .catch(() => Swal.fire("Error", "Failed to delete district", "error"));
    }
  });
};`}</pre>
        </section>

        {/* Step 6: Reset Form */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 6: Reset Form
          </div>
          <pre style={preStyle}>{`const resetForm = () => {
  setId(0);
  setName("");
  setCountryId(0);
  setStateId(0);
};`}</pre>
        </section>

        {/* Step 7: JSX Form & Table */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 7: JSX Form & Table
          </div>
          <pre style={preStyle}>{`<div className="mb-3">
  <!-- Select Country -->
  <select value={countryId} onChange={e => { setCountryId(parseInt(e.target.value)); setStateId(0); }}>
    <option value={0}>Select Country</option>
    {countries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
  </select>

  <!-- Select State -->
  <select value={stateId} onChange={e => setStateId(parseInt(e.target.value))} disabled={countryId === 0}>
    <option value={0}>Select State</option>
    {states.filter(s => s.countryId === countryId).map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
  </select>

  <!-- Input District Name -->
  <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter District Name" />

  <button onClick={handleSave}>{id === 0 ? "Add District" : "Update District"}</button>
  <button onClick={resetForm}>Reset</button>
</div>

<table className="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Id</th>
      <th>Country</th>
      <th>State</th>
      <th>District</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {districts.length === 0 && <tr><td colSpan="5" className="text-center">No districts found.</td></tr>}
    {districts.map(d => (
      <tr key={d.id}>
        <td>{d.id}</td>
        <td>{countries.find(c => c.id === d.countryId)?.name}</td>
        <td>{states.find(s => s.id === d.stateId)?.name}</td>
        <td>{d.name}</td>
        <td>
          <button onClick={() => handleEdit(d)}>Edit</button>
          <button onClick={() => handleDelete(d.id)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>`}</pre>
        </section>

        {/* Step 8: Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 8: Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ Full CRUD operations with Axios (GET, POST, PUT, DELETE)</li>
            <li>🟡 SweetAlert2 used for notifications and delete confirmation</li>
            <li>📝 Form handling with controlled components</li>
            <li>📋 Dynamic table rendering of districts with Edit & Delete actions</li>
            <li>⚡ State dropdown dynamically filtered by selected country</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

// Shared preStyle for code blocks
const preStyle = {
  backgroundColor: "#f1f3f5",
  fontFamily: "monospace",
  fontSize: "0.95rem",
  border: "1px solid #dee2e6",
  padding: "15px",
  borderRadius: "5px",
  overflowX: "auto",
  whiteSpace: "pre",
};

export default Angulardistrict;