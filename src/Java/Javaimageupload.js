function Javaimageupload() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Image Upload in Spring Boot API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Step-by-step guide to implementing CRUD functionality for the <strong>Customer</strong> entity in <strong>Spring Boot</strong> with MySQL.
        </p>
      </header>

      <Section title="SQL Table" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE customer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150),
    mobile VARCHAR(20),
    image VARCHAR(250)
);`}
        </CodeBlock>
      </Section>

      <Section title="Entity (Customer.java)" color="text-green-600">
        <CodeBlock>
{`@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String email;
    private String mobile;
    private String image;

    // Getters and Setters
}`}
        </CodeBlock>
      </Section>

      <Section title="Repository (CustomerRepository.java)" color="text-yellow-600">
        <CodeBlock>
{`public interface CustomerRepository extends JpaRepository<Customer, Integer> {
}`} 
        </CodeBlock>
      </Section>

      <Section title="DTO (CustomerDTO.java)" color="text-green-600">
        <CodeBlock>
{`public class CustomerDTO {
    private Integer id;
    private String name;
    private String email;
    private String mobile;
    private MultipartFile image;

    // Getters and Setters
}`}
        </CodeBlock>
      </Section>

      <Section title="Service (CustomerService.java)" color="text-purple-600">
        <CodeBlock>
{`@Service
public class CustomerService {
    @Autowired
    private CustomerRepository repository;

    @Value("\${file.upload-dir}")
    private String uploadDir;

    public List<Customer> getAll() {
        return repository.findAll();
    }

    public Customer getById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public Customer save(CustomerDTO dto) throws IOException {
        String fileName = null;
        if (dto.getImage() != null && !dto.getImage().isEmpty()) {
            fileName = UUID.randomUUID() + "_" + dto.getImage().getOriginalFilename();
            Path path = Paths.get(uploadDir, fileName);
            Files.createDirectories(path.getParent());
            Files.write(path, dto.getImage().getBytes());
        }

        Customer c = new Customer();
        c.setName(dto.getName());
        c.setEmail(dto.getEmail());
        c.setMobile(dto.getMobile());
        c.setImage(fileName);

        return repository.save(c);
    }

    public Customer update(CustomerDTO dto) throws IOException {
        Customer c = repository.findById(dto.getId()).orElseThrow();

        c.setName(dto.getName());
        c.setEmail(dto.getEmail());
        c.setMobile(dto.getMobile());

        if (dto.getImage() != null && !dto.getImage().isEmpty()) {
            // delete old file
            if (c.getImage() != null) {
                Path oldPath = Paths.get(uploadDir, c.getImage());
                Files.deleteIfExists(oldPath);
            }
            String fileName = UUID.randomUUID() + "_" + dto.getImage().getOriginalFilename();
            Path path = Paths.get(uploadDir, fileName);
            Files.write(path, dto.getImage().getBytes());
            c.setImage(fileName);
        }

        return repository.save(c);
    }

    public void delete(Integer id) throws IOException {
        Customer c = repository.findById(id).orElseThrow();
        if (c.getImage() != null) {
            Path oldPath = Paths.get(uploadDir, c.getImage());
            Files.deleteIfExists(oldPath);
        }
        repository.deleteById(id);
    }
}`}
        </CodeBlock>
      </Section>

      <Section title="Controller (CustomerController.java)" color="text-red-600">
        <CodeBlock>
{`@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    @Autowired
    private CustomerService service;

    @GetMapping
    public List<Customer> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Customer getById(@PathVariable Integer id) {
        return service.getById(id);
    }

    @PostMapping
    public Customer add(@ModelAttribute CustomerDTO dto) throws IOException {
        return service.save(dto);
    }

    @PutMapping
    public Customer update(@ModelAttribute CustomerDTO dto) throws IOException {
        return service.update(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) throws IOException {
        service.delete(id);
    }
}`}
        </CodeBlock>
      </Section>

      <Section title="application.properties" color="text-green-600">
        <CodeBlock>
{`spring.datasource.url=jdbc:mysql://localhost:3306/demo
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

# file upload directory
file.upload-dir=uploads`}
        </CodeBlock>
      </Section>

      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8080/api/customers</code> – Retrieves all customers</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8080/api/customers/{"{id}"}</code> – Retrieves a customer by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:8080/api/customers</code> – Adds a new customer (with image)</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:8080/api/customers</code> – Updates an existing customer</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:8080/api/customers/{"{id}"}</code> – Deletes a customer</li>
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

export default Javaimageupload;
