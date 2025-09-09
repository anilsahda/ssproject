function SSHotel() {
  return (
    <div>
      <h3>Project Overview</h3>
      <p>The <strong>SS Hotels</strong> is a web-based hotel management and booking system. It helps manage hotels, rooms, staff, and bookings efficiently while providing a smooth experience for customers.</p>
      <ul>
        <li>Guests can search and book rooms online.</li>
        <li>Admins can manage hotels, rooms, and staff.</li>
        <li>Managers can oversee daily operations, bookings, and reports.</li>
        <li>Customers can submit feedback and complaints online.</li>
      </ul>

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
        <li>Home</li>
        <li>About</li>        
        <li>Rooms</li>        
        <li>Contact Us</li>
        <li>Login</li>
        <li>Register</li>
      </ul>

      <b>2. Super Admin Module</b>
      <p>The Super Admin has the highest authority, managing roles, permissions, and hotel branches.</p>
      <ul>
        <li>Role Management: Create/update/delete roles (Admin, Manager, Customer)</li>
        <li>User Management: Add users, assign roles, update or deactivate accounts</li>
        <li>Branch Management: Add and manage hotel branches across locations</li>
      </ul>
      <p><em>Example:</em> Super Admin adds a new "SS Hotels - Mumbai" branch and assigns an Admin.</p>

      <b>3. Admin Module</b>
      <p>Admin manages hotel operations and staff.</p>
      <ul>
        <li>Admin Login</li>
        <li>Hotel Management: Add, update, or remove hotel details</li>
        <li>Room Management: Add rooms, set availability, update pricing</li>
        <li>Staff Management: Add/update staff details and assign roles</li>
        <li>Booking Management: Monitor bookings and cancellations</li>
        <li>Reports: Generate reports on occupancy, revenue, and complaints</li>
        <li>Booking Management: Approve/modify guest bookings</li>
        <li>Complaint Management: View and resolve guest complaints</li>
        <li>Staff Monitoring: Track staff attendance and duties</li>
        <li>Daily Reports: Monitor daily revenue and room occupancy</li>
      </ul>
      <p><em>Example:</em> A manager reviews complaints, assigns them to staff, and updates resolution status.</p>

      <b>4. Customer Module</b>
      <p>Customers can explore hotels, book rooms, and give feedback.</p>
      <ul>
        <li>Search Hotels by city or hotel name</li>
        <li>View room details, pricing, and availability</li>
        <li>Book or cancel reservations</li>
        <li>Submit feedback or complaints</li>
      </ul>

      <section>
        <b>SS Hotel</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
            <code>
{`app
├─ layout.tsx                 // RootLayout (providers, html/body)
├─ (main)/
│  ├─ layout.tsx              // MainLayout (public site)
│  ├─ page.tsx                // Home page
│  ├─ about/page.tsx
│  ├─ rooms/page.tsx
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
│  ├─ roomtype/page.tsx
│  ├─ roomprice/page.tsx
│  ├─ room/page.tsx
│  └─ bookings/page.tsx
│
└─ (customer)/customer
    ├─ layout.tsx           // CustomerLayout
    ├─ page.tsx             // Customer Dashboard
    └─ bookings/page.tsx`}
            </code>
        </pre>
      </section>

        <p>🔗 Live Demo URL: <a href="https://ss-hotels.netlify.app/" target="_blank" rel="noopener noreferrer">SS Hotel</a></p>
        <p>🔗 React Git URL: <a href="https://github.com/anilsahda/sshotel.git" target="_blank" rel="noopener noreferrer">https://github.com/anilsahda/sshotel.git</a></p>
    </div>
  );
}

export default SSHotel
