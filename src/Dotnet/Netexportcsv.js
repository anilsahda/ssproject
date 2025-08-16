function Netexportcsv() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Export CSV in .Net Core API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Step-by-step guide to implementing <strong>CSV Export functionality</strong> for the <strong>Customer</strong> entity in .NET Core with SQL Server.
        </p>
      </header>

      {/* Step 1: Controller */}
      <Section title="Controller (CustomersController.cs)" color="text-red-600">
        <CodeBlock>
{`[Route("api/[controller]")]
[ApiController]
public class CustomersController : ControllerBase
{
    private readonly AppDbContext _context;

    public CustomersController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("export")]
    public IActionResult ExportCsv()
    {
        var csv = new StringBuilder();
        csv.AppendLine("Id, FirstName, Email, Mobile");

        var students = _context.Students.ToList();

        foreach (var student in students)
        {
            csv.AppendLine($"{student.Id}, {student.FirstName}, {student.Email}, {student.Mobile}");
        }

        var bytes = Encoding.UTF8.GetBytes(csv.ToString());
        return File(bytes, "text/csv", "students.csv");
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 5: API Endpoint */}
      <Section title="Example API Endpoint" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/customers/ExportCsv</code> – Exports all customers to CSV file</li>
        </ul>
      </Section>

      {/* Step 6: Output */}
      <Section title="Output (Sample CSV File)" color="text-purple-600">
        <CodeBlock>
{`Id,Name,Email,Mobile
1,John Doe,john@example.com,1234567890
2,Jane Smith,jane@example.com,9876543210`}
        </CodeBlock>
      </Section>
    </div>
  );
}

/* Reusable Section Component */
function Section({ title, color, children }) {
  return (<section><div className="flex items-center mb-2"><strong className={`${color}`}>{title}</strong></div>{children}</section>);
}

/* Reusable Code Block Component */
function CodeBlock({ children }) {
  return (<pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5"><code>{children}</code></pre>);
}

export default Netexportcsv;