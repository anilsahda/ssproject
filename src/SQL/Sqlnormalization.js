import React from "react";

function Sqlnormalization() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">SQL Normalization</h1>
        <p className="text-gray-500 text-xs mt-1">
          Normalization is the process of organizing data in a database to reduce redundancy, avoid anomalies, and improve data integrity. 
          It involves dividing a database into multiple related tables and defining relationships using primary and foreign keys.
        </p>
      </header>

      {/* Introduction */}
      <Section title="Introduction to Normalization" color="text-green-600">
        <p>
          The main goal of normalization is to structure a database efficiently. By eliminating redundant data and ensuring that each piece of information is stored in one place, 
          normalization makes the database easier to maintain and query.
        </p>
      </Section>

      {/* Benefits */}
      <Section title="Benefits of Normalization" color="text-orange-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Reduces data redundancy and avoids duplicate data storage.</li>
          <li>Improves data integrity and consistency across the database.</li>
          <li>Optimizes storage utilization by eliminating unnecessary data repetition.</li>
          <li>Makes maintenance, updates, and schema changes easier and safer.</li>
          <li>Facilitates accurate reporting and querying.</li>
        </ul>
      </Section>

      {/* Normal Forms */}
      <Section title="Normal Forms" color="text-blue-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>1st Normal Form (1NF):</strong> Each column contains atomic values; no repeating groups or arrays.
          </li>
          <li>
            <strong>2nd Normal Form (2NF):</strong> Must satisfy 1NF, and all non-key columns must be fully dependent on the primary key.
          </li>
          <li>
            <strong>3rd Normal Form (3NF):</strong> Must satisfy 2NF, and all columns must depend only on the primary key (no transitive dependencies).
          </li>
          <li>
            <strong>BCNF (Boyce-Codd Normal Form):</strong> A stricter version of 3NF that resolves certain anomalies not handled by 3NF.
          </li>
          <li>
            <strong>4th Normal Form (4NF):</strong> Eliminates multi-valued dependencies; ensures one fact per column per row.
          </li>
          <li>
            <strong>5th Normal Form (5NF):</strong> Ensures that join dependencies are implied by candidate keys, eliminating redundancy from complex joins.
          </li>
        </ul>
      </Section>

      {/* Example */}
      <Section title="Example of Normalization" color="text-purple-600">
        <p><strong>Unnormalized Table:</strong></p>
        <CodeBlock>
{`StudentID | StudentName | Course1  | Course2
1         | Anil        | Math     | English
2         | Rahul       | Science  | Math`}
        </CodeBlock>

        <p><strong>Normalized Tables (1NF and 2NF):</strong></p>
        <CodeBlock>
{`-- Students Table
StudentID | StudentName
1         | Anil
2         | Rahul

-- StudentCourses Table
StudentID | CourseName
1         | Math
1         | English
2         | Science
2         | Math`}
        </CodeBlock>

        <p>
          In this example, data is split into two tables to remove repeating columns (Course1, Course2) and store each course in a separate row, maintaining atomicity and consistency.
        </p>
      </Section>

      {/* Best Practices */}
      <Section title="Best Practices for Normalization" color="text-red-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Normalize up to 3NF for most applications to balance integrity and performance.</li>
          <li>Denormalize selectively when performance optimization is required.</li>
          <li>Define proper primary keys for all tables to ensure uniqueness.</li>
          <li>Use foreign keys to maintain relationships between related tables.</li>
          <li>Document table relationships and constraints clearly for maintainability.</li>
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

export default Sqlnormalization;
