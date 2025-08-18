import { FaBook, FaCheckCircle, FaLink } from "react-icons/fa";

function Angularlocalstorage() {
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
        <h1 className="fw-bold mb-5 text-primary text-center">LocalStorage: Login & Logout</h1>

        {/* Step 1: Handle Login */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 1: Handle Login
          </div>
          <pre style={preStyle}>{`const handleLoginSubmit = async (email, password) => {
    const response = await axios.post(url, { email, password });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("role", response.data.role);
    localStorage.setItem("userName", response.data.userName);

    setEmail('');
    setPassword('');
    navigate("/dashboard");
};`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 2: Access Stored User Info
          </div>
          <pre style={preStyle}>{`const userName = localStorage.getItem("userName");     // Get user name
const role = localStorage.getItem("role");             // Get user role
const token = localStorage.getItem("token");           // Get JWT token`}</pre>
        </section>

        {/* Step 4: Handle Logout */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 3: Handle Logout
          </div>
          <pre style={preStyle}>{`const handleLogout = () => {
  localStorage.removeItem("token");         // Remove JWT token
  localStorage.removeItem("role");          // Remove user role
  localStorage.removeItem("userName");      // Remove user name
  navigate("/");                            // Redirect to home page
};`}</pre>
        </section>

      </div>
    </div>
  );
}

export default Angularlocalstorage;