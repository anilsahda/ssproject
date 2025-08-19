import React from "react";

function Javastate() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">State CRUD Operation</h1>
        <p className="text-gray-500 text-xs mt-1">
          Step-by-step guide to implementing CRUD functionality for the <strong>State</strong> entity in Spring Boot with MySQL/PostgreSQL.
        </p>
      </header>

      {/* Step 1: SQL Table */}
      <Section title="SQL Table" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE state (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country_id BIGINT NOT NULL
);`}
        </CodeBlock>
      </Section>

      {/* Step 2: Entity */}
      <Section title="Entity (State.java)" color="text-green-600">
        <CodeBlock>
{`@Entity
@Table(name = "state")
public class State {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Long countryId;

    // Getters and Setters
}`}
        </CodeBlock>
      </Section>

      {/* Step 3: Repository */}
      <Section title="Repository (StateRepository.java)" color="text-yellow-600">
        <CodeBlock>
{`public interface StateRepository extends JpaRepository<State, Long> {
}`}
        </CodeBlock>
      </Section>

      {/* Step 4: Service */}
      <Section title="Service (StateService.java)" color="text-purple-600">
        <CodeBlock>
{`@Service
public class StateService {

    @Autowired
    private StateRepository repository;

    public List<State> getAllStates() {
        return repository.findAll();
    }

    public State getStateById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public State saveState(State state) {
        return repository.save(state);
    }

    public void deleteState(Long id) {
        repository.deleteById(id);
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 5: Controller */}
      <Section title="Controller (StateController.java)" color="text-red-600">
        <CodeBlock>
{`@RestController
@RequestMapping("/api/states")
public class StateController {

    @Autowired
    private StateService service;

    @GetMapping
    public List<State> getStates() {
        return service.getAllStates();
    }

    @GetMapping("/{id}")
    public State getState(@PathVariable Long id) {
        return service.getStateById(id);
    }

    @PostMapping
    public State addState(@RequestBody State state) {
        return service.saveState(state);
    }

    @PutMapping
    public State updateState(@RequestBody State state) {
        return service.saveState(state);
    }

    @DeleteMapping("/{id}")
    public String deleteState(@PathVariable Long id) {
        service.deleteState(id);
        return "State deleted successfully!";
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 6: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8080/api/states</code> – Retrieves all states</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8080/api/states/{"{id}"}</code> – Retrieves a state by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:8080/api/states</code> – Adds a new state</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:8080/api/states</code> – Updates an existing state</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:8080/api/states/{"{id}"}</code> – Deletes a state</li>
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

export default Javastate;
