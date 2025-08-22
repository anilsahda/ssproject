import React, { useState } from 'react';

export default function Awsdynamodb() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>💾 AWS DynamoDB Setup</h2>
      <ToggleSection title="1. ✅ What is DynamoDB?">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`DynamoDB is a fully managed NoSQL database service provided by AWS.
It offers fast and predictable performance with seamless scalability.`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="2. 🔹 Create a DynamoDB Table">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Log in to AWS Management Console
2. Go to Services -> DynamoDB
3. Click "Create table"
4. Table name: MyTable
5. Primary key: id (String)
6. Leave other settings default or configure as needed
7. Click "Create"`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="3. 📝 CRUD Operations - Node JS & AWS Dynamo DB">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });
const dynamodb = new AWS.DynamoDB.DocumentClient();

// Create / Put item
await dynamodb.put({
  TableName: 'MyTable',
  Item: { id: '1', name: 'John Doe', email: 'john@example.com' }
}).promise();

// Read / Get item
const result = await dynamodb.get({
  TableName: 'MyTable',
  Key: { id: '1' }
}).promise();

// Update item
await dynamodb.update({
  TableName: 'MyTable',
  Key: { id: '1' },
  UpdateExpression: 'set email = :e',
  ExpressionAttributeValues: { ':e': 'john.doe@example.com' }
}).promise();

// Delete item
await dynamodb.delete({
  TableName: 'MyTable',
  Key: { id: '1' }
}).promise();`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="4. 🧱 CRUD Operations - .NET Core & AWS Dynamo DB">
        <ol>
          <li>Install Nuget Package: <code>AWSSDK.DynamoDBv2</code></li>
          <li>Create a DynamoDB table <code>Countries</code> with <code>Id</code> as the partition key in AWS.</li>
        </ol>

        📁 <b>Configure AWS in appsettings.json</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`{
  "AWS": {
    "AccessKey": "YOUR_ACCESS_KEY",
    "SecretKey": "YOUR_SECRET_KEY",
    "Region": "us-east-1"
  }
}`}</code>
        </pre>

        📁 <b>Model: Country.cs</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`using Amazon.DynamoDBv2.DataModel;

[DynamoDBTable("Countries")]
public class Country
{
    [DynamoDBHashKey] // Partition key
    public string Id { get; set; }

    [DynamoDBProperty]
    public string Name { get; set; }
}`}</code>
        </pre>

        🚀 <b>Controller: CountryController.cs</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`using Microsoft.AspNetCore.Mvc;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;

[ApiController]
[Route("api/[controller]")]
public class CountriesController : ControllerBase
{
    private readonly DynamoDBContext _dbContext;
    public CountriesController(IAmazonDynamoDB dynamoDB)
    {
        _dbContext = new DynamoDBContext(dynamoDB);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(string id)
    {
        return Ok(await _dbContext.LoadAsync<Country>(id));
    }

    [HttpPost]
    public async Task<IActionResult> Create(Country country)
    {
        await _dbContext.SaveAsync(country);
        return Ok("Country created successfully!");
    }

    [HttpPut]
    public async Task<IActionResult> Update(Country country)
    {
        await _dbContext.SaveAsync(country);
        return Ok("Country updated.");
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        await _dbContext.DeleteAsync<Country>(id);
        return Ok("Country deleted.");
    }
}`}</code>
        </pre>

        ⚙️ <b>Register AWS in Program.cs</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`using Amazon.DynamoDBv2;

var awsConfig = builder.Configuration.GetSection("AWS");
var credentials = new BasicAWSCredentials(awsConfig["AccessKey"], awsConfig["SecretKey"]);
var region = RegionEndpoint.GetBySystemName(awsConfig["Region"]);

builder.Services.AddSingleton<IAmazonDynamoDB>(sp => new AmazonDynamoDBClient(credentials, region));`}</code>
        </pre>

        <Section title="API Endpoints" color="text-blue-600">
          <ul className="list-disc ml-5 space-y-1 text-gray-700">
            <li><code className="bg-gray-100 px-1 rounded">GET /api/countries</code> – Retrieves all countries</li>
            <li><code className="bg-gray-100 px-1 rounded">GET /api/countries/{"{id}"}</code> – Retrieves a country by ID</li>
            <li><code className="bg-gray-100 px-1 rounded">POST /api/countries</code> – Adds a new country</li>
            <li><code className="bg-gray-100 px-1 rounded">PUT /api/countries</code> – Updates an existing country</li>
            <li><code className="bg-gray-100 px-1 rounded">DELETE /api/countries/{"{id}"}</code> – Deletes a country</li>
          </ul>
        </Section>
      </ToggleSection>
      <ToggleSection title="5. ☕️ CRUD Operations - Spring Boot & AWS DynamoDB">
        <ol>
          <li>Add dependencies to your <code>pom.xml</code>:</li>
        </ol>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`
<dependency>
  <groupId>software.amazon.awssdk</groupId>
  <artifactId>dynamodb</artifactId>
</dependency>
<dependency>
  <groupId>software.amazon.awssdk</groupId>
  <artifactId>auth</artifactId>
</dependency>`}</code>
        </pre>

        <ol start="2">
          <li>📁 <b>application.properties</b> configuration:</li>
        </ol>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`
aws.accessKey=YOUR_ACCESS_KEY
aws.secretKey=YOUR_SECRET_KEY
aws.region=us-east-1`}</code>
        </pre>

        <ol start="3">
          <li>📁 <b>DynamoDBConfig.java</b> - configure DynamoDB client:</li>
        </ol>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`@Configuration
public class DynamoDBConfig {

    @Value("\${aws.accessKey}")
    private String accessKey;

    @Value("\${aws.secretKey}")
    private String secretKey;

    @Value("\${aws.region}")
    private String region;

    @Bean
    public DynamoDbClient dynamoDbClient() {
        AwsBasicCredentials awsCreds = AwsBasicCredentials.create(accessKey, secretKey);
        return DynamoDbClient.builder()
                .region(Region.of(region))
                .credentialsProvider(StaticCredentialsProvider.create(awsCreds))
                .build();
    }
}`}</code>
        </pre>

        <ol start="4">
          <li>📁 <b>Country.java</b> - the model:</li>
        </ol>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`@DynamoDbBean
public class Country {
    private String id;
    private String name;

    @DynamoDbPartitionKey
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}`}</code>
        </pre>

        <ol start="5">
          <li>📁 <b>CountryService.java</b> - service layer for CRUD:</li>
        </ol>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`@Service
public class CountryService {

    private final DynamoDbEnhancedClient enhancedClient;
    private final DynamoDbTable<Country> countryTable;

    public CountryService(DynamoDbClient dynamoDbClient) {
        this.enhancedClient = DynamoDbEnhancedClient.builder()
                .dynamoDbClient(dynamoDbClient)
                .build();
        this.countryTable = enhancedClient.table("Countries", TableSchema.fromBean(Country.class));
    }

    public void save(Country country) {
        countryTable.putItem(country);
    }

    public Country get(String id) {
        return countryTable.getItem(Key.builder().partitionValue(id).build());
    }

    public void delete(String id) {
        countryTable.deleteItem(Key.builder().partitionValue(id).build());
    }

    public List<Country> listAll() {
        return countryTable.scan().items().stream().collect(Collectors.toList());
    }
}`}</code>
        </pre>

        <ol start="6">
          <li>📁 <b>CountryController.java</b> - REST API layer:</li>
        </ol>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`@RestController
@RequestMapping("/api/countries")
public class CountryController {

    private final CountryService service;

    public CountryController(CountryService service) {
        this.service = service;
    }

    @GetMapping
    public List<Country> getAll() {
        return service.listAll();
    }

    @GetMapping("/{id}")
    public Country get(@PathVariable String id) {
        return service.get(id);
    }

    @PostMapping
    public void create(@RequestBody Country country) {
        service.save(country);
    }

    @PutMapping
    public void update(@RequestBody Country country) {
        service.save(country);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
}`}</code>
        </pre>

        <Section title="API Endpoints" color="text-green-600">
          <ul className="list-disc ml-5 space-y-1 text-gray-700">
            <li><code className="bg-gray-100 px-1 rounded">GET /api/countries</code> – Retrieves all countries</li>
            <li><code className="bg-gray-100 px-1 rounded">GET /api/countries/{"{id}"}</code> – Retrieves a country by ID</li>
            <li><code className="bg-gray-100 px-1 rounded">POST /api/countries</code> – Adds a new country</li>
            <li><code className="bg-gray-100 px-1 rounded">PUT /api/countries</code> – Updates a country</li>
            <li><code className="bg-gray-100 px-1 rounded">DELETE /api/countries/{"{id}"}</code> – Deletes a country</li>
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
