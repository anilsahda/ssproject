import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Dashboard from './BasicFullstack/Dashboard';
import { useEffect, useState } from 'react';
import Role from './SuperAdmin/Role';
import User from './SuperAdmin/User';
import UserRole from './SuperAdmin/UserRole';
import SuperHeader from './Components/SuperHeader';
import Sidebar from './Components/Sidebar';
import BasicCrud from './BasicFullstack/BasicCrud';
import Dropdown from './BasicFullstack/Dropdown';
import Cascadingddl from './BasicFullstack/Cascadingddl';
import Multiselectddl from './BasicFullstack/Multiselectddl';

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
            <Route path="/basiccrud" element={<BasicCrud />} />
            <Route path="/dropdown" element={<Dropdown />} />
            <Route path="/cascadingddl" element={<Cascadingddl />} />
            <Route path="/multiselectddl" element={<Multiselectddl />} />
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
