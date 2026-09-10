export default function SAST() {
  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
      }}
    >
      <h2>🔐 SAST (Static Application Security Testing)</h2>

      <section>
        <b>1. ✅ Prerequisites</b>
        <ul>
          <li>Source code repository available</li>
          <li>Git installed and configured</li>
          <li>Application build environment configured</li>
          <li>Code scanning tool installed</li>
          <li>CI/CD pipeline configured</li>
          <li>Permission to scan the application source code</li>
        </ul>
      </section>

      <section>
        <b>2. 🔹 What is SAST?</b>

        <p>
          SAST (Static Application Security Testing) analyzes application
          source code, bytecode, or binaries without executing the application.
          It helps developers identify security vulnerabilities early in the
          Software Development Lifecycle (SDLC).
        </p>

        <ul>
          <li>🔍 Analyzes source code</li>
          <li>🛡️ Identifies security vulnerabilities</li>
          <li>🐛 Detects insecure coding practices</li>
          <li>🔐 Detects hardcoded secrets and credentials</li>
          <li>📊 Generates security reports</li>
          <li>⚙️ Can be integrated into CI/CD pipelines</li>
        </ul>
      </section>

      <section>
        <b>3. 🔹 Popular SAST Tools</b>

        <ul>
          <li>🔵 SonarQube</li>
          <li>🟢 Semgrep</li>
          <li>🔐 Checkmarx</li>
          <li>🛡️ Fortify</li>
          <li>🔎 Snyk Code</li>
          <li>⚙️ GitHub CodeQL</li>
          <li>🚀 GitLab SAST</li>
        </ul>
      </section>

      <section>
        <b>4. 🔹 SonarQube Setup</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Pull SonarQube Docker image

docker pull sonarqube:community

# Run SonarQube

docker run -d \\
  --name sonarqube \\
  -p 9000:9000 \\
  sonarqube:community

# Open SonarQube

http://localhost:9000

# Default login

Username: admin
Password: admin`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🔹 Configure Project</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Clone repository

git clone https://github.com/example/my-application.git

cd my-application

# Check project files

ls

# Example .NET project

MyApplication.sln
src/
tests/
README.md`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. 🔹 Install SonarScanner for .NET</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Install SonarScanner

dotnet tool install --global dotnet-sonarscanner

# Verify installation

dotnet sonarscanner --version`}
          </code>
        </pre>
      </section>

      <section>
        <b>7. 🔹 Run SAST Scan for .NET Application</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Begin SonarQube analysis

dotnet sonarscanner begin \\
  /k:"MyApplication" \\
  /d:sonar.host.url="http://localhost:9000" \\
  /d:sonar.token="YOUR_SONAR_TOKEN"

# Build application

dotnet build

# End analysis

dotnet sonarscanner end \\
  /d:sonar.token="YOUR_SONAR_TOKEN"`}
          </code>
        </pre>
      </section>

      <section>
        <b>8. 🔹 SAST Security Findings</b>

        <p>SAST tools can identify many types of security issues.</p>

        <ul>
          <li>🚨 SQL Injection</li>
          <li>🚨 Cross-Site Scripting (XSS)</li>
          <li>🚨 Command Injection</li>
          <li>🚨 Path Traversal</li>
          <li>🚨 Insecure Deserialization</li>
          <li>🚨 Weak Cryptography</li>
          <li>🚨 Hardcoded Passwords</li>
          <li>🚨 Hardcoded API Keys</li>
          <li>🚨 Sensitive Information Exposure</li>
          <li>🚨 Insecure Authentication</li>
          <li>🚨 Insecure Authorization</li>
          <li>🚨 Security Misconfiguration</li>
        </ul>
      </section>

      <section>
        <b>9. 🔹 Example of Vulnerable Code</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`// ❌ Vulnerable SQL query

string query =
    "SELECT * FROM Users WHERE Id = " + userId;

var result = connection.Execute(query);

// SAST can identify potential:
// SQL Injection vulnerability`}
          </code>
        </pre>
      </section>

      <section>
        <b>10. 🔹 Secure Code</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`// ✅ Parameterized query

string query =
    "SELECT * FROM Users WHERE Id = @Id";

var result = connection.Query(
    query,
    new { Id = userId }
);

// Parameterized queries help prevent
// SQL Injection`}
          </code>
        </pre>
      </section>

      <section>
        <b>11. 🔹 Detect Hardcoded Secrets</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`// ❌ Never store secrets in source code

string connectionString =
    "Server=db.example.com;Password=MyPassword123";

string apiKey =
    "sk-xxxxxxxxxxxxxxxx";

// SAST / secret scanning tools
// should detect these values`}
          </code>
        </pre>

        <p>
          Store secrets in secure services such as AWS Secrets Manager,
          AWS Systems Manager Parameter Store, Azure Key Vault, or another
          approved secrets-management platform.
        </p>
      </section>

      <section>
        <b>12. 🔹 Semgrep Setup</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Install Semgrep

python -m pip install semgrep

# Verify installation

semgrep --version

# Scan current project

semgrep scan

# Scan using security rules

semgrep scan --config auto`}
          </code>
        </pre>
      </section>

      <section>
        <b>13. 🔹 SAST in CI/CD Pipeline</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Example GitLab CI/CD

sast:
  stage: security

  script:
    - dotnet restore
    - dotnet sonarscanner begin
        /k:"MyApplication"
        /d:sonar.host.url="$SONAR_HOST_URL"
        /d:sonar.token="$SONAR_TOKEN"
    - dotnet build
    - dotnet sonarscanner end
        /d:sonar.token="$SONAR_TOKEN"

  artifacts:
    when: always
    paths:
      - reports/`}
          </code>
        </pre>
      </section>

      <section>
        <b>14. 🔹 SAST Security Gate</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Example security policy

Critical Vulnerability
        ↓
Pipeline FAILED

High Vulnerability
        ↓
Pipeline FAILED

Medium Vulnerability
        ↓
Warning / Review

Low Vulnerability
        ↓
Informational

# Example quality gate

Security Rating: A
Reliability Rating: A
Maintainability Rating: A

Coverage >= 80%
Duplications <= 3%`}
          </code>
        </pre>
      </section>

      <section>
        <b>15. 🔹 SAST with Pull Request</b>

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
Create Feature Branch
   ↓
Write Code
   ↓
Create Pull Request
   ↓
SAST Scan
   ↓
Security Review
   ↓
Quality Gate
   ↓
Code Review
   ↓
Merge
   ↓
Build & Deploy`}
          </code>
        </pre>
      </section>

      <section>
        <b>16. 🔹 SAST DevSecOps Pipeline</b>

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
Secret Scanning
   ↓
SAST
   ↓
SCA
   ↓
Unit Tests
   ↓
Build
   ↓
Container Scan
   ↓
Deploy to Test
   ↓
DAST
   ↓
Security Gate
   ↓
Production`}
          </code>
        </pre>
      </section>

      <section>
        <b>17. 🔹 SAST Best Practices</b>

        <ul>
          <li>✅ Run SAST on every Pull Request</li>
          <li>✅ Run SAST during CI/CD builds</li>
          <li>✅ Fail pipelines for Critical vulnerabilities</li>
          <li>✅ Do not hardcode passwords or API keys</li>
          <li>✅ Use secure coding standards</li>
          <li>✅ Review false positives before remediation</li>
          <li>✅ Track vulnerabilities until they are fixed</li>
          <li>✅ Keep SAST rules and tools updated</li>
          <li>✅ Combine SAST with SCA, DAST and container scanning</li>
        </ul>
      </section>

      <section>
        <b>18. 🔹 SAST vs DAST vs SCA</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`SAST
 ↓
Source Code
 ↓
Find coding vulnerabilities

SCA
 ↓
Third-Party Dependencies
 ↓
Find vulnerable libraries/packages

Container Scanning
 ↓
Docker Images
 ↓
Find OS/package vulnerabilities

DAST
 ↓
Running Application
 ↓
Find runtime vulnerabilities

DevSecOps
 ↓
SAST + SCA + Secrets
       +
Container Scan + DAST`}
          </code>
        </pre>
      </section>

      <section>
        <b>19. 🔹 Generate SAST Report</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# SAST report normally contains:

Vulnerability
Risk Level
File
Line Number
Rule
Description
Security Recommendation
CWE
OWASP Category

# Example

SQL Injection
Severity: Critical
File: UserRepository.cs
Line: 45

Recommendation:
Use parameterized queries.`}
          </code>
        </pre>
      </section>

      <section>
        <b>20. 🔹 Summary</b>

        <ul>
          <li>🔐 SAST analyzes application source code</li>
          <li>🔍 Vulnerabilities can be detected early in development</li>
          <li>🛡️ SonarQube, Semgrep, CodeQL and Snyk are popular tools</li>
          <li>🐛 SQL Injection, XSS and insecure coding can be detected</li>
          <li>🔑 Hardcoded secrets should be detected and removed</li>
          <li>⚙️ SAST can be integrated into CI/CD</li>
          <li>🚦 Security gates can prevent vulnerable code from being merged</li>
          <li>📊 Reports help developers remediate security issues</li>
          <li>🔐 SAST should be combined with SCA, DAST and container scanning</li>
        </ul>
      </section>
    </div>
  )
}
