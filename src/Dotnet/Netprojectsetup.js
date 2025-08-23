function Netprojectsetup() {
  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-indigo-700 border-b-4 border-indigo-300 pb-3">
        .NET Core API Project Setup
      </h2>

      <SectionBlock title="Prerequisites" color="indigo">
        <CodeBlock>
          <ul className="list-disc ml-6 text-gray-800">
            <li>Visual Studio 2022 Community</li>
            <li>SQL Server / MySQL / PostgreSQL</li>
          </ul>
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="1. Steps to Create a .NET Core API Project" color="green">
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
      </SectionBlock>

      <SectionBlock title="2. Install Nuget Package" color="yellow">
        <CodeBlock>
          <ul className="list-disc ml-6 text-gray-800">
            <li>Microsoft.EntityFrameworkCore</li>
            <li>Microsoft.EntityFrameworkCore.Tools</li>
            <li>Microsoft.EntityFrameworkCore.Design</li>
            <li>Microsoft.EntityFrameworkCore.SqlServer</li>
            <li>Pomelo.EntityFrameworkCore.MySql</li>
            <li>Npgsql.EntityFrameworkCore.PostgreSQL</li>
            <li>MongoDB.Driver</li>
          </ul>
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="3. Create AppDbContext.cs in Data Folder" color="purple">
        <CodeBlock>
{`public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}`}
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="4. Program.cs" color="red">
        <CodeBlock>
{`using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("SqlCon")));
//builder.Services.AddDbContext<AppDbContext>(options => options.UseMySql(MySqlConnection, ServerVersion.AutoDetect(MySqlCon)));
//builder.Services.AddDbContext<AppDbContext>(options => options.UseNpgsql(PostgresCon));

builder.Services.AddSingleton<IMongoClient>(sp => { return new MongoClient(builder.Configuration.GetConnectionString("MongoCon")); });
builder.Services.AddSingleton(sp =>
{
    var client = sp.GetRequiredService<IMongoClient>();
    return client.GetDatabase(builder.Configuration.GetValue<string>("MongoDatabase"));
});

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
app.Run();`}
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="appsettings.json" color="purple">
        <CodeBlock>
{`{
  "ConnectionStrings": {
    "SqlCon": "Server=ANIL;Database=CRUDDB;Trusted_Connection=True;TrustServerCertificate=True;",
    "MySqlCon": "Server=localhost;Port=3306;Database=CRUDDB;User=root;Password=password;TreatTinyAsBoolean=true",
    "PostgresCon": "Host=localhost;Port=5432;Database=CRUDDB;Username=postgres;Password=password",
    "MongoCon": "mongodb://localhost:27017"
    },
    "MongoDatabase": "CRUDDB"
}`}
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="Testing API" color="blue">
        <ul className="list-disc ml-6 text-gray-800">
          <li><code>Press F5 to test in Swagger</code></li>
        </ul>
      </SectionBlock>

      <section>
        <b>✅ Summary</b>
        <ul>
          <li>🔗 .Net Core Git URL: <a href="https://github.com/anilsahda/SSFullstackAPI.git" target="_blank" rel="noopener noreferrer">https://github.com/anilsahda/SSFullstackAPI.git</a></li>
        </ul>
      </section>
    </div>
  );
}

function SectionBlock({ title, color, children }) {
  const textColor = {
    indigo: "text-indigo-700",
    green: "text-green-700",
    yellow: "text-yellow-700",
    red: "text-red-700",
    purple: "text-purple-700",
    blue: "text-blue-700",
  }[color] || "text-gray-700";

  return (
    <section>
      <div className="flex items-center mb-3">
        <strong className={`${textColor} text-lg`}>{title}</strong>
      </div>
      {children}
    </section>
  );
}

function CodeBlock({ children }) {
  return (
    <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded-lg overflow-x-auto">
      {children}
    </pre>
  );
}

export default Netprojectsetup;
