function Javaonionarchitecture() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-green-700">Onion Architecture in Spring Boot API</h1>
        <p className="text-gray-500 text-xs mt-1">Complete CRUD example for Student entity using Onion Architecture.</p>
      </header>

      {/* Step 1 */}
      <Section title="Step 1: Folder Structure" color="text-yellow-600">
        <CodeBlock>
{`student-onion-architecture/
├─ domain/
│   ├─ entity/
│   │   └─ Student.java
│   ├─ valueobject/
│   │   └─ Address.java
│   └─ enums/
│       └─ Gender.java
│
├─ application/
│   ├─ dto/
│   │   └─ StudentDTO.java
│   ├─ service/
│   │   └─ StudentService.java
│   └─ repository/
│       └─ StudentRepository.java (interface)
│
├─ infrastructure/
│   └─ repository/
│       └─ StudentRepositoryImpl.java
│
├─ api/
│   └─ controller/
│       └─ StudentController.java
│
└─ Application.java`} 
        </CodeBlock>
      </Section>

      {/* Step 2 */}
      <Section title="Step 2: Domain Layer" color="text-green-600">
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

    @Embedded
    private Address address;
    // getters and setters
}

// Gender.java
public enum Gender {
    MALE, FEMALE, OTHER
}

// Address.java
@Embeddable
public class Address {
    private String street;
    private String city;
    private String state;
    private String zipCode;
    // getters and setters
}`} 
        </CodeBlock>
      </Section>

      {/* Step 3 */}
      <Section title="Step 3: Application Layer" color="text-purple-600">
        <CodeBlock>
{`// StudentDTO.java
public class StudentDTO {
    private String firstName;
    private String lastName;
    private Gender gender;
    private Address address;
    // getters and setters
}

// StudentRepository.java (Interface in application layer)
public interface StudentRepository {
    List<Student> findAll();
    Optional<Student> findById(Long id);
    Student save(Student student);
    void deleteById(Long id);
}

// StudentService.java
@Service
public class StudentService {
    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public List<StudentDTO> getAllStudents() {
        return repository.findAll().stream()
            .map(s -> new StudentDTO(s.getFirstName(), s.getLastName(), s.getGender(), s.getAddress()))
            .collect(Collectors.toList());
    }

    public StudentDTO getStudentById(Long id) {
        return repository.findById(id)
            .map(s -> new StudentDTO(s.getFirstName(), s.getLastName(), s.getGender(), s.getAddress()))
            .orElse(null);
    }

    public void addStudent(StudentDTO dto) {
        Student student = new Student();
        student.setFirstName(dto.getFirstName());
        student.setLastName(dto.getLastName());
        student.setGender(dto.getGender());
        student.setAddress(dto.getAddress());
        repository.save(student);
    }

    public void updateStudent(Long id, StudentDTO dto) {
        repository.findById(id).ifPresent(student -> {
            student.setFirstName(dto.getFirstName());
            student.setLastName(dto.getLastName());
            student.setGender(dto.getGender());
            student.setAddress(dto.getAddress());
            repository.save(student);
        });
    }

    public void deleteStudent(Long id) {
        repository.deleteById(id);
    }
}`} 
        </CodeBlock>
      </Section>

      {/* Step 4 */}
      <Section title="Step 4: Infrastructure Layer" color="text-blue-600">
        <CodeBlock>
{`// StudentRepositoryImpl.java
@Repository
public interface StudentRepositoryImpl extends JpaRepository<Student, Long>, StudentRepository {
    // Inherits CRUD from JpaRepository
}`} 
        </CodeBlock>
      </Section>

      {/* Step 5 */}
      <Section title="Step 5: API Layer" color="text-red-600">
        <CodeBlock>
{`// StudentController.java
@RestController
@RequestMapping("/api/students")
public class StudentController {
    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @GetMapping
    public List<StudentDTO> getAll() {
        return service.getAllStudents();
    }

    @GetMapping("/{id}")
    public ResponseEntity<StudentDTO> getById(@PathVariable Long id) {
        StudentDTO dto = service.getStudentById(id);
        return dto == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(dto);
    }

    @PostMapping
    public void add(@RequestBody StudentDTO dto) {
        service.addStudent(dto);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable Long id, @RequestBody StudentDTO dto) {
        service.updateStudent(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteStudent(id);
    }
}

// Application.java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`} 
        </CodeBlock>
      </Section>

      {/* Step 6 */}
      <Section title="Step 6: Summary" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Domain layer → entities, value objects, enums.</li>
          <li>Application layer → DTOs, services, repository interface.</li>
          <li>Infrastructure layer → repository implementation with JPA.</li>
          <li>API layer → REST controllers using Spring Boot.</li>
          <li>Onion principles applied: dependencies point inward, domain stays pure.</li>
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

export default Javaonionarchitecture;
