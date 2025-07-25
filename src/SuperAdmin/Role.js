import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Role() {
  const [roles, setRoles] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [name, setName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [editRoleId, setEditRoleId] = useState(null);
  const [editRoleName, setEditRoleName] = useState("");
  const [viewRole, setViewRole] = useState(null);

    useEffect(() => {
        axios.get('https://localhost:7070/api/Roles')
      .then((res) => setRoles(res.data))
    }, []);

  const handleAddRole = () => {
    if (name.trim() !== "") {
      const newId = roles.length > 0 ? Math.max(...roles.map(c => c.id)) + 1 : 1;
      setRoles([...roles, { id: newId, name: name }]);
      setName("");
      setShowAddModal(false);
    }
  };

  const handleDeleteRole = (id) => {
    const role = roles.find(c => c.id === id);
    Swal.fire({ title: `Delete "${role.name}"?`, text: "This cannot be undone.", icon: "warning", showCancelButton: true, confirmButtonText: "Delete", cancelButtonText: "Cancel", confirmButtonColor: "#e74c3c", cancelButtonColor: "#95a5a6",
    }).then((result) => {
      if (result.isConfirmed) {
        setRoles(roles.filter(c => c.id !== id));
        Swal.fire({ toast: true, position: "top-end", icon: "success", title: `"${role.name}" deleted`, showConfirmButton: false, timer: 1500 });
      }
    });
  };

  const handleEditRole = (role) => {
    setEditRoleId(role.id);
    setEditRoleName(role.name);
  };

  const handleUpdateRole = () => {
    if (editRoleName.trim() !== "") {
      setRoles(roles.map(c => c.id === editRoleId ? { ...c, name: editRoleName } : c));
      setEditRoleId(null);
      setEditRoleName("");
    }
  };

  const handleDownload = () => {
    const csv = roles.map(c => `${c.id},${c.name}`).join("\n");
    const blob = new Blob([`ID, Role\n${csv}`], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "roles.csv";
    link.click();
  };

  const filteredRoles = roles.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedRoles = filteredRoles.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filteredRoles.length / pageSize);

  return (
    <div className="container mt-4">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-2 gap-2">
        <h4 className="mb-0">🌎 Role Management</h4>
        <div className="d-flex gap-2">
          <button className="btn btn-primary btn-sm" onClick={() => setShowAddModal(true)}><i className="bi bi-plus-lg"></i> Add Role</button>
          <button className="btn btn-success btn-sm" onClick={handleDownload} title="Export CSV">📥 Export CSV</button>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
        <input type="text" className="form-control form-control-sm" placeholder="🔍 Search roles..." value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }} style={{ maxWidth: "250px" }} />
        <div>
          <label className="form-label me-2 mb-0">Items per page:</label>
          <select className="form-select form-select-sm d-inline-block w-auto" value={pageSize} onChange={(e) => { setPageSize(parseInt(e.target.value)); setCurrentPage(1); }}>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr><th>ID</th><th>Name</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {paginatedRoles.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>
                <button className="border-0 bg-transparent me-2" title="Edit" onClick={() => handleEditRole(c)}><i className="bi bi-pencil-fill text-primary fs-5"></i></button>
                <button className="border-0 bg-transparent me-2" title="Delete" onClick={() => handleDeleteRole(c.id)}><i className="bi bi-trash-fill text-danger fs-5"></i></button>
                <button className="border-0 bg-transparent" title="View" onClick={() => setViewRole(c)}><i className="bi bi-eye-fill text-success fs-5"></i></button>
              </td>
            </tr>
          ))}
          {paginatedRoles.length === 0 && (
            <tr><td colSpan="3" className="text-center">No roles found.</td></tr>
          )}
        </tbody>
      </table>

      <nav>
        <ul className="pagination pagination-sm justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
            </li>
          ))}
        </ul>
      </nav>

      {showAddModal && (
        <>
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Role</h5>
                  <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
                </div>
                <div className="modal-body">
                  <input type="text" className="form-control" placeholder="Role Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                  <button className="btn btn-primary" onClick={handleAddRole}>Save</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}

      {editRoleId !== null && (
        <>
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Role</h5>
                  <button type="button" className="btn-close" onClick={() => { setEditRoleId(null); setEditRoleName(""); }}></button>
                </div>
                <div className="modal-body">
                  <input type="text" className="form-control" value={editRoleName} onChange={(e) => setEditRoleName(e.target.value)} />
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => { setEditRoleId(null); setEditRoleName(""); }}>Cancel</button>
                  <button className="btn btn-primary" onClick={handleUpdateRole}>Update</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}

      {viewRole && (
        <>
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-success text-white">
                  <h5 className="modal-title">Role Details</h5>
                  <button type="button" className="btn-close" onClick={() => setViewRole(null)}></button>
                </div>
                <div className="modal-body">
                  <p><strong>ID:</strong> {viewRole.id}</p>
                  <p><strong>Name:</strong> {viewRole.name}</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setViewRole(null)}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  );
}
export default Role;
