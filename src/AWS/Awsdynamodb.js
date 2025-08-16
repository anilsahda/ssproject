export default function Awsdynamodb() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>💾 AWS DynamoDB Setup</h2>

      <section>
        <b>1. ✅ What is DynamoDB?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`DynamoDB is a fully managed NoSQL database service provided by AWS.
It offers fast and predictable performance with seamless scalability.`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 🔹 Create a DynamoDB Table</b>
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
      </section>

      <section>
        <b>3. ⚙ Table Configuration</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- Partition key: Unique identifier for items (e.g., id)
- Sort key (optional): secondary identifier for range queries
- Table class: Standard or Infrequent Access
- Provisioned capacity or On-demand: Choose based on expected workload`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. 🔒 Permissions</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. DynamoDB access is controlled via IAM roles and policies
2. Attach policies to Lambda, EC2, or user roles
3. Example policy: AmazonDynamoDBFullAccess (for development only)
4. For production, restrict access to specific tables`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 📝 CRUD Operations (Example with AWS SDK)</b>
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
      </section>

      <section>
        <b>6. ✅ Summary</b>
        <ul>
          <li>💾 DynamoDB is a serverless NoSQL database</li>
          <li>⚡ Fast, scalable, and fully managed</li>
          <li>🔒 Access controlled via IAM roles and policies</li>
          <li>🛠 Supports CRUD operations via AWS SDK or CLI</li>
        </ul>
      </section>
    </div>
  );
}

