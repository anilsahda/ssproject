function SSCaregiver() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">SS Caregiver</h1>
      </header>

      {/* Project Overview */}
      <section>
        <h2 className="text-lg font-semibold text-indigo-600">Project Overview</h2>
        <p>
          The <strong>SS Caregiver</strong> is an enterprise-grade web application designed to simplify and automate
          caregiver service management. It enables organizations to manage <strong>caregivers, patients, scheduling,
          billing, compliance, and reporting</strong> at scale.
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
          <li>Admin: Caregiver & Patient Management, Care Plans, Reports</li>
          <li>Caregiver: Profile, Certifications, Availability, Visit Logs</li>
          <li>Patient/Family: Search, Book Services, Complaints, Payments</li>
          <li>Enterprise: Billing, Compliance, Notifications, Audit Logs</li>
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

          {/* Caregiver Management */}
          <div>
            <h3 className="font-bold text-indigo-700">2. Caregiver Management</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Caregivers:</strong> CaregiverId, UserId (FK), EmployeeCode, HireDate, Specialization, ExperienceYears, Certifications, ShiftType, Status</li>
              <li><strong>CaregiverCertifications:</strong> CertificationId, CaregiverId (FK), CertificationName, IssuedBy, IssueDate, ExpiryDate</li>
            </ul>
          </div>

          {/* Patients */}
          <div>
            <h3 className="font-bold text-indigo-700">3. Patient Management</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Patients:</strong> PatientId, UserId (FK), MedicalRecordNumber, EmergencyContactName, EmergencyContactPhone, PrimaryDoctorId (FK), BloodGroup, Allergies, ChronicConditions, Notes</li>
              <li><strong>PatientFamily:</strong> FamilyId, PatientId (FK), UserId (FK), Relation</li>
            </ul>
          </div>

          {/* Care Plans */}
          <div>
            <h3 className="font-bold text-indigo-700">4. Care Plans & Tasks</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>CarePlans:</strong> CarePlanId, PatientId (FK), CreatedBy (FK), PlanName, StartDate, EndDate, Status, Notes</li>
              <li><strong>CarePlanTasks:</strong> TaskId, CarePlanId (FK), Description, Frequency, Priority, AssignedTo (FK), Status, ScheduledDate, CompletionDate</li>
            </ul>
          </div>

          {/* Scheduling & Visits */}
          <div>
            <h3 className="font-bold text-indigo-700">5. Scheduling & Visits</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Schedules:</strong> ScheduleId, CaregiverId (FK), PatientId (FK), TaskId (FK), StartTime, EndTime, Location, Status</li>
              <li><strong>VisitLogs:</strong> VisitId, ScheduleId (FK), CheckInTime, CheckOutTime, Notes, CreatedBy</li>
            </ul>
          </div>

          {/* Billing */}
          <div>
            <h3 className="font-bold text-indigo-700">6. Billing & Payments</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Invoices:</strong> InvoiceId, PatientId (FK), GeneratedDate, DueDate, TotalAmount, Status</li>
              <li><strong>InvoiceItems:</strong> InvoiceItemId, InvoiceId (FK), Description, Quantity, UnitPrice, Amount</li>
              <li><strong>Payments:</strong> PaymentId, InvoiceId (FK), PaymentDate, PaymentMethod, AmountPaid, TransactionReference</li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="font-bold text-indigo-700">7. Compliance & Auditing</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>AuditLogs:</strong> AuditId, UserId (FK), Action, Entity, EntityId, Timestamp, IPAddress</li>
              <li><strong>Incidents:</strong> IncidentId, PatientId (FK), CaregiverId (FK), Date, Description, ReportedBy (FK), ActionTaken</li>
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
          The <strong>Caregiver Management System</strong> uses an <strong>enterprise-level relational schema</strong>
          to handle caregivers, patients, services, billing, and compliance. The modular design ensures scalability,
          security, and efficient management for healthcare providers.
        </p>
      </section>
    </div>
  );
}

export default SSCaregiver;
