import React from "react";

function Pythonsearching() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Search Functionality in Django REST API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Guide to implement search functionality for any entity like Student and Employee using Django REST Framework and React.
        </p>
      </header>

      {/* Backend - View */}
      <Section title="Backend - API View (views.py)" color="text-indigo-600">
        <CodeBlock>
{`from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Student
from .serializers import StudentSerializer
from django.db.models import Q

@api_view(['GET'])
def search_students(request):
    query = request.GET.get('query', '')
    if query == '':
        students = Student.objects.all()
    else:
        students = Student.objects.filter(
            Q(name__icontains=query) | Q(email__icontains=query)
        )
    serializer = StudentSerializer(students, many=True)
    return Response(serializer.data)`}
        </CodeBlock>
      </Section>

      {/* API Endpoint */}
      <Section title="API Endpoint (urls.py)" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>
            <code className="bg-gray-100 px-1 rounded">GET http://localhost:8000/api/students/search/?query=John</code> – Retrieves students matching the search query
          </li>
        </ul>
      </Section>

      {/* Frontend React */}
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
    const response = await axios.get("http://localhost:8000/api/students/search/");
    setStudents(response.data);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(\`http://localhost:8000/api/students/search/?query=\${query}\`);
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
          placeholder="Search by name or email"
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

      {/* Summary */}
      <Section title="Summary" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Backend uses a GET endpoint with a query string parameter to filter results using Django ORM.</li>
          <li>Frontend React component fetches filtered results dynamically using Axios.</li>
          <li>This pattern can be adapted to any model by adjusting filtering fields and serializers.</li>
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

export default Pythonsearching;
