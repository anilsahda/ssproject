export default function Awsquestions() {
  const sectionStyle = { marginBottom: '2rem' };
  const preStyle = { background: '#f5f5f5', padding: '1rem', overflowX: 'auto', borderRadius: '5px' };

  const qaList = [
{ q: "1. What is Cloud Computing?", a: `Cloud computing means using IT resources like servers, storage, databases and networking 
over the internet, and you pay only for what you use.
Example: Instead of buying physical servers, you use AWS, Azure or Google cloud to run our applications.` },
    { q: "2. What are the types of cloud models?", a: `Public Cloud = Services over the internet (AWS, Azure, GCP).
Private Cloud = Dedicated infrastructure for one organization.
Hybrid Cloud = Mix of public + private.
Example: A bank might use private cloud for sensitive data and public cloud for analytics.` },
    { q: "3. What are IaaS, PaaS, and SaaS?", a: `IaaS = Infrastructure as a Service (EC2, Azure VM).
PaaS = Platform as a Service (Heroku, Elastic Beanstalk).
SaaS = Software as a Service (Gmail, Salesforce).
Example: Hosting apps on EC2 (IaaS), deploying on Beanstalk (PaaS), using Office 365 (SaaS).` },
    { q: "4. What is virtualization in cloud?", a: `Virtualization allows running multiple virtual servers (VMs) on one physical machine using a hypervisor.
Example: VMware, Hyper-V, KVM let you share physical resources across multiple VMs.` },
    { q: "5. What is containerization in cloud?", a: `Containerization (Docker, Kubernetes) packages applications and dependencies in isolated environments.
Example: Run microservices in Docker containers for lightweight, portable deployments.` },
    { q: "6. Difference between scaling vertically and horizontally?", a: `Vertical Scaling = Increase resources (CPU, RAM) of a single server.
Horizontal Scaling = Add more servers to distribute load.
Example: Adding CPU to one EC2 = vertical; adding more EC2s behind load balancer = horizontal.` },
    { q: "7. What is Multi-Tenancy in cloud?", a: `Multi-tenancy means multiple customers share the same infrastructure securely.
Example: AWS S3 stores data from millions of customers while keeping it isolated.` },
    { q: "8. What is Cloud Elasticity?", a: `Elasticity allows auto-scaling up or down based on demand.
Example: E-commerce website scales up during Black Friday sales and scales down after.` },
    { q: "9. What are Cloud Regions and Availability Zones?", a: `Region = Geographic location (e.g., us-east-1).
Availability Zone (AZ) = Isolated data centers within a region.
Example: Deploy EC2 in multiple AZs for high availability.` },
    { q: "10. What is Serverless Computing?", a: `Serverless lets you run code without managing servers.
Example: AWS Lambda executes a function when an S3 file is uploaded.` },

    { q: "11. What is AWS?", a: `AWS is a cloud platform providing on-demand compute, storage, database, networking and many other services
Example:We can launch EC2 instance instead of buying physical server or use S3 to store file, image, video` },
    { q: "12. What is EC2?", a: `EC2 (Elastic Compute Cloud) provides scalable virtual servers in the cloud.
Example: Launch a Linux server in minutes to host a website or run a backend service.` },
    { q: "13. What is S3?", a: `S3 (Simple Storage Service) is object storage for storing any amount of data with high availability.
Example: Store user-uploaded profile pictures, videos, or log backups with secure access control.` },
    { q: "14. What is IAM?", a: `IAM (Identity and Access Management) lets you manage users, roles, and permissions for AWS resources.
Example: Create a user with read-only access to S3 buckets without giving full admin privileges.` },
    { q: "15. Difference between Security Groups and NACLs", a: `Security Groups (SG) = instance-level firewall, stateful.
NACL (Network ACL) = subnet-level firewall, stateless.
Examp:Use SG to allow HTTP/HTTPS to web server and NACL to block traffic from malicious IP at subnet level` },
    { q: "16. What is VPC?", a: `VPC (Virtual Private Cloud) allows you to launch AWS resources in an isolated virtual network.
Example: Launch EC2 instances in private subnets, use NAT gateway for internet access and control routing.` },
    { q: "17. What is Lambda?", a: `Lambda is a serverless compute service that runs code in response to events without managing servers.
Example: Trigger a Lambda function when a new file is uploaded to S3 to generate thumbnails automatically.` },
    { q: "18. What is DynamoDB?", a: `DynamoDB is a fully managed NoSQL database that provides fast, predictable performance at any scale.
Example: Use DynamoDB to store user session data for a high-traffic web application.` },
    { q: "19. Difference between RDS and DynamoDB", a: `RDS = relational database (MySQL, PostgreSQL), structured data.
DynamoDB = NoSQL, key-value or document-based, scalable.
Example: Use RDS for accounting transactions, DynamoDB for storing user preferences or logs.` },
    { q: "20. What is CloudWatch?", a: `CloudWatch monitors AWS resources and applications in real-time. We can track metrics, logs and set alarms
Example: Set a CloudWatch alarm to notify when EC2 CPU usage exceeds 80%.` },

    { q: "21. What is Elastic Load Balancer (ELB)?", a: `ELB automatically distributes incoming application traffic across multiple targets.
Example: Distribute requests across multiple EC2 instances for high availability.` },
    { q: "22. What is Auto Scaling?", a: `Auto Scaling automatically adjusts the number of EC2 instances to handle traffic.
Example: Scale up during peak traffic and scale down at night to save cost.` },
    { q: "23. What is Route 53?", a: `Route 53 is AWS's DNS and domain registration service.
Example: Map your domain (example.com) to an EC2 instance or S3 bucket website.` },
    { q: "24. What is Elastic Beanstalk?", a: `Elastic Beanstalk deploys and manages applications automatically.
Example: Deploy a Java or .NET app without worrying about infrastructure.` },
    { q: "25. What is CloudFormation?", a: `CloudFormation lets you define infrastructure as code using YAML/JSON templates.
Example: Deploy a VPC, EC2, and RDS in one stack with a single template.` },
    { q: "26. What is SNS?", a: `SNS (Simple Notification Service) sends messages or notifications to subscribers.
Example: Notify users via SMS/email when a new order is placed.` },
    { q: "27. What is SQS?", a: `SQS (Simple Queue Service) is a fully managed message queuing service.
Example: Decouple microservices by using a queue between order placement and order processing.` },
    { q: "28. What is AWS Glue?", a: `Glue is a serverless ETL (Extract, Transform, Load) service.
Example: Clean and transform raw data from S3 before loading it into Redshift.` },
    { q: "29. What is Redshift?", a: `Redshift is a fully managed data warehouse.
Example: Store and analyze terabytes of business analytics data.` },
    { q: "30. What is CloudTrail?", a: `CloudTrail records AWS API calls for auditing and compliance.
Example: Track who deleted an S3 bucket and when.` },

    { q: "31. What is ElasticCache?", a: `ElasticCache provides managed Redis/Memcached caching.
Example: Cache frequently accessed queries to improve application performance.` },
    { q: "32. What is EBS?", a: `EBS (Elastic Block Store) provides block storage for EC2 instances.
Example: Attach an EBS volume as a hard drive to store application data.` },
    { q: "33. What is EFS?", a: `EFS (Elastic File System) provides scalable file storage.
Example: Share files between multiple EC2 instances.` },
    { q: "34. What is AWS Organizations?", a: `Organizations helps manage multiple AWS accounts under one billing.
Example: Separate accounts for Dev, QA, and Production but manage centrally.` },
    { q: "35. What is AWS KMS?", a: `KMS (Key Management Service) manages encryption keys.
Example: Encrypt S3 objects or RDS databases using KMS-managed keys.` },
    { q: "36. Difference between EBS and S3", a: `EBS = block storage (attached to EC2).
S3 = object storage (independent, global access).
Example: Use EBS for database storage, S3 for static files like images.` },
    { q: "37. What is Transit Gateway?", a: `Transit Gateway connects multiple VPCs and on-premises networks.
Example: Central hub to connect VPCs across regions.` },
    { q: "38. What is AWS WAF?", a: `Web Application Firewall protects applications against common web exploits.
Example: Block SQL injection or XSS attacks on your web app.` },

    { q: "39. What is AWS Shield?", a: `AWS Shield provides DDoS protection.
Example: Protects your website from large-scale DDoS attacks.` },
    { q: "40. What is AWS Batch?", a: `AWS Batch runs batch computing jobs at any scale.
Example: Process millions of images in parallel.` },
    { q: "41. What is AWS CodeDeploy?", a: `CodeDeploy automates code deployment to EC2, Lambda, or on-premises servers.
Example: Deploy a new version of an application with zero downtime.` },
    { q: "42. What is AWS CodeBuild?", a: `CodeBuild compiles source code, runs tests, and produces build artifacts.
Example: Build a Java application from GitHub repo.` },
    { q: "43. What is AWS CodeCommit?", a: `CodeCommit is a Git-based source control service.
Example: Store source code in a private Git repository.` },
    { q: "44. What is AWS Secrets Manager?", a: `Secrets Manager securely stores and rotates credentials.
Example: Store DB passwords and rotate them automatically.` },
    { q: "45. What is AWS Config?", a: `Config tracks AWS resource configuration changes.
Example: Identify non-compliant S3 buckets without encryption.` },
    { q: "46. What is AWS Inspector?", a: `Inspector is a security assessment tool.
Example: Scan EC2 instances for vulnerabilities.` },

    { q: "47. What is AWS Trusted Advisor?", a: `Trusted Advisor gives recommendations on cost, performance, and security.
Example: Suggests unused EC2 instances to terminate for cost savings.` },
    { q: "48. What is AWS Cost Explorer?", a: `Cost Explorer helps analyze and visualize AWS spending.
Example: Track monthly costs and forecast future expenses.` },
    { q: "49. What is Spot Instance?", a: `Spot Instances are unused EC2 capacity at a discounted price.
Example: Run non-critical workloads like batch jobs at low cost.` },
    { q: "50. What is On-Demand Instance?", a: `On-Demand Instances are pay-as-you-go EC2 pricing.
Example: Run development servers without long-term commitments.` },
    { q: "51. What is AWS Elastic IP?", a: `Elastic IP is a static IPv4 address for EC2.
Example: Keep the same IP even after restarting instances.` },
    { q: "52. What is AWS Aurora?", a: `Aurora is a high-performance managed relational database compatible with MySQL/PostgreSQL.
Example: Use Aurora for faster performance compared to standard RDS.` },
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
