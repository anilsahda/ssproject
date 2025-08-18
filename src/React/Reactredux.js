import { FaBook, FaCheckCircle, FaLink } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

function Reactredux() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const auth = useSelector((state) => state.auth);

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
        <h1 className="fw-bold mb-5 text-primary text-center">Redux: Login & Logout</h1>

        {/* Step 1: Handle Login */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 1: Handle Login
          </div>
          <pre style={preStyle}>{`const handleLoginSubmit = async (email, pass) => {
const res=await axios.post(\`\${process.env.REACT_APP_BASE_URL}/Auth/login\`,{email,pass});
  if(res.data.statusCode === "200") {
    dispatch(loginUser({
      token: res.data.token,
      role: res.data.role,
      userName: res.data.userName
    }));

    setEmail('');
    setPassword('');
    navigate("/dashboard");
  } else {
    alert("Login failed");
  }
};`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 2: Access User Info
          </div>
          <pre style={preStyle}>{`const userName = auth.userName;         // Get user name from Redux
const role = auth.role;                 // Get user role
const token = auth.token;               // Get JWT token`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 3: Handle Logout
          </div>
          <pre style={preStyle}>{`const handleLogout = () => {
  dispatch(logoutUser());
  navigate("/");
};`}</pre>
        </section>

      </div>
    </div>
  );
}

export default Reactredux
