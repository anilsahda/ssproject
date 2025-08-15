import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Pagination() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
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
  const [searchText, setSearchText] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

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
    setFilteredStudents(res.data);
    setCurrentPage(1);
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
      setModalOpen(false);
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
    setModalOpen(true);
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

  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);
    const filtered = students.filter(std =>
      `${std.firstName} ${std.middleName || ""} ${std.lastName}`.toLowerCase().includes(text) ||
      std.email?.toLowerCase().includes(text) ||
      std.mobile?.includes(text)
    );
    setFilteredStudents(filtered);
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredStudents.length / pageSize);
  const currentData = filteredStudents.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`btn btn-sm me-1 ${currentPage === i ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-primary">Student Management</h2>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <input type="text" className="form-control w-50 me-2" placeholder="Search by name, email, mobile..." value={searchText} onChange={handleSearch} />
        <button className="btn btn-success" onClick={() => { resetForm(); setModalOpen(true); }}>+ Add Student</button>
      </div>

      {/* Rows per page */}
      <div className="d-flex justify-content-end mb-2">
        <label className="me-2">Rows per page:</label>
        <select className="form-select d-inline-block w-auto" value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
          {[5,10,15,20].map(size=> <option key={size} value={size}>{size}</option>)}
        </select>
      </div>

      <div className="card shadow-sm">
        <div className="card-body p-0">
          <table className="table table-striped table-hover mb-0">
            <thead className="table-primary">
              <tr>
                <th>Name</th><th>Email</th><th>Country</th><th>State</th><th>District</th><th>Gender</th><th>Image</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map(std=>(
                <tr key={std.id}>
                  <td>{`${std.firstName} ${std.middleName||""} ${std.lastName}`}</td>
                  <td>{std.email}</td>
                  <td>{countries.find(c=>c.id===std.countryId)?.name}</td>
                  <td>{states.find(s=>s.id===std.stateId)?.name}</td>
                  <td>{districts.find(d=>d.id===std.districtId)?.name}</td>
                  <td>{genders.find(g=>g.id===std.genderId)?.name}</td>
                  <td>{std.image && <img src={`${baseUrl}/Uploads/${std.image}`} alt="student" className="rounded-circle" style={{width:"50px", height:"50px", objectFit:"cover"}}/>}</td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2" onClick={()=>handleEdit(std)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={()=>handleDelete(std.id)}>Delete</button>
                  </td>
                </tr>
              ))}
              {currentData.length === 0 && <tr><td colSpan="8" className="text-center py-3">No students found.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination controls with Bootstrap Icons */}
      {totalPages > 1 && 
      <div className="d-flex justify-content-center align-items-center mt-3">
        <button 
          className="btn btn-outline-primary btn-sm me-2"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          title="Previous"
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        {renderPageNumbers()}

        <button 
          className="btn btn-outline-primary btn-sm ms-2"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          title="Next"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>}

      {/* Modal */}
      {modalOpen &&
      <div className="modal fade show d-block" tabIndex="-1" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content shadow">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">{id>0?"Update Student":"Add Student"}</h5>
              <button type="button" className="btn-close btn-close-white" onClick={() => setModalOpen(false)}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                  <div className="col-md-8">
                    <label className="form-label">Gender</label>
                    <div>{genders.map(g=>
                      <label key={g.id} className="me-3">
                        <input type="radio" name="gender" value={g.id} checked={Number(genderId)===g.id} onChange={e=>setGenderId(Number(e.target.value))}/> {g.name}
                      </label>
                    )}</div>
                  </div>
                </div>
                <div className="mt-4 d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary me-2">{id>0?"Update Student":"Add Student"}</button>
                  <button type="button" className="btn btn-secondary" onClick={() => { resetForm(); setModalOpen(false); }}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>}

    </div>
  );
}

export default Pagination;
