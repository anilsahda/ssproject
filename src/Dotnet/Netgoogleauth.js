function Netgoogleauth() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Google Authentication in .NET Core API with React</h1>
        <p className="text-gray-500 text-xs mt-1">
          Step-by-step guide to implement Google OAuth authentication using .NET Core API and React frontend.
        </p>
      </header>

      {/* Step 1: Install Required Packages */}
      <Section title="Install Required Packages" color="text-indigo-600">
        <CodeBlock>
{`// Using NuGet Package Manager
Install-Package Microsoft.AspNetCore.Authentication.Google`}
        </CodeBlock>
      </Section>

      {/* Step 2: Configure Google Authentication in Program.cs */}
      <Section title="Configure Google Authentication in Program.cs" color="text-green-600">
        <CodeBlock>
{`using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Google;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAuthentication(options =>
{
    options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = GoogleDefaults.AuthenticationScheme;
})
.AddCookie()
.AddGoogle(options =>
{
    options.ClientId = "YOUR_GOOGLE_CLIENT_ID";
    options.ClientSecret = "YOUR_GOOGLE_CLIENT_SECRET";
    options.CallbackPath = "/signin-google";
});

builder.Services.AddControllers();
var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();`}
        </CodeBlock>
      </Section>

      {/* Step 3: Backend Controller for Google Login */}
      <Section title="Auth Controller" color="text-yellow-600">
        <CodeBlock>
{`[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    [HttpGet("google-login")]
    public IActionResult GoogleLogin()
    {
        var redirectUrl = Url.Action("GoogleResponse", "Auth");
        var properties = new AuthenticationProperties { RedirectUri = redirectUrl };
        return Challenge(properties, GoogleDefaults.AuthenticationScheme);
    }

    [HttpGet("google-response")]
    public async Task<IActionResult> GoogleResponse()
    {
        var result = await HttpContext.AuthenticateAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        if (!result.Succeeded) return Unauthorized();

        var claims = result.Principal.Identities
            .FirstOrDefault()?.Claims.Select(c => new { c.Type, c.Value });

        // You can generate your own JWT token here if needed and return to frontend
        return Ok(claims);
    }
}`}
        </CodeBlock>
      </Section>

      {/* Step 4: Frontend - React Component */}
      <Section title="React Component for Google Login" color="text-red-600">
        <CodeBlock>
{`import React from "react";

function GoogleLoginButton() {
  const handleGoogleLogin = () => {
    // Redirect to backend endpoint for Google login
    window.location.href = "https://localhost:7070/api/auth/google-login";
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      Login with Google
    </button>
  );
}

export default GoogleLoginButton;`}
        </CodeBlock>
      </Section>

      {/* Step 5: Summary */}
      <Section title="Summary" color="text-blue-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Backend is configured with Google OAuth and cookie authentication.</li>
          <li>Frontend simply redirects to the backend endpoint to handle OAuth flow.</li>
          <li>Claims or JWT token can be returned from backend to identify authenticated users.</li>
          <li>This approach can be combined with your existing JWT setup for API authorization.</li>
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

export default Netgoogleauth;
