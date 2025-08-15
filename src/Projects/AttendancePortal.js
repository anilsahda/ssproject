import React from 'react';

function AttendancePortal() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h1>Employee Attendance Portal</h1>

      <h2>Project Overview</h2>
      <p>
        The <strong>Employee Attendance Portal</strong> is a web-based application designed to manage employee attendance efficiently. 
        It allows HR and employees to track working hours, leave, and attendance reports in a simple and automated way.
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
        <li>Create and manage roles (Admin, HR, Employee)</li>
        <li>Manage system users and permissions</li>
      </ul>

      <h3>2. Admin Module</h3>
      <ul>
        <li>Manage all employees and attendance policies</li>
        <li>Generate attendance reports and analytics</li>
        <li>Configure leave types and working schedules</li>
      </ul>

      <h3>3. HR / Attendance Manager Module</h3>
      <ul>
        <li>Mark and verify employee attendance</li>
        <li>Approve or reject leave requests</li>
        <li>Track overtime and late arrivals</li>
        <li>Generate monthly and yearly attendance summaries</li>
      </ul>

      <h3>4. Employee Module</h3>
      <ul>
        <li>Mark daily attendance (Check-in/Check-out)</li>
        <li>Apply for leave and view leave balance</li>
        <li>View attendance history and reports</li>
        <li>Receive notifications regarding attendance or approvals</li>
      </ul>

      <h2>System Workflow</h2>
      <ol>
        <li>Super Admin → manages roles and system users</li>
        <li>Admin → sets attendance policies and manages employee records</li>
        <li>HR/Attendance Manager → monitors attendance, approves leave</li>
        <li>Employee → marks attendance, applies for leave, views reports</li>
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
            <td>Manage roles and system users</td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>Manage employees, attendance policies, and reports</td>
          </tr>
          <tr>
            <td>HR / Attendance Manager</td>
            <td>Monitor attendance, approve leave, generate summaries</td>
          </tr>
          <tr>
            <td>Employee</td>
            <td>Mark attendance, apply for leave, view history</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Features for Students</h2>
      <ul>
        <li>Role-based access control for secure management</li>
        <li>Automated attendance tracking and reporting</li>
        <li>Leave management with approval workflow</li>
        <li>Employee self-service for attendance marking and viewing history</li>
        <li>Cloud-ready for deployment on AWS</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The <strong>Employee Attendance Portal</strong> simplifies the process of tracking employee attendance, managing leave, and generating reports. 
        It provides transparency and efficiency for both employees and HR teams in any organization.
      </p>
    </div>
  );
}

export default AttendancePortal;
