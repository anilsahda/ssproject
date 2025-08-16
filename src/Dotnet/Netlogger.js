import React from "react";

function Netlogger() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Logging in .NET Core API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Guide to implement logging in .NET Core API using built-in ILogger, different log levels, and external providers.
        </p>
      </header>

      {/* Step 1: Overview */}
      <Section title="Overview" color="text-indigo-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Use built-in <b>ILogger</b> interface for logging in .NET Core.</li>
          <li>Supports multiple log levels: Trace, Debug, Information, Warning, Error, Critical.</li>
          <li>Logs can be written to console, files, or external providers (e.g., Seq, ELK, Azure App Insights).</li>
        </ul>
      </Section>

      {/* Step 2: Configure Logging in Program.cs */}
      <Section title="Configure Logging in Program.cs" color="text-green-600">
        <CodeBlock>
{`var builder = WebApplication.CreateBuilder(args);

// Add default logging providers (Console, Debug, EventSource)
builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Logging.AddDebug();

// Optional: Set minimum log level
builder.Logging.SetMinimumLevel(LogLevel.Information);

var app = builder.Build();
app.MapControllers();
app.Run();`}
        </CodeBlock>
      </Section>

      {/* Step 3: Inject ILogger into Controller */}
      <Section title="Inject ILogger into Controller" color="text-yellow-600">
        <CodeBlock>
{`using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

[ApiController]
[Route("api/[controller]")]
public class StudentsController : ControllerBase
{
    private readonly ILogger<StudentsController> _logger;

    public StudentsController(ILogger<StudentsController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IActionResult Get()
    {
        _logger.LogInformation("Fetching all students");
        try
        {
            // Your code to fetch students
            _logger.LogDebug("Successfully fetched students");
            return Ok(new List<string> { "Student1", "Student2" });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching students");
            return StatusCode(500, "Internal server error");
        }
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 4: Logging Levels */}
      <Section title="Logging Levels" color="text-red-600">
        <CodeBlock>
{`_logger.LogTrace("Trace level message");
_logger.LogDebug("Debug level message");
_logger.LogInformation("Information level message");
_logger.LogWarning("Warning level message");
_logger.LogError("Error level message");
_logger.LogCritical("Critical level message");`}
        </CodeBlock>
      </Section>

      {/* Step 5: External Logging Providers */}
      <Section title="External Logging Providers (Optional)" color="text-blue-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li><b>File Logging</b> using <code>Serilog</code> or <code>NLog</code></li>
          <li><b>Centralized Logging</b> using <code>Seq</code> or <code>ELK Stack</code></li>
          <li><b>Cloud Logging</b> using <code>Azure Application Insights</code></li>
        </ul>
      </Section>

      {/* Step 6: Summary */}
      <Section title="Summary" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>ILogger provides a flexible and built-in way to log events in .NET Core.</li>
          <li>Different log levels help distinguish between informational messages, warnings, and errors.</li>
          <li>Supports both console logging for development and external logging providers for production monitoring.</li>
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
      {children}
    </pre>
  );
}

export default Netlogger
