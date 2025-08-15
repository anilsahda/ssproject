import React from 'react';

function SocietyManagement() {
  return (
    <div>
      <h1>Smart Society E-Housing</h1>

      <h2>Project Overview</h2>
      <p>
        The <strong>Smart Society E-Housing</strong> is a web-based application designed to simplify society management.
        It helps track societies, houses, and members efficiently.
      </p>
      <ul>
        <li>Members (house owners) can advertise houses for rent or sale.</li>
        <li>Users can search houses and contact owners.</li>
        <li>Owners can submit complaints online.</li>
        <li>Admins can manage societies, houses, and complaints effectively.</li>
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
      <p>The Super Admin has the highest level of access and controls roles and users.</p>
      <ul>
        <li>Role Management: Create, update, delete roles (Admin, Owner, User)</li>
        <li>User Management: Add users, assign roles, update or deactivate accounts</li>
      </ul>
      <p><em>Example:</em> Super Admin creates a new Admin account and assigns the role.</p>

      <h3>2. Admin Module</h3>
      <p>Admin manages societies, houses, members, and complaints.</p>
      <ul>
        <li>Admin Login</li>
        <li>Society Management: Add, update, or remove societies</li>
        <li>House Management: Add houses under societies, allocate houses to owners</li>
        <li>Owner/Member Management: View, update, or deactivate accounts</li>
        <li>Complaint Management: View and resolve complaints</li>
        <li>Reports: Generate reports on houses and complaints</li>
      </ul>
      <p><em>Example:</em> Admin adds "Sunshine Society", creates 15 houses, and assigns them to members.</p>

      <h3>3. Owner Module</h3>
      <p>Owners are members who own houses in a society.</p>
      <ul>
        <li>Login using credentials</li>
        <li>House Management: Add house details, advertise houses for rent/sale, update availability</li>
        <li>Complaint Management: Submit complaints and track status</li>
        <li>Account Management: Update personal details, change password</li>
        <li>Message Management: Receive messages from users</li>
      </ul>
      <p><em>Example:</em> An owner lists a 2BHK for rent and gets messages from potential tenants.</p>

      <h3>4. User Module</h3>
      <p>Users are visitors who search for houses to rent or buy.</p>
      <ul>
        <li>Search Houses by society or owner name</li>
        <li>Check availability of houses for rent/sale</li>
        <li>Contact Owner directly</li>
      </ul>
      <p><em>Example:</em> A user searches in "Sunshine Society", finds a 2BHK for rent, and contacts the owner.</p>

      <h2>System Workflow</h2>
      <ol>
        <li>Super Admin → creates roles → adds users → assigns roles</li>
        <li>Admin → creates societies → adds houses → allocates houses → manages complaints → generates reports</li>
        <li>Owner → logs in → advertises houses → manages complaints → receives messages</li>
        <li>User → searches houses → checks availability → contacts owners</li>
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
            <td>Create/manage roles and users, assign roles</td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>Manage societies, houses, owners, complaints, and generate reports</td>
          </tr>
          <tr>
            <td>Owner</td>
            <td>Advertise houses, manage account and complaints, receive messages from users</td>
          </tr>
          <tr>
            <td>User</td>
            <td>Search houses, view details, contact owners</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Features for Students</h2>
      <ul>
        <li>All operations online: advertise houses, search, submit complaints</li>
        <li>Role-Based Access: Super Admin → Admin → Owner → User</li>
        <li>Reports & Tracking: Admin can track complaints and house availability efficiently</li>
        <li>Cloud-Ready: AWS deployment ensures accessibility and scalability</li>
        <li>Easy to Use: Simplifies renting, buying, and managing houses in a society</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The <strong>Smart Society E-Housing System</strong> makes society management efficient, transparent, and user-friendly. 
        It allows seamless communication between admins, owners, and users, making house rental, sale, and complaint management fast and organized.
      </p>
    </div>
  );
}

export default SocietyManagement;
