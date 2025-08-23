import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Reactcheckbox() {
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
        <h1 className="fw-bold mb-5 text-primary text-center">Checkbox List - React</h1>

        {/* Step 1: State and Base URL */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: State and Base URL
          </div>
          <pre style={preStyle}>{`const [employees, setEmployees] = useState([]);
const [countries, setCountries] = useState([]);
const [states, setStates] = useState([]);
const [districts, setDistricts] = useState([]);
const [languages, setLanguages] = useState([]);
const [genders]=useState([{id:1,name:"Male"},{id:2,name:"Female"},{id:3,name:"Other"}]);

const [id, setId] = useState(null);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [mobile, setMobile] = useState("");
const [countryId, setCountryId] = useState("");
const [stateId, setStateId] = useState("");
const [districtId, setDistrictId] = useState("");
const [genderId, setGenderId] = useState("");
const [selectedLanguages, setSelectedLanguages] = useState([]);

const baseUrl = "https://localhost:7071/api";`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Load Data from API
          </div>
          <pre style={preStyle}>{`useEffect(() => {
  loadEmployees();
  axios.get(\`\${baseUrl}/countries\`).then(res=>setCountries(res.data));
  axios.get(\`\${baseUrl}/states\`).then(res=>setStates(res.data));
  axios.get(\`\${baseUrl}/districts\`).then(res=>setDistricts(res.data));
  axios.get(\`\${baseUrl}/languages\`).then(res=>setLanguages(res.data));
}, []);

const loadEmployees = () => {
  axios.get(\`\${baseUrl}/employees\`).then(res => setEmployees(res.data));
};`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 3: Reset Form
          </div>
          <pre style={preStyle}>{`const resetForm = () => {
  setId(null);
  setName("");
  setEmail("");
  setMobile("");
  setCountryId("");
  setStateId("");
  setDistrictId("");
  setGenderId("");
  setSelectedLanguages([]);
};`}</pre>
        </section>

        {/* Step 4: Add or Update Employee */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 4: Add or Update Employee
          </div>
          <pre style={preStyle}>{`const handleSubmit = async (e) => {
  e.preventDefault();
  const payload = {
    name,
    email,
    mobile,
    countryId: countryId ? Number(countryId) : null,
    stateId: stateId ? Number(stateId) : null,
    districtId: districtId ? Number(districtId) : null,
    genderId: genderId ? Number(genderId) : null,
    languages: selectedLanguages
  };

  if (id !== null) {
    await axios.put(\`\${baseUrl}/Employees\`, { ...payload, id });
    Swal.fire("Updated!", "Employee updated successfully.", "success");
  } else {
    await axios.post(\`\${baseUrl}/Employees\`, payload);
    Swal.fire("Added!", "Employee added successfully.", "success");
  }
  resetForm();
  loadEmployees();
};`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 5: Edit Employee
          </div>
          <pre style={preStyle}>{`const handleEdit = (emp) => {
  setId(emp.id);
  setName(emp.name);
  setEmail(emp.email);
  setMobile(emp.mobile);
  setCountryId(emp.countryId);
  setStateId(emp.stateId);
  setDistrictId(emp.districtId);
  setGenderId(emp.genderId || "");
  setSelectedLanguages(emp.languages?.map(l => l.languageId) || []);
};`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 6: Delete Employee
          </div>
          <pre style={preStyle}>{`const handleDelete = async (empId) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This will permanently delete the employee.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      await axios.delete(\`\${baseUrl}/Employees/\${empId}\`);
      loadEmployees();
      Swal.fire("Deleted!", "Employee has been deleted.", "success");
    }
  });
};`}</pre>
        </section>

        {/* Step 7: Form JSX */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 7: JSX Form & Table
          </div>
          <pre style={preStyle}>{`<form onSubmit={handleSubmit}>
  <input type="text" value={name} onChange={e => setName(e.target.value)} required />
  <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
  <input type="text" value={mobile} onChange={e => setMobile(e.target.value)} />

  <select value={countryId} onChange={e => setCountryId(e.target.value)}>
    <option value="">Select Country</option>
  </select>

  <select value={stateId} onChange={e => setStateId(e.target.value)}>
    <option value="">Select State</option>
  </select>

  <select value={districtId} onChange={e => setDistrictId(e.target.value)}>
    <option value="">Select District</option>
  </select>

  <label>Gender</label>
  <input type="radio" name="gender" value="1" /> Male
  <input type="radio" name="gender" value="2" /> Female
  <input type="radio" name="gender" value="3" /> Other

  <label>Languages</label>
  <input type="checkbox" value="1" /> English
  <input type="checkbox" value="2" /> Hindi

  <button type="submit">Save Employee</button>
</form>`}</pre>
        </section>

        {/* Step 8: Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 8: Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ Full CRUD operations with Axios (GET, POST, PUT, DELETE)</li>
            <li>🟡 SweetAlert2 used for toast notifications and delete confirmation</li>
            <li>📝 Form handling with controlled components</li>
            <li>📋 Dynamic table rendering of employees with Edit & Delete actions</li>
            <li>⚡ Employee linked to country, state, district, gender, and multiple languages</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

const preStyle = {backgroundColor: "#f1f3f5", fontFamily: "monospace", fontSize: "0.95rem", border: "1px solid #dee2e6", padding: "15px", borderRadius: "5px", overflowX: "auto", whiteSpace: "pre" };
export default Reactcheckbox;
