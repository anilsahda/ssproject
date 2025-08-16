function Sqlfunctions() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">SQL Functions</h1>
        <p className="text-gray-500 text-xs mt-1">
          Examples of <strong>Scalar Functions</strong>, <strong>Table-Valued Functions</strong>, 
          and <strong>Utility Functions</strong> for the given schema.
        </p>
      </header>

      {/* 1. Scalar Function: Get Full Name */}
      <Section title="1. Scalar Function: Get Full Name of Student" color="text-green-600">
        <CodeBlock>
{`CREATE FUNCTION dbo.GetStudentFullName (@StudentId INT)
RETURNS NVARCHAR(200)
AS
BEGIN
    DECLARE @FullName NVARCHAR(200);
    SELECT @FullName = FirstName + ' ' + ISNULL(MiddleName,'') + ' ' + LastName
    FROM Student
    WHERE Id = @StudentId;
    RETURN LTRIM(RTRIM(@FullName));
END;

-- Usage
SELECT dbo.GetStudentFullName(1) AS FullName;`}
        </CodeBlock>
      </Section>

      {/* 2. Scalar Function: Get Student Age */}
      <Section title="2. Scalar Function: Get Student Age from DOB" color="text-orange-600">
        <CodeBlock>
{`CREATE FUNCTION dbo.GetStudentAge (@DOB DATE)
RETURNS INT
AS
BEGIN
    RETURN DATEDIFF(YEAR, @DOB, GETDATE());
END;

-- Usage
SELECT dbo.GetStudentAge('2000-05-15') AS Age;`}
        </CodeBlock>
      </Section>

      {/* 3. Scalar Function: Mask Email */}
      <Section title="3. Scalar Function: Mask Email Address" color="text-pink-600">
        <CodeBlock>
{`CREATE FUNCTION dbo.MaskEmail (@Email NVARCHAR(150))
RETURNS NVARCHAR(150)
AS
BEGIN
    RETURN LEFT(@Email, 3) + '****' + SUBSTRING(@Email, CHARINDEX('@', @Email), LEN(@Email));
END;

-- Usage
SELECT dbo.MaskEmail('john.doe@example.com');`}
        </CodeBlock>
      </Section>

      {/* 4. Inline TVF: Employees by Country */}
      <Section title="4. Inline TVF: Get Employees by Country" color="text-blue-600">
        <CodeBlock>
{`CREATE FUNCTION dbo.GetEmployeesByCountry (@CountryId INT)
RETURNS TABLE
AS
RETURN
(
    SELECT Id, FirstName, LastName, Email, Mobile
    FROM Employee
    WHERE CountryId = @CountryId
);

-- Usage
SELECT * FROM dbo.GetEmployeesByCountry(1);`}
        </CodeBlock>
      </Section>

      {/* 5. Inline TVF: Students by District */}
      <Section title="5. Inline TVF: Get Students by District" color="text-teal-600">
        <CodeBlock>
{`CREATE FUNCTION dbo.GetStudentsByDistrict (@DistrictId INT)
RETURNS TABLE
AS
RETURN
(
    SELECT Id, FirstName, LastName, Email, Mobile
    FROM Student
    WHERE DistrictId = @DistrictId
);

-- Usage
SELECT * FROM dbo.GetStudentsByDistrict(3);`}
        </CodeBlock>
      </Section>

      {/* 6. Multi-Statement TVF: Student Details with Location */}
      <Section title="6. Multi-Statement TVF: Get Student Details with Location" color="text-purple-600">
        <CodeBlock>
{`CREATE FUNCTION dbo.GetStudentDetails (@StudentId INT)
RETURNS @Result TABLE
(
    StudentId INT,
    FullName NVARCHAR(200),
    Email NVARCHAR(150),
    Mobile NVARCHAR(20),
    CountryName NVARCHAR(100),
    StateName NVARCHAR(100),
    DistrictName NVARCHAR(100)
)
AS
BEGIN
    INSERT INTO @Result
    SELECT 
        S.Id,
        S.FirstName + ' ' + ISNULL(S.MiddleName,'') + ' ' + S.LastName,
        S.Email,
        S.Mobile,
        C.Name AS CountryName,
        ST.Name AS StateName,
        D.Name AS DistrictName
    FROM Student S
    INNER JOIN Country C ON S.CountryId = C.Id
    INNER JOIN State ST ON S.StateId = ST.Id
    INNER JOIN District D ON S.DistrictId = D.Id
    WHERE S.Id = @StudentId;

    RETURN;
END;

-- Usage
SELECT * FROM dbo.GetStudentDetails(1);`}
        </CodeBlock>
      </Section>

      {/* 7. Multi-Statement TVF: Employees with Languages */}
      <Section title="7. Multi-Statement TVF: Get Employees with Languages" color="text-indigo-600">
        <CodeBlock>
{`CREATE FUNCTION dbo.GetEmployeeLanguages (@EmployeeId INT)
RETURNS @Result TABLE
(
    EmployeeId INT,
    EmployeeName NVARCHAR(200),
    LanguageName NVARCHAR(100)
)
AS
BEGIN
    INSERT INTO @Result
    SELECT 
        E.Id,
        E.FirstName + ' ' + E.LastName,
        L.Name
    FROM Employee E
    INNER JOIN EmployeeLanguage EL ON E.Id = EL.EmployeeId
    INNER JOIN Language L ON EL.LanguageId = L.Id
    WHERE E.Id = @EmployeeId;

    RETURN;
END;

-- Usage
SELECT * FROM dbo.GetEmployeeLanguages(1);`}
        </CodeBlock>
      </Section>

      {/* 8. Utility Function: Count Students by Country */}
      <Section title="8. Utility Function: Get Total Students by Country" color="text-red-600">
        <CodeBlock>
{`CREATE FUNCTION dbo.GetStudentCountByCountry (@CountryId INT)
RETURNS INT
AS
BEGIN
    DECLARE @Count INT;
    SELECT @Count = COUNT(*) FROM Student WHERE CountryId = @CountryId;
    RETURN @Count;
END;

-- Usage
SELECT dbo.GetStudentCountByCountry(1) AS StudentCount;`}
        </CodeBlock>
      </Section>

      {/* 9. Scalar Function: Get Employee Full Name */}
      <Section title="9. Scalar Function: Get Employee Full Name" color="text-green-600">
        <CodeBlock>
{`CREATE FUNCTION dbo.GetEmployeeFullName (@EmployeeId INT)
RETURNS NVARCHAR(200)
AS
BEGIN
    DECLARE @FullName NVARCHAR(200);
    SELECT @FullName = FirstName + ' ' + ISNULL(MiddleName,'') + ' ' + LastName
    FROM Employee
    WHERE Id = @EmployeeId;
    RETURN @FullName;
END;

-- Usage
SELECT dbo.GetEmployeeFullName(2) AS EmployeeFullName;`}
        </CodeBlock>
      </Section>

      {/* 10. Scalar Function: Mask Mobile Number */}
      <Section title="10. Scalar Function: Mask Mobile Number" color="text-orange-600">
        <CodeBlock>
{`CREATE FUNCTION dbo.MaskMobile (@Mobile NVARCHAR(20))
RETURNS NVARCHAR(20)
AS
BEGIN
    RETURN 'XXXXXX' + RIGHT(@Mobile,4);
END;

-- Usage
SELECT dbo.MaskMobile('9876543210');`}
        </CodeBlock>
      </Section>

      {/* 11. Inline TVF: Get Users by Role */}
      <Section title="11. Inline TVF: Get Users by Role" color="text-pink-600">
        <CodeBlock>
{`CREATE FUNCTION dbo.GetUsersByRole (@RoleId INT)
RETURNS TABLE
AS
RETURN
(
    SELECT U.Id, U.Name, U.Email
    FROM [User] U
    INNER JOIN UserRole UR ON U.Id = UR.UserId
    WHERE UR.RoleId = @RoleId
);

-- Usage
SELECT * FROM dbo.GetUsersByRole(1);`}
        </CodeBlock>
      </Section>

      {/* 12. Multi-Statement TVF: Employees with Country */}
      <Section title="12. Multi-Statement TVF: Get Employees with Country Name" color="text-blue-600">
        <CodeBlock>
{`CREATE FUNCTION dbo.GetEmployeesWithCountry (@EmployeeId INT)
RETURNS @Result TABLE
(
    EmployeeId INT,
    FullName NVARCHAR(200),
    CountryName NVARCHAR(100)
)
AS
BEGIN
    INSERT INTO @Result
    SELECT E.Id, E.FirstName + ' ' + E.LastName, C.Name
    FROM Employee E
    INNER JOIN Country C ON E.CountryId = C.Id
    WHERE E.Id = @EmployeeId;

    RETURN;
END;

-- Usage
SELECT * FROM dbo.GetEmployeesWithCountry(2);`}
        </CodeBlock>
      </Section>

      {/* 13. Utility Function: Count Employees by Country */}
      <Section title="13. Utility Function: Get Total Employees by Country" color="text-teal-600">
        <CodeBlock>
{`CREATE FUNCTION dbo.GetEmployeeCountByCountry (@CountryId INT)
RETURNS INT
AS
BEGIN
    DECLARE @Count INT;
    SELECT @Count = COUNT(*) FROM Employee WHERE CountryId = @CountryId;
    RETURN @Count;
END;

-- Usage
SELECT dbo.GetEmployeeCountByCountry(1) AS EmployeeCount;`}
        </CodeBlock>
      </Section>

      {/* 14. Scalar Function: Get Role Name by User */}
      <Section title="14. Scalar Function: Get Role Name by User" color="text-purple-600">
        <CodeBlock>
{`CREATE FUNCTION dbo.GetRoleByUser (@UserId INT)
RETURNS NVARCHAR(100)
AS
BEGIN
    DECLARE @RoleName NVARCHAR(100);
    SELECT @RoleName = R.Name
    FROM Role R
    INNER JOIN UserRole UR ON R.Id = UR.RoleId
    WHERE UR.UserId = @UserId;
    RETURN @RoleName;
END;

-- Usage
SELECT dbo.GetRoleByUser(1) AS RoleName;`}
        </CodeBlock>
      </Section>

      {/* 15. Multi-Statement TVF: Get Student with Full Location */}
      <Section title="15. Multi-Statement TVF: Get Student Full Location Details" color="text-red-600">
        <CodeBlock>
{`CREATE FUNCTION dbo.GetStudentFullLocation (@StudentId INT)
RETURNS @Result TABLE
(
    StudentId INT,
    FullName NVARCHAR(200),
    CountryName NVARCHAR(100),
    StateName NVARCHAR(100),
    DistrictName NVARCHAR(100)
)
AS
BEGIN
    INSERT INTO @Result
    SELECT S.Id, S.FirstName + ' ' + S.LastName, C.Name, ST.Name, D.Name
    FROM Student S
    INNER JOIN Country C ON S.CountryId = C.Id
    INNER JOIN State ST ON S.StateId = ST.Id
    INNER JOIN District D ON S.DistrictId = D.Id
    WHERE S.Id = @StudentId;

    RETURN;
END;

-- Usage
SELECT * FROM dbo.GetStudentFullLocation(1);`}
        </CodeBlock>
      </Section>

    </div>
  );
}

/* Reusable Section Component */
function Section({ title, color, children }) {
  return (
    <section className="mb-4">
      <div className="flex items-center mb-2">
        <strong className={`${color}`}>{title}</strong>
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

export default Sqlfunctions;
