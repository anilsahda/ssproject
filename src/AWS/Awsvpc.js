
export default function Awsvpc() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>🌐 AWS VPC Setup</h2>

      <section>
        <b>1. ✅ What is a VPC?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`VPC (Virtual Private Cloud) is a logically isolated network within AWS.
You can define your own IP address range, subnets, route tables, and gateways.`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 🔹 Create a VPC</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Log in to AWS Management Console
2. Go to Services -> VPC
3. Click "Create VPC"
4. Name: MyVPC
5. IPv4 CIDR block: 10.0.0.0/16
6. IPv6 CIDR block: Optional
7. Tenancy: Default
8. Click "Create VPC"`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. 🔹 Create Subnets</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Go to Subnets -> Create Subnet
2. Select VPC: MyVPC
3. Subnet name: PublicSubnet1
4. Availability Zone: us-east-1a (example)
5. IPv4 CIDR block: 10.0.1.0/24
6. Repeat for PrivateSubnet1: 10.0.2.0/24`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. 🔹 Internet Gateway</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Go to Internet Gateways -> Create Internet Gateway
2. Name: MyIGW
3. Attach to VPC: MyVPC
4. Update Route Table for Public Subnet:
   - Destination: 0.0.0.0/0
   - Target: MyIGW`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🔹 Route Tables</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- Public Route Table: Routes traffic to IGW
- Private Route Table: Routes traffic via NAT Gateway (optional)
- Associate subnets with appropriate route table`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. 🔹 Security Groups</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- Acts as a virtual firewall for instances
- Example rules:
  - Inbound: TCP 22 (SSH) from your IP
  - Inbound: TCP 80, 443 (HTTP/HTTPS) from 0.0.0.0/0
  - Outbound: All traffic allowed by default`}
          </code>
        </pre>
      </section>

      <section>
        <b>7. 🔹 Summary</b>
        <ul>
          <li>🌐 VPC isolates your AWS resources in a private network</li>
          <li>🏷 Create subnets (public/private) and route tables</li>
          <li>🔗 Attach Internet Gateway for public subnet internet access</li>
          <li>🛡 Configure security groups for traffic control</li>
          <li>⚡ Supports launching EC2, RDS, Lambda inside VPC</li>
        </ul>
      </section>
    </div>
  );
}
