function Sqlqueriescommands() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">SQL Queries & Commands</h1>
        <p className="text-gray-500 text-xs mt-1">SQL is used to manage, manipulate, and query relational databases. SQL commands are categorized into <strong>DDL, DML, DCL, and TCL</strong>. Proper understanding of these commands is essential for database design, management, and querying.</p>
      </header>

      {/* Introduction */}
      <Section title="Introduction to SQL Commands" color="text-green-600">
        <p>SQL commands can be grouped as follows:
          <ul className="list-disc ml-6 mt-1">
            <li><strong>DDL (Data Definition Language):</strong> Define or modify database structure.</li>
            <li><strong>DML (Data Manipulation Language):</strong> Manage write operations on data inside tables.</li>
            <li><strong>DQL (Data Query Language):</strong> Manage read operations on data inside tables.</li>            
            <li><strong>DCL (Data Control Language):</strong> Control access and permissions.</li>
            <li><strong>TCL (Transaction Control Language):</strong> Manage database transactions.</li>
          </ul>
        </p>
      </Section>

      {/* DDL - Data Definition Language */}
      <Section title="DDL (Data Definition Language)" color="text-orange-600">
        <p>DDL commands are used to create, alter, and drop databases and tables. These commands define the schema of the database.</p>
        <CodeBlock>
{`-- Create Table
CREATE TABLE Student (
    StudentID INT PRIMARY KEY,
    StudentName NVARCHAR(100),
    Email NVARCHAR(100)
);

-- Alter Table: Add a new column
ALTER TABLE Student ADD Age INT;

-- Drop Table
DROP TABLE Student;

-- Create Database
CREATE DATABASE SchoolDB;

-- Drop Database
DROP DATABASE SchoolDB;`}
        </CodeBlock>
      </Section>

      {/* DML - Data Manipulation Language */}
      <Section title="DML (Data Manipulation Language)" color="text-blue-600">
        <p>DML commands are used to insert, update, and delete data from tables. These are the most frequently used SQL commands.</p>
        <CodeBlock>
{`-- Insert Data
INSERT INTO Student VALUES (1, 'Anil', 'anil@example.com');

-- Update Data
UPDATE Student SET Email = 'anilk@example.com' WHERE StudentID = 1;

-- Delete Data
DELETE FROM Student WHERE StudentID = 1;`}
        </CodeBlock>
      </Section>

      {/* DQL - Data Query Language */}
      <Section title="DQL (Data Query Language)" color="text-blue-600">
        <p>DQL commands are used to retrieve data from tables. These are the most frequently used SQL commands.</p>
        <CodeBlock>
{`-- Select Data (Retrieve all rows)
SELECT * FROM Student;

-- Select with WHERE condition
SELECT StudentName, Email FROM Student WHERE StudentID = 1;`}
        </CodeBlock>
      </Section>

      {/* DCL - Data Control Language */}
      <Section title="DCL (Data Control Language)" color="text-purple-600">
        <p>DCL commands control access to data in the database. They allow granting and revoking permissions to users or roles.</p>
        <CodeBlock>
{`-- Grant permission
GRANT SELECT, INSERT ON Student TO User1;

-- Revoke permission
REVOKE INSERT ON Student FROM User1;`}
        </CodeBlock>
      </Section>

      {/* TCL - Transaction Control Language */}
      <Section title="TCL (Transaction Control Language)" color="text-red-600">
        <p>TCL commands are used to manage transactions. A transaction is a sequence of operations executed as a single unit, ensuring ACID properties.</p>
        <CodeBlock>
{`-- Begin a Transaction
BEGIN TRANSACTION;

-- Perform operations
UPDATE Student SET Email='anil_new@example.com' WHERE StudentID=1;

-- Commit changes
COMMIT;

-- Rollback changes
ROLLBACK;`}
        </CodeBlock>
      </Section>

      {/* Joins & Queries */}
      <Section title="Joins & Common Queries" color="text-teal-600">
        <p>Joins are used to combine rows from two or more tables based on related columns.</p>
        <CodeBlock>
{`-- Inner Join: Returns only matching rows
SELECT s.StudentName, d.DistrictName FROM Student s
JOIN District d ON s.DistrictID = d.DistrictID;

-- Left Join: Returns all rows from the left table plus matching rows from right table
SELECT s.StudentName, d.DistrictName FROM Student s
LEFT JOIN District d ON s.DistrictID = d.DistrictID;

-- Group By: Aggregate rows based on a column
SELECT DistrictID, COUNT(*) AS TotalStudents FROM Student
GROUP BY DistrictID;

-- Order By: Sort rows
SELECT * FROM Student ORDER BY StudentName ASC;`}
        </CodeBlock>
      </Section>

      {/* Aggregate Functions */}
      <Section title="Aggregate Functions" color="text-pink-600">
        <p>
          Aggregate functions perform calculations on multiple rows and return a single value.
        </p>
        <CodeBlock>
{`-- Count total students
SELECT COUNT(*) AS TotalStudents FROM Student;

-- Maximum StudentID
SELECT MAX(StudentID) AS MaxID FROM Student;

-- Minimum StudentID
SELECT MIN(StudentID) AS MinID FROM Student;

-- Average StudentID
SELECT AVG(StudentID) AS AverageID FROM Student;

-- Sum of StudentIDs
SELECT SUM(StudentID) AS TotalID FROM Student;`}
        </CodeBlock>
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

export default Sqlqueriescommands;