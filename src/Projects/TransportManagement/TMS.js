function TransportManagementSystem() {
  return (
    <div>
      <h3>Project Overview</h3>
      <p>
        The <strong>Transport Management System (TMS)</strong> is a SaaS-based
        multi-tenant logistics and fleet management platform. It helps transport
        companies manage vehicles, drivers, trips, tracking, billing, and daily
        operations efficiently while providing real-time monitoring and reporting.
      </p>

      <ul>
        <li>Customers can book and track shipments online.</li>
        <li>Admins can manage vehicles, routes, drivers, and trips.</li>
        <li>Managers can monitor operations, billing, and reports.</li>
        <li>Fleet owners can track vehicles and driver performance in real time.</li>
      </ul>

      <b>Technology Stack</b>
      <ul>
        <li>Front-End: React | Next.js | Angular | Vue</li>
        <li>Back-End: .NET Core | Spring Boot | Node.js</li>
        <li>Database: SQL Server</li>
        <li>API Gateway: YARP</li>
        <li>Messaging Queue: RabbitMQ</li>
        <li>Cache: Redis</li>
        <li>Cloud Platform: AWS | Azure</li>
      </ul>

      <h3>Modules and Functionalities</h3>

      <b>1. Main Module</b>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Track Shipment</li>
        <li>Contact Us</li>
        <li>Login</li>
        <li>Register</li>
      </ul>

      <b>2. Super Admin Module</b>
      <p>
        The Super Admin manages tenants, subscriptions, roles, and platform-wide settings.
      </p>

      <ul>
        <li>Tenant Management: Create and manage transport companies</li>
        <li>Role Management: Create/update/delete roles</li>
        <li>User Management: Assign users and permissions</li>
        <li>Subscription Management: Manage SaaS plans and renewals</li>
        <li>Platform Monitoring: Monitor system health and tenants</li>
      </ul>

      <p>
        <em>
          Example:
        </em>{" "}
        Super Admin creates a new tenant "FastMove Logistics" and assigns an Admin.
      </p>

      <b>3. Admin Module</b>

      <p>
        Admin manages transport operations, vehicles, drivers, and customers.
      </p>

      <ul>
        <li>Admin Login</li>
        <li>Vehicle Management: Add/update/remove vehicles</li>
        <li>Driver Management: Add drivers and assign vehicles</li>
        <li>Trip Management: Create and monitor trips</li>
        <li>Route Management: Manage delivery routes</li>
        <li>Booking Management: Approve shipment bookings</li>
        <li>Customer Management: Manage customers and shipment details</li>
        <li>Tracking Dashboard: Monitor live vehicle tracking</li>
        <li>Billing Management: Generate invoices and payment tracking</li>
        <li>Reports: Revenue, trip, fuel, and delivery reports</li>
      </ul>

      <p>
        <em>
          Example:
        </em>{" "}
        Admin assigns a truck and driver for a shipment from Delhi to Mumbai and tracks delivery status.
      </p>

      <b>4. Manager Module</b>

      <p>
        Managers oversee daily transport operations and staff activities.
      </p>

      <ul>
        <li>Monitor ongoing trips</li>
        <li>Approve or reject bookings</li>
        <li>Track vehicle maintenance schedules</li>
        <li>Monitor driver attendance and performance</li>
        <li>View operational reports and analytics</li>
      </ul>

      <b>5. Customer Module</b>

      <p>
        Customers can book transport services and track shipments online.
      </p>

      <ul>
        <li>Register/Login</li>
        <li>Book shipment requests</li>
        <li>Track shipment status</li>
        <li>View invoices and payment history</li>
        <li>Submit complaints and feedback</li>
      </ul>

      <section>
        <b>Transport Management System</b>

        <pre
          style={{
            background: "#f5f5f5",
            padding: "1rem",
            overflowX: "auto",
          }}
        >
          <code>
{`app
├─ layout.tsx                    // RootLayout
├─ (main)/
│  ├─ layout.tsx                 // MainLayout
│  ├─ page.tsx                   // Home Page
│  ├─ about/page.tsx
│  ├─ services/page.tsx
│  ├─ tracking/page.tsx
│  ├─ contact/page.tsx
│  ├─ login/page.tsx
│  └─ register/page.tsx
│
├─ (superadmin)/superadmin
│  ├─ layout.tsx                 // SuperAdminLayout
│  ├─ page.tsx                   // Dashboard
│  ├─ tenant/page.tsx
│  ├─ users/page.tsx
│  ├─ roles/page.tsx
│  └─ subscriptions/page.tsx
│
├─ (admin)/admin
│  ├─ layout.tsx                 // AdminLayout
│  ├─ page.tsx                   // Admin Dashboard
│  ├─ vehicles/page.tsx
│  ├─ drivers/page.tsx
│  ├─ routes/page.tsx
│  ├─ trips/page.tsx
│  ├─ bookings/page.tsx
│  ├─ invoices/page.tsx
│  └─ reports/page.tsx
│
├─ (manager)/manager
│  ├─ layout.tsx                 // ManagerLayout
│  ├─ page.tsx                   // Manager Dashboard
│  ├─ monitoring/page.tsx
│  ├─ maintenance/page.tsx
│  └─ analytics/page.tsx
│
└─ (customer)/customer
   ├─ layout.tsx                 // CustomerLayout
   ├─ page.tsx                   // Customer Dashboard
   ├─ bookings/page.tsx
   ├─ tracking/page.tsx
   ├─ invoices/page.tsx
   └─ feedback/page.tsx`}
          </code>
        </pre>
      </section>

      <h3>Microservices Architecture</h3>

      <ul>
        <li>API Gateway Service (YARP)</li>
        <li>Auth Service</li>
        <li>Tenant Service</li>
        <li>Vehicle Service</li>
        <li>Driver Service</li>
        <li>Trip Service</li>
        <li>Tracking Service</li>
        <li>Billing Service</li>
        <li>Notification Service</li>
      </ul>

      <h3>Cloud & DevOps</h3>

      <ul>
        <li>Docker Containerization</li>
        <li>Kubernetes Deployment</li>
        <li>AWS ECS / EKS or Azure AKS</li>
        <li>CI/CD using GitHub Actions or Azure DevOps</li>
        <li>Redis Cache for live tracking</li>
        <li>RabbitMQ for event-driven communication</li>
      </ul>

      <h3>Workflow</h3>

      <pre
        style={{
          background: "#f5f5f5",
          padding: "1rem",
          overflowX: "auto",
        }}
      >
{`Customer Books Shipment
        |
        v
Trip Created
        |
        v
Vehicle & Driver Assigned
        |
        v
Live Tracking Started
        |
        v
Delivery Completed
        |
        v
Invoice Generated
        |
        v
Payment Completed`}
      </pre>

      <p>
        🔗 Live Demo URL:
        <a
          href="https://transport-management-demo.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}Transport Management System
        </a>
      </p>

      <p>
        🔗 React Git URL:
        <a
          href="https://github.com/anilsahda/transport-management-system.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}https://github.com/anilsahda/transport-management-system.git
        </a>
      </p>
    </div>
  );
}

export default TransportManagementSystem;