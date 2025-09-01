function HealthCare() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">SS HealthCare</h1>
      </header>

      {/* Project Overview */}
      <section>
        <h2 className="text-lg font-semibold text-indigo-600">Project Overview</h2>
        <p>
          The <strong>SS HealthCare</strong> is an enterprise-grade web application designed to
          simplify and automate <strong>hospital, clinic, and healthcare service management</strong>. 
          It enables organizations to manage <strong>patients, doctors, staff, appointments, billing, 
          pharmacy, and reporting</strong> at scale.
        </p>
      </section>

      {/* Technology Stack */}
      <section>
        <h2 className="text-lg font-semibold text-indigo-600">Technology Stack</h2>
        <ul className="list-disc list-inside">
          <li><strong>Front-End:</strong> React / Next.js</li>
          <li><strong>Back-End:</strong> .NET Core | Spring Boot | Node.js</li>
          <li><strong>Database:</strong> SQL Server (Enterprise Schema)</li>
          <li><strong>Cloud Platform:</strong> AWS (RDS, S3, EC2, Lambda, CloudWatch)</li>
        </ul>
      </section>

      {/* Modules */}
      <section>
        <h2 className="text-lg font-semibold text-indigo-600">Modules and Functionalities</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Super Admin: Role & User Management, System Configuration</li>
          <li>Admin: Patient & Staff Management, Departments, Reports</li>
          <li>Doctor: Profile, Availability, Appointments, Prescriptions</li>
          <li>Patient: Registration, Appointments, Medical Records, Billing</li>
          <li>Pharmacy & Billing: Inventory, Invoices, Payments</li>
          <li>Enterprise: Compliance, Notifications, Audit Logs</li>
        </ul>
      </section>

      {/* Database Tables */}
      <section>
        <h2 className="text-lg font-semibold text-indigo-600">Database Tables & Fields</h2>

        <div className="space-y-6 mt-4">
          {/* Users & Roles */}
          <div>
            <h3 className="font-bold text-indigo-700">1. Users & Roles</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Users:</strong> UserId, Username, PasswordHash, Email, Phone, FirstName, LastName, DateOfBirth, Gender, UserType, CreatedAt, UpdatedAt</li>
              <li><strong>Roles:</strong> RoleId, RoleName, Description</li>
              <li><strong>UserRoles:</strong> UserRoleId, UserId (FK), RoleId (FK)</li>
            </ul>
          </div>

          {/* Patient Management */}
          <div>
            <h3 className="font-bold text-indigo-700">2. Patient Management</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Patients:</strong> PatientId, UserId (FK), MedicalRecordNumber, EmergencyContact, BloodGroup, Allergies, ChronicConditions, Notes</li>
              <li><strong>MedicalRecords:</strong> RecordId, PatientId (FK), Diagnosis, Prescriptions, LabResults, CreatedBy, CreatedAt</li>
            </ul>
          </div>

          {/* Doctor Management */}
          <div>
            <h3 className="font-bold text-indigo-700">3. Doctor & Staff Management</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Doctors:</strong> DoctorId, UserId (FK), Specialization, Department, ExperienceYears, Availability, Status</li>
              <li><strong>Staff:</strong> StaffId, UserId (FK), Department, Role, ShiftType, Status</li>
            </ul>
          </div>

          {/* Appointments */}
          <div>
            <h3 className="font-bold text-indigo-700">4. Appointments & Scheduling</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Appointments:</strong> AppointmentId, PatientId (FK), DoctorId (FK), ScheduleDate, TimeSlot, Status, Notes</li>
              <li><strong>Schedules:</strong> ScheduleId, DoctorId (FK), AvailableFrom, AvailableTo, Location, Status</li>
            </ul>
          </div>

          {/* Billing */}
          <div>
            <h3 className="font-bold text-indigo-700">5. Billing & Payments</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Invoices:</strong> InvoiceId, PatientId (FK), GeneratedDate, DueDate, TotalAmount, Status</li>
              <li><strong>Payments:</strong> PaymentId, InvoiceId (FK), PaymentDate, Method, AmountPaid, TransactionReference</li>
            </ul>
          </div>

          {/* Pharmacy */}
          <div>
            <h3 className="font-bold text-indigo-700">6. Pharmacy & Inventory</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Medicines:</strong> MedicineId, Name, Category, Stock, UnitPrice, ExpiryDate</li>
              <li><strong>PharmacySales:</strong> SaleId, PatientId (FK), MedicineId (FK), Quantity, TotalAmount, SaleDate</li>
            </ul>
          </div>

          {/* Compliance & Auditing */}
          <div>
            <h3 className="font-bold text-indigo-700">7. Compliance & Auditing</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>AuditLogs:</strong> AuditId, UserId (FK), Action, Entity, EntityId, Timestamp, IPAddress</li>
              <li><strong>Incidents:</strong> IncidentId, PatientId (FK), StaffId (FK), Date, Description, ReportedBy (FK), ActionTaken</li>
            </ul>
          </div>

          {/* System Config */}
          <div>
            <h3 className="font-bold text-indigo-700">8. System & Notifications</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Settings:</strong> SettingId, Key, Value</li>
              <li><strong>Notifications:</strong> NotificationId, UserId (FK), Message, Type, Status, CreatedAt</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-lg font-semibold text-indigo-600">Conclusion</h2>
        <p>
          The <strong>SS HealthCare Management System</strong> uses an 
          <strong> enterprise-level relational schema</strong> to handle patients, 
          doctors, appointments, billing, pharmacy, and compliance. 
          The modular design ensures scalability, security, and efficient 
          management for hospitals and clinics.
        </p>
        <p>🔗 Live Demo URL: <a href="https://sshealthcare.netlify.app/" target="_blank" rel="noopener noreferrer">SS Health Care</a></p>
        <p>🔗 React Git URL: <a href="https://github.com/anilsahda/sshealthcare.git" target="_blank" rel="noopener noreferrer">https://github.com/anilsahda/sshealthcare.git</a></p>
      </section>
    </div>
  );
}

export default HealthCare
