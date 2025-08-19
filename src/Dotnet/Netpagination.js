function Netpagination() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Pagination in .NET Core API</h1>
        <p className="text-gray-500 text-xs mt-1">Implement pagination for any entity like Student and Employee using a .NET Core API and React.</p>
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

    [HttpGet("paginated")]
    public IActionResult GetPaginated(int pageNumber = 1, int pageSize = 10)
    {
        var totalRecords = _context.Students.Count();
        var students =  _context.Students
                                .Skip((pageNumber - 1) * pageSize)
                                .Take(pageSize)
                                .ToList();

        var response = new
        {
            TotalRecords = totalRecords,
            PageNumber = pageNumber,
            PageSize = pageSize,
            Data = students
        };

        return Ok(response);
    }
}`}  
        </CodeBlock>
      </Section>

      <Section title="API Endpoint" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li><code className="bg-gray-100 px-1 rounded">GET https://localhost:7070/api/students/paginated?pageNumber=1&pageSize=10</code></li>
          <li>Retrieves students for page 1 with 10 records per page</li>
        </ul>
      </Section>

      <Section title="Frontend - React Component" color="text-yellow-600">
        <CodeBlock>
{`import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentPagination() {
  const [students, setStudents] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    fetchStudents();
  }, [pageNumber, pageSize]);

  const fetchStudents = async () => {
    const response = await axios.get(\`/api/students/paginated?pageNumber=\${pageNumber}&pageSize=\${pageSize}\`);
    setStudents(response.data.data);
    setTotalRecords(response.data.totalRecords);
  };

  const totalPages = Math.ceil(totalRecords / pageSize);

  return (
    <div>
      <div>
        <label>Page Size: </label>
        <select value={pageSize} onChange={(e)=>setPageSize(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

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

    <div>
      <button onClick={()=>setPageNumber(Math.max(pageNumber-1,1))}>Prev</button>
      <span>Page {pageNumber} of {totalPages}</span>
      <button onClick={()=>setPageNumber(Math.min(pageNumber + 1, totalPages))} rounded">Next</button>
    </div>
  </div>
  );
}

export default StudentPagination;`}
        </CodeBlock>
      </Section>

      <Section title="Summary" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Backend uses `Skip` and `Take` to implement pagination.</li>
          <li>Frontend allows selecting page size and navigating pages dynamically.</li>
          <li>This approach can be reused for any entity by updating the model and API endpoint.</li>
        </ul>
      </Section>
    </div>
  );
}

function Section({ title, color, children }) { return (<section><div className="flex items-center mb-2"><strong className={`${color}`}>{title}</strong></div>{children}</section>)}
function CodeBlock({ children }) { return ( <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">{children} </pre>)}

export default Netpagination;
