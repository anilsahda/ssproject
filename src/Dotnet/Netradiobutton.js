function Netradiobutton() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Radio Button Integration in .Net Core API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Step-by-step guide to implementing CRUD functionality for the <strong>Student</strong> entity in .NET Core with SQL Server.
        </p>
      </header>

      {/* Step 1: SQL Table */}
      <Section title="SQL Table" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE Student 
(
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

      {/* Step 2: Model */}
      <Section title="Model (Student.cs)" color="text-green-600">
        <CodeBlock>
{`public class Student
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

      {/* Step 3: DbContext */}
      <Section title="DbContext (AppDbContext.cs)" color="text-yellow-600">
        <CodeBlock>
{`public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<Student> Students { get; set; }
}`}
        </CodeBlock>
      </Section>

      {/* Step 4: EF Migrations */}
      <Section title="Entity Framework Migrations" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Open <b>Package Manager Console</b></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">Add-Migration StudentTable</code></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">Update-Database</code></li>
        </ul>
      </Section>

      {/* Step 5: Controller */}
      <Section title="Controller (StudentsController.cs)" color="text-red-600">
        <CodeBlock>
{`[Route("api/[controller]")]
[ApiController]
public class StudentsController : ControllerBase
{
    private readonly AppDbContext _context;
    public StudentsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetStudents()
    {
        return Ok(_context.Students.ToList());
    }

    [HttpPost]
    public IActionResult AddStudent([FromBody] Student student)
    {
        _context.Students.Add(student);
        _context.SaveChanges();
        return Ok("Student added successfully!");
    }

    [HttpPut]
    public IActionResult UpdateStudent([FromBody] Student student)
    {
        _context.Students.Update(student);
        _context.SaveChanges();
        return Ok("Student updated successfully!");
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteStudent(int id)
    {
        var student = _context.Students.Find(id);
        _context.Students.Remove(student);
        _context.SaveChanges();
        return Ok("Student deleted successfully!");
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 6: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/students</code> – Retrieves all students</li>
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/students/{"{id}"}</code> – Retrieves a student by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST https://localhost:7070/api/students</code> – Adds a new student</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT https://localhost:7070/api/students</code> – Updates an existing student</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE https://localhost:7070/api/students/{"{id}"}</code> – Deletes a student</li>
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

export default Netradiobutton;
