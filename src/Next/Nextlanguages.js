import "bootstrap/dist/css/bootstrap.min.css";
import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

export default function Nextlanguages() {
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
          CRUD Operation - Next.js
        </h1>

        {/* Step 1: State and Base URL */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: State and Base URL
          </div>
          <pre style={preStyle}>{`const [languages, setLanguages] = useState([]);
const [id, setId] = useState(0);
const [name, setName] = useState("");
const baseUrl = \`\${process.env.NEXT_PUBLIC_BASE_URL}/Languages\`;`}</pre>
        </section>

        {/* Step 2: Load Languages */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Load Languages from API
          </div>
          <pre style={preStyle}>{`useEffect(() => {
  loadLanguages();
}, []);

const loadLanguages = () => {
  axios.get(baseUrl).then((res) => setLanguages(res.data));
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

        {/* Step 4: Save / Update Language */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 4: Add or Update Language
          </div>
          <pre style={preStyle}>{`const handleSave = () => {
  const data = { id, name };

  if (!name.trim()) {
    toast("warning", "Language name required");
    return;
  }

  if (id === 0) {
    axios.post(baseUrl, data).then(() => {
      toast("success", "Language added");
      resetForm();
      loadLanguages();
    });
  } else {
    axios.put(baseUrl, data).then(() => {
      toast("success", "Language updated");
      resetForm();
      loadLanguages();
    });
  }
};`}</pre>
        </section>

        {/* Step 5: Edit Language */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 5: Edit Language
          </div>
          <pre style={preStyle}>{`const handleEdit = (language) => {
  setId(language.id);
  setName(language.name);
};`}</pre>
        </section>

        {/* Step 6: Delete Language */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 6: Delete Language
          </div>
          <pre style={preStyle}>{`const handleDelete = (langId) => {
  Swal.fire({
    title: "Delete language?",
    text: "This cannot be undone!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes"
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(\`\${baseUrl}/\${langId}\`).then(() => {
        toast("success", "Language deleted");
        loadLanguages();
      });
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
};`}</pre>
        </section>

        {/* Step 8: Component JSX */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 8: Component JSX
          </div>
          <pre style={preStyle}>{`<div className="container mt-4">
  <h2>Manage Languages</h2>

  <div className="mb-3">
    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
  </div>

  <div className="mb-4">
    <button className="btn btn-primary me-2" onClick={handleSave}>Save Language</button>
    <button className="btn btn-secondary" onClick={resetForm}>Reset</button>
  </div>

  <table className="table table-bordered table-striped">
    <thead className="table-light">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {languages.map((lang) => (
        <tr key={lang.id}>
          <td>{lang.id}</td>
          <td>{lang.name}</td>
          <td>
            <button className="btn btn-warning" onClick={() => handleEdit(lang)}>Edit</button>
            <button className="btn btn-danger" onClick={() => handleDelete(lang.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>`}</pre>
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
            <li>📋 Dynamic table rendering of languages with Edit & Delete actions</li>
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

