function SSBanking() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h1>SS Banking</h1>

      <h2>Project Overview</h2>
      <p>
        The <strong>SS Banking</strong> is a secure and scalable web-based banking application designed to manage customer accounts, transactions, loans, and other banking operations. 
        It provides seamless digital banking services to customers while enabling bank staff to manage operations efficiently.
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
      <p>The Super Admin manages roles and oversees system-wide configurations.</p>
      <ul>
        <li>Create, update, and delete roles (Admin, Manager, Teller, Customer)</li>
        <li>Manage users and assign permissions</li>
      </ul>

      <h3>2. Admin Module</h3>
      <p>The Admin oversees core banking operations and staff management.</p>
      <ul>
        <li>Manage branches, users, and system settings</li>
        <li>Generate financial reports and audit logs</li>
        <li>Oversee compliance and security configurations</li>
      </ul>

      <h3>3. Banking Staff Module (Manager / Teller)</h3>
      <p>Bank staff handle daily banking transactions and customer interactions.</p>
      <ul>
        <li>Open and manage customer accounts</li>
        <li>Process deposits, withdrawals, and fund transfers</li>
        <li>Manage loan applications and approvals</li>
        <li>Generate transaction reports</li>
      </ul>

      <h3>4. Customer Module</h3>
      <p>Customers can access their banking services online.</p>
      <ul>
        <li>View account balances and transaction history</li>
        <li>Transfer funds and pay bills securely</li>
        <li>Apply for loans and track status</li>
        <li>Update personal and contact information</li>
      </ul>

      <h2>System Workflow</h2>
      <ol>
        <li>Super Admin → manages users, roles, and permissions</li>
        <li>Admin → oversees branches and banking operations</li>
        <li>Bank Staff → manage customer accounts and transactions</li>
        <li>Customer → accesses personal banking services</li>
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
            <td>Manage user roles, permissions, and global settings</td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>Oversee system operations, branch management, and reporting</td>
          </tr>
          <tr>
            <td>Banking Staff</td>
            <td>Manage accounts, process transactions, and support customers</td>
          </tr>
          <tr>
            <td>Customer</td>
            <td>Access online banking services and manage personal accounts</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Features for Students</h2>
      <ul>
        <li>Secure login and role-based access control</li>
        <li>Online banking for deposits, transfers, and loan applications</li>
        <li>Detailed reporting for admins and bank staff</li>
        <li>Customer self-service for account management</li>
        <li>Scalable, cloud-ready infrastructure with modern web technologies</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The <strong>SS Banking System</strong> provides a full suite of digital banking capabilities, enhancing efficiency for banks and convenience for customers. 
        It supports modern banking requirements with a strong focus on security, scalability, and user experience.
      </p>
    </div>
  );
}

export default SSBanking;
