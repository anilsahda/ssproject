import React from 'react';

function Sqlfunctions() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">SQL Server Functions</h1>

      {/* Built-in Functions */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Built-in Functions</h2>
        <pre>
          {`-- Current Date and Time
SELECT GETDATE() AS CurrentDateTime;

-- Handle NULL values
SELECT ISNULL(NULL, 'Default Value') AS Result;

-- String Length
SELECT LEN('Hello World') AS StringLength;

-- Uppercase
SELECT UPPER('hello') AS Uppercase;

-- Lowercase
SELECT LOWER('HELLO') AS Lowercase;

-- Concatenate Strings
SELECT CONCAT('Hello', ' ', 'World') AS FullString;

-- Round Numbers
SELECT ROUND(123.4567, 2) AS RoundedValue;`}
        </pre>
      </section>

      {/* Aggregate Functions */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. Aggregate Functions</h2>
        <pre>
          {`-- Count rows
SELECT COUNT(*) AS TotalStudents FROM Student;

-- Maximum value
SELECT MAX(StudentID) AS MaxStudentID FROM Student;

-- Minimum value
SELECT MIN(StudentID) AS MinStudentID FROM Student;

-- Average value
SELECT AVG(StudentID) AS AverageID FROM Student;

-- Sum
SELECT SUM(StudentID) AS TotalID FROM Student;`}
        </pre>
      </section>

      {/* User-Defined Functions (UDF) */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. User-Defined Functions</h2>
        <p>Example: Get full student info by StudentID</p>
        <pre>
          {`-- Create Function
CREATE FUNCTION fn_GetStudentInfo (@StudentID INT)
RETURNS TABLE
AS
RETURN
(
    SELECT s.StudentID, s.StudentName, s.Email, d.DistrictName, l.LanguageName
    FROM Student s
    JOIN District d ON s.DistrictID = d.DistrictID
    JOIN Language l ON s.LanguageID = l.LanguageID
    WHERE s.StudentID = @StudentID
);`}
        </pre>
        <pre>
          {`-- Use Function
SELECT * FROM fn_GetStudentInfo(1);`}
        </pre>

        <p>Example: Function to calculate employee name length</p>
        <pre>
          {`-- Create Function
CREATE FUNCTION fn_EmployeeNameLength(@EmployeeID INT)
RETURNS INT
AS
BEGIN
    DECLARE @Len INT;
    SELECT @Len = LEN(EmployeeName) FROM Employee WHERE EmployeeID = @EmployeeID;
    RETURN @Len;
END;`}
        </pre>
        <pre>
          {`-- Use Function
SELECT dbo.fn_EmployeeNameLength(1) AS NameLength;`}
        </pre>
      </section>

      {/* Conversion Functions */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Conversion Functions</h2>
        <pre>
          {`-- Convert to VARCHAR
SELECT CONVERT(VARCHAR, GETDATE(), 23) AS DateString;

-- Cast to INT
SELECT CAST('123' AS INT) AS NumberValue;`}
        </pre>
      </section>

      {/* Mathematical Functions */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">5. Mathematical Functions</h2>
        <pre>
          {`SELECT ABS(-10) AS AbsoluteValue;
SELECT POWER(2, 3) AS PowerValue;
SELECT SQRT(16) AS SquareRoot;
SELECT FLOOR(123.45) AS FloorValue;
SELECT CEILING(123.45) AS CeilingValue;`}
        </pre>
      </section>
    </div>
  );
}

export default Sqlfunctions;
