import React from "react";

export default function Pythonfacebookauth() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Facebook Authentication in Django API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implement Facebook OAuth authentication using Django API and React frontend.
        </p>
      </header>

      <Section title="✅ Steps to create Facebook OAuth Client and register your app with Facebook" color="text-blue-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Go to the Meta for Developers page</li>
          <li>Click "Create App" → Choose "Consumer" → Click Next</li>
          <li>Provide App Name, email, and Create App</li>
          <li>Under "Add a Product", choose Facebook Login → Set it up</li>
          <li>In the sidebar → Facebook Login → Settings</li>
          <li>Set Valid OAuth Redirect URIs to <code>http://localhost:8000/accounts/facebook/login/callback/</code></li>
          <li>Go to Settings → Basic</li>
          <li>Note the App ID and App Secret for your app</li>
        </ul>
      </Section>

      <Section title="Install Required Package" color="text-indigo-600">
        <CodeBlock>
{`pip install django-allauth`}
        </CodeBlock>
      </Section>

      <Section title="Configure Django for Facebook OAuth (settings.py)" color="text-green-600">
        <CodeBlock>
{`INSTALLED_APPS = [
    # other apps...
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.facebook',
]

SITE_ID = 1

AUTHENTICATION_BACKENDS = (
    "django.contrib.auth.backends.ModelBackend",
    "allauth.account.auth_backends.AuthenticationBackend",
)

LOGIN_REDIRECT_URL = "/"
LOGOUT_REDIRECT_URL = "/"

SOCIALACCOUNT_PROVIDERS = {
    "facebook": {
        "METHOD": "oauth2",
        "SCOPE": ["email", "public_profile"],
        "FIELDS": ["email", "name", "first_name", "last_name"],
        "AUTH_PARAMS": {"auth_type": "reauthenticate"},
        "LOCALE_FUNC": lambda request: "en_US",
        "VERIFIED_EMAIL": False,
        "VERSION": "v12.0",
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

      <Section title="React Component for Facebook Login" color="text-red-600">
        <CodeBlock>
{`import React from "react";

function FacebookLoginButton() {
  const handleFacebookLogin = () => {
    // Redirect to Django allauth Facebook login URL
    window.location.href = "http://localhost:8000/accounts/facebook/login/";
  };

  return (
    <button onClick={handleFacebookLogin} className="bg-blue-700 text-white px-4 py-2 rounded">
      Login with Facebook
    </button>
  );
}

export default FacebookLoginButton;`}
        </CodeBlock>
      </Section>

      <Section title="Summary" color="text-blue-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Backend configured with <code>django-allauth</code> for Facebook OAuth.</li>
          <li>Frontend triggers OAuth flow by redirecting to Django backend URL.</li>
          <li>Django handles OAuth callback and user session management.</li>
          <li>Can extend to JWT token creation for API authorization.</li>
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
