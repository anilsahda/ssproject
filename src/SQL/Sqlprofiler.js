import React from "react";

function Sqlprofiler() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">SQL Server Profiler</h1>
        <p className="text-gray-500 text-xs mt-1">
          SQL Server Profiler is a tool for monitoring, analyzing, and capturing SQL Server events in real-time. 
          It is essential for performance tuning, debugging, and auditing database operations.
        </p>
      </header>

      {/* Introduction */}
      <Section title="Introduction to SQL Profiler" color="text-green-600">
        <p>
          SQL Server Profiler allows you to capture detailed information about SQL statements, stored procedures, and batch executions. 
          This information helps identify slow queries, understand workload patterns, and troubleshoot database issues.
        </p>
      </Section>

      {/* Key Uses */}
      <Section title="Key Uses of SQL Profiler" color="text-orange-600">
        <ul className="list-disc ml-6">
          <li>Monitor and capture SQL queries and transactions being executed in real-time.</li>
          <li>Identify slow-running queries and performance bottlenecks.</li>
          <li>Audit database activity and track changes.</li>
          <li>Debug stored procedures, triggers, and batch executions.</li>
          <li>Analyze application interactions with SQL Server for optimization.</li>
        </ul>
      </Section>

      {/* Steps to Use */}
      <Section title="Steps to Use SQL Profiler" color="text-blue-600">
        <ol className="list-decimal ml-6">
          <li>Open SQL Server Management Studio (SSMS).</li>
          <li>Navigate to <strong>Tools &gt; SQL Server Profiler</strong>.</li>
          <li>Connect to the desired SQL Server instance.</li>
          <li>Create a new trace and select events to capture (e.g., <strong>SQL:BatchCompleted</strong>, <strong>RPC:Completed</strong>).</li>
          <li>Start the trace to capture live events, monitoring Duration, CPU, Reads, and Writes.</li>
          <li>Analyze captured events to identify performance issues or errors.</li>
          <li>Stop the trace when finished and optionally save the trace results for future analysis.</li>
        </ol>
      </Section>

      {/* Example of Captured Data */}
      <Section title="Example of Captured Data" color="text-purple-600">
        <p>Profiler captures various metrics for each event such as Event Class, Text Data, Duration, CPU, Reads, and Writes:</p>
        <CodeBlock>
{`EventClass          TextData                                      Duration   CPU   Reads   Writes
SQL:BatchCompleted  SELECT * FROM Student                         120        10    500     20
RPC:Completed       EXEC sp_GetEmployees                          300        25    1200    50
SQL:BatchCompleted  INSERT INTO Employee(EmployeeName, Email)     250        15    800     10`}
        </CodeBlock>
      </Section>

      {/* Tips and Best Practices */}
      <Section title="Tips & Best Practices" color="text-red-600">
        <ul className="list-disc ml-6">
          <li>Filter events to capture only relevant queries to minimize overhead.</li>
          <li>Avoid running Profiler continuously on production servers for long periods.</li>
          <li>Use server-side traces for production environments to reduce performance impact.</li>
          <li>Analyze captured data to optimize queries, indexes, and stored procedures.</li>
          <li>Regularly review slow-running queries and tune indexes accordingly.</li>
          <li>Document common patterns and frequent bottlenecks to improve future performance tuning.</li>
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

export default Sqlprofiler;
