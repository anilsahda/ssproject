function SSEHouse() {
  return (
    <div>
      <h3>Project Overview</h3>
      <p>The <strong>SS E-Housing</strong> is a web-based application designed to simplify society management. It helps track societies, houses, and members efficiently.</p>
      <ul>
        <li>Members (house owners) can advertise houses for rent or sale.</li>
        <li>Users can search houses and contact owners.</li>
        <li>Owners can submit complaints online.</li>
        <li>Admins can manage societies, houses, and complaints effectively.</li>
      </ul>

      <b>Technology Stack</b>
      <ul>
        <li>Front-End: React / Next.js</li>
        <li>Back-End: .NET Core | Spring Boot | Node.js</li>
        <li>Database: SQL Server</li>
        <li>Cloud Platform: AWS</li>
      </ul>

      <h3>Modules and Functionalities</h3>

      <b>1. Super Admin Module</b>
      <p>The Super Admin has the highest level of access and controls roles and users.</p>
      <ul>
        <li>Role Management: Create, update, delete roles (Admin, Owner, User)</li>
        <li>User Management: Add users, assign roles, update or deactivate accounts</li>
      </ul>
      <p><em>Example:</em> Super Admin creates a new Admin account and assigns the role.</p>

      <b>2. Admin Module</b>
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

      <b>3. Owner Module</b>
      <p>Owners are members who own houses in a society.</p>
      <ul>
        <li>Login using credentials</li>
        <li>House Management: Add house details, advertise houses for rent/sale, update availability</li>
        <li>Complaint Management: Submit complaints and track status</li>
        <li>Account Management: Update personal details, change password</li>
        <li>Message Management: Receive messages from users</li>
      </ul>
      <p><em>Example:</em> An owner lists a 2BHK for rent and gets messages from potential tenants.</p>

      <b>4. User Module</b>
      <p>Users are visitors who search for houses to rent or buy.</p>
      <ul>
        <li>Search Houses by society or owner name</li>
        <li>Check availability of houses for rent/sale</li>
        <li>Contact Owner directly</li>
      </ul>
      <p><em>Example:</em> A user searches in "Sunshine Society", finds a 2BHK for rent, and contacts the owner.</p>

      <section>
        <b>SS House</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
            <code>
{`app
├─ layout.tsx                 // RootLayout (providers, html/body)
├─ (main)/
│  ├─ layout.tsx              // MainLayout (public site)
│  ├─ page.tsx                // Home page
│  ├─ about/page.tsx
│  ├─ search/page.tsx
│  ├─ rentlist/page.tsx
│  ├─ selllist/page.tsx
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
│  ├─ society/page.tsx
│  ├─ house/page.tsx
│  ├─ housereport/page.tsx
│  ├─ allocatehouse/page.tsx
│  ├─ memberreport/page.tsx
│  ├─ complain/page.tsx
│  ├─ sellhousereport/page.tsx
│  └─ renthousereport/page.tsx
│
└─ (owner)/owner
    ├─ layout.tsx           // OwnerLayout
    ├─ page.tsx             // Owner Dashboard
    ├─ societylist/page.tsx
    ├─ rentnow/page.tsx
    ├─ sellnow/page.tsx
    ├─ message/page.tsx
    └─ complain/page.tsx`}
            </code>
        </pre>
      </section>

        <p>🔗 Live Demo URL: <a href="https://codewithsadee.github.io/homeverse/" target="_blank" rel="noopener noreferrer">SS Villa</a></p>
        <p>🔗 Live Demo URL: <a href="https://real-estate-4.vercel.app/" target="_blank" rel="noopener noreferrer">SS Real Estate</a></p>        
        <p>🔗 React Git URL: <a href="https://github.com/anilsahda/ssrealestate.git" target="_blank" rel="noopener noreferrer">https://github.com/anilsahda/ssrealestate.git</a></p>
    </div>
  );
}

export default SSEHouse;
