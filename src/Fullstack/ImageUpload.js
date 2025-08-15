import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function ImageUpload() {
  const [customers, setCustomers] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState(null);
  const fileInputRef = useRef();

  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const res = await axios.get(`${baseUrl}/customers`);
    setCustomers(res.data);
  };

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const resetForm = () => {
    setId(0);
    setName("");
    setEmail("");
    setMobile("");
    setImage(null);
    setExistingImage(null);
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);

    if (image) {
      formData.append("image", image);
    }

    if (id && id > 0) {
      await axios.put(`${baseUrl}/Customers/UpdateCustomer`, formData, { headers: { "Content-Type": "multipart/form-data" }});
        Swal.fire("Updated!", "Customer updated successfully.", "success");
      } else {
        await axios.post(`${baseUrl}/Customers/AddCustomer`, formData, { headers: { "Content-Type": "multipart/form-data" }});
        Swal.fire("Added!", "Customer added successfully.", "success");
      }
      resetForm();
      loadCustomers();
    };

  const handleEdit = (cus) => {
    setId(cus.id);
    setName(cus.name);
    setEmail(cus.email);
    setMobile(cus.mobile);
    setImage(null);
    setExistingImage(cus.image);
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      await axios.delete(`${baseUrl}/Customers/${id}`);
      Swal.fire("Deleted!", "Customer has been deleted.", "success");
      loadCustomers();
    }
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-primary">Customer Management</h2>
      <form onSubmit={handleSubmit} className="mb-4" encType="multipart/form-data">
        <div className="row g-3">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="col-md-4">
            <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            {/* Show existing image preview when editing */}
            {id > 0 && existingImage && !image && (
              <div className="mb-2">
                <img
                  src={`${baseUrl}/Uploads/${existingImage}`}
                  alt="Current"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              </div>
            )}
            <input
              type="file"
              ref={fileInputRef}
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          {id > 0 ? "Update Customer" : "Add Customer"}
        </button>
        {id > 0 && (
          <button
            type="button"
            className="btn btn-secondary mt-3 ms-2"
            onClick={resetForm}
          >
            Cancel
          </button>
        )}
      </form>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cus) => (
            <tr key={cus.id}>
              <td>{cus.name}</td>
              <td>{cus.email}</td>
              <td>
                {cus.image && (
                  <img
                    src={`${baseUrl}/Uploads/${cus.image}`}
                    alt="Customer"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                )}
              </td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(cus)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(cus.id)}
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

export default ImageUpload;
