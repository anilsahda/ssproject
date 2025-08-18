import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Country() {
  const [countries, setCountries] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

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
    const res = await axios.get(baseUrl);
    setCountries(res.data);
  };

  const handleSave = async () => {
    if (!name.trim()) {
      toast("warning", "Country name is required");
      return;
    }

    const data = { id, name };

    if (id === 0) {
      await axios.post(baseUrl, data);
      toast("success", "Country added");
    } else {
      await axios.put(baseUrl, data);
      toast("success", "Country updated");
    }
    resetForm();
    loadCountries();
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
        await axios.delete(`${baseUrl}/${countryId}`);
        toast("success", "Country deleted");
        loadCountries();
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
        <input type="text" className="form-control" placeholder="Enter Country Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="mb-4">
        <button className="btn btn-primary me-2" onClick={handleSave}>Save Country</button>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {countries.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(c)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(c.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Country;