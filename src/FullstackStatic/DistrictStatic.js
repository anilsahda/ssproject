import { useState } from "react";
import Swal from "sweetalert2";

function DistrictStatic() {
  const [countries] = useState([
    { id: 1, name: "India" },
    { id: 2, name: "USA" }
  ]);

  const [states] = useState([
    { id: 1, name: "Maharashtra", countryId: 1 },
    { id: 2, name: "Gujarat", countryId: 1 },
    { id: 3, name: "California", countryId: 2 },
    { id: 4, name: "Texas", countryId: 2 }
  ]);

  const [districts, setDistricts] = useState([
    { id: 1, name: "Pune", countryId: 1, stateId: 1 },
    { id: 2, name: "Ahmedabad", countryId: 1, stateId: 2 },
    { id: 3, name: "San Francisco", countryId: 2, stateId: 3 }
  ]);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);

  const handleSave = () => {
    if (name.trim() === "" || countryId === 0 || stateId === 0) {
      Swal.fire("Validation Error", "All fields are required", "warning");
      return;
    }

    if (id === 0) {
      // Add district
      const newDistrict = {
        id: districts.length > 0 ? Math.max(...districts.map(d => d.id)) + 1 : 1,
        name,
        countryId,
        stateId
      };
      setDistricts([...districts, newDistrict]);
      Swal.fire("Success", "District added successfully!", "success");
    } else {
      // Update district
      const updated = districts.map(d =>
        d.id === id ? { ...d, name, countryId, stateId } : d
      );
      setDistricts(updated);
      Swal.fire("Success", "District updated successfully!", "success");
    }

    resetForm();
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
        setDistricts(districts.filter(d => d.id !== districtId));
        Swal.fire("Deleted!", "District has been deleted.", "success");
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
        <select
          className="form-select mb-2"
          value={countryId}
          onChange={(e) => {
            setCountryId(parseInt(e.target.value));
            setStateId(0);
          }}
        >
          <option value={0}>Select Country</option>
          {countries.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>

        <select
          className="form-select mb-2"
          value={stateId}
          onChange={(e) => setStateId(parseInt(e.target.value))}
        >
          <option value={0}>Select State</option>
          {filteredStates.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter District Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="btn btn-primary me-2" onClick={handleSave}>
          {id === 0 ? "Add District" : "Update District"}
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
            <th>Country</th>
            <th>State</th>
            <th>District</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {districts.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No districts found.</td>
            </tr>
          ) : (
            districts.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{countries.find((c) => c.id === d.countryId)?.name || ""}</td>
                <td>{states.find((s) => s.id === d.stateId)?.name || ""}</td>
                <td>{d.name}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(d)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(d.id)}
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

export default DistrictStatic;
