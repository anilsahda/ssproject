
export default function Awsectwoinstance() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>🖥️ AWS EC2 Instance Setup</h2>

      <section>
        <b>1. ✅ What is EC2?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`EC2 (Elastic Compute Cloud) provides scalable virtual servers (instances)
in the cloud. You can launch, configure, and manage these servers as needed.`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 🔹 Launch an EC2 Instance</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Log in to AWS Management Console
2. Go to Services -> EC2 -> Instances
3. Click "Launch instances"
4. Choose Amazon Machine Image (AMI):
   - e.g., Amazon Linux 2023, Ubuntu 22.04 LTS
5. Choose Instance Type:
   - e.g., t2.micro (eligible for free tier)
6. Click "Next: Configure Instance Details"`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. ⚙ Configure Instance</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Number of instances: 1
2. Network: Select VPC
3. Subnet: Select subnet
4. Leave other options as default
5. Click "Next: Add Storage"`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. 💾 Add Storage</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Root volume: Default 8 GB (can increase if needed)
2. Volume type: General Purpose SSD (gp3)
3. Click "Next: Add Tags"`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🏷 Add Tags</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Key: Name
2. Value: MyEC2Instance
3. Click "Next: Configure Security Group"`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. 🔒 Configure Security Group</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Create a new security group
2. Add rule:
   - Type: SSH
   - Protocol: TCP
   - Port Range: 22
   - Source: My IP
3. Optional: Add HTTP (80) or HTTPS (443) for web access
4. Click "Review and Launch"`}
          </code>
        </pre>
      </section>

      <section>
        <b>7. 🔑 Launch Instance</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Click "Launch"
2. Select an existing key pair or create a new key pair
   - Download .pem file for SSH access
3. Acknowledge that you have access to the key
4. Click "Launch Instances"`}
          </code>
        </pre>
      </section>

      <section>
        <b>8. 🌐 Connect to EC2 Instance</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Go to EC2 -> Instances -> Select your instance
2. Click "Connect"
3. SSH via terminal:
   chmod 400 my-key.pem
   ssh -i "my-key.pem" ec2-user@<Public-IP>
4. You are now connected to your EC2 instance`}</code>
        </pre>
      </section>

      <section>
        <b>9. ✅ Summary</b>
        <ul>
          <li>🖥️ Launch virtual servers (instances) in AWS cloud</li>
          <li>💾 Configure storage, network, and security</li>
          <li>🔑 Use key pair for secure SSH access</li>
          <li>🌐 Connect to instance and manage via terminal</li>
        </ul>
      </section>
    </div>
  );
}
