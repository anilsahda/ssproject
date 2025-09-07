function SSEmployeePayroll() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h3>Project Overview</h3>
      <p>The <strong>SS Employee Payroll</strong> is a web-based application designed to manage employee salaries, deductions, bonuses, and other payroll-related operations efficiently. It automates payroll calculations and helps HR and finance teams maintain accurate records.</p>
      <b>Technology Stack</b>
      <ul>
        <li>Front-End: React | Next.js | Angular | Vue</li>
        <li>Back-End: .NET Core | Spring Boot | Node.js | DJango</li>
        <li>Database: SQL Server</li>
        <li>Cloud Platform: AWS | Azure</li>
      </ul>
      <h2>Modules and Functionalities</h2>
      <b>1. Main Module</b>
      <ul>
        <li>Home, About and Services</li>
        <li>Contact Us</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
      <b>2. Super Admin Module</b>
      <p>The Super Admin manages users and roles.</p>
      <ul>
        <li>Create, update, and delete roles (Admin, HR, Employee)</li>
        <li>Manage system users and assign roles</li>
      </ul>
      <b>3. Admin Module</b>
      <p>Admin oversees the entire payroll system.</p>
      <ul>
        <li>Login securely to the system</li>
        <li>Manage employees, salary structures, and payroll schedules</li>
        <li>Generate payroll reports and analytics</li>
      </ul>
      <b>4. HR / Payroll Manager Module</b>
      <p>HR or Payroll Manager handles payroll processing for employees.</p>
      <ul>
        <li>Define salary structures and allowances</li>
        <li>Process monthly salaries, deductions, and bonuses</li>
        <li>Upload employee details and salary changes</li>
        <li>Manage leave, overtime, and other adjustments</li>
      </ul>
      <b>5. Employee Module</b>
      <p>Employees can view and download their payroll information.</p>
      <ul>
        <li>View salary slips and payment history</li>
        <li>Download payslips in PDF format</li>
        <li>Update personal information and bank details</li>
      </ul>

      <section>
        <b>Digital Library Layout</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
            <code>
{`app
├─ layout.tsx                 // RootLayout (providers, html/body)
├─ (main)/
│  ├─ layout.tsx              // MainLayout (public site)
│  ├─ page.tsx                // Home page
│  ├─ about/page.tsx
│  ├─ services/page.tsx
│  ├─ contact/page.tsx
│  ├─ login/page.tsx
│  └─ register/page.tsx
│
├─ (superadmin)/superadmin
│  ├─ layout.tsx              // SuperAdminLayout
│  ├─ page.tsx                // Super Admin Dashboard
│  ├─ user/page.tsx
│  ├─ role/page.tsx
│  └─ userrole/page.tsx
│
├─ (admin)/admin
│  ├─ layout.tsx              // AdminLayout
│  ├─ page.tsx                // Admin Dashboard
│  ├─ class/page.tsx
│  ├─ employee/page.tsx
│  ├─ employeereport/page.tsx
│  ├─ leave/page.tsx
│  ├─ salary/page.tsx
│  ├─ salaryreport/page.tsx
│  └─ yearwisereport/page.tsx
│
└─ (student)/student
    ├─ layout.tsx           // StudentLayout
    ├─ page.tsx             // Student Dashboard
    ├─ myaccount/page.tsx
    ├─ leave/page.tsx
    ├─ leavereport/page.tsx    
    └─ salaryreport/page.tsx`}
            </code>
        </pre>
      </section>
    </div>
  );
}

export default SSEmployeePayroll;
