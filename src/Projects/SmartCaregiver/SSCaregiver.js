function SSCaregiver() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">SS Caregiver</h1>
      </header>

      <section>
        <h2 className="text-lg font-semibold text-indigo-600">Project Overview</h2>
        <p>The <strong>SS Caregiver</strong> is a web-based application designed to simplify caregiver service management. It helps track caregivers, patients, and service requests efficiently.</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Caregivers can register and provide their services (elderly care, babysitting, nursing, etc.).</li>
          <li>Patients (or families) can search for caregivers and request services.</li>
          <li>Caregivers can accept or decline requests and manage their schedules.</li>
          <li>Admins can manage caregivers, patients, and service requests effectively.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-indigo-600">Technology Stack</h2>
        <ul className="list-disc list-inside">
          <li><strong>Front-End:</strong> React / Next.js</li>
          <li><strong>Back-End:</strong> .NET Core | Spring Boot | Node.js</li>
          <li><strong>Database:</strong> SQL Server</li>
          <li><strong>Cloud Platform:</strong> AWS</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-indigo-600">Modules and Functionalities</h2>

        <div className="space-y-4 mt-2">
          <div>
            <h3 className="font-bold">1. Super Admin Module</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Role Management: Create, update, delete roles (Admin, Caregiver, Patient)</li>
              <li>User Management: Add users, assign roles, update or deactivate accounts</li>
              <li><em>Example:</em> Super Admin creates a new Admin account and assigns the role.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">2. Admin Module</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Admin Login</li>
              <li>Caregiver Management: Approve caregiver registrations, update or deactivate accounts</li>
              <li>Patient Management: Manage patient profiles and their requests</li>
              <li>Service Request Management: View, assign, or resolve caregiver service requests</li>
              <li>Reports: Generate reports on caregivers, patients, and services provided</li>
              <li><em>Example:</em> Admin approves 10 new caregiver applications and assigns them to patient requests.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">3. Caregiver Module</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Login using credentials</li>
              <li>Profile Management: Add details, skills, availability, rates</li>
              <li>Service Request Management: Accept or reject requests</li>
              <li>Schedule Management: Update and manage schedules</li>
              <li>Feedback Management: View patient feedback and ratings</li>
              <li><em>Example:</em> A caregiver updates availability, accepts a 2-day elderly care request, and gets rated.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">4. Patient Module</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Search caregivers by skill, location, or availability</li>
              <li>Book services for a specific time period</li>
              <li>Submit complaints or provide feedback</li>
              <li>Account Management: Update personal details, change password</li>
              <li><em>Example:</em> A patient books a certified nurse for 1 week and submits feedback later.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-indigo-600">System Workflow</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Super Admin →</strong> creates roles → adds users → assigns roles</li>
          <li><strong>Admin →</strong> approves caregivers → manages patients → assigns requests → generates reports</li>
          <li><strong>Caregiver →</strong> logs in → updates availability → accepts/rejects requests → provides services → gets feedback</li>
          <li><strong>Patient →</strong> searches caregivers → books services → provides feedback/complaints</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-indigo-600">Roles & Responsibilities</h2>
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-indigo-100">
              <th className="border border-gray-300 px-3 py-2 text-left">Role</th>
              <th className="border border-gray-300 px-3 py-2 text-left">Responsibilities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Super Admin</td>
              <td className="border border-gray-300 px-3 py-2">Create/manage roles and users, assign roles</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Admin</td>
              <td className="border border-gray-300 px-3 py-2">Manage caregivers, patients, requests, and generate reports</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Caregiver</td>
              <td className="border border-gray-300 px-3 py-2">Manage profile, availability, requests, and feedback</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Patient</td>
              <td className="border border-gray-300 px-3 py-2">Search caregivers, request services, submit feedback</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-indigo-600">Key Features for Students</h2>
        <ul className="list-disc list-inside">
          <li>All operations online: caregiver registration, booking, complaint submission, and feedback</li>
          <li>Role-Based Access: Super Admin → Admin → Caregiver → Patient</li>
          <li>Reports & Tracking: Admin can track services, caregiver performance, and complaints efficiently</li>
          <li>Cloud-Ready: AWS deployment ensures accessibility and scalability</li>
          <li>User-Friendly: Simplifies finding caregivers, booking services, and tracking feedback</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-indigo-600">Conclusion</h2>
        <p>
          The <strong>Caregiver Management System</strong> makes caregiver service management efficient, transparent,
          and user-friendly. It allows seamless communication between admins, caregivers, and patients, making booking,
          service delivery, and complaint handling fast and organized.
        </p>
      </section>
    </div>
  );
}

export default SSCaregiver;