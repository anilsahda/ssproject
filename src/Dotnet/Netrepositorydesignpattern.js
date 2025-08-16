import React from "react";

function Netrepositorydesignpattern() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Repository Design Pattern in .NET Core</h1>
        <p className="text-gray-500 text-xs mt-1">
          Full example using Repository Pattern in .NET Core with generic and specific repositories.
        </p>
      </header>

      {/* Step 1: Folder Structure */}
      <Section title="Step 1: Project Folder Structure" color="text-yellow-600">
        <CodeBlock>{`/YourProject
├── Core
│   ├── Entities/Employee.cs
│   └── Interfaces/IRepository.cs, IEmployeeRepository.cs
├── Infrastructure
│   ├── Data/ApplicationDbContext.cs
│   └── Repositories/Repository.cs, EmployeeRepository.cs
├── Application (Optional)
│   └── EmployeeService.cs
├── API
│   └── Controllers/EmployeeController.cs
└── Program.cs`}</CodeBlock>
      </Section>

      {/* Step 2: Core Layer */}
      <Section title="Step 2: Core Layer" color="text-green-600">
        <h3 className="font-semibold">Entity</h3>
        <CodeBlock>{`public class Employee
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
}`}</CodeBlock>

        <h3 className="font-semibold">Generic Repository Interface</h3>
        <CodeBlock>{`public interface IRepository<T> where T : class
{
    Task<IEnumerable<T>> GetAllAsync();
    Task<T> GetByIdAsync(int id);
    Task AddAsync(T entity);
    void Update(T entity);
    void Delete(T entity);
    Task SaveAsync();
}`}</CodeBlock>

        <h3 className="font-semibold">Specific Repository Interface</h3>
        <CodeBlock>{`public interface IEmployeeRepository : IRepository<Employee>
{
    Task<Employee> GetByEmailAsync(string email);
}`}</CodeBlock>
      </Section>

      {/* Step 3: Infrastructure Layer */}
      <Section title="Step 3: Infrastructure Layer" color="text-purple-600">
        <h3 className="font-semibold">DbContext</h3>
        <CodeBlock>{`public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options) { }

    public DbSet<Employee> Employees { get; set; }
}`}</CodeBlock>

        <h3 className="font-semibold">Generic Repository</h3>
        <CodeBlock>{`public class Repository<T> : IRepository<T> where T : class
{
    private readonly ApplicationDbContext _context;
    private readonly DbSet<T> _dbSet;

    public Repository(ApplicationDbContext context)
    {
        _context = context;
        _dbSet = context.Set<T>();
    }

    public async Task<IEnumerable<T>> GetAllAsync() => await _dbSet.ToListAsync();
    public async Task<T> GetByIdAsync(int id) => await _dbSet.FindAsync(id);
    public async Task AddAsync(T entity) => await _dbSet.AddAsync(entity);
    public void Update(T entity) => _dbSet.Update(entity);
    public void Delete(T entity) => _dbSet.Remove(entity);
    public async Task SaveAsync() => await _context.SaveChangesAsync();
}`}</CodeBlock>

        <h3 className="font-semibold">Specific Repository</h3>
        <CodeBlock>{`public class EmployeeRepository : Repository<Employee>, IEmployeeRepository
{
    private readonly ApplicationDbContext _context;

    public EmployeeRepository(ApplicationDbContext context) : base(context)
    {
        _context = context;
    }

    public async Task<Employee> GetByEmailAsync(string email)
    {
        return await _context.Employees.FirstOrDefaultAsync(e => e.Email == email);
    }
}`}</CodeBlock>
      </Section>

      {/* Step 4: Summary */}
      <Section title="Step 4: Summary" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Generic Repository (Repository&lt;T&gt;) handles standard CRUD operations.</li>
          <li>Specific repositories provide custom queries like GetByEmailAsync.</li>
          <li>Core layer contains entities and interfaces only.</li>
          <li>Infrastructure implements DbContext and repositories.</li>
          <li>API layer depends only on interfaces, following dependency inversion.</li>
        </ul>
      </Section>

    </div>
  );
}

/* Section Component */
function Section({ title, color, children }) {
  return (
    <section className="space-y-2">
      <div className="flex items-center mb-2">
        <strong className={`${color}`}>{title}</strong>
      </div>
      {children}
    </section>
  );
}

/* Code Block Component */
function CodeBlock({ children }) {
  return (
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">
      {children}
    </pre>
  );
}

export default Netrepositorydesignpattern;
