import { useState } from "react";
import Swal from "sweetalert2";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
  Pagination,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  CloudDownload as DownloadIcon,
} from "@mui/icons-material";

function Sample5() {
  const [countries, setCountries] = useState([
    { id: 1, name: "India" },
    { id: 2, name: "USA" },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newCountry, setNewCountry] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const [editCountryId, setEditCountryId] = useState(null);
  const [editCountryName, setEditCountryName] = useState("");

  const [viewCountry, setViewCountry] = useState(null);

  const handleAddCountry = () => {
    if (newCountry.trim()) {
      const newId = countries.length > 0 ? Math.max(...countries.map(c => c.id)) + 1 : 1;
      setCountries([...countries, { id: newId, name: newCountry }]);
      setNewCountry("");
      setShowAddModal(false);
    }
  };

  const handleDeleteCountry = (id) => {
    const country = countries.find(c => c.id === id);
    Swal.fire({
      title: `Delete "${country.name}"?`,
      text: "This cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#e74c3c",
      cancelButtonColor: "#95a5a6",
    }).then((result) => {
      if (result.isConfirmed) {
        setCountries(countries.filter(c => c.id !== id));
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: `"${country.name}" deleted`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleEditCountry = (country) => {
    setEditCountryId(country.id);
    setEditCountryName(country.name);
  };

  const handleUpdateCountry = () => {
    if (editCountryName.trim()) {
      setCountries(
        countries.map(c =>
          c.id === editCountryId ? { ...c, name: editCountryName } : c
        )
      );
      setEditCountryId(null);
      setEditCountryName("");
    }
  };

  const handleDownload = () => {
    const csv = countries.map(c => `${c.id},${c.name}`).join("\n");
    const blob = new Blob([`ID,Country\n${csv}`], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "countries.csv";
    link.click();
  };

  const filteredCountries = countries.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedCountries = filteredCountries.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filteredCountries.length / pageSize);

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} flexWrap="wrap" gap={2}>
        <Typography variant="h5">🌎 Country Management</Typography>
        <Box display="flex" gap={1}>
          <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => setShowAddModal(true)}>
            Add Country
          </Button>
          <Button variant="contained" color="success" startIcon={<DownloadIcon />} onClick={handleDownload}>
            Export CSV
          </Button>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} flexWrap="wrap" gap={2}>
        <TextField
          label="Search countries..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <Box display="flex" alignItems="center" gap={1}>
          <InputLabel>Items per page:</InputLabel>
          <Select
            size="small"
            value={pageSize}
            onChange={(e) => {
              setPageSize(parseInt(e.target.value));
              setCurrentPage(1);
            }}
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Country Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCountries.map((c) => (
              <TableRow key={c.id}>
                <TableCell>{c.id}</TableCell>
                <TableCell>{c.name}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEditCountry(c)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDeleteCountry(c.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton color="success" onClick={() => setViewCountry(c)}>
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {paginatedCountries.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No countries found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={2} display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          color="primary"
          size="small"
        />
      </Box>

      {/* Add Modal */}
      <Dialog open={showAddModal} onClose={() => setShowAddModal(false)}>
        <DialogTitle>Add Country</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Country Name"
            value={newCountry}
            onChange={(e) => setNewCountry(e.target.value)}
            autoFocus
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowAddModal(false)}>Cancel</Button>
          <Button onClick={handleAddCountry} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Modal */}
      <Dialog open={editCountryId !== null} onClose={() => setEditCountryId(null)}>
        <DialogTitle>Edit Country</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            value={editCountryName}
            onChange={(e) => setEditCountryName(e.target.value)}
            autoFocus
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditCountryId(null)}>Cancel</Button>
          <Button onClick={handleUpdateCountry} variant="contained">Update</Button>
        </DialogActions>
      </Dialog>

      {/* View Modal */}
      <Dialog open={!!viewCountry} onClose={() => setViewCountry(null)}>
        <DialogTitle>Country Details</DialogTitle>
        <DialogContent>
          <Typography>ID: {viewCountry?.id}</Typography>
          <Typography>Name: {viewCountry?.name}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setViewCountry(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Sample5;
