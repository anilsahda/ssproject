import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Searching() {
  const [students, setStudents] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  const genders = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Other" },
  ];

  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [genderId, setGenderId] = useState(0);

  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    loadStudents();
    loadCountries();
    loadStates();
    loadDistricts();
  }, []);

  const loadStudents = async () => {
    try {
      const res = await axios.get(`${baseUrl}/students`);
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const loadCountries = async () => {
    try {
      const res = await axios.get(`${baseUrl}/countries`);
      setCountries(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const loadStates = async () => {
    try {
      const res = await axios.get(`${baseUrl}/states`);
      setStates(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const loadDistricts = async () => {
    try {
      const res = await axios.get(`${baseUrl}/districts`);
      setDistricts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const resetForm = () => {
    setId(0);
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setAddress("");
    setEmail("");
    setMobile("");
    setCountryId("");
    setStateId("");
    setDistrictId("");
    setGenderId(0);
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id,
      firstName,
      middleName,
      lastName,
      address,
      email,
      mobile,
      countryId: countryId ? Number(countryId) : null,
      stateId: stateId ? Number(stateId) : null,
      districtId: districtId ? Number(districtId) : null,
      genderId: genderId ? Number(genderId) : null,
    };

    try {
      if (id && id > 0) {
        await axios.put(`${baseUrl}/students`, payload);
        Swal.fire("Updated!", "Student record has been updated.", "success");
      } else {
        await axios.post(`${baseUrl}/students`, payload);
        Swal.fire("Added!", "New student has been added.", "success");
      }
      resetForm();
      loadStudents();
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  const handleEdit = (std) => {
    setId(std.id);
    setFirstName(std.firstName || "");
    setMiddleName(std.middleName || "");
    setLastName(std.lastName || "");
    setAddress(std.address || "");
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${baseUrl}/students/${studentId}`);
          loadStudents();
          Swal.fire("Deleted!", "Student has been deleted.", "success");
        } catch (err) {
          console.error(err);
          Swal.fire("Error", "Delete failed!", "error");
        }
      }
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      loadStudents();
      return;
    }

    const res = await axios.get(`${baseUrl}/students/search?query=${searchTerm}`);
    setStudents(res.data);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-primary">Student Management</h2>

      {/* Add Button */}
      <button className="btn btn-success mb-3" onClick={() => setShowForm(true)}>
        + Add Student
      </button>

      {/* Search */}
      <form onSubmit={handleSearch} className="mb-3 d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search by name, email, country, state, district, or gender"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>


      {/* Modal Popup */}
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
                      <input type="text" className="form-control" placeholder="First Name"
                        value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Middle Name"
                        value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Last Name"
                        value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                  </div>

                  {/* Address, Email, Mobile in Single Row */}
                  <div className="row mb-2">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Address"
                        value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="col">
                      <input type="email" className="form-control" placeholder="Email"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Mobile"
                        value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col">
                      <select className="form-control" value={countryId} onChange={(e) => setCountryId(e.target.value)}>
                        <option value="">Select Country</option>
                        {countries.map((c) => (
                          <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col">
                      <select className="form-control" value={stateId} onChange={(e) => setStateId(e.target.value)}>
                        <option value="">Select State</option>
                        {states.map((s) => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col">
                      <select className="form-control" value={districtId} onChange={(e) => setDistrictId(e.target.value)}>
                        <option value="">Select District</option>
                        {districts.map((d) => (
                          <option key={d.id} value={d.id}>{d.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Gender as Radio Buttons */}
                  <div className="mb-3">
                    <label className="me-3"><strong>Gender:</strong></label>
                    {genders.map((g) => (
                      <div className="form-check form-check-inline" key={g.id}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value={g.id}
                          checked={genderId === g.id}
                          onChange={() => setGenderId(g.id)}
                        />
                        <label className="form-check-label">{g.name}</label>
                      </div>
                    ))}
                  </div>

                  {/* Save / Cancel Buttons Centered */}
                  <div className="d-flex justify-content-center gap-3">
                    <button type="submit" className="btn btn-primary">{id ? "Update" : "Save"}</button>
                    <button type="button" className="btn btn-secondary" onClick={resetForm}>Cancel</button>
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
          {students.map((std) => (
            <tr key={std.id}>
              <td>{`${std.firstName} ${std.middleName || ""} ${std.lastName}`}</td>
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
              <td colSpan="7" className="text-center text-muted">
                No matching records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Searching;
