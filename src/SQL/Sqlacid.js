import React from 'react';

function Sqlacid() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">SQL ACID Properties</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p>
          ACID properties ensure reliable processing of database transactions. ACID stands for <strong>Atomicity, Consistency, Isolation, and Durability</strong>.
        </p>
      </section>

      {/* Atomicity */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. Atomicity</h2>
        <p>
          Atomicity ensures that a transaction is treated as a single unit. Either all operations succeed, or none are applied.
        </p>
        <pre>
          {`-- Example
BEGIN TRANSACTION;
UPDATE Account SET Balance = Balance - 100 WHERE AccountID = 1;
UPDATE Account SET Balance = Balance + 100 WHERE AccountID = 2;
-- If any update fails, rollback
ROLLBACK; -- or COMMIT if successful`}
        </pre>
      </section>

      {/* Consistency */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. Consistency</h2>
        <p>
          Consistency ensures that a transaction brings the database from one valid state to another, preserving all defined rules, constraints, and relationships.
        </p>
        <pre>
          {`-- Example: Foreign key constraint ensures consistency
INSERT INTO Orders(OrderID, CustomerID) VALUES (101, 5);
-- If CustomerID 5 does not exist, the transaction fails`}
        </pre>
      </section>

      {/* Isolation */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Isolation</h2>
        <p>
          Isolation ensures that concurrent transactions do not affect each other. Changes made in one transaction are not visible to others until committed.
        </p>
        <pre>
          {`-- Example: Transaction isolation levels
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

BEGIN TRANSACTION;
-- Perform updates here
COMMIT;`}
        </pre>
      </section>

      {/* Durability */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">5. Durability</h2>
        <p>
          Durability ensures that once a transaction is committed, its changes are permanent, even in case of system failure.
        </p>
        <pre>
          {`-- Example
BEGIN TRANSACTION;
UPDATE Account SET Balance = Balance + 500 WHERE AccountID = 2;
COMMIT;
-- Changes are permanent and safe even if the server crashes afterwards`}
        </pre>
      </section>

      {/* Importance */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">6. Importance of ACID</h2>
        <ul className="list-disc ml-6">
          <li>Ensures data integrity and reliability.</li>
          <li>Prevents partial updates that could corrupt data.</li>
          <li>Supports safe concurrent access to the database.</li>
          <li>Provides confidence in transactional systems like banking and e-commerce.</li>
        </ul>
      </section>
    </div>
  );
}

export default Sqlacid;
