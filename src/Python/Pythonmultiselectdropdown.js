import React from "react";

function Pythonmultiselectdropdown() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Multiselect Dropdown Integration</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing CRUD functionality for the <strong>Employee</strong> entity with multiselect languages using Django REST Framework.
        </p>
      </header>

      {/* Step 1: Models */}
      <Section title="Models (models.py)" color="text-indigo-600">
        <CodeBlock>
{`from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(blank=True, null=True)
    mobile = models.CharField(max_length=20, blank=True, null=True)
    country_id = models.IntegerField()
    state_id = models.IntegerField()
    district_id = models.IntegerField()
    gender_id = models.IntegerField()

class Language(models.Model):
    name = models.CharField(max_length=100)

class EmployeeLanguage(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)`}
        </CodeBlock>
      </Section>

      {/* Step 2: Serializers */}
      <Section title="Serializers (serializers.py)" color="text-green-600">
        <CodeBlock>
{`from rest_framework import serializers
from .models import Employee, Language, EmployeeLanguage

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ['id', 'name']

class EmployeeSerializer(serializers.ModelSerializer):
    languages = serializers.PrimaryKeyRelatedField(many=True, queryset=Language.objects.all(), source='employeelanguage_set')

    class Meta:
        model = Employee
        fields = ['id', 'name', 'email', 'mobile', 'country_id', 'state_id', 'district_id', 'gender_id', 'languages']

    def create(self, validated_data):
        languages_data = validated_data.pop('employeelanguage_set', [])
        employee = Employee.objects.create(**validated_data)
        for language in languages_data:
            EmployeeLanguage.objects.create(employee=employee, language=language)
        return employee

    def update(self, instance, validated_data):
        languages_data = validated_data.pop('employeelanguage_set', [])
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        # Clear existing languages
        EmployeeLanguage.objects.filter(employee=instance).delete()
        for language in languages_data:
            EmployeeLanguage.objects.create(employee=instance, language=language)
        return instance`}
        </CodeBlock>
      </Section>

      {/* Step 3: Views */}
      <Section title="Views (views.py)" color="text-yellow-600">
        <CodeBlock>
{`from rest_framework import viewsets
from .models import Employee
from .serializers import EmployeeSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer`}
        </CodeBlock>
      </Section>

      {/* Step 4: URLs */}
      <Section title="URL Routing (urls.py)" color="text-blue-600">
        <CodeBlock>
{`from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EmployeeViewSet

router = DefaultRouter()
router.register(r'employees', EmployeeViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]`}
        </CodeBlock>
      </Section>

      {/* Step 5: Example API Endpoints */}
      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li><code className="bg-gray-100 px-1 rounded">GET /api/employees/</code> – List all employees</li>
          <li><code className="bg-gray-100 px-1 rounded">GET /api/employees/{`{id}`}/</code> – Retrieve employee by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST /api/employees/</code> – Create new employee with languages</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT /api/employees/{`{id}`}/</code> – Update employee and languages</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE /api/employees/{`{id}`}/</code> – Delete employee</li>
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
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">
      <code>{children}</code>
    </pre>
  );
}

export default Pythonmultiselectdropdown;
