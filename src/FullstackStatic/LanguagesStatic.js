import { useState } from "react";
import Swal from "sweetalert2";

function LanguagesStatic() {
  const [languages, setLanguages] = useState([
    { id: 1, name: "English" },
    { id: 2, name: "Hindi" },
    { id: 3, name: "Spanish" }
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
      toast("warning", "Language name required");
      return;
    }

    if (id === 0) {
      // Add new language
      const newLang = { id: languages.length + 1, name };
      setLanguages([...languages, newLang]);
      toast("success", "Language added");
    } else {
      // Update existing language
      const updated = languages.map((lang) =>
        lang.id === id ? { ...lang, name } : lang
      );
      setLanguages(updated);
      toast("success", "Language updated");
    }

    resetForm();
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
        setLanguages(languages.filter((lang) => lang.id !== langId));
        toast("success", "Language deleted");
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
        <button
          className="btn btn-primary me-2"
          onClick={handleSave}
        >
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
          {languages.map((lang) => (
            <tr key={lang.id}>
              <td>{lang.id}</td>
              <td>{lang.name}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(lang)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(lang.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LanguagesStatic;
