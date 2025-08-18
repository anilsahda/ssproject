import { useState, useRef } from "react";
import Swal from "sweetalert2";

function ImageUploadStatic() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", mobile: "9876543210", image: "" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", mobile: "9876501234", image: "" }
  ]);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const resetForm = () => {
    setId(0);
    setName("");
    setEmail("");
    setMobile("");
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      Swal.fire("Validation Error", "Name is required", "warning");
      return;
    }

    let imageUrl = "";
    if (image) {
      imageUrl = URL.createObjectURL(image); // local preview
    }

    if (id > 0) {
      // Update
      const updated = customers.map(c =>
        c.id === id ? { ...c, name, email, mobile, image: image ? imageUrl : c.image } : c
      );
      setCustomers(updated);
      Swal.fire("Updated!", "Customer updated successfully.", "success");
    } else {
      // Add
      const newCustomer = {
        id: customers.length > 0 ? Math.max(...customers.map(c => c.id)) + 1 : 1,
        name,
        email,
        mobile,
        image: imageUrl
      };
      setCustomers([...customers, newCustomer]);
      Swal.fire("Added!", "Customer added successfully.", "success");
    }

    resetForm();
  };

  const handleEdit = (cus) => {
    setId(cus.id);
    setName(cus.name);
    setEmail(cus.email);
    setMobile(cus.mobile);
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const handleDelete = (cusId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can't revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setCustomers(customers.filter(c => c.id !== cusId));
        Swal.fire("Deleted!", "Customer has been deleted.", "success");
      }
    });
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-primary">Customer Management</h2>
      <form onSubmit={handleSubmit} className="mb-4" encType="multipart/form-data">
        <div className="row g-3">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Name"
              value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="col-md-4">
            <input type="email" className="form-control" placeholder="Email"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Mobile"
              value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div>

          <div className="col-md-4">
            <input type="file" ref={fileInputRef} className="form-control"
              accept="image/*" onChange={handleImageChange} />
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          {id === 0 ? "Add Customer" : "Update Customer"}
        </button>
        {id !== 0 && (
          <button type="button" className="btn btn-secondary mt-3 ms-2" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Image</th>
            <th style={{ width: "160px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No customers available</td>
            </tr>
          ) : (
            customers.map((cus) => (
              <tr key={cus.id}>
                <td>{cus.name}</td>
                <td>{cus.email}</td>
                <td>{cus.mobile}</td>
                <td>
                  {cus.image ? (
                    <img src={cus.image} alt="Preview"
                      style={{ width: "60px", height: "60px", objectFit: "cover" }} />
                  ) : (
                    <span>No Image</span>
                  )}
                </td>
                <td>
                  <button className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(cus)}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(cus.id)}>
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

export default ImageUploadStatic;
