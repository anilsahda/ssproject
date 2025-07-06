function EmployeeModal({
  title,
  formData,
  setFormData,
  onSave,
  onCancel,
  countries,
  states,
  districts,
  qualifications,
}) {
  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={onCancel}></button>
          </div>
          <div className="modal-body">
            <div className="row g-3">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Middle Name"
                  value={formData.middleName}
                  onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  placeholder="Address"
                  rows={2}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                ></textarea>
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Country</label>
                <select
                  className="form-select"
                  value={formData.countryId}
                  onChange={(e) => {
                    const selected = parseInt(e.target.value);
                    setFormData({
                      ...formData,
                      countryId: selected,
                      stateId: states.find(s => s.countryId === selected)?.id || "",
                      districtId: "",
                    });
                  }}
                >
                  {countries.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">State</label>
                <select
                  className="form-select"
                  value={formData.stateId}
                  onChange={(e) => {
                    const selected = parseInt(e.target.value);
                    setFormData({
                      ...formData,
                      stateId: selected,
                      districtId: districts.find(d => d.stateId === selected)?.id || "",
                    });
                  }}
                >
                  {states
                    .filter(s => s.countryId === formData.countryId)
                    .map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">District</label>
                <select
                  className="form-select"
                  value={formData.districtId}
                  onChange={(e) => setFormData({ ...formData, districtId: parseInt(e.target.value) })}
                >
                  {districts
                    .filter(d => d.stateId === formData.stateId)
                    .map(d => (
                      <option key={d.id} value={d.id}>{d.name}</option>
                    ))}
                </select>
              </div>

              {/* Gender */}
              <div className="col-md-4">
                <label className="form-label">Gender</label>
                <div className="d-flex gap-2">
                  {["Male", "Female"].map(g => (
                    <div key={g} className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="btn-check"
                        name="gender"
                        id={`gender-${g}`}
                        autoComplete="off"
                        value={g}
                        checked={formData.gender === g}
                        onChange={() => setFormData({ ...formData, gender: g })}
                      />
                      <label
                        className="btn btn-outline-primary btn-sm"
                        htmlFor={`gender-${g}`}
                      >
                        {g}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Religion */}
              <div className="col-md-4">
                <label className="form-label">Religion</label>
                <div className="d-flex gap-2 flex-wrap">
                  {["Hindu", "Muslim", "Christian"].map(r => (
                    <div key={r} className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="btn-check"
                        name="religion"
                        id={`religion-${r}`}
                        autoComplete="off"
                        value={r}
                        checked={formData.religion === r}
                        onChange={() => setFormData({ ...formData, religion: r })}
                      />
                      <label
                        className="btn btn-outline-success btn-sm"
                        htmlFor={`religion-${r}`}
                      >
                        {r}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="col-md-4">
                <label className="form-label">Languages</label>
                <div className="d-flex gap-2 flex-wrap">
                  {["Hindi", "English", "Other"].map(l => (
                    <div key={l} className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="btn-check"
                        id={`lang-${l}`}
                        checked={formData.languages.includes(l)}
                        onChange={() => {
                          const exists = formData.languages.includes(l);
                          setFormData({
                            ...formData,
                            languages: exists
                              ? formData.languages.filter(x => x !== l)
                              : [...formData.languages, l],
                          });
                        }}
                      />
                      <label
                        className="btn btn-outline-warning btn-sm"
                        htmlFor={`lang-${l}`}
                      >
                        {l}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualifications */}
              <div className="col-md-6">
                <label className="form-label">Qualifications</label>
                <div className="dropdown">
                  <button
                    className="form-control text-start"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {formData.qualifications.length === 0
                      ? "Select qualifications"
                      : formData.qualifications.join(", ")}
                  </button>
                  <ul className="dropdown-menu p-2" style={{ minWidth: "220px" }}>
                    {qualifications.map(q => (
                      <li key={q}>
                        <label className="form-check-label d-flex align-items-center">
                          <input
                            type="checkbox"
                            className="form-check-input me-2"
                            checked={formData.qualifications.includes(q)}
                            onChange={() => {
                              const exists = formData.qualifications.includes(q);
                              setFormData({
                                ...formData,
                                qualifications: exists
                                  ? formData.qualifications.filter(x => x !== q)
                                  : [...formData.qualifications, q],
                              });
                            }}
                          />
                          {q}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image Upload */}
              <div className="col-md-6">
                <label className="form-label">Upload Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary btn-sm" onClick={onCancel}>Cancel</button>
            <button className="btn btn-primary btn-sm" onClick={onSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeModal;
