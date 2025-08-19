import React from "react";

function Javacountry() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-green-700">Country CRUD Operation</h1>
        <p className="text-gray-500 text-xs mt-1">
          A step-by-step guide to implementing CRUD functionality for the <strong>Country</strong> entity in Spring Boot with JPA & REST API.
        </p>
      </header>

      {/* Step 1: SQL Table */}
      <Section title="SQL Table" color="text-green-600">
        <CodeBlock>
{`CREATE TABLE country (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);`}
        </CodeBlock>
      </Section>

      {/* Step 2: Entity */}
      <Section title="Entity (Country.java)" color="text-indigo-600">
        <CodeBlock>
{`@Entity
@Table(name = "country")
public class Country {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;

    // getters and setters
}`}
        </CodeBlock>
      </Section>

      {/* Step 3: Repository */}
      <Section title="Repository (CountryRepository.java)" color="text-blue-600">
        <CodeBlock>
{`public interface CountryRepository extends JpaRepository<Country, Long> {
}`} 
        </CodeBlock>
      </Section>

      {/* Step 4: Service */}
      <Section title="Service (CountryService.java)" color="text-yellow-600">
        <CodeBlock>
{`@Service
public class CountryService {
    @Autowired
    private CountryRepository repository;

    public List<Country> getAllCountries() {
        return repository.findAll();
    }

    public Country getCountryById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Country addCountry(Country country) {
        return repository.save(country);
    }

    public Country updateCountry(Country country) {
        return repository.save(country);
    }

    public void deleteCountry(Long id) {
        repository.deleteById(id);
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 5: Controller */}
      <Section title="Controller (CountryController.java)" color="text-red-600">
        <CodeBlock>
{`@RestController
@RequestMapping("/api/countries")
public class CountryController {

    @Autowired
    private CountryService service;

    @GetMapping
    public List<Country> getCountries() {
        return service.getAllCountries();
    }

    @GetMapping("/{id}")
    public Country getCountry(@PathVariable Long id) {
        return service.getCountryById(id);
    }

    @PostMapping
    public Country addCountry(@RequestBody Country country) {
        return service.addCountry(country);
    }

    @PutMapping
    public Country updateCountry(@RequestBody Country country) {
        return service.updateCountry(country);
    }

    @DeleteMapping("/{id}")
    public String deleteCountry(@PathVariable Long id) {
        service.deleteCountry(id);
        return "Country deleted successfully!";
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 6: Example API Endpoints */}
      <Section title="Example API Endpoints" color="text-purple-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8080/api/countries</code> – Retrieves all countries</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8080/api/countries/{"{id}"}</code> – Retrieves a country by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:8080/api/countries</code> – Adds a new country</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:8080/api/countries</code> – Updates an existing country</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:8080/api/countries/{"{id}"}</code> – Deletes a country</li>
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

export default Javacountry;
