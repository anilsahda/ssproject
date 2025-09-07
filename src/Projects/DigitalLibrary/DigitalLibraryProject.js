function SSDigitalLibrary() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h3>Project Overview</h3>
      <p>The <strong>SS Digital Library</strong> is a web-based application designed to manage library resources efficiently. It allows users to access books, journals, and other digital content online, while administrators manage the library catalog and user access.</p>
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
        <li>Manage roles and permissions (Admin, Librarian, User)</li>
        <li>Manage system users and assign roles</li>
      </ul>

      <b>3. Admin Module</b>
      <ul>
        <li>Manage library catalog including books, journals, and e-resources</li>
        <li>Generate reports on library usage and borrowed items</li>
        <li>Approve user requests for borrowing digital books</li>
        <li>Manage library inventory and track borrowed/returned items</li>
        <li>Upload new digital content and categorize resources</li>
      </ul>

      <b>4. Student Module</b>
      <ul>
        <li>Search and browse books, journals, and other resources</li>
        <li>Borrow digital books and view borrowing history</li>
        <li>Request new books or resources</li>
        <li>Download e-books or access online content</li>
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
│  ├─ publication/page.tsx
│  ├─ book/page.tsx
│  ├─ bookreport/page.tsx
│  ├─ branch/page.tsx
│  ├─ student/page.tsx
│  ├─ issuebook/page.tsx
│  ├─ issuereport/page.tsx
│  ├─ returnbook/page.tsx
│  └─ penalty/page.tsx
│
└─ (student)/student
    ├─ layout.tsx           // StudentLayout
    ├─ page.tsx             // Student Dashboard
    ├─ myaccount/page.tsx
    ├─ bookreport/page.tsx
    └─ penaltyreport/page.tsx`}
            </code>
        </pre>
      </section>
    </div>
  );
}

export default SSDigitalLibrary;