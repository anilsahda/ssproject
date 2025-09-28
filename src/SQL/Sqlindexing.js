import React from "react";

function Sqlindexing() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
        <p className="text-gray-500 text-xs mt-1"><b>Indexing</b> is a data structure that helps us to improve the speed of retrieving specific data from tables.</p>
        <p><strong>Clustered Index:</strong> Cluster Index is a type of index that determines the physical order in which the actual data will be stored in a table. When Clustered Index is apply on a specific column during the creation of new table the actual data is inserted into that column in a sorted order. This helps us to retrieve data faster because data is stored in a specific order. Cluster Index can have only one in a table. A clustered index can be created on a single column or multiple columns. In most databases the primary key creates a clustered index by default.</p>
        <p><b>When to Use Clustered Indexes?</b><br />
✅When frequently search for ranges of value like between date<br />
✅When query use ORDER BY or sorting on a particular column.<br />
✅When data retrieval speed is important for specific column<br />
When NOT to Use Clustered Indexes?<br />
❌When frequently INSERT, UPDATE or DELETE operations occur on indexed column as reordering data can be expensive.<br />
❌When deal with non-sequential data like GUID as primary key</p>
        <p><strong>Non-Clustered Index:</strong> doesn't sort physical data like Cluster Index. It means it doesn't affect the physical order of data and creates a separate structure that maintains pointer or reference to the actual data. When we define Non-Cluster Index it creates a special table which stores the copy of indexed columns along with a pointer that refers to the location of the actual data in the table. We can create more than one Non-Cluster Index. We can create maximum 999 Non-Clustered Index.</p>
        <p><b>When to Use Non-Clustered Indexes?</b></p>
        <p>✅When filter by a column that is not the primary key like email<br />
✅When multiple frequently searched columns as we can have multiple non-clustered indexes<br />
✅When we need to improve JOIN|WHERE clause performance<br />
When NOT to Use Non-Clustered Indexes?<br />
❌When frequently INSERT, UPDATE, DELETE operations occurs as maintaining indexes increases overhead<br />
❌When column is boolean like isActive as indexing it provides little benefit.<br />
❌When excessive indexes increase storage and slow down write</p>

      {/* Creating Indexes */}
      <Section title="Creating Indexes" color="text-blue-600">
        <CodeBlock>
{`-- Create Clustered Index
CREATE CLUSTERED INDEX IDX_StudentID
ON Student(Id);

-- Create Non-Clustered Index
CREATE NONCLUSTERED INDEX IDX_StudentName
ON Student(FirstName);`}
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
SELECT FirstName, Email FROM Student WHERE DistrictId = 1 ORDER BY FirstName;`}
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
