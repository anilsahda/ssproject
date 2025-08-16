import { FaBook, FaCheckCircle, FaLink } from "react-icons/fa";

function Reactlocalstorage() {
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
  try {
    const response = await axios.post(\`\${process.env.REACT_APP_BASE_URL}/Auth/login\`, { email, password });
    
    if(response.data.statusCode === "200") {
      // Store JWT token and user info in localStorage
      localStorage.setItem("token", response.data.token);          // JWT token
      localStorage.setItem("role", response.data.role);            // User role
      localStorage.setItem("userName", response.data.userName);    // User name
      localStorage.setItem("userImageUrl", response.data.userImageUrl || "https://i.pravatar.cc/40"); // Profile image

      // Clear form or redirect
      setEmail('');
      setPassword('');
      navigate("/dashboard");
    } else {
      alert("Login failed");
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};`}</pre>
        </section>

        {/* Step 2: Check Login Status */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 2: Check Login Status
          </div>
          <pre style={preStyle}>{`// Check if user is logged in
const isLoggedIn = !!localStorage.getItem("token"); // true if token exists, false otherwise`}</pre>
        </section>

        {/* Step 3: Access Stored User Info */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 3: Access Stored User Info
          </div>
          <pre style={preStyle}>{`const userName = localStorage.getItem("userName");   // Get user name
const role = localStorage.getItem("role");             // Get user role
const token = localStorage.getItem("token");           // Get JWT token
const userImageUrl = localStorage.getItem("userImageUrl"); // Get profile image URL`}</pre>
        </section>

        {/* Step 4: Handle Logout */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 4: Handle Logout
          </div>
          <pre style={preStyle}>{`const handleLogout = () => {
  localStorage.removeItem("token");         // Remove JWT token
  localStorage.removeItem("role");          // Remove user role
  localStorage.removeItem("userName");      // Remove user name
  localStorage.removeItem("userImageUrl");  // Remove profile image
  navigate("/");                            // Redirect to login or home page
};`}</pre>
        </section>

      </div>
    </div>
  );
}

export default Reactlocalstorage;
