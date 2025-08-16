function Netimageupload() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Image Upload in .Net Core API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Step-by-step guide to implementing CRUD functionality for the <strong>Customer</strong> entity in .NET Core with SQL Server.
        </p>
      </header>

      {/* Step 1: SQL Table */}
      <Section title="SQL Table" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE Customer 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(150) NOT NULL,
    Email NVARCHAR(150),
    Mobile NVARCHAR(20),
    Image NVARCHAR(250)
);`}
        </CodeBlock>
      </Section>

      {/* Step 2: Model */}
      <Section title="Model (Customer.cs)" color="text-green-600">
        <CodeBlock>
{`public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Mobile { get; set; }
    public string Image { get; set; }
}`}
        </CodeBlock>
      </Section>

      {/* Step 3: DbContext */}
      <Section title="DbContext (AppDbContext.cs)" color="text-yellow-600">
        <CodeBlock>
{`public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<Customer> Customers { get; set; }
}`}
        </CodeBlock>
      </Section>

      {/* Step 4: DTO */}
      <Section title="DTO (CustomerDTO.cs)" color="text-green-600">
        <CodeBlock>
{`public class CustomerDTO
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Mobile { get; set; }
    public IFormFile Image { get; set; }
}`}
        </CodeBlock>
      </Section>

      {/* Step 5: EF Migrations */}
      <Section title="Entity Framework Migrations" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Open <b>Package Manager Console</b></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">Add-Migration CustomerTable</code></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">Update-Database</code></li>
        </ul>
      </Section>

      {/* Step 6: Controller */}
      <Section title="Controller (CustomersController.cs)" color="text-red-600">
        <CodeBlock>
{`[Route("api/[controller]")]
[ApiController]
public class CustomersController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IWebHostEnvironment _env;

    public CustomersController(AppDbContext context, IWebHostEnvironment env)
    {
        _context = context;
        _env = env;
    }

    [HttpGet]
    public IActionResult GetCustomers()
    {
        return Ok(_context.Customers.ToList());
    }

    [HttpGet("{id}")]
    public IActionResult GetCustomerById(int id)
    {
        var customer = _context.Customers.Find(id);
        if (customer == null) return NotFound();
        return Ok(customer);
    }

    [HttpPost("AddCustomer")]
    public async Task<IActionResult> AddCustomer([FromForm] CustomerDTO custDto)
    {
        string fileName = null;

        if (custDto.Image != null)
        {
            fileName = $"{Guid.NewGuid()}{Path.GetExtension(custDto.Image.FileName)}";
            var path = Path.Combine(_env.WebRootPath, "api/Uploads", fileName);
            Directory.CreateDirectory(Path.GetDirectoryName(path));
            using var stream = new FileStream(path, FileMode.Create);
            await custDto.Image.CopyToAsync(stream);
        }

        var customer = new Customer
        {
            Name = custDto.Name,
            Email = custDto.Email,
            Mobile = custDto.Mobile,
            Image = fileName
        };

        _context.Customers.Add(customer);
        await _context.SaveChangesAsync();

        return Ok(customer);
    }

    [HttpPut("UpdateCustomer")]
    public async Task<IActionResult> UpdateCustomer([FromForm] CustomerDTO custDto)
    {
        var customer = await _context.Customers.FindAsync(custDto.Id);
        if (customer == null) return NotFound();

        customer.Name = custDto.Name;
        customer.Email = custDto.Email;
        customer.Mobile = custDto.Mobile;

        if (custDto.Image != null)
        {
            if (!string.IsNullOrEmpty(customer.Image))
            {
                string oldPath = Path.Combine(_env.WebRootPath, "api/Uploads", customer.Image);
                if (System.IO.File.Exists(oldPath))
                {
                    System.IO.File.Delete(oldPath);
                }
            }

            var fileName = $"{Guid.NewGuid()}{Path.GetExtension(custDto.Image.FileName)}";
            var path = Path.Combine(_env.WebRootPath, "api/Uploads", fileName);
            Directory.CreateDirectory(Path.GetDirectoryName(path));
            using var stream = new FileStream(path, FileMode.Create);
            await custDto.Image.CopyToAsync(stream);

            customer.Image = fileName;
        }

        _context.Customers.Update(customer);
        await _context.SaveChangesAsync();

        return Ok(customer);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteCustomer(int id)
    {
        var customer = _context.Customers.Find(id);
        if (customer == null) return NotFound();

        if (!string.IsNullOrEmpty(customer.Image))
        {
            string filePath = Path.Combine(_env.WebRootPath, "api/Uploads", customer.Image);
            if (System.IO.File.Exists(filePath))
            {
                System.IO.File.Delete(filePath);
            }
        }

        _context.Customers.Remove(customer);
        _context.SaveChanges();
        return Ok("Deleted successfully");
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 7: Program.cs */}
      <Section title="Program.cs" color="text-green-600">
        <CodeBlock>
{`app.UseStaticFiles();`}
        </CodeBlock>
      </Section>

      {/* Step 8: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/customers</code> – Retrieves all customers</li>
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/customers/{"{id}"}</code> – Retrieves a customer by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST https://localhost:7070/api/customers</code> – Adds a new customer</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT https://localhost:7070/api/customers</code> – Updates an existing customer</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE https://localhost:7070/api/customers/{"{id}"}</code> – Deletes a customer</li>
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

export default Netimageupload;
