function Javacqrsdesignpattern() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">CQRS Design Pattern in Spring Boot</h1>
        <p className="text-gray-500 text-xs mt-1">
          Full CRUD example using CQRS (Command Query Responsibility Segregation) in Spring Boot with Command, Query, Handlers, Service, and Repository layers.
        </p>
      </header>

      <Section title="Project Folder Structure" color="text-yellow-600">
        <CodeBlock>
{`src/main/java/com/example/cqrs/
 ├─ domain/
 │    ├─ Student.java
 │    └─ Gender.java
 ├─ application/
 │    ├─ dto/StudentDTO.java
 │    ├─ commands/
 │    │     ├─ CreateStudentCommand.java
 │    │     ├─ UpdateStudentCommand.java
 │    │     └─ DeleteStudentCommand.java
 │    ├─ queries/GetStudentsQuery.java
 │    ├─ handlers/
 │    │     ├─ CreateStudentCommandHandler.java
 │    │     ├─ UpdateStudentCommandHandler.java
 │    │     ├─ DeleteStudentCommandHandler.java
 │    │     └─ GetStudentsQueryHandler.java
 │    └─ services/StudentService.java
 ├─ infrastructure/
 │    ├─ repository/StudentRepository.java
 │    └─ config/DbConfig.java
 └─ api/
      ├─ StudentController.java
      └─ CqrsApplication.java`}
        </CodeBlock>
      </Section>

      <Section title="Domain Layer" color="text-green-600">
        <CodeBlock>
{`// Student.java
@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    // getters & setters
}

// Gender.java
public enum Gender {
    MALE, FEMALE, OTHER
}`}
        </CodeBlock>
      </Section>

      <Section title="DTO" color="text-purple-600">
        <CodeBlock>
{`public class StudentDTO {
    private String firstName;
    private String lastName;
    private Gender gender;
    // getters & setters
}`}
        </CodeBlock>
      </Section>

      <Section title="Commands" color="text-red-600">
        <CodeBlock>
{`public class CreateStudentCommand {
    private String firstName;
    private String lastName;
    private Gender gender;
    // getters & setters
}

public class UpdateStudentCommand {
    private Long id;
    private String firstName;
    private String lastName;
    private Gender gender;
    // getters & setters
}

public class DeleteStudentCommand {
    private Long id;
    // getters & setters
}`}
        </CodeBlock>
      </Section>

      <Section title="Queries" color="text-blue-600">
        <CodeBlock>
{`public class GetStudentsQuery { }`}
        </CodeBlock>
      </Section>

      <Section title="Handlers" color="text-indigo-600">
        <CodeBlock>
{`@Component
public class CreateStudentCommandHandler {
    @Autowired private StudentRepository repository;
    public Long handle(CreateStudentCommand cmd) {
        Student student = new Student();
        student.setFirstName(cmd.getFirstName());
        student.setLastName(cmd.getLastName());
        student.setGender(cmd.getGender());
        repository.save(student);
        return student.getId();
    }
}

@Component
public class UpdateStudentCommandHandler {
    @Autowired private StudentRepository repository;
    public void handle(UpdateStudentCommand cmd) {
        Student student = repository.findById(cmd.getId()).orElseThrow();
        student.setFirstName(cmd.getFirstName());
        student.setLastName(cmd.getLastName());
        student.setGender(cmd.getGender());
        repository.save(student);
    }
}

@Component
public class DeleteStudentCommandHandler {
    @Autowired private StudentRepository repository;
    public void handle(DeleteStudentCommand cmd) {
        repository.deleteById(cmd.getId());
    }
}

@Component
public class GetStudentsQueryHandler {
    @Autowired private StudentRepository repository;
    public List<StudentDTO> handle(GetStudentsQuery query) {
        return repository.findAll()
            .stream()
            .map(s -> {
                StudentDTO dto = new StudentDTO();
                dto.setFirstName(s.getFirstName());
                dto.setLastName(s.getLastName());
                dto.setGender(s.getGender());
                return dto;
            }).collect(Collectors.toList());
    }
}`}
        </CodeBlock>
      </Section>

      <Section title="Repository" color="text-teal-600">
        <CodeBlock>
{`public interface StudentRepository extends JpaRepository<Student, Long> { }`}
        </CodeBlock>
      </Section>

      <Section title="Service Layer" color="text-purple-600">
        <CodeBlock>
{`@Service
public class StudentService {
    @Autowired private CreateStudentCommandHandler createHandler;
    @Autowired private UpdateStudentCommandHandler updateHandler;
    @Autowired private DeleteStudentCommandHandler deleteHandler;
    @Autowired private GetStudentsQueryHandler queryHandler;

    public Long create(CreateStudentCommand cmd) { return createHandler.handle(cmd); }
    public void update(UpdateStudentCommand cmd) { updateHandler.handle(cmd); }
    public void delete(DeleteStudentCommand cmd) { deleteHandler.handle(cmd); }
    public List<StudentDTO> getAll(GetStudentsQuery query) { return queryHandler.handle(query); }
}`}
        </CodeBlock>
      </Section>

      <Section title="API Layer" color="text-orange-600">
        <CodeBlock>
{`@RestController
@RequestMapping("/api/students")
public class StudentController {
    @Autowired private StudentService service;

    @PostMapping
    public ResponseEntity<Long> create(@RequestBody CreateStudentCommand cmd) {
        return ResponseEntity.ok(service.create(cmd));
    }

    @GetMapping
    public ResponseEntity<List<StudentDTO>> getAll() {
        return ResponseEntity.ok(service.getAll(new GetStudentsQuery()));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable Long id, @RequestBody UpdateStudentCommand cmd) {
        cmd.setId(id);
        service.update(cmd);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        DeleteStudentCommand cmd = new DeleteStudentCommand();
        cmd.setId(id);
        service.delete(cmd);
        return ResponseEntity.ok().build();
    }
}

// Spring Boot Main App
@SpringBootApplication
public class CqrsApplication {
    public static void main(String[] args) {
        SpringApplication.run(CqrsApplication.class, args);
    }
}`}
        </CodeBlock>
      </Section>

      <Section title="Summary" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Commands = write operations, Queries = read operations.</li>
          <li>Handlers separate logic for each action.</li>
          <li>Service coordinates between handlers and controller.</li>
          <li>Repository abstracts DB access (Spring Data JPA).</li>
          <li>Clean separation of concerns, scalable and testable.</li>
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

export default Javacqrsdesignpattern;
