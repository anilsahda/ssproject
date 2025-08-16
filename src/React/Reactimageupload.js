import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Reactimageupload() {
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
        <h1 className="fw-bold mb-5 text-primary text-center">Image Upload - React</h1>

        {/* Step 1: State and Base URL */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: State and Base URL
          </div>
          <pre style={preStyle}>{`const [customers, setCustomers] = useState([]);
const [id, setId] = useState(0);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [mobile, setMobile] = useState("");
const [image, setImage] = useState(null);
const [existingImage, setExistingImage] = useState(null);
const fileInputRef = useRef();

const baseUrl = process.env.REACT_APP_BASE_URL;`}</pre>
        </section>

        {/* Step 2: Load Customers */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Load Customers
          </div>
          <pre style={preStyle}>{`useEffect(() => {
  loadCustomers();
}, []);

const loadCustomers = async () => {
  const res = await axios.get(\`\${baseUrl}/customers\`);
  setCustomers(res.data);
};`}</pre>
        </section>

        {/* Step 3: Image Handling */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 3: Image Handling
          </div>
          <pre style={preStyle}>{`const handleImageChange = (e) => setImage(e.target.files[0]);`}</pre>
        </section>

        {/* Step 4: Reset Form */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 4: Reset Form
          </div>
          <pre style={preStyle}>{`const resetForm = () => {
  setId(0);
  setName("");
  setEmail("");
  setMobile("");
  setImage(null);
  setExistingImage(null);
  if (fileInputRef.current) fileInputRef.current.value = null;
};`}</pre>
        </section>

        {/* Step 5: Add / Update Customer */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 5: Add or Update Customer
          </div>
          <pre style={preStyle}>{`const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("id", id);
  formData.append("name", name);
  formData.append("email", email);
  formData.append("mobile", mobile);

  if (image) formData.append("image", image);

  if (id && id > 0) {
    await axios.put(\`\${baseUrl}/Customers/UpdateCustomer\`, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    Swal.fire("Updated!", "Customer updated successfully.", "success");
  } else {
    await axios.post(\`\${baseUrl}/Customers/AddCustomer\`, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    Swal.fire("Added!", "Customer added successfully.", "success");
  }

  resetForm();
  loadCustomers();
};`}</pre>
        </section>

        {/* Step 6: Edit Customer */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 6: Edit Customer
          </div>
          <pre style={preStyle}>{`const handleEdit = (cus) => {
  setId(cus.id);
  setName(cus.name);
  setEmail(cus.email);
  setMobile(cus.mobile);
  setImage(null);
  setExistingImage(cus.image);
  if (fileInputRef.current) fileInputRef.current.value = null;
};`}</pre>
        </section>

        {/* Step 7: Delete Customer */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 7: Delete Customer
          </div>
          <pre style={preStyle}>{`const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!"
  });
  if (result.isConfirmed) {
    await axios.delete(\`\${baseUrl}/Customers/\${id}\`);
    Swal.fire("Deleted!", "Customer has been deleted.", "success");
    loadCustomers();
  }
};`}</pre>
        </section>

        {/* Step 8: Form JSX */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 8: Form JSX
          </div>
          <pre style={preStyle}>{`<form onSubmit={handleSubmit} encType="multipart/form-data">
  <!-- Inputs for Name, Email, Mobile -->
  <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
  <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
  <input type="text" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />

  <!-- File input for Image -->
  <!-- Show existing image preview when editing -->
  {id > 0 && existingImage && !image && (
    <img src={\`\${baseUrl}/Uploads/\${existingImage}\`} alt="Current" width={60} height={60} />
  )}
  <input type="file" ref={fileInputRef} accept="image/*" onChange={handleImageChange} />

  <button type="submit">{id > 0 ? "Update Customer" : "Add Customer"}</button>
  {id > 0 && <button type="button" onClick={resetForm}>Cancel</button>}
</form>`}</pre>
        </section>

        {/* Step 9: Customer Table JSX */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 9: Customer Table JSX
          </div>
          <pre style={preStyle}>{`<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Image</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {customers.map(cus => (
      <tr key={cus.id}>
        <td>{cus.name}</td>
        <td>{cus.email}</td>
        <td>
          {cus.image && (
            <img src={\`\${baseUrl}/Uploads/\${cus.image}\`} alt="Customer" width={60} height={60} />
          )}
        </td>
        <td>
          <button onClick={() => handleEdit(cus)}>Edit</button>
          <button onClick={() => handleDelete(cus.id)}>Delete</button>
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
            <li>🖼️ Image upload using FormData and file input</li>
            <li>📝 Form handling with controlled components</li>
            <li>⚡ Preview existing image while editing</li>
            <li>🔔 SweetAlert2 for notifications & confirmations</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Reactimageupload;
