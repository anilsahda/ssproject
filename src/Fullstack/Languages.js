import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Languages() {
  const [languages, setLanguages] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/Languages`;

  useEffect(() => {
    loadLanguages();
  }, []);

  const toast = (icon, title) => {
    Swal.fire({ toast: true, position: "top-end", icon, title, showConfirmButton: false, timer: 2000, timerProgressBar: true });
  };

  const loadLanguages = () => {
    axios.get(baseUrl).then((res) => setLanguages(res.data));
  };

  const handleSave = () => {
    const data = { id, name };

    if (!name.trim()) {
      toast("warning", "Language name required");
      return;
    }

    if (id === 0) {
      axios.post(baseUrl, data).then(() => {
          toast("success", "Language added");
          resetForm();
          loadLanguages();
        });
    } else {
      axios.put(baseUrl, data).then(() => {
          toast("success", "Language updated");
          resetForm();
          loadLanguages();
        });
    }
  };

  const handleEdit = (language) => {
    setId(language.id);
    setName(language.name);
  };

  const handleDelete = (langId) => {
    Swal.fire({ title: "Delete language?", text: "This cannot be undone!", icon: "warning", showCancelButton: true, confirmButtonColor: "#d33", cancelButtonColor: "#3085d6", confirmButtonText: "Yes" }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${baseUrl}/${langId}`).then(() => { 
          toast("success", "Language deleted"); 
          loadLanguages();
          });
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
        <input type="text" className="form-control" placeholder="Enter Language Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="mb-4">
        <button className="btn btn-primary me-2" onClick={handleSave}>{id === 0 ? "Add Language" : "Update Language"}</button>
        <button className="btn btn-secondary" onClick={resetForm}>Reset</button>
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
          {languages.map((lang) => (
              <tr key={lang.id}>
                <td>{lang.id}</td>
                <td>{lang.name}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(lang)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(lang.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Languages;
