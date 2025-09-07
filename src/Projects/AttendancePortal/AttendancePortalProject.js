function SSAttendancePortal() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h3>Project Overview</h3>
      <p>The <strong>SS Attendance Portal</strong> is a web-based application designed to manage employee attendance efficiently. It allows HR and employees to track working hours, leave, and attendance reports in a simple and automated way.</p>

      <b>Technology Stack</b>
      <ul>
        <li>Front-End: React | Next.js | Angular | Vue</li>
        <li>Back-End: .NET Core | Spring Boot | Node.js | DJango</li>
        <li>Database: SQL Server</li>
        <li>Cloud Platform: AWS | Azure</li>
      </ul>

      <h3>Modules and Functionalities</h3>
      <b>1. Main Module</b>
      <ul>
        <li>Home, About and Services</li>
        <li>Contact Us</li>
        <li>Login</li>
        <li>Register</li>
      </ul>

      <b>2. Super Admin Module</b>
      <ul>
        <li>Create and manage roles (Admin, HR, Employee)</li>
        <li>Manage system users and permissions</li>
      </ul>

      <b>3. Admin Module</b>
      <ul>
        <li>Manage all employees and attendance policies</li>
        <li>Generate attendance reports and analytics</li>
        <li>Configure leave types and working schedules</li>
      </ul>

      <b>4. Staff Module</b>
      <ul>
        <li>Mark and verify employee attendance</li>
        <li>Approve or reject leave requests</li>
        <li>Track overtime and late arrivals</li>
        <li>Generate monthly and yearly attendance summaries</li>
      </ul>

      <b>5. Student Module</b>
      <ul>
        <li>Mark daily attendance (Check-in/Check-out)</li>
        <li>Apply for leave and view leave balance</li>
        <li>View attendance history and reports</li>
        <li>Receive notifications regarding attendance or approvals</li>
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
│  ├─ standard/page.tsx
│  ├─ division/page.tsx
│  ├─ staff/page.tsx
│  ├─ staffreport/page.tsx
│  ├─ complain/page.tsx
│  ├─ leave/page.tsx
│  ├─ studentreport/page.tsx
│  └─ feedback/page.tsx
│
├─ (staff)/staff
│  ├─ layout.tsx              // StaffLayout
│  ├─ page.tsx                // Staff Dashboard
│  ├─ student/page.tsx
│  ├─ studentreport/page.tsx
│  ├─ attendance/page.tsx
│  ├─ attendancereport/page.tsx
│  ├─ advance/page.tsx
│  ├─ advancereport/page.tsx
│  ├─ advanceattendancereport/page.tsx
│  ├─ complain/page.tsx
│  └─ leave/page.tsx
│
└─ (student)/student
    ├─ layout.tsx           // StudentLayout
    ├─ page.tsx             // Student Dashboard
    ├─ studentprofile/page.tsx
    ├─ leave/page.tsx
    ├─ complain/page.tsx    
    └─ attendancereport/page.tsx`}
            </code>
        </pre>
      </section>
    </div>
  );
}

export default SSAttendancePortal;
