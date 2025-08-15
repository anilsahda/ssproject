import React from 'react';

function Sqlstoredprocedure() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">SQL Stored Procedures CRUD</h1>

      {/* Language */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Language</h2>
        <pre>
          {`-- Create Language
CREATE PROCEDURE sp_InsertLanguage
    @LanguageName NVARCHAR(100)
AS
BEGIN
    INSERT INTO Language(LanguageName) VALUES(@LanguageName);
END;`}
        </pre>
        <pre>
          {`-- Read Language
CREATE PROCEDURE sp_GetLanguages
AS
BEGIN
    SELECT * FROM Language;
END;`}
        </pre>
        <pre>
          {`-- Update Language
CREATE PROCEDURE sp_UpdateLanguage
    @LanguageID INT,
    @LanguageName NVARCHAR(100)
AS
BEGIN
    UPDATE Language
    SET LanguageName = @LanguageName
    WHERE LanguageID = @LanguageID;
END;`}
        </pre>
        <pre>
          {`-- Delete Language
CREATE PROCEDURE sp_DeleteLanguage
    @LanguageID INT
AS
BEGIN
    DELETE FROM Language
    WHERE LanguageID = @LanguageID;
END;`}
        </pre>
      </section>

      {/* Country */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. Country</h2>
        <pre>
          {`-- Create Country
CREATE PROCEDURE sp_InsertCountry
    @CountryName NVARCHAR(100)
AS
BEGIN
    INSERT INTO Country(CountryName) VALUES(@CountryName);
END;`}
        </pre>
        <pre>
          {`-- Read Country
CREATE PROCEDURE sp_GetCountries
AS
BEGIN
    SELECT * FROM Country;
END;`}
        </pre>
        <pre>
          {`-- Update Country
CREATE PROCEDURE sp_UpdateCountry
    @CountryID INT,
    @CountryName NVARCHAR(100)
AS
BEGIN
    UPDATE Country
    SET CountryName = @CountryName
    WHERE CountryID = @CountryID;
END;`}
        </pre>
        <pre>
          {`-- Delete Country
CREATE PROCEDURE sp_DeleteCountry
    @CountryID INT
AS
BEGIN
    DELETE FROM Country
    WHERE CountryID = @CountryID;
END;`}
        </pre>
      </section>

      {/* State */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. State</h2>
        <pre>
          {`-- Create State
CREATE PROCEDURE sp_InsertState
    @StateName NVARCHAR(100),
    @CountryID INT
AS
BEGIN
    INSERT INTO State(StateName, CountryID) VALUES(@StateName, @CountryID);
END;`}
        </pre>
        <pre>
          {`-- Read State
CREATE PROCEDURE sp_GetStates
AS
BEGIN
    SELECT * FROM State;
END;`}
        </pre>
        <pre>
          {`-- Update State
CREATE PROCEDURE sp_UpdateState
    @StateID INT,
    @StateName NVARCHAR(100),
    @CountryID INT
AS
BEGIN
    UPDATE State
    SET StateName = @StateName, CountryID = @CountryID
    WHERE StateID = @StateID;
END;`}
        </pre>
        <pre>
          {`-- Delete State
CREATE PROCEDURE sp_DeleteState
    @StateID INT
AS
BEGIN
    DELETE FROM State
    WHERE StateID = @StateID;
END;`}
        </pre>
      </section>

      {/* District */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. District</h2>
        <pre>
          {`-- Create District
CREATE PROCEDURE sp_InsertDistrict
    @DistrictName NVARCHAR(100),
    @StateID INT
AS
BEGIN
    INSERT INTO District(DistrictName, StateID) VALUES(@DistrictName, @StateID);
END;`}
        </pre>
        <pre>
          {`-- Read District
CREATE PROCEDURE sp_GetDistricts
AS
BEGIN
    SELECT * FROM District;
END;`}
        </pre>
        <pre>
          {`-- Update District
CREATE PROCEDURE sp_UpdateDistrict
    @DistrictID INT,
    @DistrictName NVARCHAR(100),
    @StateID INT
AS
BEGIN
    UPDATE District
    SET DistrictName = @DistrictName, StateID = @StateID
    WHERE DistrictID = @DistrictID;
END;`}
        </pre>
        <pre>
          {`-- Delete District
CREATE PROCEDURE sp_DeleteDistrict
    @DistrictID INT
AS
BEGIN
    DELETE FROM District
    WHERE DistrictID = @DistrictID;
END;`}
        </pre>
      </section>

      {/* Student */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">5. Student</h2>
        <pre>
          {`-- Create Student
CREATE PROCEDURE sp_InsertStudent
    @StudentName NVARCHAR(100),
    @Email NVARCHAR(100),
    @DistrictID INT,
    @LanguageID INT
AS
BEGIN
    INSERT INTO Student(StudentName, Email, DistrictID, LanguageID)
    VALUES(@StudentName, @Email, @DistrictID, @LanguageID);
END;`}
        </pre>
        <pre>
          {`-- Read Student
CREATE PROCEDURE sp_GetStudents
AS
BEGIN
    SELECT s.StudentID, s.StudentName, s.Email, d.DistrictName, l.LanguageName
    FROM Student s
    JOIN District d ON s.DistrictID = d.DistrictID
    JOIN Language l ON s.LanguageID = l.LanguageID;
END;`}
        </pre>
        <pre>
          {`-- Update Student
CREATE PROCEDURE sp_UpdateStudent
    @StudentID INT,
    @StudentName NVARCHAR(100),
    @Email NVARCHAR(100),
    @DistrictID INT,
    @LanguageID INT
AS
BEGIN
    UPDATE Student
    SET StudentName = @StudentName,
        Email = @Email,
        DistrictID = @DistrictID,
        LanguageID = @LanguageID
    WHERE StudentID = @StudentID;
END;`}
        </pre>
        <pre>
          {`-- Delete Student
CREATE PROCEDURE sp_DeleteStudent
    @StudentID INT
AS
BEGIN
    DELETE FROM Student
    WHERE StudentID = @StudentID;
END;`}
        </pre>
      </section>

      {/* Employee */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">6. Employee</h2>
        <pre>
          {`-- Create Employee
CREATE PROCEDURE sp_InsertEmployee
    @EmployeeName NVARCHAR(100),
    @Email NVARCHAR(100),
    @DistrictID INT,
    @LanguageID INT
AS
BEGIN
    INSERT INTO Employee(EmployeeName, Email, DistrictID, LanguageID)
    VALUES(@EmployeeName, @Email, @DistrictID, @LanguageID);
END;`}
        </pre>
        <pre>
          {`-- Read Employee
CREATE PROCEDURE sp_GetEmployees
AS
BEGIN
    SELECT e.EmployeeID, e.EmployeeName, e.Email, d.DistrictName, l.LanguageName
    FROM Employee e
    JOIN District d ON e.DistrictID = d.DistrictID
    JOIN Language l ON e.LanguageID = l.LanguageID;
END;`}
        </pre>
        <pre>
          {`-- Update Employee
CREATE PROCEDURE sp_UpdateEmployee
    @EmployeeID INT,
    @EmployeeName NVARCHAR(100),
    @Email NVARCHAR(100),
    @DistrictID INT,
    @LanguageID INT
AS
BEGIN
    UPDATE Employee
    SET EmployeeName = @EmployeeName,
        Email = @Email,
        DistrictID = @DistrictID,
        LanguageID = @LanguageID
    WHERE EmployeeID = @EmployeeID;
END;`}
        </pre>
        <pre>
          {`-- Delete Employee
CREATE PROCEDURE sp_DeleteEmployee
    @EmployeeID INT
AS
BEGIN
    DELETE FROM Employee
    WHERE EmployeeID = @EmployeeID;
END;`}
        </pre>
      </section>
    </div>
  );
}

export default Sqlstoredprocedure;