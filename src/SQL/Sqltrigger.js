import React from "react";

function Sqltrigger() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">SQL Server Triggers</h1>
        <p className="text-gray-500 text-xs mt-1">
          Triggers are special stored procedures that automatically execute in response to certain events on a table or view. 
          They are used for auditing, enforcing business rules, and automating tasks in SQL Server.
        </p>
      </header>

      {/* Introduction */}
      <Section title="Introduction to SQL Triggers" color="text-green-600">
        <p>
          A trigger is a stored procedure that automatically executes when specific events occur, such as <strong>INSERT</strong>, <strong>UPDATE</strong>, or <strong>DELETE</strong> on a table or view. 
          Triggers help enforce data integrity and business rules without manual intervention.
        </p>
      </Section>

      {/* Types of Triggers */}
      <Section title="Types of Triggers" color="text-orange-600">
        <ul className="list-disc ml-6">
          <li><strong>AFTER Trigger:</strong> Executes after the triggering SQL event (INSERT, UPDATE, DELETE).</li>
          <li><strong>INSTEAD OF Trigger:</strong> Executes instead of the triggering SQL event, often used for views or custom validation.</li>
          <li><strong>DDL Trigger:</strong> Executes in response to DDL events like CREATE, ALTER, or DROP.</li>
          <li><strong>LOGON Trigger:</strong> Executes in response to login events to enforce security or auditing.</li>
        </ul>
      </Section>

      {/* Example - AFTER Trigger */}
      <Section title="Example: AFTER INSERT Trigger" color="text-blue-600">
        <p>AFTER triggers execute after the data modification, useful for auditing and logging:</p>
        <CodeBlock>
{`-- Create AFTER INSERT Trigger
CREATE TRIGGER trg_AfterInsertStudent
ON Student
AFTER INSERT
AS
BEGIN
    PRINT 'A new student has been inserted';
    -- Insert into audit table
    INSERT INTO StudentAudit(StudentID, Action, ActionDate)
    SELECT StudentID, 'INSERT', GETDATE() FROM inserted;
END;`}
        </CodeBlock>
      </Section>

      {/* Example - INSTEAD OF Trigger */}
      <Section title="Example: INSTEAD OF UPDATE Trigger" color="text-purple-600">
        <p>INSTEAD OF triggers override the standard action, allowing custom logic:</p>
        <CodeBlock>
{`-- Create INSTEAD OF UPDATE Trigger
CREATE TRIGGER trg_InsteadOfUpdateStudent
ON Student
INSTEAD OF UPDATE
AS
BEGIN
    PRINT 'Instead of updating directly, custom logic is applied';
    -- Example: Prevent updating Email, update only StudentName
    UPDATE Student
    SET StudentName = i.StudentName
    FROM Student s
    JOIN inserted i ON s.StudentID = i.StudentID;
END;`}
        </CodeBlock>
      </Section>

      {/* Trigger Table References */}
      <Section title="Trigger Table References" color="text-red-600">
        <p>
          Triggers provide access to special tables for referencing data before and after modifications:
        </p>
        <ul className="list-disc ml-6">
          <li><strong>inserted:</strong> Contains new rows for INSERT and updated values for UPDATE.</li>
          <li><strong>deleted:</strong> Contains old rows for DELETE and old values for UPDATE.</li>
        </ul>
      </Section>

      {/* Best Practices */}
      <Section title="Best Practices for Triggers" color="text-teal-600">
        <ul className="list-disc ml-6">
          <li>Use triggers only when necessary to avoid performance overhead.</li>
          <li>Keep trigger logic simple and well-tested to prevent unintended data changes.</li>
          <li>Avoid recursive triggers unless carefully controlled to prevent infinite loops.</li>
          <li>Use AFTER triggers for auditing, logging, and enforcing integrity rules.</li>
          <li>Use INSTEAD OF triggers for validation, custom updates, or managing views.</li>
          <li>Document triggers and their purpose to maintain database clarity.</li>
        </ul>
      </Section>

    </div>
  );
}

/* Reusable Section Component */
function Section({ title, color, children }) {
  return (
    <section className="mb-6">
      <div className="flex items-center mb-2">
        <strong className={`${color} text-lg`}>{title}</strong>
      </div>
      {children}
    </section>
  );
}

/* Reusable Code Block Component */
function CodeBlock({ children }) {
  return (
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">
      <code>{children}</code>
    </pre>
  );
}

export default Sqltrigger;
