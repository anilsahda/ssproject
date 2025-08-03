import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function User() {
  const [list, setList] = useState([]);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");    

  const [addUpdateModal, setAddUpdateModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

    const handleAddUpdate = () => {
      if (id === 0) {
        axios.post('https://localhost:7070/api/Users', { id: id, name: name, email: email, password: password });
      }
      else {
        axios.put('https://localhost:7070/api/Users', { id: id, name: name, email: email, password: password });
      }
      Swal.fire({ toast: true, position: "top-end", icon: "success", title: `Data saved successfully!`, showConfirmButton: false });
      setName("");
      setAddUpdateModal(false);
    }

    const handleDelete = (id) => {
        axios.delete(`https://localhost:7070/api/Users/${id}`);
        Swal.fire({ toast: true, position: "top-end", icon: "success", title: `Data deleted successfully!`, showConfirmButton: false });
    };

    const handleEdit = (obj) => {
        setId(obj.id);
        setName(obj.name);
        setEmail(obj.email);
        setPassword(obj.password);
        setAddUpdateModal(true);
    };

    const handleView = (obj) => {
        setId(obj.id);
        setName(obj.name);
        setEmail(obj.email);
        setPassword(obj.password);
        setViewModal(true);
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(new Blob([`Id, Name, Email, Password\n${list.map(c => `${c.id},${c.name},${c.email},${c.password}`).join("\n")}`], { type: "text/csv" }));
        link.download = "Users.csv";
        link.click();
    };

    useEffect(() => {
        axios.get('https://localhost:7070/api/Users').then((res) => setList(res.data));
    }, [handleAddUpdate, handleDelete]);


    const filteredList = list.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedList = filteredList.slice(startIndex, startIndex + pageSize);
    const totalPages = Math.ceil(filteredList.length / pageSize);

  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-2 gap-2">
        <h4>🌎 Users Management</h4>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={() => setAddUpdateModal(true)}><i className="bi bi-plus-lg"></i> Add User</button>
          <button className="btn btn-success" onClick={handleDownload} title="Export CSV">📥 Export CSV</button>
        </div>
      </div>

      <div className="d-flex justify-content-between mb-3 gap-2">
        <input type="text" className="form-control" placeholder="🔍 Search datas..." value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }} style={{ maxWidth: "250px" }} />
        <div>
          <label className="me-2">Items per page:</label>
          <select className="form-select d-inline-block w-auto" value={pageSize} onChange={(e) => { setPageSize(parseInt(e.target.value)); setCurrentPage(1); }}>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr><th>Id</th><th>Name</th><th>Email</th><th>Password</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {paginatedList.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.password}</td>
              <td>
                <button className="border-0 bg-transparent me-2" title="Edit" onClick={() => handleEdit(c)}><i className="bi bi-pencil-fill text-primary fs-5"></i></button>
                <button className="border-0 bg-transparent me-2" title="Delete" onClick={() => handleDelete(c.id)}><i className="bi bi-trash-fill text-danger fs-5"></i></button>
                <button className="border-0 bg-transparent" title="View" onClick={() => handleView(c)}><i className="bi bi-eye-fill text-success fs-5"></i></button>
              </td>
            </tr>
          ))}
          {paginatedList.length === 0 && (
            <tr><td colSpan="3" className="text-center">No data found.</td></tr>
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

      {addUpdateModal && (
        <>
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-primary text-white">
                  <h5 className="modal-title">Add User</h5>
                  <button type="button" className="btn-close" onClick={() => setAddUpdateModal(false)}></button>
                </div>
                <div className="modal-body">
                  <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="modal-body">
                  <input type="text" className="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="modal-body">
                  <input type="text" className="form-control" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>                                
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setAddUpdateModal(false)}>Cancel</button>
                  <button className="btn btn-primary" onClick={handleAddUpdate}>Save</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}

      {viewModal && (
        <>
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-primary text-white">
                  <h5 className="modal-title">Users Details</h5>
                  <button type="button" className="btn-close" onClick={() => setViewModal(false)}></button>
                </div>
                <div className="modal-body">
                  <p><strong>Id:</strong> {id}</p>
                  <p><strong>Name:</strong> {name}</p>
                  <p><strong>Email:</strong> {email}</p>
                  <p><strong>Password:</strong> {password}</p>                                    
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setViewModal(false)}>Close</button>
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
export default User;