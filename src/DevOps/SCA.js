export default function SCA() {
  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
      }}
    >
      <h2>📦 Software Composition Analysis (SCA)</h2>

      <section>
        <b>1. What is SCA?</b>
        <p>
          SCA stands for <strong>Software Composition Analysis</strong>. It is a
          security practice used to identify vulnerabilities, outdated
          dependencies, license risks, and security issues in third-party and
          open-source libraries used by an application.
        </p>

        <p>
          Modern applications depend heavily on open-source packages. SCA
          automatically analyzes these dependencies and compares them against
          vulnerability databases.
        </p>

        <ul>
          <li>Detect vulnerable open-source libraries</li>
          <li>Identify outdated packages</li>
          <li>Detect vulnerable transitive dependencies</li>
          <li>Identify license compliance issues</li>
          <li>Generate Software Bill of Materials (SBOM)</li>
          <li>Prevent vulnerable dependencies from reaching production</li>
        </ul>
      </section>

      <section>
        <b>2. Why SCA is Important in DevSecOps?</b>

        <p>
          Developers commonly use hundreds of open-source packages. A single
          vulnerable dependency can introduce a security risk into the entire
          application.
        </p>

        <ul>
          <li>Find vulnerabilities early</li>
          <li>Reduce supply-chain attacks</li>
          <li>Improve open-source security</li>
          <li>Track dependency versions</li>
          <li>Maintain license compliance</li>
          <li>Protect production applications</li>
        </ul>
      </section>

      <section>
        <b>3. Common SCA Tools</b>

        <ul>
          <li>OWASP Dependency-Check</li>
          <li>Snyk Open Source</li>
          <li>GitLab Dependency Scanning</li>
          <li>GitHub Dependabot</li>
          <li>Trivy</li>
          <li>Mend</li>
          <li>JFrog Xray</li>
          <li>Sonatype Nexus IQ</li>
          <li>Black Duck</li>
        </ul>
      </section>

      <section>
        <b>4. SCA for .NET Applications</b>

        <p>
          .NET applications commonly use NuGet packages. SCA tools analyze
          <strong> .csproj</strong>, <strong>packages.lock.json</strong>, and
          other dependency information to identify vulnerable packages.
        </p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`<PackageReference Include="Newtonsoft.Json" Version="13.0.1" />
<PackageReference Include="Serilog" Version="3.1.1" />
<PackageReference Include="Dapper" Version="2.1.35" />`}</code>
        </pre>
      </section>

      <section>
        <b>5. Check .NET Vulnerable Packages</b>

        <p>Run the following command inside your .NET project:</p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`dotnet list package --vulnerable`}</code>
        </pre>

        <p>
          This checks project dependencies for known security vulnerabilities.
        </p>
      </section>

      <section>
        <b>6. Check Outdated Packages</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`dotnet list package --outdated`}</code>
        </pre>

        <p>
          This helps identify dependencies that have newer versions available.
        </p>
      </section>

      <section>
        <b>7. Install OWASP Dependency-Check</b>

        <p>
          OWASP Dependency-Check is a popular SCA tool that identifies known
          vulnerabilities in third-party dependencies.
        </p>

        <p>
          Download and install Dependency-Check from the official OWASP
          distribution.
        </p>

        <p>After installation, verify it:</p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`dependency-check.sh --version`}</code>
        </pre>

        <p>On Windows:</p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`dependency-check.bat --version`}</code>
        </pre>
      </section>

      <section>
        <b>8. Run OWASP Dependency-Check</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`dependency-check.sh \\
  --project "MyApplication" \\
  --scan . \\
  --format HTML \\
  --out reports`}</code>
        </pre>

        <p>
          The generated report can be opened in a browser to review vulnerable
          dependencies.
        </p>
      </section>

      <section>
        <b>9. SCA for Node.js / React Applications</b>

        <p>
          React and Node.js applications normally use npm packages defined in
          <strong> package.json</strong>.
        </p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`{
  "dependencies": {
    "react": "^18.3.1",
    "axios": "^1.7.0",
    "express": "^4.19.2"
  }
}`}</code>
        </pre>

        <p>Run:</p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`npm audit`}</code>
        </pre>

        <p>For production dependency vulnerabilities:</p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`npm audit --omit=dev`}</code>
        </pre>
      </section>

      <section>
        <b>10. Fix Vulnerable npm Packages</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`npm audit fix`}</code>
        </pre>

        <p>
          After upgrading packages, developers should run unit tests,
          integration tests, and security scans again.
        </p>
      </section>

      <section>
        <b>11. Snyk Open Source</b>

        <p>
          Snyk can scan application dependencies and identify vulnerabilities
          across multiple programming languages.
        </p>

        <p>Install the Snyk CLI and authenticate:</p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`snyk auth`}</code>
        </pre>

        <p>Scan the project:</p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`snyk test`}</code>
        </pre>

        <p>Monitor the project continuously:</p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`snyk monitor`}</code>
        </pre>
      </section>

      <section>
        <b>12. SCA with Trivy</b>

        <p>
          Trivy can also scan application dependencies and identify known
          vulnerabilities.
        </p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`trivy fs .`}</code>
        </pre>

        <p>Scan only high and critical vulnerabilities:</p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`trivy fs --severity HIGH,CRITICAL .`}</code>
        </pre>
      </section>

      <section>
        <b>13. Generate SCA JSON Report</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`trivy fs \
  --format json \
  --output sca-report.json \
  .`}</code>
        </pre>
      </section>

      <section>
        <b>14. Generate SBOM</b>

        <p>
          SBOM stands for <strong>Software Bill of Materials</strong>. It
          provides an inventory of software components used by an application.
        </p>

        <p>Using Trivy:</p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`trivy fs \
  --format cyclonedx \
  --output sbom.json \
  .`}</code>
        </pre>

        <p>SBOM can be used for:</p>

        <ul>
          <li>Dependency inventory</li>
          <li>Vulnerability management</li>
          <li>Software supply-chain security</li>
          <li>License management</li>
          <li>Compliance auditing</li>
        </ul>
      </section>

      <section>
        <b>15. Vulnerability Severity</b>

        <p>SCA tools normally classify vulnerabilities based on severity.</p>

        <ul>
          <li><strong>LOW</strong> - Low security impact</li>
          <li><strong>MEDIUM</strong> - Moderate security impact</li>
          <li><strong>HIGH</strong> - Significant security risk</li>
          <li><strong>CRITICAL</strong> - Severe security risk</li>
        </ul>

        <p>
          DevSecOps pipelines should normally prevent deployment when critical
          vulnerabilities are detected, according to the organization's risk
          policy.
        </p>
      </section>

      <section>
        <b>16. SCA Security Gate</b>

        <p>
          SCA should be integrated into CI/CD so that vulnerable dependencies
          are detected before production deployment.
        </p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`Developer
    ↓
Git Commit
    ↓
Build
    ↓
Unit Tests
    ↓
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
Deploy`}</code>
        </pre>
      </section>

      <section>
        <b>17. GitLab CI/CD SCA Example</b>

        <p>
          Example using Trivy filesystem scanning:
        </p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`sca:
  stage: security
  image:
    name: aquasec/trivy:latest
    entrypoint: [""]
  script:
    - trivy fs --severity HIGH,CRITICAL --exit-code 1 .
  allow_failure: false`}</code>
        </pre>

        <p>
          If the configured vulnerabilities are found, the pipeline can fail
          and prevent the application from moving to the next stage.
        </p>
      </section>

      <section>
        <b>18. GitHub Actions SCA Example</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`name: SCA Scan

on:
  push:
  pull_request:

jobs:
  sca:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Run Trivy
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: fs
          severity: HIGH,CRITICAL
          exit-code: '1'`}</code>
        </pre>
      </section>

      <section>
        <b>19. Dependency Scanning in Pull Requests</b>

        <p>
          SCA should run automatically whenever developers create or update a
          pull request.
        </p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`Pull Request
      ↓
Build
      ↓
SAST
      ↓
SCA
      ↓
Container Scan
      ↓
Security Review
      ↓
Merge`}</code>
        </pre>

        <p>
          This prevents vulnerable dependencies from being merged into the
          main branch.
        </p>
      </section>

      <section>
        <b>20. Transitive Dependencies</b>

        <p>
          A major advantage of SCA is identifying vulnerabilities in
          dependencies that your application does not directly reference.
        </p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`Application
    ↓
Package A
    ↓
Package B
    ↓
Package C
    ↓
Vulnerable Library`}</code>
        </pre>

        <p>
          Even if the application does not directly install Package C, a
          vulnerable transitive dependency can still create a security risk.
        </p>
      </section>

      <section>
        <b>21. License Scanning</b>

        <p>
          SCA is also useful for identifying open-source license risks.
        </p>

        <ul>
          <li>MIT</li>
          <li>Apache 2.0</li>
          <li>BSD</li>
          <li>GPL</li>
          <li>LGPL</li>
          <li>AGPL</li>
        </ul>

        <p>
          Organizations can define which licenses are allowed or prohibited
          according to their legal and business requirements.
        </p>
      </section>

      <section>
        <b>22. Vulnerable Dependency Example</b>

        <p>Example:</p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`Package: Example.Library
Current Version: 1.2.0
Severity: HIGH
Vulnerability: Known CVE
Fixed Version: 1.2.5`}</code>
        </pre>

        <p>Recommended action:</p>

        <ul>
          <li>Upgrade to the fixed version</li>
          <li>Run automated tests</li>
          <li>Run SAST again</li>
          <li>Run SCA again</li>
          <li>Review application compatibility</li>
          <li>Deploy only after the security gate passes</li>
        </ul>
      </section>

      <section>
        <b>23. SCA with Docker Images</b>

        <p>
          SCA should also be performed against the dependencies included in
          container images.
        </p>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`docker build -t myapp:1.0 .

trivy image --severity HIGH,CRITICAL myapp:1.0`}</code>
        </pre>
      </section>

      <section>
        <b>24. SCA Best Practices</b>

        <ul>
          <li>Scan dependencies on every pull request</li>
          <li>Keep dependencies up to date</li>
          <li>Remove unused packages</li>
          <li>Monitor transitive dependencies</li>
          <li>Generate and maintain SBOMs</li>
          <li>Track vulnerabilities continuously</li>
          <li>Define severity-based security gates</li>
          <li>Review open-source licenses</li>
          <li>Use automated dependency updates where appropriate</li>
          <li>Re-scan applications regularly</li>
          <li>Do not ignore critical vulnerabilities without risk approval</li>
        </ul>
      </section>

      <section>
        <b>25. SAST vs SCA vs DAST</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`SAST
 ↓
Analyzes Source Code

SCA
 ↓
Analyzes Third-Party Dependencies

DAST
 ↓
Analyzes Running Application`}</code>
        </pre>

        <ul>
          <li>
            <strong>SAST:</strong> Finds vulnerabilities in application source
            code.
          </li>
          <li>
            <strong>SCA:</strong> Finds vulnerabilities in open-source and
            third-party dependencies.
          </li>
          <li>
            <strong>DAST:</strong> Finds vulnerabilities in a running
            application.
          </li>
        </ul>
      </section>

      <section>
        <b>26. Complete DevSecOps Security Pipeline</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`Developer
    ↓
Git
    ↓
GitLeaks
    ↓
Build
    ↓
SAST
    ↓
SCA
    ↓
Unit Tests
    ↓
Docker Build
    ↓
Trivy Container Scan
    ↓
Deploy to Test
    ↓
DAST
    ↓
Security Gate
    ↓
Production
    ↓
Continuous Monitoring`}</code>
        </pre>
      </section>

      <section>
        <b>27. SCA Tools Comparison</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`OWASP Dependency-Check
    ↓
Open-source dependency vulnerability scanning

Snyk
    ↓
Dependency + container + developer security

Trivy
    ↓
Dependency + container + filesystem + IaC + SBOM

Dependabot
    ↓
Automated dependency updates

GitLab Dependency Scanning
    ↓
CI/CD integrated dependency security`}</code>
        </pre>
      </section>

      <section>
        <b>28. Enterprise SCA Architecture</b>

        <pre
          style={{
            background: '#f5f5f5',
            padding: '1rem',
            overflowX: 'auto',
          }}
        >
          <code>{`Developer
    ↓
Git Repository
    ↓
CI/CD Pipeline
    ↓
+-----------------------+
| GitLeaks              |
| SAST                  |
| SCA                   |
| Container Scan        |
| IaC Scan              |
+-----------------------+
    ↓
Security Gate
    ↓
Artifact Repository
    ↓
Deployment
    ↓
Production
    ↓
Continuous Monitoring`}</code>
        </pre>
      </section>

      <section>
        <b>29. SCA Training Practice</b>

        <p>Create a sample application and perform the following:</p>

        <ol>
          <li>Create a .NET or Node.js application.</li>
          <li>Add multiple third-party dependencies.</li>
          <li>Run dependency vulnerability scanning.</li>
          <li>Identify vulnerable packages.</li>
          <li>Upgrade vulnerable packages.</li>
          <li>Generate an SCA report.</li>
          <li>Generate an SBOM.</li>
          <li>Configure a CI/CD security gate.</li>
          <li>Build a Docker image.</li>
          <li>Scan the Docker image using Trivy.</li>
          <li>Configure the pipeline to fail on HIGH/CRITICAL findings.</li>
        </ol>
      </section>

      <section>
        <b>30. Summary</b>

        <ul>
          <li>SCA means Software Composition Analysis.</li>
          <li>SCA analyzes open-source and third-party dependencies.</li>
          <li>It identifies known vulnerabilities and outdated packages.</li>
          <li>SCA can detect transitive dependency vulnerabilities.</li>
          <li>SCA can help with open-source license compliance.</li>
          <li>SBOM provides an inventory of application components.</li>
          <li>Trivy, Snyk, OWASP Dependency-Check and Dependabot are popular options.</li>
          <li>SCA should be integrated into CI/CD pipelines.</li>
          <li>Critical security findings should be handled before production.</li>
          <li>SCA is an important part of a complete DevSecOps security pipeline.</li>
        </ul>
      </section>
    </div>
  )
}
