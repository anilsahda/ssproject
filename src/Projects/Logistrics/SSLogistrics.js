function SSLogistics() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Project Overview */}
      <section>
        <h2 className="text-xl font-bold mb-2">Project Overview</h2>
        <p>
          The <strong>SS Logistics Management System (LMS)</strong> is a
          web-based application designed to manage and streamline logistics,
          supply chain, and transportation operations. It provides tools for
          managing shipments, warehouses, drivers, vehicles, customers, and
          billing. With role-based dashboards, LMS improves transparency,
          efficiency, and real-time tracking of logistics activities.
        </p>
      </section>

      {/* Technology Stack */}
      <section>
        <h2 className="text-xl font-bold mb-2">Technology Stack</h2>
        <ul className="list-disc pl-5">
          <li>Front-End: React | Next.js | Angular | Vue</li>
          <li>Back-End: .NET Core | Spring Boot | Node.js | Django</li>
          <li>Database: SQL Server | MySQL | PostgreSQL | MongoDB</li>
          <li>Cloud Platform: AWS | Azure | GCP</li>
          <li>Other: Google Maps API | Payment Gateways | IoT (for vehicle tracking)</li>
        </ul>
      </section>

      {/* Modules and Functionalities */}
      <section>
        <h2 className="text-xl font-bold mb-2">Modules and Functionalities</h2>

        <b>1. Main Module</b>
        <ul className="list-disc pl-5 mb-4">
          <li>Home, About, and Services</li>
          <li>Contact Us</li>
          <li>Login / Register</li>
          <li>Company Information & Offerings</li>
        </ul>

        <b>2. Super Admin Module</b>
        <ul className="list-disc pl-5 mb-4">
          <li>Manage system users and roles (Admin, Manager, Driver, Customer)</li>
          <li>Define permissions & system configurations</li>
          <li>Monitor logistics network activity</li>
        </ul>

        <b>3. Admin Module</b>
        <ul className="list-disc pl-5 mb-4">
          <li>Manage warehouses, vehicles, and drivers</li>
          <li>Assign shipments and track delivery progress</li>
          <li>Manage vendors and customers</li>
          <li>Billing & invoice generation</li>
          <li>Generate logistics reports and analytics</li>
          <li>Oversee daily operations of logistics</li>
          <li>Monitor shipment progress & delays</li>
          <li>Assign tasks to drivers and staff</li>
          <li>Generate performance and delivery reports</li>
        </ul>

        <b>4. Driver Module</b>
        <ul className="list-disc pl-5 mb-4">
          <li>View assigned deliveries</li>
          <li>Update delivery status (In Transit, Delivered, Delayed)</li>
          <li>Track fuel consumption and vehicle maintenance</li>
          <li>GPS-based route optimization</li>
        </ul>

        <b>5. Customer Module</b>
        <ul className="list-disc pl-5 mb-4">
          <li>Book shipments and track delivery status</li>
          <li>View billing & payment history</li>
          <li>Get notifications on shipment updates</li>
          <li>Provide feedback on services</li>
        </ul>
      </section>

      {/* Logistics Portal Layout */}
      <section>
        <b>Logistics Portal Layout</b>
        <pre
          style={{
            background: "#f5f5f5",
            padding: "1rem",
            overflowX: "auto",
          }}
        >
          <code>
{`app
├─ layout.tsx                       // RootLayout (providers, html/body)
├─ (main)/
│  ├─ layout.tsx                    // Public/Main Layout (marketing site)
│  ├─ page.tsx                      // Home Page
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
│  ├─ layout.tsx                    // AdminLayout
│  ├─ page.tsx                      // Admin Dashboard
│  ├─ warehouse/page.tsx            // Manage warehouses
│  ├─ vehicle/page.tsx              // Manage vehicles
│  ├─ driver/page.tsx               // Manage drivers
│  ├─ shipment/page.tsx             // Manage shipments
│  ├─ billing/page.tsx              // Billing & invoices
│  ├─ report/page.tsx               // Logistics reports
│  ├─ inventory/page.tsx            // Inventory & supplies
│  ├─ deliveries/page.tsx           // Monitor deliveries
│  ├─ staff/page.tsx                // Manage staff assignments
│  └─ performance/page.tsx          // Performance reports
│
├─ (driver)/driver
│  ├─ layout.tsx                    // DriverLayout
│  ├─ page.tsx                      // Driver Dashboard
│  ├─ mydeliveries/page.tsx         // Assigned deliveries
│  ├─ routetracking/page.tsx        // Route tracking & GPS
│  └─ status/page.tsx               // Update delivery status
│
└─ (customer)/customer
   ├─ layout.tsx                    // CustomerLayout
   ├─ page.tsx                      // Customer Dashboard
   ├─ shipments/page.tsx            // Book & track shipments
   ├─ billing/page.tsx              // Billing & payment history
   └─ feedback/page.tsx             // Customer feedback`}
          </code>
        </pre>
      </section>

      {/* Links */}
      <section>
        <p>
          🔗 <strong>Live Demo URL:</strong>{" "}
          <a
            href="https://sslogistics.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SS Logistics Portal
          </a>
        </p>
        <p>
          🔗 <strong>React Git URL:</strong>{" "}
          <a
            href="https://github.com/anilsahda/sslogistics.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/anilsahda/sslogistics.git
          </a>
        </p>
      </section>
    </div>
  );
}

export default SSLogistics;
