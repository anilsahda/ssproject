import { useState } from "react";
import {
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
  FaPlus,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

function AuthenticationStatic() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activePage, setActivePage] = useState("Home");

  // Users Data
  const [users, setUsers] = useState([
    { id: 1, name: "Shivansh", email: "shivansh@gmail.com" },
    { id: 2, name: "Imran", email: "imran@gmail.com" },
    { id: 3, name: "Subhash", email: "subhash@gmail.com" },
  ]);

  // Roles Data
  const [roles, setRoles] = useState([
    { id: 1, roleName: "Super Admin" },
    { id: 2, roleName: "Admin" },
    { id: 3, roleName: "Customer" },
  ]);

  // User Roles Data
  const [userRoles, setUserRoles] = useState([
    { id: 1, userName: "Shivansh Kumar", roleName: "SuperAdmin" },
    { id: 2, userName: "Imran", roleName: "Admin" },
    { id: 3, userName: "Subhash", roleName: "Customer" },
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
    setEmail("");
    setPassword("");
    setActivePage("Users");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);
    setActivePage("Home");
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
    // USERS
    if (activePage === "Users") {
      if (modalType === "add") {
        setUsers([...users, { ...selectedItem, id: users.length + 1 }]);
      } else if (modalType === "edit") {
        setUsers(
          users.map((u) =>
            u.id === selectedItem.id ? selectedItem : u
          )
        );
      }
    }

    // ROLES
    if (activePage === "Roles") {
      if (modalType === "add") {
        setRoles([...roles, { ...selectedItem, id: roles.length + 1 }]);
      } else if (modalType === "edit") {
        setRoles(
          roles.map((r) =>
            r.id === selectedItem.id ? selectedItem : r
          )
        );
      }
    }

    // USER ROLES
    if (activePage === "User Role") {
      if (modalType === "add") {
        setUserRoles([
          ...userRoles,
          { ...selectedItem, id: userRoles.length + 1 },
        ]);
      } else if (modalType === "edit") {
        setUserRoles(
          userRoles.map((ur) =>
            ur.id === selectedItem.id ? selectedItem : ur
          )
        );
      }
    }

    setShowModal(false);
  };

  const handleDelete = (item) => {
    if (activePage === "Users") {
      setUsers(users.filter((u) => u.id !== item.id));
    }

    if (activePage === "Roles") {
      setRoles(roles.filter((r) => r.id !== item.id));
    }

    if (activePage === "User Role") {
      setUserRoles(userRoles.filter((ur) => ur.id !== item.id));
    }
  };

  const renderPage = () => {
    // PRE LOGIN
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
                marginBottom: "20px",
              }}
            />

            <h2>Welcome to MyCompany</h2>

            <p>
              This is the home page with some dummy content.
            </p>
          </div>
        );
      }

      if (activePage === "About") {
        return (
          <div>
            <h2>About Us</h2>

            <p>
              This is the About page.
            </p>
          </div>
        );
      }

      if (activePage === "Services") {
        return (
          <div>
            <h2>Our Services</h2>

            <p>
              This is the Services page.
            </p>
          </div>
        );
      }
    }

    // USERS PAGE
    if (activePage === "Users") {
      const filteredUsers = users.filter(
        (u) =>
          u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          u.email.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Users List</h3>

            <Button
              variant="success"
              onClick={() =>
                openModal("add", {
                  name: "",
                  email: "",
                })
              }
            >
              <FaPlus /> Add User
            </Button>
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
                    <FaEye
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      onClick={() => openModal("view", user)}
                    />

                    <FaEdit
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      onClick={() => openModal("edit", user)}
                    />

                    <FaTrash
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() => handleDelete(user)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    // ROLES PAGE
    if (activePage === "Roles") {
      const filteredRoles = roles.filter((r) =>
        r.roleName.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Roles List</h3>

            <Button
              variant="success"
              onClick={() =>
                openModal("add", {
                  roleName: "",
                })
              }
            >
              <FaPlus /> Add Role
            </Button>
          </div>

          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Role Name</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredRoles.map((role) => (
                <tr key={role.id}>
                  <td>{role.id}</td>
                  <td>{role.roleName}</td>

                  <td>
                    <FaEye
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      onClick={() => openModal("view", role)}
                    />

                    <FaEdit
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      onClick={() => openModal("edit", role)}
                    />

                    <FaTrash
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() => handleDelete(role)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    // USER ROLE PAGE
    if (activePage === "User Role") {
      const filteredUserRoles = userRoles.filter(
        (ur) =>
          ur.userName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          ur.roleName
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );

      return (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>User Role List</h3>

            <Button
              variant="success"
              onClick={() =>
                openModal("add", {
                  userName: "",
                  roleName: "",
                })
              }
            >
              <FaPlus /> Add User Role
            </Button>
          </div>

          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Role Name</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUserRoles.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.userName}</td>
                  <td>{item.roleName}</td>

                  <td>
                    <FaEye
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      onClick={() => openModal("view", item)}
                    />

                    <FaEdit
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      onClick={() => openModal("edit", item)}
                    />

                    <FaTrash
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() => handleDelete(item)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  // SIDEBAR
  const sidebarItems = isLoggedIn
    ? ["Users", "Roles", "User Role"]
    : ["Home", "About", "Services"];

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            My Shop
          </a>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              {!isLoggedIn &&
                ["Home", "About", "Services"].map((item) => (
                  <li key={item} className="nav-item mx-2">
                    <button
                      className="btn btn-link nav-link"
                      onClick={() => setActivePage(item)}
                    >
                      {item}
                    </button>
                  </li>
                ))}

              {!isLoggedIn && (
                <li className="nav-item mx-2">
                  <button
                    className="btn btn-outline-primary me-2"
                    onClick={() => setShowLogin(true)}
                  >
                    Login
                  </button>

                  <button className="btn btn-outline-danger me-2">
                    <FaGoogle />
                  </button>

                  <button className="btn btn-outline-primary">
                    <FaFacebook />
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* PRE LOGIN */}
      {!isLoggedIn && (
        <div
          style={{
            padding: "30px",
            backgroundColor: "#ecf0f1",
            minHeight: "80vh",
          }}
        >
          {renderPage()}
        </div>
      )}

      {/* LOGIN MODAL */}
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
            zIndex: 1000,
          }}
        >
          <div
            className="card p-5 shadow-lg position-relative"
            style={{
              maxWidth: "450px",
              width: "100%",
              borderRadius: "15px",
            }}
          >
            <button
              onClick={() => setShowLogin(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                border: "none",
                background: "transparent",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              &times;
            </button>

            <h2 className="text-center mb-4">Login</h2>

            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3">
                <label>Email</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label>Password</label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 mb-3"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* POST LOGIN */}
      {isLoggedIn && (
        <div>
          {/* HEADER */}
          <div
            style={{
              width: "100%",
              backgroundColor: "#fff",
              padding: "10px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              position: "sticky",
              top: 0,
              zIndex: 1000,
            }}
          >
            <h4 className="m-0">My Shop</h4>

            <div className="d-flex align-items-center gap-3">
              <div className="input-group">
                <span className="input-group-text">
                  <FaSearch />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>

              <button
                className="btn btn-outline-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              minHeight: "calc(100vh - 60px)",
            }}
          >
            {/* SIDEBAR */}
            <div
              style={{
                width: "220px",
                backgroundColor: "#2c3e50",
                color: "white",
                padding: "20px",
              }}
            >
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
                      backgroundColor:
                        activePage === item
                          ? "#34495e"
                          : "transparent",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTENT */}
            <div
              style={{
                flex: 1,
                padding: "30px",
                backgroundColor: "#ecf0f1",
              }}
            >
              {renderPage()}
            </div>
          </div>
        </div>
      )}

      {/* MODAL */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "view"
              ? "View"
              : modalType === "edit"
              ? "Edit"
              : "Add"}{" "}
            {activePage}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* USERS */}
          {activePage === "Users" && (
            <>
              <label>Name</label>

              <input
                type="text"
                className="form-control mb-3"
                value={selectedItem?.name || ""}
                onChange={(e) =>
                  setSelectedItem({
                    ...selectedItem,
                    name: e.target.value,
                  })
                }
                disabled={modalType === "view"}
              />

              <label>Email</label>

              <input
                type="text"
                className="form-control"
                value={selectedItem?.email || ""}
                onChange={(e) =>
                  setSelectedItem({
                    ...selectedItem,
                    email: e.target.value,
                  })
                }
                disabled={modalType === "view"}
              />
            </>
          )}

          {/* ROLES */}
          {activePage === "Roles" && (
            <>
              <label>Role Name</label>

              <input
                type="text"
                className="form-control"
                value={selectedItem?.roleName || ""}
                onChange={(e) =>
                  setSelectedItem({
                    ...selectedItem,
                    roleName: e.target.value,
                  })
                }
                disabled={modalType === "view"}
              />
            </>
          )}

          {/* USER ROLE */}
          {activePage === "User Role" && (
            <>
              <label>User Name</label>

              <input
                type="text"
                className="form-control mb-3"
                value={selectedItem?.userName || ""}
                onChange={(e) =>
                  setSelectedItem({
                    ...selectedItem,
                    userName: e.target.value,
                  })
                }
                disabled={modalType === "view"}
              />

              <label>Role Name</label>

              <input
                type="text"
                className="form-control"
                value={selectedItem?.roleName || ""}
                onChange={(e) =>
                  setSelectedItem({
                    ...selectedItem,
                    roleName: e.target.value,
                  })
                }
                disabled={modalType === "view"}
              />
            </>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>

          {modalType !== "view" && (
            <Button
              variant="primary"
              onClick={handleSave}
            >
              Save
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AuthenticationStatic;