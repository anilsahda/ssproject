import React from "react";

function Netstate() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">State CRUD Operation</h1>
        <p className="text-gray-500 text-xs mt-1">
          Step-by-step guide to implementing CRUD functionality for the <strong>State</strong> entity in .NET Core with SQL Server.
        </p>
      </header>

      {/* Step 1: SQL Table */}
      <Section title="SQL Table" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE State 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    CountryId INT NOT NULL
);`}
        </CodeBlock>
      </Section>

      {/* Step 2: Model */}
      <Section title="Model (State.cs)" color="text-green-600">
        <CodeBlock>
{`public class State
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int CountryId { get; set; }
}`}
        </CodeBlock>
      </Section>

      {/* Step 3: DbContext */}
      <Section title="DbContext (AppDbContext.cs)" color="text-yellow-600">
        <CodeBlock>
{`public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<State> States { get; set; }
}`}
        </CodeBlock>
      </Section>

      {/* Step 4: EF Migrations */}
      <Section title="Entity Framework Migrations" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Open <b>Package Manager Console</b></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">Add-Migration StateTable</code></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">Update-Database</code></li>
        </ul>
      </Section>

      {/* Step 5: Controller */}
      <Section title="Controller (StatesController.cs)" color="text-red-600">
        <CodeBlock>
{`[Route("api/[controller]")]
[ApiController]
public class StatesController : ControllerBase
{
    private readonly AppDbContext _context;

    public StatesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetStates()
    {
        return Ok(_context.States.ToList());
    }

    [HttpGet("{id}")]
    public IActionResult GetState(int id)
    {
        return Ok(_context.States.Find(id));
    }

    [HttpPut]
    public IActionResult UpdateState(State state)
    {
        _context.States.Update(state);
        _context.SaveChanges();
        return Ok("Data updated successfully!");
    }

    [HttpPost]
    public IActionResult AddState(State state)
    {
        _context.States.Add(state);
        _context.SaveChanges();
        return Ok("Data added successfully!");
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteStateById(int id)
    {
        var state = _context.States.Find(id);
        _context.States.Remove(state);
        _context.SaveChanges();
        return Ok("Data deleted successfully!");
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 6: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/states</code> – Retrieves all states</li>
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/states/{"{id}"}</code> – Retrieves a state by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST https://localhost:7070/api/states</code> – Adds a new state</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT https://localhost:7070/api/states</code> – Updates an existing state</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE https://localhost:7070/api/states/{"{id}"}</code> – Deletes a state</li>
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

export default Netstate;
