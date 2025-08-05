function EmployeeViewModal({ employee, onClose, countries, states, districts }) {
  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title">Employee Details</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p><strong>Name:</strong> {employee.firstName} {employee.middleName} {employee.lastName}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Mobile:</strong> {employee.mobile}</p>
            <p><strong>Address:</strong> {employee.address}</p>
            <p><strong>Country:</strong> {countries.find(c => c.id === employee.countryId)?.name}</p>
            <p><strong>State:</strong> {states.find(s => s.id === employee.stateId)?.name}</p>
            <p><strong>District:</strong> {districts.find(d => d.id === employee.districtId)?.name}</p>
            <p><strong>Gender:</strong> {employee.gender}</p>
            <p><strong>Religion:</strong> {employee.religion}</p>
            <p><strong>Languages:</strong> {employee.languages.join(", ")}</p>
            <p><strong>Qualifications:</strong> {employee.qualifications.join(", ")}</p>
            {employee.image && (
              <p>
                <strong>Image:</strong><br />
                <img
                  src={URL.createObjectURL(employee.image)}
                  alt="Employee"
                  style={{ maxWidth: "150px", borderRadius: "5px" }}
                />
              </p>
            )}
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary btn-sm" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeViewModal;
