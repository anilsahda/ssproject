import { useState } from 'react';

export default function Awsrds() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>🗄️ AWS RDS (Relational Database Service) Setup</h2>

      <ToggleSection title="1. ✅ What is RDS?">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Amazon RDS is a managed relational database service that supports 
engines like MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server.

AWS automates backups, patching, scaling, and monitoring,
allowing developers to focus on their applications instead of DB admin.`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="2. 🔹 Steps to Create an RDS Instance">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Login to AWS Console → Go to RDS service
2. Click "Create Database"
3. Choose "Standard Create"
4. Select Database Engine (e.g., MySQL, PostgreSQL, SQL Server)
5. Choose DB version and Free Tier (if eligible)
6. Set DB instance identifier, username & password
7. Select instance class (db.t3.micro for free tier)
8. Configure storage (General Purpose SSD)
9. Choose VPC, Subnet group & Security group
10. Allow Public Access if external connection required
11. Configure backup, monitoring, and encryption
12. Click "Create Database"`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="3. 🌍 Connecting to RDS">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Go to RDS Console → Select your DB
2. Copy the Endpoint & Port
3. Open your DB client (MySQL Workbench, SSMS, pgAdmin)
4. Enter Endpoint, Port, Username & Password
5. Ensure security group allows your IP (Inbound rules)`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="4. 📝 Example Connection - Node.js & MySQL (RDS)">
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'your-rds-endpoint.amazonaws.com',
  user: 'admin',
  password: 'yourpassword',
  database: 'testdb'
});

const [rows] = await connection.execute('SELECT NOW()');
console.log(rows);`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="5. ⚡ Example Connection - .NET Core & SQL Server (RDS)">
        <ol>
          <li>Install NuGet Package: <code>Microsoft.Data.SqlClient</code></li>
          <li>Configure connection in <code>appsettings.json</code></li>
        </ol>

        📁 <b>appsettings.json</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`{
  "ConnectionStrings": {
    "DefaultConnection": "Server=my-rds-endpoint.amazonaws.com,1433;Database=TestDB;User Id=admin;Password=yourpassword;"
  }
}`}</code>
        </pre>

        📁 <b>Program.cs</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>{`builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));`}</code>
        </pre>
      </ToggleSection>

      <ToggleSection title="6. ⚙️ Best Practices">
        <ul>
          <li>✅ Enable <b>Multi-AZ Deployment</b> for high availability</li>
          <li>✅ Use <b>Automatic Backups</b> & manual snapshots</li>
          <li>✅ Use <b>IAM authentication</b> instead of static passwords</li>
          <li>✅ Enable <b>Performance Insights</b> to monitor queries</li>
          <li>✅ Restrict DB access using Security Groups & VPC</li>
        </ul>
      </ToggleSection>

      <ToggleSection title="7. ❓ Interview Questions">
        <ul>
          <li>What database engines are supported in RDS?</li>
          <li>Difference between RDS and DynamoDB?</li>
          <li>Explain Multi-AZ vs Read Replicas</li>
          <li>How does RDS handle backups?</li>
          <li>How to secure an RDS instance?</li>
        </ul>
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
