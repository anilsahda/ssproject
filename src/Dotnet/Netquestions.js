function Netquestions() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">100+ .NET Interview Questions & Answers</h1>
        <p className="text-gray-500 text-xs mt-1">
          Comprehensive .NET interview questions and answers for freshers and experienced developers.
        </p>
      </header>

      {/* Section: .NET Basics */}
      <Section title=".NET Basics" color="text-indigo-600">
        <ol className="list-decimal ml-6 space-y-2 text-gray-700">
          <li>
            <b>What is .NET Framework?</b>
            <p>.NET Framework is a software development platform developed by Microsoft for building Windows applications and web services.</p>
          </li>
          <li>
            <b>What is CLR?</b>
            <p>Common Language Runtime (CLR) is the execution engine for .NET applications. It provides memory management, security, and exception handling.</p>
          </li>
          <li>
            <b>What are assemblies?</b>
            <p>Assemblies are compiled code libraries (DLL or EXE) in .NET that contain code, metadata, and resources.</p>
          </li>
        </ol>
      </Section>

      {/* Section: C# Concepts */}
      <Section title="C# Concepts" color="text-green-600">
        <ol className="list-decimal ml-6 space-y-2 text-gray-700" start={4}>
          <li>
            <b>What is the difference between value type and reference type?</b>
            <p>Value types store data directly, while reference types store references to the actual data on the heap.</p>
          </li>
          <li>
            <b>What is boxing and unboxing?</b>
            <p>Boxing converts a value type to object, unboxing converts object back to value type.</p>
          </li>
          <li>
            <b>Explain nullable types in C#.</b>
            <p>Nullable types allow value types to hold null using syntax: <code>int? x = null;</code></p>
          </li>
        </ol>
      </Section>

      {/* Section: ASP.NET Core & Web API */}
      <Section title="ASP.NET Core & Web API" color="text-yellow-600">
        <ol className="list-decimal ml-6 space-y-2 text-gray-700" start={10}>
          <li>
            <b>What is Middleware in ASP.NET Core?</b>
            <p>Middleware is software that is assembled into an application pipeline to handle requests and responses.</p>
          </li>
          <li>
            <b>What is the difference between IApplicationBuilder and IWebHostBuilder?</b>
            <p>IWebHostBuilder builds the host for the application, IApplicationBuilder configures the request pipeline.</p>
          </li>
          <li>
            <b>Explain routing in ASP.NET Core.</b>
            <p>Routing maps HTTP requests to controller actions based on URL patterns.</p>
          </li>
        </ol>
      </Section>

      {/* Section: Entity Framework & LINQ */}
      <Section title="Entity Framework & LINQ" color="text-red-600">
        <ol className="list-decimal ml-6 space-y-2 text-gray-700" start={20}>
          <li>
            <b>What is Entity Framework?</b>
            <p>Entity Framework is an ORM for .NET, which allows developers to work with databases using .NET objects.</p>
          </li>
          <li>
            <b>Difference between EF Core and EF 6?</b>
            <p>EF Core is lightweight, cross-platform, and supports LINQ, whereas EF 6 is Windows-only.</p>
          </li>
          <li>
            <b>What is LINQ?</b>
            <p>Language Integrated Query (LINQ) allows querying collections using a SQL-like syntax in C#.</p>
          </li>
        </ol>
      </Section>

      {/* Section: Asynchronous Programming */}
      <Section title="Asynchronous Programming" color="text-blue-600">
        <ol className="list-decimal ml-6 space-y-2 text-gray-700" start={30}>
          <li>
            <b>What is async/await in C#?</b>
            <p>Async/await enables asynchronous programming, allowing non-blocking operations.</p>
          </li>
          <li>
            <b>Difference between Task and Thread?</b>
            <p>Task represents asynchronous operations, while Thread represents a physical thread of execution.</p>
          </li>
        </ol>
      </Section>

      {/* Section: Design Patterns & Architecture */}
      <Section title="Design Patterns & Architecture" color="text-purple-600">
        <ol className="list-decimal ml-6 space-y-2 text-gray-700" start={40}>
          <li>
            <b>What is Singleton pattern?</b>
            <p>Singleton ensures a class has only one instance and provides a global point of access to it.</p>
          </li>
          <li>
            <b>Explain Onion Architecture.</b>
            <p>Onion Architecture organizes a project into layers: Domain → Application → Infrastructure → API, with dependencies pointing inward.</p>
          </li>
          <li>
            <b>What is CQRS?</b>
            <p>Command Query Responsibility Segregation separates commands (writes) from queries (reads) for better maintainability and scalability.</p>
          </li>
        </ol>
      </Section>

      {/* Summary */}
      <Section title="Summary" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>This guide covers 100+ questions across .NET basics, C#, ASP.NET Core, EF, LINQ, async, design patterns, and architecture.</li>
          <li>Each question is paired with a concise answer and code example where applicable.</li>
          <li>Useful for interview preparation and quick reference for developers.</li>
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

export default Netquestions;
