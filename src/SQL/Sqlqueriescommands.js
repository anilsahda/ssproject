import React from 'react';

function Sqlqueriescommands() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">SQL Queries & Commands</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p>
          SQL (Structured Query Language) is used to manage and manipulate relational databases. SQL commands are categorized into DDL, DML, DCL, and TCL.
        </p>
      </section>

      {/* DDL - Data Definition Language */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. DDL (Data Definition Language)</h2>
        <p>Used to define or modify database structure.</p>
        <pre>
          {`-- Create Table
CREATE TABLE Student (
    StudentID INT PRIMARY KEY,
    StudentName NVARCHAR(100),
    Email NVARCHAR(100)
);

-- Alter Table
ALTER TABLE Student ADD Column Age INT;

-- Drop Table
DROP TABLE Student;

-- Create Database
CREATE DATABASE SchoolDB;

-- Drop Database
DROP DATABASE SchoolDB;`}
        </pre>
      </section>

      {/* DML - Data Manipulation Language */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. DML (Data Manipulation Language)</h2>
        <p>Used to manage data within tables.</p>
        <pre>
          {`-- Insert Data
INSERT INTO Student (StudentID, StudentName, Email)
VALUES (1, 'Anil', 'anil@example.com');

-- Update Data
UPDATE Student
SET Email = 'anilk@example.com'
WHERE StudentID = 1;

-- Delete Data
DELETE FROM Student
WHERE StudentID = 1;

-- Select Data
SELECT * FROM Student;

-- Select with WHERE
SELECT StudentName, Email
FROM Student
WHERE StudentID = 1;`}
        </pre>
      </section>

      {/* DCL - Data Control Language */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. DCL (Data Control Language)</h2>
        <p>Used to control access to data.</p>
        <pre>
          {`-- Grant permission
GRANT SELECT, INSERT ON Student TO User1;

-- Revoke permission
REVOKE INSERT ON Student FROM User1;`}
        </pre>
      </section>

      {/* TCL - Transaction Control Language */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">5. TCL (Transaction Control Language)</h2>
        <p>Used to manage transactions in the database.</p>
        <pre>
          {`-- Begin Transaction
BEGIN TRANSACTION;

-- Perform operations
UPDATE Student SET Email='anil_new@example.com' WHERE StudentID=1;

-- Commit Transaction
COMMIT;

-- Rollback Transaction
ROLLBACK;`}
        </pre>
      </section>

      {/* Joins and Queries */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">6. Joins & Common Queries</h2>
        <pre>
          {`-- Inner Join
SELECT s.StudentName, d.DistrictName
FROM Student s
JOIN District d ON s.DistrictID = d.DistrictID;

-- Left Join
SELECT s.StudentName, d.DistrictName
FROM Student s
LEFT JOIN District d ON s.DistrictID = d.DistrictID;

-- Group By
SELECT DistrictID, COUNT(*) AS TotalStudents
FROM Student
GROUP BY DistrictID;

-- Order By
SELECT * FROM Student
ORDER BY StudentName ASC;`}
        </pre>
      </section>

      {/* Aggregate Functions */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">7. Aggregate Functions</h2>
        <pre>
          {`SELECT COUNT(*) AS TotalStudents FROM Student;
SELECT MAX(StudentID) AS MaxID FROM Student;
SELECT MIN(StudentID) AS MinID FROM Student;
SELECT AVG(StudentID) AS AverageID FROM Student;
SELECT SUM(StudentID) AS TotalID FROM Student;`}
        </pre>
      </section>
    </div>
  );
}

export default Sqlqueriescommands;
