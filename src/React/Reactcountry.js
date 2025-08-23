import "bootstrap/dist/css/bootstrap.min.css";
import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Reactcountry() {
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
          CRUD Operation - React
        </h1>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: State and Base URL
          </div>
          <pre style={preStyle}>{`const [countries, setCountries] = useState([]);
const [id, setId] = useState(0);
const [name, setName] = useState("");
const baseUrl = "https://localhost:7071/api";`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Load Countries from API
          </div>
          <pre style={preStyle}>{`useEffect(() => {
  loadCountries();
}, []);

const loadCountries = () => {
  axios.get(\`\${baseUrl}/countries\`).then((res) => setCountries(res.data));
};`}</pre>
        </section>

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

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 4: Add or Update Country
          </div>
          <pre style={preStyle}>{`const handleSave = () => {
  const data = { id, name };

  if (!name.trim()) {
    toast("warning", "Country name required");
    return;
  }

  if (id === 0) {
    axios.post(\`\${baseUrl}/countries\`, data).then(() => { toast("success", "Country added")});
  } else {
    axios.put(\`\${baseUrl}/countries\`, data).then(() => { toast("success", "Country updated")});
  }
  resetForm();
  loadCountries();
};`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 5: Edit Country
          </div>
          <pre style={preStyle}>{`const handleEdit = (country) => {
  setId(country.id);
  setName(country.name);
};`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 6: Delete Country
          </div>
          <pre style={preStyle}>{`const handleDelete = (countryId) => {
  Swal.fire({
    title: "Delete country?",
    text: "This cannot be undone!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes"
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(\`\${baseUrl}/countries/\${countryId}\`).then(()=>{toast("success","Country deleted")});
      loadCountries();
    }
  });
};`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 7: Reset Form
          </div>
          <pre style={preStyle}>{`const resetForm = () => {
  setId(0);
  setName("");
};`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 8: Component JSX
          </div>
          <pre style={preStyle}>{`<div>
  <h2>Manage Countries</h2>

  <div>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  </div>

  <div>
    <button onClick={handleSave}>Save Country</button>
    <button onClick={resetForm}>Reset</button>
  </div>

  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {countries.map((c) => (
        <tr key={c.id}>
          <td>{c.id}</td>
          <td>{c.name}</td>
          <td>
              <button onClick={() => handleEdit(c)}>Edit</button>
              <button onClick={() => handleDelete(c.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>`}</pre>
        </section>

        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 9: Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ Full CRUD operations with Axios (GET, POST, PUT, DELETE)</li>
            <li>🟡 SweetAlert2 used for toast notifications and delete confirmation</li>
            <li>📝 Form handling with controlled components</li>
            <li>📋 Dynamic table rendering of countries with Edit & Delete actions</li>
            <li>🆔 Only <code>Id</code> and <code>Name</code> fields are used</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

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

export default Reactcountry;