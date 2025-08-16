function Netmultiselectdropdown() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Employee CRUD Operation</h1>
        <p className="text-gray-500 text-xs mt-1">
          Step-by-step guide to implementing CRUD functionality for the <strong>Employee</strong> entity in .NET Core with SQL Server.
        </p>
      </header>

      {/* Step 1: SQL Table */}
      <Section title="SQL Table" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE Employee (
    Id INT PRIMARY KEY IDENTITY(1,1),
    FirstName NVARCHAR(100) NOT NULL,
    MiddleName NVARCHAR(100),
    LastName NVARCHAR(100) NOT NULL,
    Address NVARCHAR(250),
    Email NVARCHAR(150),
    Mobile NVARCHAR(20),
    CountryId INT NOT NULL,
    StateId INT NOT NULL,
    DistrictId INT NOT NULL,
    GenderId INT NOT NULL
);`}
        </CodeBlock>
      </Section>

      {/* Step 2: Model */}
      <Section title="Model (Employee.cs)" color="text-green-600">
        <CodeBlock>
{`public class Employee
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string MiddleName { get; set; }
    public string LastName { get; set; }
    public string Address { get; set; }
    public string Email { get; set; }
    public string Mobile { get; set; }
    public int CountryId { get; set; }
    public int StateId { get; set; }
    public int DistrictId { get; set; }
    public int GenderId { get; set; }
}`}
        </CodeBlock>
      </Section>

      {/* Step 3: DbContext */}
      <Section title="DbContext (AppDbContext.cs)" color="text-yellow-600">
        <CodeBlock>
{`public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<Employee> Employees { get; set; }
}`}
        </CodeBlock>
      </Section>

      {/* Step 4: EF Migrations */}
      <Section title="Entity Framework Migrations" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Open <b>Package Manager Console</b></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">Add-Migration EmployeeTable</code></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">Update-Database</code></li>
        </ul>
      </Section>

      {/* Step 5: Controller */}
      <Section title="Controller (EmployeesController.cs)" color="text-red-600">
        <CodeBlock>
{`[Route("api/[controller]")]
[ApiController]
public class EmployeesController : ControllerBase
{
    private readonly AppDbContext _context;

    public EmployeesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IEnumerable<Employee> Get() => _context.Employees.ToList();

    [HttpGet("{id}")]
    public Employee Get(int id) => _context.Employees.FirstOrDefault(e => e.Id == id);

    [HttpPost]
    public void Post(Employee employee)
    {
        _context.Employees.Add(employee);
        _context.SaveChanges();
    }

    [HttpPut("{id}")]
    public void Put(int id, Employee employee)
    {
        _context.Entry(employee).State = EntityState.Modified;
        _context.SaveChanges();
    }

    [HttpDelete("{id}")]
    public void Delete(int id)
    {
        var employee = _context.Employees.FirstOrDefault(e => e.Id == id);
        _context.Employees.Remove(employee);
        _context.SaveChanges();
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 6: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET /api/employees</code> – Retrieves all employees</li>
          <li><code className="bg-gray-100 px-1 rounded">GET /api/employees/{"{id}"}</code> – Retrieves an employee by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST /api/employees</code> – Adds a new employee</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT /api/employees/{"{id}"}</code> – Updates an existing employee</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE /api/employees/{"{id}"}</code> – Deletes an employee</li>
        </ul>
      </Section>
    </div>
  );
}

/* Reusable Section Component */
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

/* Reusable Code Block Component */
function CodeBlock({ children }) {
  return (
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">
      {children}
    </pre>
  );
}

export default Netmultiselectdropdown;
