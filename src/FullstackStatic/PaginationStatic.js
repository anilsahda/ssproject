import { useState } from "react";
import Swal from "sweetalert2";

function PaginationStatic() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", countryId: 1, stateId: 1, districtId: 1, genderId: 1 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", countryId: 1, stateId: 2, districtId: 2, genderId: 2 },
    { id: 3, name: "Mike Ross", email: "mike@example.com", countryId: 2, stateId: 3, districtId: 3, genderId: 1 },
    { id: 4, name: "Rachel Zane", email: "rachel@example.com", countryId: 2, stateId: 3, districtId: 2, genderId: 2 },
    { id: 5, name: "Harvey Specter", email: "harvey@example.com", countryId: 3, stateId: 4, districtId: 1, genderId: 1 },
  ]);

  const countries = [
    { id: 1, name: "USA" },
    { id: 2, name: "Canada" },
    { id: 3, name: "UK" },
  ];

  const states = [
    { id: 1, name: "California" },
    { id: 2, name: "Texas" },
    { id: 3, name: "Ontario" },
    { id: 4, name: "London" },
  ];

  const districts = [
    { id: 1, name: "District A" },
    { id: 2, name: "District B" },
    { id: 3, name: "District C" },
  ];

  const genders = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Other" },
  ];

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [genderId, setGenderId] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const totalRecords = students.length;
  const totalPages = Math.ceil(totalRecords / pageSize);
  const paginatedStudents = students.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const resetForm = () => {
    setId(0);
    setName("");
    setEmail("");
    setMobile("");
    setCountryId("");
    setStateId("");
    setDistrictId("");
    setGenderId(0);
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: id || students.length + 1,
      name,
      email,
      mobile,
      countryId: countryId ? Number(countryId) : null,
      stateId: stateId ? Number(stateId) : null,
      districtId: districtId ? Number(districtId) : null,
      genderId: genderId ? Number(genderId) : null,
    };

    if (id && id > 0) {
      setStudents(students.map((s) => (s.id === id ? newStudent : s)));
      Swal.fire("Updated!", "Student record has been updated.", "success");
    } else {
      setStudents([...students, newStudent]);
      Swal.fire("Added!", "New student has been added.", "success");
    }

    resetForm();
  };

  const handleEdit = (std) => {
    setId(std.id);
    setName(std.name || "");
    setEmail(std.email || "");
    setMobile(std.mobile || "");
    setCountryId(std.countryId || "");
    setStateId(std.stateId || "");
    setDistrictId(std.districtId || "");
    setGenderId(std.genderId || 0);
    setShowForm(true);
  };

  const handleDelete = (studentId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setStudents(students.filter((s) => s.id !== studentId));
        Swal.fire("Deleted!", "Student has been deleted.", "success");
      }
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      return;
    }
    const filtered = students.filter(
      (s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setStudents(filtered);
    setCurrentPage(1);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-primary">Student Management</h2>
      <button className="btn btn-success mb-3" onClick={() => setShowForm(true)}> + Add Student</button>

      <div className="mb-3 d-flex justify-content-between align-items-center">
        <form onSubmit={handleSearch} className="mb-4 d-flex gap-2">
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="form-control" placeholder="Search by name or email" />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>

        <div>
          <label className="me-2"><strong>Records per page:</strong></label>
          <select className="form-select d-inline-block w-auto" value={pageSize} onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1)}}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>

      {showForm && (
        <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content p-3">
              <div className="modal-header">
                <h5 className="modal-title">{id ? "Edit Student" : "Add New Student"}</h5>
                <button type="button" className="btn-close" onClick={resetForm}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-2">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="col">
                      <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col">
                      <select className="form-control" value={countryId} onChange={(e) => setCountryId(e.target.value)}>
                        <option value="">Select Country</option>
                        {countries.map((c) => (<option key={c.id} value={c.id}>{c.name}</option>))}
                      </select>
                    </div>
                    <div className="col">
                      <select className="form-control" value={stateId} onChange={(e) => setStateId(e.target.value)}>
                        <option value="">Select State</option>
                        {states.map((s) => (<option key={s.id} value={s.id}>{s.name}</option>))}
                      </select>
                    </div>
                    <div className="col">
                      <select className="form-control" value={districtId} onChange={(e) => setDistrictId(e.target.value)}>
                        <option value="">Select District</option>
                        {districts.map((d) => (<option key={d.id} value={d.id}>{d.name}</option>))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="me-3"><strong>Gender:</strong></label>
                    {genders.map((g) => (
                      <div className="form-check form-check-inline" key={g.id}>
                        <input className="form-check-input" type="radio" name="gender" value={g.id} checked={genderId === g.id} onChange={() => setGenderId(g.id)} />
                        <label className="form-check-label">{g.name}</label>
                      </div>
                    ))}
                  </div>

                  <div className="d-flex justify-content-center gap-3">
                    <button type="submit" className="btn btn-primary">{id ? "Update" : "Save"}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <table className="table table-bordered table-striped mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>State</th>
            <th>District</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedStudents.map((std) => (
            <tr key={std.id}>
              <td>{std.name}</td>
              <td>{std.email}</td>
              <td>{countries.find((c) => c.id === std.countryId)?.name}</td>
              <td>{states.find((s) => s.id === std.stateId)?.name}</td>
              <td>{districts.find((d) => d.id === std.districtId)?.name}</td>
              <td>{genders.find((g) => g.id === std.genderId)?.name}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(std)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(std.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center text-muted">No matching records found</td>
            </tr>
          )}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-secondary me-2" disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}> ◀ </button>
          {[...Array(totalPages)].map((_, i) => (
            <button key={i} className={`btn me-1 ${ currentPage === i + 1 ? "btn-primary" : "btn-light" }`} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
          ))}
          <button className="btn btn-secondary ms-2" disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)}> ▶ </button>
        </div>
      )}
    </div>
  );
}

export default PaginationStatic;
