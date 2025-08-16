import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaBook, FaCheckCircle, FaLink } from "react-icons/fa";

function Nextlocalstorage() {
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = async (email, password) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/Auth/login`, { email, password });

      if(response.data.statusCode === "200") {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("userName", response.data.userName);
        localStorage.setItem("userImageUrl", response.data.userImageUrl || "https://i.pravatar.cc/40");

        setEmail("");
        setPassword("");
        navigate("/dashboard");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    localStorage.removeItem("userImageUrl");
    navigate("/");
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "40px 20px" }}>
      <div className="container bg-white p-5 shadow-sm rounded">
        <h1 className="fw-bold mb-5 text-primary text-center">LocalStorage: Login & Logout Documentation</h1>

        {/* Step 1 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaCheckCircle /> Step 1: Handle Login</div>
          <pre style={preStyle}>
{`const handleLoginSubmit = async (email, password) => {
  try {
    const response = await axios.post(\`\${process.env.REACT_APP_BASE_URL}/Auth/login\`, { email, password });
    
    if(response.data.statusCode === "200") {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("userName", response.data.userName);
      localStorage.setItem("userImageUrl", response.data.userImageUrl || "https://i.pravatar.cc/40");

      setEmail('');
      setPassword('');
      navigate("/dashboard");
    } else {
      alert("Login failed");
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};`}
          </pre>
        </section>

        {/* Step 2 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaBook /> Step 2: Check Login Status</div>
          <pre style={preStyle}>
{`// Check if user is logged in
const isLoggedIn = !!localStorage.getItem("token"); // true if token exists, false otherwise`}
          </pre>
        </section>

        {/* Step 3 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaBook /> Step 3: Access Stored User Info</div>
          <pre style={preStyle}>
{`const userName = localStorage.getItem("userName");
const role = localStorage.getItem("role");
const token = localStorage.getItem("token");
const userImageUrl = localStorage.getItem("userImageUrl");`}
          </pre>
        </section>

        {/* Step 4 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaLink /> Step 4: Handle Logout</div>
          <pre style={preStyle}>
{`const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("userName");
  localStorage.removeItem("userImageUrl");
  navigate("/");
};`}
          </pre>
        </section>
      </div>
    </div>
  );
}

export default Nextlocalstorage;
