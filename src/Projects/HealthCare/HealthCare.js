function SSHealthCarePortal() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Project Overview */}
      <section>
        <h2 className="text-xl font-bold mb-2">Project Overview</h2>
        <p>
          The <strong>SS Health Care Portal</strong> is a modern web-based
          application designed for hospitals, clinics, and healthcare
          institutions. It provides a centralized platform for managing doctors,
          nurses, patients, appointments, billing, prescriptions, and medical
          reports. The system ensures improved efficiency, transparency, and
          better patient care with role-based dashboards for administrators,
          doctors, nurses, and patients.
        </p>
      </section>

      {/* Technology Stack */}
      <section>
        <h2 className="text-xl font-bold mb-2">Technology Stack</h2>
        <ul className="list-disc pl-5">
          <li>Front-End: React | Next.js | Angular | Vue</li>
          <li>Back-End: .NET Core | Spring Boot | Node.js | Django</li>
          <li>Database: SQL Server | MySQL | PostgreSQL</li>
          <li>Cloud Platform: AWS | Azure</li>
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
          <li>Hospital Information & Departments</li>
        </ul>

        <b>2. Super Admin Module</b>
        <ul className="list-disc pl-5 mb-4">
          <li>Manage system users and roles (Admin, Doctor, Nurse, Patient)</li>
          <li>Define access permissions</li>
          <li>Monitor overall hospital activities</li>
        </ul>

        <b>3. Admin Module</b>
        <ul className="list-disc pl-5 mb-4">
          <li>Manage doctors, nurses, and patients</li>
          <li>Manage departments (Cardiology, Orthopedics, etc.)</li>
          <li>Handle appointments and hospital schedules</li>
          <li>Generate hospital-level reports and billing</li>
          <li>Manage inventory of medicines & equipment</li>
        </ul>

        <b>4. Doctor Module</b>
        <ul className="list-disc pl-5 mb-4">
          <li>View and manage appointments</li>
          <li>Access and update patient records</li>
          <li>Issue prescriptions and medical notes</li>
          <li>Upload patient reports and test results</li>
        </ul>

        <b>5. Nurse Module</b>
        <ul className="list-disc pl-5 mb-4">
          <li>View assigned patients</li>
          <li>Update daily patient care reports</li>
          <li>Follow doctor’s instructions for treatment</li>
          <li>Manage shift schedules</li>
        </ul>

        <b>6. Patient Module</b>
        <ul className="list-disc pl-5 mb-4">
          <li>Book and manage appointments</li>
          <li>View prescriptions and treatment history</li>
          <li>Check billing & payments</li>
          <li>Access lab reports and medical records</li>
          <li>Update personal profile and health information</li>
        </ul>
      </section>

      {/* Healthcare Portal Layout */}
      <section>
        <b>Healthcare Portal Layout</b>
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
│  ├─ layout.tsx                    // AdminLayout (Hospital Admin)
│  ├─ page.tsx                      // Admin Dashboard
│  ├─ doctor/page.tsx               // Manage doctors in hospital
│  ├─ nurse/page.tsx                // Manage nurses/staff
│  ├─ patient/page.tsx              // Manage patients
│  ├─ appointment/page.tsx          // Appointment management
│  ├─ department/page.tsx           // Manage departments
│  ├─ billing/page.tsx              // Billing & invoices
│  ├─ report/page.tsx               // Hospital reports
│  └─ inventory/page.tsx            // Medicine/Equipment inventory
│
├─ (doctor)/doctor
│  ├─ layout.tsx                    // DoctorLayout
│  ├─ page.tsx                      // Doctor Dashboard
│  ├─ appointments/page.tsx         // View/manage appointments
│  ├─ patients/page.tsx             // View assigned patients
│  ├─ prescriptions/page.tsx        // Create/manage prescriptions
│  └─ reports/page.tsx              // Patient reports / test results
│
├─ (nurse)/nurse
│  ├─ layout.tsx                    // NurseLayout
│  ├─ page.tsx                      // Nurse Dashboard
│  ├─ patients/page.tsx             // Assigned Patients
│  ├─ schedule/page.tsx             // Nurse Shift Schedule
│  └─ reports/page.tsx              // Patient Care Reports
│
└─ (patient)/patient
   ├─ layout.tsx                    // PatientLayout
   ├─ page.tsx                      // Patient Dashboard
   ├─ profile/page.tsx              // My account/profile
   ├─ appointments/page.tsx         // Book/manage appointments
   ├─ prescriptions/page.tsx        // View prescriptions
   ├─ billing/page.tsx              // My bills/payments
   └─ reports/page.tsx              // Lab reports/history`}
          </code>
        </pre>
      </section>

      {/* Links */}
      <section>
        <p>
          🔗 <strong>Live Demo URL:</strong>{" "}
          <a
            href="https://sshealthcare.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SS Health Care
          </a>
        </p>
        <p>
          🔗 <strong>React Git URL:</strong>{" "}
          <a
            href="https://github.com/anilsahda/sshealthcare.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/anilsahda/sshealthcare.git
          </a>
        </p>
      </section>
    </div>
  );
}

export default SSHealthCarePortal;
