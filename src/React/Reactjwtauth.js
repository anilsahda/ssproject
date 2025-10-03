import { FaBook, FaLink, FaCheckCircle } from "react-icons/fa";

function Reactjwtauth() {
  const sectionHeaderStyle = {
    borderBottom: "2px solid #007bff",
    paddingBottom: "5px",
    marginBottom: "5px",
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
    padding: "5px",
    borderRadius: "5px",
    overflowX: "auto",
    whiteSpace: "pre",
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "5px 5px" }}>
      <div className="container bg-white p-5 shadow-sm rounded">
        <h1 className="fw-bold mb-5 text-primary text-center">Authentication</h1>

        {/* Step 1: State Management */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: State Management
          </div>
          <pre style={preStyle}>{`const [showLogin, setShowLogin] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();`}</pre>
        </section>

        {/* Step 2: Handle Login */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 3: Handle Login
          </div>
          <pre style={preStyle}>{`const handleLoginSubmit = async (e) => {
  e.preventDefault();
  const response = await axios.post(\`\${process.env.REACT_APP_BASE_URL}/Auth/login\`,{email,password});
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("role", response.data.role);
    localStorage.setItem("userName", response.data.userName);

    setEmail('');
    setPassword('');
    navigate("/dashboard");
};`}</pre>
        </section>

        {/* Step 4: Handle Logout */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 4: Handle Logout
          </div>
          <pre style={preStyle}>{`const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("userName");
  navigate("/");
};`}</pre>
        </section>

{/* Step 5: Login Modal */}
<section className="mb-5">
  <div style={sectionHeaderStyle}>
    <FaBook /> Step 6: Login Modal
  </div>
  <pre style={preStyle}>{`<div className="modal d-block" tabIndex="-1" onClick={() => setShowLogin(false)}>
    <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content shadow rounded-3">
        <div className="modal-header bg-primary text-white">
          <h5 className="modal-title">Login</h5>
          <button className="btn-close" onClick={() => setShowLogin(false)}></button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
             <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="d-flex justify-content-center gap-2 mb-3">
              <button className="btn btn-outline-danger btn-sm"><FaGoogle /></button>
              <button className="btn btn-outline-primary btn-sm"><FaFacebookF /></button>
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
`}</pre>
</section>


        {/* Step 6: Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 8: Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ JWT Authentication with Axios</li>
            <li>🔐 Login & Logout</li>
            <li>🌐 Social Login (Google, Facebook)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Reactjwtauth;
