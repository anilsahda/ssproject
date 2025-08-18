function Netmicroservices() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Microservices in .NET Core using Ocelot</h1>
        <p className="text-gray-500 text-xs mt-1">Guide to implement Microservices architecture with Ocelot API Gateway in .NET Core projects.</p>
      </header>

      <Section title="Overview" color="text-indigo-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Microservices break an application into multiple independently deployable services.</li>
          <li>Ocelot acts as an **API Gateway** to route requests to appropriate microservices.</li>
          <li>API Gateway handles routing, load balancing, authentication, and aggregation.</li>
        </ul>
      </Section>

      <Section title="Solution Structure" color="text-yellow-600">
        <CodeBlock>
{`Solution
│
├─ Services
│   ├─ UserService
│   │    └─ Controllers/UserController.cs
│   └─ ProductService
│        └─ Controllers/ProductController.cs
│
└─ ApiGateway
    ├─ Program.cs
    ├─ appsettings.json
    └─ ocelot.json`}
        </CodeBlock>
      </Section>

      <Section title="Install Required Libraries" color="text-green-600">
        <CodeBlock>
{`// Install Ocelot API Gateway
Install-Package Ocelot

// JSON Configuration support
Install-Package Microsoft.Extensions.Configuration.Json

// Optional: Logging
Install-Package Serilog.AspNetCore`}
        </CodeBlock>
      </Section>

      <Section title="Project References" color="text-purple-600">
        <CodeBlock>
{`// ApiGateway should reference Service projects if needed (e.g., shared DTOs)
<ProjectReference Include="..\\Services\\UserService\\UserService.csproj" />
<ProjectReference Include="..\\Services\\ProductService\\ProductService.csproj" />`}
        </CodeBlock>
      </Section>

      <Section title="appsettings.json" color="text-blue-600">
        <CodeBlock>
{`{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*"
}`}
        </CodeBlock>
      </Section>

      <Section title="Program.cs" color="text-red-600">
        <CodeBlock>
{`using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add Ocelot configuration
builder.Configuration.AddJsonFile("ocelot.json", optional: false, reloadOnChange: true);
builder.Services.AddOcelot(builder.Configuration);

var app = builder.Build();

app.UseRouting();
app.UseEndpoints(endpoints => endpoints.MapControllers());

// Add Ocelot middleware
await app.UseOcelot();

app.Run();`}
        </CodeBlock>
      </Section>

      <Section title="Example ocelot.json" color="text-teal-600">
        <CodeBlock>
{`{
  "Routes": [
    {
      "DownstreamPathTemplate": "/api/users/{everything}",
      "DownstreamScheme": "http",
      "DownstreamHostAndPorts": [
        { "Host": "localhost", "Port": 5001 }
      ],
      "UpstreamPathTemplate": "/users/{everything}",
      "UpstreamHttpMethod": [ "GET", "POST", "PUT", "DELETE" ]
    },
    {
      "DownstreamPathTemplate": "/api/products/{everything}",
      "DownstreamScheme": "http",
      "DownstreamHostAndPorts": [
        { "Host": "localhost", "Port": 5002 }
      ],
      "UpstreamPathTemplate": "/products/{everything}",
      "UpstreamHttpMethod": [ "GET", "POST", "PUT", "DELETE" ]
    }
  ],
  "GlobalConfiguration": { "BaseUrl": "https://localhost:7070" }
}`}
        </CodeBlock>
      </Section>

      <Section title="Microservice Controllers Example" color="text-orange-600">
        <CodeBlock>
{`[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    [HttpGet]
    public IActionResult GetUsers() => Ok(new List<string> { "User1", "User2" });
}

[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    [HttpGet]
    public IActionResult GetProducts() => Ok(new List<string> { "Product1", "Product2" });
}`}
        </CodeBlock>
      </Section>

      <Section title="Summary" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Ocelot acts as a gateway to route requests to individual microservices.</li>
          <li>Supports multiple microservices with separate hosts/ports.</li>
          <li>Enables authentication, rate limiting, logging, and request aggregation.</li>
          <li>Helps decouple client applications from internal microservices structure.</li>
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
  return (<pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">{children}</pre>);
}

export default Netmicroservices;