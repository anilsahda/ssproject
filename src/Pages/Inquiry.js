import React, { useEffect, useState } from 'react';
import API from '../api';
import {
  Container,
  Spinner,
  Alert,
  Table,
  Form,
  Row,
  Col,
  Button,
  Modal
} from 'react-bootstrap';
import Swal from 'sweetalert2';
import { FaEye, FaEdit, FaTrash, FaSave } from 'react-icons/fa';

function StudentData() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [showFullName, setShowFullName] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const [selectedInternshipType, setSelectedInternshipType] = useState('');
  const [selectedInterviewStatus, setSelectedInterviewStatus] = useState('');
  const [selectedStatusType, setSelectedStatusType] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await API.get('/api/interns');
        setStudents(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching student data:', err);
        setError('Failed to load students.');
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  const handleView = (student) => {
    Swal.fire({
      title: `<strong>${student.Name}</strong>`,
      html: `
        <p><b>Mobile:</b> ${student.mobile || 'N/A'}</p>
        <p><b>Internship:</b> ${student.internshipType || 'N/A'}</p>
        <p><b>Interview:</b> ${student.interviewStatus || 'N/A'}</p>
        <p><b>Status Type:</b> ${student.statusType || 'N/A'}</p>
        <p><b>Notes:</b> ${student.notes || 'N/A'}</p>
      `,
      confirmButtonText: 'Close'
    });
  };

  const handleEdit = (student) => {
    setEditStudent({ ...student });
    setShowEditModal(true);
  };

  const handleDelete = async (student) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `Delete ${student.Name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    });

    if (result.isConfirmed) {
      try {
        await API.delete(`/api/interns/${student._id}`);
        setStudents(students.filter((s) => s._id !== student._id));
        Swal.fire('Deleted!', `${student.Name} has been deleted.`, 'success');
      } catch (err) {
        Swal.fire('Error!', 'Failed to delete.', 'error');
      }
    }
  };

  const handleSaveEdit = async () => {
    try {
      await API.put(`/api/interns/${editStudent._id}`, editStudent);
      setStudents((prev) =>
        prev.map((s) => (s._id === editStudent._id ? editStudent : s))
      );
      setShowEditModal(false);
      Swal.fire('Updated!', 'Student data updated.', 'success');
    } catch (err) {
      Swal.fire('Error', 'Failed to update student.', 'error');
    }
  };

  const filteredStudents = students.filter((s) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      s.Name?.toLowerCase().includes(term) ||
      s.mobile?.toLowerCase().includes(term) ||
      s.internshipType?.toLowerCase().includes(term) ||
      s.interviewStatus?.toLowerCase().includes(term) ||
      s.statusType?.toLowerCase().includes(term) ||
      s.notes?.toLowerCase().includes(term);

    const matchesInternship = selectedInternshipType
      ? s.internshipType === selectedInternshipType
      : true;

    const matchesInterview = selectedInterviewStatus
      ? s.interviewStatus === selectedInterviewStatus
      : true;

    const matchesStatus = selectedStatusType
      ? s.statusType === selectedStatusType
      : true;

    return matchesSearch && matchesInternship && matchesInterview && matchesStatus;
  });

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedStudents = filteredStudents.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filteredStudents.length / pageSize);

  return (
    <Container className="py-4">
      <Row className="mb-3 align-items-center">
        <Col xs="auto">
          <h4 className="fw-semibold">
            🎓 Intern List ({filteredStudents.length} shown / {students.length} total)
          </h4>
        </Col>
        <Col xs={12} className="d-flex flex-wrap gap-2 mt-2">
          <Form.Select
            size="sm"
            value={selectedInternshipType}
            onChange={(e) => {
              setSelectedInternshipType(e.target.value);
              setCurrentPage(1);
            }}
            style={{ maxWidth: '280px' }}
          >
            <option value="">All Internship Types</option>
            {[...new Set(students.map((s) => s.internshipType).filter(Boolean))].map((type, i) => (
              <option key={i} value={type}>{type}</option>
            ))}
          </Form.Select>

          <Form.Select
            size="sm"
            value={selectedInterviewStatus}
            onChange={(e) => {
              setSelectedInterviewStatus(e.target.value);
              setCurrentPage(1);
            }}
            style={{ maxWidth: '200px' }}
          >
            <option value="">All Interview Statuses</option>
            <option>Not Scheduled</option>
            <option>Scheduled</option>
            <option>Cleared</option>
            <option>Not Cleared</option>
            <option>Offer Letter To Be Shared</option>
            <option>Offer Letter Sent</option>
            <option>Offer Letter Accepted</option>
          </Form.Select>

          <Form.Select
            size="sm"
            value={selectedStatusType}
            onChange={(e) => {
              setSelectedStatusType(e.target.value);
              setCurrentPage(1);
            }}
            style={{ maxWidth: '200px' }}
          >
            <option value="">All Status Types</option>
            <option>Yes</option>
            <option>No</option>
            <option>Not Answered</option>
          </Form.Select>

          <Form.Control
            size="sm"
            type="text"
            placeholder="🔍 Search any field..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            style={{ maxWidth: '220px' }}
          />

          <Form.Select
            size="sm"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            style={{ maxWidth: '120px' }}
          >
            <option value={50}>50 / page</option>
            <option value={30}>30 / page</option>
            <option value={20}>20 / page</option>
          </Form.Select>

          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => setShowFullName(!showFullName)}
          >
            {showFullName ? '🔽 Collapse Name' : '🔼 Expand Name'}
          </Button>
        </Col>
      </Row>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p className="mt-2">Loading interns...</p>
        </div>
      ) : error ? (
        <Alert variant="danger" className="text-center">{error}</Alert>
      ) : filteredStudents.length === 0 ? (
        <p className="text-center text-muted">No interns found.</p>
      ) : (
        <>
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Internship Type</th>
                  <th>Interview Status</th>
                  <th>Status Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedStudents.map((student, index) => (
                  <tr key={student._id || index}>
                    <td>{startIndex + index + 1}</td>
                    <td style={{
                      maxWidth: showFullName ? 'none' : '150px',
                      whiteSpace: showFullName ? 'normal' : 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      wordBreak: 'break-word'
                    }}>
                      {student.Name || 'Unnamed'}
                    </td>
                    <td>{student.mobile || 'N/A'}</td>
                    <td>{student.internshipType || 'N/A'}</td>
                    <td>{student.interviewStatus?.trim() || 'Not Scheduled'}</td>
                    <td>{student.statusType?.trim() || 'No'}</td>
                    <td>
                      <FaEye title="View" style={{ cursor: 'pointer', marginRight: 10, color: 'blue' }} onClick={() => handleView(student)} />
                      <FaEdit title="Edit" style={{ cursor: 'pointer', marginRight: 10, color: 'green' }} onClick={() => handleEdit(student)} />
                      <FaTrash title="Delete" style={{ cursor: 'pointer', color: 'red' }} onClick={() => handleDelete(student)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <nav>
            <ul className="pagination pagination-sm justify-content-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Intern</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editStudent && (
            <>
              <Form.Group className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control value={editStudent.Name} onChange={(e) => setEditStudent({ ...editStudent, Name: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Mobile</Form.Label>
                <Form.Control value={editStudent.mobile} onChange={(e) => setEditStudent({ ...editStudent, mobile: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Internship Type</Form.Label>
                <Form.Control value={editStudent.internshipType} onChange={(e) => setEditStudent({ ...editStudent, internshipType: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Interview Status</Form.Label>
                <Form.Select value={editStudent.interviewStatus || 'Not Scheduled'} onChange={(e) => setEditStudent({ ...editStudent, interviewStatus: e.target.value })}>
                  <option>Not Scheduled</option>
                  <option>Scheduled</option>
                  <option>Cleared</option>
                  <option>Not Cleared</option>
                  <option>Offer Letter To Be Shared</option>
                  <option>Offer Letter Sent</option>
                  <option>Offer Letter Accepted</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Status Type</Form.Label>
                <Form.Select value={editStudent.statusType || 'N/A'} onChange={(e) => setEditStudent({ ...editStudent, statusType: e.target.value })}>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Not Answered</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Notes</Form.Label>
                <Form.Control value={editStudent.notes || ''} onChange={(e) => setEditStudent({ ...editStudent, notes: e.target.value })} />
              </Form.Group>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSaveEdit}>
            <FaSave className="me-2" /> Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default StudentData;
