import { useState } from "react";

function RadioButtonStatic() {
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

  // State
  const [students, setStudents] = useState([
    { id: 1, name: "Anil", email: "anil@test.com", mobile: "9876543210", countryId: 1, stateId: 1, districtId: 1, genderId: 1 },
    { id: 2, name: "Sita", email: "sita@test.com", mobile: "9876501234", countryId: 2, stateId: 2, districtId: 2, genderId: 2 },
  ]);

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
  };

  // Save student
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
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
      setStudents(students.map((s) => (s.id === id ? payload : s)));
    } else {
      setStudents([...students, payload]);
    }

    resetForm();
  };

  // Edit student
  const handleEdit = (std) => {
    setId(std.id);
    setName(std.name);
    setEmail(std.email);
    setMobile(std.mobile);
    setCountryId(std.countryId);
    setStateId(std.stateId);
    setDistrictId(std.districtId);
    setGenderId(std.genderId || 0);
  };

  // Delete student
  const handleDelete = (studentId) => {
    setStudents(students.filter((s) => s.id !== studentId));
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-primary">Student Management</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <select
              className="form-select"
              value={countryId}
              onChange={(e) => setCountryId(e.target.value)}
            >
              <option value="">Select Country</option>
              {countries.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <select
              className="form-select"
              value={stateId}
              onChange={(e) => setStateId(e.target.value)}
            >
              <option value="">Select State</option>
              {states.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <select
              className="form-select"
              value={districtId}
              onChange={(e) => setDistrictId(e.target.value)}
            >
              <option value="">Select District</option>
              {districts.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Gender</label>
            <div>
              {genders.map((g) => (
                <label key={g.id} className="me-3">
                  <input
                    type="radio"
                    name="gender"
                    value={g.id}
                    checked={genderId === g.id}
                    onChange={(e) => setGenderId(Number(e.target.value))}
                  />{" "}
                  {g.name}
                </label>
              ))}
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Save Student
        </button>
      </form>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Country</th>
            <th>State</th>
            <th>District</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((std) => (
            <tr key={std.id}>
              <td>{std.name}</td>
              <td>{std.email}</td>
              <td>{std.mobile}</td>
              <td>{countries.find((c) => c.id === std.countryId)?.name}</td>
              <td>{states.find((s) => s.id === std.stateId)?.name}</td>
              <td>{districts.find((d) => d.id === std.districtId)?.name}</td>
              <td>{genders.find((g) => g.id === std.genderId)?.name}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(std)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(std.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RadioButtonStatic;
