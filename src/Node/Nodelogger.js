function Nodelogger() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Logging in Node.js API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implement logging in a Node.js (Express) API using Winston logger, log levels, and external log providers.
        </p>
      </header>

      <Section title="Overview" color="text-indigo-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Use <b>Winston</b> logger for structured logging in Node.js.</li>
          <li>Supports multiple log levels: error, warn, info, http, verbose, debug, silly.</li>
          <li>Logs can be written to console, files, or centralized logging systems.</li>
        </ul>
      </Section>

      <Section title="Install Winston" color="text-green-600">
        <CodeBlock>
{`npm install winston`}
        </CodeBlock>
      </Section>

      <Section title="Logger Configuration (logger.js)" color="text-yellow-600">
        <CodeBlock>
{`const { createLogger, transports, format } = require("winston");

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(({ timestamp, level, message }) => {
      return \`[\${timestamp}] \${level.toUpperCase()}: \${message}\`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" })
  ]
});

module.exports = logger;`}
        </CodeBlock>
      </Section>

      <Section title="Use Logger in Express API" color="text-red-600">
        <CodeBlock>
{`const express = require("express");
const logger = require("./logger");

const app = express();

app.get("/students", (req, res) => {
  logger.info("Fetching all students");
  try {
    const students = ["Student1", "Student2"];
    logger.debug("Students fetched successfully");
    res.json(students);
  } catch (err) {
    logger.error("Error fetching students: " + err.message);
    res.status(500).send("Internal server error");
  }
});

app.listen(3000, () => logger.info("Server running on port 3000"));`}
        </CodeBlock>
      </Section>

      <Section title="Logging Levels in Winston" color="text-blue-600">
        <CodeBlock>
{`logger.error("Error message");
logger.warn("Warning message");
logger.info("Information message");
logger.http("HTTP request log");
logger.verbose("Verbose message");
logger.debug("Debugging details");
logger.silly("Silly log message");`}
        </CodeBlock>
      </Section>

      <Section title="External Logging Providers" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li><b>Log files</b> with Winston transports.</li>
          <li><b>Centralized logging</b> using ELK stack (Elasticsearch, Logstash, Kibana).</li>
          <li><b>Cloud logging</b> like AWS CloudWatch, Azure Monitor, or Google Cloud Logging.</li>
        </ul>
      </Section>

      <Section title="Summary" color="text-orange-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Winston is the most popular logger for Node.js applications.</li>
          <li>Provides structured logs with timestamps and multiple output options.</li>
          <li>Supports file logging, console logging, and external log providers.</li>
        </ul>
      </Section>
    </div>
  );
}

function Section({ title, color, children }) {
  return (
    <section>
      <div className="flex items-center mb-2">
        <strong className={`${color}`}>{title}</strong>
      </div>
      {children}
    </section>
  );
}

function CodeBlock({ children }) {
  return (
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">
      {children}
    </pre>
  );
}

export default Nodelogger;
