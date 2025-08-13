import { useEffect, useState } from "react";
import axios from "axios";

function Checkbox() {
  const [employees, setEmployees] = useState([]);

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [genders] = useState([
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Other" },
  ]);
  const [languages, setLanguages] = useState([]);

  // Form fields
  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);
  const [districtId, setDistrictId] = useState(0);
  const [genderId, setGenderId] = useState(0);
  const [image, setImage] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]); // array of selected language IDs

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/Employees`;
  const countryUrl = `${process.env.REACT_APP_BASE_URL}/Countries`;
  const stateUrl = `${process.env.REACT_APP_BASE_URL}/States`;
  const districtUrl = `${process.env.REACT_APP_BASE_URL}/Districts`;
  const languageUrl = `${process.env.REACT_APP_BASE_URL}/Languages`;

  useEffect(() => {
    loadEmployees();
    loadCountries();
    loadStates();
    loadDistricts();
    loadLanguages();
  }, []);

  // Load employees and map languages to array of languageIds
  const loadEmployees = () => {
    axios.get(baseUrl).then((res) => {
      const mappedEmployees = res.data.map((emp) => ({
        ...emp,
        languages: emp.languages?.map((l) => l.languageId) || [],
      }));
      setEmployees(mappedEmployees);
    });
  };

  const loadCountries = () => {
    axios.get(countryUrl).then((res) => setCountries(res.data));
  };

  const loadStates = () => {
    axios.get(stateUrl).then((res) => setStates(res.data));
  };

  const loadDistricts = () => {
    axios.get(districtUrl).then((res) => setDistricts(res.data));
  };

  const loadLanguages = () => {
    axios.get(languageUrl).then((res) => setLanguages(res.data));
  };

  const resetForm = () => {
    setId(0);
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setAddress("");
    setEmail("");
    setMobile("");
    setCountryId(0);
    setStateId(0);
    setDistrictId(0);
    setGenderId(0);
    setImage("");
    setSelectedLanguages([]);
  };

  const handleSave = () => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      countryId === 0 ||
      stateId === 0 ||
      districtId === 0 ||
      genderId === 0
    )
      return alert("Please fill all required fields.");

    const data = {
      id,
      firstName,
      middleName,
      lastName,
      address,
      email,
      mobile,
      countryId,
      stateId,
      districtId,
      genderId,
      image,
      languages: selectedLanguages, // send array of selected language IDs
    };

    // Note: your API expects PUT at `/Employees/{id}`
    const request =
      id === 0
        ? axios.post(baseUrl, data)
        : axios.put(`${baseUrl}/${id}`, data);

    request.then(() => {
      resetForm();
      loadEmployees();
    });
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
    setGenderId(emp.genderId);
    setImage(emp.image);

    // Map languages array of objects to array of languageId
    setSelectedLanguages(emp.languages || []);
  };

  const handleDelete = (empId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      axios.delete(`${baseUrl}/${empId}`).then(() => loadEmployees());
    }
  };

  // Cascading filters
  const filteredStates = states.filter((s) => s.countryId === countryId);
  const filteredDistricts = districts.filter((d) => d.stateId === stateId);

  // Toggle language selection
  const toggleLanguage = (langId) => {
    setSelectedLanguages((prev) =>
      prev.includes(langId)
        ? prev.filter((id) => id !== langId)
        : [...prev, langId]
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Manage Employees</h2>

      {/* Form */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="First Name *"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Middle Name"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Last Name *"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          className="form-control mb-2"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <select
          className="form-select mb-2"
          value={countryId}
          onChange={(e) => {
            setCountryId(parseInt(e.target.value));
            setStateId(0);
            setDistrictId(0);
          }}
        >
          <option value={0}>Select Country *</option>
          {countries.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <select
          className="form-select mb-2"
          value={stateId}
          onChange={(e) => {
            setStateId(parseInt(e.target.value));
            setDistrictId(0);
          }}
          disabled={countryId === 0}
        >
          <option value={0}>Select State *</option>
          {filteredStates.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        <select
          className="form-select mb-2"
          value={districtId}
          onChange={(e) => setDistrictId(parseInt(e.target.value))}
          disabled={stateId === 0}
        >
          <option value={0}>Select District *</option>
          {filteredDistricts.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>

        {/* Gender radio buttons */}
        <div className="mb-3">
          <label className="me-3">Gender *</label>
          {genders.map((g) => (
            <div className="form-check form-check-inline" key={g.id}>
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id={`gender${g.id}`}
                value={g.id}
                checked={genderId === g.id}
                onChange={() => setGenderId(g.id)}
              />
              <label className="form-check-label" htmlFor={`gender${g.id}`}>
                {g.name}
              </label>
            </div>
          ))}
        </div>

        {/* Languages checkboxes */}
        <div className="mb-3">
          <label className="me-3">Languages</label>
          {languages.map((lang) => (
            <div className="form-check form-check-inline" key={lang.id}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`lang${lang.id}`}
                value={lang.id}
                checked={selectedLanguages.includes(lang.id)}
                onChange={() => toggleLanguage(lang.id)}
              />
              <label className="form-check-label" htmlFor={`lang${lang.id}`}>
                {lang.name}
              </label>
            </div>
          ))}
        </div>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="btn btn-primary me-2" onClick={handleSave}>
          {id === 0 ? "Add Employee" : "Update Employee"}
        </button>
        <button className="btn btn-secondary" onClick={resetForm}>
          Reset
        </button>
      </div>

      {/* Employees Table */}
      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>State</th>
            <th>District</th>
            <th>Gender</th>
            <th>Languages</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 && (
            <tr>
              <td colSpan="14" className="text-center">
                No employees found.
              </td>
            </tr>
          )}
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.image}</td>
              <td>{emp.firstName}</td>
              <td>{emp.email}</td>
              <td>{countries.find((c) => c.id === emp.countryId)?.name || ""}</td>
              <td>{states.find((s) => s.id === emp.stateId)?.name || ""}</td>
              <td>{districts.find((d) => d.id === emp.districtId)?.name || ""}</td>
              <td>{genders.find((g) => g.id === emp.genderId)?.name || ""}</td>
              <td>
                {emp.languages && emp.languages.length > 0
                  ? emp.languages
                      .map((langId) => languages.find((l) => l.id === langId)?.name || "")
                      .filter((n) => n !== "")
                      .join(", ")
                  : ""}
              </td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(emp)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(emp.id)}>
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

export default Checkbox;