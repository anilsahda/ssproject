import { useState } from "react";

function SearchingStatic() {
  // Static data
  const countries = [
    { id: 1, name: "India" },
    { id: 2, name: "USA" },
    { id: 3, name: "UK" },
  ];
  const states = [
    { id: 1, name: "Maharashtra" },
    { id: 2, name: "California" },
    { id: 3, name: "London" },
  ];
  const districts = [
    { id: 1, name: "Pune" },
    { id: 2, name: "Los Angeles" },
    { id: 3, name: "Westminster" },
  ];
  const genders = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Other" },
  ];

  // Dummy student list
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav", email: "aarav@mail.com", mobile: "9999999999", countryId: 1, stateId: 1, districtId: 1, genderId: 1 },
    { id: 2, name: "Sophia", email: "sophia@mail.com", mobile: "8888888888", countryId: 2, stateId: 2, districtId: 2, genderId: 2 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Form state
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [genderId, setGenderId] = useState(0);

  // Reset form
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

  // Save / Update student
  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: id || Date.now(),
      name,
      email,
      mobile,
      countryId: Number(countryId),
      stateId: Number(stateId),
      districtId: Number(districtId),
      genderId,
    };

    if (id) {
      setStudents(students.map((s) => (s.id === id ? newStudent : s)));
      alert("Student updated successfully!");
    } else {
      setStudents([...students, newStudent]);
      alert("New student added!");
    }
    resetForm();
  };

  // Edit
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

  // Delete
  const handleDelete = (studentId) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter((s) => s.id !== studentId));
    }
  };

  // Search
  const filteredStudents = students.filter((s) => {
    const query = searchTerm.toLowerCase();
    return (
      s.name.toLowerCase().includes(query) ||
      s.email.toLowerCase().includes(query) ||
      countries.find((c) => c.id === s.countryId)?.name.toLowerCase().includes(query) ||
      states.find((st) => st.id === s.stateId)?.name.toLowerCase().includes(query) ||
      districts.find((d) => d.id === s.districtId)?.name.toLowerCase().includes(query) ||
      genders.find((g) => g.id === s.genderId)?.name.toLowerCase().includes(query)
    );
  });

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-primary">Student Management</h2>
      <button className="btn btn-success mb-3" onClick={() => setShowForm(true)}>+ Add Student</button>

      {/* Search box */}
      <form onSubmit={(e) => e.preventDefault()} className="mb-3 d-flex">
        <input type="text" className="form-control me-2" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>

      {/* Modal Form */}
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
                    <div className="col"><input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required /></div>
                    <div className="col"><input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                    <div className="col"><input type="text" className="form-control" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} /></div>
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

      {/* Table */}
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
          {filteredStudents.map((std) => (
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
          {filteredStudents.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center text-muted">No matching records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SearchingStatic;
