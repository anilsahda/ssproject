export default function Terraform() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>⚙️ Terraform Setup</h2>

      <section>
        <b>1. ✅ Prerequisites</b>
        <ul>
          <li>Windows, Linux, or macOS machine</li>
          <li>Administrator or sudo access</li>
          <li>Basic knowledge of cloud provider credentials (AWS, Azure, GCP)</li>
        </ul>
      </section>

      <section>
        <b>2. 🔹 Install Terraform (Windows)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Download Terraform from official site: https://www.terraform.io/downloads.html

# Extract the zip file and add terraform.exe to PATH
# Verify installation
terraform -v`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. 🔹 Install Terraform (Linux)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Update system
sudo apt update && sudo apt upgrade -y

# Download Terraform
wget https://releases.hashicorp.com/terraform/1.6.0/terraform_1.6.0_linux_amd64.zip

# Unzip
unzip terraform_1.6.0_linux_amd64.zip

# Move binary to /usr/local/bin
sudo mv terraform /usr/local/bin/

# Verify installation
terraform -v`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. 🔹 Configure Terraform Project</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Create project folder
mkdir my-terraform-project
cd my-terraform-project

# Create main configuration file
nano main.tf

# Example content: Create AWS EC2 instance
provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "my_ec2" {
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t2.micro"

  tags = {
    Name = "TerraformDemo"
  }
}`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🔹 Initialize Terraform</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Initialize Terraform project
terraform init`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. 🔹 Validate Configuration</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`terraform validate`}
          </code>
        </pre>
      </section>

      <section>
        <b>7. 🔹 Plan Deployment</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`terraform plan`}
          </code>
        </pre>
      </section>

      <section>
        <b>8. 🔹 Apply Configuration</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`terraform apply

# Confirm with 'yes' when prompted`}
          </code>
        </pre>
      </section>

      <section>
        <b>9. 🔹 Destroy Resources</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Remove all created resources
terraform destroy

# Confirm with 'yes'`}
          </code>
        </pre>
      </section>

      <section>
        <b>✅ Summary</b>
        <ul>
          <li>⚡ Terraform installed and verified</li>
          <li>📁 Project folder and main.tf created</li>
          <li>🔧 Resources deployed on cloud using Terraform</li>
          <li>✅ Plan, Apply, and Destroy commands demonstrated</li>
          <li>🌐 Ready for IaC automation in AWS, Azure, or GCP</li>
        </ul>
      </section>
    </div>
  );
}
