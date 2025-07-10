import React, { useEffect, useState } from 'react';
import { Accordion, Form, Row, Col, Button, Modal } from 'react-bootstrap';

function StudentModal({ show, onHide, onSave, mode = 'add', data }) {
  const [formData, setFormData] = useState({
    fullName: '', mobile: '', whatsapp: '', email: '', dob: '', gender: '', city: '', state: '',
    linkedin: '', portfolio: '', profilePicture: '',
    collegeName: '', courseBranch: '', collegeLocation: '', yearOfPassing: '', academicScore: '', backlogs: '',
    enrolledCourse: [], trainingMode: '', trainer: '', batchTime: '', startDate: '', trainingTime: '',
    fee: '', paymentStatus: '',
    nextCall: '', discussion: '', remarks: '', resumeStatus: '', leadSource: '', counselor: '', updatedAt: '', docsCollected: '',
    interviewStatus: '', placementStatus: '', company: '', ctc: '', trainingStatus: ''
  });

  const isViewMode = mode === 'view';
  const isEditMode = mode === 'edit';

  useEffect(() => {
    if (data) setFormData(data);
    else resetForm();
  }, [data, show]);

  const resetForm = () => {
    setFormData({
      fullName: '', mobile: '', whatsapp: '', email: '', dob: '', gender: '', city: '', state: '',
      linkedin: '', portfolio: '', profilePicture: '',
      collegeName: '', courseBranch: '', collegeLocation: '', yearOfPassing: '', academicScore: '', backlogs: '',
      enrolledCourse: [], trainingMode: '', trainer: '', batchTime: '', startDate: '', trainingTime: '',
      fee: '', paymentStatus: '',
      nextCall: '', discussion: '', remarks: '', resumeStatus: '', leadSource: '', counselor: '', updatedAt: '', docsCollected: '',
      interviewStatus: '', placementStatus: '', company: '', ctc: '', trainingStatus: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (course) => {
    const updated = formData.enrolledCourse.includes(course)
      ? formData.enrolledCourse.filter(c => c !== course)
      : [...formData.enrolledCourse, course];
    setFormData(prev => ({
      ...prev,
      enrolledCourse: updated
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isViewMode && onSave) {
      onSave(formData);
    }
    if (!isEditMode) {
      resetForm();
    }
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="xl" backdrop="static" scrollable>
      <Modal.Header closeButton>
        <Modal.Title>{isViewMode ? 'View' : isEditMode ? 'Edit' : 'Add'} Student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Accordion defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>🧑 Basic Information</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Full Name 🖊️</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        disabled={isViewMode}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Mobile Number 🖊️</Form.Label>
                      <Form.Control
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        disabled={isViewMode}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>WhatsApp Number 🖊️</Form.Label>
                      <Form.Control
                        type="text"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        disabled={isViewMode}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                    <Row className="mt-3">
                       
                        <Col md={4}>
                        <Form.Group>
                            <Form.Label>Email ID 🖊️</Form.Label>
                            <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            />
                        </Form.Group>
                        </Col>
                         <Col md={4}>
                        <Form.Group>
                            <Form.Label>Date of Birth 📅</Form.Label>
                            <Form.Control
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            />
                        </Form.Group>
                        </Col>
                        <Col md={4}>
                        <Form.Group>
                            <Form.Label>Gender 🔽</Form.Label>
                            <Form.Select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            </Form.Select>
                        </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mt-3">
                         <Col md={4}>
                        <Form.Group>
                            <Form.Label>City 🖊️</Form.Label>
                            <Form.Control
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            />
                        </Form.Group>
                        </Col>
                        <Col md={4}>
                        <Form.Group>
                            <Form.Label>State 🔽</Form.Label>
                            <Form.Select
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            >
                            <option value="">Select State</option>
                            <option>Uttar Pradesh</option>
                            <option>Bihar</option>
                            <option>Haryana</option>
                            <option>Delhi</option>
                            <option>Himachal Pradesh</option>
                            <option>Punjab</option>
                            <option>Gujarat</option>
                            <option>Jharkhand</option>
                            <option>West Bengal</option>
                            <option>Madhya Pradesh</option>
                            <option>Chhattisgarh</option>
                            <option>Odisha</option>
                            <option>Meghalaya</option>
                            <option>Goa</option>
                            <option>Assam</option>
                            <option>Arunachal Pradesh</option>
                            <option>Mizoram</option>
                            <option>Andhra Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Nagaland</option>
                            <option>Manipur</option>
                            <option>Kerala</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Karnataka</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>                        
                            <option>Uttarakhand</option>
                            <option>Other</option>
                            </Form.Select>
                        </Form.Group>
                        </Col>
                        <Col md={4}>
                        <Form.Group controlId="formFile">
                            <Form.Label>Profile Picture 📤</Form.Label>
                            <Form.Control
                            type="file"
                            name="profilePicture"
                            onChange={(e) =>
                                setFormData((prev) => ({
                                ...prev,
                                profilePicture: e.target.files[0],
                                }))
                            }
                            />
                        </Form.Group>
                        </Col>
                    </Row>


                    <Row className="mt-3">
                        <Col md={6}>
                        <Form.Group>
                            <Form.Label>LinkedIn Profile 🖊️</Form.Label>
                            <Form.Control
                            type="url"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                            />
                        </Form.Group>
                        </Col>
                        <Col md={6}>
                        <Form.Group>
                            <Form.Label>Portfolio Link 🖊️</Form.Label>
                            <Form.Control
                            type="url"
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={handleChange}
                            />
                        </Form.Group>
                        </Col>
                    </Row>
                      <h5 className="mb-3">Education Details</h5>

                    <Row>
                    <Col md={4}>
                        <Form.Group>
                        <Form.Label>College Name 🖊️</Form.Label>
                        <Form.Control name="collegeName" value={formData.collegeName} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                        <Form.Label>Course / Branch (e.g., B.Tech CSE) 🖊️</Form.Label>
                        <Form.Control name="courseBranch" value={formData.courseBranch} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                     <Col md={4}>
                        <Form.Group>
                        <Form.Label>College Location 🖊️</Form.Label>
                        <Form.Control name="collegeLocation" value={formData.collegeLocation} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    </Row>

                    <Row className="mt-3">
                    <Col md={4}>
                        <Form.Group>
                        <Form.Label>Year of Passing 🔽</Form.Label>
                        <Form.Select name="yearOfPassing" value={formData.yearOfPassing} onChange={handleChange}>
                            <option value="">Select</option>
                            <option>2028</option>
                            <option>2027</option>
                            <option>2026</option>
                            <option>2025</option>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                        </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                        <Form.Label>Academic % / CGPA 🖊️</Form.Label>
                        <Form.Control name="academicScore" value={formData.academicScore} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                        <Form.Label>Backlogs 🔽</Form.Label>
                        <Form.Select name="backlogs" value={formData.backlogs} onChange={handleChange}>
                            <option value="">Select</option>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Select>
                        </Form.Group>
                    </Col>
                    </Row>

                    
                    <hr className="my-4" />
                        <h5 className="mb-3">📚 Training Details</h5>
                        <Row className="mt-3">
                        <Col md={4}>
                            <Form.Group>
                            <Form.Label>Training Mode 🔽</Form.Label>
                            <Form.Select name="trainingMode" value={formData.trainingMode} onChange={handleChange}>
                                <option value="">Select</option>
                                <option>Online</option>
                                <option>Offline</option>
                                <option>Hybrid</option>
                            </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                            <Form.Label>Trainer Name 🖊️</Form.Label>
                            <Form.Control name="trainer" value={formData.trainer} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                          <Col md={4}>
                            <Form.Group>
                            <Form.Label>Batch Time / Slot 🕒</Form.Label>
                            <Form.Control name="batchTime" value={formData.batchTime} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        </Row>

                        <Row className="mt-4">
                            <Col md={4}>
                            <Form.Group>
                            <Form.Label>Training Time 🕘</Form.Label>
                            <Form.Control name="trainingTime" value={formData.trainingTime} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                            <Form.Label>Training Fee Amount 💰</Form.Label>
                            <Form.Control name="fee" value={formData.fee} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                      
                        <Col md={4}>
                            <Form.Group>
                            <Form.Label>Training Start Date 📅</Form.Label>
                            <Form.Control type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        </Row>

                        <Row className="mt-4">
                        
                        </Row>

                        <Row className="mt-3">
                        <Col md={4}>
                            <Form.Group>
                            <Form.Label>Payment Status 🔽</Form.Label>
                            <Form.Select name="paymentStatus" value={formData.paymentStatus} onChange={handleChange}>
                                <option value="">Select</option>
                                <option>Not Paid</option>
                                <option>Partially Paid</option>
                                <option>Fully Paid</option>
                            </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={8}>
                            <Form.Group>
                                <Form.Label>Course Enrolled</Form.Label>
                                <div className="d-flex flex-wrap gap-3 ms-2">
                                {["Frontend", "Full Stack", "DevOps", "AI/ML", "Cloud", "Web Design","Backend","JAVA","Other"].map((course, index) => (
                                    <Form.Check
                                    key={index}
                                    inline
                                    type="checkbox"
                                    label={course}
                                    value={course}
                                    checked={formData.enrolledCourse.includes(course)}
                                    onChange={() => {
                                        const selected = formData.enrolledCourse.includes(course)
                                        ? formData.enrolledCourse.filter(c => c !== course)
                                        : [...formData.enrolledCourse, course];
                                        setFormData(prev => ({
                                        ...prev,
                                        enrolledCourse: selected
                                        }));
                                    }}
                                    />
                                ))}
                                </div>
                            </Form.Group>
                            </Col>


                        </Row>
                         
                        <hr className="my-4" />
                        <h5 className="mb-3">📞 Follow-up & Progress</h5>

                        <Row>
                        <Col md={4}>
                            <Form.Group>
                            <Form.Label>Next Call Date 📅</Form.Label>
                            <Form.Control type="date" name="nextCall" value={formData.nextCall} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                         <Col md={4}>
                            <Form.Group>
                            <Form.Label>Resume Status 🔽</Form.Label>
                            <Form.Select name="resumeStatus" value={formData.resumeStatus} onChange={handleChange}>
                                <option value="">Select</option>
                                <option>Uploaded</option>
                                <option>Not Uploaded</option>
                            </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                            <Form.Label>Lead Source 🔽</Form.Label>
                            <Form.Select name="leadSource" value={formData.leadSource} onChange={handleChange}>
                                <option value="">Select</option>
                                <option>LinkedIn</option>
                                <option>Referral</option>
                                <option>College</option>
                                <option>WhatsApp</option>
                                <option>Website</option>
                                <option>Other</option>
                            </Form.Select>
                            </Form.Group>
                        </Col>
                        </Row>
                        <Row className="mt-3">
                        <Col md={4}>
                            <Form.Group>
                            <Form.Label>Assigned Counselor 🖊️</Form.Label>
                            <Form.Control name="counselor" value={formData.counselor} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                            <Form.Label>Last Updated 📅</Form.Label>
                            <Form.Control type="date" name="updatedAt" value={formData.updatedAt} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                         <Col md={4}>
                            <Form.Group>
                            <Form.Label>Documents Collected 🔽</Form.Label>
                            <Form.Select name="docsCollected" value={formData.docsCollected} onChange={handleChange}>
                                <option value="">Select</option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Select>
                            </Form.Group>
                        </Col>
                        </Row>
                        <Row className="mt-3">
                        <Col md={6}>
                            <Form.Group>
                            <Form.Label>What Needs to Be Discussed 📝</Form.Label>
                            <Form.Control as="textarea" rows={2} name="discussion" value={formData.discussion} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                            <Form.Label>Notes / Remarks 📝</Form.Label>
                            <Form.Control as="textarea" rows={2} name="remarks" value={formData.remarks} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        </Row>


                        <hr className="my-4" />
                        <h5 className="mb-3">💼 Interview & Placement Status</h5>

                        <Row>
                        <Col md={4}>
                            <Form.Group>
                            <Form.Label>Interview Status 🔽</Form.Label>
                            <Form.Select name="interviewStatus" value={formData.interviewStatus} onChange={handleChange}>
                                <option value="">Select</option>
                                <option>Not Scheduled</option>
                                <option>Scheduled</option>
                                <option>Cleared</option>
                                <option>Not Cleared</option>
                                <option>Offer Letter To Be Shared</option>
                                <option>Offer Letter Sent</option>
                                <option>Offer Letter Accepted</option>
                            </Form.Select>
                            </Form.Group>
                        </Col>
                         <Col md={4}>
                            <Form.Group>
                            <Form.Label>Training Status 🔽</Form.Label>
                            <Form.Select name="trainingStatus" value={formData.trainingStatus} onChange={handleChange}>
                                <option value="">Select</option>
                                <option>Not Started</option>
                                <option>Started</option>
                                <option>Completed</option>
                            </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                            <Form.Label>Placement Status 🔽</Form.Label>
                            <Form.Select name="placementStatus" value={formData.placementStatus} onChange={handleChange}>
                                <option value="">Select</option>
                                <option>Placed</option>
                                <option>Not Placed</option>
                            </Form.Select>
                            </Form.Group>
                        </Col>
                        </Row>

                        <Row className="mt-3">
                        <Col md={6}>
                            <Form.Group>
                            <Form.Label>Company Name 🖊️</Form.Label>
                            <Form.Control name="company" value={formData.company} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                            <Form.Label>CTC Offered 🖊️</Form.Label>
                            <Form.Control name="ctc" value={formData.ctc} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {!isViewMode && (
            <div className="text-end mt-4">
              <Button variant="primary" type="submit">
                {isEditMode ? 'Update Student' : 'Save Student'}
              </Button>
            </div>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default StudentModal;
