import React from "react";

function Sqlcursor() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">SQL Server Cursors</h1>
        <p className="text-gray-500 text-xs mt-1">
          Cursors allow you to iterate over a result set row by row, providing fine-grained control for row-based processing in SQL Server. 
          While powerful, cursors can impact performance and should be used judiciously.
        </p>
      </header>

      {/* Cursor Basics */}
      <Section title="Cursor Basics" color="text-green-600">
        <p>
          A cursor is a database object used to traverse a set of rows returned by a query. Unlike standard set-based SQL operations, cursors allow row-by-row processing.
          Cursors are typically used when operations require sequential row handling that cannot be done using a single query.
        </p>
      </Section>

      {/* Cursor Example - Student Table */}
      <Section title="Cursor Example: Iterating Over Student Table" color="text-blue-600">
        <p>This example demonstrates how to fetch each student name from the Student table one by one:</p>
        <CodeBlock>
{`DECLARE @StudentName NVARCHAR(100);

-- Declare cursor
DECLARE StudentCursor CURSOR FOR
SELECT StudentName FROM Student;

-- Open cursor
OPEN StudentCursor;

-- Fetch first row
FETCH NEXT FROM StudentCursor INTO @StudentName;

-- Loop through all rows
WHILE @@FETCH_STATUS = 0
BEGIN
    PRINT 'Student Name: ' + @StudentName;

    -- Fetch next row
    FETCH NEXT FROM StudentCursor INTO @StudentName;
END;

-- Close cursor
CLOSE StudentCursor;

-- Deallocate cursor
DEALLOCATE StudentCursor;`}
        </CodeBlock>
      </Section>

      {/* Cursor Example - Employee Table */}
      <Section title="Cursor Example: Iterating Over Employee Table" color="text-purple-600">
        <p>This example shows row-by-row processing of Employee names:</p>
        <CodeBlock>
{`DECLARE @EmployeeName NVARCHAR(100);

DECLARE EmployeeCursor CURSOR FOR
SELECT EmployeeName FROM Employee;

OPEN EmployeeCursor;

FETCH NEXT FROM EmployeeCursor INTO @EmployeeName;

WHILE @@FETCH_STATUS = 0
BEGIN
    PRINT 'Employee Name: ' + @EmployeeName;

    FETCH NEXT FROM EmployeeCursor INTO @EmployeeName;
END;

CLOSE EmployeeCursor;
DEALLOCATE EmployeeCursor;`}
        </CodeBlock>
      </Section>

      {/* Tips and Best Practices */}
      <Section title="Tips & Best Practices for Using Cursors" color="text-teal-600">
        <ul className="list-disc ml-6">
          <li>Use cursors sparingly; set-based SQL operations are generally faster and more efficient.</li>
          <li>Always <strong>CLOSE</strong> and <strong>DEALLOCATE</strong> cursors to release resources.</li>
          <li>Consider using <code>FAST_FORWARD</code> or <code>FOR READ_ONLY</code> cursors to improve performance.</li>
          <li>Use cursors only when row-by-row processing is unavoidable, such as complex business logic that cannot be expressed in a set-based query.</li>
          <li>Document cursor usage in production scripts to avoid unexpected performance issues.</li>
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

export default Sqlcursor;
