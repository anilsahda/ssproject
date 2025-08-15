import React from 'react';

function JobPortal() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h1>Smart Job Portal</h1>

      <h2>Project Overview</h2>
      <p>
        The <strong>Smart Job Portal</strong> is a web-based application designed to connect job seekers and employers efficiently. 
        It allows users to search and apply for jobs, and employers to post jobs and manage applications.
      </p>
      <ul>
        <li>Employers can post jobs and manage candidate applications.</li>
        <li>Job seekers can search for jobs, apply online, and manage their profiles.</li>
        <li>Admins manage users, jobs, and system reports.</li>
      </ul>

      <h2>Technology Stack</h2>
      <ul>
        <li>Front-End: React / Next.js</li>
        <li>Back-End: .NET Core | Spring Boot | Node.js</li>
        <li>Database: SQL Server</li>
        <li>Cloud Platform: AWS</li>
      </ul>

      <h2>Modules and Functionalities</h2>

      <h3>1. Super Admin Module</h3>
      <p>The Super Admin manages users and roles.</p>
      <ul>
        <li>Create, update, and delete roles (Admin, Employer, Job Seeker)</li>
        <li>Manage users and assign roles</li>
      </ul>

      <h3>2. Admin Module</h3>
      <p>Admin manages the entire job portal system.</p>
      <ul>
        <li>Login with secure credentials</li>
        <li>Manage users, jobs, and applications</li>
        <li>Generate system reports</li>
      </ul>

      <h3>3. Employer Module</h3>
      <p>Employers can post jobs and manage applications.</p>
      <ul>
        <li>Post new job openings</li>
        <li>Edit or delete existing job posts</li>
        <li>View and manage applications from job seekers</li>
        <li>Send messages to applicants</li>
      </ul>

      <h3>4. Job Seeker Module</h3>
      <p>Job seekers can search and apply for jobs.</p>
      <ul>
        <li>Create and manage personal profiles</li>
        <li>Search for jobs by title, location, or company</li>
        <li>Apply online and track application status</li>
        <li>Receive messages from employers</li>
      </ul>

      <h2>System Workflow</h2>
      <ol>
        <li>Super Admin → manages roles and users</li>
        <li>Admin → manages all jobs, users, and reports</li>
        <li>Employer → posts jobs → receives applications → communicates with candidates</li>
        <li>Job Seeker → searches jobs → applies → receives messages</li>
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
            <td>Create/manage roles and users</td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>Manage all jobs, users, applications, and reports</td>
          </tr>
          <tr>
            <td>Employer</td>
            <td>Post jobs, manage applications, communicate with candidates</td>
          </tr>
          <tr>
            <td>Job Seeker</td>
            <td>Search jobs, apply, and manage profile</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Features for Students</h2>
      <ul>
        <li>Role-Based Access: Super Admin → Admin → Employer → Job Seeker</li>
        <li>Online job application system</li>
        <li>Profile management for job seekers and employers</li>
        <li>Admin reporting for tracking jobs and users</li>
        <li>Cloud-ready for deployment on AWS</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The <strong>Smart Job Portal</strong> provides a structured platform to connect job seekers and employers efficiently. 
        It simplifies the recruitment process by allowing seamless posting, searching, and application tracking online.
      </p>
    </div>
  );
}

export default JobPortal;
