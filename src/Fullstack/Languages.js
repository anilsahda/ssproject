import { useEffect, useState } from "react";
import axios from "axios";

function Languages() {
  const [languages, setLanguages] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/Languages`;

  useEffect(() => {
    loadLanguages();
  }, []);

  const loadLanguages = () => {
    axios
      .get(baseUrl)
      .then((res) => setLanguages(res.data))
      .catch((error) => console.error("Error loading languages:", error));
  };

  const handleSave = () => {
    const data = { id, name };

    if (!name.trim()) {
      alert("Language name cannot be empty");
      return;
    }

    if (id === 0) {
      axios
        .post(baseUrl, data)
        .then(() => {
          resetForm();
          loadLanguages();
        })
    } else {
      axios
        .put(`${baseUrl}/${id}`, data)
        .then(() => {
          resetForm();
          loadLanguages();
        })
    }
  };

  const handleEdit = (language) => {
    setId(language.id);
    setName(language.name);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this language?")) {
      axios
        .delete(`${baseUrl}/${id}`)
        .then(() => loadLanguages())
    }
  };

  const resetForm = () => {
    setId(0);
    setName("");
  };

  return (
    <div className="container">
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
        <button className="btn btn-primary me-2" onClick={handleSave}>
          {id === 0 ? "Add Language" : "Update Language"}
        </button>
        <button className="btn btn-secondary" onClick={resetForm}>
          Reset
        </button>
      </div>

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
            languages.map((c) => (
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
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No languages found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Languages
