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
        <h1 className="fw-bold mb-5 text-primary text-center">React Pagination & CRUD Documentation</h1>

        {/* Step 1 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaBook /> Step 1: State Management</div>
          <pre style={preStyle}>
{`const [students, setStudents] = useState([]);
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

const [currentPage, setCurrentPage] = useState(1);
const [pageSize, setPageSize] = useState(5);
const [totalRecords, setTotalRecords] = useState(0);

const genders = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
  { id: 3, name: "Other" },
];

const baseUrl = process.env.REACT_APP_BASE_URL;`}
          </pre>
        </section>

        {/* Step 2 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaLink /> Step 2: Load Data</div>
          <pre style={preStyle}>
{`const loadStudents = async () => {
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
};`}
          </pre>
        </section>

        {/* Step 3 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaCheckCircle /> Step 3: Reset Form</div>
          <pre style={preStyle}>
{`const resetForm = () => {
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
};`}
          </pre>
        </section>

        {/* Step 4 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaCode /> Step 4: Add / Update Student</div>
          <pre style={preStyle}>
{`const handleSubmit = async (e) => {
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
};`}
          </pre>
        </section>

        {/* Step 8 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaCode /> Step 8: Form JSX (Modal Popup)</div>
          <pre style={preStyle}>
{`{showForm && (
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
              <input type="text" className="form-control" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Middle Name" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
          </div>

          <div className="row mb-2">
            <div className="col">
              <input type="text" className="form-control" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="col">
              <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </div>
          </div>

          <div className="row mb-2">
            <div className="col">
              <select className="form-control" value={countryId} onChange={(e) => setCountryId(e.target.value)}>
                <option value="">Select Country</option>
                {countries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div className="col">
              <select className="form-control" value={stateId} onChange={(e) => setStateId(e.target.value)}>
                <option value="">Select State</option>
                {states.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div className="col">
              <select className="form-control" value={districtId} onChange={(e) => setDistrictId(e.target.value)}>
                <option value="">Select District</option>
                {districts.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="me-3"><strong>Gender:</strong></label>
            {genders.map(g => (
              <div className="form-check form-check-inline" key={g.id}>
                <input className="form-check-input" type="radio" name="gender" value={g.id} checked={genderId === g.id} onChange={() => setGenderId(g.id)} />
                <label className="form-check-label">{g.name}</label>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center gap-3">
            <button type="submit" className="btn btn-primary">{id ? "Update" : "Save"}</button>
            <button type="button" className="btn btn-secondary" onClick={resetForm}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div> )}`}
          </pre>
        </section>

        {/* Step 9 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaCode /> Step 9: Students Table JSX</div>
          <pre style={preStyle}>
{`<table className="table table-bordered table-striped mt-3">
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
          <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(std)}>Edit</button>
          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(std.id)}>Delete</button>
        </td>
      </tr>
    ))}
    {students.length === 0 && <tr><td colSpan="7" className="text-center text-muted">No matching records found</td></tr>}
  </tbody>
</table>`}
          </pre>
        </section>

        {/* Step 10 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaBook /> Step 10: Pagination Controls</div>
          <pre style={preStyle}>
{`const totalPages = Math.ceil(totalRecords / pageSize);

{totalPages > 1 && (
  <div className="d-flex justify-content-center mt-3">
    <button className="btn btn-secondary me-2" disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>◀</button>
    {[...Array(totalPages)].map((_, i) => (
      <button key={i} className={\`btn me-1 \${currentPage === i+1 ? "btn-primary" : "btn-light"}\`} onClick={() => setCurrentPage(i+1)}>{i+1}</button>
    ))}
    <button className="btn btn-secondary ms-2" disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>▶</button>
  </div>
)}`}
          </pre>
        </section>

      </div>
    </div>
  );
}

export default Reactpagination;
