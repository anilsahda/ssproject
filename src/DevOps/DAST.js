export default function DAST() {
  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
      }}
    >
      <h2>🛡️ DAST (Dynamic Application Security Testing)</h2>

      <section>
        <b>1. ✅ Prerequisites</b>
        <ul>
          <li>Web application or REST API running in a test environment</li>
          <li>Application URL accessible from the DAST tool</li>
          <li>OWASP ZAP or Burp Suite installed</li>
          <li>Test user credentials for authenticated scanning</li>
          <li>Network access to the application</li>
          <li>Permission to perform security testing</li>
        </ul>
      </section>

      <section>
        <b>2. 🔹 What is DAST?</b>
        <p>
          DAST (Dynamic Application Security Testing) tests a running
          application from the outside to identify security vulnerabilities.
          Unlike SAST, DAST does not require access to the application's
          source code.
        </p>

        <ul>
          <li>🌐 Tests running web applications</li>
          <li>🔌 Tests REST and API endpoints</li>
          <li>🔐 Tests authentication and authorization</li>
          <li>🛡️ Detects common OWASP vulnerabilities</li>
          <li>📊 Generates security reports</li>
        </ul>
      </section>

      <section>
        <b>3. 🔹 Install OWASP ZAP</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Download OWASP ZAP
# https://www.zaproxy.org/download/

# Linux installation example
wget https://github.com/zaproxy/zaproxy/releases/latest/download/ZAP_Linux.tar.gz

# Extract
tar -xvf ZAP_Linux.tar.gz

# Navigate to ZAP directory
cd ZAP_*

# Start ZAP
./zap.sh`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. 🔹 Start Application</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Example .NET application
dotnet run

# Application URL
http://localhost:5000

# Example API
http://localhost:5000/swagger`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🔹 Perform DAST Scan using OWASP ZAP</b>

        <p>Open OWASP ZAP and provide the target application URL.</p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Example target
http://localhost:5000

# ZAP performs:
# 1. Spider/Crawl
# 2. Passive scanning
# 3. Active scanning
# 4. Vulnerability detection
# 5. Security reporting`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. 🔹 DAST Scan using Docker</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Pull OWASP ZAP Docker image
docker pull zaproxy/zap-stable

# Run baseline scan
docker run --rm -t \\
  zaproxy/zap-stable zap-baseline.py \\
  -t http://host.docker.internal:5000

# Generate HTML report
docker run --rm -t \\
  -v $(pwd):/zap/wrk/:rw \\
  zaproxy/zap-stable zap-baseline.py \\
  -t http://host.docker.internal:5000 \\
  -r zap-report.html`}
          </code>
        </pre>
      </section>

      <section>
        <b>7. 🔹 Scan REST APIs</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Example OpenAPI / Swagger specification
http://localhost:5000/swagger/v1/swagger.json

# Import OpenAPI specification into OWASP ZAP

# Example API endpoints
GET    /api/users
GET    /api/users/{id}
POST   /api/users
PUT    /api/users/{id}
DELETE /api/users/{id}

# Test for:
# Authentication
# Authorization
# Injection
# Sensitive data exposure
# Broken access control`}
          </code>
        </pre>
      </section>

      <section>
        <b>8. 🔹 Authentication Testing</b>

        <p>
          Configure authenticated scanning when the application requires
          login.
        </p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Test authenticated endpoints

POST /api/auth/login

# Example request
{
  "username": "testuser",
  "password": "********"
}

# Verify authenticated APIs
GET /api/dashboard
GET /api/profile
GET /api/orders

# Verify unauthenticated access is blocked
GET /api/admin/users`}
          </code>
        </pre>
      </section>

      <section>
        <b>9. 🔹 Common Vulnerabilities Detected by DAST</b>

        <ul>
          <li>🚨 SQL Injection</li>
          <li>🚨 Cross-Site Scripting (XSS)</li>
          <li>🚨 Cross-Site Request Forgery (CSRF)</li>
          <li>🚨 Broken Authentication</li>
          <li>🚨 Broken Access Control</li>
          <li>🚨 Security Misconfiguration</li>
          <li>🚨 Missing Security Headers</li>
          <li>🚨 Sensitive Data Exposure</li>
          <li>🚨 Insecure Cookies</li>
          <li>🚨 Server Information Disclosure</li>
          <li>🚨 Weak TLS/SSL Configuration</li>
        </ul>
      </section>

      <section>
        <b>10. 🔹 DAST with Burp Suite</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Start Burp Suite

# Configure browser proxy
127.0.0.1:8080

# Browse application through Burp

# Burp can capture:
GET /api/users
POST /api/login
PUT /api/orders/1
DELETE /api/orders/1

# Use:
Proxy
Repeater
Intruder
Scanner
HTTP History`}
          </code>
        </pre>
      </section>

      <section>
        <b>11. 🔹 DAST in CI/CD Pipeline</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Example GitLab CI/CD DAST

dast:
  stage: security
  image: zaproxy/zap-stable
  script:
    - zap-baseline.py
        -t http://application:5000
        -r zap-report.html
  artifacts:
    paths:
      - zap-report.html`}
          </code>
        </pre>
      </section>

      <section>
        <b>12. 🔹 DAST Security Gates</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Example security policy

Critical   -> Pipeline FAILED
High       -> Pipeline FAILED
Medium     -> Warning / Review
Low        -> Informational

# Recommended DevSecOps flow

Build
  ↓
Unit Test
  ↓
SAST
  ↓
SCA
  ↓
Build Docker Image
  ↓
Deploy to Test Environment
  ↓
DAST
  ↓
Security Gate
  ↓
Production Deployment`}
          </code>
        </pre>
      </section>

      <section>
        <b>13. 🔹 Generate DAST Report</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>
{`# Generate HTML report

zap-baseline.py \\
  -t http://localhost:5000 \\
  -r dast-report.html

# Report contains:
# Vulnerability
# Risk Level
# URL
# Evidence
# Description
# Recommendation
# CWE / OWASP Reference`}
          </code>
        </pre>
      </section>

      <section>
        <b>14. 🔹 DAST Best Practices</b>

        <ul>
          <li>✅ Run DAST against a dedicated test/staging environment</li>
          <li>✅ Never run aggressive scans against production without authorization</li>
          <li>✅ Configure authenticated scanning for protected APIs</li>
          <li>✅ Include API endpoints in security testing</li>
          <li>✅ Store DAST reports as CI/CD artifacts</li>
          <li>✅ Configure security gates for Critical and High findings</li>
          <li>✅ Track vulnerabilities until remediation</li>
          <li>✅ Combine DAST with SAST, SCA and container scanning</li>
        </ul>
      </section>

      <section>
        <b>15. 🔹 DAST vs SAST</b>

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
Tests source code
 ↓
Finds coding-level vulnerabilities

DAST
 ↓
Tests running application
 ↓
Finds runtime vulnerabilities

SCA
 ↓
Tests third-party dependencies
 ↓
Finds vulnerable libraries

Container Scanning
 ↓
Tests Docker/container images
 ↓
Finds OS/package vulnerabilities

DevSecOps Security
 ↓
SAST + SCA + Secrets + Container Scan + DAST`}
          </code>
        </pre>
      </section>

      <section>
        <b>16. 🔹 Summary</b>

        <ul>
          <li>🛡️ DAST tests applications while they are running</li>
          <li>🌐 Web applications and APIs can be scanned</li>
          <li>🔐 Authenticated security testing can be configured</li>
          <li>🔎 OWASP ZAP and Burp Suite are commonly used tools</li>
          <li>📊 Security reports can be generated automatically</li>
          <li>⚙️ DAST can be integrated into CI/CD pipelines</li>
          <li>🚦 Security gates can prevent vulnerable releases</li>
          <li>🔐 DAST should be combined with SAST, SCA and container scanning</li>
        </ul>
      </section>
    </div>
  )
}
