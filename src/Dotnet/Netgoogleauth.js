function Netgoogleauth() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Google Authentication in .NET Core API</h1>
        <p className="text-gray-500 text-xs mt-1">Implement Google OAuth authentication using .NET Core API and React frontend.</p>
      </header>

      <Section title="✅ Steps to create Google OAuth Client and register your app with Google" color="text-blue-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Go to Google Developer Console</li>
          <li>Create a New Project</li>
          <li>Navigate to OAuth Consent Screen</li>
          <li>Choose External</li>
          <li>Fill in App Name, Support Email and Save</li>
          <li>Go to Credentials → Create Credentials → OAuth Client ID</li>
          <li>Application Type: Web application and add Add http://localhost:5000/signin-google as Authorized redirect URI</li>
          <li>Copy the Client ID and Client Secret</li>
        </ul>
      </Section>

      <Section title="Install Required Packages" color="text-indigo-600">
        <CodeBlock>
{`Install-Package Microsoft.AspNetCore.Authentication.Google`}
        </CodeBlock>
      </Section>

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

        var claims = result.Principal.Identities.FirstOrDefault()?.Claims.Select(c => new { c.Type, c.Value });

        return Ok(claims);
    }
}`}
        </CodeBlock>
      </Section>

      <Section title="React Component for Google Login" color="text-red-600">
        <CodeBlock>
{`import React from "react";

function GoogleLoginButton() {
  const handleGoogleLogin = () => {
    // Redirect to backend endpoint for Google login
    window.location.href = "https://localhost:7070/api/auth/google-login";
  };

  return (<button onClick={handleGoogleLogin} className="bg-red-600 text-white px-4 py-2 rounded">Google</button>);
}

export default GoogleLoginButton;`}
        </CodeBlock>
      </Section>

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

function CodeBlock({ children }) {
  return (<pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">{children}</pre>);
}

export default Netgoogleauth;