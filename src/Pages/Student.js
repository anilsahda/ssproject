import React, { useEffect, useState } from 'react';
import { Button, Container, Table, Row, Col, Form } from 'react-bootstrap';
import { FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import StudentModal from './StudentModal';
import API from '../api';
import Swal from 'sweetalert2';


function Student() {
    const [show, setShow] = useState(false);
    const [modalMode, setModalMode] = useState('add');
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [studentList, setStudentList] = useState([]);

    // 🔻 Filter states
    const [filterCourse, setFilterCourse] = useState('');
    const [filterInterviewStatus, setFilterInterviewStatus] = useState('');
    const [filterPaymentStatus, setFilterPaymentStatus] = useState('');

    const fetchStudents = async () => {
        const res = await API.get('/api/students');
        setStudentList(res.data);
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleSave = async (data) => {
        if (modalMode === 'edit' && selectedStudent) {
            const res = await API.put(`/api/students/${selectedStudent._id}`, data);
            setStudentList(prev =>
                prev.map(stu => (stu._id === selectedStudent._id ? res.data : stu))
            );
            Swal.fire('Updated!', 'Student data has been updated.', 'success');
        } else {
            const res = await API.post('/api/students', data);
            setStudentList(prev => [res.data, ...prev]);
            Swal.fire('Added!', 'New student has been added.', 'success');
        }
        setShow(false);
    };

    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to delete this student?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (confirm.isConfirmed) {
            await API.delete(`/api/students/${id}`);
            setStudentList(prev => prev.filter(stu => stu._id !== id));
            Swal.fire('Deleted!', 'Student has been deleted.', 'success');
        }
    };

    const handleView = (student) => {
        setSelectedStudent(student);
        setModalMode('view');
        setShow(true);
    };

    const handleEdit = (student) => {
        setSelectedStudent(student);
        setModalMode('edit');
        setShow(true);
    };

    const handleAdd = () => {
        setSelectedStudent(null);
        setModalMode('add');
        setShow(true);
    };

    // 🔍 Filtered student list
    const filteredStudents = studentList.filter(student => {
        const matchCourse = filterCourse ? student.enrolledCourse?.includes(filterCourse) : true;
        const matchInterview = filterInterviewStatus ? student.interviewStatus === filterInterviewStatus : true;
        const matchPayment = filterPaymentStatus ? student.paymentStatus === filterPaymentStatus : true;
        return matchCourse && matchInterview && matchPayment;
    });

    return (
        <Container className="mt-4">
            <Row className="mb-4 align-items-center">
                <Col><h3>🎓 Student Management</h3></Col>
                <Col className="text-end">
                    <Button variant="primary" onClick={handleAdd}>
                        <FaPlus className="me-1" /> Add Student
                    </Button>
                </Col>
            </Row>

            {/* 🔽 Filter Dropdowns */}
            <Row className="mb-3">
                <Col md={2}>
                    <Form.Select value={filterCourse} onChange={(e) => setFilterCourse(e.target.value)}>
                        <option value="">All Courses</option>
                        <option>Frontend</option>
                        <option>Backend</option>
                        <option>Full Stack</option>
                        <option>DevOps</option>
                        <option>AI/ML</option>
                        <option>Cloud</option>
                        <option>Web Design</option>
                        <option>JAVA</option>
                        <option>Other</option>
                    </Form.Select>
                </Col>
                <Col md={2}>
                    <Form.Select value={filterInterviewStatus} onChange={(e) => setFilterInterviewStatus(e.target.value)}>
                        <option value="">All Interview Status</option>
                        <option>Not Scheduled</option>
                        <option>Scheduled</option>
                        <option>Cleared</option>
                        <option>Not Cleared</option>
                        <option>Offer Letter To Be Shared</option>
                        <option>Offer Letter Sent</option>
                        <option>Offer Letter Accepted</option>
                    </Form.Select>
                </Col>
                <Col md={2}>
                    <Form.Select value={filterPaymentStatus} onChange={(e) => setFilterPaymentStatus(e.target.value)}>
                        <option value="">All Payment Status</option>
                        <option>Not Paid</option>
                        <option>Partially Paid</option>
                        <option>Fully Paid</option>
                    </Form.Select>
                </Col>
            </Row>

            <StudentModal
                show={show}
                onHide={() => setShow(false)}
                onSave={handleSave}
                mode={modalMode}
                data={selectedStudent}
            />

            {filteredStudents.length > 0 ? (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>SrNo</th>
                            <th>Full Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Course(s)</th>
                            <th>Interview Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((stu, index) => (
                            <tr key={stu._id}>
                                <td>{index + 1}</td>
                                <td>{stu.fullName}</td>
                                <td>{stu.mobile}</td>
                                <td>{stu.email}</td>
                                <td>{stu.enrolledCourse?.join(', ')}</td>
                                <td>{stu.interviewStatus}</td>
                                <td>
                                    <Button variant="info" size="sm" className="me-1" onClick={() => handleView(stu)} title="View"><FaEye /></Button>
                                    <Button variant="warning" size="sm" className="me-1" onClick={() => handleEdit(stu)} title="Edit"><FaEdit /></Button>
                                    <Button variant="danger" size="sm" onClick={() => handleDelete(stu._id)} title="Delete"><FaTrash /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>No students match the selected filters.</p>
            )}
        </Container>
    );
}

export default Student;
