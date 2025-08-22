function SSHealthInsurance() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h1>SS Health Insurance System</h1>

      <h2>Project Overview</h2>
      <p>
        The <strong>SS Health Insurance System</strong> is a web-based platform designed to manage health insurance policies, claims, customer records, and provider interactions. 
        It streamlines the insurance process for administrators, agents, healthcare providers, and policyholders, ensuring transparency, security, and efficiency.
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
      <p>The Super Admin oversees user access and system-level configurations.</p>
      <ul>
        <li>Manage roles (Admin, Agent, Provider, Customer)</li>
        <li>Configure policy types, claims rules, and user permissions</li>
      </ul>

      <h3>2. Admin Module</h3>
      <p>The Admin manages insurance operations and regulatory compliance.</p>
      <ul>
        <li>Create and manage health insurance policies</li>
        <li>Oversee claims processing and approvals</li>
        <li>Generate reports for audits and analytics</li>
      </ul>

      <h3>3. Agent Module</h3>
      <p>Insurance agents handle policy sales and customer support.</p>
      <ul>
        <li>Register new customers and issue policies</li>
        <li>Assist with premium payments and renewals</li>
        <li>Track commissions and customer interactions</li>
      </ul>

      <h3>4. Healthcare Provider Module</h3>
      <p>Providers interact with the system to verify coverage and process claims.</p>
      <ul>
        <li>Check patient policy validity and coverage details</li>
        <li>Submit medical claims and track reimbursement status</li>
        <li>Communicate with insurance admins for approvals</li>
      </ul>

      <h3>5. Customer Module</h3>
      <p>Policyholders can manage their insurance and claims online.</p>
      <ul>
        <li>View policy details and premium schedules</li>
        <li>Submit and track insurance claims</li>
        <li>Download policy documents and update personal info</li>
      </ul>

      <h2>System Workflow</h2>
      <ol>
        <li>Super Admin → sets up roles, permissions, and global settings</li>
        <li>Admin → manages policies, claims, and compliance</li>
        <li>Agent → sells policies and assists customers</li>
        <li>Provider → verifies coverage and processes claims</li>
        <li>Customer → views policy, submits claims, manages account</li>
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
            <td>Configure system roles, rules, and user access</td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>Manage policies, claims, and reporting</td>
          </tr>
          <tr>
            <td>Agent</td>
            <td>Sell policies, support customers, manage renewals</td>
          </tr>
          <tr>
            <td>Healthcare Provider</td>
            <td>Submit claims and verify patient coverage</td>
          </tr>
          <tr>
            <td>Customer</td>
            <td>Manage policy, submit claims, track reimbursements</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Features for Students</h2>
      <ul>
        <li>Role-based access for secure insurance workflows</li>
        <li>Online policy creation, purchase, and renewal</li>
        <li>Digital claim submission with document uploads</li>
        <li>Real-time claim tracking and notifications</li>
        <li>Analytics and reports for compliance and decision-making</li>
        <li>Cloud-deployable and scalable for enterprise insurance providers</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The <strong>SS Health Insurance System</strong> transforms traditional health insurance operations into a digital, efficient, and customer-friendly experience. 
        It enables better coordination between insurers, customers, and healthcare providers, reducing processing time and improving satisfaction across the board.
      </p>
    </div>
  );
}

export default SSHealthInsurance;
