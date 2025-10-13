import '../index.css';
import { useState } from 'react';

export default function SQLQA() {
const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const renderPopupContent = (text, jsxContent) => (
    <div>
      {text && <p>{text}</p>}
      {jsxContent && <div className="popup-code">{jsxContent}</div>}
    </div>
  );

  const handleOpenPopup = (text, jsxContent = null) => {
    setPopupContent(renderPopupContent(text, jsxContent));
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
    setPopupContent(null);
  };

  return (
    <div>
        <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>CTE</strong> is a tool which is used to simplify complex queries and makes them more readable. CTE allows us to break down complicated logic into manageable parts by defining temporary result sets that can be referenced multiple times.<br />
CTE is a temporary result set that is defined and used within the execution scope of a SELECT, INSERT, UPDATE, or DELETE statement. CTEs are defined using the WITH clause and can be referenced multiple times within the main SQL query. This makes CTEs a great alternative to subqueries to perform the same operation multiple times or create recursive queries.</p>, `WITH AvgSalaryByDept AS (
  SELECT Depart,AVG(Sal) AS AvgSal FROM Emp
  GROUP BY Depart
)
SELECT * FROM AvgSalaryByDept;`)
        }
      >CTE</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Cursor</strong> Cursor is a database object which is used to iterate in a result set row by row. For example</p>, `DECLARE @name VARCHAR(50) /* Declare Variable */

DECLARE db_cursor CURSOR FOR  /*Declare Cursor Name*/
SELECT name from Students 
WHERE parent_name IN ('Sara', 'Ansh')

OPEN db_cursor /*Open cursor & Fetch data into @name*/
FETCH next
FROM db_cursor
INTO @name

CLOSE db_cursor /*Close cursor+deallocate resources*/
DEALLOCATE db_cursor`)
        }
      >Cursor</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Deadlock</strong>: occurs when two or more transactions are unable to the proceed because each transaction is waiting for the other to the release locks on resources.<br />
<strong>We can Avoid Deadlocks:</strong><br />
Minimize transactions size and transaction times.<br />
Always acces servr objct in same order each time<br />
Avoid cursors that require usr input while runing.<br />
Use NoLock and RowLock to prevent locking<br />
Reduce lock time in application.</p>)
        }
      >Deadlock</button>
      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>SQL Debugging</strong>: Open the Visual Studio.NET and continue without code<br />
Connect to SQLServer in Visual Studio<br />
Menu Tools-&lt;SQL Server-&lt;New Query<br />
Enter Sql Server Connection Data<br />
In script write script or Invoke the Stored procedure<br />
F9 or double click left of code line for out the break point<br />
In menu SQL-&lt; Execute with debugger<br />
With F11 trace line By line</p>)
        }
      >Debugging</button>

        <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>IdentityCurrent</strong> the ident_current(table_name) returns the last identity created for specific table or view in any session.</p>, `CREATE TABLE Employees (
    EmployeeID INT IDENTITY(1,1),
    EmployeeName NVARCHAR(100)
);

Insert into Employees table
INSERT INTO Employees (EmployeeName)
VALUES ('John Doe');

Insert into Orders table
INSERT INTO Orders (EmployeeID, OrderDate)
VALUES (1, '2025-03-28');

Retrieve the last identity value
 generated for the Employees table
SELECT IDENT_CURRENT('Employees') AS LastEmployeeID;`)
        }
      >IdentityCurrent</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>MERGE</strong> Statement combines insert, update and delete statements into one single query. It is used to perform insert, update and delete operations on a target table based on the results of JOIN with a source table. This allows users to synchronize two tables by performing operations on one table based on results from the second table.
MERGE statement compares data between a source table and a target table based on specified key fields. It performs actions like inserting new records, updating existing ones and deleting records.</p>, 
`MERGE INTO Employees AS target
USING SalaryUpdates AS source
ON target.EmployeeID = source.EmployeeID
WHEN MATCHED THEN
    UPDATE SET target.Salary = source.NewSalary
WHEN NOT MATCHED BY TARGET THEN
    INSERT (EmployeeID, Name, Salary)
    VALUES (source.EmployeeID, 'Unknown', source.NewSalary);`)
        }
      >MERGE</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>OLTP</strong> (Online Transaction Processing) is a class which supports in transaction-oriented programs. OLTP maintains the concurrency and follow a decentralized architecture to avoid single points of failure.</p>)
        }
      >OLTP</button>
      
       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>OLAP</strong> (Online Analytical Processing) is a class which is used in low frequency online transactions. Queries are too complex and involve a bunch of aggregations.</p>)
        }
      >OLAP</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Indexing</strong>: help us to retrieve data faster in a faster way.<br />
<strong>Avoid SELECT *</strong>: Retrieve only the required columns to improve performance<br />
<strong>Optimize JOINs</strong>: Use proper join to avoid duplicates and improve queries<br />
<strong>Minimize Subqueries</strong>: Replace complex|nested subqueries with joins or CTEs<br />
<strong>Avoid Unnecessary Data Retrieval</strong>: Use filters like WHERE clauses to fetch only relevant data.<br />
<strong>Use SP Instead of Dynamic Query</strong> as SP are precompiled and more secure<br />
<strong>Use SQL Profiler</strong>: Monitor query performance to identify bottlenecks.<br />
<strong>Use Appropriate Data Type</strong> to improve storage efficiency & process speed<br />
<strong>Use EXISTS() Instead of COUNT()</strong> as EXISTS() is generally faster.<br />
<strong>Partitioning</strong> split large table into small and manageable within same server<br />
<strong>Sharding</strong> distributes data across multiple servers to balance the load.<br />
<strong>Normalize Tables</strong>: Eliminate redundancy and improve data consistency.<br />
<strong>Reduce Use of Wildcards</strong>: Avoid wildcard characters to allow index usage<br />
<strong>Use UNION ALL Instead of UNION</strong> as it does not eliminate duplicate rows.<br />
<strong>Implement Pagination</strong> use TAKE, SKIP, LIMIT, OFFSET to improve performance</p>)
        }
      >Optimize</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Function</strong> must return a value while <strong>Procedure</strong> may or not return values.<br />
<strong>Function</strong> will allow only Select statements. <strong>Procedure</strong> can have select statements as well as DML statements such as insert, update, delete.<br />
<strong>Function</strong> allow only input parameters. <strong>Procedure</strong> allow input and output both parameters.<br />
<strong>Function</strong> does not allow try-catch blocks. But <strong>Procedure</strong> allow exception handling like try catch blocks.<br />
Transactions are not allowed within <strong>Function</strong> while <strong>Procedure</strong> allow transactions.<br />
<strong>Function</strong> can be call in Procedure. <strong>Procedure</strong> can not be call in <strong>Function</strong>. Functions can be called from a select statement.</p>)
        }
      >Procedure vs Function</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>&#64;&#64;Rowcount</strong> is a system variable that is used to return the number of rows that are affected by the last executed statement.</p>)
        }
      >&#64;&#64;Rowcount</button>

        <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>&#64;&#64;IDENTITY</strong> return the last identity value generated in any table in the current session. It is not limited to a specific scope. IDENT_CURRENT is not limited by scope and session and it is limited to a specified table.</p>, `CREATE TABLE Employees (
    EmployeeID INT IDENTITY(1,1),
    EmployeeName NVARCHAR(100)
);

Insert a new row
INSERT INTO Employees (EmployeeName)
VALUES ('John Doe');

Retrieve the last inserted identity
 value using @@IDENTITY
SELECT @@IDENTITY AS LastIdentityValue;`)
        }
      >&#64;&#64;IDENTITY</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>NOLOCK</strong> is used when we need to run a heavy query on a table, retrieve data from a table that constantly updates, or when we don't know how many records our query will retrieve and how it will affect the database. When we use the NOLOCK hint, our query is not blocked by other processes because it ignores any locks when reading data from tables.</p>, `SELECT Name, Email, Mobile FROM Employee WITH (NOLOCK)
WHERE Name = 'Rakesh';`)
        }
      >NOLOCK</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>ROW_NUMBER()</strong> assigns a unique sequence number to each row within a result set or partition of data. Unlike <strong>RANK()</strong> and <strong>DENSE_RANK(), ROW_NUMBER()</strong> does not allow ties—even if rows have the same values, each gets a unique row number.</p>,
        `SELECT Name, Score,
ROW_NUMBER() OVER (ORDER BY Score DESC) AS RowNum
FROM Students;
Name	Score	RowNum
Alice	95	1
Bob	95	2
Carol	90	3
David	85	4`)
        }
      >Row_Number</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Both <strong>RANK()</strong> and <strong>DENSE_RANK()</strong> are used to assign a ranking number to rows within a partition of a result set.<br />
          <strong>RANK()</strong> adds gaps in the ranking when there are ties. If two rows have the same rank, the next rank is skipped.<br />
          <strong>DENSE_RANK()</strong> does not skip ranks when there are ties.</p>, 
          `SELECT * RANK() OVER (ORDER BY Score DESC) AS Rank
FROM Students;

SELECT * DENSE_RANK() OVER (ORDER BY Score DESC) AS
DenseRank FROM Students;`)
        }
      >Rank vs Dense Rank</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>SCOPE_IDENTITY</strong> return the last identity value generated in any table in the current session. It returns the value only within the current scope.</p>, `CREATE TABLE Employees
(Id INT IDENTITY(1,1), Name NVARCHAR(100));

CREATE TABLE Orders (Id INT IDENTITY(1,1),
    EmployeeID INT, OrderDate DATE
);
Insert a new row into Employees
INSERT INTO Employees (Name) VALUES ('John Doe');
Insert a new row into Orders
INSERT INTO Orders (Id, OrderDate)
VALUES (SCOPE_IDENTITY(), '2025-03-28');

Retrieve last inserted value by SCOPE_IDENTITY()
SELECT SCOPE_IDENTITY() AS LastEmployeeID;`)
        }
      >SCOPE_IDENTITY</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Sequence</strong> is a user-defined object that generates a sequence of numeric values. Unlike Identity which is tied to a specific table column Sequence can be used across multiple tables and queries.</p>, `CREATE SEQUENCE unique_num
	AS INT
	START WITH 1
	INCREMENT BY 1; 

CREATE TABLE Country
(
	Id INT PRIMARY KEY,
	Name varchar(50)
); 
INSERT INTO Country 
VALUES(NEXT VALUE FOR dbo.unique_num, 'USA');`)
        }
      >Sequence</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>View</strong> is a virtual table based on the result of a select query. It does not store data physically, but stores the SQL query itself.<br />
Views can be updated using INSERT, UPDATE, DELETE—only if it is updatable.<br />
<strong>A view is typically not updatable if it includes</strong>:<br />
Aggregate functions (SUM, AVG), DISTINCT, GROUP BY, Subqueries, Joins</p>, `CREATE VIEW ActiveCustomers AS
SELECT CustomerID, Name, Email FROM Customers
WHERE Status = 'Active';

SELECT * FROM ActiveCustomers;`)
        }
      >View</button><br />

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>ACID</strong> is used to maintain database consistency before and after a transaction. Transaction is a single logical unit which is used to modify the data through read write operations like insert, update, delete and retrieve the data.</p>)
        }
      >ACID</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Atomicity</strong> means a transaction can be treated as a single. Either all the operations will be completed successfully or nothing will be performed. Means If any part of the transaction fails, the entire transaction is rolled back in original state.</p>)
        }
      >Atomicity</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Consistency</strong> means a transaction takes the database from one consistent state to another consistent state. Database should be in consistent state before and after the transaction executed.</p>)
        }
      >Consistency</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Isolation</strong> means multiple transactions can execute concurrently without interfaring with each other. Each transaction must be isolated from other transactions until it's completed.</p>)
        }
      >Isolation</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Durability</strong> means the data remains consistent and accurate, even system failure or crash. It guarantees that committed transactions are durable and will be recovered without data loss.</p>)
        }
      >Durability</button>

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>SQL</strong> is a standard programming language used to manage and manipulate relational databases.SQL allows you to perform a variety of tasks, such as retrieving, inserting, updating, and deleting data, as well as defining and modifying database structures.SQL works on relational databases, where data is organized in tables, and each table consists of rows and columns.<br />
<strong>Types of SQL Commands are:</strong><br />
<strong>DDL</strong> (Data Definition Language)<br />
<strong>DQL</strong> (Data Query Language)<br />
<strong>DML</strong> (Data Manipulation Language)<br />
<strong>DCL</strong> (Data Control Language)<br />
<strong>TCL</strong> (Transaction Control Language)</p>)
        }
      >Commands</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>DDL</strong> commands are used to define and manage the structure of database objects like tables, views, indexes, and schemas. These commands deal with the structure or schema of the database.<br />
Common DDL commands include:<br />
<strong>CREATE</strong>: Used to create a new database object (e.g., a table, view, or index).<br />
<strong>ALTER</strong>: Used to modify an existing database object, such as adding or deleting columns in a table.<br />
<strong>DROP</strong>: Used to delete an existing database object.<br />
<strong>TRUNCATE</strong>: Removes all data from a table but does not remove the table structure.</p>)
        }
      >DDL</button>
      
       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>DQL</strong> commands are used to query or retrieve data from a database. The primary command in this category is:<br />
<strong>SELECT</strong>: Retrieves data from one or more tables.</p>)
        }
      >DQL</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>DML</strong> commands are used to manipulate the data within database objects (such as tables). These commands allow you to insert, update, and delete data in the database.<br />
Common DML commands include:<br />
<strong>INSERT</strong>: Adds new records to a table.<br />
<strong>UPDATE</strong>: Modifies existing records in a table.<br />
<strong>DELETE</strong>: Removes records from a table.<br />
<strong>MERGE</strong>: Combines the functionality of INSERT, UPDATE, and DELETE in a single statement.</p>)
        }
      >DML</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>DCL</strong> commands are used to manage the access control and permissions of the database. These commands allow administrators to grant or revoke access to users and roles.<br />
Common DCL commands include:<br />
<strong>GRANT</strong>: Gives specific privileges for SELECT, INSERT, UPDATE to users or roles.<br />
<strong>REVOKE</strong>: Removes specific privileges from users or roles.</p>)
        }
      >DCL</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>TCL</strong> commands are used to manage transactions within a database. Transactions are used to group multiple SQL statements into a single unit of work. TCL commands allow you to commit or roll back transactions.<br />
Common TCL commands include:<br />
<strong>COMMIT</strong>: Saves all changes made during the current transaction.<br />
<strong>ROLLBACK</strong>: Undoes changes made during the current transaction.<br />
<strong>SAVEPOINT</strong>: Sets a point in a transaction to which you can roll back without affecting the entire transaction.<br />
<strong>SET TRANSACTION</strong>: Sets properties for the transaction, such as its isolation level.</p>)
        }
      >TCL</button>
       <button className="btn btn-danger me-2 mb-2" onClick={() =>
          handleOpenPopup(null, `with cte as
(SELECT Name, Salary, 
RANK() OVER(ORDER BY Salary DESC) sal_rank from Employees)
select * from cte where sal_rank = 2

//Using subquery
SELECT Name, Salary FROM 
   (SELECT Name, Salary, RANK() OVER (ORDER BY Salary DESC) 
   AS sal_rank FROM Employee) AS ranked_salaries 
WHERE sal_rank = 2;`)
        }
      >Highest Salary</button><br />

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Constraints</strong> are set of rules that we apply to columns in a table to control what kind of data can be stored in that columns. Constraints help to keep our database accurate, reliable, and safe from invalid data.</p>)
        }
      >Constraint</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Null</strong> means column can have Null value.</p>, `CREATE TABLE Country
Code varchar(3) NULL;`)
        }
      >Null</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Not Null</strong> means column cannot have Null value.</p>, `CREATE TABLE Country
Code varchar(3) NOT NULL;`)
        }
      >Not Null</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Check</strong> used to make sure to satisfy specific condition</p>,`CREATE TABLE Persons 
(
    Id int primary key identity(1,1),
    Name varchar(100) NOT NULL,
    Age int,
    Check (Age >= 18)
);`)
        }
      >Check</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Default</strong> sets a default value if data is not supply</p>)
        }
      >Default</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Primary Key</strong> used to identify unique row and must contain unique value. It can’t be null or duplicate.</p>)
        }
      >Primary Key</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Foreign Key</strong> is basically the primary key in another table. It builds a connection between tables.</p>)
        }
      >Foreign Key</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Unique Key</strong> is almost same as primary key but it allow null value and table can have multiple Unique Keys.</p>)
        }
      >Unique Key</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Composite Key</strong> is a combination of two or more columns that uniquely identifies each row.</p>)
        }
      >Composite Key</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Alternate Key</strong> When multiple keys are added except Primary Key then all keys are called Alternate Keys except Primary Key.</p>)
        }
      >Alternat Key</button><br />

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Data Types</strong> define the type of data that can be stored in a column of a table. SQL supports a wide range of data types, and they can be categorized into several types based on their usage. For Example: Numeric, String, Boolean, Binary etc.</p>)
        }
      >Data Types</button>

<button
        className="btn btn-primary me-2 mb-2"
        onClick={() =>
          handleOpenPopup(
              <p><strong>Numeric</strong> data types are used to store numbers — both integers and floating-point values.<br />
              <strong>INT</strong>: Used to store whole numbers (without decimals).<br />
              <strong>TINYINT</strong>: A very small integer value. Range: -128 to 127 (or 0 to 255 for unsigned).<br />
              <strong>SMALLINT</strong>: Used for smaller integer values. Range: -32,768 to 32,767.<br />
              <strong>MEDIUMINT</strong>: Used for medium-size integer values. Range: -8,388,608 to 8,388,607.<br />
              <strong>BIGINT</strong>: Used for very large integer values. Range: -9 quintillion to +9 quintillion.<br />
              <strong>DECIMAL</strong>: Fixed-point number with precision. <br />
              Example: <code>DECIMAL(10, 2)</code> stores numbers with 10 digits, 2 of which are after the decimal (e.g., 12345678.90).<br />
              <strong>FLOAT</strong>: Single-precision floating-point number.<br />
              <strong>DOUBLE</strong>: Double-precision floating-point number.</p>
          )
        }
      >
        Numeric
      </button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>String</strong> Type are used to store text or string values. For example<br />
<strong>CHAR</strong> Fixed-length string. For example CHAR(50) stores up to 50 characters.<br />
<strong>VARCHAR</strong> Variable-length string. For example VARCHAR(255) stores up to 255 characters.<br />
<strong>TEXT</strong> Used to store long strings of text. Can store up to 65535 characters. For example TEXT<br />
<strong>TINYTEXT</strong> Stores short text strings (up to 255 characters).<br />
<strong>MEDIUMTEXT</strong> Stores medium-length text strings (up to 16777215 characters).<br />
<strong>LONGTEXT</strong> Stores large text string up to 4294967295 characters.<br />
<strong>BLOB</strong> Binary Large Object, used to store binary data like images, audio, or other multimedia files.<br />
<strong>TEXT</strong> TEXT is usually used for large text data, while VARCHAR is for variable-length strings that don't require as much storage.</p>)
        }
      >String</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Date & Time</strong> are used to store date and time values. For example<br />
<strong>DATE</strong> Used to store date values without time. like YYYY-MM-DD<br />
<strong>DATETIME</strong> Used to store both date & time like YYYY-MM-DD HH:MM:SS<br />
<strong>TIMESTAMP</strong> Similar to DATETIME, but also stores the time zone like YYYY-MM-DD HH:MM:SS<br />
<strong>TIME</strong> Used to store time values without date like HH:MM:SS<br />
<strong>YEAR</strong> Used to store a year value in 4 digits like YYYY</p>)
        }
      >Date Time</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Boolean Type</strong> stores TRUE or FALSE values. For example BOOLEAN can also be represented by TINYINT(1)</p>)
        }
      >Boolean</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Binary</strong> are used to store binary data like images, files etc. For example<br />
<strong>BINARY</strong> A fixed-length binary data type. For example BINARY(16) stores 16 bytes of binary data.<br />
<strong>VARBINARY</strong> A variable-length binary data type. For example VARBINARY(255) stores binary data up to 255 bytes.<br />
<strong>BLOB</strong> Binary Large Object, used to store binary data of large size.</p>)
        }
      >Binary</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>JSON</strong> Type SQL Server uses the NVARCHAR data type to store JSON data. However, SQL Server provides built-in functions to work with JSON, such as JSON_VALUE, JSON_QUERY, OPENJSON and JSON_MODIFY.</p>, `CREATE TABLE Products 
(
  Id INT IDENTITY PRIMARY KEY,
  Name NVARCHAR(100), 
  Details NVARCHAR(MAX)
);

Extracting a simple value (e.g., brand):
SELECT Name, JSON_VALUE(details, '$.brand') AS brand 
FROM Products;

Extract the entire specifications object:
SELECT Name, JSON_QUERY(details, '$.specifications') 
AS Specifications FROM Products;

Update the price of the Laptop:
UPDATE Products
SET details = JSON_MODIFY(details, '$.price', 1300)
WHERE Name = 'Laptop';`)
        }
      >JSON</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>XML</strong> Type is supported as a native data type. You can store, query, and manipulate XML data using built-in methods and functions, such as xml, query(), value(), and modify().</p>, `CREATE TABLE Products
(
  Id INT IDENTITY PRIMARY KEY,
  Name NVARCHAR(100), 
  Details XML
)

Extracting a simple value (e.g., price):
SELECT Name,
Details.value('(/product/price/text())[1]', 'INT') AS Price FROM Products)

Extract the entire specifications object:
SELECT Name, 
details.query('(/product/specifications)') Specifications FROM Products)

Update the price of the Laptop:
UPDATE Products SET Details.modify
('replace value of (/product/price/text())[1] with "1300"')
WHERE Name = 'Laptop';);`)
        }
      >XML</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>ENUM</strong>: Used to store a predefined set of values. The values are stored as integers, but displayed as strings.
<br />Example: ENUM('small', 'medium', 'large')</p>)
        }
      >ENUM</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>SET</strong>: Used to store a collection of values from a predefined list. Each value is stored as a bit (either 0 or 1).
<br />Example: SET('a', 'b', 'c', 'd')</p>)
        }
      >SET</button>
       <button className="btn btn-danger me-2 mb-2" onClick={() =>
          handleOpenPopup(null, `WITH cte AS 
(
  SELECT Name, 
  ROW_NUMBER() OVER(PARTITION BY Name ORDER BY Name) row_num
  FROM employee
)	
SELECT * FROM cte WHERE row_num > 1;

//Using subqueries
SELECT Name, COUNT(Id) AS Duplicate FROM Employee 
GROUP BY Name
HAVING COUNT(Name) > 1;`)
        }
      >Find Duplicate Name</button><br />

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Functions</strong> SQL functions are built-in operations in SQL that perform calculations, transform data, or return specific information based on input values. They are often used in SELECT, WHERE, GROUP BY and ORDER BY clauses to manipulate data in a query.</p>)
        }
      >Functions</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Aggregate Functions</strong> These perform calculations on a set of values or multiple rows and return a single result like COUNT(), SUM(), MIN(), MAX(), AVG()</p>)
        }
      >Aggregate Functions</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Scalar or Single-Row Functions</strong> operate on individual values and return a result for each row like UPPER(), SUBSTRING(), REPLACE(), CONCAT(), LENGTH(), GETDATE(), NOW(), DATEADD(), DATEDIFF(), DAY(), MONTH(), YEAR(), CAST(), CONVERT()</p>)
        }
      >Scalar or Single-Row Functions</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Table-Valued Function</strong> is a type of user-defined function in SQL that returns a table as its result, rather than a single value.</p>, `CREATE FUNCTION dbo.GetOrdersByCustomer (@CustomerID INT)
RETURNS TABLE
AS
RETURN
(
    SELECT OrderID, OrderDate, TotalAmount
    FROM Orders
    WHERE CustomerID = @CustomerID
);

SELECT * FROM dbo.GetOrdersByCustomer(101);`)
        }
      >Table-Valued Functions</button>                  

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Indexing</strong> is a data structure that helps us to improve the speed of retrieving specific data from tables.</p>)
        }
      >Indexing</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Cluster Index</strong> determines the physical order in which the actual data will be stored in a table. When Clustered Index is apply on a specific column during the creation of new table the actual data is inserted into that column in a sorted order. This helps us to retrieve data faster because data is stored in a specific order. A table can have only one clustered index because the data rows themselves can be stored in only one order. A clustered index can be created on a single column or multiple columns (composite index). In most databases the primary key creates a clustered index by default.<br /><br />
<strong>When to Use Clustered Indexes?</strong><br />
✅When frequently search for ranges of value like between date<br />
✅When query use ORDER BY or sorting on a particular column.<br />
✅When data retrieval speed is important for specific column<br /><br />
<strong>When NOT to Use Clustered Indexes?</strong><br />
❌When frequently use INSERT, UPDATE or DELETE operation on index column as reordering data can be expensive.<br />
❌When deal with non-sequential data like GUID as primary key</p>, 
`CREATE CLUSTERED INDEX index_name
ON table_name (column1, column2, ...)`)
        }
      >Cluster</button>
      
       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong></strong>Non-Cluster Index doesn't sort physical data like Cluster Index. It means it doesn't affect the physical order of data and creates a separate structure that maintains pointer or reference to the actual data. When we define Non-Cluster Index it creates a special table which stores the copy of indexed columns along with a pointer that refers to the location of the actual data in the table. We can create more than one Non-Cluster Index. We can create maximum 999 Non-Clustered Index.<br /><br />
<strong>When to Use Non-Clustered Indexes?</strong><br />
✅When filter by a column that is not the primary key like email<br />
✅When we have multiple search columns like advanced search<br />
✅When we need to improve JOIN | WHERE clause performance<br /><br />
<strong>When NOT to Use Non-Clustered Indexes?</strong><br />
❌When frequently INSERT, UPDATE, DELETE operations occurs as maintaining indexes can impact on performance<br />
❌When column is boolean like isActive as indexing it provides little benefit.<br />
❌When excessive indexes increase storage and slow down write</p>, `CREATE NONCLUSTERED INDEX idx_employee_name
ON Employees(Name, Email)`)
        }
      >Non-Cluster</button><br />

       <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong></strong></p>)
        }
      >Joins</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>INNER JOIN</strong> retrieves only the matching rows between two tables based on a specified condition. If there is no match, the row is excluded from the result.</p>,  `SELECT e.Name, d.DepartmentName FROM Employee e
INNER JOIN Department d ON e.DepartmentID = d.DepartmentID;`)
        }
      >Inner</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>LEFT JOIN</strong> returns all rows from the left table and the matching rows from the right table. If there is no match in the right table, NULL values are returned for those columns.</p>, `SELECT e.Name, d.DepartmentName FROM Employee e
LEFT JOIN Department d ON e.DepartmentID = d.DepartmentID;`)
        }
      >Left Join</button>

        <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>RIGHT JOIN</strong> returns all rows from the right table and the matching rows from the left table. If there is no match in the left table, NULL values are returned for those columns.</p>, `SELECT e.Name, d.DepartmentName FROM Employee e
RIGHT JOIN Department d ON e.DepartmentID = d.DepartmentID;`)
        }
      >Right Join</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>FULL OUTER JOIN</strong> returns all rows from both tables. If there is a match, it includes the values from both tables. If there is no match, NULL values are returned for the missing side.</p>, `SELECT e.Name, d.DepartmentName FROM Employee e
FULL OUTER JOIN Department d ON e.DepartmentID = d.DepartmentID;`)
        }
      >Full Join</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>CROSS JOIN</strong> creates a cartesian product between two tables. This means each row from the first table is combined with every row from the second table</p>, `SELECT e.Name, d.DepartmentName FROM Employee e
CROSS JOIN Department;`)
        }
      >Cross Join</button>
      
       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>SELF JOIN</strong> is when a table is joined with itself. This is useful for hierarchical relationships, comparisons within the same table, or finding related records.</p>, `SELECT E1.Name AS Employee, E2.Name AS Manager
FROM Employees E1
SELF JOIN Employees E2 ON E1.ManagerID = E2.EmployeeID;`)
        }
      >Self Join</button>

       <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Normalization</strong> is the way of organizing structured data in the database efficiently. It includes the creation of tables, establishing relationships between them, and defining rules for those relationships. Inconsistency and redundancy can be check based on these rules.</p>)
        }
      >Normalization</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>First Normal Form</strong>: A relation is in first normal form if every attribute in that relation is a single-valued attribute. If a relation contains a composite or multi-valued attribute, it violates the first normal form.</p>)
        }
      >1NF</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Second Normal Form</strong>: A relation is in second normal form if it satisfies the conditions for the first normal form and does not contain any partial dependency. A relation in 2NF has no partial dependency.</p>)
        }
      >2NF</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Third Normal Form</strong>: A relation is said to be in the third normal form, if it satisfies the conditions for the second normal form and there is no transitive dependency between the non-prime attributes.</p>)
        }
      >3NF</button>

        <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Boyce-Codd Normal Form</strong>: A relation is in Boyce-Codd Normal Form if satisfies the conditions for third normal form and for every functional dependency, Left-Hand-Side is super key.</p>)
        }
      >BCNF</button><br />

       <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Relationship</strong> defines how tables are connected to each other based on common fields. Relationship help us to maintain data integrity and eliminate redundancy by linking data across multiple tables like<br /> <strong>One-to-One, One-to-Many, Many-to-One and Many-to-Many</strong>.</p>)
        }
      >Relationship</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>One-to-One</strong>: One row in Table A is linked to exactly one row in Table B, and vice versa. For example a User table and a UserProfile table each user has only one profile. We can implemented using foreign key in one table that references the primary key of the other with unique constraint.</p>, `CREATE TABLE User
(
	UserId INT PRIMARY KEY, 
	Name VARCHAR(50)
);

CREATE TABLE UserProfile
(
	ProfileId INT PRIMARY KEY, 
	UserId INT UNIQUE,
	FOREIGN KEY (UserId) 
	REFERENCES User(UserId)
);

modelBuilder.Entity<User>()
    .HasOne(u => u.UserProfile)
    .WithOne(p => p.User)
    .HasForeignKey<UserProfile>(p => p.UserId);`)
        }
      >1:1</button>

        <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>One-to-Many</strong>: One row in Table A can relate to multiple rows in Table B, but each row in Table B relates to only one row in Table A. Example: One customer can place many orders, but each order belongs to one customer. We can implemented using foreign key in the "many" table pointing to the primary key in the "one" table.</p>, `CREATE TABLE Customer 
(
	CustomerId INT PRIMARY KEY,
	Name VARCHAR(100)
);

CREATE TABLE Orders (
	OrderId INT PRIMARY KEY,
	CustomerId INT,
	OrderDate DATE,
	FOREIGN KEY(CustomerId) 
	REFERENCES Customer(CustomerId)
);

modelBuilder.Entity<Category>()
    .HasMany(c => c.Products)
    .WithOne(p => p.Category)
    .HasForeignKey(p => p.CategoryId);`)
        }
      >1:M</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Many-to-Many</strong>: Rows in Table A can relate to multiple rows in Table B and vice versa. For example student can enroll in multiple courses and each course can have multiple students. We can implemented using a bridge or junction table.</p>, `CREATE TABLE Student (Id INT PRIMARY KEY, Name VARCHAR(50));
CREATE TABLE Course(Id INT PRIMARY KEY, Name VARCHAR(50));

CREATE TABLE Student_Course(
    StudentId INT,
    CourseId INT,
    PRIMARY KEY (StudentId, CourseId),
    FOREIGN KEY (StudentId) REFERENCES Student(StudentId),
    FOREIGN KEY (CourseId) REFERENCES Course(CourseId)
);

modelBuilder.Entity<Student>()
    .HasMany(s => s.Courses)
    .WithMany(c => c.Students);`)
        }
      >M:M</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Self-Referencing Relationship</strong>: A table has a relationship with itself. For example Employee can have a Manager who is also an Employee. Implemented using a Foreign Key referencing the same table.</p>, `CREATE TABLE Employee
(
	EmployeeId INT PRIMARY KEY,
	Name VARCHAR(100),
	ManagerId INT,
	FOREIGN KEY (ManagerId)
	REFERENCES Employee(EmployeeId)
);`)
        }
      >Self-Reference</button>

       <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Temporary Tables</strong> are quite similar to Permanent Tables in the database. Permanent Tables are created in a specific database and persist until the database exists. Temporary Tables are created in the tempdb and are automatically deleted when they are no longer in use.</p>)
        }
      >Temporary Tables</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Local Temporary Tables</strong> are similar to permanent tables and it is created with single hash "#". They are visible only to the connection that creates it and are deleted when the connection is closed.</p>, `CREATE TABLE #Emp (Id INT, Name VARCHAR(25))`)
        }
      >Local</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Global Temporary Tables</strong> are also similar to Local Temporary Tables and it is creted with double hash value "##". They are visible to all connections of SQL Server and only destroyed when the last connection referencing the table is closed.</p>, `CREATE TABLE ##Emp (Id INT, Name VARCHAR(25))`)
        }
      >Global</button>

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Trigger</strong> is a stored procedure which automatically executes when special event occurs in database. Automatic Execution is the main key feature which fires automatically when we perform database operation like INSERT, UPDATE or DELETE.
There are 3 types of Trigger</p>)
        }
      >Trigger</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>DDL Triggers</strong> respond to DDL events like CREATE, ALTER, DROP, GRANT, DENY, REVOKE etc. It allow to track changes in the structure of the database. The trigger will prevent any table creation, alteration, or deletion in the database.</p>, `CREATE TRIGGER prevent_table_creation
ON DATABASE
FOR CREATE_TABLE, ALTER_TABLE, DROP_TABLE
AS 
BEGIN
PRINT 'you can not create, drop, alter table';
ROLLBACK;
END;`)
        }
      >DDL</button>
      
       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>DML Triggers</strong> are automatically invoked when an INSERT, UPDATE or DELETE statement is executed.</p>, `CREATE TRIGGER prevent_update
ON students
FOR UPDATE
AS
BEGIN
PRINT 'You can not insert, update and delete';
ROLLBACK;
END;`)
        }
      >DML</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Logon Triggers</strong> are useful for monitoring user sessions or restricting user access to the database. It can be used for tracking login activities, put the restriction on logins, or limiting the number of sessions for a particular login.</p>, `CREATE TRIGGER track_logon
ON LOGON
AS
BEGIN
PRINT 'A new user has logged in.';
END;`)
        }
      >Logon</button>

      {/* Popup */}
      {isOpen && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content scrollable-popup" onClick={(e) => e.stopPropagation()}>
            {popupContent}
          </div>
        </div>
      )}
    </div>
  );
}