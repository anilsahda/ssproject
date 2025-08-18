import "bootstrap/dist/css/bootstrap.min.css";
import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Reactstate() {
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
          Dropdown - React
        </h1>

        {/* Step 1: State and Base URL */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: State and Base URL
          </div>
          <pre style={preStyle}>{`const [countries, setCountries] = useState([]);
const [states, setStates] = useState([]);
const [id, setId] = useState(0);
const [name, setName] = useState("");
const [countryId, setCountryId] = useState("");

const stateUrl = \`\${process.env.REACT_APP_BASE_URL}/States\`;
const countryUrl = \`\${process.env.REACT_APP_BASE_URL}/Countries\`;`}</pre>
        </section>

        {/* Step 2: Load States and Countries */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Load States and Countries from API
          </div>
          <pre style={preStyle}>{`useEffect(() => {
  loadStates();
  loadCountries();
}, []);

const loadStates = async () => {
  const res = await axios.get(stateUrl);
  setStates(res.data);
};

const loadCountries = async () => {
  const res = await axios.get(countryUrl);
  setCountries(res.data);
};`}</pre>
        </section>

        {/* Step 3: Toast Notifications */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 3: Toast Notifications
          </div>
          <pre style={preStyle}>{`const toast = (icon, title) => {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon,
    title,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true
  });
};`}</pre>
        </section>

        {/* Step 4: Add / Update State */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 4: Add or Update State
          </div>
          <pre style={preStyle}>{`const handleSave = async () => {
  if (!name.trim()) {
    toast("warning", "State name is required");
    return;
  }
  if (!countryId) {
    toast("warning", "Please select a country");
    return;
  }

  const data = { id, name, countryId: parseInt(countryId) };

  if (id === 0) {
    await axios.post(stateUrl, data);
    toast("success", "State added");
  } else {
    await axios.put(stateUrl, data);
    toast("success", "State updated");
  }

  resetForm();
  loadStates();

};`}</pre>
        </section>

        {/* Step 5: Edit State */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 5: Edit State
          </div>
          <pre style={preStyle}>{`const handleEdit = (state) => {
  setId(state.id);
  setName(state.name);
  setCountryId(state.countryId.toString());
};`}</pre>
        </section>

        {/* Step 6: Delete State */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 6: Delete State
          </div>
          <pre style={preStyle}>{`const handleDelete = (stateId) => {
  Swal.fire({
    title: "Delete this state?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it"
  }).then(async (result) => {
    if (result.isConfirmed) {
      await axios.delete(\`\${stateUrl}/\${stateId}\`);
      toast("success", "State deleted");
      loadStates();
    }
  });
};`}</pre>
        </section>

        {/* Step 7: Reset Form */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 7: Reset Form
          </div>
          <pre style={preStyle}>{`const resetForm = () => {
  setId(0);
  setName("");
  setCountryId("");
};`}</pre>
        </section>

        {/* Step 8: JSX Form & Table */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 8: JSX Form & Table
          </div>
          <pre style={preStyle}>{`<div className="mb-3">
  <input type="text" value={name} onChange={e => setName(e.target.value)} />
  <select value={countryId} onChange={e => setCountryId(e.target.value)}>
    <option value="">Select Country</option>
    {countries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
  </select>
  <button className="btn btn-primary me-2" onClick={handleSave}>Save State</button>
</div>

<table className="table table-bordered table-striped">
  <thead className="table-light">
    <tr>
      <th>Id</th>
      <th>State Name</th>
      <th>Country</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {states.map(s => (
        <tr key={s.id}>
          <td>{s.id}</td>
          <td>{s.name}</td>
          <td>{countries.find(c => c.id === s.countryId)?.name || ""}</td>
          <td>
            <button onClick={() => handleEdit(s)}>Edit</button>
            <button onClick={() => handleDelete(s.id)}>Delete</button>
          </td>
        </tr>
      ))}
  </tbody>
</table>`}</pre>
        </section>

        {/* Step 9: Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 9: Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ Full CRUD operations with Axios (GET, POST, PUT, DELETE)</li>
            <li>🟡 SweetAlert2 used for toast notifications and delete confirmation</li>
            <li>📝 Form handling with controlled components</li>
            <li>📋 Dynamic table rendering of states with Edit & Delete actions</li>
            <li>⚡ State is linked to a country via dropdown selection</li>
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

export default Reactstate;
