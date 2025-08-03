import { useState } from "react";
import Swal from "sweetalert2";
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton,
  MenuItem, Pagination, Select, TextField, Typography
} from "@mui/material";
import { Add, Delete, Edit, Visibility } from "@mui/icons-material";

function Sample2() {
  const countries = [
    { id: 1, name: "India" },
    { id: 2, name: "USA" },
  ];

  const [states, setStates] = useState([
    { id: 1, name: "California", countryId: 2 },
    { id: 2, name: "Texas", countryId: 2 },
  ]);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [countryId, setCountryId] = useState(countries[0].id);
  const [addUpdateModal, setAddUpdateModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const handleAddUpdate = () => {
    if (name.trim() === "") {
      Swal.fire({ icon: "warning", text: "State name is required!" });
      return;
    }

    if (id === 0) {
      const newId = states.length > 0 ? Math.max(...states.map((s) => s.id)) + 1 : 1;
      setStates([...states, { id: newId, name, countryId }]);
    } else {
      setStates(states.map((s) => (s.id === id ? { id, name, countryId } : s)));
    }

    Swal.fire({ toast: true, position: "top-end", icon: "success", title: `Saved successfully!`, showConfirmButton: false, timer: 1500 });
    setId(0);
    setName("");
    setCountryId(countries[0].id);
    setAddUpdateModal(false);
  };

  const handleDelete = (id) => {
    const state = states.find((s) => s.id === id);
    Swal.fire({
      title: `Delete "${state.name}"?`,
      text: "This cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#e74c3c",
      cancelButtonColor: "#95a5a6",
    }).then((result) => {
      if (result.isConfirmed) {
        setStates(states.filter((s) => s.id !== id));
        Swal.fire({ toast: true, position: "top-end", icon: "success", title: `"${state.name}" deleted`, showConfirmButton: false, timer: 1500 });
      }
    });
  };

  const handleEdit = (obj) => {
    setId(obj.id);
    setName(obj.name);
    setCountryId(obj.countryId);
    setAddUpdateModal(true);
  };

  const handleView = (obj) => {
    setId(obj.id);
    setName(obj.name);
    setCountryId(obj.countryId);
    setViewModal(true);
  };

  const handleDownload = () => {
    const csv = states.map((s) => {
      const countryName = countries.find((c) => c.id === s.countryId)?.name || "";
      return `${s.id},${s.name},${countryName}`;
    }).join("\n");
    const blob = new Blob([`Id,State,Country\n${csv}`], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "states.csv";
    link.click();
  };

  const filteredStates = states.filter((s) => s.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedStates = filteredStates.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filteredStates.length / pageSize);

  return (
    <Box p={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5">🏛️ State Management</Typography>
        <Box display="flex" gap={1}>
          <Button variant="contained" startIcon={<Add />} onClick={() => setAddUpdateModal(true)}>
            Add State
          </Button>
          <Button variant="contained" color="success" onClick={handleDownload}>
            📥 Export CSV
          </Button>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <TextField
          variant="outlined"
          size="small"
          label="Search"
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
          sx={{ width: 250 }}
        />
        <Box display="flex" alignItems="center" gap={1}>
          <Typography>Items per page:</Typography>
          <Select
            size="small"
            value={pageSize}
            onChange={(e) => { setPageSize(parseInt(e.target.value)); setCurrentPage(1); }}
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </Box>
      </Box>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th style={{ padding: 8, border: "1px solid #ddd" }}>Id</th>
            <th style={{ padding: 8, border: "1px solid #ddd" }}>State</th>
            <th style={{ padding: 8, border: "1px solid #ddd" }}>Country</th>
            <th style={{ padding: 8, border: "1px solid #ddd" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedStates.length > 0 ? (
            paginatedStates.map((s) => (
              <tr key={s.id}>
                <td style={{ padding: 8, border: "1px solid #ddd" }}>{s.id}</td>
                <td style={{ padding: 8, border: "1px solid #ddd" }}>{s.name}</td>
                <td style={{ padding: 8, border: "1px solid #ddd" }}>{countries.find(c => c.id === s.countryId)?.name}</td>
                <td style={{ padding: 8, border: "1px solid #ddd" }}>
                  <IconButton onClick={() => handleEdit(s)} color="primary"><Edit /></IconButton>
                  <IconButton onClick={() => handleDelete(s.id)} color="error"><Delete /></IconButton>
                  <IconButton onClick={() => handleView(s)} color="success"><Visibility /></IconButton>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan={4} style={{ padding: 8, textAlign: "center" }}>No states found.</td></tr>
          )}
        </tbody>
      </table>

      <Box mt={2} display="flex" justifyContent="center">
        <Pagination count={totalPages} page={currentPage} onChange={(_, page) => setCurrentPage(page)} size="small" />
      </Box>

      {/* Add/Edit Dialog */}
      <Dialog open={addUpdateModal} onClose={() => setAddUpdateModal(false)} fullWidth>
        <DialogTitle>{id === 0 ? "Add State" : "Edit State"}</DialogTitle>
        <DialogContent>
          <Box mb={2}>
            <Typography variant="subtitle2">Country</Typography>
            <Select fullWidth value={countryId} onChange={(e) => setCountryId(e.target.value)}>
              {countries.map(c => <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>)}
            </Select>
          </Box>
          <TextField fullWidth label="State Name" value={name} onChange={(e) => setName(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddUpdateModal(false)}>Cancel</Button>
          <Button onClick={handleAddUpdate} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>

      {/* View Dialog */}
      <Dialog open={viewModal} onClose={() => setViewModal(false)} fullWidth>
        <DialogTitle>State Details</DialogTitle>
        <DialogContent dividers>
          <Typography><strong>Id:</strong> {id}</Typography>
          <Typography><strong>Name:</strong> {name}</Typography>
          <Typography><strong>Country:</strong> {countries.find(c => c.id === countryId)?.name}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setViewModal(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Sample2;
