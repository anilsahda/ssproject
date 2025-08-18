import { useState } from "react";
import Swal from "sweetalert2";

function StateStatic() {
  const [countries] = useState([
    { id: 1, name: "India" },
    { id: 2, name: "USA" }
  ]);

  const [states, setStates] = useState([
    { id: 1, name: "Maharashtra", countryId: 1 },
    { id: 2, name: "Gujarat", countryId: 1 },
    { id: 3, name: "California", countryId: 2 }
  ]);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [countryId, setCountryId] = useState("");

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

  const handleSave = () => {
    if (!name.trim()) {
      toast("warning", "State name is required");
      return;
    }
    if (!countryId) {
      toast("warning", "Please select a country");
      return;
    }

    if (id === 0) {
      // Add new state
      const newState = {
        id: states.length > 0 ? Math.max(...states.map(s => s.id)) + 1 : 1,
        name,
        countryId: parseInt(countryId)
      };
      setStates([...states, newState]);
      toast("success", "State added");
    } else {
      // Update state
      const updated = states.map(s =>
        s.id === id ? { ...s, name, countryId: parseInt(countryId) } : s
      );
      setStates(updated);
      toast("success", "State updated");
    }

    resetForm();
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
    }).then((result) => {
      if (result.isConfirmed) {
        setStates(states.filter(s => s.id !== stateId));
        toast("success", "State deleted");
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
        <button className="btn btn-primary me-2" onClick={handleSave}>
          {id === 0 ? "Add State" : "Update State"}
        </button>
        {id !== 0 && (
          <button className="btn btn-secondary" onClick={resetForm}>
            Cancel
          </button>
        )}
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>Id</th>
            <th>State Name</th>
            <th>Country</th>
            <th style={{ width: "180px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {states.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">
                No states available
              </td>
            </tr>
          ) : (
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
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StateStatic;
