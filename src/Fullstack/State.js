import { useEffect, useState } from "react";
import axios from "axios";

function State() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [countryId, setCountryId] = useState("");

  const stateUrl = `${process.env.REACT_APP_BASE_URL}/States`;
  const countryUrl = `${process.env.REACT_APP_BASE_URL}/Countries`;

  useEffect(() => {
    loadStates();
    loadCountries();
  }, []);

  const loadStates = () => {
    axios
      .get(stateUrl)
      .then((res) => setStates(res.data))
      .catch((error) => console.error("Error loading states:", error));
  };

  const loadCountries = () => {
    axios
      .get(countryUrl)
      .then((res) => setCountries(res.data))
      .catch((error) => console.error("Error loading countries:", error));
  };

  const handleSave = () => {
    if (!name.trim()) {
      alert("State name cannot be empty");
      return;
    }
    if (!countryId) {
      alert("Please select a country");
      return;
    }

    const data = { id, name, countryId: parseInt(countryId) };

    if (id === 0) {
      axios
        .post(stateUrl, data)
        .then(() => {
          resetForm();
          loadStates();
        })
        .catch((error) => console.error("Error adding state:", error));
    } else {
      axios
        .put(`${stateUrl}/${id}`, data) // PUT usually requires ID in URL
        .then(() => {
          resetForm();
          loadStates();
        })
        .catch((error) => console.error("Error updating state:", error));
    }
  };

  const handleEdit = (state) => {
    setId(state.id);
    setName(state.name);
    setCountryId(state.countryId.toString());
  };

  const handleDelete = (stateId) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      axios
        .delete(`${stateUrl}/${stateId}`)
        .then(() => loadStates())
        .catch((error) => console.error("Error deleting state:", error));
    }
  };

  const resetForm = () => {
    setId(0);
    setName("");
    setCountryId("");
  };

  return (
    <div className="container">
      <h2 className="mb-4">Manage States</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter State Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <select
          className="form-control"
          value={countryId}
          onChange={(e) => setCountryId(e.target.value)}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <button className="btn btn-primary me-2" onClick={handleSave}>
          {id === 0 ? "Add State" : "Update State"}
        </button>
        <button className="btn btn-secondary" onClick={resetForm}>
          Reset
        </button>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>Id</th>
            <th>State Name</th>
            <th>Country</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {states.length > 0 ? (
            states.map((state) => (
              <tr key={state.id}>
                <td>{state.id}</td>
                <td>{state.name}</td>
                <td>{countries.find((c) => c.id === state.countryId)?.name || ""}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(state)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(state.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No states found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default State;
