function Netemployee() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Employee CRUD Operation using Interface</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing CRUD functionality for the <strong>Employee</strong> entity in .NET Core with SQL Server.
        </p>
      </header>

      {/* Step 1: SQL Table */}
      <Section title="SQL Table" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE Employee 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Position NVARCHAR(100) NOT NULL,
    Salary decimal(10,2) NOT NULL,    
);`}
        </CodeBlock>
      </Section>

      {/* Step 2: Model */}
      <Section title="Model (Employee.cs)" color="text-green-600">
        <CodeBlock>
{`public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Position { get; set; }
    public decimal Salary { get; set; }
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

      {/* Step 5: Model */}
      <Section title="Interface (IEmployee.cs)" color="text-green-600">
        <CodeBlock>
{`public class IEmployee
{
    List<Employee> GetAllEmployee();
    Employee GetEmployeeById(int id);
    bool AddEmployee(Employee employee);
    bool UpdateEmployee(Employee employee);
    bool DeleteEmployeeById(int id);
}`}
        </CodeBlock>
      </Section>

      {/* Step 6: Model */}
      <Section title="Repository (EmployeeRepository.cs)" color="text-green-600">
        <CodeBlock>
{`public class EmployeeRepository : IEmployee
{
    private readonly AppDbContext _context;
    public EmployeeRepository(AppDbContext context)
    {
        _context = context;
    }

    public List<Employee> GetAllEmployee()
    {
        return _context.Employees.ToList();
    }

    public Employee GetEmployeeById(int id)
    {
        return _context.Employees.Find(id);
    }

    public bool AddEmployee(Employee employee)
    {
        _context.Employees.Add(employee);
        _context.SaveChanges();
        return true;
    }

    public bool UpdateEmployee(Employee employee)
    {
        _context.Employees.Update(employee);
        _context.SaveChanges();
        return true;
    }

    public bool DeleteEmployeeById(int id)
    {
        _context.Employees.Remove(_context.Employees.Find(id));
        _context.SaveChanges();
        return true;
    }
}`}
        </CodeBlock>
      </Section>      

      {/* Step 7: Controller */}
      <Section title="Controller (EmployeesController.cs)" color="text-red-600">
        <CodeBlock>
{`[Route("api/[controller]")]
[ApiController]
public class EmployeesController : ControllerBase
{
    private readonly IEmployee _employee;
    public EmployeesController(IEmployee employee)
    {
        _employee = employee;
    }

    [HttpGet]
    public IActionResult GetAllEmployee()
    {
        return Ok(_employee.GetAllEmployee());
    }

    [HttpGet]
    public IActionResult GetEmployeeById(int id)
    {
        return Ok(_employee.GetEmployeeById(id));
    }

    [HttpPost]
    public IActionResult AddEmployee([FromBody] Employee employee)
    {
        return Ok(_employee.AddEmployee(employee));
    }

    [HttpPut("{id}")]
    public IActionResult UpdateEmployee([FromBody] Employee employee)
    {
        return Ok(_employee.UpdateEmployee(employee));
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteEmployeeById(int id)
    {
        return Ok(_employee.DeleteEmployeeById(id));
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 8: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/employees</code> – Retrieves all employees</li>
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/employees/{"{id}"}</code> – Retrieves a employee by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST https://localhost:7070/api/employees</code> – Adds a new employees</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT https://localhost:7070/api/employees</code> – Updates an existing employees</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE https://localhost:7070/api/employees/{"{id}"}</code> – Deletes a employees</li>
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
      <code>{children}</code>
    </pre>
  );
}

export default Netemployee;