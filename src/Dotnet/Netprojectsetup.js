function Netprojectsetup() {
  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-indigo-700 border-b-4 border-indigo-300 pb-3">.NET Core API Project Setup</h2>

      <section>
        <div className="flex items-center mb-3">
          <strong className="text-indigo-700 text-lg">Prerequisites</strong>
        </div>
 <CodeBlock>
        <ul className="list-disc ml-6 text-gray-800">
          <li>Visual Studio 2022 Community</li>
          <li>SQL Server / MySQL / PostgreSQL</li>
        </ul>
  </CodeBlock>
      </section>

      <section>
        <div className="flex items-center mb-3">
          <strong className="text-green-700 text-lg">1. Steps to Create a .NET Core API Project</strong>
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
          <strong className="text-yellow-700 text-lg">2. Install Nuget Package</strong>
        </div>
<CodeBlock>
        <ul className="list-disc ml-6 text-gray-800">
          <li>Microsoft.EntityFrameworkCore</li>
          <li>Microsoft.EntityFrameworkCore.Tools</li>
          <li>Microsoft.EntityFrameworkCore.Design</li>
          <li>Microsoft.EntityFrameworkCore.SqlServer</li>
          <li>Pomelo.EntityFrameworkCore.MySql</li>
          <li>Npgsql.EntityFrameworkCore.PostgreSQL</li>
        </ul>
 </CodeBlock>
      </section>

      <section>
        <div className="flex items-center mb-3">
          <strong className="text-purple-700 text-lg">3. Create AppDbContext.cs in Data Folder</strong>
        </div>
<CodeBlock>
        <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded-lg overflow-x-auto">
{`public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}`}
        </pre>
 </CodeBlock>
      </section>

      <section>
        <div className="flex items-center mb-3">
          <strong className="text-red-700 text-lg">4. Program.cs</strong>
        </div>
<CodeBlock>
        <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded-lg overflow-x-auto">
{`using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure DbContext
builder.Services.AddDbContext<AppDbContext>(options=>options.UseSqlServer(builder.Configuration.GetConnectionString("SqlCon")));
//builder.Services.AddDbContext<AppDbContext>(options=>options.UseMySql(MySqlConnection,ServerVersion.AutoDetect(MySqlCon)));
//builder.Services.AddDbContext<AppDbContext>(options => options.UseNpgsql(PostgresCon));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAll");
app.UseHttpsRedirection();
app.UseAuthentication();
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
    "SqlCon": "Server=ANIL;Database=CrudDb;Trusted_Connection=True;TrustServerCertificate=True;",
    "MySqlCon": "Server=localhost;Port=3306;Database=CrudDb;User=root;Password=password;TreatTinyAsBoolean=true",
    "PostgresCon": "Host=localhost;Port=5432;Database=CrudDb;Username=postgres;Password=password"
  }
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
          <li><code>Press F5 to test in Swagger</code></li>
        </ul>
      </section>
    </div>
  );
}

function CodeBlock({ children }) {return (<pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">{children}</pre>);}

export default Netprojectsetup;
