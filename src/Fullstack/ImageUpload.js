import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function ImageUpload() {
  const [students, setStudents] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const genders = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Other" }
  ];

  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [genderId, setGenderId] = useState(0);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();

  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    loadStudents();
    loadCountries();
    loadStates();
    loadDistricts();
  }, []);

  const loadStudents = async () => {
    const res = await axios.get(`${baseUrl}/students`);
    setStudents(res.data);
  };

  const loadCountries = async () => {
    const res = await axios.get(`${baseUrl}/countries`);
    setCountries(res.data);
  };

  const loadStates = async () => {
    const res = await axios.get(`${baseUrl}/states`);
    setStates(res.data);
  };

  const loadDistricts = async () => {
    const res = await axios.get(`${baseUrl}/districts`);
    setDistricts(res.data);
  };

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const resetForm = () => {
    setId(0);
    setFirstName(""); setMiddleName(""); setLastName("");
    setAddress(""); setEmail(""); setMobile("");
    setCountryId(""); setStateId(""); setDistrictId(""); setGenderId(0);
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("firstName", firstName);
    formData.append("middleName", middleName);
    formData.append("lastName", lastName);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("countryId", countryId ? Number(countryId) : "");
    formData.append("stateId", stateId ? Number(stateId) : "");
    formData.append("districtId", districtId ? Number(districtId) : "");
    formData.append("genderId", genderId ? Number(genderId) : "");
    if (image) formData.append("image", image);

    try {
      if (id && id > 0) {
        await axios.put(`${baseUrl}/Students/UpdateImageUpload`, formData, { headers: { "Content-Type": "multipart/form-data" }});
        Swal.fire("Updated!", "Student updated successfully.", "success");
      } else {
        await axios.post(`${baseUrl}/Students/AddImageUpload`, formData, { headers: { "Content-Type": "multipart/form-data" }});
        Swal.fire("Added!", "Student added successfully.", "success");
      }
      resetForm();
      loadStudents();
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  const handleEdit = (std) => {
    setId(std.id);
    setFirstName(std.firstName); setMiddleName(std.middleName); setLastName(std.lastName);
    setAddress(std.address); setEmail(std.email); setMobile(std.mobile);
    setCountryId(std.countryId); setStateId(std.stateId); setDistrictId(std.districtId);
    setGenderId(std.genderId || 0);
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?", text: "You won't be able to revert this!", icon: "warning",
      showCancelButton: true, confirmButtonColor: "#d33", cancelButtonColor: "#3085d6", confirmButtonText: "Yes, delete it!"
    });
    if (result.isConfirmed) {
      await axios.delete(`${baseUrl}/students/${id}`);
      Swal.fire("Deleted!", "Student has been deleted.", "success");
      loadStudents();
    }
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-primary">Student Management</h2>
      <form onSubmit={handleSubmit} className="mb-4" encType="multipart/form-data">
        <div className="row g-3">
          <div className="col-md-4"><input type="text" className="form-control" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/></div>
          <div className="col-md-4"><input type="text" className="form-control" placeholder="Middle Name" value={middleName} onChange={(e)=>setMiddleName(e.target.value)}/></div>
          <div className="col-md-4"><input type="text" className="form-control" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/></div>
          <div className="col-md-4"><input type="text" className="form-control" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/></div>
          <div className="col-md-4"><input type="email" className="form-control" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
          <div className="col-md-4"><input type="text" className="form-control" placeholder="Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/></div>

          <div className="col-md-4">
            <select className="form-select" value={countryId} onChange={(e)=>setCountryId(e.target.value)}>
              <option value="">Select Country</option>
              {countries.map(c=> <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>

          <div className="col-md-4">
            <select className="form-select" value={stateId} onChange={(e)=>setStateId(e.target.value)}>
              <option value="">Select State</option>
              {states.map(s=> <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          </div>

          <div className="col-md-4">
            <select className="form-select" value={districtId} onChange={(e)=>setDistrictId(e.target.value)}>
              <option value="">Select District</option>
              {districts.map(d=> <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
          </div>

          <div className="col-md-4"><input type="file" ref={fileInputRef} className="form-control" accept="image/*" onChange={handleImageChange}/></div>

          <div className="col-md-4">
            <label className="form-label">Gender</label>
            <div>{genders.map(g=>
              <label key={g.id} className="me-3">
                <input type="radio" name="gender" value={g.id} checked={Number(genderId)===g.id} onChange={e=>setGenderId(Number(e.target.value))}/> {g.name}
              </label>
            )}</div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">{id>0?"Update Student":"Add Student"}</button>
        {id>0 && <button type="button" className="btn btn-secondary mt-3 ms-2" onClick={resetForm}>Cancel</button>}
      </form>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Country</th><th>State</th><th>District</th><th>Gender</th><th>Image</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(std=>(
            <tr key={std.id}>
              <td>{`${std.firstName} ${std.middleName||""} ${std.lastName}`}</td>
              <td>{std.email}</td>
              <td>{countries.find(c=>c.id===std.countryId)?.name}</td>
              <td>{states.find(s=>s.id===std.stateId)?.name}</td>
              <td>{districts.find(d=>d.id===std.districtId)?.name}</td>
              <td>{genders.find(g=>g.id===std.genderId)?.name}</td>
              <td>{std.image && <img src={`${baseUrl}/Uploads/${std.image}`} alt="student" style={{width:"60px",height:"60px",objectFit:"cover"}}/>}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={()=>handleEdit(std)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={()=>handleDelete(std.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ImageUpload;
