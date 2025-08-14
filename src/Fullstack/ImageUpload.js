import { useEffect, useState } from "react";
import axios from "axios";

function ImageUpload() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [students, setStudents] = useState([]);

  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [genderId, setGenderId] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const genders = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Other" }
  ];

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const res = await axios.get(`${baseUrl}/students`);
    setStudents(res.data);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("FirstName", firstName);
    formData.append("MiddleName", middleName);
    formData.append("LastName", lastName);
    formData.append("Address", address);
    formData.append("Email", email);
    formData.append("Mobile", mobile);
    formData.append("CountryId", countryId);
    formData.append("StateId", stateId);
    formData.append("DistrictId", districtId);
    formData.append("GenderId", genderId);

    if (imageFile) {
      formData.append("ImageFile", imageFile); // matches controller param
    }

    if (id) {
      await axios.put(`${baseUrl}/students/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
    } else {
      await axios.post(`${baseUrl}/students`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
    }

    resetForm();
    loadStudents();
  };

  const handleEdit = (std) => {
    setId(std.id);
    setFirstName(std.firstName);
    setMiddleName(std.middleName || "");
    setLastName(std.lastName);
    setAddress(std.address || "");
    setEmail(std.email || "");
    setMobile(std.mobile || "");
    setCountryId(std.countryId || "");
    setStateId(std.stateId || "");
    setDistrictId(std.districtId || "");
    setGenderId(std.genderId || "");
    setImageFile(null);
    setPreviewImage(std.image ? `${baseUrl}/uploads/${std.image}` : null);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${baseUrl}/students/${id}`);
    loadStudents();
  };

  const resetForm = () => {
    setId("");
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setAddress("");
    setEmail("");
    setMobile("");
    setCountryId("");
    setStateId("");
    setDistrictId("");
    setGenderId("");
    setImageFile(null);
    setPreviewImage(null);
  };

  return (
    <div className="container my-4">
      <h2>Student Management</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <input placeholder="Middle Name" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
        <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />

        <input type="file" onChange={handleFileChange} accept="image/*" />
        {previewImage && <img src={previewImage} alt="Preview" width="80" />}

        <div>
          {genders.map((g) => (
            <label key={g.id}>
              <input
                type="radio"
                name="gender"
                value={g.id}
                checked={Number(genderId) === g.id}
                onChange={(e) => setGenderId(e.target.value)}
              />{" "}
              {g.name}
            </label>
          ))}
        </div>

        <button type="submit">{id ? "Update" : "Add"} Student</button>
        {id && <button onClick={resetForm}>Cancel</button>}
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Gender</th><th>Image</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((std) => (
            <tr key={std.id}>
              <td>{`${std.firstName} ${std.middleName || ""} ${std.lastName}`}</td>
              <td>{std.email}</td>
              <td>{genders.find((g) => g.id === std.genderId)?.name}</td>
              <td>{std.image && <img src={`${baseUrl}/uploads/${std.image}`} width="50" alt="Student" />}</td>
              <td>
                <button onClick={() => handleEdit(std)}>Edit</button>
                <button onClick={() => handleDelete(std.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ImageUpload;
