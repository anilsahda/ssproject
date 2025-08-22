function SSDigitalLibrary() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h1>Digital Library Management System</h1>

      <h2>Project Overview</h2>
      <p>The <strong>SS Digital Library</strong> is a web-based application designed to manage library resources efficiently. It allows users to access books, journals, and other digital content online, while administrators manage the library catalog and user access.</p>
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
        <li>Manage roles and permissions (Admin, Librarian, User)</li>
        <li>Manage system users and assign roles</li>
      </ul>

      <h3>2. Admin Module</h3>
      <ul>
        <li>Manage library catalog including books, journals, and e-resources</li>
        <li>Generate reports on library usage and borrowed items</li>
        <li>Monitor librarian activities</li>
      </ul>

      <h3>3. Librarian Module</h3>
      <ul>
        <li>Approve user requests for borrowing digital books</li>
        <li>Manage library inventory and track borrowed/returned items</li>
        <li>Upload new digital content and categorize resources</li>
      </ul>

      <h3>4. User Module</h3>
      <ul>
        <li>Search and browse books, journals, and other resources</li>
        <li>Borrow digital books and view borrowing history</li>
        <li>Request new books or resources</li>
        <li>Download e-books or access online content</li>
      </ul>

      <h2>System Workflow</h2>
      <ol>
        <li>Super Admin → manages roles and system users</li>
        <li>Admin → manages catalog and monitors librarian activity</li>
        <li>Librarian → approves borrow requests and manages resources</li>
        <li>User → searches, borrows, and accesses digital content</li>
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
            <td>Manage catalog, reports, and librarian activities</td>
          </tr>
          <tr>
            <td>Librarian</td>
            <td>Manage inventory, approve borrow requests, upload resources</td>
          </tr>
          <tr>
            <td>User</td>
            <td>Search, borrow, and access digital content</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Features for Students</h2>
      <ul>
        <li>Role-based access control for secure management</li>
        <li>Online access to books, journals, and e-resources</li>
        <li>Borrowing and return tracking system</li>
        <li>Downloadable digital content and reading history</li>
        <li>Cloud-ready for deployment on AWS</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The <strong>Digital Library Management System</strong> provides an easy-to-use platform for managing library resources online. 
        It helps administrators, librarians, and students access, track, and manage digital resources efficiently.
      </p>
    </div>
  );
}

export default SSDigitalLibrary;
