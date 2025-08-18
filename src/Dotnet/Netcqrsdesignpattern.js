function Netcqrsdesignpattern() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">CQRS Design Pattern in .NET Core</h1>
        <p className="text-gray-500 text-xs mt-1">Full CRUD example using CQRS (Command Query Responsibility Segregation) in .NET Core with MediatR, services, and repositories.</p>
      </header>
      <Section title="Project Folder Structure" color="text-yellow-600">
        <CodeBlock>
{`Domain/
  ├─ Entities/
  │     └─ Student.cs
  ├─ Enums/
  │     └─ Gender.cs

Application/
  ├─ Interfaces/
  │     └─ IStudentRepository.cs
  ├─ DTOs/
  │     └─ StudentDTO.cs
  ├─ Services/
  │     └─ StudentService.cs
  ├─ Commands/
  │     ├─ CreateStudentCommand.cs
  │     ├─ UpdateStudentCommand.cs
  │     └─ DeleteStudentCommand.cs
  ├─ Queries/
  │     └─ GetStudentsQuery.cs
  └─ Handlers/
        ├─ CreateStudentCommandHandler.cs
        ├─ UpdateStudentCommandHandler.cs
        ├─ DeleteStudentCommandHandler.cs
        └─ GetStudentsQueryHandler.cs

Infrastructure/
  ├─ Data/
  │     └─ AppDbContext.cs
  └─ Repositories/
        └─ StudentRepository.cs

API/
  ├─ Controllers/
  │     └─ StudentsController.cs
  └─ Program.cs`}
        </CodeBlock>
      </Section>

      <Section title="Domain Layer Example" color="text-green-600">
        <CodeBlock>
{`public class Student
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public Gender Gender { get; set; }
}

public enum Gender { Male, Female, Other }`}
        </CodeBlock>
      </Section>

      <Section title="Application Layer (Interfaces, DTOs, Services)" color="text-purple-600">
        <CodeBlock>
{`public interface IStudentRepository
{
    Task<List<Student>> GetAllAsync();
    Task<Student> GetByIdAsync(int id);
    Task AddAsync(Student student);
    Task UpdateAsync(Student student);
    Task DeleteAsync(int id);
}

public class StudentDTO
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public Gender Gender { get; set; }
}

public class StudentService
{
    private readonly IStudentRepository _repository;
    public StudentService(IStudentRepository repository) { _repository = repository; }

    public async Task<List<StudentDTO>> GetAllStudentsAsync()
    {
        var students = await _repository.GetAllAsync();
        return students.Select(s => new StudentDTO { FirstName = s.FirstName, LastName = s.LastName, Gender = s.Gender }).ToList();
    }
}`}
        </CodeBlock>
      </Section>

      <Section title="Commands" color="text-red-600">
        <CodeBlock>
{`using MediatR;
public class CreateStudentCommand : IRequest<int>
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public Gender Gender { get; set; }
}

using MediatR;
public class UpdateStudentCommand : IRequest
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public Gender Gender { get; set; }
}

using MediatR;
public class DeleteStudentCommand : IRequest
{
    public int Id { get; set; }
}`}
        </CodeBlock>
      </Section>

      <Section title="Command Handlers" color="text-purple-600">
        <CodeBlock>
{`public class CreateStudentCommandHandler : IRequestHandler<CreateStudentCommand, int>
{
    private readonly IStudentRepository _repository;
    public CreateStudentCommandHandler(IStudentRepository repository) { _repository = repository; }

    public async Task<int> Handle(CreateStudentCommand request, CancellationToken cancellationToken)
    {
        var student = new Student { FirstName = request.FirstName, LastName = request.LastName, Gender = request.Gender };
        await _repository.AddAsync(student);
        return student.Id;
    }
}

public class UpdateStudentCommandHandler : IRequestHandler<UpdateStudentCommand>
{
    private readonly IStudentRepository _repository;
    public UpdateStudentCommandHandler(IStudentRepository repository) { _repository = repository; }

    public async Task<Unit> Handle(UpdateStudentCommand request, CancellationToken cancellationToken)
    {
        var student = await _repository.GetByIdAsync(request.Id);
        if(student == null) return Unit.Value;

        student.FirstName = request.FirstName;
        student.LastName = request.LastName;
        student.Gender = request.Gender;

        await _repository.UpdateAsync(student);
        return Unit.Value;
    }
}

public class DeleteStudentCommandHandler : IRequestHandler<DeleteStudentCommand>
{
    private readonly IStudentRepository _repository;
    public DeleteStudentCommandHandler(IStudentRepository repository) { _repository = repository; }

    public async Task<Unit> Handle(DeleteStudentCommand request, CancellationToken cancellationToken)
    {
        await _repository.DeleteAsync(request.Id);
        return Unit.Value;
    }
}`}
        </CodeBlock>
      </Section>

      <Section title="Query & Handler" color="text-blue-600">
        <CodeBlock>
{`using MediatR;
using System.Collections.Generic;
public class GetStudentsQuery : IRequest<List<StudentDTO>> { }

public class GetStudentsQueryHandler : IRequestHandler<GetStudentsQuery, List<StudentDTO>>
{
    private readonly StudentService _service;
    public GetStudentsQueryHandler(StudentService service) { _service = service; }

    public async Task<List<StudentDTO>> Handle(GetStudentsQuery request, CancellationToken cancellationToken)
    {
        return await _service.GetAllStudentsAsync();
    }
}`}
        </CodeBlock>
      </Section>

      <Section title="Infrastructure Layer Example" color="text-green-600">
        <CodeBlock>
{`public class AppDbContext : DbContext
{
    public DbSet<Student> Students { get; set; }
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}

public class StudentRepository : IStudentRepository
{
    private readonly AppDbContext _context;
    public StudentRepository(AppDbContext context) { _context = context; }

    public async Task<List<Student>> GetAllAsync() => await _context.Students.ToListAsync();
    public async Task<Student> GetByIdAsync(int id) => await _context.Students.FindAsync(id);
    public async Task AddAsync(Student student) { _context.Students.Add(student); await _context.SaveChangesAsync(); }
    public async Task UpdateAsync(Student student) { _context.Students.Update(student); await _context.SaveChangesAsync(); }
    public async Task DeleteAsync(int id) { 
        var student = await _context.Students.FindAsync(id);
        if(student != null) { _context.Students.Remove(student); await _context.SaveChangesAsync(); }
    }
}`}
        </CodeBlock>
      </Section>

      <Section title="API Layer Example" color="text-purple-600">
        <CodeBlock>
{`[ApiController]
[Route("api/[controller]")]
public class StudentsController : ControllerBase
{
    private readonly IMediator _mediator;
    public StudentsController(IMediator mediator) { _mediator = mediator; }

    [HttpPost]
    public async Task<IActionResult> Create(CreateStudentCommand command) => Ok(await _mediator.Send(command));

    [HttpGet]
    public async Task<IActionResult> Get() => Ok(await _mediator.Send(new GetStudentsQuery()));

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, UpdateStudentCommand command)
    {
        command.Id = id;
        await _mediator.Send(command);
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _mediator.Send(new DeleteStudentCommand { Id = id });
        return Ok();
    }
}

// API/Program.cs
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddScoped<IStudentRepository, StudentRepository>();
builder.Services.AddScoped<StudentService>();
builder.Services.AddMediatR(typeof(Program));
builder.Services.AddControllers();
var app = builder.Build();
app.MapControllers();
app.Run();`}
        </CodeBlock>
      </Section>

      <Section title="Summary" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Full CRUD using CQRS: Create, Read, Update, Delete.</li>
          <li>Commands handle writes; Queries handle reads.</li>
          <li>Repositories abstract DB operations; Services contain business logic.</li>
          <li>MediatR dispatches commands/queries to their handlers.</li>
          <li>Clean separation of concerns, scalable, maintainable, and testable design.</li>
        </ul>
      </Section>

    </div>
  );
}

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

function CodeBlock({ children }) {
  return (
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">
      {children}
    </pre>
  );
}

export default Netcqrsdesignpattern;