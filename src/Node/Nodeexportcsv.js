function Nodeexportcsv() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Export CSV in Node.js API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing <strong>CSV Export functionality</strong> for the <strong>Customer</strong> entity in Node.js (Express) using <code>json2csv</code>.
        </p>
      </header>

      {/* Step 1: Install json2csv */}
      <Section title="Install json2csv" color="text-green-600">
        <CodeBlock>
{`npm install json2csv`}
        </CodeBlock>
      </Section>

      {/* Step 2: Express Route */}
      <Section title="Express Route (customers.js)" color="text-red-600">
        <CodeBlock>
{`const express = require("express");
const { Parser } = require("json2csv");
const router = express.Router();

// Mock data (replace with DB data)
const customers = [
  { id: 1, name: "John Doe", email: "john@example.com", mobile: "1234567890" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", mobile: "9876543210" }
];

router.get("/export", (req, res) => {
  try {
    const fields = ["id", "name", "email", "mobile"];
    const parser = new Parser({ fields });
    const csv = parser.parse(customers);

    res.header("Content-Type", "text/csv");
    res.attachment("customers.csv");
    return res.send(csv);
  } catch (err) {
    res.status(500).send("Error generating CSV");
  }
});

module.exports = router;`}
        </CodeBlock>
      </Section>

      {/* Step 3: Example API Endpoint */}
      <Section title="Example API Endpoint" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li>
            <code className="bg-gray-100 px-1 rounded">
              GET http://localhost:7070/customers/export
            </code>
          </li>
          <li>Exports all customers to CSV file</li>
        </ul>
      </Section>

      {/* Step 4: Output Sample */}
      <Section title="Output (Sample CSV File)" color="text-purple-600">
        <CodeBlock>
{`id,name,email,mobile
1,John Doe,john@example.com,1234567890
2,Jane Smith,jane@example.com,9876543210`}
        </CodeBlock>
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
      <code>{children}</code>
    </pre>
  );
}

export default Nodeexportcsv;
