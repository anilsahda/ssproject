function MedicalCoding() {
  return (
    <div>
      <h3>Project Overview</h3>

      <p>
        The <strong>Medical Coding System</strong> is a SaaS-based multi-tenant
        healthcare platform designed for hospitals, clinics, and medical billing
        companies to manage ICD, CPT, and HCPCS coding workflows efficiently.
        It helps automate coding operations, improve claim accuracy, reduce denials,
        and streamline revenue cycle management processes.
      </p>

      <ul>
        <li>Coders can assign ICD, CPT, and HCPCS codes to medical records.</li>
        <li>Admins can manage providers, coders, and coding workflows.</li>
        <li>Managers can monitor productivity, audits, and coding quality.</li>
        <li>RCM teams can reduce claim denials and improve reimbursement.</li>
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
        Super Admin creates a new tenant "Global Medical Coding Services" and assigns Admin access.
      </p>

      <b>3. Admin Module</b>

      <p>
        Admin manages providers, coders, coding workflows, and operational activities.
      </p>

      <ul>
        <li>Admin Login</li>
        <li>Provider Management: Add/update providers and facilities</li>
        <li>Patient Chart Management</li>
        <li>Medical Coding Workflow Management</li>
        <li>ICD-10 Coding Management</li>
        <li>CPT & HCPCS Coding Management</li>
        <li>Claims Review and Validation</li>
        <li>Denial Management</li>
        <li>Audit and Compliance Tracking</li>
        <li>Reports & Analytics Dashboard</li>
      </ul>

      <p>
        <em>Example:</em>{" "}
        Admin reviews patient charts and assigns coding tasks to certified coders.
      </p>

      <b>4. Manager Module</b>

      <p>
        Managers oversee coding operations, productivity, and quality assurance.
      </p>

      <ul>
        <li>Assign coding tasks to coders</li>
        <li>Monitor coding turnaround time</li>
        <li>Review coding accuracy and quality audits</li>
        <li>Track claim denials and corrections</li>
        <li>Monitor team productivity metrics</li>
      </ul>

      <b>5. Coder Module</b>

      <p>
        Certified coders process patient charts and assign medical codes.
      </p>

      <ul>
        <li>View assigned patient charts</li>
        <li>Assign ICD-10, CPT, and HCPCS codes</li>
        <li>Update coding status</li>
        <li>Submit completed coding records</li>
        <li>Respond to audit corrections</li>
      </ul>

      <b>6. Auditor Module</b>

      <p>
        Auditors validate coding quality and compliance standards.
      </p>

      <ul>
        <li>Review coded charts</li>
        <li>Perform quality checks</li>
        <li>Identify coding discrepancies</li>
        <li>Approve or reject coding submissions</li>
        <li>Generate audit reports</li>
      </ul>

      <section>
        <b>Medical Coding System</b>

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
│  ├─ patients/page.tsx
│  ├─ coding/page.tsx
│  ├─ icd/page.tsx
│  ├─ cpt/page.tsx
│  ├─ claims/page.tsx
│  ├─ audits/page.tsx
│  └─ reports/page.tsx
│
├─ (manager)/manager
│  ├─ layout.tsx                 // ManagerLayout
│  ├─ page.tsx                   // Manager Dashboard
│  ├─ monitoring/page.tsx
│  ├─ productivity/page.tsx
│  └─ analytics/page.tsx
│
├─ (coder)/coder
│  ├─ layout.tsx                 // CoderLayout
│  ├─ page.tsx                   // Coder Dashboard
│  ├─ charts/page.tsx
│  ├─ coding/page.tsx
│  └─ submissions/page.tsx
│
└─ (auditor)/auditor
   ├─ layout.tsx                 // AuditorLayout
   ├─ page.tsx                   // Auditor Dashboard
   ├─ reviews/page.tsx
   ├─ compliance/page.tsx
   └─ reports/page.tsx`}
          </code>
        </pre>
      </section>

      <h3>Microservices Architecture</h3>

      <ul>
        <li>API Gateway Service (YARP)</li>
        <li>Auth Service</li>
        <li>Tenant Service</li>
        <li>Patient Service</li>
        <li>Medical Coding Service</li>
        <li>Audit Service</li>
        <li>Claims Service</li>
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
{`Patient Encounter Completed
        |
        v
Medical Records Uploaded
        |
        v
Coding Task Assigned
        |
        v
ICD/CPT Coding Completed
        |
        v
Audit & Compliance Review
        |
        v
Claims Validation
        |
        v
Claim Submitted to Insurance`}
      </pre>

      <p>
        🔗 Live Demo URL:
        <a
          href="https://medical-coding-demo.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}Medical Coding System
        </a>
      </p>

      <p>
        🔗 React Git URL:
        <a
          href="https://github.com/anilsahda/medical-coding-system.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}https://github.com/anilsahda/medical-coding-system.git
        </a>
      </p>
    </div>
  );
}

export default MedicalCoding;