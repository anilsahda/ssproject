export default function Awslambda() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>⚡ AWS Lambda Function Setup</h2>

      <section>
        <b>1. ✅ What is Lambda?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`AWS Lambda is a serverless compute service that lets you run code without provisioning
or managing servers. You pay only for the compute time you consume.`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 🔹 Create a Lambda Function</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Log in to AWS Management Console
2. Go to Services -> Lambda
3. Click "Create function"
4. Choose "Author from scratch"
5. Function name: myLambdaFunction
6. Runtime: Node.js, Python, or your preferred runtime
7. Click "Create function"`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. ⚙ Configure Function</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Function code: Write code inline or upload a ZIP file
2. Handler: entry point of your function (e.g., index.handler)
3. Memory: Set appropriate memory allocation
4. Timeout: Set maximum execution time (default 3 sec)`}</code>
        </pre>
      </section>

      <section>
        <b>4. 🔒 Set Permissions</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Lambda executes with an IAM role
2. Choose "Create a new role with basic Lambda permissions" or select an existing role
3. Add policies if your Lambda needs access to S3, DynamoDB, or other services`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🌐 Test Lambda Function</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Click "Test"
2. Configure a test event (can use the default Hello World)
3. Click "Test" again
4. Check logs and output in the console`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. 📤 Trigger Lambda</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Go to "Function overview" -> Add trigger
2. Select service (API Gateway, S3, CloudWatch Events, etc.)
3. Configure trigger and save
4. Lambda executes automatically when the event occurs`}
          </code>
        </pre>
      </section>

      <section>
        <b>7. ✅ Summary</b>
        <ul>
          <li>⚡ Lambda is serverless, pay-per-use function execution</li>
          <li>🔒 Permissions are controlled via IAM roles</li>
          <li>🌐 Can be triggered by events like API Gateway, S3, DynamoDB</li>
          <li>🛠 Supports multiple runtimes and environment configuration</li>
        </ul>
      </section>
    </div>
  );
}
