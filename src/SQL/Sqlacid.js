import React from "react";

function Sqlacid() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <p className="text-gray-500 text-xs mt-1">
          <b>ACID</b> is used to maintain the database consistency before and after a transaction. Transaction is a single logical unit which is used to modify the data through read write operations like insert, update, delete and retrieve the data.
        </p>
      </header>

      {/* Atomicity */}
      <Section title="Atomicity" color="text-green-600">
        <p>
          Atomicity means a transaction can be treated as a single. Either all the operations will be completed successfully or nothing will be performed. Means If any part of the transaction fails, the entire transaction is rolled back in original state.
        </p>
        <p>
          For example, when transferring money between accounts, both the debit and credit operations must succeed together. 
          If one fails, the other is rolled back.
        </p>
        <CodeBlock>
{`-- Atomicity Example
BEGIN TRANSACTION;
UPDATE Account SET Balance = Balance - 100 WHERE AccountID = 1;
UPDATE Account SET Balance = Balance + 100 WHERE AccountID = 2;
-- If any update fails, rollback the entire transaction
ROLLBACK; -- or COMMIT if both succeed`}
        </CodeBlock>
      </Section>

      {/* Consistency */}
      <Section title="Consistency" color="text-orange-600">
        <p>Consistency means a transaction takes the database from one consistent state to another consistent state. Database should be in consistent state before and after the transaction executed.</p>
        <p>
          For instance, foreign key and unique constraints ensure that references and uniqueness are maintained.
        </p>
        <CodeBlock>
{`-- Consistency Example
INSERT INTO Orders(OrderID, CustomerID) VALUES (101, 5);
-- If CustomerID 5 does not exist, the transaction fails due to foreign key constraint`}
        </CodeBlock>
      </Section>

      {/* Isolation */}
      <Section title="Isolation" color="text-blue-600">
        <p>Isolation means multiple transactions can execute concurrently without interfaring with each other. Each transaction must be isolated from other transactions until it's completed.</p>
        <CodeBlock>
{`-- Isolation Example: Preventing dirty reads
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

BEGIN TRANSACTION;
-- Perform updates or reads
COMMIT;`}
        </CodeBlock>
      </Section>

      {/* Durability */}
      <Section title="Durability" color="text-purple-600">
        <p>Durability means the data remains consistent and accurate, even system failure or crash. It guarantees that committed transactions are durable and will be recovered without data loss.</p>
        <CodeBlock>
{`-- Durability Example
BEGIN TRANSACTION;
UPDATE Account SET Balance = Balance + 500 WHERE AccountID = 2;
COMMIT;
-- Even if the server crashes, the update remains safe and permanent`}
        </CodeBlock>
      </Section>

      {/* Importance */}
      <Section title="Importance of ACID" color="text-red-600">
        <p>
          ACID properties are critical for transactional systems where accuracy, reliability, and predictability are essential.
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Prevents data corruption by ensuring atomic operations.</li>
          <li>Maintains database rules and constraints for consistent data.</li>
          <li>Supports multiple users performing concurrent operations safely.</li>
          <li>Essential for banking, e-commerce, reservation, and financial systems.</li>
          <li>Ensures that committed changes survive failures, providing trust in the system.</li>
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

export default Sqlacid;
