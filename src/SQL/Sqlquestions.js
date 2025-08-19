function Sqlquestions() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">50 Hot SQL Interview Questions with Examples</h1>
        <p className="text-gray-500 text-xs mt-1">All questions are in <strong>bold</strong> with answers and examples for better understanding.</p>
      </header>

      <section className="space-y-6">
        <Question q="1. What is SQL?" a="SQL (Structured Query Language) is used to interact with relational databases for storing, updating, and retrieving data." example={`-- Retrieve all students\nSELECT * FROM Student;`} />
        <Question q="2. Types of SQL commands?" a="SQL commands are categorized into DDL, DML, DCL, and TCL." example={`-- DDL: CREATE TABLE\nCREATE TABLE Student(StudentID INT PRIMARY KEY, StudentName NVARCHAR(100));\n-- DML: INSERT INTO\nINSERT INTO Student VALUES(1,'Anil');\n-- DCL: GRANT\nGRANT SELECT ON Student TO User1;\n-- TCL: COMMIT\nCOMMIT;`} />
        <Question q="3. Difference between DELETE and TRUNCATE?" a="DELETE removes rows based on WHERE condition and can be rolled back; TRUNCATE removes all rows, is faster, and cannot be rolled back." example={`DELETE FROM Student WHERE StudentID=1;\nTRUNCATE TABLE Student;`} />
        <Question q="4. Difference between INNER JOIN and LEFT JOIN?" a="INNER JOIN returns only matching rows; LEFT JOIN returns all rows from the left table plus matching rows from the right table." example={`SELECT s.StudentName, d.DistrictName FROM Student s INNER JOIN District d ON s.DistrictID=d.DistrictID;\nSELECT s.StudentName, d.DistrictName FROM Student s LEFT JOIN District d ON s.DistrictID=d.DistrictID;`} />
        <Question q="5. What is a Primary Key?" a="A column or set of columns that uniquely identifies each row in a table." example={`CREATE TABLE Student(StudentID INT PRIMARY KEY, StudentName NVARCHAR(100));`} />
        <Question q="6. What is a Foreign Key?" a="A column or set of columns that establishes a link between data in two tables." example={`ALTER TABLE Orders ADD CONSTRAINT FK_Customer FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID);`} />
        <Question q="7. What are indexes?" a="Indexes are used to speed up data retrieval operations on a table." example={`CREATE INDEX IDX_StudentName ON Student(StudentName);`} />
        <Question q="8. Difference between Clustered and Non-Clustered Index?" a="Clustered index determines physical order of data; Non-Clustered is a separate structure pointing to data." example={`CREATE CLUSTERED INDEX IDX_StudentID ON Student(StudentID);\nCREATE NONCLUSTERED INDEX IDX_StudentName ON Student(StudentName);`} />
        <Question q="9. What is normalization?" a="Process of organizing data to reduce redundancy and improve integrity." example={`-- 1NF Example\nCREATE TABLE StudentCourses(StudentID INT, CourseName NVARCHAR(50));`} />
        <Question q="10. What is denormalization?" a="Process of combining tables to improve performance at the cost of redundancy." example={`CREATE TABLE StudentFull(StudentID INT, StudentName NVARCHAR(100), Courses NVARCHAR(200));`} />
        <Question q="11. Difference between WHERE and HAVING?" a="WHERE filters rows before aggregation; HAVING filters after aggregation." example={`SELECT * FROM Student WHERE DistrictID=1;\nSELECT DistrictID, COUNT(*) FROM Student GROUP BY DistrictID HAVING COUNT(*)>5;`} />
        <Question q="12. What is a Stored Procedure?" a="A precompiled SQL code block that can be executed with parameters." example={`CREATE PROCEDURE GetStudentByID @ID INT AS SELECT * FROM Student WHERE StudentID=@ID;`} />
        <Question q="13. What is a Trigger?" a="A set of SQL statements automatically executed in response to certain events on a table or view." example={`CREATE TRIGGER trg_AfterInsertStudent ON Student AFTER INSERT AS PRINT 'Student Inserted';`} />
        <Question q="14. Difference between CHAR and VARCHAR?" a="CHAR has fixed length; VARCHAR has variable length." example={`-- CHAR example\nCREATE TABLE Sample(CharCol CHAR(5));\n-- VARCHAR example\nCREATE TABLE SampleVar(CharCol VARCHAR(50));`} />
        <Question q="15. Difference between UNION and UNION ALL?" a="UNION removes duplicates; UNION ALL includes all rows." example={`SELECT StudentName FROM Student\nUNION\nSELECT TeacherName FROM Teacher;\n\nSELECT StudentName FROM Student\nUNION ALL\nSELECT TeacherName FROM Teacher;`} />
        <Question q="16. What is a CTE?" a="Common Table Expression (CTE) is a temporary result set defined within a query." example={`WITH TopStudents AS (\n  SELECT StudentID, StudentName FROM Student WHERE Marks>90\n)\nSELECT * FROM TopStudents;`} />
        <Question q="17. What are transactions?" a="A set of operations executed as a single unit, ensuring ACID properties." example={`BEGIN TRANSACTION;\nUPDATE Account SET Balance=Balance-100 WHERE AccountID=1;\nUPDATE Account SET Balance=Balance+100 WHERE AccountID=2;\nCOMMIT;`} />
        <Question q="18. Difference between RANK(), DENSE_RANK(), and ROW_NUMBER()?" a="RANK leaves gaps, DENSE_RANK does not, ROW_NUMBER gives unique sequential numbers." example={`SELECT StudentName, RANK() OVER(ORDER BY Marks DESC) AS Rank FROM Student;`} />
        <Question q="19. What is a view?" a="A virtual table created by a SELECT query." example={`CREATE VIEW StudentView AS SELECT StudentName, Marks FROM Student WHERE Marks>50;`} />
        <Question q="20. What is a cursor?" a="A database object used to iterate over a result set row by row." example={`DECLARE StudentCursor CURSOR FOR SELECT StudentName FROM Student;\nOPEN StudentCursor;\nFETCH NEXT FROM StudentCursor;`} />
        <Question q="21. Difference between TRUNCATE, DELETE, and DROP?" a="TRUNCATE removes all rows; DELETE removes rows based on condition; DROP removes table completely." example={`TRUNCATE TABLE Student;\nDELETE FROM Student WHERE StudentID=1;\nDROP TABLE Student;`} />
        <Question q="22. What is SQL Injection?" a="A security vulnerability where attackers execute malicious SQL code." example={`-- Vulnerable query\nSELECT * FROM Users WHERE Username=' ' OR 1=1;`} />
        <Question q="23. Difference between temporary tables and table variables?" a="Temporary tables exist in tempdb and support indexes; table variables have limited scope and performance differences." example={`-- Temp Table\nCREATE TABLE #TempStudent(StudentID INT);\n-- Table Variable\nDECLARE @TempStudent TABLE(StudentID INT);`} />
        <Question q="24. What is a partitioned table?" a="A table divided into multiple storage units to improve query performance and manageability." example={`CREATE PARTITION FUNCTION pfYear(INT) AS RANGE LEFT FOR VALUES (2018,2019,2020);`} />
        <Question q="25. Difference between CROSS JOIN and INNER JOIN?" a="CROSS JOIN produces Cartesian product; INNER JOIN returns only matching rows." example={`SELECT * FROM Student CROSS JOIN District;\nSELECT * FROM Student INNER JOIN District ON Student.DistrictID=District.DistrictID;`} />
        <Question q="26. What are aggregate functions?" a="Functions like COUNT, SUM, AVG, MIN, MAX used to perform calculations on multiple rows." example={`SELECT COUNT(*) FROM Student;\nSELECT AVG(Marks) FROM Student;`} />
        <Question q="27. Difference between scalar and table-valued functions?" a="Scalar functions return a single value; table-valued functions return a table." example={`-- Scalar Function\nSELECT LEN(StudentName) FROM Student;\n-- Table-Valued Function\nCREATE FUNCTION GetTopStudents() RETURNS TABLE AS RETURN SELECT * FROM Student WHERE Marks>90;`} />
        <Question q="28. What is an execution plan?" a="Graphical representation of how SQL Server executes a query to help optimize performance." example={`-- In SSMS, press Ctrl+M before executing a query to view the execution plan.`} />
        <Question q="29. Difference between temp tables (#) and global temp tables (##)?" a="Temp tables (#) are session-specific; global temp tables (##) are accessible across sessions." example={`CREATE TABLE #Temp(StudentID INT);\nCREATE TABLE ##GlobalTemp(StudentID INT);`} />
        <Question q="30. How to improve SQL query performance?" a="Use indexes, avoid SELECT *, optimize joins, use proper data types, and analyze execution plans." example={`SELECT StudentName FROM Student WHERE DistrictID=1;`} />
        <Question q="31. What is a composite key?" a="A key made up of two or more columns to uniquely identify a row." example={`CREATE TABLE Enrollment(StudentID INT, CourseID INT, PRIMARY KEY(StudentID, CourseID));`} />
        <Question q="32. Difference between DELETE and DROP?" a="DELETE removes rows; DROP removes the table and its structure." example={`DELETE FROM Student WHERE StudentID=1;\nDROP TABLE Student;`} />
        <Question q="33. Difference between UNION, INTERSECT, and EXCEPT?" a="UNION combines all rows and removes duplicates; INTERSECT returns only common rows; EXCEPT returns rows in first query not in second." example={`SELECT StudentID FROM Student\nUNION\nSELECT StudentID FROM Teacher;\nSELECT StudentID FROM Student\nINTERSECT\nSELECT StudentID FROM Teacher;\nSELECT StudentID FROM Student\nEXCEPT\nSELECT StudentID FROM Teacher;`} />
        <Question q="34. What is a self-join?" a="A join in which a table is joined to itself." example={`SELECT e1.EmployeeName AS Manager, e2.EmployeeName AS Employee FROM Employee e1 INNER JOIN Employee e2 ON e1.EmployeeID=e2.ManagerID;`} />
        <Question q="35. Difference between HAVING and WHERE?" a="WHERE filters before grouping; HAVING filters after grouping." example={`SELECT * FROM Student WHERE DistrictID=1;\nSELECT DistrictID, COUNT(*) FROM Student GROUP BY DistrictID HAVING COUNT(*)>5;`} />
        <Question q="36. What is a surrogate key?" a="A system-generated key used as a primary key." example={`CREATE TABLE Student(StudentID INT IDENTITY(1,1) PRIMARY KEY, StudentName NVARCHAR(100));`} />
        <Question q="37. What is referential integrity?" a="Ensures relationships between tables remain consistent using foreign keys." example={`ALTER TABLE Orders ADD CONSTRAINT FK_Customer FOREIGN KEY(CustomerID) REFERENCES Customers(CustomerID);`} />
        <Question q="38. What is a unique key?" a="Ensures all values in a column or set of columns are unique." example={`CREATE TABLE Student(StudentID INT UNIQUE, StudentName NVARCHAR(100));`} />
        <Question q="39. What is an identity column?" a="A column that auto-increments its value for each new row." example={`CREATE TABLE Student(StudentID INT IDENTITY(1,1), StudentName NVARCHAR(100));`} />
        <Question q="40. Difference between SQL and PL/SQL?" a="SQL is a query language; PL/SQL is procedural language extension for Oracle." example={`-- SQL\nSELECT * FROM Student;\n-- PL/SQL\nBEGIN\n  DBMS_OUTPUT.PUT_LINE('Hello');\nEND;`} />
        <Question q="41. What is a schema?" a="A logical container that holds database objects like tables, views, and procedures." example={`CREATE SCHEMA School; CREATE TABLE School.Student(StudentID INT, StudentName NVARCHAR(100));`} />
        <Question q="42. Difference between INNER JOIN and OUTER JOIN?" a="INNER JOIN returns matching rows; OUTER JOIN returns matching rows plus unmatched rows from one or both tables." example={`SELECT * FROM Student INNER JOIN District ON Student.DistrictID=District.DistrictID;\nSELECT * FROM Student LEFT OUTER JOIN District ON Student.DistrictID=District.DistrictID;`} />
        <Question q="43. What is a correlated subquery?" a="A subquery that references columns from the outer query." example={`SELECT StudentName FROM Student s WHERE Marks>(SELECT AVG(Marks) FROM Student WHERE DistrictID=s.DistrictID);`} />
        <Question q="44. What is a non-correlated subquery?" a="A subquery that can be executed independently of the outer query." example={`SELECT StudentName FROM Student WHERE Marks>(SELECT AVG(Marks) FROM Student);`} />
        <Question q="45. Difference between ROLLBACK and COMMIT?" a="COMMIT saves changes permanently; ROLLBACK undoes changes made in the current transaction." example={`BEGIN TRANSACTION;\nUPDATE Student SET Marks=Marks+5 WHERE StudentID=1;\nROLLBACK;\n-- COMMIT;`} />
        <Question q="46. What is a deadlock?" a="A situation where two or more transactions are waiting indefinitely for each other to release locks." example={`-- Deadlock example occurs when Transaction A locks Table1 and waits for Table2 while Transaction B locks Table2 and waits for Table1.`} />
        <Question q="47. Difference between CHARINDEX and PATINDEX?" a="CHARINDEX returns the starting position of a substring; PATINDEX allows pattern matching with wildcards." example={`SELECT CHARINDEX('Anil','Anil Sah');\nSELECT PATINDEX('%Sah%','Anil Sah');`} />
        <Question q="48. What is a default constraint?" a="Provides a default value for a column if none is specified during insert." example={`CREATE TABLE Student(StudentID INT, Status VARCHAR(10) DEFAULT 'Active');`} />
        <Question q="49. What is a check constraint?" a="Enforces domain integrity by limiting the values allowed in a column." example={`CREATE TABLE Student(StudentID INT, Marks INT CHECK(Marks>=0 AND Marks<=100));`} />
        <Question q="50. Difference between ROW_NUMBER() and RANK()?" a="ROW_NUMBER() gives unique sequential numbers; RANK() leaves gaps in case of ties." example={`SELECT StudentName,ROW_NUMBER() OVER(ORDER BY Marks DESC) AS RowNum,RANK() OVER(ORDER BY Marks DESC) AS RankNum FROM Student;`} />
      </section>
    </div>
  );
}

/* Reusable Question Component */
function Question({ q, a, example }) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <p className="font-semibold text-gray-700">{q}</p>
      <p className="mt-1 text-gray-800">{a}</p>
      {example && (
        <pre className="bg-gray-100 p-2 mt-2 rounded overflow-x-auto text-[12px]">{example}</pre>
      )}
    </div>
  );
}

export default Sqlquestions;
