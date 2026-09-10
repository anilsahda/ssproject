export default function Trivy() {
  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
      }}
    >
      <h2>🛡️ Trivy – Vulnerability & Security Scanner</h2>

      <section>
        <b>1. ✅ Prerequisites</b>
        <ul>
          <li>Docker installed for container scanning</li>
          <li>Git installed for repository scanning</li>
          <li>Trivy installed</li>
          <li>Application source code or Docker image available</li>
          <li>CI/CD pipeline configured for automation</li>
          <li>Permission to scan the application and infrastructure</li>
        </ul>
      </section>

      <section>
        <b>2. 🔹 What is Trivy?</b>

        <p>
          Trivy is an open-source security scanner used to identify
          vulnerabilities and security issues in container images,
          filesystems, Git repositories, Kubernetes environments and
          Infrastructure as Code (IaC).
        </p>

        <ul>
          <li>🐳 Container image vulnerability scanning</li>
          <li>📁 Filesystem scanning</li>
          <li>📦 Dependency vulnerability scanning</li>
          <li>☁️ Cloud and Infrastructure security scanning</li>
          <li>☸️ Kubernetes configuration scanning</li>
          <li>🏗️ Terraform/IaC scanning</li>
          <li>🔐 Secret detection</li>
          <li>📋 SBOM generation</li>
        </ul>
      </section>

      <section>
        <b>3. 🔹 Install Trivy</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Windows using Chocolatey

choco install trivy

# Verify installation

trivy --version

# Linux example

sudo apt-get install wget apt-transport-https gnupg

wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key \
  | gpg --dearmor \
  | sudo tee /usr/share/keyrings/trivy.gpg > /dev/null

echo "deb [signed-by=/usr/share/keyrings/trivy.gpg] \
https://aquasecurity.github.io/trivy-repo/deb \
generic main" \
| sudo tee /etc/apt/sources.list.d/trivy.list

sudo apt update
sudo apt install trivy

# Verify

trivy --version`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. 🔹 Update Trivy Database</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Update vulnerability database

trivy image --download-db-only

# Verify Trivy

trivy --version

# Always keep the vulnerability
# database updated before scanning.`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🔹 Build Docker Image</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Build application image

docker build -t myapplication:1.0 .

# List Docker images

docker images

# Example

REPOSITORY        TAG
myapplication     1.0`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. 🔹 Scan Docker Image</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Scan Docker image

trivy image myapplication:1.0

# Example output

Library        Vulnerability     Severity
openssl        CVE-XXXX-XXXX     HIGH
curl           CVE-XXXX-XXXX     MEDIUM
libxml2        CVE-XXXX-XXXX     CRITICAL

# Scan only vulnerabilities

trivy image \
  --scanners vuln \
  myapplication:1.0`}
          </code>
        </pre>
      </section>

      <section>
        <b>7. 🔹 Scan by Severity</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Scan Critical vulnerabilities

trivy image \
  --severity CRITICAL \
  myapplication:1.0

# Scan Critical and High

trivy image \
  --severity CRITICAL,HIGH \
  myapplication:1.0

# Scan all important levels

trivy image \
  --severity CRITICAL,HIGH,MEDIUM \
  myapplication:1.0`}
          </code>
        </pre>
      </section>

      <section>
        <b>8. 🔹 Fail Pipeline for Vulnerabilities</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Fail command when vulnerabilities
# matching the selected severity are found

trivy image \
  --severity CRITICAL,HIGH \
  --exit-code 1 \
  myapplication:1.0

# Example policy

CRITICAL → Pipeline FAILED
HIGH     → Pipeline FAILED
MEDIUM   → Review
LOW      → Informational`}
          </code>
        </pre>
      </section>

      <section>
        <b>9. 🔹 Scan Application Filesystem</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Scan current directory

trivy fs .

# Scan specific directory

trivy fs ./src

# Scan for vulnerabilities and secrets

trivy fs \
  --scanners vuln,secret \
  .`}
          </code>
        </pre>
      </section>

      <section>
        <b>10. 🔹 Scan Git Repository</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Scan Git repository

trivy repo https://github.com/example/my-application

# Example findings

Vulnerable dependency
Hardcoded secret
Insecure configuration
Vulnerable package`}
          </code>
        </pre>
      </section>

      <section>
        <b>11. 🔹 Scan Infrastructure as Code</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Scan Terraform files

trivy config ./terraform

# Scan Kubernetes YAML

trivy config ./k8s

# Scan Dockerfile

trivy config ./Dockerfile

# Example findings

Public S3 bucket
Open Security Group
Privileged container
Missing encryption
Overly permissive IAM policy`}
          </code>
        </pre>
      </section>

      <section>
        <b>12. 🔹 Kubernetes Security Scan</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Scan Kubernetes cluster

trivy k8s --report summary cluster

# Scan Kubernetes namespace

trivy k8s \
  --namespace production \
  --report summary all

# Trivy can identify issues such as:

Privileged containers
Host networking
Weak security context
Exposed services
Configuration problems`}
          </code>
        </pre>
      </section>

      <section>
        <b>13. 🔹 Dockerfile Security Scan</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Example insecure Dockerfile

FROM ubuntu:latest

USER root

RUN apt-get update

EXPOSE 22

# Scan Dockerfile

trivy config Dockerfile

# Trivy can identify configuration
# and security issues.`}
          </code>
        </pre>
      </section>

      <section>
        <b>14. 🔹 Generate JSON Report</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Generate JSON report

trivy image \
  --format json \
  --output trivy-report.json \
  myapplication:1.0

# Report can be stored as
# CI/CD pipeline artifact.`}
          </code>
        </pre>
      </section>

      <section>
        <b>15. 🔹 Generate SARIF Report</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Generate SARIF report

trivy image \
  --format sarif \
  --output trivy-results.sarif \
  myapplication:1.0

# SARIF can be consumed by
# security and code-scanning platforms.`}
          </code>
        </pre>
      </section>

      <section>
        <b>16. 🔹 Generate SBOM</b>

        <p>
          An SBOM (Software Bill of Materials) provides an inventory of
          software components and dependencies contained in an application
          or container image.
        </p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Generate CycloneDX SBOM

trivy image \
  --format cyclonedx \
  --output sbom.json \
  myapplication:1.0

# SBOM contains information about:

Operating system packages
Application libraries
Dependencies
Package versions`}
          </code>
        </pre>
      </section>

      <section>
        <b>17. 🔹 Scan for Secrets</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Scan filesystem for secrets

trivy fs \
  --scanners secret \
  .

# Example findings

AWS Access Key
API Token
Private Key
Password
Authentication Token

# Use GitLeaks as another
# dedicated secret scanning layer.`}
          </code>
        </pre>
      </section>

      <section>
        <b>18. 🔹 Trivy in GitLab CI/CD</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`trivy_scan:
  stage: security

  image:
    name: aquasec/trivy:latest
    entrypoint: [""]

  script:
    - trivy image
        --severity CRITICAL,HIGH
        --exit-code 1
        myapplication:$CI_COMMIT_SHA

  artifacts:
    when: always
    paths:
      - trivy-report.json`}
          </code>
        </pre>
      </section>

      <section>
        <b>19. 🔹 Trivy in GitHub Actions</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`name: Trivy Security Scan

on:
  push:
  pull_request:

jobs:
  trivy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Build Image
        run: |
          docker build \
            -t myapplication:latest .

      - name: Trivy Scan
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: myapplication:latest
          severity: CRITICAL,HIGH
          exit-code: 1`}
          </code>
        </pre>
      </section>

      <section>
        <b>20. 🔹 Trivy Security Gate</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`Developer
    ↓
Git Commit
    ↓
GitLeaks
    ↓
SAST
    ↓
SCA
    ↓
Build Docker Image
    ↓
Trivy Container Scan
    ↓
Security Gate
    ↓
Deploy Test
    ↓
DAST
    ↓
Production

Security Gate

Critical → ❌ FAIL
High     → ❌ FAIL
Medium   → ⚠️ REVIEW
Low      → ℹ️ INFO`}
          </code>
        </pre>
      </section>

      <section>
        <b>21. 🔹 Trivy DevSecOps Workflow</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`Source Code
    ↓
GitLeaks
    ↓
SAST
    ↓
SCA
    ↓
Unit Tests
    ↓
Docker Build
    ↓
Trivy
    ↓
Container Registry
    ↓
Deploy to Staging
    ↓
DAST
    ↓
Kubernetes
    ↓
Production

Trivy checks:

📦 Dependencies
🐳 Container Images
🏗️ IaC
☸️ Kubernetes
🔐 Secrets
📋 SBOM`}
          </code>
        </pre>
      </section>

      <section>
        <b>22. 🔹 Trivy Best Practices</b>

        <ul>
          <li>✅ Scan every Docker image before deployment</li>
          <li>✅ Scan images before pushing to the container registry</li>
          <li>✅ Keep the vulnerability database updated</li>
          <li>✅ Configure Critical and High severity gates</li>
          <li>✅ Scan Terraform and Kubernetes configuration</li>
          <li>✅ Generate and maintain SBOMs</li>
          <li>✅ Scan application dependencies</li>
          <li>✅ Scan container images periodically after deployment</li>
          <li>✅ Store security reports as CI/CD artifacts</li>
          <li>✅ Combine Trivy with GitLeaks, SAST, SCA and DAST</li>
        </ul>
      </section>

      <section>
        <b>23. 🔹 Summary</b>

        <ul>
          <li>🛡️ Trivy is a powerful vulnerability and security scanner</li>
          <li>🐳 Docker container images can be scanned for vulnerabilities</li>
          <li>📦 Application dependencies can be analyzed</li>
          <li>🏗️ Terraform and other IaC configurations can be scanned</li>
          <li>☸️ Kubernetes environments can be security tested</li>
          <li>🔐 Secrets can be detected</li>
          <li>📋 SBOMs can be generated</li>
          <li>📊 JSON and SARIF security reports can be generated</li>
          <li>⚙️ Trivy can be integrated into CI/CD pipelines</li>
          <li>🚦 Security gates can prevent vulnerable images from being deployed</li>
        </ul>
      </section>
    </div>
  )
}
