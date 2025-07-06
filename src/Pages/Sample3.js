import { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

function Sample3() {
  const countries = [
    { id: 1, name: "India" },
    { id: 2, name: "USA" },
  ];

  const states = [
    { id: 1, name: "Maharashtra", countryId: 1 },
    { id: 2, name: "Gujarat", countryId: 1 },
    { id: 3, name: "California", countryId: 2 },
    { id: 4, name: "Texas", countryId: 2 },
  ];

  const [districts, setDistricts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newDistrictName, setNewDistrictName] = useState("");
  const [newCountryId, setNewCountryId] = useState(countries[0].id);
  const [newStateId, setNewStateId] = useState(
    states.find(s => s.countryId === countries[0].id)?.id || ""
  );

  const [editDistrictId, setEditDistrictId] = useState(null);
  const [editDistrictName, setEditDistrictName] = useState("");
  const [editCountryId, setEditCountryId] = useState(countries[0].id);
  const [editStateId, setEditStateId] = useState(
    states.find(s => s.countryId === countries[0].id)?.id || ""
  );

  const [viewDistrict, setViewDistrict] = useState(null);

  const handleAddDistrict = () => {
    if (newDistrictName.trim() !== "") {
      const newId = districts.length > 0 ? Math.max(...districts.map(d => d.id)) + 1 : 1;
      setDistricts([
        ...districts,
        { id: newId, name: newDistrictName, countryId: newCountryId, stateId: newStateId },
      ]);
      setNewDistrictName("");
      setNewCountryId(countries[0].id);
      setNewStateId(states.find(s => s.countryId === countries[0].id)?.id || "");
      setShowAddModal(false);
    }
  };

  const handleEditDistrict = (district) => {
    setEditDistrictId(district.id);
    setEditDistrictName(district.name);
    setEditCountryId(district.countryId);
    setEditStateId(district.stateId);
  };

  const handleUpdateDistrict = () => {
    if (editDistrictName.trim() !== "") {
      setDistricts(
        districts.map(d =>
          d.id === editDistrictId
            ? { ...d, name: editDistrictName, countryId: editCountryId, stateId: editStateId }
            : d
        )
      );
      setEditDistrictId(null);
      setEditDistrictName("");
      setEditCountryId(countries[0].id);
      setEditStateId(states.find(s => s.countryId === countries[0].id)?.id || "");
    }
  };

  const handleDeleteDistrict = (id) => {
    const district = districts.find(d => d.id === id);
    Swal.fire({
      title: `Delete "${district.name}"?`,
      text: "This cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#e74c3c",
      cancelButtonColor: "#95a5a6",
      width: "300px",
      padding: "1em",
    }).then(result => {
      if (result.isConfirmed) {
        setDistricts(districts.filter(d => d.id !== id));
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: `"${district.name}" deleted`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleExportCSV = () => {
    const csvRows = [
      "District,State,Country",
      ...districts
        .filter(d => d.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(d => {
          const stateName = states.find(s => s.id === d.stateId)?.name || "";
          const countryName = countries.find(c => c.id === d.countryId)?.name || "";
          return `${d.name},${stateName},${countryName}`;
        }),
    ];
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "districts.csv";
    link.click();
  };

  const filteredDistricts = districts.filter(d =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredDistricts.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedDistricts = filteredDistricts.slice(startIndex, startIndex + pageSize);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h4>🏙️ District Management</h4>
        <div className="d-flex gap-2">
          <button className="btn btn-primary btn-sm" onClick={() => setShowAddModal(true)}>
            + Add District
          </button>
          <button className="btn btn-success btn-sm" onClick={handleExportCSV}>
            📥 Export CSV
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Search districts..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          style={{ maxWidth: "250px" }}
        />
        <div>
          <label className="form-label me-2 mb-0">Items per page:</label>
          <select
            className="form-select form-select-sm d-inline-block w-auto"
            value={pageSize}
            onChange={(e) => {
              setPageSize(parseInt(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>District</th>
            <th>State</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedDistricts.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No districts found.</td>
            </tr>
          ) : (
            paginatedDistricts.map(d => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{states.find(s => s.id === d.stateId)?.name}</td>
                <td>{countries.find(c => c.id === d.countryId)?.name}</td>
<td>
  <button
    className="border-0 bg-transparent me-2"
    title="Edit"
    onClick={() => handleEditDistrict(d)}
  >
    <i className="bi bi-pencil-fill text-primary fs-5"></i>
  </button>
  <button
    className="border-0 bg-transparent me-2"
    title="Delete"
    onClick={() => handleDeleteDistrict(d.id)}
  >
    <i className="bi bi-trash-fill text-danger fs-5"></i>
  </button>
  <button
    className="border-0 bg-transparent"
    title="View"
    onClick={() => setViewDistrict(d)}
  >
    <i className="bi bi-eye-fill text-success fs-5"></i>
  </button>
</td>

              </tr>
            ))
          )}
        </tbody>
      </table>

      {totalPages > 1 && (
        <nav>
          <ul className="pagination pagination-sm justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
                <button className="page-link" onClick={() => setCurrentPage(page)}>
                  {page}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <>
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add District</h5>
                  <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
                </div>
                <div className="modal-body">
                  <label className="form-label">Country</label>
                  <select
                    className="form-select mb-2"
                    value={newCountryId}
                    onChange={(e) => {
                      const selected = parseInt(e.target.value);
                      setNewCountryId(selected);
                      setNewStateId(states.find(s => s.countryId === selected)?.id || "");
                    }}
                  >
                    {countries.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                  <label className="form-label">State</label>
                  <select
                    className="form-select mb-2"
                    value={newStateId}
                    onChange={(e) => setNewStateId(parseInt(e.target.value))}
                  >
                    {states.filter(s => s.countryId === newCountryId).map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="District Name"
                    value={newDistrictName}
                    onChange={(e) => setNewDistrictName(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                  <button className="btn btn-primary" onClick={handleAddDistrict}>Save</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}

      {/* Edit Modal */}
      {editDistrictId !== null && (
        <>
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit District</h5>
                  <button type="button" className="btn-close" onClick={() => setEditDistrictId(null)}></button>
                </div>
                <div className="modal-body">
                  <label className="form-label">Country</label>
                  <select
                    className="form-select mb-2"
                    value={editCountryId}
                    onChange={(e) => {
                      const selected = parseInt(e.target.value);
                      setEditCountryId(selected);
                      setEditStateId(states.find(s => s.countryId === selected)?.id || "");
                    }}
                  >
                    {countries.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                  <label className="form-label">State</label>
                  <select
                    className="form-select mb-2"
                    value={editStateId}
                    onChange={(e) => setEditStateId(parseInt(e.target.value))}
                  >
                    {states.filter(s => s.countryId === editCountryId).map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    className="form-control"
                    value={editDistrictName}
                    onChange={(e) => setEditDistrictName(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setEditDistrictId(null)}>Cancel</button>
                  <button className="btn btn-primary" onClick={handleUpdateDistrict}>Update</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}

      {/* View Modal */}
      {viewDistrict && (
        <>
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-success text-white">
                  <h5 className="modal-title">District Details</h5>
                  <button type="button" className="btn-close" onClick={() => setViewDistrict(null)}></button>
                </div>
                <div className="modal-body">
                  <p><strong>ID:</strong> {viewDistrict.id}</p>
                  <p><strong>Name:</strong> {viewDistrict.name}</p>
                  <p><strong>Country:</strong> {countries.find(c => c.id === viewDistrict.countryId)?.name}</p>
                  <p><strong>State:</strong> {states.find(s => s.id === viewDistrict.stateId)?.name}</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setViewDistrict(null)}>Close</button>
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

export default Sample3;
