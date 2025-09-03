import React from "react";

function Netcountry() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Country CRUD Operation</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing CRUD functionality for the <strong>Country</strong> entity in .NET Core with SQL Server.
        </p>
      </header>

      {/* Step 1: SQL Table */}
      <Section title="SQL Table" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE Country 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL
);`}
        </CodeBlock>
      </Section>

      {/* Step 2: Model */}
      <Section title="Model (Country.cs)" color="text-green-600">
        <CodeBlock>
{`public class Country
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
    public DbSet<Country> Countries { get; set; }
}`}
        </CodeBlock>
      </Section>

      {/* Step 4: EF Migrations */}
      <Section title="Entity Framework Migrations" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Open <b>Package Manager Console</b></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">Add-Migration CountryTable</code></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">Update-Database</code></li>
        </ul>
      </Section>

      {/* Step 5: Controller */}
      <Section title="Controller (CountriesController.cs)" color="text-red-600">
        <CodeBlock>
{`[Route("api/[controller]")]
[ApiController]
public class CountriesController : ControllerBase
{
    private readonly AppDbContext _context;

    public CountriesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetCountries()
    {
        return Ok(_context.Countries.ToList());
    }

    [HttpGet("{id}")]
    public IActionResult GetCountry(int id)
    {
        return Ok(_context.Countries.Find(id));
    }

    [HttpPut]
    public IActionResult UpdateCountry(Country country)
    {
        _context.Countries.Update(country);
        _context.SaveChanges();
        return Ok("Data updated successfully!");
    }

    [HttpPost]
    public IActionResult AddCountry(Country country)
    {
        _context.Countries.Add(country);
        _context.SaveChanges();
        return Ok("Data added successfully!");
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteCountryById(int id)
    {
        var country = _context.Countries.Find(id);
        _context.Countries.Remove(country);
        _context.SaveChanges();
        return Ok("Data deleted successfully!");
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 6: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/countries</code> – Retrieves all countries</li>
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/countries/{"{id}"}</code> – Retrieves a country by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST https://localhost:7070/api/countries</code> – Adds a new country</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT https://localhost:7070/api/countries</code> – Updates an existing country</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE https://localhost:7070/api/countries/{"{id}"}</code> – Deletes a country</li>
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

export default Netcountry;
