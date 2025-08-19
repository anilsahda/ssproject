function Javamultiselectdropdown() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Multiselect Dropdown Integration in Java (Spring Boot + JPA)</h1>
        <p className="text-gray-500 text-xs mt-1">Implementing CRUD functionality for the <strong>Employee</strong> entity with multiselect dropdown for Languages.</p>
      </header>

      {/* SQL Schema */}
      <Section title="SQL Table (Employee)" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE Employee (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(150),
    Mobile VARCHAR(20),
    CountryId INT NOT NULL,
    StateId INT NOT NULL,
    DistrictId INT NOT NULL,
    GenderId INT NOT NULL
);`}
        </CodeBlock>
      </Section>

      <Section title="SQL Table (EmployeeLanguages)" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE EmployeeLanguages (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    EmployeeId INT NOT NULL,
    LanguageId INT NOT NULL,
    FOREIGN KEY (EmployeeId) REFERENCES Employee(Id)
);`}
        </CodeBlock>
      </Section>

      {/* Java Models */}
      <Section title="Model (Employee.java)" color="text-green-600">
        <CodeBlock>
{`@Entity
@Table(name = "Employee")
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

    // Relationships
    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<EmployeeLanguage> languages = new ArrayList<>();
}`}
        </CodeBlock>
      </Section>

      <Section title="Model (EmployeeLanguage.java)" color="text-green-600">
        <CodeBlock>
{`@Entity
@Table(name = "EmployeeLanguages")
public class EmployeeLanguage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int languageId;

    @ManyToOne
    @JoinColumn(name = "EmployeeId")
    private Employee employee;
}`}
        </CodeBlock>
      </Section>

      <Section title="DTO (EmployeeDTO.java)" color="text-green-600">
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
}`}
        </CodeBlock>
      </Section>

      {/* Repository Layer */}
      <Section title="Repository Interfaces" color="text-yellow-600">
        <CodeBlock>
{`public interface EmployeeRepository extends JpaRepository<Employee, Integer> { }
public interface EmployeeLanguageRepository extends JpaRepository<EmployeeLanguage, Integer> { }`}
        </CodeBlock>
      </Section>

      {/* Controller */}
      <Section title="Controller (EmployeeController.java)" color="text-red-600">
        <CodeBlock>
{`@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    
    @Autowired
    private EmployeeRepository employeeRepo;

    @Autowired
    private EmployeeLanguageRepository languageRepo;

    @GetMapping
    public List<EmployeeDTO> getAllEmployees() {
        return employeeRepo.findAll().stream().map(e -> {
            EmployeeDTO dto = new EmployeeDTO();
            dto.setId(e.getId());
            dto.setName(e.getName());
            dto.setEmail(e.getEmail());
            dto.setMobile(e.getMobile());
            dto.setCountryId(e.getCountryId());
            dto.setStateId(e.getStateId());
            dto.setDistrictId(e.getDistrictId());
            dto.setGenderId(e.getGenderId());
            dto.setLanguages(e.getLanguages().stream()
                              .map(EmployeeLanguage::getLanguageId)
                              .collect(Collectors.toList()));
            return dto;
        }).collect(Collectors.toList());
    }

    @PostMapping
    public Employee addEmployee(@RequestBody EmployeeDTO dto) {
        Employee emp = new Employee();
        emp.setName(dto.getName());
        emp.setEmail(dto.getEmail());
        emp.setMobile(dto.getMobile());
        emp.setCountryId(dto.getCountryId());
        emp.setStateId(dto.getStateId());
        emp.setDistrictId(dto.getDistrictId());
        emp.setGenderId(dto.getGenderId());

        List<EmployeeLanguage> langs = dto.getLanguages().stream()
            .map(langId -> {
                EmployeeLanguage el = new EmployeeLanguage();
                el.setLanguageId(langId);
                el.setEmployee(emp);
                return el;
            }).collect(Collectors.toList());

        emp.setLanguages(langs);
        return employeeRepo.save(emp);
    }
}`}
        </CodeBlock>
      </Section>

      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8080/api/employees</code> – Retrieves all employees</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:8080/api/employees</code> – Adds a new employee with multiple languages</li>
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

export default Javamultiselectdropdown;
