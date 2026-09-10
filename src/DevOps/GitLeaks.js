export default function GitLeaks() {
  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
      }}
    >
      <h2>🔑 GitLeaks – Secret Detection</h2>

      <section>
        <b>1. ✅ Prerequisites</b>
        <ul>
          <li>Git installed and configured</li>
          <li>Git repository available</li>
          <li>GitLeaks installed</li>
          <li>Access to the source-code repository</li>
          <li>CI/CD pipeline for automated scanning</li>
        </ul>
      </section>

      <section>
        <b>2. 🔹 What is GitLeaks?</b>

        <p>
          GitLeaks is an open-source secret scanning tool that detects
          credentials and sensitive information accidentally committed to
          source-code repositories.
        </p>

        <ul>
          <li>🔑 API keys</li>
          <li>🔐 Passwords</li>
          <li>🪪 Access tokens</li>
          <li>☁️ Cloud credentials</li>
          <li>🔒 Private keys</li>
          <li>🗄️ Database connection strings</li>
          <li>🎫 Authentication tokens</li>
        </ul>
      </section>

      <section>
        <b>3. 🔹 Install GitLeaks</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Windows using winget

winget install gitleaks

# Verify installation

gitleaks version

# Linux example

curl -sSfL \\
  https://raw.githubusercontent.com/gitleaks/gitleaks/master/install.sh \\
  | sh

# Verify

gitleaks version`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. 🔹 Clone Git Repository</b>

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

# Navigate to project

cd my-application

# Check Git status

git status`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🔹 Scan Current Repository</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Scan current repository

gitleaks detect

# Scan repository and show verbose output

gitleaks detect --verbose

# Scan and return non-zero exit code
# when secrets are detected

gitleaks detect --exit-code 1`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. 🔹 Scan Git History</b>

        <p>
          GitLeaks can scan previous commits because a secret may remain in
          Git history even after it has been removed from the latest source
          code.
        </p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Scan Git repository history

gitleaks git .

# Verbose scan

gitleaks git . --verbose

# Scan complete history

gitleaks git . --log-opts="--all"`}
          </code>
        </pre>
      </section>

      <section>
        <b>7. 🔹 Example of Hardcoded Secret</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`// ❌ NEVER commit credentials

string awsAccessKey =
    "AKIAxxxxxxxxxxxxxxxx";

string awsSecretKey =
    "xxxxxxxxxxxxxxxxxxxxxxxx";

string apiKey =
    "sk-xxxxxxxxxxxxxxxx";

string connectionString =
    "Server=db.example.com;" +
    "User=admin;" +
    "Password=MyPassword123";`}
          </code>
        </pre>
      </section>

      <section>
        <b>8. 🔹 Scan for Secrets</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Scan repository

gitleaks detect --source .

# Scan Git history

gitleaks git .

# Example findings

AWS Access Key
API Token
Private Key
Database Password
JWT Secret
GitHub Token`}
          </code>
        </pre>
      </section>

      <section>
        <b>9. 🔹 Generate JSON Report</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Generate JSON report

gitleaks detect \\
  --source . \\
  --report-format json \\
  --report-path gitleaks-report.json

# Report contains

Finding
Secret Type
File
Line
Commit
Author
Date
Rule ID`}
          </code>
        </pre>
      </section>

      <section>
        <b>10. 🔹 Generate SARIF Report</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Generate SARIF report

gitleaks detect \\
  --source . \\
  --report-format sarif \\
  --report-path gitleaks.sarif

# SARIF can be consumed by
# security platforms and code-scanning tools.`}
          </code>
        </pre>
      </section>

      <section>
        <b>11. 🔹 Configure GitLeaks Rules</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Create configuration file

.gitleaks.toml

# Example

title = "GitLeaks Configuration"

[extend]
useDefault = true

[[rules]]
id = "internal-api-key"

description = "Internal API Key"

regex = '''(?i)internal[_-]?api[_-]?key['"]?\\s*[:=]\\s*['"][a-zA-Z0-9]+'''

tags = ["api", "key"]`}
          </code>
        </pre>
      </section>

      <section>
        <b>12. 🔹 Ignore False Positives</b>

        <p>
          Sometimes GitLeaks can report values that are not real secrets.
          These findings should be reviewed carefully before being ignored.
        </p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Example .gitleaksignore

# Ignore a specific finding

abc123456789

# Do NOT blindly ignore secrets.

# Verify that the finding is actually
# a false positive before adding it.`}
          </code>
        </pre>
      </section>

      <section>
        <b>13. 🔹 Git Pre-Commit Hook</b>

        <p>
          GitLeaks can be used before code is committed so that developers
          can detect secrets early.
        </p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Example workflow

Developer writes code
        ↓
git add .
        ↓
GitLeaks scan
        ↓
Secret detected?
     /       \\
   YES       NO
    ↓         ↓
BLOCK      git commit

# Example command

gitleaks protect --staged`}
          </code>
        </pre>
      </section>

      <section>
        <b>14. 🔹 GitLeaks in GitLab CI/CD</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`gitleaks:
  stage: security

  image:
    name: zricethezav/gitleaks:latest
    entrypoint: [""]

  script:
    - gitleaks detect
        --source .
        --verbose
        --exit-code 1

  artifacts:
    when: always
    paths:
      - gitleaks-report.json`}
          </code>
        </pre>
      </section>

      <section>
        <b>15. 🔹 GitLeaks in GitHub Actions</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`name: Secret Scan

on:
  push:
  pull_request:

jobs:
  gitleaks:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: GitLeaks Scan
        uses: gitleaks/gitleaks-action@v2`}
          </code>
        </pre>
      </section>

      <section>
        <b>16. 🔹 GitLeaks Security Gate</b>

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
GitLeaks Scan
    ↓
Secret Found?
   /       \\
 YES       NO
  ↓         ↓
FAIL      Continue
Pipeline    ↓
           SAST
             ↓
            SCA
             ↓
       Container Scan
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
        <b>17. 🔹 What to Do When a Secret is Detected?</b>

        <ol>
          <li>🚨 Stop the deployment or pipeline.</li>
          <li>🔍 Identify the type of exposed credential.</li>
          <li>🔐 Immediately revoke or rotate the credential.</li>
          <li>🧹 Remove the secret from source code.</li>
          <li>📜 Check Git history for additional exposure.</li>
          <li>🔎 Check whether the secret was accessed or misused.</li>
          <li>☁️ Move the secret to a secrets-management system.</li>
          <li>✅ Re-run GitLeaks and security scans.</li>
        </ol>
      </section>

      <section>
        <b>18. 🔹 Secure Secret Management</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`❌ Bad Practice

Source Code
    ↓
API Key / Password
    ↓
Git Repository

✅ Good Practice

Application
    ↓
Secrets Manager
    ↓
Secret

Examples:

AWS Secrets Manager
AWS Systems Manager Parameter Store
Azure Key Vault
HashiCorp Vault`}
          </code>
        </pre>
      </section>

      <section>
        <b>19. 🔹 GitLeaks Best Practices</b>

        <ul>
          <li>✅ Run GitLeaks on every Pull Request</li>
          <li>✅ Scan the complete Git history periodically</li>
          <li>✅ Use pre-commit secret scanning</li>
          <li>✅ Fail CI/CD pipelines when real secrets are detected</li>
          <li>✅ Rotate exposed credentials immediately</li>
          <li>✅ Never store passwords in source code</li>
          <li>✅ Never commit cloud access keys</li>
          <li>✅ Use a centralized secrets-management solution</li>
          <li>✅ Review false positives carefully</li>
          <li>✅ Keep GitLeaks rules updated</li>
        </ul>
      </section>

      <section>
        <b>20. 🔹 GitLeaks in DevSecOps</b>

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
GitLeaks / Secret Scan
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
Production

Security Layers

GitLeaks  → Secrets
SAST      → Source Code
SCA       → Dependencies
Container → Images
DAST      → Running Application`}
          </code>
        </pre>
      </section>

      <section>
        <b>21. 🔹 Summary</b>

        <ul>
          <li>🔑 GitLeaks detects secrets in Git repositories</li>
          <li>🔍 It can scan source code and Git history</li>
          <li>🚨 API keys, passwords and tokens can be detected</li>
          <li>⚙️ GitLeaks can run as a pre-commit check</li>
          <li>🚀 GitLeaks can be integrated into CI/CD pipelines</li>
          <li>🚦 Security gates can prevent secret exposure</li>
          <li>🔐 Exposed credentials should be revoked and rotated immediately</li>
          <li>☁️ Secrets should be stored in a dedicated secrets-management system</li>
          <li>🛡️ GitLeaks is an important part of a DevSecOps security pipeline</li>
        </ul>
      </section>
    </div>
  )
}
