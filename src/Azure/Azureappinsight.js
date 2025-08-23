export default function Azureappinsight() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📊 Azure Application Insights Setup</h2>

      <section>
        <b>1. ✅ What is Application Insights?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Azure Application Insights is an Application Performance Management (APM) service.
It helps you monitor live applications, detect performance issues, track usage,
and diagnose errors with powerful analytics.`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 🔹 Create an Application Insights Resource</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Log in to Azure Portal
2. Search "Application Insights" in the top search bar
3. Click "Create"
4. Fill details:
   - Subscription: Choose your subscription
   - Resource Group: Select or create new
   - Name: myAppInsights
   - Region: Choose closest to your users
5. Click "Review + Create"
6. Click "Create" to deploy`}</code>
        </pre>
      </section>

      <section>
        <b>3. ⚙ Configure Instrumentation Key / Connection String</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Once resource is created, go to "Overview"
2. Copy "Instrumentation Key" or "Connection String"
3. Add it to your application configuration:
   - ASP.NET Core: appsettings.json
   - Node.js: ApplicationInsights SDK setup
   - Java: ApplicationInsights.xml
4. This enables telemetry to flow into Azure`}</code>
        </pre>
      </section>

      <section>
        <b>4. 📥 Install SDK in Your Application</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`✅ .NET Core:
dotnet add package Microsoft.ApplicationInsights.AspNetCore

✅ Node.js:
npm install applicationinsights

✅ Java (Maven):
<dependency>
  <groupId>com.microsoft.azure</groupId>
  <artifactId>applicationinsights-core</artifactId>
  <version>3.4.9</version>
</dependency>`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🔒 Configure in Application</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`// .NET Core Program.cs
builder.Services.AddApplicationInsightsTelemetry(builder.Configuration["ApplicationInsights:ConnectionString"]);

// Node.js (app.js)
const appInsights = require("applicationinsights");
appInsights.setup("<CONNECTION_STRING>").start();

// Java (Spring Boot application.properties)
azure.application-insights.instrumentation-key=<your-key>`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. 📊 Monitor and Analyze</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Go to Azure Portal -> Application Insights -> Overview
2. View metrics:
   - Requests
   - Failures
   - Performance
   - Live Metrics Stream
3. Use "Logs" (KQL queries) for advanced diagnostics
4. Set up alerts on performance thresholds or failures`}</code>
        </pre>
      </section>
    </div>
  );
}

