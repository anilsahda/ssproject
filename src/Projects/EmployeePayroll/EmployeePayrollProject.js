function EmployeePayrollProject() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h1>Employee Payroll Management System</h1>

      <h2>Project Overview</h2>
      <p>
        The <strong>Employee Payroll Management System</strong> is a web-based application designed to manage employee salaries, deductions, bonuses, and other payroll-related operations efficiently. 
        It automates payroll calculations and helps HR and finance teams maintain accurate records.
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
      <p>The Super Admin manages users and roles.</p>
      <ul>
        <li>Create, update, and delete roles (Admin, HR, Employee)</li>
        <li>Manage system users and assign roles</li>
      </ul>

      <h3>2. Admin Module</h3>
      <p>Admin oversees the entire payroll system.</p>
      <ul>
        <li>Login securely to the system</li>
        <li>Manage employees, salary structures, and payroll schedules</li>
        <li>Generate payroll reports and analytics</li>
      </ul>

      <h3>3. HR / Payroll Manager Module</h3>
      <p>HR or Payroll Manager handles payroll processing for employees.</p>
      <ul>
        <li>Define salary structures and allowances</li>
        <li>Process monthly salaries, deductions, and bonuses</li>
        <li>Upload employee details and salary changes</li>
        <li>Manage leave, overtime, and other adjustments</li>
      </ul>

      <h3>4. Employee Module</h3>
      <p>Employees can view and download their payroll information.</p>
      <ul>
        <li>View salary slips and payment history</li>
        <li>Download payslips in PDF format</li>
        <li>Update personal information and bank details</li>
      </ul>

      <h2>System Workflow</h2>
      <ol>
        <li>Super Admin → manages roles and users</li>
        <li>Admin → manages employee records, salary structures, and payroll reports</li>
        <li>HR/Payroll Manager → calculates and processes monthly payroll</li>
        <li>Employee → views and downloads payslips</li>
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
            <td>Manage employees, salary structures, and payroll reports</td>
          </tr>
          <tr>
            <td>HR / Payroll Manager</td>
            <td>Process payroll, handle deductions, bonuses, and salary changes</td>
          </tr>
          <tr>
            <td>Employee</td>
            <td>View and download salary slips, update personal info</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Features for Students</h2>
      <ul>
        <li>Role-based access for secure payroll management</li>
        <li>Automated salary calculation with deductions and bonuses</li>
        <li>Generate detailed payroll reports and analytics</li>
        <li>Employee self-service for payslip download and profile management</li>
        <li>Cloud-ready and scalable system for enterprise use</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The <strong>Employee Payroll Management System</strong> streamlines the payroll process, reduces errors, and provides transparency for both HR and employees. 
        It is a comprehensive solution for managing employee salaries efficiently in any organization.
      </p>
    </div>
  );
}

export default EmployeePayrollProject;
