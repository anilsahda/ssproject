import React from "react";

function Javalanguages() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Language CRUD Operation</h1>
        <p className="text-gray-500 text-xs mt-1">
          A step-by-step guide to implementing CRUD functionality for the <strong>Language</strong> entity in Spring Boot with MySQL/PostgreSQL.
        </p>
      </header>

      {/* Step 1: SQL Table */}
      <Section title="SQL Table" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE language (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);`}
        </CodeBlock>
      </Section>

      {/* Step 2: Model */}
      <Section title="Entity (Language.java)" color="text-green-600">
        <CodeBlock>
{`@Entity
@Table(name = "language")
public class Language {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    private String name;

    // Getters and Setters
}`}
        </CodeBlock>
      </Section>

      {/* Step 3: Repository */}
      <Section title="Repository (LanguageRepository.java)" color="text-yellow-600">
        <CodeBlock>
{`public interface LanguageRepository extends JpaRepository<Language, Integer> {
}`}
        </CodeBlock>
      </Section>

      {/* Step 4: Service */}
      <Section title="Service (LanguageService.java)" color="text-purple-600">
        <CodeBlock>
{`@Service
public class LanguageService {

    @Autowired
    private LanguageRepository repository;

    public List<Language> getAll() {
        return repository.findAll();
    }

    public Language getById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Language save(Language language) {
        return repository.save(language);
    }

    public void delete(int id) {
        repository.deleteById(id);
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 5: Controller */}
      <Section title="Controller (LanguageController.java)" color="text-red-600">
        <CodeBlock>
{`@RestController
@RequestMapping("/api/languages")
public class LanguageController {

    @Autowired
    private LanguageService service;

    @GetMapping
    public List<Language> getAllLanguages() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Language getLanguageById(@PathVariable int id) {
        return service.getById(id);
    }

    @PostMapping
    public Language addLanguage(@RequestBody Language language) {
        return service.save(language);
    }

    @PutMapping
    public Language updateLanguage(@RequestBody Language language) {
        return service.save(language);
    }

    @DeleteMapping("/{id}")
    public String deleteLanguage(@PathVariable int id) {
        service.delete(id);
        return "Data deleted successfully!";
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 6: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8080/api/languages</code> – Retrieves all languages</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8080/api/languages/{"{id}"}</code> – Retrieves a language by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:8080/api/languages</code> – Adds a new language</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:8080/api/languages</code> – Updates an existing language</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:8080/api/languages/{"{id}"}</code> – Deletes a language</li>
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

export default Javalanguages;
