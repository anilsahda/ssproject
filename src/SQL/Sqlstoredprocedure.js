function Sqlstoredprocedure() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">SQL Stored Procedures (CRUD)</h1>
        <p className="text-gray-500 text-xs mt-1">
          Step-by-step stored procedure examples for performing <strong>CRUD operations</strong> 
          on entities like Skills, Qualification, Language, Country, State, District, Customer, 
          Student, Employee, Role, User, etc.
        </p>
      </header>

      {/* Skills */}
      <Section title="Skills Stored Procedures" color="text-indigo-600">
        <CodeBlock>
{`-- Insert Skill
CREATE PROCEDURE sp_AddSkill
  @Name NVARCHAR(150)
AS
BEGIN
  INSERT INTO Skills (Name) VALUES (@Name);
END

-- Get All Skills
CREATE PROCEDURE sp_GetSkills
AS
BEGIN
  SELECT * FROM Skills;
END

-- Update Skill
CREATE PROCEDURE sp_UpdateSkill
  @Id INT,
  @Name NVARCHAR(150)
AS
BEGIN
  UPDATE Skills SET Name = @Name WHERE Id = @Id;
END

-- Delete Skill
CREATE PROCEDURE sp_DeleteSkill
  @Id INT
AS
BEGIN
  DELETE FROM Skills WHERE Id = @Id;
END`}
        </CodeBlock>
      </Section>

      {/* Qualification */}
      <Section title="Qualification Stored Procedures" color="text-green-600">
        <CodeBlock>
{`CREATE PROCEDURE sp_AddQualification
  @Name NVARCHAR(150)
AS
BEGIN
  INSERT INTO Qualification (Name) VALUES (@Name);
END

CREATE PROCEDURE sp_GetQualifications
AS
BEGIN
  SELECT * FROM Qualification;
END

CREATE PROCEDURE sp_UpdateQualification
  @Id INT,
  @Name NVARCHAR(150)
AS
BEGIN
  UPDATE Qualification SET Name = @Name WHERE Id = @Id;
END

CREATE PROCEDURE sp_DeleteQualification
  @Id INT
AS
BEGIN
  DELETE FROM Qualification WHERE Id = @Id;
END`}
        </CodeBlock>
      </Section>

      {/* Language */}
      <Section title="Language Stored Procedures" color="text-yellow-600">
        <CodeBlock>
{`CREATE PROCEDURE sp_AddLanguage
  @Name NVARCHAR(150)
AS
BEGIN
  INSERT INTO Language (Name) VALUES (@Name);
END

CREATE PROCEDURE sp_GetLanguages
AS
BEGIN
  SELECT * FROM Language;
END

CREATE PROCEDURE sp_UpdateLanguage
  @Id INT,
  @Name NVARCHAR(150)
AS
BEGIN
  UPDATE Language SET Name = @Name WHERE Id = @Id;
END

CREATE PROCEDURE sp_DeleteLanguage
  @Id INT
AS
BEGIN
  DELETE FROM Language WHERE Id = @Id;
END`}
        </CodeBlock>
      </Section>

      {/* Country / State / District */}
      <Section title="Country / State / District Stored Procedures" color="text-purple-600">
        <CodeBlock>
{`-- Country
CREATE PROCEDURE sp_AddCountry 
    @Name NVARCHAR(150)
AS 
BEGIN 
    INSERT INTO Country (Name) VALUES (@Name); 
END

CREATE PROCEDURE sp_GetCountries
AS 
BEGIN 
    SELECT * FROM Country; 
END

-- State
CREATE PROCEDURE sp_AddState 
    @Name NVARCHAR(150), 
    @CountryId INT
AS 
BEGIN 
    INSERT INTO State (Name, CountryId) VALUES (@Name, @CountryId); 
END

CREATE PROCEDURE sp_GetStatesByCountry 
    @CountryId INT
AS 
BEGIN 
    SELECT * FROM State WHERE CountryId = @CountryId; 
END

-- District
CREATE PROCEDURE sp_AddDistrict 
    @Name NVARCHAR(150), 
    @CountryId INT, 
    @StateId INT
AS 
    BEGIN INSERT INTO District (Name, CountryId, StateId) VALUES (@Name, @CountryId, @StateId); 
END

CREATE PROCEDURE sp_GetDistrictsByState 
    @StateId INT
AS 
BEGIN 
    SELECT * FROM District WHERE StateId = @StateId; 
END`}
        </CodeBlock>
      </Section>

      {/* Customer */}
      <Section title="Customer Stored Procedures" color="text-red-600">
        <CodeBlock>
{`CREATE PROCEDURE sp_AddCustomer
  @Name NVARCHAR(150),
  @Email NVARCHAR(150),
  @Mobile NVARCHAR(20),
  @Image NVARCHAR(250)
AS
BEGIN
  INSERT INTO Customer (Name, Email, Mobile, Image) VALUES (@Name, @Email, @Mobile, @Image);
END

CREATE PROCEDURE sp_GetCustomers
AS 
BEGIN 
    SELECT * FROM Customer; 
END

CREATE PROCEDURE sp_UpdateCustomer
  @Id INT,
  @Name NVARCHAR(150),
  @Email NVARCHAR(150),
  @Mobile NVARCHAR(20),
  @Image NVARCHAR(250)
AS
BEGIN
  UPDATE Customer SET Name=@Name, Email=@Email, Mobile=@Mobile, Image=@Image WHERE Id=@Id;
END

CREATE PROCEDURE sp_DeleteCustomer
  @Id INT
AS 
BEGIN 
    DELETE FROM Customer WHERE Id=@Id; 
END`}
        </CodeBlock>
      </Section>

      {/* Student / Employee */}
      <Section title="Student / Employee Stored Procedures" color="text-blue-600">
        <CodeBlock>
{`-- Student
CREATE PROCEDURE sp_AddStudent
  @FirstName NVARCHAR(100),
  @MiddleName NVARCHAR(100),
  @LastName NVARCHAR(100),
  @Address NVARCHAR(250),
  @Email NVARCHAR(150),
  @Mobile NVARCHAR(20),
  @CountryId INT,
  @StateId INT,
  @DistrictId INT,
  @GenderId INT
AS
BEGIN
  INSERT INTO Student (FirstName, MiddleName, LastName, Address, Email, Mobile, CountryId, StateId, DistrictId, GenderId)
  VALUES (@FirstName, @MiddleName, @LastName, @Address, @Email, @Mobile, @CountryId, @StateId, @DistrictId, @GenderId);
END

CREATE PROCEDURE sp_GetStudents
AS 
BEGIN 
    SELECT * FROM Student; 
END

-- Employee
CREATE PROCEDURE sp_AddEmployee
  @FirstName NVARCHAR(100),
  @MiddleName NVARCHAR(100),
  @LastName NVARCHAR(100),
  @Address NVARCHAR(250),
  @Email NVARCHAR(150),
  @Mobile NVARCHAR(20),
  @CountryId INT,
  @StateId INT,
  @DistrictId INT,
  @GenderId INT
AS
BEGIN
  INSERT INTO Employee (FirstName, MiddleName, LastName, Address, Email, Mobile, CountryId, StateId, DistrictId, GenderId)
  VALUES (@FirstName, @MiddleName, @LastName, @Address, @Email, @Mobile, @CountryId, @StateId, @DistrictId, @GenderId);
END

CREATE PROCEDURE sp_GetEmployees
AS 
BEGIN 
    SELECT * FROM Employee; 
END`}
        </CodeBlock>
      </Section>

      {/* EmployeeLanguage */}
      <Section title="EmployeeLanguage Stored Procedures" color="text-indigo-600">
        <CodeBlock>
{`CREATE PROCEDURE sp_AddEmployeeLanguage
  @EmployeeId INT,
  @LanguageId INT
AS
BEGIN
  INSERT INTO EmployeeLanguage (EmployeeId, LanguageId) VALUES (@EmployeeId, @LanguageId);
END

CREATE PROCEDURE sp_GetEmployeeLanguages
AS 
BEGIN 
    SELECT * FROM EmployeeLanguage; 
END`}
        </CodeBlock>
      </Section>

      {/* Role / User / UserRole */}
      <Section title="Role, User, UserRole Stored Procedures" color="text-green-600">
        <CodeBlock>
{`-- Role
CREATE PROCEDURE sp_AddRole 
    @Name NVARCHAR(150)
AS 
BEGIN 
    INSERT INTO Role (Name) VALUES (@Name); 
END

CREATE PROCEDURE sp_GetRoles
AS 
BEGIN 
    SELECT * FROM Role; 
END

-- User
CREATE PROCEDURE sp_AddUser @Name NVARCHAR(150), @Email NVARCHAR(150), @Password NVARCHAR(150)
AS 
BEGIN 
    INSERT INTO [User] (Name, Email, Password) VALUES (@Name, @Email, @Password); 
END

CREATE PROCEDURE sp_GetUsers
AS 
BEGIN 
    SELECT * FROM [User]; 
END

-- UserRole
CREATE PROCEDURE sp_AddUserRole 
    @UserId INT, 
    @RoleId INT
AS 
BEGIN 
    INSERT INTO UserRole (UserId, RoleId) VALUES (@UserId, @RoleId); 
END

CREATE PROCEDURE sp_GetUserRoles
AS 
BEGIN 
    SELECT * FROM UserRole; 
END`}
        </CodeBlock>
      </Section>
    </div>
  );
}

/* Reusable Section Component */
function Section({ title, color, children }) {
  return (
    <section>
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

export default Sqlstoredprocedure;