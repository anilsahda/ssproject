"use client"; // Next.js client component

import { FaBook, FaLink, FaCode, FaSearch, FaCheckCircle } from "react-icons/fa";

function Nextsearching() {
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

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "40px 20px" }}>
      <div className="container bg-white p-5 shadow-sm rounded">
        <h1 className="fw-bold mb-5 text-primary text-center">Searching - Next.js</h1>

        {/* Step 1: State Management */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: State Management
          </div>
          <pre style={preStyle}>{`const [students, setStudents] = useState([]);
const [countries, setCountries] = useState([]);
const [states, setStates] = useState([]);
const [districts, setDistricts] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [showForm, setShowForm] = useState(false);

const [id, setId] = useState(0);
const [firstName, setFirstName] = useState("");
const [middleName, setMiddleName] = useState("");
const [lastName, setLastName] = useState("");
const [address, setAddress] = useState("");
const [email, setEmail] = useState("");
const [mobile, setMobile] = useState("");
const [countryId, setCountryId] = useState("");
const [stateId, setStateId] = useState("");
const [districtId, setDistrictId] = useState("");
const [genderId, setGenderId] = useState(0);

const genders = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
  { id: 3, name: "Other" },
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;`}</pre>
        </section>

        {/* Step 2: Load Data */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Load Students, Countries, States, Districts
          </div>
          <pre style={preStyle}>{`useEffect(() => {
  loadStudents();
  loadCountries();
  loadStates();
  loadDistricts();
}, []);

const loadStudents = async () => { ... };
const loadCountries = async () => { ... };
const loadStates = async () => { ... };
const loadDistricts = async () => { ... };`}</pre>
        </section>

        {/* Step 3: Reset Form */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 3: Reset Form
          </div>
          <pre style={preStyle}>{`const resetForm = () => {
  setId(0);
  setFirstName("");
  setMiddleName("");
  setLastName("");
  setAddress("");
  setEmail("");
  setMobile("");
  setCountryId("");
  setStateId("");
  setDistrictId("");
  setGenderId(0);
  setShowForm(false);
};`}</pre>
        </section>

        {/* Step 4: Add / Update Student */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 4: Add or Update Student
          </div>
          <pre style={preStyle}>{`const handleSubmit = async (e) => {
  e.preventDefault();
  const payload = {
    id, firstName, middleName, lastName,
    address, email, mobile,
    countryId: countryId ? Number(countryId) : null,
    stateId: stateId ? Number(stateId) : null,
    districtId: districtId ? Number(districtId) : null,
    genderId: genderId ? Number(genderId) : null,
  };
  if (id && id > 0) {
    await axios.put(\`\${baseUrl}/students\`, payload);
    Swal.fire("Updated!", "Student record has been updated.", "success");
  } else {
    await axios.post(\`\${baseUrl}/students\`, payload);
    Swal.fire("Added!", "New student has been added.", "success");
  }
  resetForm();
  loadStudents();
};`}</pre>
        </section>

        {/* Step 5: Edit Student */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 5: Edit Student
          </div>
          <pre style={preStyle}>{`const handleEdit = (std) => {
  setId(std.id);
  setFirstName(std.firstName || "");
  setMiddleName(std.middleName || "");
  setLastName(std.lastName || "");
  setAddress(std.address || "");
  setEmail(std.email || "");
  setMobile(std.mobile || "");
  setCountryId(std.countryId || "");
  setStateId(std.stateId || "");
  setDistrictId(std.districtId || "");
  setGenderId(std.genderId || 0);
  setShowForm(true);
};`}</pre>
        </section>

        {/* Step 6: Delete Student */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 6: Delete Student
          </div>
          <pre style={preStyle}>{`const handleDelete = (studentId) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await axios.delete(\`\${baseUrl}/students/\${studentId}\`);
      Swal.fire("Deleted!", "Student has been deleted.", "success");
      loadStudents();
    }
  });
};`}</pre>
        </section>

        {/* Step 7: Search */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaSearch /> Step 7: Search Students
          </div>
          <pre style={preStyle}>{`const handleSearch = async (e) => {
  e.preventDefault();
  if (!searchTerm.trim()) {
    loadStudents();
    return;
  }
  const res = await axios.get(\`\${baseUrl}/students/search?query=\${searchTerm}\`);
  setStudents(res.data);
};`}</pre>
        </section>

        {/* Step 8: Form JSX */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 8: Form JSX (Modal Popup)
          </div>
          <pre style={preStyle}>{`{showForm && (
  <div className="modal d-block">
    <form onSubmit={handleSubmit}>
      <!-- Inputs and selects same as React version -->
      <!-- Save / Cancel Buttons -->
    </form>
  </div>
)}`}</pre>
        </section>

        {/* Step 9: Table JSX */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 9: Students Table JSX
          </div>
          <pre style={preStyle}>{`<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Country</th>
      <th>State</th>
      <th>District</th>
      <th>Gender</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {students.map(std => (
      <tr key={std.id}>
        <td>{\`\${std.firstName} \${std.middleName || ""} \${std.lastName}\`}</td>
        <td>{std.email}</td>
        <td>{countries.find(c => c.id === std.countryId)?.name}</td>
        <td>{states.find(s => s.id === std.stateId)?.name}</td>
        <td>{districts.find(d => d.id === std.districtId)?.name}</td>
        <td>{genders.find(g => g.id === std.genderId)?.name}</td>
        <td>
          <button onClick={() => handleEdit(std)}>Edit</button>
          <button onClick={() => handleDelete(std.id)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>`}</pre>
        </section>

        {/* Step 10: Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 10: Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ CRUD operations with Axios</li>
            <li>🔎 Search students by multiple fields</li>
            <li>📝 Form handling with controlled components</li>
            <li>⚡ Modal popup for Add/Edit</li>
            <li>🔔 SweetAlert2 for notifications</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Nextsearching;
