import { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import EmployeeViewModal from "./EmployeeViewModal";
import EmployeeModal from "./EmployeeModal";

function EmployeeManagement() {
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

  const districts = [
    { id: 1, name: "Mumbai", stateId: 1 },
    { id: 2, name: "Pune", stateId: 1 },
    { id: 3, name: "Houston", stateId: 4 },
  ];

  const qualificationsList = ["High School", "Bachelor's", "Master's", "PhD"];

  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);
  const [viewEmployee, setViewEmployee] = useState(null);

  const emptyForm = {
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    email: "",
    mobile: "",
    countryId: countries[0].id,
    stateId: states.find(s => s.countryId === countries[0].id)?.id || "",
    districtId: "",
    gender: "",
    religion: "",
    languages: [],
    qualifications: [],
    image: null,
  };

  const [formData, setFormData] = useState(emptyForm);

  const handleAddEmployee = () => {
    const newId = employees.length > 0 ? Math.max(...employees.map(e => e.id)) + 1 : 1;
    setEmployees([...employees, { id: newId, ...formData }]);
    setFormData(emptyForm);
    setShowAddModal(false);
  };

  const handleUpdateEmployee = () => {
    setEmployees(employees.map(e => e.id === editEmployee.id ? { ...formData, id: e.id } : e));
    setFormData(emptyForm);
    setEditEmployee(null);
  };

  const handleDeleteEmployee = (id) => {
    const emp = employees.find(e => e.id === id);
    Swal.fire({
      title: `Delete "${emp.firstName} ${emp.lastName}"?`,
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
        setEmployees(employees.filter(e => e.id !== id));
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: `"${emp.firstName}" deleted`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleExportCSV = () => {
    const csvRows = [
      "ID,First Name,Last Name,Email,Mobile,Country,State,District",
      ...employees
        .filter(e => `${e.firstName} ${e.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(e => {
          const country = countries.find(c => c.id === e.countryId)?.name || "";
          const state = states.find(s => s.id === e.stateId)?.name || "";
          const district = districts.find(d => d.id === e.districtId)?.name || "";
          return `${e.id},"${e.firstName}","${e.lastName}",${e.email},${e.mobile},${country},${state},${district}`;
        }),
    ];
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "employees.csv";
    link.click();
  };

  const filtered = employees.filter(e =>
    `${e.firstName} ${e.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginated = filtered.slice(startIndex, startIndex + pageSize);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h4>👤 Employee Management</h4>
        <div className="d-flex gap-2">
          <button className="btn btn-primary btn-sm" onClick={() => setShowAddModal(true)}>
            + Add Employee
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
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
          style={{ maxWidth: "250px" }}
        />
        <div>
          <label className="form-label me-2 mb-0">Items per page:</label>
          <select
            className="form-select form-select-sm d-inline-block w-auto"
            value={pageSize}
            onChange={(e) => { setPageSize(parseInt(e.target.value)); setCurrentPage(1); }}
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
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginated.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No employees found.</td>
            </tr>
          ) : paginated.map(e => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.firstName} {e.lastName}</td>
              <td>{e.email}</td>
              <td>{e.mobile}</td>
              <td>
                <button
                  className="border-0 bg-transparent me-2"
                  title="Edit"
                  onClick={() => { setFormData(e); setEditEmployee(e); }}
                >
                  <i className="bi bi-pencil-fill text-primary fs-5"></i>
                </button>
                <button
                  className="border-0 bg-transparent me-2"
                  title="Delete"
                  onClick={() => handleDeleteEmployee(e.id)}
                >
                  <i className="bi bi-trash-fill text-danger fs-5"></i>
                </button>
                <button
                  className="border-0 bg-transparent"
                  title="View"
                  onClick={() => setViewEmployee(e)}
                >
                  <i className="bi bi-eye-fill text-success fs-5"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <nav>
          <ul className="pagination pagination-sm justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}>Prev</button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
                <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}>Next</button>
            </li>
          </ul>
        </nav>
      )}

      {/* Modals */}
      {showAddModal && (
        <>
          <EmployeeModal
            title="Add Employee"
            formData={formData}
            setFormData={setFormData}
            onSave={handleAddEmployee}
            onCancel={() => setShowAddModal(false)}
            countries={countries}
            states={states}
            districts={districts}
            qualifications={qualificationsList}
          />
          <div className="modal-backdrop fade show"></div>
        </>
      )}
      {editEmployee && (
        <>
          <EmployeeModal
            title="Edit Employee"
            formData={formData}
            setFormData={setFormData}
            onSave={handleUpdateEmployee}
            onCancel={() => setEditEmployee(null)}
            countries={countries}
            states={states}
            districts={districts}
            qualifications={qualificationsList}
          />
          <div className="modal-backdrop fade show"></div>
        </>
      )}
      {viewEmployee && (
        <>
          <EmployeeViewModal employee={viewEmployee} onClose={() => setViewEmployee(null)} countries={countries} states={states} districts={districts} />
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  );
}

// 🔹 For brevity, I'll provide EmployeeModal and EmployeeViewModal separately.
// If you'd like, I will send those next.

export default EmployeeManagement;
