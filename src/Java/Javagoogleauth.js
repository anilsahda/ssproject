function Javagoogleauth() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Google Authentication in Spring Boot API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Step-by-step guide to implement Google OAuth2 authentication in a Spring Boot backend with React frontend.
        </p>
      </header>

      {/* Step 1: Dependencies */}
      <Section title="Add Maven Dependencies" color="text-indigo-600">
        <CodeBlock>
{`<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-oauth2-client</artifactId>
</dependency>
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>`}
        </CodeBlock>
      </Section>

      {/* Step 2: application.yml */}
      <Section title="application.yml Configuration" color="text-green-600">
        <CodeBlock>
{`spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: YOUR_GOOGLE_CLIENT_ID
            client-secret: YOUR_GOOGLE_CLIENT_SECRET
            scope:
              - email
              - profile
        provider:
          google:
            authorization-uri: https://accounts.google.com/o/oauth2/v2/auth
            token-uri: https://oauth2.googleapis.com/token
            user-info-uri: https://www.googleapis.com/oauth2/v3/userinfo`}
        </CodeBlock>
      </Section>

      {/* Step 3: Security Config */}
      <Section title="Spring Security Config" color="text-yellow-600">
        <CodeBlock>
{`@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/login**").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2Login(oauth2 -> oauth2
                .defaultSuccessUrl("/api/auth/success", true)
            );

        return http.build();
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 4: Controller */}
      <Section title="Auth Controller" color="text-red-600">
        <CodeBlock>
{`@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @GetMapping("/success")
    public Map<String, Object> getUserInfo(@AuthenticationPrincipal OAuth2User principal) {
        return Map.of(
            "name", principal.getAttribute("name"),
            "email", principal.getAttribute("email"),
            "picture", principal.getAttribute("picture")
        );
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 5: React */}
      <Section title="React Component for Google Login" color="text-purple-600">
        <CodeBlock>
{`import React from "react";

function GoogleLoginButton() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      Google
    </button>
  );
}

export default GoogleLoginButton;`}
        </CodeBlock>
      </Section>

      {/* Summary */}
      <Section title="Summary" color="text-blue-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Spring Boot configured with <code>spring-boot-starter-oauth2-client</code>.</li>
          <li>Login flow handled automatically by Spring Security OAuth2.</li>
          <li>Google redirects to <code>/oauth2/authorization/google</code> endpoint.</li>
          <li>User info (name, email, picture) accessible via <code>@AuthenticationPrincipal</code>.</li>
          <li>Frontend triggers login with a simple redirect button.</li>
        </ul>
      </Section>
    </div>
  );
}

/* Reusable Components */
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

export default Javagoogleauth;
