import React from "react";

function Sqlindexing() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">SQL Server Indexing</h1>
        <p className="text-gray-500 text-xs mt-1">
          Indexes in SQL Server improve query performance by allowing faster data retrieval.
          They work like a book index, helping the database locate rows efficiently. 
          Proper indexing can significantly enhance performance for large tables.
        </p>
      </header>

      {/* Introduction */}
      <Section title="Introduction to Indexing" color="text-green-600">
        <p>
          Indexes speed up data retrieval from a table at the cost of additional storage and slower writes. 
          Think of it as a book index: it points directly to the page where information is located instead of scanning the entire book.
        </p>
      </Section>

      {/* Types of Indexes */}
      <Section title="Types of Indexes" color="text-orange-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>Clustered Index:</strong> Determines the physical order of data in a table. Each table can have only one clustered index.
          </li>
          <li>
            <strong>Non-Clustered Index:</strong> A separate structure from the table that points to the physical rows. A table can have multiple non-clustered indexes.
          </li>
          <li>
            <strong>Unique Index:</strong> Ensures the uniqueness of values in one or more columns.
          </li>
          <li>
            <strong>Composite Index:</strong> An index on multiple columns to optimize multi-column searches.
          </li>
          <li>
            <strong>Full-Text Index:</strong> Specialized index used for searching text-based data efficiently.
          </li>
        </ul>
      </Section>

      {/* Creating Indexes */}
      <Section title="Creating Indexes" color="text-blue-600">
        <p>
          Indexes can be created on one or more columns. Clustered indexes affect physical row order; non-clustered indexes create a separate lookup structure.
        </p>
        <CodeBlock>
{`-- Create Clustered Index
CREATE CLUSTERED INDEX IDX_StudentID
ON Student(Id);

-- Create Non-Clustered Index
CREATE NONCLUSTERED INDEX IDX_StudentName
ON Student(FirstName);

-- Create Unique Index
CREATE UNIQUE INDEX IDX_UniqueEmail
ON Student(Email);

-- Create Composite Index
CREATE NONCLUSTERED INDEX IDX_Student_District
ON Student(FirstName, DistrictId);`}
        </CodeBlock>
      </Section>

      {/* Dropping Indexes */}
      <Section title="Dropping Indexes" color="text-purple-600">
        <p>
          Indexes can be removed when they are no longer needed or if they impact write performance negatively.
        </p>
        <CodeBlock>
{`-- Drop an index
DROP INDEX IDX_StudentName ON Student;`}
        </CodeBlock>
      </Section>

      {/* Index Usage */}
      <Section title="Index Usage" color="text-pink-600">
        <p>
          Use indexes to optimize queries that involve <strong>WHERE</strong> clauses, <strong>JOINs</strong>, <strong>ORDER BY</strong>, and <strong>GROUP BY</strong>. 
          Avoid indexing columns that change frequently or are rarely queried.
        </p>
        <CodeBlock>
{`-- Example: Query optimized by index
SELECT FirstName, Email
FROM Student
WHERE DistrictId = 1
ORDER BY FirstName;`}
        </CodeBlock>
      </Section>

      {/* Best Practices */}
      <Section title="Best Practices for Indexing" color="text-red-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Index columns that are frequently used in WHERE, JOIN, and ORDER BY clauses.</li>
          <li>Limit the number of indexes to reduce write and update overhead.</li>
          <li>Consider covering indexes that include all columns needed by a query.</li>
          <li>Monitor index fragmentation regularly and rebuild or reorganize as necessary.</li>
          <li>Use appropriate index type based on query patterns and table size.</li>
        </ul>
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

export default Sqlindexing;
