import { FaCheckCircle, FaLink } from "react-icons/fa";

function Nextzustand() {
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
        <h1 className="fw-bold mb-5 text-primary text-center">Zustand: Login & Logout Documentation</h1>

        {/* Step 1: Create Auth Store */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaCheckCircle /> Step 1: Create Auth Store</div>
          <pre style={preStyle}>
{`import create from 'zustand';

const useAuthStore = create((set) => ({
  token: null,
  userName: null,
  role: null,
  login: (data) => set({
    token: data.token,
    userName: data.userName,
    role: data.role
  }),
  logout: () => set({
    token: null,
    userName: null,
    role: null
  }),
}));

export default useAuthStore;`}
          </pre>
        </section>

        {/* Step 2: Login Function */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaLink /> Step 2: Login Function</div>
          <pre style={preStyle}>
{`import useAuthStore from './authStore';
import axios from 'axios';

const { login } = useAuthStore();

const handleLoginSubmit = async (email, password) => {
  try {
    const response = await axios.post(\`\${process.env.REACT_APP_BASE_URL}/Auth/login\`, { email, password });
    if(response.data.statusCode === "200") {
      login({
        token: response.data.token,
        userName: response.data.userName,
        role: response.data.role
      });
    } else {
      alert("Login failed");
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};`}
          </pre>
        </section>

        {/* Step 3: Logout Function */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaCheckCircle /> Step 3: Logout Function</div>
          <pre style={preStyle}>
{`import useAuthStore from './authStore';

const { logout } = useAuthStore();

const handleLogout = () => {
  logout();  // Clear user info from Zustand store
};`}
          </pre>
        </section>

        {/* Step 4: Access Auth State */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaLink /> Step 4: Access Auth State</div>
          <pre style={preStyle}>
{`import useAuthStore from './authStore';

function Profile() {
  const { token, userName, role } = useAuthStore();

  return (
    <div>
      {token ? (
        <div>
          <h3>Welcome, {userName}</h3>
          <p>Role: {role}</p>
        </div>
      ) : (
        <p>Please login to continue</p>
      )}
    </div>
  );
}

export default Profile;`}
          </pre>
        </section>
      </div>
    </div>
  );
}

export default Nextzustand;
