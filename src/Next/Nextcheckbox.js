"use client"; // Next.js client component

import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Nextcheckbox() {
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
        <h1 className="fw-bold mb-5 text-primary text-center">Checkbox List - Next.js</h1>

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
const [genders] = useState([
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
  { id: 3, name: "Other" }
]);

const [id, setId] = useState(null);
const [firstName, setFirstName] = useState("");
const [middleName, setMiddleName] = useState("");
const [lastName, setLastName] = useState("");
const [address, setAddress] = useState("");
const [email, setEmail] = useState("");
const [mobile, setMobile] = useState("");
const [countryId, setCountryId] = useState("");
const [stateId, setStateId] = useState("");
const [districtId, setDistrictId] = useState("");
const [genderId, setGenderId] = useState("");
const [selectedLanguages, setSelectedLanguages] = useState([]);

const baseUrl = \`\${process.env.NEXT_PUBLIC_BASE_URL}/Employees\`;`}</pre>
        </section>

        {/* Step 2: Load Data from API */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Load Data from API
          </div>
          <pre style={preStyle}>{`useEffect(() => {
  loadEmployees();
  axios.get(\`\${process.env.NEXT_PUBLIC_BASE_URL}/Countries\`).then(res => setCountries(res.data));
  axios.get(\`\${process.env.NEXT_PUBLIC_BASE_URL}/States\`).then(res => setStates(res.data));
  axios.get(\`\${process.env.NEXT_PUBLIC_BASE_URL}/Districts\`).then(res => setDistricts(res.data));
  axios.get(\`\${process.env.NEXT_PUBLIC_BASE_URL}/Languages\`).then(res => setLanguages(res.data));
}, []);

const loadEmployees = () => {
  axios.get(baseUrl).then(res => setEmployees(res.data));
};`}</pre>
        </section>

        {/* Step 3: Reset Form */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 3: Reset Form
          </div>
          <pre style={preStyle}>{`const resetForm = () => {
  setId(null);
  setFirstName("");
  setMiddleName("");
  setLastName("");
  setAddress("");
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
    firstName,
    middleName,
    lastName,
    address,
    email,
    mobile,
    countryId: countryId ? Number(countryId) : null,
    stateId: stateId ? Number(stateId) : null,
    districtId: districtId ? Number(districtId) : null,
    genderId: genderId ? Number(genderId) : null,
    languages: selectedLanguages
  };

  try {
    if (id !== null) {
      await axios.put(baseUrl, { ...payload, id });
      Swal.fire("Updated!", "Employee updated successfully.", "success");
    } else {
      await axios.post(baseUrl, payload);
      Swal.fire("Added!", "Employee added successfully.", "success");
    }
    resetForm();
    loadEmployees();
  } catch (error) {
    Swal.fire("Error", "Something went wrong while saving.", "error");
  }
};`}</pre>
        </section>

        {/* Step 5: Edit Employee */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 5: Edit Employee
          </div>
          <pre style={preStyle}>{`const handleEdit = (emp) => {
  setId(emp.id);
  setFirstName(emp.firstName);
  setMiddleName(emp.middleName);
  setLastName(emp.lastName);
  setAddress(emp.address);
  setEmail(emp.email);
  setMobile(emp.mobile);
  setCountryId(emp.countryId);
  setStateId(emp.stateId);
  setDistrictId(emp.districtId);
  setGenderId(emp.genderId || "");
  setSelectedLanguages(emp.languages?.map(l => l.languageId) || []);
};`}</pre>
        </section>

        {/* Step 6: Delete Employee */}
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
      try {
        await axios.delete(\`\${baseUrl}/\${empId}\`);
        loadEmployees();
        Swal.fire("Deleted!", "Employee has been deleted.", "success");
      } catch (error) {
        Swal.fire("Error", "Could not delete employee.", "error");
      }
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
  <!-- Inputs for firstName, middleName, lastName, address, email, mobile -->
  <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required />
  <input type="text" placeholder="Middle Name" value={middleName} onChange={e => setMiddleName(e.target.value)} />
  <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required />
  <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
  <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
  <input type="text" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />

  <!-- Selects for country, state, district -->
  <select value={countryId} onChange={e => setCountryId(e.target.value)}>
    <option value="">Select Country</option>
  </select>
  <select value={stateId} onChange={e => setStateId(e.target.value)}>
    <option value="">Select State</option>
  </select>
  <select value={districtId} onChange={e => setDistrictId(e.target.value)}>
    <option value="">Select District</option>
  </select>

  <!-- Radio buttons for gender -->
  <label>Gender</label>
  <input type="radio" name="gender" value="1" /> Male
  <input type="radio" name="gender" value="2" /> Female
  <input type="radio" name="gender" value="3" /> Other

  <!-- Checkboxes for languages -->
  <label>Languages</label>
  <input type="checkbox" value="1" /> English
  <input type="checkbox" value="2" /> Hindi

  <button type="submit">{id !== null ? "Update Employee" : "Add Employee"}</button>
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

export default Nextcheckbox;