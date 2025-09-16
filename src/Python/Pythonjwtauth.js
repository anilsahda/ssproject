import React from "react";

function Pythonjwtauth() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">JWT Authentication with Django REST Framework</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implement JWT-based authentication using Django REST Framework backend and React frontend.
        </p>
      </header>

      {/* Step 1: Install Packages */}
      <Section title="Install Required Packages" color="text-indigo-600">
        <CodeBlock>
{`pip install djangorestframework-simplejwt
pip install djangorestframework`}
        </CodeBlock>
      </Section>

      {/* Step 2: Configure JWT in settings.py */}
      <Section title="Add JWT Settings in settings.py" color="text-green-600">
        <CodeBlock>
{`REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}

from datetime import timedelta

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(hours=2),
    'AUTH_HEADER_TYPES': ('Bearer',),
}`}
        </CodeBlock>
      </Section>

      {/* Step 3: User Serializer and Model */}
      <Section title="User Serializer (serializers.py)" color="text-yellow-600">
        <CodeBlock>
{`from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        return user`}
        </CodeBlock>
      </Section>

      {/* Step 4: Views (token obtain + register) */}
      <Section title="Views (views.py)" color="text-red-600">
        <CodeBlock>
{`from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import UserSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CustomTokenObtainPairView(TokenObtainPairView):
    # You can customize token claims here if needed
    pass`}
        </CodeBlock>
      </Section>

      {/* Step 5: URLs (urls.py) */}
      <Section title="URLs (urls.py)" color="text-blue-600">
        <CodeBlock>
{`from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, CustomTokenObtainPairView

urlpatterns = [
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register/', RegisterView.as_view(), name='register'),
]`}
        </CodeBlock>
      </Section>

      {/* Step 6: React Login Component */}
      <Section title="React Login Component" color="text-blue-600">
        <CodeBlock>
{`import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/token/", { username, password });
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      alert("Login successful!");
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-3">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;`}
        </CodeBlock>
      </Section>

      {/* Step 7: Using JWT in API Calls */}
      <Section title="Using JWT for Authenticated API Calls" color="text-purple-600">
        <CodeBlock>
{`const token = localStorage.getItem("access_token");
const response = await axios.get("/api/protected-endpoint/", {
  headers: { Authorization: \`Bearer \${token}\` }
});`}
        </CodeBlock>
      </Section>

      {/* Step 8: Summary */}
      <Section title="Summary" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>JWT tokens are issued using SimpleJWT package in Django REST Framework.</li>
          <li>Frontend stores access and refresh tokens in localStorage.</li>
          <li>Authenticated API requests include the token in the Authorization header.</li>
          <li>Refresh tokens can be used to renew access tokens when expired.</li>
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
      <code>{children}</code>
    </pre>
  );
}

export default Pythonjwtauth;
