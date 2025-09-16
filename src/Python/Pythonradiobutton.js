import React from "react";

function Pythonradiobutton() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Radio Button Integration in Django REST API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Step-by-step guide to implementing CRUD for the <strong>Student</strong> model in Django with PostgreSQL.
        </p>
      </header>

      {/* Step 1: Model */}
      <Section title="Model (models.py)" color="text-green-600">
        <CodeBlock>
{`from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(blank=True, null=True)
    mobile = models.CharField(max_length=20, blank=True, null=True)
    country_id = models.IntegerField()
    state_id = models.IntegerField()
    district_id = models.IntegerField()

    GENDER_CHOICES = [
        (1, 'Male'),
        (2, 'Female'),
        (3, 'Other'),
    ]
    gender_id = models.IntegerField(choices=GENDER_CHOICES)

    def __str__(self):
        return self.name`}
        </CodeBlock>
      </Section>

      {/* Step 2: Serializer */}
      <Section title="Serializer (serializers.py)" color="text-yellow-600">
        <CodeBlock>
{`from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'`}
        </CodeBlock>
      </Section>

      {/* Step 3: Views */}
      <Section title="ViewSet (views.py)" color="text-red-600">
        <CodeBlock>
{`from rest_framework import viewsets
from .models import Student
from .serializers import StudentSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer`}
        </CodeBlock>
      </Section>

      {/* Step 4: URLs */}
      <Section title="URLs (urls.py)" color="text-indigo-600">
        <CodeBlock>
{`from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentViewSet

router = DefaultRouter()
router.register(r'students', StudentViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]`}
        </CodeBlock>
      </Section>

      {/* Step 5: Migrations */}
      <Section title="Migrations" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Run: <code className="bg-gray-100 px-1 rounded">python manage.py makemigrations</code></li>
          <li>Run: <code className="bg-gray-100 px-1 rounded">python manage.py migrate</code></li>
        </ul>
      </Section>

      {/* Step 6: Example API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8000/api/students/</code> – Retrieves all students</li>
          <li><code className="bg-gray-100 px-1 rounded">GET http://localhost:8000/api/students/{'{id}'}/</code> – Retrieves a student by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST http://localhost:8000/api/students/</code> – Adds a new student</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT http://localhost:8000/api/students/{'{id}'}/</code> – Updates an existing student</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE http://localhost:8000/api/students/{'{id}'}/</code> – Deletes a student</li>
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

export default Pythonradiobutton;