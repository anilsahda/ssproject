import React from 'react';

function Sqlcursor() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">SQL Server Cursors</h1>

      {/* Cursor Basics */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Cursor Basics</h2>
        <p>Cursors are used to iterate through a result set row by row.</p>
      </section>

      {/* Cursor Example */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. Cursor Example with Student Table</h2>
        <pre>
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
        </pre>
      </section>

      {/* Cursor with Employee Table */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. Cursor Example with Employee Table</h2>
        <pre>
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
        </pre>
      </section>

      {/* Tips */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Tips for Using Cursors</h2>
        <ul className="list-disc ml-6">
          <li>Cursors are slow for large datasets. Use set-based operations if possible.</li>
          <li>Always CLOSE and DEALLOCATE cursors to free resources.</li>
          <li>You can use <code>FAST_FORWARD</code> or <code>FOR READ_ONLY</code> for performance optimization.</li>
          <li>Use cursors for row-by-row processing only when necessary.</li>
        </ul>
      </section>
    </div>
  );
}

export default Sqlcursor;
