import { useEffect, useState } from "react";
import axios from "axios";
import Select, { components } from "react-select";
import Swal from "sweetalert2";

function MultiselectDropdown() {
  const [employees, setEmployees] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [languages, setLanguages] = useState([]);

  const genders = [ { id: 1, name: "Male" }, { id: 2, name: "Female" }, { id: 3, name: "Other" }];

  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [genderId, setGenderId] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/Employees`;

  useEffect(() => {
    loadEmployees();
    axios.get(`${process.env.REACT_APP_BASE_URL}/Countries`).then(res => setCountries(res.data));
    axios.get(`${process.env.REACT_APP_BASE_URL}/States`).then(res => setStates(res.data));
    axios.get(`${process.env.REACT_APP_BASE_URL}/Districts`).then(res => setDistricts(res.data));
    axios.get(`${process.env.REACT_APP_BASE_URL}/Languages`).then(res => setLanguages(res.data));
  }, []);

  const loadEmployees = () => {
    axios.get(baseUrl).then(res => setEmployees(res.data));
  };

  const resetForm = () => {
    setId(null);
    setName("");
    setEmail("");
    setMobile("");
    setCountryId("");
    setStateId("");
    setDistrictId("");
    setGenderId("");
    setSelectedLanguages([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      mobile,
      countryId: countryId ? Number(countryId) : null,
      stateId: stateId ? Number(stateId) : null,
      districtId: districtId ? Number(districtId) : null,
      genderId: genderId ? Number(genderId) : null,
      languages: selectedLanguages.map(lang => lang.value)
    };

    if (id !== null) {
      await axios.put(baseUrl, { ...payload, id });
      Swal.fire("Updated!", "Employee updated successfully.", "success");
    } else {
      await axios.post(baseUrl, payload);
      Swal.fire("Added!", "Employee added successfully.", "success");
    }

    resetForm();
    loadEmployees();
  };

  const handleEdit = (emp) => {
    setId(emp.id);
    setName(emp.name);
    setEmail(emp.email || "");
    setMobile(emp.mobile || "");
    setCountryId(emp.countryId || "");
    setStateId(emp.stateId || "");
    setDistrictId(emp.districtId || "");
    setGenderId(emp.genderId || "");

    const preselected = (emp.languages || []).map(l => {
      const lang = languages.find(lang => lang.id === l.languageId);
      return lang ? { value: lang.id, label: lang.name } : null;
    }).filter(Boolean);

    setSelectedLanguages(preselected);
  };

  const handleDelete = async (empId) => {
    const result = await Swal.fire({ title: "Are you sure?", text: "This action cannot be undone!", icon: "warning", showCancelButton: true, confirmButtonColor: "#d33", cancelButtonColor: "#3085d6", confirmButtonText: "Yes, delete it!" });
    if (result.isConfirmed) {
      await axios.delete(`${baseUrl}/${empId}`);
      loadEmployees();
      Swal.fire("Deleted!", "Employee has been deleted successfully.", "success");
    }
  };

  // Custom checkbox for react-select
  const Option = (props) => (
    <components.Option {...props}>
      <input type="checkbox" checked={props.isSelected} readOnly style={{ marginRight: 8 }} />
      <label>{props.label}</label>
    </components.Option>
  );

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-primary">Employee Management</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row g-3">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="First Name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="col-md-4">
            <input type="email" className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
          </div>
          <div className="col-md-4">
            <select className="form-select" value={countryId} onChange={e => setCountryId(e.target.value)}>
              <option value="">Select Country</option>
              {countries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div className="col-md-4">
            <select className="form-select" value={stateId} onChange={e => setStateId(e.target.value)}>
              <option value="">Select State</option>
              {states.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          </div>
          <div className="col-md-4">
            <select className="form-select" value={districtId} onChange={e => setDistrictId(e.target.value)}>
              <option value="">Select District</option>
              {districts.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Gender</label>
            <div>
              {genders.map(g => (
                <label key={g.id} className="me-3">
                  <input type="radio" name="gender" value={g.id} checked={Number(genderId) === g.id} onChange={e => setGenderId(e.target.value)} /> {g.name}
                </label>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <label className="form-label">Languages</label>
            <Select 
              options={languages.map(lang => ({ value: lang.id, label: lang.name }))}
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{ Option }}
              onChange={setSelectedLanguages}
              value={selectedLanguages}
              placeholder="Select Languages..."
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Save Employee</button>
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
            <th>Languages</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{`${emp.firstName} ${emp.middleName || ""} ${emp.lastName}`}</td>
              <td>{emp.email}</td>
              <td>{emp.mobile}</td>
              <td>{countries.find(c => c.id === emp.countryId)?.name}</td>
              <td>{states.find(s => s.id === emp.stateId)?.name}</td>
              <td>{districts.find(d => d.id === emp.districtId)?.name}</td>
              <td>{genders.find(g => g.id === emp.genderId)?.name}</td>
              <td>{(emp.languages || []).map(l => languages.find(lang => lang.id === l.languageId)?.name).filter(Boolean).join(", ")}</td>
              <td><button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(emp)}>Edit</button><button className="btn btn-danger btn-sm" onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MultiselectDropdown;
