function SSLoanApp() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h1>SS Loan Management System</h1>

      <h2>Project Overview</h2>
      <p>
        The <strong>SS Loan Management System</strong> is a web-based application designed to manage loan products, applications, approvals, disbursements, repayments, and customer data. 
        It helps financial institutions and lending companies streamline their loan operations and offer better service to borrowers.
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
      <p>Super Admin controls system configuration and user roles.</p>
      <ul>
        <li>Create, update, and delete roles (Admin, Loan Officer, Customer)</li>
        <li>Manage user permissions and access control</li>
        <li>Configure loan parameters, interest rates, and policies</li>
      </ul>

      <h3>2. Admin Module</h3>
      <p>Admin oversees loan operations and compliance.</p>
      <ul>
        <li>Manage loan products and categories</li>
        <li>Monitor loan disbursements and repayments</li>
        <li>Generate financial reports and performance analytics</li>
      </ul>

      <h3>3. Loan Officer Module</h3>
      <p>Loan Officers handle customer applications and verifications.</p>
      <ul>
        <li>Review and process loan applications</li>
        <li>Verify borrower documents and credit eligibility</li>
        <li>Approve or reject applications</li>
        <li>Track ongoing loans and repayment status</li>
      </ul>

      <h3>4. Customer Module</h3>
      <p>Borrowers can apply for and manage their loans.</p>
      <ul>
        <li>Apply for new loans and upload documents</li>
        <li>Track application status and disbursement</li>
        <li>View loan schedule and repayment history</li>
        <li>Make payments and download statements</li>
      </ul>

      <h2>System Workflow</h2>
      <ol>
        <li>Super Admin → sets up roles, loan configurations, and access control</li>
        <li>Admin → manages loan offerings, performance tracking, and reporting</li>
        <li>Loan Officer → verifies applications and processes approvals</li>
        <li>Customer → applies for loans, makes payments, and tracks status</li>
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
            <td>Manage system users, roles, and global loan policies</td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>Oversee loan lifecycle, configure products, and monitor KPIs</td>
          </tr>
          <tr>
            <td>Loan Officer</td>
            <td>Process applications, verify documents, approve/reject loans</td>
          </tr>
          <tr>
            <td>Customer</td>
            <td>Apply for loans, view repayment details, and manage profile</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Features for Students</h2>
      <ul>
        <li>Role-based loan processing with secure workflows</li>
        <li>Online loan application and document upload</li>
        <li>Automated EMI schedule generation</li>
        <li>Real-time application tracking and alerts</li>
        <li>Payment gateway integration for repayments</li>
        <li>Analytics dashboard for admins and loan officers</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The <strong>SS Loan Management System</strong> simplifies and automates loan operations for financial institutions, improving efficiency, customer experience, and regulatory compliance. 
        It’s a reliable and scalable solution for modern lending businesses.
      </p>
    </div>
  );
}

export default SSLoanApp;