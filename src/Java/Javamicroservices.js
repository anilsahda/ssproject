function Javamicroservices() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Microservices in Java using Spring Boot & Spring Cloud Gateway</h1>
        <p className="text-gray-500 text-xs mt-1">
          Guide to implement <strong>Microservices architecture</strong> with <strong>Spring Boot</strong> and <strong>Spring Cloud Gateway</strong> in Java projects.
        </p>
      </header>

      {/* Overview */}
      <Section title="Overview" color="text-indigo-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Microservices split applications into independently deployable services.</li>
          <li><strong>Spring Cloud Gateway</strong> acts as an API Gateway for routing.</li>
          <li>API Gateway manages authentication, logging, load balancing, and aggregation.</li>
        </ul>
      </Section>

      {/* Project Structure */}
      <Section title="Solution Structure" color="text-yellow-600">
        <CodeBlock>
{`Solution
│
├─ user-service
│   └─ src/main/java/com/example/user/UserController.java
│
├─ product-service
│   └─ src/main/java/com/example/product/ProductController.java
│
└─ api-gateway
    ├─ src/main/java/com/example/gateway/ApiGatewayApplication.java
    └─ src/main/resources/application.yml`}
        </CodeBlock>
      </Section>

      {/* Dependencies */}
      <Section title="Install Required Dependencies" color="text-green-600">
        <CodeBlock>
{`// Add in pom.xml (Maven)
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>

<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>`}
        </CodeBlock>
      </Section>

      {/* API Gateway Config */}
      <Section title="API Gateway (application.yml)" color="text-blue-600">
        <CodeBlock>
{`spring:
  application:
    name: api-gateway
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: http://localhost:8081
          predicates:
            - Path=/users/**
        - id: product-service
          uri: http://localhost:8082
          predicates:
            - Path=/products/**`}
        </CodeBlock>
      </Section>

      {/* Microservice Controllers */}
      <Section title="Microservice Controllers Example" color="text-orange-600">
        <CodeBlock>
{`// user-service (port 8081)
@RestController
@RequestMapping("/users")
public class UserController {
    @GetMapping
    public List<String> getUsers() {
        return List.of("User1", "User2");
    }
}

// product-service (port 8082)
@RestController
@RequestMapping("/products")
public class ProductController {
    @GetMapping
    public List<String> getProducts() {
        return List.of("Product1", "Product2");
    }
}`}
        </CodeBlock>
      </Section>

      {/* Run Services */}
      <Section title="Run Microservices" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Start <code>user-service</code> on port <strong>8081</strong></li>
          <li>Start <code>product-service</code> on port <strong>8082</strong></li>
          <li>Start <code>api-gateway</code> on port <strong>8080</strong></li>
          <li>Access APIs via Gateway:
            <ul className="ml-6 list-disc">
              <li><code>http://localhost:8080/users</code></li>
              <li><code>http://localhost:8080/products</code></li>
            </ul>
          </li>
        </ul>
      </Section>

      {/* Summary */}
      <Section title="Summary" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Java microservices use Spring Boot for services and Spring Cloud Gateway for routing.</li>
          <li>API Gateway centralizes cross-cutting concerns (auth, logging, load balancing).</li>
          <li>Each service runs on its own port and can be scaled independently.</li>
          <li>Helps build distributed, scalable enterprise systems.</li>
        </ul>
      </Section>
    </div>
  );
}

/* Helpers */
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

export default Javamicroservices;
