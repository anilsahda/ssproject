function Javacheckbox() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-green-700">Checkbox Integration in Spring Boot API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing CRUD functionality for the <strong>Employee</strong> entity in Spring Boot with MySQL.
        </p>
      </header>

      {/* Step 1: Employee Table */}
      <Section title="SQL Table (Employee)" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
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

      {/* Step 2: EmployeeLanguages Table */}
      <Section title="SQL Table (EmployeeLanguages)" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE employee_languages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    language_id INT NOT NULL
);`}
        </CodeBlock>
      </Section>

      {/* Step 3: Employee Entity */}
      <Section title="Entity (Employee.java)" color="text-green-600">
        <CodeBlock>
{`@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String mobile;
    private int countryId;
    private int stateId;
    private int districtId;
    private int genderId;
    // getters and setters
}`}
        </CodeBlock>
      </Section>

      {/* Step 4: EmployeeLanguage Entity */}
      <Section title="Entity (EmployeeLanguage.java)" color="text-green-600">
        <CodeBlock>
{`@Entity
@Table(name = "employee_languages")
public class EmployeeLanguage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int employeeId;
    private int languageId;
    // getters and setters
}`}
        </CodeBlock>
      </Section>

      {/* Step 5: DTO */}
      <Section title="DTO (EmployeeDTO.java)" color="text-yellow-600">
        <CodeBlock>
{`public class EmployeeDTO {
    private int id;
    private String name;
    private String email;
    private String mobile;
    private int countryId;
    private int stateId;
    private int districtId;
    private int genderId;
    private List<Integer> languages;
    // getters and setters
}`}
        </CodeBlock>
      </Section>

      {/* Step 6: Repositories */}
      <Section title="Repositories" color="text-purple-600">
        <CodeBlock>
{`public interface EmployeeRepository extends JpaRepository<Employee, Integer> {}

public interface EmployeeLanguageRepository extends JpaRepository<EmployeeLanguage, Integer> {
    List<EmployeeLanguage> findByEmployeeId(int employeeId);
}`} 
        </CodeBlock>
      </Section>

      {/* Step 7: Controller */}
      <Section title="Controller (EmployeeController.java)" color="text-red-600">
        <CodeBlock>
{`@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private EmployeeLanguageRepository employeeLanguageRepository;

    @GetMapping
    public List<EmployeeDTO> getEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map(e -> {
            EmployeeDTO dto = new EmployeeDTO();
            BeanUtils.copyProperties(e, dto);
            List<EmployeeLanguage> langs = employeeLanguageRepository.findByEmployeeId(e.getId());
            dto.setLanguages(langs.stream().map(EmployeeLanguage::getLanguageId).collect(Collectors.toList()));
            return dto;
        }).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public EmployeeDTO getEmployee(@PathVariable int id) {
        Employee e = employeeRepository.findById(id).orElseThrow();
        EmployeeDTO dto = new EmployeeDTO();
        BeanUtils.copyProperties(e, dto);
        List<EmployeeLanguage> langs = employeeLanguageRepository.findByEmployeeId(id);
        dto.setLanguages(langs.stream().map(EmployeeLanguage::getLanguageId).collect(Collectors.toList()));
        return dto;
    }

    @PostMapping
    public Employee addEmployee(@RequestBody EmployeeDTO dto) {
        Employee employee = new Employee();
        BeanUtils.copyProperties(dto, employee);
        Employee saved = employeeRepository.save(employee);

        dto.getLanguages().forEach(langId -> {
            employeeLanguageRepository.save(new EmployeeLanguage(0, saved.getId(), langId));
        });
        return saved;
    }

    @PutMapping
    public String updateEmployee(@RequestBody EmployeeDTO dto) {
        Employee employee = new Employee();
        BeanUtils.copyProperties(dto, employee);
        employeeRepository.save(employee);

        List<EmployeeLanguage> existing = employeeLanguageRepository.findByEmployeeId(dto.getId());
        employeeLanguageRepository.deleteAll(existing);

        dto.getLanguages().forEach(langId -> {
            employeeLanguageRepository.save(new EmployeeLanguage(0, dto.getId(), langId));
        });

        return "Data updated successfully!";
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable int id) {
        employeeLanguageRepository.deleteAll(employeeLanguageRepository.findByEmployeeId(id));
        employeeRepository.deleteById(id);
        return "Data deleted successfully!";
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 8: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8080/api/employees</code> – Retrieves all employees</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8080/api/employees/{"{id}"}</code> – Retrieves an employee by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:8080/api/employees</code> – Adds a new employee</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:8080/api/employees</code> – Updates an existing employee</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:8080/api/employees/{"{id}"}</code> – Deletes an employee</li>
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
      <code>{children}</code>
    </pre>
  );
}

export default Javacheckbox;
