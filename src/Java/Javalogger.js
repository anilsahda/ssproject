function Javalogger() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-green-700">Logging in Spring Boot API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Guide to implement logging in Spring Boot using SLF4J and Logback. Covers logging levels, configuration, and usage in controllers.
        </p>
      </header>

      <Section title="Overview" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Spring Boot uses <b>SLF4J</b> with <b>Logback</b> by default.</li>
          <li>Supports multiple log levels: TRACE, DEBUG, INFO, WARN, ERROR.</li>
          <li>Logs can be written to console, files, or external providers (e.g., ELK, Splunk, Cloud).</li>
        </ul>
      </Section>

      <Section title="Configure Logging in application.properties" color="text-indigo-600">
        <CodeBlock>
{`# Set logging level for the entire app
logging.level.root=INFO

# Set logging level for a package
logging.level.com.example.demo=DEBUG

# Log file configuration
logging.file.name=logs/app.log
logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} - %msg%n
`}
        </CodeBlock>
      </Section>

      <Section title="Inject Logger in Controller" color="text-yellow-600">
        <CodeBlock>
{`import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {

    private static final Logger logger = LoggerFactory.getLogger(StudentController.class);

    @GetMapping("/students")
    public String getStudents() {
        logger.info("Fetching all students");
        try {
            logger.debug("Inside getStudents method");
            return "Student1, Student2";
        } catch (Exception ex) {
            logger.error("Error fetching students", ex);
            return "Error occurred";
        }
    }
}`}
        </CodeBlock>
      </Section>

      <Section title="Logging Levels" color="text-red-600">
        <CodeBlock>
{`logger.trace("Trace level message");
logger.debug("Debug level message");
logger.info("Info level message");
logger.warn("Warning level message");
logger.error("Error level message");`}
        </CodeBlock>
      </Section>

      <Section title="External Logging Options" color="text-blue-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li><b>Logback</b> (default in Spring Boot)</li>
          <li><b>Log4j2</b> (alternative logging framework)</li>
          <li><b>Centralized Logging</b> with ELK, Splunk, or Graylog</li>
          <li><b>Cloud Logging</b> with AWS CloudWatch, Azure Monitor, or GCP Logging</li>
        </ul>
      </Section>

      <Section title="Summary" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Spring Boot uses SLF4J with Logback for flexible logging.</li>
          <li>Configure log levels in <code>application.properties</code> or <code>logback-spring.xml</code>.</li>
          <li>Supports console, file, and external logging systems.</li>
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

export default Javalogger;
