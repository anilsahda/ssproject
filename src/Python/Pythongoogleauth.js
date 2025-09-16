export default function Pythongoogleauth() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Google Authentication in Django API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implement Google OAuth authentication using Django API and React frontend.
        </p>
      </header>

      <Section title="✅ Steps to create Google OAuth Client and register your app with Google" color="text-blue-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Go to Google Developer Console</li>
          <li>Create a New Project</li>
          <li>Navigate to OAuth Consent Screen</li>
          <li>Choose External</li>
          <li>Fill in App Name, Support Email and Save</li>
          <li>Go to Credentials → Create Credentials → OAuth Client ID</li>
          <li>Application Type: Web application and add <code>http://localhost:8000/accounts/google/login/callback/</code> as Authorized redirect URI</li>
          <li>Copy the Client ID and Client Secret</li>
        </ul>
      </Section>

      <Section title="Install Required Packages" color="text-indigo-600">
        <CodeBlock>
{`pip install django-allauth`}
        </CodeBlock>
      </Section>

      <Section title="Configure Django for Google OAuth (settings.py)" color="text-green-600">
        <CodeBlock>
{`INSTALLED_APPS = [
    # other apps...
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.google',
]

SITE_ID = 1

AUTHENTICATION_BACKENDS = (
    "django.contrib.auth.backends.ModelBackend",
    "allauth.account.auth_backends.AuthenticationBackend",
)

LOGIN_REDIRECT_URL = "/"
LOGOUT_REDIRECT_URL = "/"

SOCIALACCOUNT_PROVIDERS = {
    "google": {
        "SCOPE": ["profile", "email"],
        "AUTH_PARAMS": {"access_type": "online"},
    }
}`}
        </CodeBlock>
      </Section>

      <Section title="Add URLs (urls.py)" color="text-yellow-600">
        <CodeBlock>
{`from django.urls import path, include

urlpatterns = [
    path('accounts/', include('allauth.urls')),
    # other urls...
]`}
        </CodeBlock>
      </Section>

      <Section title="React Component for Google Login" color="text-red-600">
        <CodeBlock>
{`import React from "react";

function GoogleLoginButton() {
  const handleGoogleLogin = () => {
    // Redirect to Django allauth Google login URL
    window.location.href = "http://localhost:8000/accounts/google/login/";
  };

  return (
    <button onClick={handleGoogleLogin} className="bg-red-600 text-white px-4 py-2 rounded">
      Google
    </button>
  );
}

export default GoogleLoginButton;`}
        </CodeBlock>
      </Section>

      <Section title="Summary" color="text-blue-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Backend configured with <code>django-allauth</code> for Google OAuth.</li>
          <li>Frontend triggers OAuth flow by redirecting to Django backend URL.</li>
          <li>Django handles OAuth callback and user session management.</li>
          <li>You can extend this to generate JWT tokens if needed for API authorization.</li>
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

/* Reusable CodeBlock Component */
function CodeBlock({ children }) {
  return (
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">
      {children}
    </pre>
  );
}
