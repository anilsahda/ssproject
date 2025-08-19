function Netsearching() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Search Functionality in .NET Core API</h1>
        <p className="text-gray-500 text-xs mt-1">Guide to implement search functionality for any entity like Student and Employee using a .NET Core API and React.</p>
      </header>

      <Section title="Backend - API Controller" color="text-indigo-600">
        <CodeBlock>
{`[Route("api/[controller]")]
[ApiController]
public class StudentsController : ControllerBase
{
    private readonly AppDbContext _context;
    public StudentsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("search")]
    public IActionResult Search(string query)
    {
        if (string.IsNullOrEmpty(query))
            return Ok(_context.Students.ToList());

        return Ok(_context.Students.Where(s=>s.Name.Contains(query) || s.Email.Contains(query)).ToList());
    }
}`}  
        </CodeBlock>
      </Section>

      <Section title="API Endpoint" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/students/search?query=John</code> – Retrieves students matching the search query</li>
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
    const response = await axios.get("https://localhost:7070/api/students");
    setStudents(response.data);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(\`https://localhost:7070/api/students/search?query=\${query}\`);
    setStudents(response.data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} className="form-control"/>
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
          <li>Backend uses a GET endpoint with a query string parameter to filter results.</li>
          <li>Frontend React component makes an API call to fetch search results dynamically.</li>
          <li>This approach works for any entity (Student, Employee, Customer, etc.) by adjusting the model and endpoint.</li>
        </ul>
      </Section>
    </div>
  );
}

function Section({ title, color, children }) { return (<section><div className="flex items-center mb-2"><strong className={`${color}`}>{title}</strong></div>{children}</section>)}
function CodeBlock({ children }) { return (<pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">{children}</pre>)}

export default Netsearching;