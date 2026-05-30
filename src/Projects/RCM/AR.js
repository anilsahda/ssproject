function AR() {
  return (
    <div>
      <h3>Project Overview</h3>

      <p>
        The <strong>Accounts Receivable (AR) Management System</strong> is a
        SaaS-based multi-tenant healthcare revenue cycle management platform
        designed for hospitals, clinics, and medical billing companies to manage
        insurance claims, payment collections, denials, and follow-up processes
        efficiently.
      </p>

      <ul>
        <li>AR teams can manage insurance claim follow-ups and collections.</li>
        <li>Admins can monitor claims, denials, and payment workflows.</li>
        <li>Managers can track team productivity and aging reports.</li>
        <li>RCM organizations can improve revenue recovery and reduce claim aging.</li>
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
        Super Admin creates a new tenant "Prime RCM Solutions" and assigns Admin access.
      </p>

      <b>3. Admin Module</b>

      <p>
        Admin manages claims, AR workflows, denial management, and collections operations.
      </p>

      <ul>
        <li>Admin Login</li>
        <li>Provider Management: Add/update providers and facilities</li>
        <li>Insurance Payer Management</li>
        <li>Claims Management</li>
        <li>Payment Posting Management</li>
        <li>Denial Management</li>
        <li>AR Follow-Up Workflow Management</li>
        <li>Appeals & Reconsideration Management</li>
        <li>Reports & Analytics Dashboard</li>
        <li>Compliance and Audit Monitoring</li>
      </ul>

      <p>
        <em>Example:</em>{" "}
        Admin reviews denied claims and assigns AR follow-up tasks to AR specialists.
      </p>

      <b>4. Manager Module</b>

      <p>
        Managers oversee AR operations, collections performance, and denial resolution.
      </p>

      <ul>
        <li>Assign AR follow-up tasks</li>
        <li>Monitor aging claims and collections</li>
        <li>Track denial resolution rates</li>
        <li>Review payment recovery reports</li>
        <li>Monitor employee productivity metrics</li>
      </ul>

      <b>5. AR Specialist Module</b>

      <p>
        AR specialists manage insurance follow-ups, denials, and payment recovery processes.
      </p>

      <ul>
        <li>View assigned claims and follow-up queues</li>
        <li>Contact insurance payers for claim status</li>
        <li>Update claim follow-up notes</li>
        <li>Resolve denied or rejected claims</li>
        <li>Submit appeals and reconsiderations</li>
      </ul>

      <b>6. Auditor Module</b>

      <p>
        Auditors validate AR compliance, collections, and operational quality.
      </p>

      <ul>
        <li>Review AR follow-up activities</li>
        <li>Perform compliance audits</li>
        <li>Validate payment recovery processes</li>
        <li>Generate audit reports</li>
        <li>Identify operational gaps and risks</li>
      </ul>

      <section>
        <b>Accounts Receivable (AR) System</b>

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
│  ├─ claims/page.tsx
│  ├─ denials/page.tsx
│  ├─ payments/page.tsx
│  ├─ followup/page.tsx
│  ├─ appeals/page.tsx
│  └─ reports/page.tsx
│
├─ (manager)/manager
│  ├─ layout.tsx                 // ManagerLayout
│  ├─ page.tsx                   // Manager Dashboard
│  ├─ aging/page.tsx
│  ├─ collections/page.tsx
│  └─ analytics/page.tsx
│
├─ (arspecialist)/arspecialist
│  ├─ layout.tsx                 // ARSpecialistLayout
│  ├─ page.tsx                   // AR Dashboard
│  ├─ claims/page.tsx
│  ├─ followup/page.tsx
│  ├─ denials/page.tsx
│  └─ appeals/page.tsx
│
└─ (auditor)/auditor
   ├─ layout.tsx                 // AuditorLayout
   ├─ page.tsx                   // Auditor Dashboard
   ├─ compliance/page.tsx
   ├─ audits/page.tsx
   └─ reports/page.tsx`}
          </code>
        </pre>
      </section>

      <h3>Microservices Architecture</h3>

      <ul>
        <li>API Gateway Service (YARP)</li>
        <li>Auth Service</li>
        <li>Tenant Service</li>
        <li>Claims Service</li>
        <li>AR Follow-Up Service</li>
        <li>Payment Posting Service</li>
        <li>Denial Management Service</li>
        <li>Notification Service</li>
        <li>Reporting Service</li>
      </ul>

      <h3>Cloud & DevOps</h3>

      <ul>
        <li>Docker Containerization</li>
        <li>Kubernetes Deployment</li>
        <li>AWS ECS / EKS or Azure AKS</li>
        <li>CI/CD using GitHub Actions or Azure DevOps</li>
        <li>Redis Cache for high-performance operations</li>
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
{`Claim Submitted to Insurance
        |
        v
Claim Processed by Payer
        |
        v
Payment / Denial Received
        |
        v
AR Follow-Up Initiated
        |
        v
Appeal or Reconsideration Submitted
        |
        v
Payment Collected
        |
        v
Claim Closed`}
      </pre>

      <p>
        🔗 Live Demo URL:
        <a
          href="https://ar-management-demo.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}AR Management System
        </a>
      </p>

      <p>
        🔗 React Git URL:
        <a
          href="https://github.com/anilsahda/ar-management-system.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}https://github.com/anilsahda/ar-management-system.git
        </a>
      </p>
    </div>
  );
}

export default AR;