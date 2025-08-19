function Javasearching() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-red-700">Search Functionality in Spring Boot API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Guide to implement search functionality for any entity like Student and Employee using a Spring Boot API and React.
        </p>
      </header>

      <Section title="Backend - Controller" color="text-red-600">
        <CodeBlock>
{`@RestController
@RequestMapping("/api/students")
public class StudentController {
    
    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/search")
    public List<Student> search(@RequestParam(required = false) String query) {
        if (query == null || query.isEmpty()) {
            return studentRepository.findAll();
        }
        return studentRepository.findByNameContainingIgnoreCaseOrEmailContainingIgnoreCase(query, query);
    }
}`}  
        </CodeBlock>
      </Section>

      <Section title="Repository" color="text-indigo-600">
        <CodeBlock>
{`public interface StudentRepository extends JpaRepository<Student, Long> {
    List<Student> findByNameContainingIgnoreCaseOrEmailContainingIgnoreCase(String name, String email);
}`}  
        </CodeBlock>
      </Section>

      <Section title="API Endpoint" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>
            <code className="bg-gray-100 px-1 rounded">
              GET http://localhost:8080/api/students/search?query=John
            </code>{" "}
            – Retrieves students matching the search query
          </li>
        </ul>
      </Section>

      <Section title="Frontend - React Component" color="text-yellow-600">
        <CodeBlock>
{`import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentSearch() {
  const [query, setQuery] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get("http://localhost:8080/api/students");
    setStudents(response.data);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(\`http://localhost:8080/api/students/search?query=\${query}\`);
    setStudents(response.data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentSearch;`}
        </CodeBlock>
      </Section>

      <Section title="Summary" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Backend uses Spring Data JPA query methods for filtering results.</li>
          <li>Frontend React component makes API call to search endpoint dynamically.</li>
          <li>This approach works for any entity (Student, Employee, Customer, etc.) by adjusting the model and repository method.</li>
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

export default Javasearching;