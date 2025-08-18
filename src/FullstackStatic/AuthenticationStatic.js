import { useState } from "react";
import { FaSearch, FaEye, FaEdit, FaTrash, FaPlus, FaGoogle, FaFacebook } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

function AuthenticationStatic() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activePage, setActivePage] = useState('Home');

  // Users & Orders data
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  ]);

  const [orders, setOrders] = useState([
    { id: 101, product: "Laptop", quantity: 2, price: "$2000" },
    { id: 102, product: "Phone", quantity: 5, price: "$2500" },
    { id: 103, product: "Headphones", quantity: 10, price: "$500" },
  ]);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); 
  const [selectedItem, setSelectedItem] = useState(null);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "dummy-token");
    setIsLoggedIn(true);
    setShowLogin(false); 
    setEmail('');
    setPassword('');
    setActivePage("Users"); // Default page after login
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setActivePage("Home"); // Go back to pre-login
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const openModal = (type, item = null) => {
    setModalType(type);
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleSave = () => {
    if (modalType === "add") {
      if (activePage === "Users") setUsers([...users, { ...selectedItem, id: users.length + 1 }]);
      else if (activePage === "Orders") setOrders([...orders, { ...selectedItem, id: orders.length + 101 }]);
    } else if (modalType === "edit") {
      if (activePage === "Users") setUsers(users.map(u => u.id === selectedItem.id ? selectedItem : u));
      else if (activePage === "Orders") setOrders(orders.map(o => o.id === selectedItem.id ? selectedItem : o));
    }
    setShowModal(false);
  };

  const handleDelete = (item) => {
    if (activePage === "Users") setUsers(users.filter(u => u.id !== item.id));
    else if (activePage === "Orders") setOrders(orders.filter(o => o.id !== item.id));
  };

  const renderPage = () => {
    // Pre-login pages
    if (!isLoggedIn) {
      if (activePage === "Home") {
        return (
          <div>
            <img 
              src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80" 
              alt="Banner" 
              style={{ 
                width: "100%", 
                height: "50vh", 
                objectFit: "cover", 
                borderRadius: "10px", 
                marginBottom: "20px" 
              }} 
            />
            <h2>Welcome to MyCompany</h2>
            <p>This is the home page with some dummy content. Add more details about your company here.</p>
          </div>
        );
      } else if (activePage === "About") {
        return (
          <div>
            <h2>About Us</h2>
            <p>This is the About page. Add some information about your company, mission, and team here.</p>
          </div>
        );
      } else if (activePage === "Services") {
        return (
          <div>
            <h2>Our Services</h2>
            <p>This is the Services page. Describe the services your company offers here.</p>
          </div>
        );
      }
    }

    // Post-login pages
    if (activePage === "Users") {
      const filteredUsers = users.filter(u =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Users List</h3>
            <Button variant="success" onClick={() => openModal("add", { name: "", email: "" })}><FaPlus /> Add User</Button>
          </div>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <FaEye style={{ cursor: "pointer", marginRight: "10px" }} title="View" onClick={() => openModal("view", user)} />
                    <FaEdit style={{ cursor: "pointer", marginRight: "10px" }} title="Edit" onClick={() => openModal("edit", user)} />
                    <FaTrash style={{ cursor: "pointer", color: "red" }} title="Delete" onClick={() => handleDelete(user)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else if (activePage === "Orders") {
      const filteredOrders = orders.filter(o =>
        o.product.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Orders List</h3>
            <Button variant="success" onClick={() => openModal("add", { product: "", quantity: 1, price: "" })}><FaPlus /> Add Order</Button>
          </div>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Order ID</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.product}</td>
                  <td>{order.quantity}</td>
                  <td>{order.price}</td>
                  <td>
                    <FaEye style={{ cursor: "pointer", marginRight: "10px" }} title="View" onClick={() => openModal("view", order)} />
                    <FaEdit style={{ cursor: "pointer", marginRight: "10px" }} title="Edit" onClick={() => openModal("edit", order)} />
                    <FaTrash style={{ cursor: "pointer", color: "red" }} title="Delete" onClick={() => handleDelete(order)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  // Sidebar items based on login state
  const sidebarItems = isLoggedIn ? ["Users", "Orders"] : ["Home", "About", "Services"];

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">MyCompany</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              {!isLoggedIn && ["Home", "About", "Services"].map(item => (
                <li key={item} className="nav-item mx-2">
                  <button className="btn btn-link nav-link" onClick={() => setActivePage(item)}>{item}</button>
                </li>
              ))}
              {!isLoggedIn && (
                <li className="nav-item mx-2">
                  <button className="btn btn-outline-primary me-2" onClick={() => setShowLogin(true)}>Login</button>
                  <button className="btn btn-outline-danger me-2"><FaGoogle /></button>
                  <button className="btn btn-outline-primary"><FaFacebook /></button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Pre-login content */}
      {!isLoggedIn && (
        <div style={{ padding: "30px", backgroundColor: "#ecf0f1", minHeight: "80vh" }}>
          {renderPage()}
        </div>
      )}

      {/* Login Popup */}
      {showLogin && !isLoggedIn && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1000
          }}
        >
          <div
            className="card p-5 shadow-lg position-relative"
            style={{ maxWidth: '450px', width: '100%', borderRadius: '15px' }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowLogin(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                border: "none",
                background: "transparent",
                fontSize: "20px",
                cursor: "pointer"
              }}
            >
              &times;
            </button>

            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
            </form>

            <div className="text-center">
              <button className="btn btn-outline-danger me-2"><FaGoogle /></button>
              <button className="btn btn-outline-primary"><FaFacebook /></button>
            </div>
          </div>
        </div>
      )}

      {/* Post-login dashboard */}
      {isLoggedIn && (
        <div>
          {/* Top Header with search + logout */}
          <div style={{
            width: "100%",
            backgroundColor: "#fff",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            position: "sticky",
            top: 0,
            zIndex: 1000
          }}>
            <h4 className="m-0">My Company</h4>
            <div className="d-flex align-items-center gap-3">
              <div className="input-group">
                <span className="input-group-text"><FaSearch /></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>

          <div style={{ display: "flex", minHeight: "calc(100vh - 60px)" }}>
            {/* Sidebar */}
            <div style={{
              width: "220px",
              backgroundColor: "#2c3e50",
              color: "white",
              padding: "20px",
              minHeight: "calc(100vh - 60px)"
            }}>
              <h3 className="mb-4">Dashboard</h3>
              <ul className="list-unstyled">
                {sidebarItems.map((item) => (
                  <li
                    key={item}
                    onClick={() => setActivePage(item)}
                    style={{
                      cursor: "pointer",
                      padding: "8px 12px",
                      borderRadius: "5px",
                      backgroundColor: activePage === item ? "#34495e" : "transparent"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#34495e"}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = activePage === item ? "#34495e" : "transparent"}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: "30px", backgroundColor: "#ecf0f1" }}>
              {renderPage()}
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType === "view" ? "View" : modalType === "edit" ? "Edit" : "Add"} {activePage.slice(0, -1)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {activePage === "Users" ? (
            <>
              <label>Name</label>
              <input
                type="text"
                className="form-control mb-3"
                value={selectedItem?.name || ""}
                onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })}
                disabled={modalType === "view"}
              />
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                value={selectedItem?.email || ""}
                onChange={(e) => setSelectedItem({ ...selectedItem, email: e.target.value })}
                disabled={modalType === "view"}
              />
            </>
          ) : (
            <>
              <label>Product</label>
              <input
                type="text"
                className="form-control mb-3"
                value={selectedItem?.product || ""}
                onChange={(e) => setSelectedItem({ ...selectedItem, product: e.target.value })}
                disabled={modalType === "view"}
              />
              <label>Quantity</label>
              <input
                type="number"
                className="form-control mb-3"
                value={selectedItem?.quantity || 1}
                onChange={(e) => setSelectedItem({ ...selectedItem, quantity: e.target.value })}
                disabled={modalType === "view"}
              />
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                value={selectedItem?.price || ""}
                onChange={(e) => setSelectedItem({ ...selectedItem, price: e.target.value })}
                disabled={modalType === "view"}
              />
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          {modalType !== "view" && <Button variant="primary" onClick={handleSave}>Save</Button>}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AuthenticationStatic;
