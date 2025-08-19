function Javajwtauth() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-green-700">JWT Authentication in Spring Boot API</h1>
        <p className="text-gray-500 text-xs mt-1">Implement JWT-based authentication using Spring Boot API and React frontend.</p>
      </header>

      <Section title="Add Dependencies (pom.xml)" color="text-green-600">
        <CodeBlock>
{`<dependency>
  <groupId>io.jsonwebtoken</groupId>
  <artifactId>jjwt-api</artifactId>
  <version>0.11.5</version>
</dependency>
<dependency>
  <groupId>io.jsonwebtoken</groupId>
  <artifactId>jjwt-impl</artifactId>
  <version>0.11.5</version>
  <scope>runtime</scope>
</dependency>
<dependency>
  <groupId>io.jsonwebtoken</groupId>
  <artifactId>jjwt-jackson</artifactId>
  <version>0.11.5</version>
  <scope>runtime</scope>
</dependency>`}
        </CodeBlock>
      </Section>

      <Section title="JWT Utility Class" color="text-indigo-600">
        <CodeBlock>
{`import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import java.util.Date;

public class JwtUtil {
    private static final String SECRET = "YourSuperSecretKey123YourSuperSecretKey123"; 
    private static final long EXPIRATION = 1000 * 60 * 60 * 2; // 2 hours

    public static String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
                .signWith(Keys.hmacShaKeyFor(SECRET.getBytes()), SignatureAlgorithm.HS256)
                .compact();
    }

    public static String validateToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(SECRET.getBytes())
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}`}
        </CodeBlock>
      </Section>

      <Section title="User Model and DTO" color="text-yellow-600">
        <CodeBlock>
{`public class User {
    private int id;
    private String username;
    private String password; // store hashed in real apps
}

public class LoginDTO {
    private String username;
    private String password;
}`}
        </CodeBlock>
      </Section>

      <Section title="Auth Controller" color="text-red-600">
        <CodeBlock>
{`@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO login) {
        if("admin".equals(login.getUsername()) && "password".equals(login.getPassword())) {
            String token = JwtUtil.generateToken(login.getUsername());
            return ResponseEntity.ok(Collections.singletonMap("token", token));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
}`}
        </CodeBlock>
      </Section>

      <Section title="React Login Component" color="text-blue-600">
        <CodeBlock>
{`import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/auth/login", { username, password });
    localStorage.setItem("token", response.data.token);
    alert("Login successful!");
  };

  return (
    <form onSubmit={handleLogin} className="space-y-3">
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;`}
        </CodeBlock>
      </Section>

      <Section title="Using JWT for Authenticated API Calls" color="text-purple-600">
        <CodeBlock>
{`const token = localStorage.getItem("token");
const response = await axios.get("/api/students", { 
  headers: { Authorization: \`Bearer \${token}\` }
});`}
        </CodeBlock>
      </Section>

      <Section title="Summary" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>JWT token is generated on login and returned by Spring Boot API.</li>
          <li>React frontend stores token in localStorage.</li>
          <li>Token is sent in <code>Authorization</code> header for protected APIs.</li>
          <li>Spring Boot validates token using <code>JwtUtil</code>.</li>
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

export default Javajwtauth;
