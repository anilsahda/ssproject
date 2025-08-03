import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Sample3() {
  const [list, setList] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);

  const [addUpdateModal, setAddUpdateModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    setCountries([
      { id: 1, name: "India" },
      { id: 2, name: "USA" }
    ]);

    setStates([
      { id: 1, countryId: 1, name: "Madhya Pradesh" },
      { id: 2, countryId: 1, name: "Maharashtra" },
      { id: 3, countryId: 2, name: "California" },
      { id: 4, countryId: 2, name: "Texas" }
    ]);

    setList([
      { id: 1, countryId: 1, stateId: 1, name: "Bhopal" },
      { id: 2, countryId: 2, stateId: 3, name: "San Francisco" }
    ]);
  }, []);

  const handleAddUpdate = () => {
    if (name.trim() === "" || countryId === 0 || stateId === 0) return;

    if (id === 0) {
      const newId = list.length > 0 ? Math.max(...list.map((c) => c.id)) + 1 : 1;
      setList([...list, { id: newId, countryId, stateId, name }]);
    } else {
      setList(list.map((c) => (c.id === id ? { id, countryId, stateId, name } : c)));
    }

    Swal.fire({ toast: true, position: "top-end", icon: "success", title: `Data saved successfully!`, showConfirmButton: false, timer: 1500 });
    setId(0);
    setCountryId(0);
    setStateId(0);
    setName("");
    setAddUpdateModal(false);
  };

  const handleDelete = (id) => {
    const district = list.find((c) => c.id === id);
    Swal.fire({
      title: `Delete "${district.name}"?`,
      text: "This cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#e74c3c",
      cancelButtonColor: "#95a5a6"
    }).then((result) => {
      if (result.isConfirmed) {
        setList(list.filter((c) => c.id !== id));
        Swal.fire({ toast: true, position: "top-end", icon: "success", title: `"${district.name}" deleted`, showConfirmButton: false, timer: 1500 });
      }
    });
  };

  const handleEdit = (obj) => {
    setId(obj.id);
    setCountryId(obj.countryId);
    setStateId(obj.stateId);
    setName(obj.name);
    setAddUpdateModal(true);
  };

  const handleView = (obj) => {
    setId(obj.id);
    setCountryId(obj.countryId);
    setStateId(obj.stateId);
    setName(obj.name);
    setViewModal(true);
  };

  const handleDownload = () => {
    const csv = list.map((c) => `${c.id},${countries.find(x => x.id === c.countryId)?.name || ""},${states.find(x => x.id === c.stateId)?.name || ""},${c.name}`).join("\n");
    const blob = new Blob([`Id,Country,State,District\n${csv}`], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "districts.csv";
    link.click();
  };

  const filteredList = list.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedList = filteredList.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filteredList.length / pageSize);

  const filteredStates = states.filter(s => s.countryId === countryId);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4 gap-2 flex-wrap">
        <h2 className="text-xl font-bold">🏙️ District Management</h2>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setAddUpdateModal(true)}>➕ Add District</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleDownload}>📥 Export CSV</button>
        </div>
      </div>

      <div className="flex justify-between mb-4 gap-4 flex-wrap items-center">
        <input
          type="text"
          className="border rounded px-3 py-2 w-64"
          placeholder="🔍 Search..."
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
        />
        <div className="flex items-center gap-2">
          <label>Items per page:</label>
          <select className="border rounded px-2 py-1" value={pageSize} onChange={(e) => { setPageSize(parseInt(e.target.value)); setCurrentPage(1); }}>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Id</th>
              <th className="border px-4 py-2">Country</th>
              <th className="border px-4 py-2">State</th>
              <th className="border px-4 py-2">District</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedList.map((c) => (
              <tr key={c.id} className="text-center">
                <td className="border px-4 py-2">{c.id}</td>
                <td className="border px-4 py-2">{countries.find(x => x.id === c.countryId)?.name}</td>
                <td className="border px-4 py-2">{states.find(x => x.id === c.stateId)?.name}</td>
                <td className="border px-4 py-2">{c.name}</td>
                <td className="border px-4 py-2 flex justify-center gap-2">
                  <button onClick={() => handleEdit(c)} className="text-blue-600">✏️</button>
                  <button onClick={() => handleDelete(c.id)} className="text-red-600">🗑️</button>
                  <button onClick={() => handleView(c)} className="text-green-600">👁️</button>
                </td>
              </tr>
            ))}
            {paginatedList.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4">No data found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-center gap-2 flex-wrap">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button key={page} onClick={() => setCurrentPage(page)} className={`px-3 py-1 border rounded ${currentPage === page ? "bg-blue-600 text-white" : "bg-white"}`}>
            {page}
          </button>
        ))}
      </div>

      {/* Modal: Add/Edit */}
      {addUpdateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{id === 0 ? "Add District" : "Edit District"}</h3>
              <button onClick={() => setAddUpdateModal(false)}>❌</button>
            </div>
            <div className="space-y-3">
              <select className="w-full border px-3 py-2 rounded" value={countryId} onChange={(e) => { setCountryId(parseInt(e.target.value)); setStateId(0); }}>
                <option value={0}>Select Country</option>
                {countries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>

              <select className="w-full border px-3 py-2 rounded" value={stateId} onChange={(e) => setStateId(parseInt(e.target.value))} disabled={countryId === 0}>
                <option value={0}>Select State</option>
                {filteredStates.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>

              <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Enter District Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setAddUpdateModal(false)}>Cancel</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleAddUpdate}>Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: View */}
      {viewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">District Details</h3>
              <button onClick={() => setViewModal(false)}>❌</button>
            </div>
            <div className="space-y-2">
              <p><strong>Id:</strong> {id}</p>
              <p><strong>Country:</strong> {countries.find(x => x.id === countryId)?.name}</p>
              <p><strong>State:</strong> {states.find(x => x.id === stateId)?.name}</p>
              <p><strong>District:</strong> {name}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setViewModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sample3;
