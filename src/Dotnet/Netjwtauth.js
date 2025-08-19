function Netjwtauth() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">JWT Authentication in .NET Core API</h1>
        <p className="text-gray-500 text-xs mt-1">Implement JWT-based authentication using .NET Core API and React frontend.</p>
      </header>

      <Section title="Install JWT Package" color="text-indigo-600">
        <CodeBlock>
{`Install-Package Microsoft.AspNetCore.Authentication.JwtBearer`}
        </CodeBlock>
      </Section>

      <Section title="Configure JWT in Program.cs" color="text-green-600">
        <CodeBlock>
{`using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("YourSuperSecretKey123!"))
    };
});

builder.Services.AddControllers();
var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();`}
        </CodeBlock>
      </Section>

      {/* Step 3: Create User / Auth Model */}
      <Section title="User Model and DTO" color="text-yellow-600">
        <CodeBlock>
{`public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Password { get; set; } // Store hashed in real apps
}

public class LoginDTO
{
    public string Username { get; set; }
    public string Password { get; set; }
}`}
        </CodeBlock>
      </Section>

      {/* Step 4: Auth Controller */}
      <Section title="AuthController" color="text-red-600">
        <CodeBlock>
{`[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _config;
    private readonly AppDbContext _context;
    private readonly string secretKey = "YourSuperSecretKey123!";

    public AuthController(IConfiguration config, AppDbContext context)
    {
        _config = config;
        _context = context;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginDTO login)
    {
      var user = _context.Users.FirstOrDefault(u => u.Username == login.Username && u.Password == login.Password);
      if (user == null) return Unauthorized();

      var tokenHandler = new JwtSecurityTokenHandler();
      var key = Encoding.ASCII.GetBytes(secretKey);
      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new Claim[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Name, user.Username)
        }),
        Expires = DateTime.UtcNow.AddHours(2),
        SigningCredentials=new SigningCredentials(new SymmetricSecurityKey(key),SecurityAlgorithms.HmacSha256Signature)
      };
      var token = tokenHandler.CreateToken(tokenDescriptor);
      return Ok(new { Token = tokenHandler.WriteToken(token) });
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 5: React Frontend - Login Component */}
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
const response = await axios.get("/api/students", { headers: { Authorization: \`Bearer \${token}\`}});`}
        </CodeBlock>
      </Section>

      {/* Step 7: Summary */}
      <Section title="Summary" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>JWT token is generated on login and stored in localStorage.</li>
          <li>Frontend sends token in Authorization header for secure API calls.</li>
          <li>This approach secures APIs and ensures only authenticated users can access protected routes.</li>
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

export default Netjwtauth;
