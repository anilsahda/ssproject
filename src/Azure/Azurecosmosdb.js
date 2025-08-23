import React, { useState } from 'react';

export default function Azurecosmosdb() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>💾 Azure Cosmos DB Setup</h2>

      <ToggleSection title="1. ✅ What is Cosmos DB?">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Azure Cosmos DB is a globally distributed, multi-model NoSQL database service.
It provides high availability, low latency, and elastic scalability with support
for multiple APIs including SQL (Core), MongoDB, Cassandra, Gremlin, and Table.`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="2. 🔹 Create a Cosmos DB Account & Container">
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

      <ToggleSection title="3. 📝 CRUD Operations - Node.js & Azure Cosmos DB">
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

      <ToggleSection title="4. 🧱 CRUD Operations - .NET Core & Azure Cosmos DB">
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

      <ToggleSection title="5. ☕️ CRUD Operations - Spring Boot & Azure Cosmos DB">
        <ol>
          <li>Add Maven dependency:</li>
        </ol>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`
<dependency>
  <groupId>com.azure</groupId>
  <artifactId>azure-cosmos</artifactId>
  <version>4.54.0</version>
</dependency>`}</code>
        </pre>

        📁 <b>application.properties</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`
azure.cosmos.uri=YOUR_COSMOS_DB_ENDPOINT
azure.cosmos.key=YOUR_COSMOS_DB_KEY
azure.cosmos.database=MyDatabase
azure.cosmos.container=MyContainer`}</code>
        </pre>

        📁 <b>Country.java</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`public class Country {
    private String id;
    private String name;
    // getters and setters
}`}</code>
        </pre>

        📁 <b>CountryRepository.java</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`@Repository
public class CountryRepository {

    private final CosmosContainer container;

    public CountryRepository(CosmosClient cosmosClient) {
        this.container = cosmosClient.getDatabase("MyDatabase").getContainer("MyContainer");
    }

    public void save(Country country) {
        container.createItem(country);
    }

    public Country findById(String id) {
        return container.readItem(id, new PartitionKey(id), Country.class).getItem();
    }

    public void delete(String id) {
        container.deleteItem(id, new PartitionKey(id));
    }
}`}</code>
        </pre>

        <Section title="API Endpoints" color="text-green-600">
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

