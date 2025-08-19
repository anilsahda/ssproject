function Javaexportcsv() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-green-700">Export CSV in Spring Boot API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing <strong>CSV Export functionality</strong> for the <strong>Customer</strong> entity in Spring Boot with MySQL.
        </p>
      </header>

      {/* Step 1: Controller */}
      <Section title="Controller (CustomerController.java)" color="text-red-600">
        <CodeBlock>
{`@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("/export")
    public void exportToCSV(HttpServletResponse response) throws IOException {
        response.setContentType("text/csv");
        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=customers.csv";
        response.setHeader(headerKey, headerValue);

        List<Customer> customers = customerRepository.findAll();

        PrintWriter writer = response.getWriter();
        writer.println("Id,Name,Email,Mobile");

        for (Customer customer : customers) {
            writer.println(customer.getId() + "," 
                         + customer.getName() + "," 
                         + customer.getEmail() + "," 
                         + customer.getMobile());
        }

        writer.flush();
        writer.close();
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 2: API Endpoint */}
      <Section title="Example API Endpoint" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8080/api/customers/export</code></li>
          <li>Exports all customers to a CSV file</li>
        </ul>
      </Section>

      {/* Step 3: Sample CSV Output */}
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

export default Javaexportcsv;
