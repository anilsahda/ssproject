import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Sample1 from './Pages/Sample1';
import Sample2 from './Pages/Sample2';
import Sample3 from './Pages/Sample3';
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard';
import Sample4 from './Pages/Sample4';
import { useEffect, useState } from 'react';
import Role from './SuperAdmin/Role';
import User from './SuperAdmin/User';
import UserRole from './SuperAdmin/UserRole';
import SuperHeader from './Components/SuperHeader';

function Sidebar() {
  const location = useLocation();
  const [role, setRole] = useState(null);

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, [location]);

  return (
    <div className="bg-dark text-light vh-100" style={{ width: "250px" }}>
      <div className="p-3">
        <ul className="nav nav-pills flex-column gap-2">
          {role === "Super Admin" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/role" className={`nav-link d-flex align-items-center ${location.pathname === "/role" ? "active" : "text-light"}`}>
                  <i className="bi bi-shield-lock me-2"></i> Role
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className={`nav-link d-flex align-items-center ${location.pathname === "/user" ? "active" : "text-light"}`}>
                  <i className="bi bi-people-fill me-2"></i> User
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/userrole" className={`nav-link d-flex align-items-center ${location.pathname === "/userrole" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> User Role
                </Link>
              </li>
            </>
          )}

          {role === "Admin" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/society" className={`nav-link d-flex align-items-center ${location.pathname === "/society" ? "active" : "text-light"}`}>
                  <i className="bi bi-buildings me-2"></i> Add Society
                </Link>
              </li>
            </>
          )}

          {role === "Owner" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/house" className={`nav-link d-flex align-items-center ${location.pathname === "/house" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Add House
                </Link>
              </li>
            </>
          )}
        </ul>

      </div>
    </div>
  );
}

function App() {
  const location = useLocation();
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [location]);

  return (
    <>
      <SuperHeader />      
      <Header />
      <div className="d-flex">
        {token && <Sidebar />}
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sample1" element={<Sample1 />} />
            <Route path="/sample2" element={<Sample2 />} />
            <Route path="/sample3" element={<Sample3 />} />
            <Route path="/sample4" element={<Sample4 />} />
            <Route path="/role" element={<Role />} />
            <Route path="/user" element={<User />} />
            <Route path="/userrole" element={<UserRole />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
