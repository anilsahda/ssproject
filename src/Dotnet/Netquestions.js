export default function Dotnetquestions() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📘 .NET Interview Questions & Answers</h2>

      {/* Question 1 */}
      <section>
        <b>1. What is .NET?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`.NET is a free, cross-platform, open-source developer platform by Microsoft for building web, desktop, 
mobile, cloud, and IoT applications. Example: You can create a web API using ASP.NET Core.`}
          </code>
        </pre>
      </section>

      {/* Question 2 */}
      <section>
        <b>2. What is CLR in .NET?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`CLR (Common Language Runtime) is the virtual machine component of .NET responsible for managing memory, 
thread execution, and garbage collection. 
Example: When a C# program runs, CLR executes the compiled IL (Intermediate Language).`}
          </code>
        </pre>
      </section>

      {/* Question 3 */}
      <section>
        <b>3. What is CTS in .NET?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`CTS (Common Type System) defines how types are declared, used, and managed in the runtime.
Example: int in C# is interoperable with Integer in VB.NET because of CTS.`}
          </code>
        </pre>
      </section>

      {/* Question 4 */}
      <section>
        <b>4. What is CLS in .NET?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`CLS (Common Language Specification) is a set of rules that ensures interoperability between .NET language.
Example: A method defined in C# can be used in VB.NET if it follows CLS rules.`}
          </code>
        </pre>
      </section>

      {/* Question 5 */}
      <section>
        <b>5. What is Managed vs Unmanaged code?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Managed code runs under CLR and benefits from services like garbage collection.
Unmanaged code runs directly on Windows OS without CLR.
Example: C# code is managed, C++ code compiled as native exe is unmanaged.`}
          </code>
        </pre>
      </section>

      {/* Question 6 */}
      <section>
        <b>6. What is Garbage Collection (GC) in .NET?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`GC automatically frees memory occupied by objects no longer in use.
Example: 
MyClass obj = new MyClass();
obj = null; // GC will eventually release this memory.`}
          </code>
        </pre>
      </section>

      {/* Question 7 */}
      <section>
        <b>7. What is JIT Compilation?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`JIT (Just-In-Time) compiler converts IL code into machine code at runtime for execution.
Example: C# code compiled to IL is converted to x86 or x64 machine code by JIT.`}
          </code>
        </pre>
      </section>

      {/* Question 8 */}
      <section>
        <b>8. What is the difference between .NET Framework and .NET Core?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`.NET Framework: Windows-only, mature, supports desktop & web apps.
.NET Core: Cross-platform, lightweight, cloud-ready.
Example: ASP.NET Core web API can run on Windows, Linux, macOS.`}
          </code>
        </pre>
      </section>

      {/* Question 9 */}
      <section>
        <b>9. What is ASP.NET Core?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`ASP.NET Core is a cross-platform, high-performance framework for building modern web APIs and web apps.
Example: Create API using:
dotnet new webapi -n MyApi`}
          </code>
        </pre>
      </section>

      {/* Question 10 */}
      <section>
        <b>10. What is Middleware in ASP.NET Core?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Middleware are software components that handle requests/responses in the ASP.NET Core pipeline.
Example: app.UseAuthentication(), app.UseAuthorization(), app.UseCors().`}
          </code>
        </pre>
      </section>

      {/* Question 11 */}
      <section>
        <b>11. What is one to one relationship?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public UserProfile UserProfile { get; set; }
}

public class UserProfile
{
    public int Id { get; set; }
    public string Address { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }
}

public DbSet<User> Users { get; set; }
public DbSet<UserProfile> UserProfiles { get; set; }

protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<User>()
        .HasOne(u => u.UserProfile)
        .WithOne(p => p.User)
        .HasForeignKey<UserProfile>(p => p.UserId);
}`}
          </code>
        </pre>
      </section>

      {/* Question 12 */}
      <section>
        <b>12. What is one to many relationship?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`public class Category
{
    public int Id { get; set; }
    public string Name { get; set; }
    public ICollection<Product> Products { get; set; }
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int CategoryId { get; set; }  // FK
    public Category Category { get; set; }
}

public class AppDbContext : DbContext
{
    public DbSet<Category> Categories { get; set; }
    public DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>()
            .HasOne(p => p.Category)       // Each Product has one Category
            .WithMany(c => c.Products)     // Each Category has many Products
            .HasForeignKey(p => p.CategoryId);
    }
}`}
          </code>
        </pre>
      </section>      

      {/* Question 13 */}
      <section>
        <b>13. What is many to many relationship?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    public ICollection<Course> Courses { get; set; }
}

public class Course
{
    public int Id { get; set; }
    public string Title { get; set; }
    public ICollection<Student> Students { get; set; }
}

protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Student>()
        .HasMany(s => s.Courses)
        .WithMany(c => c.Students)
        .UsingEntity<Dictionary<string, object>>("StudentCourse",
            j => j.HasOne<Course>().WithMany().HasForeignKey("CourseId"),
            j => j.HasOne<Student>().WithMany().HasForeignKey("StudentId")
        );
}`}
          </code>
        </pre>
      </section>      

    </div>
  );
}
