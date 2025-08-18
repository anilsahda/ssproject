import { useState } from "react";
import Swal from "sweetalert2";

function CountryStatic() {
  const [countries, setCountries] = useState([
    { id: 1, name: "India" },
    { id: 2, name: "USA" },
    { id: 3, name: "UK" }
  ]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

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
      toast("warning", "Country name is required");
      return;
    }

    if (id === 0) {
      // Add new country
      const newCountry = {
        id: countries.length > 0 ? Math.max(...countries.map(c => c.id)) + 1 : 1,
        name
      };
      setCountries([...countries, newCountry]);
      toast("success", "Country added");
    } else {
      // Update existing country
      const updated = countries.map(c =>
        c.id === id ? { ...c, name } : c
      );
      setCountries(updated);
      toast("success", "Country updated");
    }

    resetForm();
  };

  const handleEdit = (country) => {
    setId(country.id);
    setName(country.name);
  };

  const handleDelete = (countryId) => {
    Swal.fire({
      title: "Delete this country?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6"
    }).then((result) => {
      if (result.isConfirmed) {
        setCountries(countries.filter(c => c.id !== countryId));
        toast("success", "Country deleted");
      }
    });
  };

  const resetForm = () => {
    setId(0);
    setName("");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Manage Countries</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Country Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <button className="btn btn-primary me-2" onClick={handleSave}>
          {id === 0 ? "Add Country" : "Update Country"}
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
            <th>Name</th>
            <th style={{ width: "180px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {countries.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">
                No countries available
              </td>
            </tr>
          ) : (
            countries.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(c)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(c.id)}
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

export default CountryStatic;
