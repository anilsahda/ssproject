import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function District() {
  const [districts, setDistricts] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/Districts`;
  const countryUrl = `${process.env.REACT_APP_BASE_URL}/Countries`;
  const stateUrl = `${process.env.REACT_APP_BASE_URL}/States`;

  useEffect(() => {
    loadCountries();
    loadStates();
    loadDistricts();
  }, []);

  const loadCountries = () => {
    axios.get(countryUrl).then((res) => setCountries(res.data));
  };

  const loadStates = () => {
    axios.get(stateUrl).then((res) => setStates(res.data));
  };

  const loadDistricts = () => {
    axios.get(baseUrl).then((res) => setDistricts(res.data));
  };

  const handleSave = () => {
    if (name.trim() === "" || countryId === 0 || stateId === 0) {
      Swal.fire("Validation Error", "All fields are required", "warning");
      return;
    }

    const data = { id, name, countryId: parseInt(countryId), stateId: parseInt(stateId) };

    if (id === 0) {
      axios.post(baseUrl, data).then(() => {
          Swal.fire("Success", "District added successfully!", "success");
          resetForm();
          loadDistricts();
        });
    } else {
      axios.put(baseUrl, data).then(() => {
          Swal.fire("Success", "District updated successfully!", "success");
          resetForm();
          loadDistricts();
        });
    }
  };

  const handleEdit = (district) => {
    setId(district.id);
    setName(district.name);
    setCountryId(district.countryId);
    setStateId(district.stateId);
  };

  const handleDelete = (districtId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${baseUrl}/${districtId}`).then(() => {
            Swal.fire("Deleted!", "District has been deleted.", "success");
            loadDistricts();
          });
      }
    });
  };

  const resetForm = () => {
    setId(0);
    setName("");
    setCountryId(0);
    setStateId(0);
  };

  const filteredStates = states.filter((s) => s.countryId === countryId);

  return (
    <div className="container">
      <h2 className="mb-4">Manage Districts</h2>
      <div className="mb-3">
        <select className="form-select mb-2" value={countryId} onChange={(e) => { setCountryId(parseInt(e.target.value)); setStateId(0)}}>
          <option value={0}>Select Country</option>
          {countries.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <select className="form-select mb-2" value={stateId} onChange={(e) => setStateId(parseInt(e.target.value))}>
          <option value={0}>Select State</option>
          {filteredStates.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
        <input type="text" className="form-control mb-3" placeholder="Enter District Name" value={name} onChange={(e) => setName(e.target.value)} />
        <button className="btn btn-primary me-2" onClick={handleSave}>Save District</button>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>Id</th>
            <th>Country</th>
            <th>State</th>
            <th>District</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {districts.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center">No districts found.</td>
            </tr>
          )}
          {districts.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{countries.find((c) => c.id === d.countryId)?.name || ""}</td>
              <td>{states.find((s) => s.id === d.stateId)?.name || ""}</td>
              <td>{d.name}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(d)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(d.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default District;
