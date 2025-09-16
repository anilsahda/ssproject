function PythonProjectSetup() {
  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-indigo-700 border-b-4 border-indigo-300 pb-3">
        Django API Project Setup
      </h2>

      <SectionBlock title="Prerequisites" color="indigo">
        <CodeBlock>
          <ul className="list-disc ml-6 text-gray-800">
            <li>Python 3.10+</li>
            <li>pip / pipenv / poetry</li>
            <li>VS Code / PyCharm</li>
            <li>PostgreSQL / MySQL / SQLite</li>
          </ul>
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="1. Steps to Create a Django API Project" color="green">
        <CodeBlock>
          <ol className="list-decimal ml-6 text-gray-800">
            <li>Open terminal or command prompt</li>
            <li>Run <b>pip install django djangorestframework</b></li>
            <li>Run <b>django-admin startproject myproject</b></li>
            <li>Navigate to project: <b>cd myproject</b></li>
            <li>Run <b>python manage.py startapp api</b></li>
            <li>Add <b>'rest_framework'</b> and <b>'api'</b> to <b>INSTALLED_APPS</b> in <b>settings.py</b></li>
          </ol>
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="2. Install Additional Packages" color="yellow">
        <CodeBlock>
          <ul className="list-disc ml-6 text-gray-800">
            <li>djangorestframework</li>
            <li>psycopg2 / mysqlclient / sqlite3 (depending on DB)</li>
            <li>django-cors-headers</li>
            <li>python-dotenv</li>
          </ul>
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="3. Create Models and Serializers" color="purple">
        <CodeBlock>
{`# api/models.py
from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

# api/serializers.py
from rest_framework import serializers
from .models import Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'`}
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="4. Create Views and Routes" color="red">
        <CodeBlock>
{`# api/views.py
from rest_framework import viewsets
from .models import Item
from .serializers import ItemSerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

# myproject/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import ItemViewSet

router = DefaultRouter()
router.register(r'items', ItemViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]`}
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="5. Database Configuration (PostgreSQL Example)" color="purple">
        <CodeBlock>
{`# .env
DB_NAME=cruddb
DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432

# settings.py
import os
from dotenv import load_dotenv
load_dotenv()

DATABASES = {
  'default': {
    'ENGINE': 'django.db.backends.postgresql',
    'NAME': os.getenv('DB_NAME'),
    'USER': os.getenv('DB_USER'),
    'PASSWORD': os.getenv('DB_PASSWORD'),
    'HOST': os.getenv('DB_HOST'),
    'PORT': os.getenv('DB_PORT'),
  }
}`}
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="6. Enable CORS" color="blue">
        <CodeBlock>
{`# settings.py
INSTALLED_APPS += ['corsheaders']

MIDDLEWARE = [
  'corsheaders.middleware.CorsMiddleware',
  ...
]

CORS_ALLOW_ALL_ORIGINS = True`}
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="7. Run the Server" color="green">
        <CodeBlock>
{`python manage.py makemigrations
python manage.py migrate
python manage.py runserver`}
        </CodeBlock>
      </SectionBlock>

      <SectionBlock title="Testing API" color="blue">
        <ul className="list-disc ml-6 text-gray-800">
          <li>Visit <code>http://127.0.0.1:8000/api/items/</code> in browser</li>
          <li>You can use <code>Postman</code> or integrate <code>Swagger</code> manually</li>
        </ul>
      </SectionBlock>

      <section>
        <b>✅ Summary</b>
        <ul className="list-disc ml-6 mt-2 text-gray-800">
          <li>🔗 Django Git URL: <a href="https://github.com/anilsahda/SSFullstackAPI_Django" target="_blank" rel="noopener noreferrer">https://github.com/anilsahda/SSFullstackAPI_Django</a></li>
          <li>🔗 Django REST Framework Docs: <a href="https://www.django-rest-framework.org/" target="_blank" rel="noopener noreferrer">https://www.django-rest-framework.org/</a></li>
        </ul>
      </section>
    </div>
  );
}

function SectionBlock({ title, color, children }) {
  const textColor = {
    indigo: "text-indigo-700",
    green: "text-green-700",
    yellow: "text-yellow-700",
    red: "text-red-700",
    purple: "text-purple-700",
    blue: "text-blue-700",
  }[color] || "text-gray-700";

  return (
    <section>
      <div className="flex items-center mb-3">
        <strong className={`${textColor} text-lg`}>{title}</strong>
      </div>
      {children}
    </section>
  );
}

function CodeBlock({ children }) {
  return (
    <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
      <code>{children}</code>
    </pre>
  );
}

export default PythonProjectSetup;
