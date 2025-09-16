import React from "react";

function Pythonimageupload() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Image Upload in Django REST API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing CRUD and image upload for the <strong>Customer</strong> model in Django with PostgreSQL.
        </p>
      </header>

      {/* Step 1: Model */}
      <Section title="Model (models.py)" color="text-green-600">
        <CodeBlock>
{`from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField(blank=True, null=True)
    mobile = models.CharField(max_length=20, blank=True, null=True)
    image = models.ImageField(upload_to='uploads/', blank=True, null=True)

    def __str__(self):
        return self.name`}
        </CodeBlock>
      </Section>

      {/* Step 2: Serializer */}
      <Section title="Serializer (serializers.py)" color="text-yellow-600">
        <CodeBlock>
{`from rest_framework import serializers
from .models import Customer

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'`}
        </CodeBlock>
      </Section>

      {/* Step 3: Views */}
      <Section title="ViewSet (views.py)" color="text-red-600">
        <CodeBlock>
{`from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Customer
from .serializers import CustomerSerializer

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    parser_classes = (MultiPartParser, FormParser)  # for image upload`}
        </CodeBlock>
      </Section>

      {/* Step 4: URLs */}
      <Section title="URLs (urls.py)" color="text-indigo-600">
        <CodeBlock>
{`from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomerViewSet

router = DefaultRouter()
router.register(r'customers', CustomerViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]`}
        </CodeBlock>
      </Section>

      {/* Step 5: Settings */}
      <Section title="Settings (settings.py)" color="text-purple-600">
        <CodeBlock>
{`MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'`}
        </CodeBlock>
      </Section>

      {/* Step 6: Serve media in development */}
      <Section title="Serve Media Files (urls.py)" color="text-purple-600">
        <CodeBlock>
{`from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)`} 
        </CodeBlock>
      </Section>

      {/* Step 7: Migrations */}
      <Section title="Migrations" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Run: <code className="bg-gray-100 px-1 rounded">python manage.py makemigrations</code></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">python manage.py migrate</code></li>
        </ul>
      </Section>

      {/* Step 8: Example API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8000/api/customers/</code> – Retrieves all customers</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8000/api/customers/{'{id}'}/</code> – Retrieves a customer by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:8000/api/customers/</code> – Adds a new customer (multipart/form-data for image)</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:8000/api/customers/{'{id}'}/</code> – Updates an existing customer</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:8000/api/customers/{'{id}'}/</code> – Deletes a customer</li>
        </ul>
      </Section>
    </div>
  );
}

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
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5 whitespace-pre-wrap">
      <code>{children}</code>
    </pre>
  );
}

export default Pythonimageupload;
