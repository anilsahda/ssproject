function Netmultiselectdropdown() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Multiselect Dropdown Integration in .Net Core API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Step-by-step guide to implementing CRUD functionality for the <strong>Employee</strong> entity in .NET Core with SQL Server.
        </p>
      </header>

      {/* Step 1: SQL Table */}
      <Section title="SQL Table" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE Employee (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(150),
    Mobile NVARCHAR(20),
    CountryId INT NOT NULL,
    StateId INT NOT NULL,
    DistrictId INT NOT NULL,
    GenderId INT NOT NULL
);`}
        </CodeBlock>
      </Section>

      <Section title="SQL Table" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE EmployeeLanguages 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    EmployeeId INT NOT NULL
    LanguageId INT NOT NULL
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
    public string Email { get; set; }
    public string Mobile { get; set; }
    public int CountryId { get; set; }
    public int StateId { get; set; }
    public int DistrictId { get; set; }
    public int GenderId { get; set; }
}`}
        </CodeBlock>
      </Section>

      <Section title="Model (Language.cs)" color="text-green-600">
        <CodeBlock>
{`public class EmployeeLanguage
{
    public int Id { get; set; }
    public int EmployeeId { get; set; }
    public int LanguageId { get; set; }
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
    public DbSet<EmployeeLanguage> EmployeeLanguages { get; set; }    
}`}
        </CodeBlock>
      </Section>

      {/* Step 4: DTO */}
      <Section title="Model (Employee.cs)" color="text-green-600">
        <CodeBlock>
{`public class EmployeeDTO
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Mobile { get; set; }
    public int CountryId { get; set; }
    public int StateId { get; set; }
    public int DistrictId { get; set; }
    public int GenderId { get; set; }
    public List<int> Languages { get; set; }
}`}
        </CodeBlock>
      </Section>

      {/* Step 5: EF Migrations */}
      <Section title="Entity Framework Migrations" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Open <b>Package Manager Console</b></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">Add-Migration EmployeeAndEmployeeLanguageTable</code></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">Update-Database</code></li>
        </ul>
      </Section>

      {/* Step 6: Controller */}
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
    public IActionResult GetEmployees()
    {
        var employees = _context.Employees.Select(e => new
        {
            e.Id,
            e.Name,
            e.Email,
            e.Mobile,
            e.CountryId,
            e.StateId,
            e.DistrictId,
            e.GenderId,
            Languages = _context.EmployeeLanguages.Where(x => x.EmployeeId == e.Id).ToList()
        }).ToList();

        return Ok(employees);
    }

    [HttpGet("{id}")]
    public IActionResult GetEmployee(int id)
    {
        var employee = _context.Employees.Where(e => e.Id == id).Select(e => new
        {
            e.Id,
            e.Name,
            e.Email,
            e.Mobile,
            e.CountryId,
            e.StateId,
            e.DistrictId,
            e.GenderId,
            Languages = _context.EmployeeLanguages.Where(x=>x.EmployeeId == id).ToList()
        }).FirstOrDefault();

        return Ok(employee);
    }

    [HttpPost]
    public IActionResult AddEmployee([FromBody] EmployeeDTO employeedto)
    {
        var employee = new Employee
        {
            Name = employeedto.Name,
            Email = employeedto.Email,
            Mobile = employeedto.Mobile,
            CountryId = employeedto.CountryId,
            StateId = employeedto.StateId,
            DistrictId = employeedto.DistrictId,
            GenderId = employeedto.GenderId
        };

        _context.Employees.Add(employee);
        _context.SaveChanges();

        foreach (var langId in employeedto.Languages)
        {
            _context.EmployeeLanguages.Add(new EmployeeLanguage
            {
                EmployeeId = employee.Id,
                LanguageId = langId
            });
        }
        _context.SaveChanges();
        return Ok(employee);
    }

    [HttpPut]
    public IActionResult UpdateEmployee(EmployeeDTO employeedto)
    {
        var employee = new Employee();
        employee.Id = employeedto.Id;
        employee.Name = employeedto.Name;
        employee.Email = employeedto.Email;
        employee.Mobile = employeedto.Mobile;
        employee.CountryId = employeedto.CountryId;
        employee.StateId = employeedto.StateId;
        employee.DistrictId = employeedto.DistrictId;
        employee.GenderId = employeedto.GenderId;

        _context.Employees.Update(employee);
        _context.SaveChanges();

        var existingLanguages = _context.EmployeeLanguages.Where(el => el.EmployeeId == employeedto.Id).ToList();
        _context.EmployeeLanguages.RemoveRange(existingLanguages);

        foreach (var langId in employeedto.Languages)
        {
            _context.EmployeeLanguages.Add(new EmployeeLanguage
            {
                EmployeeId = employeedto.Id,
                LanguageId = langId
            });
        }

        _context.SaveChanges();
        return Ok("Data updated successfully!");
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteEmployeeById(int id)
    {
        var employee = _context.Employees.Find(id);
        var employeelanguages = _context.EmployeeLanguages.ToList();
        _context.EmployeeLanguages.RemoveRange(employeelanguages);
        _context.Employees.Remove(employee);
        _context.SaveChanges();
        return Ok("Data deleted successfully!");
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 7: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/employees</code> – Retrieves all employees</li>
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/employees/{"{id}"}</code> – Retrieves an employee by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST https://localhost:7070/api/employees</code> – Adds a new employee</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT https://localhost:7070/api/employees</code> – Updates an existing employee</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE https://localhost:7070/api/employees/{"{id}"}</code> – Deletes an employee</li>
        </ul>
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
  return (<pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">{children}</pre>);
}

export default Netmultiselectdropdown;
