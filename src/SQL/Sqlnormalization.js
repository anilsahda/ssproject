import React from 'react';

function Sqlnormalization() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">SQL Normalization</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction to Normalization</h2>
        <p>
          Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing a database into multiple related tables.
        </p>
      </section>

      {/* Benefits */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. Benefits of Normalization</h2>
        <ul className="list-disc ml-6">
          <li>Reduces data redundancy</li>
          <li>Improves data integrity</li>
          <li>Efficient storage utilization</li>
          <li>Makes maintenance easier</li>
        </ul>
      </section>

      {/* Normal Forms */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. Normal Forms</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>1st Normal Form (1NF):</strong> Each column must contain atomic values; no repeating groups.
          </li>
          <li>
            <strong>2nd Normal Form (2NF):</strong> Must be in 1NF and all non-key columns must depend on the entire primary key.
          </li>
          <li>
            <strong>3rd Normal Form (3NF):</strong> Must be in 2NF and all columns must depend only on the primary key (no transitive dependency).
          </li>
          <li>
            <strong>BCNF (Boyce-Codd Normal Form):</strong> A stricter version of 3NF.
          </li>
          <li>
            <strong>4th Normal Form (4NF):</strong> No multi-valued dependencies.
          </li>
          <li>
            <strong>5th Normal Form (5NF):</strong> No join dependencies that are not implied by candidate keys.
          </li>
        </ul>
      </section>

      {/* Example */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Example</h2>
        <p>Unnormalized Table:</p>
        <pre>
          {`StudentID | StudentName | Course1 | Course2
1         | Anil        | Math    | English
2         | Rahul       | Science | Math`}
        </pre>

        <p>Normalized Tables (1NF and 2NF):</p>
        <pre>
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
        </pre>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">5. Best Practices</h2>
        <ul className="list-disc ml-6">
          <li>Start normalization up to 3NF for most applications.</li>
          <li>Denormalize only when necessary for performance optimization.</li>
          <li>Ensure primary keys are properly defined for all tables.</li>
          <li>Use foreign keys to maintain relationships between tables.</li>
        </ul>
      </section>
    </div>
  );
}

export default Sqlnormalization;
