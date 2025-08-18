function Netprojectsetup() {
  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-indigo-700 border-b-4 border-indigo-300 pb-3">
        .NET Core API Project Setup
      </h1>

      <section>
        <div className="flex items-center mb-3">
          <strong className="text-indigo-700 text-lg">Prerequisites</strong>
        </div>
 <CodeBlock>
        <ul className="list-disc ml-6 text-gray-800">
          <li>.NET 8 SDK installed</li>
          <li>Visual Studio 2022 Community</li>
          <li>SQL Server / PostgreSQL</li>
          <li>Postman / Swagger for testing APIs</li>
        </ul>
  </CodeBlock>
      </section>

      <section>
        <div className="flex items-center mb-3">
          <strong className="text-green-700 text-lg">Steps to Create a .NET Core API Project</strong>
        </div>
<CodeBlock>
        <ol className="list-decimal ml-6 text-gray-800">
          <li>Open <b>Visual Studio 2022</b></li>
          <li>Click <b>Create a New Project</b></li>
          <li>Search <b>ASP.NET Core Web API</b> and select it</li>
          <li>Click <b>Next</b></li>
          <li>Enter Project Name</li>
          <li>Click <b>Next</b></li>
          <li>Click <b>Create</b></li>
        </ol>
</CodeBlock>
      </section>

      <section>
        <div className="flex items-center mb-3">
          <strong className="text-yellow-700 text-lg">File and Folder Structure</strong>
        </div>
<CodeBlock>
        <ul className="list-disc ml-6 text-gray-800">
          <li><strong>Controllers:</strong> API Endpoints (e.g., UsersController.cs)</li>
          <li><strong>Models:</strong> DTOs for Request/Response Models</li>
          <li><strong>Data:</strong> DbContext and database classes</li>
          <li><strong>appsettings.json:</strong> Connection Strings, JWT Config, Logging</li>
          <li><strong>Program.cs:</strong> Application Startup, Dependency Injection, Middlewares</li>
        </ul>
 </CodeBlock>
      </section>

      <section>
        <div className="flex items-center mb-3">
          <strong className="text-yellow-700 text-lg">Install Nuget Package</strong>
        </div>
<CodeBlock>
        <ul className="list-disc ml-6 text-gray-800">
          <li>Microsoft.EntityFrameworkCore</li>
          <li>Microsoft.EntityFrameworkCore.SqlServer</li>
          <li>Microsoft.EntityFrameworkCore.Tools</li>
          <li>Microsoft.EntityFrameworkCore.Design</li>
        </ul>
 </CodeBlock>
      </section>

      <section>
        <div className="flex items-center mb-3">
          <strong className="text-red-700 text-lg">Program.cs</strong>
        </div>
<CodeBlock>
        <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded-lg overflow-x-auto">
{`using Microsoft.EntityFrameworkCore;
using YourNamespace.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Middlewares
app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();
app.Run();
`}
        </pre>
 </CodeBlock>
      </section>

      <section>
        <div className="flex items-center mb-3">
          <strong className="text-purple-700 text-lg">appsettings.json</strong>
        </div>
<CodeBlock>
        <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded-lg overflow-x-auto">
{`{
  "ConnectionStrings": {
    "DefaultConnection": "Server=ANIL;Database=DEMODB;Trusted_Connection=True;TrustServerCertificate=True;"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}`}
        </pre>
 </CodeBlock>
      </section>

      {/* 6. Testing API */}
      <section>
        <div className="flex items-center mb-3">
          <strong className="text-blue-700 text-lg">Testing API</strong>
        </div>
        <ul className="list-disc ml-6 text-gray-800">
          <li>Swagger UI: <code>https://localhost:7070/swagger/index.html</code></li>
          <li>Postman: Test API endpoints</li>
          <li>Verify CRUD operations with sample data</li>
        </ul>
      </section>

      {/* 7. CORS Policy */}
      <section>
        <div className="flex items-center mb-3">
          <strong className="text-blue-700 text-lg">Apply CORS Policy</strong>
        </div>
        <CodeBlock>
        <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded-lg overflow-x-auto">
{`//CORS Service
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

//CORS Middleware
app.UseCors("AllowAll");`}
        </pre>
 </CodeBlock>
      </section>      
    </div>
  );
}

/* Reusable Code Block Component */
function CodeBlock({ children }) {
  return (
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">
      {children}
    </pre>
  );
}

export default Netprojectsetup;
