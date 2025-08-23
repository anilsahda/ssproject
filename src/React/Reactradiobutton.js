import "bootstrap/dist/css/bootstrap.min.css";
import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Reactradiobutton() {
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
        <h1 className="fw-bold mb-5 text-primary text-center">Radio Button - React</h1>

        {/* Step 1: State and Base URL */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: State and Base URL
          </div>
          <pre style={preStyle}>{`const [students, setStudents] = useState([]);
const [countries, setCountries] = useState([]);
const [states, setStates] = useState([]);
const [districts, setDistricts] = useState([]);
const [id, setId] = useState(0);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [mobile, setMobile] = useState("");
const [countryId, setCountryId] = useState("");
const [stateId, setStateId] = useState("");
const [districtId, setDistrictId] = useState("");
const [genderId, setGenderId] = useState(0);
const genders=[{ id: 1, name: "Male" },{ id: 2, name: "Female" },{ id: 3, name:"Other"}];
const baseUrl = "https://localhost:7071/api";`}</pre>
        </section>

        {/* Step 2: Load Data */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Load Data from APIs
          </div>
          <pre style={preStyle}>{`useEffect(() => {
  loadStudents();
  loadCountries();
  loadStates();
  loadDistricts();
}, []);

const loadStudents = async () => {
  const res = await axios.get(\`\${baseUrl}/students\`);
  setStudents(res.data);
};

const loadCountries = async () => {
  const res = await axios.get(\`\${baseUrl}/countries\`);
  setCountries(res.data);
};

const loadStates = async () => {
  const res = await axios.get(\`\${baseUrl}/states\`);
  setStates(res.data);
};

const loadDistricts = async () => {
  const res = await axios.get(\`\${baseUrl}/districts\`);
  setDistricts(res.data);
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

        {/* Step 4: Save / Update Student */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 4: Add or Update Student
          </div>
          <pre style={preStyle}>{`const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    id,
    name,
    email,
    mobile,
    countryId: countryId ? Number(countryId) : null,
    stateId: stateId ? Number(stateId) : null,
    districtId: districtId ? Number(districtId) : null,
    genderId: genderId ? Number(genderId) : null
  };

  if (id > 0) {
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
  setName(std.name);
  setEmail(std.email);
  setMobile(std.mobile);
  setCountryId(std.countryId);
  setStateId(std.stateId);
  setDistrictId(std.districtId);
  setGenderId(std.genderId || 0);
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
    cancelButtonText: "Cancel"
  }).then(async (result) => {
    if (result.isConfirmed) {
      await axios.delete(\`\${baseUrl}/students/\${studentId}\`);
      loadStudents();
      Swal.fire("Deleted!", "Student has been deleted.", "success");
    }
  });
};`}</pre>
        </section>

        {/* Step 7: Component JSX */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 7: Component JSX
          </div>
          <pre style={preStyle}>{`<form onSubmit={handleSubmit}>
  <input type="text" value={name} onChange={e => setName(e.target.value)} />
  <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
  <input type="text" value={mobile} onChange={e => setMobile(e.target.value)} />

  <select value={countryId} onChange={e => setCountryId(e.target.value)}>
    <option value="">Select Country</option>
    {countries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
  </select>

  <select value={stateId} onChange={e => setStateId(e.target.value)}>
    <option value="">Select State</option>
    {states.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
  </select>

  <select value={districtId} onChange={e => setDistrictId(e.target.value)}>
    <option value="">Select District</option>
    {districts.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
  </select>

  {genders.map(g => (
    <label key={g.id}>
      <input type="radio" name="gender" value={g.id} checked={genderId === g.id} 
            onChange={e => setGenderId(Number(e.target.value))} /> {g.name}
    </label>
  ))}

  <button type="submit">Save Student</button>
</form>

<table className="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Mobile</th>      
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
        <td>{std.name}</td>
        <td>{std.email}</td>
        <td>{std.mobile}</td>
        <td>{countries.find(c => c.id === std.countryId)?.name}</td>
        <td>{states.find(s => s.id === std.stateId)?.name}</td>
        <td>{districts.find(d => d.id === std.districtId)?.name}</td>
        <td>{genders.find(g => g.id === std.genderId)?.name}</td>
        <td>
          <button className="btn btn-warning" onClick={()=>handleEdit(std)}>Edit</button>
          <button onClick={() => handleDelete(std.id)}>Delete</button>
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
            <li>📋 Dynamic table rendering of students with Edit & Delete actions</li>
            <li>⚡ Gender selection via radio buttons</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

// Shared preStyle for all code blocks
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

export default Reactradiobutton;
