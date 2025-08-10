import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Crud() {
  const [list, setList] = useState([]);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  const [addUpdateModal, setAddUpdateModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    setList([{ id: 1, name: "India" }, { id: 2, name: "USA" }]);
  }, []);

  const handleAddUpdate = () => {
    if (name.trim() === "") return;

    if (id === 0) {
      const newId = list.length > 0 ? Math.max(...list.map((c) => c.id)) + 1 : 1;
      setList([...list, { id: newId, name }]);
    } else {
      setList(list.map((c) => (c.id === id ? { id, name } : c)));
    }

    Swal.fire({ toast: true, position: "top-end", icon: "success", title: `Data saved successfully!`, showConfirmButton: false, timer: 1500 });
    setId(0);
    setName("");
    setAddUpdateModal(false);
  };

  const handleDelete = (id) => {
    const country = list.find((c) => c.id === id);
    Swal.fire({ title: `Delete "${country.name}"?`, text: "This cannot be undone.", icon: "warning", showCancelButton: true, confirmButtonText: "Delete", cancelButtonText: "Cancel", confirmButtonColor: "#e74c3c", cancelButtonColor: "#95a5a6" }).then((result) => {
      if (result.isConfirmed) {
        setList(list.filter((c) => c.id !== id));
        Swal.fire({ toast: true, position: "top-end", icon: "success", title: `"${country.name}" deleted`, showConfirmButton: false, timer: 1500 });
      }
    });
  };

  const handleEdit = (obj) => {
    setId(obj.id);
    setName(obj.name);
    setAddUpdateModal(true);
  };

  const handleView = (obj) => {
    setId(obj.id);
    setName(obj.name);
    setViewModal(true);
  };

  const handleDownload = () => {
    const csv = list.map((c) => `${c.id},${c.name}`).join("\n");
    const blob = new Blob([`Id,Country\n${csv}`], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "countries.csv";
    link.click();
  };

  const filteredList = list.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedList = filteredList.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filteredList.length / pageSize);

  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-2 gap-2">
        <h4>🌎 Country Management</h4>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={() => setAddUpdateModal(true)}><i className="bi bi-plus-lg"></i> Add Country</button>
          <button className="btn btn-success" onClick={handleDownload} title="Export CSV">📥 Export CSV</button>
        </div>
      </div>

      <div className="d-flex justify-content-between mb-3 gap-2">
        <input type="text" className="form-control" placeholder="🔍 Search..." value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }} style={{ maxWidth: "250px" }} />
        <div>
          <label className="me-2">Items per page:</label>
          <select className="form-select d-inline-block w-auto" value={pageSize} onChange={(e) => { setPageSize(parseInt(e.target.value)); setCurrentPage(1)}}>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>Id</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedList.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td><button className="border-0 bg-transparent me-2" title="Edit" onClick={() => handleEdit(c)}><i className="bi bi-pencil-fill text-primary fs-5"></i></button>
                  <button className="border-0 bg-transparent me-2" title="Delete" onClick={() => handleDelete(c.id)}><i className="bi bi-trash-fill text-danger fs-5"></i></button>
                <button className="border-0 bg-transparent" title="View" onClick={() => handleView(c)}><i className="bi bi-eye-fill text-success fs-5"></i></button>
              </td>
            </tr>
          ))}
          {paginatedList.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center">No data found.</td>
            </tr>
          )}
        </tbody>
      </table>

      <nav>
        <ul className="pagination pagination-sm justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
                  <h5 className="modal-title">{id === 0 ? "Add Country" : "Edit Country"}</h5>
                  <button type="button" className="btn-close" onClick={() => setAddUpdateModal(false)}></button>
                </div>
                <div className="modal-body">
                  <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
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
                  <h5 className="modal-title">Country Details</h5>
                  <button type="button" className="btn-close" onClick={() => setViewModal(false)}></button>
                </div>
                <div className="modal-body">
                  <p><strong>Id:</strong> {id}</p>
                  <p><strong>Name:</strong> {name}</p>
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

export default Crud;
