import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Languages() {
  const [languages, setLanguages] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/Languages`;

  useEffect(() => {
    loadLanguages();
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

  const loadLanguages = () => {
    setLoading(true);
    axios.get(baseUrl)
      .then((res) => setLanguages(res.data))
      .catch(() => toast("error", "Failed to load languages"))
      .finally(() => setLoading(false));
  };

  const handleSave = () => {
    const data = { id, name };

    if (!name.trim()) {
      toast("warning", "Language name required");
      return;
    }

    setLoading(true);

    if (id === 0) {
      // CREATE
      axios.post(baseUrl, data)
        .then(() => {
          toast("success", "Language added");
          resetForm();
          loadLanguages();
        })
        .catch(() => toast("error", "Failed to add"))
        .finally(() => setLoading(false));
    } else {
      // UPDATE
      axios.put(baseUrl, data)
        .then(() => {
          toast("success", "Language updated");
          resetForm();
          loadLanguages();
        })
        .catch(() => {
          axios.put(`${baseUrl}/${id}`, data)
            .then(() => {
              toast("success", "Language updated");
              resetForm();
              loadLanguages();
            })
            .catch(() => toast("error", "Failed to update"))
            .finally(() => setLoading(false));
        });
    }
  };

  const handleEdit = (language) => {
    setId(language.id);
    setName(language.name);
  };

  const handleDelete = (langId) => {
    Swal.fire({
      title: "Delete language?",
      text: "This cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        axios.delete(`${baseUrl}/${langId}`)
          .then(() => {
            toast("success", "Language deleted");
            loadLanguages();
          })
          .catch(() => toast("error", "Failed to delete"))
          .finally(() => setLoading(false));
      }
    });
  };

  const resetForm = () => {
    setId(0);
    setName("");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Manage Languages</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Language Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <button className="btn btn-primary me-2" onClick={handleSave} disabled={loading}>
          {id === 0 ? "Add Language" : "Update Language"}
        </button>
        <button className="btn btn-secondary" onClick={resetForm} disabled={loading}>
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
          {languages.length > 0 ? (
            languages.map((lang) => (
              <tr key={lang.id}>
                <td>{lang.id}</td>
                <td>{lang.name}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(lang)}
                    disabled={loading}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(lang.id)}
                    disabled={loading}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No languages found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Languages;
