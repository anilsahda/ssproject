import React from 'react';

function Sqlquestions() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">30 Hot SQL Interview Questions</h1>

      <section>
        <h2 className="text-2xl font-semibold mt-4">1. What is SQL?</h2>
        <p>SQL (Structured Query Language) is used to interact with relational databases for storing, updating, and retrieving data.</p>

        <h2 className="text-2xl font-semibold mt-4">2. What are the types of SQL commands?</h2>
        <p>DDL, DML, DCL, and TCL.</p>

        <h2 className="text-2xl font-semibold mt-4">3. Difference between DELETE and TRUNCATE?</h2>
        <p>DELETE removes rows with WHERE condition, can be rolled back; TRUNCATE removes all rows, faster, cannot be rolled back.</p>

        <h2 className="text-2xl font-semibold mt-4">4. Difference between INNER JOIN and LEFT JOIN?</h2>
        <p>INNER JOIN returns only matching rows; LEFT JOIN returns all rows from left table plus matching rows from right table.</p>

        <h2 className="text-2xl font-semibold mt-4">5. What is a Primary Key?</h2>
        <p>A column or set of columns that uniquely identifies each row in a table.</p>

        <h2 className="text-2xl font-semibold mt-4">6. What is a Foreign Key?</h2>
        <p>A column or set of columns that establishes a link between data in two tables.</p>

        <h2 className="text-2xl font-semibold mt-4">7. What are indexes?</h2>
        <p>Indexes are used to speed up data retrieval operations on a table.</p>

        <h2 className="text-2xl font-semibold mt-4">8. Difference between Clustered and Non-Clustered Index?</h2>
        <p>Clustered index determines physical order of data; Non-Clustered is a separate structure pointing to data.</p>

        <h2 className="text-2xl font-semibold mt-4">9. What is normalization?</h2>
        <p>Process of organizing data to reduce redundancy and improve integrity.</p>

        <h2 className="text-2xl font-semibold mt-4">10. What is denormalization?</h2>
        <p>Process of combining tables to improve performance at the cost of redundancy.</p>

        <h2 className="text-2xl font-semibold mt-4">11. Difference between WHERE and HAVING?</h2>
        <p>WHERE filters rows before aggregation; HAVING filters after aggregation.</p>

        <h2 className="text-2xl font-semibold mt-4">12. What is a Stored Procedure?</h2>
        <p>A precompiled SQL code block that can be executed with parameters.</p>

        <h2 className="text-2xl font-semibold mt-4">13. What is a Trigger?</h2>
        <p>A set of SQL statements automatically executed in response to certain events on a table or view.</p>

        <h2 className="text-2xl font-semibold mt-4">14. Difference between CHAR and VARCHAR?</h2>
        <p>CHAR has fixed length; VARCHAR has variable length.</p>

        <h2 className="text-2xl font-semibold mt-4">15. Difference between UNION and UNION ALL?</h2>
        <p>UNION removes duplicates; UNION ALL includes all rows.</p>

        <h2 className="text-2xl font-semibold mt-4">16. What is a CTE?</h2>
        <p>Common Table Expression (CTE) is a temporary result set defined within a query.</p>

        <h2 className="text-2xl font-semibold mt-4">17. What are transactions?</h2>
        <p>A set of operations executed as a single unit, ensuring ACID properties.</p>

        <h2 className="text-2xl font-semibold mt-4">18. Difference between RANK(), DENSE_RANK(), and ROW_NUMBER()?</h2>
        <p>RANK leaves gaps, DENSE_RANK does not, ROW_NUMBER gives unique sequential numbers.</p>

        <h2 className="text-2xl font-semibold mt-4">19. What is a view?</h2>
        <p>A virtual table created by a SELECT query.</p>

        <h2 className="text-2xl font-semibold mt-4">20. What is a cursor?</h2>
        <p>A database object used to iterate over a result set row by row.</p>

        <h2 className="text-2xl font-semibold mt-4">21. Difference between TRUNCATE, DELETE, and DROP?</h2>
        <p>TRUNCATE removes all rows; DELETE removes rows based on condition; DROP removes table completely.</p>

        <h2 className="text-2xl font-semibold mt-4">22. What is SQL Injection?</h2>
        <p>A security vulnerability where attackers execute malicious SQL code.</p>

        <h2 className="text-2xl font-semibold mt-4">23. Difference between temporary tables and table variables?</h2>
        <p>Temporary tables exist in tempdb and support indexes; table variables have limited scope and performance differences.</p>

        <h2 className="text-2xl font-semibold mt-4">24. What is a partitioned table?</h2>
        <p>A table divided into multiple storage units to improve query performance and manageability.</p>

        <h2 className="text-2xl font-semibold mt-4">25. Difference between CROSS JOIN and INNER JOIN?</h2>
        <p>CROSS JOIN produces Cartesian product; INNER JOIN returns only matching rows.</p>

        <h2 className="text-2xl font-semibold mt-4">26. What are aggregate functions?</h2>
        <p>Functions like COUNT, SUM, AVG, MIN, MAX used to perform calculations on multiple rows.</p>

        <h2 className="text-2xl font-semibold mt-4">27. Difference between scalar and table-valued functions?</h2>
        <p>Scalar functions return single value; table-valued functions return a table.</p>

        <h2 className="text-2xl font-semibold mt-4">28. What is an execution plan?</h2>
        <p>Graphical representation of how SQL Server executes a query to help optimize performance.</p>

        <h2 className="text-2xl font-semibold mt-4">29. Difference between temp tables (#) and global temp tables (##)?</h2>
        <p>Temp tables (#) are session-specific; global temp tables (##) are accessible across sessions.</p>

        <h2 className="text-2xl font-semibold mt-4">30. How to improve SQL query performance?</h2>
        <p>Use indexes, avoid SELECT *, optimize joins, use proper data types, and analyze execution plans.</p>
      </section>
    </div>
  );
}

export default Sqlquestions;
