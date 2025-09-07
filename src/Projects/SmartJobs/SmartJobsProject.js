function SSJobs() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h3>Project Overview</h3>
      <p>The <strong>SS Jobs</strong> is a web-based application designed to connect job seekers and employers efficiently. It allows users to search and apply for jobs, and employers to post jobs and manage applications.</p>
      <ul>
        <li>Employers can post jobs and manage candidate applications.</li>
        <li>Job seekers can search for jobs, apply online, and manage their profiles.</li>
        <li>Admins manage users, jobs, and system reports.</li>
      </ul>

      <b>Technology Stack</b>
      <ul>
        <li>Front-End: React / Next.js</li>
        <li>Back-End: .NET Core | Spring Boot | Node.js</li>
        <li>Database: SQL Server</li>
        <li>Cloud Platform: AWS</li>
      </ul>

      <h3>Modules and Functionalities</h3>

      <b>1. Super Admin Module</b>
      <p>The Super Admin manages users and roles.</p>
      <ul>
        <li>Create, update, and delete roles (Admin, Employer, Job Seeker)</li>
        <li>Manage users and assign roles</li>
      </ul>

      <b>2. Admin Module</b>
      <p>Admin manages the entire job portal system.</p>
      <ul>
        <li>Login with secure credentials</li>
        <li>Manage users, jobs, and applications</li>
        <li>Generate system reports</li>
      </ul>

      <b>3. Employer Module</b>
      <p>Employers can post jobs and manage applications.</p>
      <ul>
        <li>Post new job openings</li>
        <li>Edit or delete existing job posts</li>
        <li>View and manage applications from job seekers</li>
        <li>Send messages to applicants</li>
      </ul>

      <b>4. Job Seeker Module</b>
      <p>Job seekers can search and apply for jobs.</p>
      <ul>
        <li>Create and manage personal profiles</li>
        <li>Search for jobs by title, location, or company</li>
        <li>Apply online and track application status</li>
        <li>Receive messages from employers</li>
      </ul>

      <section>
        <b>SS Jobs</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
            <code>
{`app
├─ layout.tsx                 // RootLayout (providers, html/body)
├─ (main)/
│  ├─ layout.tsx              // MainLayout (public site)
│  ├─ page.tsx                // Home page
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
│  ├─ layout.tsx              // AdminLayout
│  ├─ page.tsx                // Admin Dashboard
│  ├─ jobseekerreport/page.tsx
│  ├─ companyreport/page.tsx
│  └─ feedbackreport/page.tsx
│
├─ (company)/company
│  ├─ layout.tsx              // CompanyLayout
│  ├─ page.tsx                // Company Dashboard
│  ├─ companyprofile/page.tsx
│  ├─ postjob/page.tsx
│  ├─ postedjob/page.tsx
│  ├─ profilematch/page.tsx
│  └─ appliedjob/page.tsx
│
└─ (jobseeker)/jobseeker
    ├─ layout.tsx           // JobseekerLayout
    ├─ page.tsx             // Jobseeker Dashboard
    ├─ jobseekerprofile/page.tsx
    ├─ jobmatches/page.tsx
    ├─ message/page.tsx
    ├─ inbox/page.tsx
    └─ sent/page.tsx`}
            </code>
        </pre>
      </section>
    </div>
  );
}

export default SSJobs;