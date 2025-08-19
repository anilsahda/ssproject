function Javaradiobutton() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-green-700">Radio Button Integration in Spring Boot API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Step-by-step guide to implementing CRUD functionality for the <strong>Student</strong> entity in Spring Boot with MySQL.
        </p>
      </header>

      {/* Step 1: SQL Table */}
      <Section title="SQL Table" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150),
    mobile VARCHAR(20),
    country_id INT NOT NULL,
    state_id INT NOT NULL,
    district_id INT NOT NULL,
    gender_id INT NOT NULL
);`}
        </CodeBlock>
      </Section>

      {/* Step 2: Entity */}
      <Section title="Entity (Student.java)" color="text-green-600">
        <CodeBlock>
{`@Entity
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String email;
    private String mobile;

    private Integer countryId;
    private Integer stateId;
    private Integer districtId;
    private Integer genderId;

    // getters and setters
}`}
        </CodeBlock>
      </Section>

      {/* Step 3: Repository */}
      <Section title="Repository (StudentRepository.java)" color="text-yellow-600">
        <CodeBlock>
{`public interface StudentRepository extends JpaRepository<Student, Integer> {
}`}
        </CodeBlock>
      </Section>

      {/* Step 4: Service */}
      <Section title="Service (StudentService.java)" color="text-purple-600">
        <CodeBlock>
{`@Service
public class StudentService {
    @Autowired
    private StudentRepository repository;

    public List<Student> getAll() {
        return repository.findAll();
    }

    public Student save(Student student) {
        return repository.save(student);
    }

    public Student update(Student student) {
        return repository.save(student);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 5: Controller */}
      <Section title="Controller (StudentController.java)" color="text-red-600">
        <CodeBlock>
{`@RestController
@RequestMapping("/api/students")
public class StudentController {
    @Autowired
    private StudentService service;

    @GetMapping
    public List<Student> getStudents() {
        return service.getAll();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return service.save(student);
    }

    @PutMapping
    public Student updateStudent(@RequestBody Student student) {
        return service.update(student);
    }

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable Integer id) {
        service.delete(id);
        return "Student deleted successfully!";
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 6: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8080/api/students</code> – Retrieves all students</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:8080/api/students</code> – Adds a new student</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:8080/api/students</code> – Updates an existing student</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:8080/api/students/{"{id}"}</code> – Deletes a student</li>
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

export default Javaradiobutton;
