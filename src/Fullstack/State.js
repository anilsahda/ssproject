import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function State() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [countryId, setCountryId] = useState("");
  const [loading, setLoading] = useState(false);

  const stateUrl = `${process.env.REACT_APP_BASE_URL}/States`;
  const countryUrl = `${process.env.REACT_APP_BASE_URL}/Countries`;

  useEffect(() => {
    loadStates();
    loadCountries();
  }, []);

  const toast = (icon, title) => {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon,
      title,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true
    });
  };

  const loadStates = async () => {
    try {
      setLoading(true);
      const res = await axios.get(stateUrl);
      setStates(res.data);
    } catch {
      toast("error", "Failed to load states");
    } finally {
      setLoading(false);
    }
  };

  const loadCountries = async () => {
    try {
      const res = await axios.get(countryUrl);
      setCountries(res.data);
    } catch {
      toast("error", "Failed to load countries");
    }
  };

  const handleSave = async () => {
    if (!name.trim()) {
      toast("warning", "State name is required");
      return;
    }
    if (!countryId) {
      toast("warning", "Please select a country");
      return;
    }

    const data = { id, name, countryId: parseInt(countryId) };
    setLoading(true);

    try {
      if (id === 0) {
        await axios.post(stateUrl, data);
        toast("success", "State added");
      } else {
        await axios.put(stateUrl, data);
        toast("success", "State updated");
      }
      resetForm();
      loadStates();
    } catch {
      toast("error", id === 0 ? "Failed to add state" : "Failed to update state");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (state) => {
    setId(state.id);
    setName(state.name);
    setCountryId(state.countryId.toString());
  };

  const handleDelete = (stateId) => {
    Swal.fire({
      title: "Delete this state?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setLoading(true);
          await axios.delete(`${stateUrl}/${stateId}`);
          toast("success", "State deleted");
          loadStates();
        } catch {
          toast("error", "Failed to delete state");
        } finally {
          setLoading(false);
        }
      }
    });
  };

  const resetForm = () => {
    setId(0);
    setName("");
    setCountryId("");
  };

  return (
    <div className="container mt-4">
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
        <button
          className="btn btn-primary me-2"
          onClick={handleSave}
          disabled={loading}
        >
          {id === 0 ? "Add State" : "Update State"}
        </button>
        <button
          className="btn btn-secondary"
          onClick={resetForm}
          disabled={loading}
        >
          Reset
        </button>
      </div>

      {loading && <p>Loading...</p>}

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
                <td>
                  {countries.find((c) => c.id === state.countryId)?.name || ""}
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(state)}
                    disabled={loading}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(state.id)}
                    disabled={loading}
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
