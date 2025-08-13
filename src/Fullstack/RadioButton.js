import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeManagement() {
  const [employees, setEmployees] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [languages, setLanguages] = useState([]);

  // ✅ Static genders
  const genders = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Other" }
  ];

  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [genderId, setGenderId] = useState("");
  const [image, setImage] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  useEffect(() => {
    loadEmployees();
    loadCountries();
    loadStates();
    loadDistricts();
    loadLanguages();
  }, []);

  const loadEmployees = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/employees`);
    setEmployees(res.data);
  };

  const loadCountries = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/countries`);
    setCountries(res.data);
  };

  const loadStates = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/states`);
    setStates(res.data);
  };

  const loadDistricts = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/districts`);
    setDistricts(res.data);
  };

  const loadLanguages = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/languages`);
    setLanguages(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Ensure numeric IDs are sent
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
      image,
      languages: selectedLanguages
    };

    if (id) {
      await axios.put(`${process.env.REACT_APP_BASE_URL}/employees/${id}`, payload);
    } else {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/employees`, payload);
    }

    resetForm();
    loadEmployees();
  };

  const handleEdit = (emp) => {
    setId(emp.id);
    setFirstName(emp.firstName);
    setMiddleName(emp.middleName);
    setLastName(emp.lastName);
    setAddress(emp.address);
    setEmail(emp.email);
    setMobile(emp.mobile);
    setCountryId(emp.countryId);
    setStateId(emp.stateId);
    setDistrictId(emp.districtId);
    setGenderId(emp.genderId || "");
    setImage(emp.image);
    setSelectedLanguages(emp.languages?.map(l => l.languageId) || []);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_BASE_URL}/employees/${id}`);
    loadEmployees();
  };

  const resetForm = () => {
    setId("");
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setAddress("");
    setEmail("");
    setMobile("");
    setCountryId("");
    setStateId("");
    setDistrictId("");
    setGenderId("");
    setImage("");
    setSelectedLanguages([]);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-primary">Employee Management</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row g-3">
          {/* Name fields */}
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Middle Name"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          {/* Address */}
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* Email & Mobile */}
          <div className="col-md-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          {/* Country */}
          <div className="col-md-3">
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

          {/* State */}
          <div className="col-md-3">
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

          {/* District */}
          <div className="col-md-3">
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

          {/* Gender - Static Radio Buttons */}
          <div className="col-md-3">
            <label className="form-label">Gender</label>
            <div>
              {genders.map((g) => (
                <label key={g.id} className="me-3">
                  <input
                    type="radio"
                    name="gender"
                    value={g.id}
                    checked={Number(genderId) === g.id}
                    onChange={(e) => setGenderId(e.target.value)}
                  />{" "}
                  {g.name}
                </label>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          {/* Languages */}
          <div className="col-md-6">
            <label className="form-label">Languages</label>
            <div>
              {languages.map((lang) => (
                <label key={lang.id} className="me-3">
                  <input
                    type="checkbox"
                    checked={selectedLanguages.includes(lang.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedLanguages([...selectedLanguages, lang.id]);
                      } else {
                        setSelectedLanguages(
                          selectedLanguages.filter((l) => l !== lang.id)
                        );
                      }
                    }}
                  />{" "}
                  {lang.name}
                </label>
              ))}
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          {id ? "Update Employee" : "Add Employee"}
        </button>
        {id && (
          <button
            type="button"
            className="btn btn-secondary mt-3 ms-2"
            onClick={resetForm}
          >
            Cancel
          </button>
        )}
      </form>

      {/* Table */}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Country</th>
            <th>State</th>
            <th>District</th>
            <th>Gender</th>
            <th>Languages</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{`${emp.firstName} ${emp.middleName || ""} ${emp.lastName}`}</td>
              <td>{emp.address}</td>
              <td>{emp.email}</td>
              <td>{emp.mobile}</td>
              <td>{countries.find((c) => c.id === emp.countryId)?.name}</td>
              <td>{states.find((s) => s.id === emp.stateId)?.name}</td>
              <td>{districts.find((d) => d.id === emp.districtId)?.name}</td>
              <td>{genders.find((g) => g.id === emp.genderId)?.name}</td>
              <td>
                {(emp.languages || [])
                  .map((lang) => languages.find((l) => l.id === lang.languageId)?.name)
                  .join(", ")}
              </td>
              <td>{emp.image}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(emp)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(emp.id)}
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

export default EmployeeManagement;
