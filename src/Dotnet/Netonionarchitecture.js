function Netonionarchitecture() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Onion Architecture in .NET Core API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Complete CRUD example for Student entity using Onion Architecture.
        </p>
      </header>

      {/* Step 1: Folder Structure */}
      <Section title="Step 1: Folder Structure" color="text-yellow-600">
        <CodeBlock>
{`Domain/
├─ Entities/
│   └─ Student.cs
├─ Enums/
│   └─ Gender.cs
└─ ValueObjects/
    └─ Address.cs

Application/
├─ Interfaces/
│   └─ IStudentRepository.cs
├─ DTOs/
│   └─ StudentDTO.cs
├─ Services/
│   └─ StudentService.cs

Infrastructure/
├─ Data/
│   └─ AppDbContext.cs
├─ Repositories/
│   └─ StudentRepository.cs

API/
├─ Controllers/
│   └─ StudentsController.cs
└─ Program.cs`} 
        </CodeBlock>
      </Section>

      {/* Step 2: Domain Layer */}
      <Section title="Step 2: Domain Layer" color="text-green-600">
        <CodeBlock>
{`// Domain/Entities/Student.cs
public class Student
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public Gender Gender { get; set; }
    public Address Address { get; set; }
}

// Domain/Enums/Gender.cs
public enum Gender
{
    Male,
    Female,
    Other
}

// Domain/ValueObjects/Address.cs
public class Address
{
    public string Street { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string ZipCode { get; set; }
}`} 
        </CodeBlock>
      </Section>

      {/* Step 3: Application Layer */}
      <Section title="Step 3: Application Layer" color="text-purple-600">
        <p className="text-gray-700">
          Interface and service for CRUD operations.
        </p>
        <CodeBlock>
{`// Application/Interfaces/IStudentRepository.cs
public interface IStudentRepository
{
    IEnumerable<Student> GetAll();
    Student GetById(int id);
    void Add(Student student);
    void Update(Student student);
    void Delete(int id);
}

// Application/DTOs/StudentDTO.cs
public class StudentDTO
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public Gender Gender { get; set; }
    public Address Address { get; set; }
}

// Application/Services/StudentService.cs
public class StudentService
{
    private readonly IStudentRepository _repository;
    public StudentService(IStudentRepository repository) => _repository = repository;

    public IEnumerable<StudentDTO> GetAllStudents() =>
        _repository.GetAll().Select(s => new StudentDTO {
            FirstName = s.FirstName,
            LastName = s.LastName,
            Gender = s.Gender,
            Address = s.Address
        });

    public StudentDTO GetStudentById(int id)
    {
        var s = _repository.GetById(id);
        return s == null ? null : new StudentDTO {
            FirstName = s.FirstName,
            LastName = s.LastName,
            Gender = s.Gender,
            Address = s.Address
        };
    }

    public void AddStudent(StudentDTO dto)
    {
        var student = new Student {
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            Gender = dto.Gender,
            Address = dto.Address
        };
        _repository.Add(student);
    }

    public void UpdateStudent(int id, StudentDTO dto)
    {
        var student = _repository.GetById(id);
        if(student == null) return;

        student.FirstName = dto.FirstName;
        student.LastName = dto.LastName;
        student.Gender = dto.Gender;
        student.Address = dto.Address;

        _repository.Update(student);
    }

    public void DeleteStudent(int id) => _repository.Delete(id);
}`} 
        </CodeBlock>
      </Section>

      {/* Step 4: Infrastructure Layer */}
      <Section title="Step 4: Infrastructure Layer" color="text-blue-600">
        <CodeBlock>
{`// Infrastructure/Data/AppDbContext.cs
public class AppDbContext : DbContext
{
    public DbSet<Student> Students { get; set; }
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}
}

// Infrastructure/Repositories/StudentRepository.cs
public class StudentRepository : IStudentRepository
{
    private readonly AppDbContext _context;
    public StudentRepository(AppDbContext context) => _context = context;

    public IEnumerable<Student> GetAll() => _context.Students.ToList();
    public Student GetById(int id) => _context.Students.FirstOrDefault(s => s.Id == id);

    public void Add(Student student)
    {
        _context.Students.Add(student);
        _context.SaveChanges();
    }

    public void Update(Student student)
    {
        _context.Students.Update(student);
        _context.SaveChanges();
    }

    public void Delete(int id)
    {
        var student = _context.Students.FirstOrDefault(s => s.Id == id);
        if(student != null)
        {
            _context.Students.Remove(student);
            _context.SaveChanges();
        }
    }
}`} 
        </CodeBlock>
      </Section>

      {/* Step 5: API Layer */}
      <Section title="Step 5: API Layer" color="text-red-600">
        <CodeBlock>
{`// API/Controllers/StudentsController.cs
[ApiController]
[Route("api/[controller]")]
public class StudentsController : ControllerBase
{
    private readonly StudentService _service;
    public StudentsController(StudentService service) => _service = service;

    [HttpGet]
    public IActionResult Get() => Ok(_service.GetAllStudents());

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var student = _service.GetStudentById(id);
        if(student == null) return NotFound();
        return Ok(student);
    }

    [HttpPost]
    public IActionResult Add([FromBody] StudentDTO dto)
    {
        _service.AddStudent(dto);
        return Ok();
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, [FromBody] StudentDTO dto)
    {
        _service.UpdateStudent(id, dto);
        return Ok();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _service.DeleteStudent(id);
        return Ok();
    }
}

// API/Program.cs
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddScoped<IStudentRepository, StudentRepository>();
builder.Services.AddScoped<StudentService>();
builder.Services.AddControllers();
var app = builder.Build();
app.MapControllers();
app.Run();`} 
        </CodeBlock>
      </Section>

      {/* Step 6: Summary */}
      <Section title="Step 6: Summary" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Full CRUD (Create, Read, Update, Delete) example implemented using Onion Architecture.</li>
          <li>Domain layer contains entities and value objects.</li>
          <li>Application layer defines interfaces and services for business logic.</li>
          <li>Infrastructure layer implements repositories and handles DB operations.</li>
          <li>API layer exposes endpoints and uses services via DI.</li>
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
      {children}
    </pre>
  );
}

export default Netonionarchitecture;
