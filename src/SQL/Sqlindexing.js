import React from 'react';

function Sqlindexing() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">SQL Server Indexing</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction to Indexing</h2>
        <p>
          Indexes improve the speed of data retrieval from a table at the cost of additional storage and slower writes. They are similar to the index of a book.
        </p>
      </section>

      {/* Types of Indexes */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. Types of Indexes</h2>
        <ul className="list-disc ml-6">
          <li><strong>Clustered Index:</strong> Determines the physical order of data in a table. Each table can have only one clustered index.</li>
          <li><strong>Non-Clustered Index:</strong> A separate structure from the table that points to the physical rows. A table can have multiple non-clustered indexes.</li>
          <li><strong>Unique Index:</strong> Ensures the uniqueness of values in one or more columns.</li>
          <li><strong>Composite Index:</strong> An index on multiple columns.</li>
          <li><strong>Full-Text Index:</strong> Used for searching text-based data.</li>
        </ul>
      </section>

      {/* Creating Indexes */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. Creating Indexes</h2>
        <pre>
          {`-- Create Clustered Index
CREATE CLUSTERED INDEX IDX_StudentID
ON Student(StudentID);

-- Create Non-Clustered Index
CREATE NONCLUSTERED INDEX IDX_StudentName
ON Student(StudentName);

-- Create Unique Index
CREATE UNIQUE INDEX IDX_UniqueEmail
ON Student(Email);

-- Create Composite Index
CREATE NONCLUSTERED INDEX IDX_Student_District
ON Student(StudentName, DistrictID);`}
        </pre>
      </section>

      {/* Dropping Indexes */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Dropping Indexes</h2>
        <pre>
          {`-- Drop Index
DROP INDEX IDX_StudentName ON Student;`}
        </pre>
      </section>

      {/* Index Usage */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">5. Index Usage</h2>
        <p>
          Use indexes to optimize queries that involve WHERE clauses, JOINs, ORDER BY, and GROUP BY. Avoid indexing columns that change frequently.
        </p>
        <pre>
          {`-- Example: Query optimized by index
SELECT StudentName, Email
FROM Student
WHERE DistrictID = 1
ORDER BY StudentName;`}
        </pre>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">6. Best Practices</h2>
        <ul className="list-disc ml-6">
          <li>Index columns used frequently in WHERE, JOIN, and ORDER BY clauses.</li>
          <li>Limit the number of indexes to reduce write overhead.</li>
          <li>Use covering indexes to include all columns needed by a query.</li>
          <li>Monitor index fragmentation and rebuild/reorganize as needed.</li>
        </ul>
      </section>
    </div>
  );
}

export default Sqlindexing;
