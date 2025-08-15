import React from 'react';

function Sqlprofiler() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">SQL Server Profiler</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p>
          SQL Server Profiler is a tool that allows you to monitor and capture SQL Server events in real-time. It is used for debugging, performance tuning, and auditing.
        </p>
      </section>

      {/* Key Uses */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. Key Uses of SQL Profiler</h2>
        <ul className="list-disc ml-6">
          <li>Monitor and capture SQL queries being executed</li>
          <li>Identify slow-running queries for performance tuning</li>
          <li>Audit database activity</li>
          <li>Debug stored procedures, triggers, and batch executions</li>
        </ul>
      </section>

      {/* Steps to Use */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. Steps to Use SQL Profiler</h2>
        <ol className="list-decimal ml-6">
          <li>Open SQL Server Management Studio (SSMS).</li>
          <li>Go to <strong>Tools &gt; SQL Server Profiler</strong>.</li>
          <li>Connect to the desired SQL Server instance.</li>
          <li>Create a new trace and select the events you want to capture (e.g., SQL:BatchCompleted, RPC:Completed).</li>
          <li>Start the trace to capture live events.</li>
          <li>Analyze queries, duration, CPU, reads, and writes to identify performance bottlenecks.</li>
          <li>Stop the trace when done and optionally save it for future analysis.</li>
        </ol>
      </section>

      {/* Example of Captured Data */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Example of Captured Data</h2>
        <pre>
          {`EventClass       TextData                                    Duration
SQL:BatchCompleted  SELECT * FROM Student                     120
RPC:Completed       EXEC sp_GetEmployees                      300
SQL:BatchCompleted  INSERT INTO Employee(EmployeeName,Email)  250`}
        </pre>
      </section>

      {/* Tips and Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">5. Tips & Best Practices</h2>
        <ul className="list-disc ml-6">
          <li>Filter events to capture only relevant queries to reduce overhead.</li>
          <li>Avoid running Profiler on a production server for long periods.</li>
          <li>Use server-side traces for better performance on production systems.</li>
          <li>Analyze captured data to optimize queries, indexes, and stored procedures.</li>
        </ul>
      </section>
    </div>
  );
}

export default Sqlprofiler;
