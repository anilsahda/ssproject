import React, { useState } from 'react';

export default function Azurecosmosdb() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <ToggleSection title="1. What is Azure Cosmos DB and when would you use it?">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Azure Cosmos DB is a globally distributed, multi-model NoSQL database service.
It provides high availability, low latency, and elastic scalability with support
for multiple APIs including SQL (Core), MongoDB, Cassandra, Gremlin, and Table.
We usually use Cosmos DB for high-traffic applications like e-commerce, IoT, real-time dashboards, gaming apps, or global applications where users are spread across different regions. It handles millions of requests without manual database management.`}
          </code>
        </pre>
      </ToggleSection>
      <ToggleSection title="2. What are the different APIs supported by Cosmos DB?">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Cosmos DB supports multiple APIs, so developers can use the model they are comfortable with:
Core (SQL) API – most commonly used, JSON-based documents
MongoDB API – for MongoDB-compatible apps
Cassandra API – for wide-column data
Table API – key-value storage
Gremlin API – graph-based data
This flexibility allows easy migration from existing databases.`}
          </code>
        </pre>
      </ToggleSection>
      <ToggleSection title="3. What is a container in Cosmos DB? How is it different from a collection?">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`A container is where data is actually stored in Cosmos DB.
Earlier it was called a collection, but now Microsoft uses the term container.
A container holds items (documents) and is configured with:
Partition key
Throughput (RU/s)
Indexing rules`}
          </code>
        </pre>
      </ToggleSection>
      <ToggleSection title="4. Explain partition key and why it is important.">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Partition key decides how data is distributed across physical partitions.
If we choose a good partition key, load is evenly distributed and performance is fast.
If we choose a bad partition key, one partition becomes overloaded (hot partition).
Example:
Using UserId as partition key in user-based applications is a good choice.
So, partition key is very important for scalability and performance.`}
          </code>
        </pre>
      </ToggleSection>
      <ToggleSection title="5. What are Request Units (RU/s) and how are they calculated?">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`RU/s is the currency of Cosmos DB. Every operation like read, write, update, or query consumes RUs.
Simple read = low RU
Complex query or large document = high RU
RU consumption depends on:
Document size
Query complexity
Index usage
So we must design queries carefully to save cost.`}
          </code>
        </pre>
      </ToggleSection>
      <ToggleSection title="6. Difference between throughput at database level vs container level?">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Database-level throughput: Shared RU/s across all containers
Useful when containers have uneven traffic
Container-level throughput: Dedicated RU/s for one container
Useful for critical or high-load containers
In real projects, we use container-level throughput for performance-critical data.`}
          </code>
        </pre>
      </ToggleSection>
      <ToggleSection title="7. How does Cosmos DB ensure high availability and low latency?">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Cosmos DB automatically:
Replicates data across multiple regions
Uses multi-master or single-master replication
Provides 99.999% availability SLA
Because data is closer to users geographically, latency is very low.
Failover happens automatically without downtime.`}
          </code>
        </pre>
      </ToggleSection>
      <ToggleSection title="8. What consistency levels are supported in Cosmos DB?">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Cosmos DB supports 5 consistency levels:
Strong
Bounded Staleness
Session
Consistent Prefix
Eventual
In most applications, Session consistency is used because it gives a balance between performance and correctness.`}
          </code>
        </pre>
      </ToggleSection>
      <ToggleSection title="9. How does indexing work in Cosmos DB? Can it be customized?">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`By default, Cosmos DB automatically indexes all properties.
This makes querying easy but can increase RU cost.
Yes, indexing can be customized:
Include specific fields
Exclude unnecessary fields
Use composite indexes
Proper indexing improves query performance and reduces RU consumption.`}
          </code>
        </pre>
      </ToggleSection>
      <ToggleSection title="10. How do you handle scaling and performance optimization in Cosmos DB?">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`We handle scaling by:
Choosing a good partition key
Using autoscale RU/s
Optimizing queries
Reducing document size
Custom indexing
Caching frequent reads
Cosmos DB scales horizontally automatically, so no manual sharding is required.`}
          </code>
        </pre>
      </ToggleSection>
      <ToggleSection title="🔹 Create a Cosmos DB Account & Container">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Go to Azure Portal → Create a Resource
2. Search for "Azure Cosmos DB"
3. Select API (SQL API recommended for document store)
4. Enter account name, resource group, and region
5. Review and Create
6. Inside the account, create a Database → Create Container
   - Database id: MyDatabase
   - Container id: MyContainer
   - Partition key: /id`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="📝 CRUD Operations - Node.js & Azure Cosmos DB">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import { CosmosClient } from "@azure/cosmos";

const endpoint = "YOUR_COSMOS_DB_ENDPOINT";
const key = "YOUR_COSMOS_DB_KEY";
const client = new CosmosClient({ endpoint, key });

const database = client.database("MyDatabase");
const container = database.container("MyContainer");

// Create item
await container.items.create({ id: "1", name: "John Doe", email: "john@example.com" });

// Read item
const { resource } = await container.item("1", "1").read();

// Update item
await container.item("1", "1").replace({ id: "1", name: "John Updated", email: "john@example.com" });

// Delete item
await container.item("1", "1").delete();`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="🧱 CRUD Operations - .NET Core & Azure Cosmos DB">
        <ol>
          <li>Install NuGet package: <code>Microsoft.Azure.Cosmos</code></li>
          <li>Create a Cosmos DB SQL API account and container.</li>
        </ol>

        📁 <b>Configure in appsettings.json</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`{
  "CosmosDb": {
    "Account": "YOUR_COSMOS_DB_ENDPOINT",
    "Key": "YOUR_COSMOS_DB_KEY",
    "DatabaseName": "MyDatabase",
    "ContainerName": "MyContainer"
  }
}`}</code>
        </pre>

        📁 <b>Model: Country.cs</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`public class Country
{
    public string Id { get; set; }
    public string Name { get; set; }
}`}</code>
        </pre>

        🚀 <b>CosmosDbService.cs</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`public class CosmosDbService
{
    private Container _container;

    public CosmosDbService(CosmosClient client, string databaseName, string containerName)
    {
        _container = client.GetContainer(databaseName, containerName);
    }

    public async Task AddItemAsync(Country country) =>
        await _container.CreateItemAsync(country, new PartitionKey(country.Id));

    public async Task<Country> GetItemAsync(string id) =>
        await _container.ReadItemAsync<Country>(id, new PartitionKey(id));

    public async Task UpdateItemAsync(string id, Country country) =>
        await _container.UpsertItemAsync(country, new PartitionKey(id));

    public async Task DeleteItemAsync(string id) =>
        await _container.DeleteItemAsync<Country>(id, new PartitionKey(id));
}`}</code>
        </pre>

        <Section title="API Endpoints" color="text-blue-600">
          <ul className="list-disc ml-5 space-y-1 text-gray-700">
            <li><code className="bg-gray-100 px-1 rounded">GET /api/countries</code> – Retrieves all countries</li>
            <li><code className="bg-gray-100 px-1 rounded">GET /api/countries/{`{id}`}</code> – Retrieves a country by ID</li>
            <li><code className="bg-gray-100 px-1 rounded">POST /api/countries</code> – Adds a new country</li>
            <li><code className="bg-gray-100 px-1 rounded">PUT /api/countries</code> – Updates a country</li>
            <li><code className="bg-gray-100 px-1 rounded">DELETE /api/countries/{`{id}`}</code> – Deletes a country</li>
          </ul>
        </Section>
      </ToggleSection>

    </div>
  );
}

/* Toggleable Section Component */
function ToggleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section style={{ marginBottom: '1.5rem' }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}
      >
        <span style={{ marginRight: '0.5rem' }}>{isOpen ? '▲' : '▼'}</span>
        {title}
      </div>
      {isOpen && <div style={{ marginTop: '0.5rem' }}>{children}</div>}
    </section>
  );
}

/* Reusable Sub-section Component */
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

