import React from 'react';

function Sqlcrud() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">SQL CRUD Operations</h1>

      {/* Language */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Language</h2>
        <p>Create Table:</p>
        <pre>
          {`CREATE TABLE Language (
    LanguageID INT IDENTITY(1,1) PRIMARY KEY,
    LanguageName NVARCHAR(100) NOT NULL
);`}
        </pre>
        <p>CRUD Operations:</p>
        <pre>
          {`-- Create
INSERT INTO Language (LanguageName) VALUES ('English');

-- Read
SELECT * FROM Language;

-- Update
UPDATE Language
SET LanguageName = 'Spanish'
WHERE LanguageID = 1;

-- Delete
DELETE FROM Language
WHERE LanguageID = 1;`}
        </pre>
      </section>

      {/* Country */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. Country</h2>
        <pre>
          {`CREATE TABLE Country (
    CountryID INT IDENTITY(1,1) PRIMARY KEY,
    CountryName NVARCHAR(100) NOT NULL
);`}
        </pre>
        <pre>
          {`-- Create
INSERT INTO Country (CountryName) VALUES ('India');

-- Read
SELECT * FROM Country;

-- Update
UPDATE Country
SET CountryName = 'United States'
WHERE CountryID = 1;

-- Delete
DELETE FROM Country
WHERE CountryID = 1;`}
        </pre>
      </section>

      {/* State */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. State</h2>
        <pre>
          {`CREATE TABLE State (
    StateID INT IDENTITY(1,1) PRIMARY KEY,
    StateName NVARCHAR(100) NOT NULL,
    CountryID INT FOREIGN KEY REFERENCES Country(CountryID)
);`}
        </pre>
        <pre>
          {`-- Create
INSERT INTO State (StateName, CountryID) VALUES ('Maharashtra', 1);

-- Read
SELECT * FROM State;

-- Update
UPDATE State
SET StateName = 'California'
WHERE StateID = 1;

-- Delete
DELETE FROM State
WHERE StateID = 1;`}
        </pre>
      </section>

      {/* District */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. District</h2>
        <pre>
          {`CREATE TABLE District (
    DistrictID INT IDENTITY(1,1) PRIMARY KEY,
    DistrictName NVARCHAR(100) NOT NULL,
    StateID INT FOREIGN KEY REFERENCES State(StateID)
);`}
        </pre>
        <pre>
          {`-- Create
INSERT INTO District (DistrictName, StateID) VALUES ('Pune', 1);

-- Read
SELECT * FROM District;

-- Update
UPDATE District
SET DistrictName = 'Los Angeles'
WHERE DistrictID = 1;

-- Delete
DELETE FROM District
WHERE DistrictID = 1;`}
        </pre>
      </section>

      {/* Student */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">5. Student</h2>
        <pre>
          {`CREATE TABLE Student (
    StudentID INT IDENTITY(1,1) PRIMARY KEY,
    StudentName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100),
    DistrictID INT FOREIGN KEY REFERENCES District(DistrictID),
    LanguageID INT FOREIGN KEY REFERENCES Language(LanguageID)
);`}
        </pre>
        <pre>
          {`-- Create
INSERT INTO Student (StudentName, Email, DistrictID, LanguageID)
VALUES ('Anil Sah', 'anil@example.com', 1, 1);

-- Read
SELECT s.StudentID, s.StudentName, s.Email, d.DistrictName, l.LanguageName
FROM Student s
JOIN District d ON s.DistrictID = d.DistrictID
JOIN Language l ON s.LanguageID = l.LanguageID;

-- Update
UPDATE Student
SET StudentName = 'Anil Kumar', Email='anilk@example.com'
WHERE StudentID = 1;

-- Delete
DELETE FROM Student
WHERE StudentID = 1;`}
        </pre>
      </section>

      {/* Employee */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">6. Employee</h2>
        <pre>
          {`CREATE TABLE Employee (
    EmployeeID INT IDENTITY(1,1) PRIMARY KEY,
    EmployeeName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100),
    DistrictID INT FOREIGN KEY REFERENCES District(DistrictID),
    LanguageID INT FOREIGN KEY REFERENCES Language(LanguageID)
);`}
        </pre>
        <pre>
          {`-- Create
INSERT INTO Employee (EmployeeName, Email, DistrictID, LanguageID)
VALUES ('Rahul Sharma', 'rahul@example.com', 1, 1);

-- Read
SELECT e.EmployeeID, e.EmployeeName, e.Email, d.DistrictName, l.LanguageName
FROM Employee e
JOIN District d ON e.DistrictID = d.DistrictID
JOIN Language l ON e.LanguageID = l.LanguageID;

-- Update
UPDATE Employee
SET EmployeeName = 'Rahul Kumar', Email='rahulk@example.com'
WHERE EmployeeID = 1;

-- Delete
DELETE FROM Employee
WHERE EmployeeID = 1;`}
        </pre>
      </section>
    </div>
  );
}

export default Sqlcrud;
