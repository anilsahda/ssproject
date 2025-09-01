function SSHotel() {
  return (
    <div>
      <h1>SS Hotels</h1>

      <h2>Project Overview</h2>
      <p>
        The <strong>SS Hotels</strong> is a web-based hotel management and booking system. 
        It helps manage hotels, rooms, staff, and bookings efficiently while providing 
        a smooth experience for customers.
      </p>
      <ul>
        <li>Guests can search and book rooms online.</li>
        <li>Admins can manage hotels, rooms, and staff.</li>
        <li>Managers can oversee daily operations, bookings, and reports.</li>
        <li>Customers can submit feedback and complaints online.</li>
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
      <p>The Super Admin has the highest authority, managing roles, permissions, and hotel branches.</p>
      <ul>
        <li>Role Management: Create/update/delete roles (Admin, Manager, Customer)</li>
        <li>User Management: Add users, assign roles, update or deactivate accounts</li>
        <li>Branch Management: Add and manage hotel branches across locations</li>
      </ul>
      <p><em>Example:</em> Super Admin adds a new "SS Hotels - Mumbai" branch and assigns an Admin.</p>

      <h3>2. Admin Module</h3>
      <p>Admin manages hotel operations and staff.</p>
      <ul>
        <li>Admin Login</li>
        <li>Hotel Management: Add, update, or remove hotel details</li>
        <li>Room Management: Add rooms, set availability, update pricing</li>
        <li>Staff Management: Add/update staff details and assign roles</li>
        <li>Booking Management: Monitor bookings and cancellations</li>
        <li>Reports: Generate reports on occupancy, revenue, and complaints</li>
      </ul>
      <p><em>Example:</em> Admin adds 50 rooms in "SS Hotels - Delhi" and assigns staff to manage reception.</p>

      <h3>3. Manager Module</h3>
      <p>Managers oversee hotel operations at the branch level.</p>
      <ul>
        <li>Login with manager credentials</li>
        <li>Booking Management: Approve/modify guest bookings</li>
        <li>Complaint Management: View and resolve guest complaints</li>
        <li>Staff Monitoring: Track staff attendance and duties</li>
        <li>Daily Reports: Monitor daily revenue and room occupancy</li>
      </ul>
      <p><em>Example:</em> A manager reviews complaints, assigns them to staff, and updates resolution status.</p>

      <h3>4. Customer Module</h3>
      <p>Customers can explore hotels, book rooms, and give feedback.</p>
      <ul>
        <li>Search Hotels by city or hotel name</li>
        <li>View room details, pricing, and availability</li>
        <li>Book or cancel reservations</li>
        <li>Submit feedback or complaints</li>
      </ul>
      <p><em>Example:</em> A customer searches for "SS Hotels - Goa", books a deluxe room, and submits feedback after checkout.</p>

      <h2>System Workflow</h2>
      <ol>
        <li>Super Admin → creates roles → adds users → assigns hotel branches</li>
        <li>Admin → manages hotels, rooms, staff → monitors bookings → generates reports</li>
        <li>Manager → handles branch-level bookings, complaints, and daily operations</li>
        <li>Customer → searches hotels → books rooms → provides feedback</li>
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
            <td>Manage roles, users, and hotel branches</td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>Manage hotels, rooms, staff, bookings, and reports</td>
          </tr>
          <tr>
            <td>Manager</td>
            <td>Oversee branch operations, handle complaints, track staff</td>
          </tr>
          <tr>
            <td>Customer</td>
            <td>Search hotels, book/cancel rooms, provide feedback</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Features</h2>
      <ul>
        <li>End-to-End Hotel Management: Hotels, rooms, bookings, staff, and complaints</li>
        <li>Role-Based Access: Super Admin → Admin → Manager → Customer</li>
        <li>Reports & Analytics: Track revenue, occupancy, and complaints efficiently</li>
        <li>Cloud-Ready: AWS deployment ensures scalability and availability</li>
        <li>User-Friendly: Easy online booking, cancellation, and feedback system</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The <strong>SS Hotels Management System</strong> provides a complete, scalable, and user-friendly 
        platform for hotel operations. It ensures smooth interaction between admins, managers, 
        staff, and customers, making hotel management seamless and efficient.
      </p>
        <p>🔗 Live Demo URL: <a href="https://ss-hotels.netlify.app/" target="_blank" rel="noopener noreferrer">SS Hotel</a></p>
        <p>🔗 React Git URL: <a href="https://github.com/anilsahda/sshotel.git" target="_blank" rel="noopener noreferrer">https://github.com/anilsahda/sshotel.git</a></p>
    </div>
  );
}

export default SSHotel
