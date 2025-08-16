import { FaBook, FaCheckCircle, FaLink } from "react-icons/fa";

function Reactreducer() {
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
        <h1 className="fw-bold mb-5 text-primary text-center">Redux: Reducer Documentation</h1>

        {/* Step 1: Initial State */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaBook /> Step 1: Initial State</div>
          <pre style={preStyle}>
{`const initialState = {
  token: null,
  userName: null,
  role: null,
  userImageUrl: null
};`}
          </pre>
        </section>

        {/* Step 2: Reducer Function */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaCheckCircle /> Step 2: Reducer Function</div>
          <pre style={preStyle}>
{`import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload.token,
        userName: action.payload.userName,
        role: action.payload.role,
        userImageUrl: action.payload.userImageUrl
      };
    case LOGOUT_USER:
      return {
        ...state,
        token: null,
        userName: null,
        role: null,
        userImageUrl: null
      };
    default:
      return state;
  }
};`}
          </pre>
        </section>

        {/* Step 3: Action Creators */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaLink /> Step 3: Action Creators</div>
          <pre style={preStyle}>
{`export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});`}
          </pre>
        </section>

        {/* Step 4: Usage in Component */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaBook /> Step 4: Usage in Component</div>
          <pre style={preStyle}>
{`import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from './authReducer';

const dispatch = useDispatch();
const auth = useSelector(state => state.auth);

// Login
dispatch(loginUser({ token, userName, role, userImageUrl }));

// Logout
dispatch(logoutUser());`}
          </pre>
        </section>

      </div>
    </div>
  );
}

export default Reactreducer;
