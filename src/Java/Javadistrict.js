import React from "react";

function Javadistrict() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-green-700">District CRUD Operation</h1>
        <p className="text-gray-500 text-xs mt-1">
          Step-by-step guide to implementing CRUD functionality for the <strong>District</strong> entity in <b>Spring Boot</b> with MySQL/PostgreSQL.
        </p>
      </header>

      {/* Step 1: SQL Table */}
      <Section title="SQL Table" color="text-green-600">
        <CodeBlock>
{`CREATE TABLE district (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    country_id INT NOT NULL,
    state_id INT NOT NULL
);`}
        </CodeBlock>
      </Section>

      {/* Step 2: Entity */}
      <Section title="Entity (District.java)" color="text-blue-600">
        <CodeBlock>
{`import jakarta.persistence.*;

@Entity
@Table(name = "district")
public class District {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private int countryId;
    private int stateId;

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getCountryId() { return countryId; }
    public void setCountryId(int countryId) { this.countryId = countryId; }

    public int getStateId() { return stateId; }
    public void setStateId(int stateId) { this.stateId = stateId; }
}`}
        </CodeBlock>
      </Section>

      {/* Step 3: Repository */}
      <Section title="Repository (DistrictRepository.java)" color="text-indigo-600">
        <CodeBlock>
{`import org.springframework.data.jpa.repository.JpaRepository;

public interface DistrictRepository extends JpaRepository<District, Integer> {
}`}
        </CodeBlock>
      </Section>

      {/* Step 4: Service */}
      <Section title="Service (DistrictService.java)" color="text-purple-600">
        <CodeBlock>
{`import java.util.List;

public interface DistrictService {
    List<District> getAllDistricts();
    District getDistrictById(int id);
    District saveDistrict(District district);
    District updateDistrict(District district);
    void deleteDistrict(int id);
}`}
        </CodeBlock>
      </Section>

      <Section title="Service Implementation (DistrictServiceImpl.java)" color="text-purple-600">
        <CodeBlock>
{`import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DistrictServiceImpl implements DistrictService {

    @Autowired
    private DistrictRepository repository;

    @Override
    public List<District> getAllDistricts() {
        return repository.findAll();
    }

    @Override
    public District getDistrictById(int id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public District saveDistrict(District district) {
        return repository.save(district);
    }

    @Override
    public District updateDistrict(District district) {
        return repository.save(district);
    }

    @Override
    public void deleteDistrict(int id) {
        repository.deleteById(id);
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 5: Controller */}
      <Section title="Controller (DistrictController.java)" color="text-red-600">
        <CodeBlock>
{`import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/districts")
public class DistrictController {

    @Autowired
    private DistrictService service;

    @GetMapping
    public List<District> getAllDistricts() {
        return service.getAllDistricts();
    }

    @GetMapping("/{id}")
    public District getDistrict(@PathVariable int id) {
        return service.getDistrictById(id);
    }

    @PostMapping
    public District addDistrict(@RequestBody District district) {
        return service.saveDistrict(district);
    }

    @PutMapping
    public District updateDistrict(@RequestBody District district) {
        return service.updateDistrict(district);
    }

    @DeleteMapping("/{id}")
    public String deleteDistrict(@PathVariable int id) {
        service.deleteDistrict(id);
        return "District deleted successfully!";
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 6: API Endpoints */}
      <Section title="Example API Endpoints" color="text-yellow-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8080/api/districts</code> – Retrieves all districts</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8080/api/districts/{"{id}"}</code> – Retrieves a district by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:8080/api/districts</code> – Adds a new district</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:8080/api/districts</code> – Updates an existing district</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:8080/api/districts/{"{id}"}</code> – Deletes a district</li>
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

export default Javadistrict;
