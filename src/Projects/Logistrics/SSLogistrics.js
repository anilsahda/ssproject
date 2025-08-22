function SSLogistics() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h1>SS Logistics Management System</h1>

      <h2>Project Overview</h2>
      <p>
        The <strong>SS Logistics Management System</strong> is a web-based platform designed to streamline logistics and supply chain operations. 
        It enables businesses to efficiently manage shipments, warehouses, deliveries, fleet, and tracking, ensuring timely and cost-effective logistics services.
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
      <p>The Super Admin controls access and oversees overall system configuration.</p>
      <ul>
        <li>Manage roles (Admin, Manager, Driver, Customer)</li>
        <li>Assign permissions and monitor usage</li>
      </ul>

      <h3>2. Admin Module</h3>
      <p>Admin oversees logistics operations and system performance.</p>
      <ul>
        <li>Manage warehouses, fleets, and shipment schedules</li>
        <li>Generate performance and delivery reports</li>
        <li>Monitor real-time delivery statuses and exceptions</li>
      </ul>

      <h3>3. Operations Manager Module</h3>
      <p>Operations managers handle day-to-day logistics processes.</p>
      <ul>
        <li>Assign deliveries to drivers</li>
        <li>Plan optimal routes and manage delivery timelines</li>
        <li>Track vehicle locations and package statuses</li>
        <li>Manage driver schedules and delivery feedback</li>
      </ul>

      <h3>4. Driver Module</h3>
      <p>Drivers use the system to track and update delivery statuses.</p>
      <ul>
        <li>View assigned deliveries and routes</li>
        <li>Update package delivery status in real time</li>
        <li>Upload delivery proof (signature, photo)</li>
        <li>Receive alerts and route changes</li>
      </ul>

      <h3>5. Customer Module</h3>
      <p>Customers track their shipments and manage their delivery preferences.</p>
      <ul>
        <li>Track packages in real time</li>
        <li>Receive notifications for delivery updates</li>
        <li>Change delivery address or schedule (if allowed)</li>
        <li>Provide feedback or report issues</li>
      </ul>

      <h2>System Workflow</h2>
      <ol>
        <li>Super Admin → manages system roles and user permissions</li>
        <li>Admin → monitors operations, reports, and warehouse status</li>
        <li>Operations Manager → assigns deliveries and tracks logistics</li>
        <li>Driver → delivers goods and updates package status</li>
        <li>Customer → tracks packages and manages deliveries</li>
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
            <td>Manage user roles, system configuration, and access control</td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>Monitor logistics operations, generate reports, manage warehouses</td>
          </tr>
          <tr>
            <td>Operations Manager</td>
            <td>Assign and manage deliveries, optimize routes, track packages</td>
          </tr>
          <tr>
            <td>Driver</td>
            <td>Execute deliveries, update statuses, and provide proof of delivery</td>
          </tr>
          <tr>
            <td>Customer</td>
            <td>Track shipments, manage delivery preferences, and provide feedback</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Features for Students</h2>
      <ul>
        <li>Role-based system architecture for secure logistics workflows</li>
        <li>Real-time package tracking and delivery updates</li>
        <li>Warehouse and fleet management modules</li>
        <li>Driver delivery app integration and live route planning</li>
        <li>Customer self-service for tracking and delivery scheduling</li>
        <li>Cloud-based and scalable for enterprise logistics operations</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The <strong>SS Logistics Management System</strong> optimizes logistics operations from warehouse to last-mile delivery. 
        It ensures transparency, efficiency, and real-time tracking for all stakeholders, making it an ideal solution for modern supply chain businesses.
      </p>
    </div>
  );
}

export default SSLogistics;
