import React from "react";

function Pythoncountry() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Country CRUD Operation</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing CRUD functionality for the <strong>Country</strong> model in Django with PostgreSQL.
        </p>
      </header>

      {/* Step 1: Model */}
      <Section title="Model (models.py)" color="text-green-600">
        <CodeBlock>
{`# api/models.py
from django.db import models

class Country(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name`}
        </CodeBlock>
      </Section>

      {/* Step 2: Serializer */}
      <Section title="Serializer (serializers.py)" color="text-yellow-600">
        <CodeBlock>
{`# api/serializers.py
from rest_framework import serializers
from .models import Country

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'`}
        </CodeBlock>
      </Section>

      {/* Step 3: ViewSet */}
      <Section title="ViewSet (views.py)" color="text-red-600">
        <CodeBlock>
{`# api/views.py
from rest_framework import viewsets
from .models import Country
from .serializers import CountrySerializer

class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer`}
        </CodeBlock>
      </Section>

      {/* Step 4: Router & URL Config */}
      <Section title="URLs (urls.py)" color="text-indigo-600">
        <CodeBlock>
{`# myproject/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import CountryViewSet

router = DefaultRouter()
router.register(r'countries', CountryViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]`}
        </CodeBlock>
      </Section>

      {/* Step 5: Migrations */}
      <Section title="Migrations" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Open terminal or command prompt</li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">python manage.py makemigrations</code></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">python manage.py migrate</code></li>
        </ul>
      </Section>

      {/* Step 6: API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8000/api/countries/</code> – Retrieves all countries</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8000/api/countries/{'{id}'}</code> – Retrieves a country by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:8000/api/countries/</code> – Adds a new country</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:8000/api/countries/{'{id}'}/</code> – Updates an existing country</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:8000/api/countries/{'{id}'}/</code> – Deletes a country</li>
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
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5 whitespace-pre-wrap">
      <code>{children}</code>
    </pre>
  );
}

export default Pythoncountry;
