function Nodemicroservices() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-green-700">Microservices in Node.js using Express Gateway</h1>
        <p className="text-gray-500 text-xs mt-1">Implement Microservices architecture with API Gateway in Node.js projects.</p>
      </header>

      <Section title="Overview" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Each service runs independently on different ports.</li>
          <li>API Gateway acts as a single entry point for routing.</li>
          <li>Services can communicate via REST or messaging (Kafka, RabbitMQ).</li>
        </ul>
      </Section>

      <Section title="Solution Structure" color="text-yellow-600">
        <CodeBlock>
{`Solution
│
├─ services
│   ├─ user-service
│   │    └─ index.js
│   └─ product-service
│        └─ index.js
│
└─ api-gateway
    └─ index.js`}
        </CodeBlock>
      </Section>

      <Section title="Install Required Libraries" color="text-blue-600">
        <CodeBlock>
{`npm init -y

// Install Express for services
npm install express

// Install Express Gateway (for API Gateway)
npm install -g express-gateway`}
        </CodeBlock>
      </Section>

      <Section title="User Service (index.js)" color="text-purple-600">
        <CodeBlock>
{`const express = require('express');
const app = express();
const PORT = 5001;

app.get('/api/users', (req, res) => {
  res.json(["User1", "User2"]);
});

app.listen(PORT, () => console.log(\`User Service running on port \${PORT}\`));`}
        </CodeBlock>
      </Section>

      <Section title="Product Service (index.js)" color="text-indigo-600">
        <CodeBlock>
{`const express = require('express');
const app = express();
const PORT = 5002;

app.get('/api/products', (req, res) => {
  res.json(["Product1", "Product2"]);
});

app.listen(PORT, () => console.log(\`Product Service running on port \${PORT}\`));`}
        </CodeBlock>
      </Section>

      <Section title="API Gateway (index.js)" color="text-red-600">
        <CodeBlock>
{`const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/users', createProxyMiddleware({ target: 'http://localhost:7070', changeOrigin: true }));
app.use('/products', createProxyMiddleware({ target: 'http://localhost:7071', changeOrigin: true }));

app.listen(3000, () => {
  console.log('API Gateway running on port 3000');
});`}
        </CodeBlock>
      </Section>

      <Section title="Summary" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Each microservice runs independently with its own logic and database.</li>
          <li>API Gateway proxies requests to the right service.</li>
          <li>Scaling is easier as each service can be deployed separately.</li>
          <li>Supports middleware for logging, authentication, rate limiting.</li>
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
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">
      {children}
    </pre>
  );
}

export default Nodemicroservices;
