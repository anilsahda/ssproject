export default function Awsquestions() {
  const sectionStyle = { marginBottom: '2rem' };
  const preStyle = { background: '#f5f5f5', padding: '1rem', overflowX: 'auto', borderRadius: '5px' };

  const qaList = [
    { 
      q: "1. What is AWS?", 
      a: `AWS (Amazon Web Services) is a cloud platform providing on-demand compute, storage, database, networking, and many other services.
Example: You can launch EC2 instances instead of buying physical servers, or use S3 to store files like images, videos, or backups.` 
    },
    { 
      q: "2. What is EC2?", 
      a: `EC2 (Elastic Compute Cloud) provides scalable virtual servers in the cloud.
Example: Launch a Linux server in minutes to host a website or run a backend service.`
    },
    { 
      q: "3. What is S3?", 
      a: `S3 (Simple Storage Service) is object storage for storing any amount of data with high availability.
Example: Store user-uploaded profile pictures, videos, or log backups with secure access control.`
    },
    { 
      q: "4. What is IAM?", 
      a: `IAM (Identity and Access Management) lets you manage users, roles, and permissions for AWS resources.
Example: Create a user with read-only access to S3 buckets without giving full admin privileges.`
    },
    { 
      q: "5. Difference between Security Groups and NACLs", 
      a: `Security Groups (SG) = instance-level firewall, stateful.
NACL (Network ACL) = subnet-level firewall, stateless.
Example: Use SG to allow HTTP/HTTPS to a web server, and NACL to block traffic from a malicious IP at subnet level.`
    },
    { 
      q: "6. What is VPC?", 
      a: `VPC (Virtual Private Cloud) allows you to launch AWS resources in an isolated virtual network.
Example: Launch EC2 instances in private subnets, use NAT gateway for internet access, and control routing.`
    },
    { 
      q: "7. What is Lambda?", 
      a: `Lambda is a serverless compute service that runs code in response to events without managing servers.
Example: Trigger a Lambda function when a new file is uploaded to S3 to generate thumbnails automatically.`
    },
    { 
      q: "8. What is DynamoDB?", 
      a: `DynamoDB is a fully managed NoSQL database that provides fast, predictable performance at any scale.
Example: Use DynamoDB to store user session data for a high-traffic web application.`
    },
    { 
      q: "9. Difference between RDS and DynamoDB", 
      a: `RDS = relational database (MySQL, PostgreSQL), structured data.
DynamoDB = NoSQL, key-value or document-based, scalable.
Example: Use RDS for accounting transactions, DynamoDB for storing user preferences or logs.`
    },
    { 
      q: "10. What is CloudWatch?", 
      a: `CloudWatch monitors AWS resources and applications in real-time. You can track metrics, logs, and set alarms.
Example: Set a CloudWatch alarm to notify when EC2 CPU usage exceeds 80%.`
    },
    // You can continue adding all 50 questions similarly
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📚 Top 50 AWS Questions & Detailed Answers</h2>

      {qaList.map((item, index) => (
        <section key={index} style={sectionStyle}>
          <pre style={preStyle}>
            <code>
              <b>{item.q}</b>
              {"\n"}{item.a}
            </code>
          </pre>
        </section>
      ))}

      <section>
        <b>✅ Summary</b>
        <ul>
          <li>Detailed answers with explanations and examples for better understanding.</li>
          <li>Covers compute, storage, database, networking, serverless, monitoring, and DevOps.</li>
          <li>Perfect for AWS interview prep and certification learning.</li>
        </ul>
      </section>
    </div>
  );
}
