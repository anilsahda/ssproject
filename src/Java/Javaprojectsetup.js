function Javaprojectsetup() {
  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-indigo-700 border-b-4 border-indigo-300 pb-3">
        Spring Boot API Project Setup
      </h2>

      {/* 1. Prerequisites */}
      <SectionBlock title="Prerequisites" color="indigo">
        <CodeBlock>
          <ul className="list-disc ml-6 text-gray-800">
            <li>Java 17+ (JDK)</li>
            <li>Spring Boot CLI (optional)</li>
            <li>IDE (IntelliJ IDEA / Eclipse / VS Code)</li>
            <li>Maven or Gradle</li>
            <li>Database: MySQL / PostgreSQL</li>
          </ul>
        </CodeBlock>
      </SectionBlock>

      {/* 2. Steps to Create Project */}
      <SectionBlock title="1. Steps to Create a Spring Boot Project" color="green">
        <CodeBlock>
          <ol className="list-decimal ml-6 text-gray-800">
            <li>Go to <b>https://start.spring.io</b></li>
            <li>Select <b>Maven Project</b> / <b>Gradle Project</b></li>
            <li>Choose <b>Java</b> and version <b>17+</b></li>
            <li>Enter <b>Group</b> and <b>Artifact</b> name</li>
            <li>Select Dependencies:
              <ul className="list-disc ml-6">
                <li>Spring Web</li>
                <li>Spring Data JPA</li>
                <li>Database Driver (MySQL / PostgreSQL)</li>
                <li>Lombok (optional)</li>
              </ul>
            </li>
            <li>Click <b>Generate</b> to download project zip</li>
            <li>Extract and open in your IDE</li>
          </ol>
        </CodeBlock>
      </SectionBlock>

      {/* 3. Maven Dependencies */}
      <SectionBlock title="2. pom.xml (Maven Dependencies)" color="yellow">
        <CodeBlock>
{`<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
  </dependency>
  <dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <scope>runtime</scope>
  </dependency>
  <dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
  </dependency>
  <dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
  </dependency>
</dependencies>`}
        </CodeBlock>
      </SectionBlock>

      {/* 4. application.properties */}
      <SectionBlock title="3. application.properties" color="purple">
        <CodeBlock>
{`spring.datasource.url=jdbc:mysql://localhost:3306/demo_db
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect

# For PostgreSQL
# spring.datasource.url=jdbc:postgresql://localhost:5432/demo_db
# spring.datasource.username=postgres
# spring.datasource.password=password
# spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect`}
        </CodeBlock>
      </SectionBlock>

      {/* 5. Main Application Class */}
      <SectionBlock title="4. DemoApplication.java" color="red">
        <CodeBlock>
{`@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}`}
        </CodeBlock>
      </SectionBlock>

      {/* 6. Simple REST Controller */}
      <SectionBlock title="5. Sample REST Controller" color="blue">
        <CodeBlock>
{`@RestController
@RequestMapping("/api/hello")
public class HelloController {
    @GetMapping
    public String hello() {
        return "Hello, Spring Boot API!";
    }
}`}
        </CodeBlock>
      </SectionBlock>

      {/* 7. Run Project */}
      <SectionBlock title="Running Project" color="green">
        <ul className="list-disc ml-6 text-gray-800">
          <li>Run <code>mvn spring-boot:run</code> OR start from IDE</li>
          <li>Visit <code>http://localhost:8080/api/hello</code></li>
          <li>Test APIs using Postman / Swagger</li>
        </ul>
      </SectionBlock>
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

export default Javaprojectsetup;
