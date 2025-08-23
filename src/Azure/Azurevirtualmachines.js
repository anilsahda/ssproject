export default function Azurevirtualmachines() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>🖥️ Azure Virtual Machine Setup</h2>

      <section>
        <b>1. ✅ What is Azure VM?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Azure Virtual Machines (VMs) are scalable, on-demand computing resources
in Microsoft Azure. They let you deploy Windows or Linux servers in the cloud
with full control over configuration and software.`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 🔹 Create an Azure VM</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Log in to Azure Portal (https://portal.azure.com)
2. Go to "Virtual Machines"
3. Click "Create" -> "Azure Virtual Machine"
4. Basics Tab:
   - Subscription: Select your subscription
   - Resource Group: Create or select existing
   - Virtual machine name: myAzureVM
   - Region: e.g., East US
   - Availability options: No infrastructure redundancy required
5. Choose Image:
   - Ubuntu 22.04 LTS, Windows Server 2022, etc.
6. Choose Size:
   - e.g., B1s (eligible for free tier)`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. ⚙ Configure VM Settings</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Administrator Account:
   - Authentication type: SSH public key (Linux) or Password (Windows)
   - Username: azureuser
   - SSH Key/Password: Provide securely
2. Disks:
   - OS Disk type: Standard SSD (default)
   - Add data disks if required
3. Networking:
   - Virtual Network: Create or select existing
   - Public IP: Enabled (to connect via internet)
   - NIC network security group: Create new`}</code>
        </pre>
      </section>

      <section>
        <b>4. 🔒 Configure Security Rules</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Add inbound port rules:
   - Linux VM: SSH (Port 22)
   - Windows VM: RDP (Port 3389)
   - Web Server: HTTP (Port 80), HTTPS (Port 443)
2. Restrict source to "My IP" or allow as needed
3. Review networking settings carefully`}</code>
        </pre>
      </section>

      <section>
        <b>5. 🔑 Review + Create</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Click "Review + Create"
2. Validation will run
3. Click "Create"
4. Deployment will take a few minutes
5. Once completed, VM will be available in your resource group`}</code>
        </pre>
      </section>

      <section>
        <b>6. 🌐 Connect to Azure VM</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Linux VM (SSH):
   ssh -i ~/.ssh/id_rsa azureuser@<Public-IP>

Windows VM (RDP):
   1. Download RDP file from Azure Portal
   2. Open with Remote Desktop client
   3. Enter username + password

You are now connected to your Azure VM!`}</code>
        </pre>
      </section>
    </div>
  );
}

