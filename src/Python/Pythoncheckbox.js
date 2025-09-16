function Pythoncheckbox() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Checkbox Integration in Django API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing CRUD functionality for the <strong>Employee</strong> model with many-to-many checkbox support in Django using PostgreSQL.
        </p>
      </header>

      <Section title="Model Definitions" color="text-green-600">
        <CodeBlock>
{`# api/models.py
from django.db import models

class Language(models.Model):
    name = models.CharField(max_length=50)

class Employee(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    mobile = models.CharField(max_length=20)
    country = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    district = models.CharField(max_length=50)
    gender = models.CharField(max_length=10)
    languages = models.ManyToManyField(Language)`}
        </CodeBlock>
      </Section>

      <Section title="Serializers" color="text-yellow-600">
        <CodeBlock>
{`# api/serializers.py
from rest_framework import serializers
from .models import Employee, Language

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    languages = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Language.objects.all()
    )

    class Meta:
        model = Employee
        fields = '__all__'`}
        </CodeBlock>
      </Section>

      <Section title="Views" color="text-red-600">
        <CodeBlock>
{`# api/views.py
from rest_framework import viewsets
from .models import Employee, Language
from .serializers import EmployeeSerializer, LanguageSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer`}
        </CodeBlock>
      </Section>

      <Section title="URLs" color="text-indigo-600">
        <CodeBlock>
{`# myproject/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import EmployeeViewSet, LanguageViewSet

router = DefaultRouter()
router.register('employees', EmployeeViewSet)
router.register('languages', LanguageViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]`}
        </CodeBlock>
      </Section>

      <Section title="Run Migrations" color="text-purple-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li><code>python manage.py makemigrations</code></li>
          <li><code>python manage.py migrate</code></li>
        </ul>
      </Section>

      <Section title="Example API Endpoints" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li><code className="bg-gray-100 px-1 rounded">GET /api/employees/</code> – Retrieves all employees</li>
          <li><code className="bg-gray-100 px-1 rounded">GET /api/employees/{`{id}`}</code> – Retrieves an employee by ID</li>
          <li><code className="bg-gray-100 px-1 rounded">POST /api/employees/</code> – Adds a new employee</li>
          <li><code className="bg-gray-100 px-1 rounded">PUT /api/employees/{`{id}`}/</code> – Updates an employee</li>
          <li><code className="bg-gray-100 px-1 rounded">DELETE /api/employees/{`{id}`}/</code> – Deletes an employee</li>
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

export default Pythoncheckbox;
