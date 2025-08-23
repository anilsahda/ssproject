import { FaBook, FaLink, FaCode, FaSearch, FaCheckCircle } from "react-icons/fa";

function Reactpagination() {
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
        <h1 className="fw-bold mb-5 text-primary text-center">Pagination - React</h1>

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
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [mobile, setMobile] = useState("");
const [countryId, setCountryId] = useState("");
const [stateId, setStateId] = useState("");
const [districtId, setDistrictId] = useState("");
const [genderId, setGenderId] = useState(0);

const [currentPage, setCurrentPage] = useState(1);
const [pageSize, setPageSize] = useState(5);
const [totalRecords, setTotalRecords] = useState(0);

const genders=[{id:1, name: "Male" }, { id: 2, name: "Female" },{ id: 3, name: "Other"}];

const baseUrl = "https://localhost:7070/api";`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Load Students, Countries, States, Districts
          </div>
          <pre style={preStyle}>{`const loadStudents = async () => {
  const res = await axios.get(\`\${baseUrl}/students/paginated?pageNumber=\${currentPage}&pageSize=\${pageSize}\`);
  setStudents(res.data.data);
  setTotalRecords(res.data.totalRecords);
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

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 3: Reset Form
          </div>
          <pre style={preStyle}>{`const resetForm = () => {
  setId(0);
  setName("");
  setEmail("");
  setMobile("");
  setCountryId("");
  setStateId("");
  setDistrictId("");
  setGenderId(0);
  setShowForm(false);
};`}</pre>
        </section>

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

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 5: Edit Student
          </div>
          <pre style={preStyle}>{`const handleEdit = (std) => {
  setId(std.id);
  setName(std.name || "");
  setEmail(std.email || "");
  setMobile(std.mobile || "");
  setCountryId(std.countryId || "");
  setStateId(std.stateId || "");
  setDistrictId(std.districtId || "");
  setGenderId(std.genderId || 0);
  setShowForm(true);
};`}</pre>
        </section>

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
      loadStudents();
      Swal.fire("Deleted!", "Student has been deleted.", "success");
    }
  });
};`}</pre>
        </section>

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
  setTotalRecords(res.data.length);
};`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 8: Form JSX (Modal Popup)
          </div>
          <pre style={preStyle}>{`{showForm && (
  <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content p-3">
        <div className="modal-header">
          <h5 className="modal-title">{id ? "Edit Student" : "Add New Student"}</h5>
          <button type="button" className="btn-close" onClick={resetForm}></button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row mb-2">
            <div className="col">
             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col">
             <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="col">
            <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col">
              <select value={countryId} onChange={(e) => setCountryId(e.target.value)}>
                <option value="">Select Country</option>
                {countries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div className="col">
              <select value={stateId} onChange={(e) => setStateId(e.target.value)}>
                <option value="">Select State</option>
                {states.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div className="col">
              <select value={districtId} onChange={(e) => setDistrictId(e.target.value)}>
                <option value="">Select District</option>
                {districts.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="me-3"><strong>Gender:</strong></label>
            {genders.map(g => (
              <div className="form-check form-check-inline" key={g.id}>
                <input type="radio" name="gender" value={g.id} 
                    checked={genderId === g.id} onChange={() => setGenderId(g.id)} />
                <label className="form-check-label">{g.name}</label>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center gap-3">
            <button type="submit">{id ? "Update" : "Save"}</button>
          </div>
        </form>
      </div>
    </div>
  </div> )}`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 9: Students Table JSX
          </div>
          <pre style={preStyle}>{`<table className="table table-bordered table-striped mt-3">
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
    {students.length === 0 && <tr>
    <td colSpan="7" className="text-center text-muted">No matching records found</td>
    </tr>}
  </tbody>
</table>`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 10: Pagination Controls
          </div>
          <pre style={preStyle}>{`const totalPages = Math.ceil(totalRecords / pageSize);

{totalPages > 1 && (
<div>
  <button disabled = {currentPage === 1} onClick = {() => setCurrentPage(prev =>prev-1)}>◀</button>
    {[...Array(totalPages)].map((_,i)=>
      (<button key={i} onClick={()=>setCurrentPage(i+1)}>{i+1}</button>)
    )}
  <button disabled={currentPage===totalPages} onClick={()=>setCurrentPage(prev=>prev+1)}>▶</button>
</div>
)}`}</pre>
        </section>

        {/* Step 11: Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 11: Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ CRUD operations with Axios</li>
            <li>🔎 Search with pagination</li>
            <li>📝 Form handling with controlled components</li>
            <li>⚡ Modal popup for Add/Edit</li>
            <li>🔔 SweetAlert2 for notifications</li>
            <li>📄 Page size selection and navigation controls</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Reactpagination;
