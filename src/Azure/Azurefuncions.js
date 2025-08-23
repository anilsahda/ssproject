export default function Azurefuncions() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>⚡ Azure Functions Setup</h2>

      <section>
        <b>1. ✅ What is Azure Functions?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`Azure Functions is a serverless compute service that lets you run event-driven code
without managing infrastructure. You pay only for the execution time your code uses.`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 🔹 Create an Azure Function App</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`1. Log in to Azure Portal: https://portal.azure.com
2. Search for "Function App"
3. Click "+ Create"
4. Select Subscription & Resource Group
5. Enter Function App name (globally unique)
6. Runtime stack: Node.js, .NET, Python, Java, etc.
7. Region: Choose closest region to users
8. Hosting: Consumption plan (serverless, pay-per-use)
9. Storage: Select or create a new Storage Account
10. Review + Create -> Deploy`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. ⚙ Configure Function</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`1. In your Function App -> Functions -> + Add
2. Choose Development environment: Portal or VS Code
3. Select a trigger template (HTTP trigger, Timer, Blob, Queue, etc.)
4. Function name: myFunction
5. Authorization level (for HTTP): Function, Admin, or Anonymous
6. Click Create -> Code editor opens`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. 🔒 Configure Identity & Permissions</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`1. Function App -> Identity -> Enable System-assigned Managed Identity
2. Azure will register your Function in Microsoft Entra ID
3. Assign required roles:
   - Storage Blob Data Contributor (for blob access)
   - Cosmos DB Account Reader (for Cosmos access)
   - Other roles as per your use case`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🌐 Test Function</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`1. Open your function -> Code + Test
2. For HTTP trigger: Click "Test/Run"
3. Provide query params or body as required
4. Check Logs tab for output
5. Verify response in the Test console`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. 📤 Trigger Azure Function</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`1. Function overview -> Add Trigger
2. Choose Event source: HTTP, Blob Storage, Queue Storage, Event Grid, Service Bus, Timer
3. Configure the binding (e.g., Storage account connection)
4. Save -> Azure Function will auto-execute when the event occurs`}
          </code>
        </pre>
      </section>

      <section>
        <b>7. 💻 Local Development (Optional)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`1. Install Azure Functions Core Tools
   https://learn.microsoft.com/azure/azure-functions/functions-run-local
2. Create project:
   func init MyFunctionProj --worker-runtime dotnet
   cd MyFunctionProj
   func new --name MyHttpFunction --template "HTTP trigger"
3. Run locally:
   func start
4. Deploy to Azure:
   func azure functionapp publish <FunctionAppName>`}
          </code>
        </pre>
      </section>
    </div>
  );
}

