import React, { useState } from 'react';

export default function Azurequestions() {
  const preStyle = { background: '#f5f5f5', padding: '1rem', overflowX: 'auto', borderRadius: '5px' };

  const qaList = [
    { q: "1. Here’s a roadmap to Start Learning Azure for beginners!", a: `
✅ Learn cloud basics: IaaS, PaaS, SaaS, public/private/hybrid cloud.
✅ Understand core Azure services: Compute, Storage, Networking, Database.
✅ Create a free Azure account.
✅ Try launching a Virtual Machine, upload files to Blob Storage.
✅ Explore databases like Azure SQL, Cosmos DB.
✅ Learn advanced topics:
  - Serverless (Azure Functions)
  - Containers (AKS – Azure Kubernetes Service)
  - Security (Azure Active Directory, RBAC).` },
    
    { q: "2. What is Cloud Computing in Azure?", a: `Cloud computing in Azure means renting IT resources (servers, databases, storage, networking, AI) from Microsoft’s cloud data centers instead of buying physical hardware.
Why Azure Cloud?
✅ Cost-effective – Pay as you go.
✅ Scalability – Scale resources on demand.
✅ Reliability – High availability with global data centers.
✅ Security – Built-in compliance and identity management.` },

    { q: "3. What are the types of cloud in Azure?", a: `Public Cloud = Shared infrastructure by Microsoft (Azure).
Private Cloud = Dedicated infrastructure for a single organization.
Hybrid Cloud = Combination of on-prem + Azure.
Example: Bank stores sensitive data on private cloud and uses Azure public cloud for analytics.` },

    { q: "4. What are IaaS, PaaS, SaaS with Azure examples?", a: `IaaS (Infrastructure as a Service) – Rent servers, storage, networking.
Example: Azure Virtual Machines, Virtual Networks.
PaaS (Platform as a Service) – Build apps without managing servers.
Example: Azure App Service, Azure Functions.
SaaS (Software as a Service) – Ready-to-use software.
Example: Microsoft 365, Dynamics 365, Outlook.` },

    { q: "5. What is Azure Virtual Machine?", a: `Azure VM is a scalable, on-demand compute resource that lets you run Windows or Linux servers in the cloud.
Example: Host a web application or database without physical hardware.` },

    { q: "6. What is Azure Blob Storage?", a: `Azure Blob Storage is object storage for unstructured data like files, images, videos, logs, and backups.
Example: Store user-uploaded photos or application logs.` },

    { q: "7. What is Azure SQL Database?", a: `Azure SQL Database is a fully managed relational database (PaaS).
Example: Run a high-availability SQL Server without installing or patching software.` },

    { q: "8. What is Azure Cosmos DB?", a: `Cosmos DB is a globally distributed, multi-model NoSQL database.
Example: Build scalable apps with low latency across multiple regions.` },

    { q: "9. What is Azure Virtual Network (VNet)?", a: `Azure VNet allows secure communication between Azure resources, on-premises networks, and the internet.
Example: Host VMs inside a private subnet and connect them securely.` },

    { q: "10. What is Azure Resource Group?", a: `A Resource Group is a container that holds Azure resources (VMs, Storage, Databases).
Example: Group all resources for a project (VMs, Storage, Network) in one resource group.` },

    { q: "11. What is Azure App Service?", a: `App Service is a PaaS to host web apps, REST APIs, and mobile backends.
Example: Deploy a .NET or Node.js app without managing servers.` },

    { q: "12. What is Azure Active Directory (AAD)?", a: `AAD is an identity and access management service.
Example: Single Sign-On (SSO) for Microsoft 365, manage user authentication for apps.` },

    { q: "13. What is Azure Functions?", a: `Azure Functions is a serverless compute service that runs code in response to events.
Example: Run code when a file is uploaded to Blob Storage.` },

    { q: "14. What is Azure Kubernetes Service (AKS)?", a: `AKS is a managed Kubernetes service for running containerized apps.
Example: Deploy microservices with Docker containers in Azure.` },

    { q: "15. What is Azure Load Balancer?", a: `Azure Load Balancer distributes traffic across multiple VMs or services for high availability.
Example: Distribute requests across 3 Azure VMs.` },

    { q: "16. What is Azure Application Gateway?", a: `Application Gateway is a layer-7 load balancer with Web Application Firewall (WAF).
Example: Protect a web app against SQL injection and XSS attacks.` },

    { q: "17. What is Azure DevOps?", a: `Azure DevOps provides CI/CD pipelines, Git repos, and project management tools.
Example: Automate code build and deployment from GitHub to Azure App Service.` },

    { q: "18. What is Azure Monitor?", a: `Azure Monitor collects metrics, logs, and telemetry from resources.
Example: Monitor VM CPU usage and set alerts when it exceeds 80%.` },

    { q: "19. What is Azure Backup?", a: `Azure Backup is a service for secure data backup and restore.
Example: Backup a SQL Database or VM for disaster recovery.` },

    { q: "20. What is Azure Site Recovery?", a: `Site Recovery ensures business continuity by replicating VMs to another region.
Example: Failover VMs to West US if East US region goes down.` },

    { q: "21. What is Azure Bastion?", a: `Azure Bastion allows secure RDP/SSH to VMs without exposing them to the public internet.
Example: Connect to Azure VM directly from the portal without a public IP.` },

    { q: "22. What is Azure CDN?", a: `Azure Content Delivery Network caches content at edge locations globally.
Example: Deliver images, videos, and static files faster worldwide.` },

    { q: "23. What is Azure Key Vault?", a: `Key Vault securely stores secrets, keys, and certificates.
Example: Store database connection strings securely.` },

    { q: "24. What is Azure Logic Apps?", a: `Logic Apps automate workflows by connecting services.
Example: When an email arrives in Outlook, save the attachment to Blob Storage automatically.` },

    { q: "25. What is Azure API Management?", a: `API Management allows secure publishing, monitoring, and analyzing APIs.
Example: Expose backend APIs to developers with security and throttling.` },

    { q: "26. What is Azure Data Factory?", a: `Data Factory is a cloud ETL (Extract, Transform, Load) service.
Example: Move data from on-prem SQL Server to Azure Data Lake.` },

    { q: "27. What is Azure Data Lake?", a: `Data Lake is a big data repository for analytics workloads.
Example: Store petabytes of raw data for analysis with Azure Synapse.` },

    { q: "28. What is Azure Synapse Analytics?", a: `Synapse is an enterprise analytics service (formerly SQL Data Warehouse).
Example: Analyze terabytes of data with BI dashboards.` },

    { q: "29. What is Azure Event Hub?", a: `Event Hub is a big data streaming service.
Example: Process millions of IoT device messages in real-time.` },

    { q: "30. What is Azure Service Bus?", a: `Service Bus is a messaging service for connecting apps.
Example: Decouple microservices with message queues and topics.` },

    { q: "31. What is Azure Cognitive Services?", a: `AI services for vision, speech, language, and decision-making.
Example: Use Computer Vision API to analyze uploaded images.` },

    { q: "32. What is Azure Machine Learning?", a: `A service to build, train, and deploy ML models.
Example: Deploy a predictive model for customer churn analysis.` },

    { q: "33. What is Azure Event Grid?", a: `Event Grid routes events between Azure services.
Example: Trigger a Function when a Blob is created.` },

    { q: "34. What is Azure Firewall?", a: `Azure Firewall is a cloud-native network security service.
Example: Filter outbound traffic from a VNet to the internet.` },

    { q: "35. What is Azure Defender?", a: `Defender is a threat protection service across workloads.
Example: Detect suspicious logins to Azure resources.` },

    { q: "36. What is Azure Sentinel?", a: `Azure Sentinel is a cloud-native SIEM (Security Info and Event Management).
Example: Detect and investigate potential security threats.` },

    { q: "37. What is Azure Policy?", a: `Azure Policy enforces compliance rules on resources.
Example: Ensure all VMs use managed disks.` },

    { q: "38. What is Azure Blueprints?", a: `Blueprints allow defining governance templates for Azure environments.
Example: Standardize resource creation with security rules.` },

    { q: "39. What is Azure Marketplace?", a: `Marketplace provides third-party apps and services for Azure.
Example: Deploy WordPress or Ubuntu from the marketplace.` },

    { q: "40. What is Azure Resource Manager (ARM)?", a: `ARM manages deployment and configuration of resources via templates.
Example: Deploy a VNet + VM + Storage account with JSON templates.` },

    { q: "41. What is Azure Automation?", a: `Azure Automation runs runbooks for process automation.
Example: Stop VMs automatically at night to save cost.` },

    { q: "42. What is Azure Container Instances (ACI)?", a: `ACI runs containers without managing VMs or clusters.
Example: Run a containerized app quickly for testing.` },

    { q: "43. What is Azure Batch?", a: `Batch runs large-scale parallel and HPC jobs.
Example: Process thousands of images in parallel.` },

    { q: "44. What is Azure Cost Management?", a: `Cost Management monitors and optimizes Azure spending.
Example: Track and forecast monthly costs.` },

    { q: "45. What is Azure ExpressRoute?", a: `ExpressRoute creates a private connection between on-premises and Azure.
Example: Connect a data center securely without internet traffic.` },

    { q: "46. What is Azure Private Link?", a: `Private Link provides secure private access to Azure services.
Example: Access Blob Storage privately within a VNet.` },

    { q: "47. What is Azure Managed Identity?", a: `Managed Identity provides identity for apps without credentials.
Example: Allow a VM to access Key Vault without storing secrets.` },

    { q: "48. What is Azure Disk Storage?", a: `Azure Disks provide block storage for VMs.
Example: Attach SSD disks to VMs for high-performance apps.` },

    { q: "49. What is Azure Files?", a: `Azure Files provides shared file storage via SMB/NFS.
Example: Share configuration files across multiple VMs.` },

    { q: "50. What is Azure Table Storage?", a: `Table Storage is a NoSQL key-value store for semi-structured data.
Example: Store user session data or IoT metadata.` },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📘 Top 50 Azure Interview Questions & Answers</h2>

      {qaList.map((item, index) => (
        <ToggleSection key={index} title={item.q}>
          <pre style={preStyle}>
            <code>{item.a}</code>
          </pre>
        </ToggleSection>
      ))}
    </div>
  );
}

/* Toggleable Section Component */
function ToggleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section style={{ marginBottom: '1rem' }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: 'pointer',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          color: '#2c3e50',
          backgroundColor: '#f0f0f0',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
        }}
      >
        <span style={{ marginRight: '0.5rem' }}>{isOpen ? '▲' : '▼'}</span>
        {title}
      </div>
      {isOpen && <div style={{ marginTop: '0.5rem' }}>{children}</div>}
    </section>
  );
}

