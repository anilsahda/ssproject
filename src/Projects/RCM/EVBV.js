function EVBV() {
  return (
    <div>
      <h3>Project Overview</h3>

      <p>
        The <strong>EVBV (Eligibility Verification & Benefits Verification)</strong>{" "}
        is a SaaS-based multi-tenant healthcare verification platform designed for
        hospitals, clinics, and medical billing companies. It automates patient
        insurance eligibility verification, benefits validation, prior authorization,
        and payer communication processes.
      </p>

      <ul>
        <li>Patients insurance eligibility can be verified in real time.</li>
        <li>Admins can manage providers, payers, and verification workflows.</li>
        <li>Medical staff can monitor patient verification and authorization status.</li>
        <li>RCM teams can reduce claim denials and improve revenue cycle efficiency.</li>
      </ul>

      <b>Technology Stack</b>

      <ul>
        <li>Front-End: React | Next.js | Angular</li>
        <li>Back-End: .NET Core | Node.js</li>
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
        <li>Contact Us</li>
        <li>Login</li>
        <li>Register</li>
      </ul>

      <b>2. Super Admin Module</b>

      <p>
        The Super Admin manages tenants, subscriptions, users, and platform-level settings.
      </p>

      <ul>
        <li>Tenant Management: Create and manage healthcare organizations</li>
        <li>Role Management: Create/update/delete roles</li>
        <li>User Management: Assign users and permissions</li>
        <li>Subscription Management: Manage SaaS plans and renewals</li>
        <li>Platform Monitoring: Monitor all tenant activities</li>
      </ul>

      <p>
        <em>Example:</em>{" "}
        Super Admin creates a new tenant "ABC Medical Billing" and assigns Admin access.
      </p>

      <b>3. Admin Module</b>

      <p>
        Admin manages providers, payers, patients, and verification operations.
      </p>

      <ul>
        <li>Admin Login</li>
        <li>Provider Management: Add/update providers and clinics</li>
        <li>Payer Management: Manage insurance payer details</li>
        <li>Patient Management: Manage patient demographics</li>
        <li>Eligibility Verification: Verify insurance eligibility</li>
        <li>Benefits Verification: Validate patient benefits coverage</li>
        <li>Prior Authorization Management</li>
        <li>Appointment Verification Workflow</li>
        <li>Claims & Denial Tracking</li>
        <li>Reports & Analytics Dashboard</li>
      </ul>

      <p>
        <em>Example:</em>{" "}
        Admin verifies a patient's insurance eligibility before the appointment date.
      </p>

      <b>4. Manager Module</b>

      <p>
        Managers monitor daily verification operations and staff productivity.
      </p>

      <ul>
        <li>Assign verification tasks to staff</li>
        <li>Monitor pending and completed verifications</li>
        <li>Track authorization approvals and denials</li>
        <li>Review daily operational reports</li>
        <li>Monitor employee performance metrics</li>
      </ul>

      <b>5. Staff Module</b>

      <p>
        Verification specialists process insurance and benefits verification requests.
      </p>

      <ul>
        <li>Process eligibility verification requests</li>
        <li>Check patient insurance details</li>
        <li>Update authorization status</li>
        <li>Upload supporting documents</li>
        <li>Communicate with insurance payers</li>
      </ul>

      <b>6. Patient Module</b>

      <p>
        Patients can track appointment verification and insurance status online.
      </p>

      <ul>
        <li>Register/Login</li>
        <li>View appointment status</li>
        <li>Upload insurance documents</li>
        <li>Track authorization approvals</li>
        <li>Receive notifications and alerts</li>
      </ul>

      <section>
        <b>EVBV</b>

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
│  ├─ providers/page.tsx
│  ├─ payers/page.tsx
│  ├─ patients/page.tsx
│  ├─ eligibility/page.tsx
│  ├─ benefits/page.tsx
│  ├─ authorization/page.tsx
│  ├─ claims/page.tsx
│  └─ reports/page.tsx
│
├─ (manager)/manager
│  ├─ layout.tsx                 // ManagerLayout
│  ├─ page.tsx                   // Manager Dashboard
│  ├─ monitoring/page.tsx
│  ├─ approvals/page.tsx
│  └─ analytics/page.tsx
│
├─ (staff)/staff
│  ├─ layout.tsx                 // StaffLayout
│  ├─ page.tsx                   // Staff Dashboard
│  ├─ verification/page.tsx
│  ├─ authorization/page.tsx
│  └─ documents/page.tsx
│
└─ (patient)/patient
   ├─ layout.tsx                 // PatientLayout
   ├─ page.tsx                   // Patient Dashboard
   ├─ appointments/page.tsx
   ├─ insurance/page.tsx
   ├─ notifications/page.tsx
   └─ documents/page.tsx`}
          </code>
        </pre>
      </section>

      <h3>Microservices Architecture</h3>

      <ul>
        <li>API Gateway Service (YARP)</li>
        <li>Auth Service</li>
        <li>Tenant Service</li>
        <li>Patient Service</li>
        <li>Eligibility Service</li>
        <li>Benefits Service</li>
        <li>Authorization Service</li>
        <li>Notification Service</li>
        <li>Reporting Service</li>
      </ul>

      <h3>Cloud & DevOps</h3>

      <ul>
        <li>Docker Containerization</li>
        <li>Kubernetes Deployment</li>
        <li>AWS ECS / EKS or Azure AKS</li>
        <li>CI/CD using GitHub Actions or Azure DevOps</li>
        <li>Redis Cache for high-performance verification</li>
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
{`Patient Appointment Scheduled
        |
        v
Insurance Eligibility Verification
        |
        v
Benefits Verification
        |
        v
Prior Authorization Check
        |
        v
Verification Completed
        |
        v
Appointment Approved
        |
        v
Claims Processing Started`}
      </pre>

      <p>
        🔗 Live Demo URL:
        <a
          href="https://evbv-demo.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}EVBV Platform
        </a>
      </p>

      <p>
        🔗 React Git URL:
        <a
          href="https://github.com/anilsahda/evbv-platform.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}https://github.com/anilsahda/evbv-platform.git
        </a>
      </p>
    </div>
  );
}

export default EVBV;