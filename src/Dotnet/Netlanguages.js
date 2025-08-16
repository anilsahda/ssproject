import React from "react";

function Netlanguages() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Language CRUD Operation</h1>
        <p className="text-gray-500 text-xs mt-1">
          A step-by-step guide to implementing CRUD functionality for the <strong>Language</strong> entity in .NET Core with SQL Server.
        </p>
      </header>

      {/* Step 1: SQL Table */}
      <Section title="SQL Table" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE Language 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(50) NOT NULL
);`}
        </CodeBlock>
      </Section>

      {/* Step 2: Model */}
      <Section title="Model (Language.cs)" color="text-green-600">
        <CodeBlock>
{`public class Language
{
    public int Id { get; set; }
    public string Name { get; set; }
}`}
        </CodeBlock>
      </Section>

      {/* Step 3: DbContext */}
      <Section title="DbContext (AppDbContext.cs)" color="text-yellow-600">
        <CodeBlock>
{`public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<Language> Languages { get; set; }
}`}
        </CodeBlock>
      </Section>

      {/* Step 4: EF Migrations */}
      <Section title="Entity Framework Migrations" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Open <b>Package Manager Console</b></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">Add-Migration LanguageTable</code></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">Update-Database</code></li>
        </ul>
      </Section>

      {/* Step 5: Controller */}
      <Section title="Controller (LanguagesController.cs)" color="text-red-600">
        <CodeBlock>
{`[Route("api/[controller]")]
[ApiController]
public class LanguagesController : ControllerBase
{
    private readonly AppDbContext _context;

    public LanguagesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetLanguages()
    {
        return Ok(_context.Languages.ToList());
    }

    [HttpGet("{id}")]
    public IActionResult GetLanguage(int id)
    {
        return Ok(_context.Languages.Find(id));
    }

    [HttpPut]
    public IActionResult UpdateLanguage(Language language)
    {
        _context.Languages.Update(language);
        _context.SaveChanges();
        return Ok("Data updated successfully!");
    }

    [HttpPost]
    public IActionResult AddLanguage(Language language)
    {
        _context.Languages.Add(language);
        _context.SaveChanges();
        return Ok("Data added successfully!");
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteLanguageById(int id)
    {
        var language = _context.Languages.Find(id);
        _context.Languages.Remove(language);
        _context.SaveChanges();
        return Ok("Data deleted successfully!");
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 6: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/Languages</code> – Retrieves all languages</li>
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/Languages/{"{id}"}</code> – Retrieves a language by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST https://localhost:7070/api/Languages</code> – Adds a new language</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT https://localhost:7070/api/Languages</code> – Updates an existing language</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE https://localhost:7070/api/Languages/{"{id}"}</code> – Deletes a language</li>
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

export default Netlanguages;
