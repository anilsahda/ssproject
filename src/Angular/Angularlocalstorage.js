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
        <h1 className="fw-bold mb-5 text-primary text-center">LocalStorage: Login & Logout - Angular</h1>

        {/* Step 1: Handle Login */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 1: Handle Login
          </div>
          <pre style={preStyle}>{`handleLogin(email: string, password: string) {
  this.http.post<any>(\`\${environment.apiBaseUrl}/Auth/login\`, { email, password })
    .subscribe(res => {
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.role);
      localStorage.setItem("userName", res.userName);
      
      this.email = '';
      this.password = '';
      this.router.navigate(['/dashboard']);
    });
}`}</pre>
        </section>

        {/* Step 2: Access Stored User Info */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 2: Access Stored User Info
          </div>
          <pre style={preStyle}>{`const userName = localStorage.getItem("userName"); // Get user name
const role = localStorage.getItem("role");         // Get user role
const token = localStorage.getItem("token");       // Get JWT token`}</pre>
        </section>

        {/* Step 3: Handle Logout */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 3: Handle Logout
          </div>
          <pre style={preStyle}>{`handleLogout() {
  localStorage.removeItem("token");       // Remove JWT token
  localStorage.removeItem("role");        // Remove user role
  localStorage.removeItem("userName");    // Remove user name
  this.router.navigate(['/']);            // Redirect to home page
}`}</pre>
        </section>

      </div>
    </div>
  );
}

export default Angularlocalstorage;
