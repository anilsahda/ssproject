import React from "react";

function Netrepositorydesignpattern() {
  const codeStyle = "bg-gray-100 p-3 rounded my-2 overflow-x-auto text-sm";

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-gray-800 font-sans space-y-6">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-2xl font-bold text-indigo-700">Repository Design Pattern</h1>
      </header>

      {/* Overview */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Overview</h2>
        <p>
          The Repository Pattern in Onion Architecture decouples data access from business logic,
          enables easy unit testing via interfaces, and centralizes CRUD operations using a generic repository.
        </p>
      </section>

      {/* Folder Structure */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Folder Structure</h2>
        <pre className={codeStyle}>
{`/YourProject
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
└── Program.cs`}
        </pre>
      </section>

      {/* Core Layer */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Core Layer</h2>

        <h3 className="font-semibold">Entity</h3>
        <pre className={codeStyle}>
{`public class Employee
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
}`}
        </pre>

        <h3 className="font-semibold">Generic Repository Interface</h3>
        <pre className={codeStyle}>
{`public interface IRepository<T> where T : class
{
    Task<IEnumerable<T>> GetAllAsync();
    Task<T> GetByIdAsync(int id);
    Task AddAsync(T entity);
    void Update(T entity);
    void Delete(T entity);
    Task SaveAsync();
}`}
        </pre>

        <h3 className="font-semibold">Specific Repository Interface</h3>
        <pre className={codeStyle}>
{`public interface IEmployeeRepository : IRepository<Employee>
{
    Task<Employee> GetByEmailAsync(string email);
}`}
        </pre>
      </section>

      {/* Infrastructure Layer */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Infrastructure Layer</h2>

        <h3 className="font-semibold">DbContext</h3>
        <pre className={codeStyle}>
{`public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options) { }

    public DbSet<Employee> Employees { get; set; }
}`}
        </pre>

        <h3 className="font-semibold">Generic Repository</h3>
        <pre className={codeStyle}>
{`public class Repository<T> : IRepository<T> where T : class
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
}`}
        </pre>

        <h3 className="font-semibold">Specific Repository</h3>
        <pre className={codeStyle}>
{`public class EmployeeRepository : Repository<Employee>, IEmployeeRepository
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
}`}
        </pre>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Summary</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Generic Repository (Repository&lt;T&gt;) handles standard CRUD.</li>
          <li>Specific repositories provide custom queries like GetByEmailAsync.</li>
          <li>Core layer contains interfaces and entities only.</li>
          <li>Infrastructure implements DbContext and repositories.</li>
          <li>API layer depends only on interfaces, following dependency inversion.</li>
        </ul>
      </section>
    </div>
  );
}

export default Netrepositorydesignpattern;
