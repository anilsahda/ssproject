function SSHealthInsurance() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h3>Project Overview</h3>
      <p>The <strong>SS Health Insurance System</strong> is a web-based platform designed to manage health insurance policies, claims, customer records, and provider interactions. It streamlines the insurance process for administrators, agents, healthcare providers, and policyholders, ensuring transparency, security, and efficiency.</p>

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
        <li>Home, About and Jobs</li>
        <li>Contact Us</li>
        <li>Login</li>
        <li>Register</li>
      </ul>

      <b>1. Main Module</b>
      <ul>
        <li>Home, About and Packages</li>
        <li>Contact Us</li>
        <li>Login</li>
        <li>Register</li>
      </ul>

      <b>2. Super Admin Module</b>
      <p>The Super Admin oversees user access and system-level configurations.</p>
      <ul>
        <li>Manage roles (Admin, Agent, Provider, Customer)</li>
        <li>Configure policy types, claims rules, and user permissions</li>
      </ul>

      <b>3. Admin Module</b>
      <p>The Admin manages insurance operations and regulatory compliance.</p>
      <ul>
        <li>Create and manage health insurance policies</li>
        <li>Oversee claims processing and approvals</li>
        <li>Generate reports for audits and analytics</li>
        <li>Register new customers and issue policies</li>
        <li>Assist with premium payments and renewals</li>
        <li>Track commissions and customer interactions</li>
        <li>Check patient policy validity and coverage details</li>
        <li>Submit medical claims and track reimbursement status</li>
        <li>Communicate with insurance admins for approvals</li>
      </ul>

      <b>4. Customer Module</b>
      <p>Policyholders can manage their insurance and claims online.</p>
      <ul>
        <li>View policy details and premium schedules</li>
        <li>Submit and track insurance claims</li>
        <li>Download policy documents and update personal info</li>
      </ul>

      <section>
        <b>SS Health Insurance</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
            <code>
{`app
├─ layout.tsx                 // RootLayout (providers, html/body)
├─ (main)/
│  ├─ layout.tsx              // MainLayout (public site)
│  ├─ page.tsx                // Home page
│  ├─ about/page.tsx
│  ├─ packages/page.tsx
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
│  ├─ users/page.tsx
│  ├─ packages/page.tsx
│  ├─ claims/page.tsx
│  ├─ policies/page.tsx
│  └─ providers/page.tsx
│
└─ (customer)/customer
    ├─ layout.tsx           // CustomerLayout
    ├─ page.tsx             // Customer Dashboard
    ├─ customerprofile/page.tsx
    ├─ fileclaim/page.tsx
    ├─ claimlist/page.tsx
    ├─ pendinglist/page.tsx        
    └─ history/page.tsx`}
            </code>
        </pre>
      </section>
    </div>
  );
}

export default SSHealthInsurance;