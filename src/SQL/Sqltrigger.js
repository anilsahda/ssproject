import React from 'react';

function Sqltrigger() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">SQL Server Triggers</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p>
          A trigger is a special type of stored procedure in SQL Server that automatically executes in response to certain events on a table or view, such as INSERT, UPDATE, or DELETE.
        </p>
      </section>

      {/* Types of Triggers */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. Types of Triggers</h2>
        <ul className="list-disc ml-6">
          <li><strong>AFTER Trigger:</strong> Executes after the triggering SQL event (INSERT, UPDATE, DELETE).</li>
          <li><strong>INSTEAD OF Trigger:</strong> Executes instead of the triggering SQL event, useful for views.</li>
          <li><strong>DDL Trigger:</strong> Executes in response to DDL events like CREATE, ALTER, DROP.</li>
          <li><strong>LOGON Trigger:</strong> Executes in response to logon events.</li>
        </ul>
      </section>

      {/* Example - AFTER Trigger */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. Example: AFTER INSERT Trigger</h2>
        <pre>
          {`-- Create AFTER INSERT Trigger
CREATE TRIGGER trg_AfterInsertStudent
ON Student
AFTER INSERT
AS
BEGIN
    PRINT 'A new student has been inserted';
    -- You can also insert into audit table
    INSERT INTO StudentAudit(StudentID, Action, ActionDate)
    SELECT StudentID, 'INSERT', GETDATE() FROM inserted;
END;`}
        </pre>
      </section>

      {/* Example - INSTEAD OF Trigger */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Example: INSTEAD OF UPDATE Trigger</h2>
        <pre>
          {`-- Create INSTEAD OF UPDATE Trigger
CREATE TRIGGER trg_InsteadOfUpdateStudent
ON Student
INSTEAD OF UPDATE
AS
BEGIN
    PRINT 'Instead of updating directly, custom logic can be applied';
    -- Example: Prevent updating Email
    UPDATE Student
    SET StudentName = i.StudentName
    FROM Student s
    JOIN inserted i ON s.StudentID = i.StudentID;
END;`}
        </pre>
      </section>

      {/* Trigger Table Reference */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">5. Trigger Table References</h2>
        <p>
          In triggers, two special tables are available:
        </p>
        <ul className="list-disc ml-6">
          <li><strong>inserted:</strong> Contains new rows for INSERT and updated values for UPDATE.</li>
          <li><strong>deleted:</strong> Contains old rows for DELETE and old values for UPDATE.</li>
        </ul>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">6. Best Practices</h2>
        <ul className="list-disc ml-6">
          <li>Use triggers only when necessary; avoid complex logic that affects performance.</li>
          <li>Always test triggers thoroughly to avoid unintended data modifications.</li>
          <li>Be cautious with recursive triggers to prevent infinite loops.</li>
          <li>Use AFTER triggers for auditing and logging changes.</li>
          <li>Use INSTEAD OF triggers for custom validation or to manage views.</li>
        </ul>
      </section>
    </div>
  );
}

export default Sqltrigger;
