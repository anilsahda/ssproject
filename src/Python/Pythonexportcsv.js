import React from "react";

function Pythonexportcsv() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Export CSV in Django REST API</h1>
        <p className="text-gray-500 text-xs mt-1">
          Implementing <strong>CSV Export functionality</strong> for the <strong>Customer</strong> entity using Django REST Framework.
        </p>
      </header>

      {/* Step 1: View */}
      <Section title="View (views.py)" color="text-red-600">
        <CodeBlock>
{`from django.http import HttpResponse
from .models import Customer
import csv

def export_customers_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="customers.csv"'

    writer = csv.writer(response)
    writer.writerow(['Id', 'Name', 'Email', 'Mobile'])

    customers = Customer.objects.all()
    for customer in customers:
        writer.writerow([customer.id, customer.name, customer.email, customer.mobile])

    return response`}
        </CodeBlock>
      </Section>

      {/* Step 2: URL */}
      <Section title="URL Configuration (urls.py)" color="text-green-600">
        <CodeBlock>
{`from django.urls import path
from .views import export_customers_csv

urlpatterns = [
    path('api/customers/export/', export_customers_csv, name='export_customers_csv'),
]`}
        </CodeBlock>
      </Section>

      {/* Step 3: API Endpoint */}
      <Section title="Example API Endpoint" color="text-blue-600">
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li>
            <code className="bg-gray-100 px-1 rounded">GET http://localhost:8000/api/customers/export/</code>
          </li>
          <li>Downloads all customers as a CSV file</li>
        </ul>
      </Section>

      {/* Step 4: Sample CSV Output */}
      <Section title="Output (Sample CSV File)" color="text-purple-600">
        <CodeBlock>
{`Id,Name,Email,Mobile
1,John Doe,john@example.com,1234567890
2,Jane Smith,jane@example.com,9876543210`}
        </CodeBlock>
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

export default Pythonexportcsv;
