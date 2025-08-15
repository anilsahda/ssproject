import React from 'react';

function HospitalManagement() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h1>Hospital Management System</h1>

      <h2>Project Overview</h2>
      <p>
        The <strong>Hospital Management System</strong> is a web-based application designed to manage hospital operations efficiently. 
        It allows administrators, doctors, and staff to handle patient records, appointments, billing, and other hospital activities in a seamless manner.
      </p>

      <h2>Technology Stack</h2>
      <ul>
        <li>Front-End: React / Next.js</li>
        <li>Back-End: .NET Core | Spring Boot | Node.js</li>
        <li>Database: SQL Server</li>
        <li>Cloud Platform: AWS</li>
      </ul>

      <h2>Modules and Functionalities</h2>

      <h3>1. Super Admin Module</h3>
      <ul>
        <li>Manage roles and permissions (Admin, Doctor, Staff, Patient)</li>
        <li>Manage system users and assign roles</li>
      </ul>

      <h3>2. Admin Module</h3>
      <ul>
        <li>Manage doctors, staff, and patient records</li>
        <li>Monitor hospital operations and generate reports</li>
        <li>Manage appointments, billing, and inventory of medical supplies</li>
      </ul>

      <h3>3. Doctor / Staff Module</h3>
      <ul>
        <li>View patient records and history</li>
        <li>Update medical records and prescribe treatment</li>
        <li>Manage appointments and follow-ups</li>
        <li>Generate medical reports and discharge summaries</li>
      </ul>

      <h3>4. Patient Module</h3>
      <ul>
        <li>Book appointments with doctors</li>
        <li>View personal medical records and prescriptions</li>
        <li>Access billing and payment information</li>
        <li>Receive notifications for appointments and follow-ups</li>
      </ul>

      <h2>System Workflow</h2>
      <ol>
        <li>Super Admin → manages roles and system users</li>
        <li>Admin → manages doctors, staff, patients, and hospital operations</li>
        <li>Doctor/Staff → manages patient care, appointments, and medical records</li>
        <li>Patient → books appointments, views records, and tracks billing</li>
      </ol>

      <h2>Roles & Responsibilities</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Role</th>
            <th>Responsibilities</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Super Admin</td>
            <td>Manage roles, system users, and permissions</td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>Manage doctors, staff, patients, appointments, and reports</td>
          </tr>
          <tr>
            <td>Doctor / Staff</td>
            <td>Handle patient care, medical records, and prescriptions</td>
          </tr>
          <tr>
            <td>Patient</td>
            <td>Book appointments, view records, and track billing</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Features for Students</h2>
      <ul>
        <li>Role-based access control for secure management</li>
        <li>Manage patient records and hospital operations efficiently</li>
        <li>Appointment scheduling and notifications</li>
        <li>Billing and inventory management</li>
        <li>Cloud-ready for deployment on AWS</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The <strong>Hospital Management System</strong> streamlines hospital operations, enhances patient care, and improves administrative efficiency. 
        It provides a centralized platform for managing all hospital-related activities in a secure and organized manner.
      </p>
    </div>
  );
}

export default HospitalManagement;
