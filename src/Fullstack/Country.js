import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Country() {
  const [countries, setCountries] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/Countries`;

  useEffect(() => {
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

  const loadCountries = async () => {
    try {
      setLoading(true);
      const res = await axios.get(baseUrl);
      setCountries(res.data);
    } catch {
      toast("error", "Failed to load countries");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!name.trim()) {
      toast("warning", "Country name is required");
      return;
    }

    const data = { id, name };
    setLoading(true);

    try {
      if (id === 0) {
        await axios.post(baseUrl, data);
        toast("success", "Country added");
      } else {
        await axios.put(baseUrl, data);
        toast("success", "Country updated");
      }
      resetForm();
      loadCountries();
    } catch {
      toast("error", id === 0 ? "Failed to add" : "Failed to update");
    } finally {
      setLoading(false);
    }
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setLoading(true);
          await axios.delete(`${baseUrl}/${countryId}`);
          toast("success", "Country deleted");
          loadCountries();
        } catch {
          toast("error", "Failed to delete");
        } finally {
          setLoading(false);
        }
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
        <button
          className="btn btn-primary me-2"
          onClick={handleSave}
          disabled={loading}
        >
          {id === 0 ? "Add Country" : "Update Country"}
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
            <th>Name</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {countries.length > 0 ? (
            countries.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(c)}
                    disabled={loading}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(c.id)}
                    disabled={loading}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No countries found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Country;
